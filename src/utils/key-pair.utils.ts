import environment from "../environments/environment";
import dbUtils from "./db.utils";
import deviceUtil from "./device.util";

// Generate a pair of public and private keys
function generateKeyPair() {
    return new Promise<{ publicKey: string, privateKey: string, serverPublicKey: string }>((resolve, reject) => {
        try {
            // Create RSA-OAEP keys
            window.crypto.subtle.generateKey(
                {
                    name: "RSA-OAEP",
                    modulusLength: 2048,
                    publicExponent: new Uint8Array([1, 0, 1]),
                    hash: "SHA-256",
                },
                true, // Keys are exportable
                ["encrypt", "decrypt"] // Key usage
            )
                .then((keyPair) => {
                    // Export public and private keys
                    return Promise.all([
                        window.crypto.subtle.exportKey("spki", keyPair.publicKey),
                        window.crypto.subtle.exportKey("pkcs8", keyPair.privateKey),
                    ]);
                })
                .then(([publicKey, privateKey]) => {
                    // Convert keys to Base64 format
                    return {
                        publicKey: btoa(String.fromCharCode(...new Uint8Array(publicKey))),
                        privateKey: btoa(String.fromCharCode(...new Uint8Array(privateKey))),
                    };
                })
                .then(({ publicKey, privateKey }) => {
                    // Share public key with the server
                    return exchangePublicKey(publicKey)
                        .then(({ publicKey: serverPublicKey }) => {
                            resolve({
                                publicKey,
                                privateKey,
                                serverPublicKey,
                            });
                        });
                })
                .catch(reject); // Handle errors
        } catch (err) {
            reject(err); // Catch unexpected errors
        }
    });
}

// Exchange local public key with the server
function exchangePublicKey(localPublicKey: string) {
    return new Promise<{ publicKey: string }>((resolve, reject) => {
        try {
            // Send local public key to the server
            fetch(new URL("/exchange-info", environment.backend), {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ 
                    id_app_device: deviceUtil.id_app_device_data,
                    public_key: localPublicKey,
                }),
            })
                .then((response) => {
                    if (response.status == 200) {
                        return response.json();
                    } else {
                        throw new Error("Request failed with status " + response.status);
                    }
                })
                .then((data) => {
                    const clearPublicKey = data.public_key
                        .replace(/-----BEGIN PUBLIC KEY-----/g, "")
                        .replace(/-----END PUBLIC KEY-----/g, "")
                        .replace(/\r/g, "")
                        .replace(/\n/g, "");

                    resolve({ publicKey: clearPublicKey }); // Server's public key
                })
                .catch(reject); // Handle request errors
        } catch (err) {
            reject(err); // Handle unexpected errors
        }
    });
}

function importCryptoKey(
    keyBase64: string,
    keyType: "spki" | "pkcs8", // Specify key type: "spki" for public keys, "pkcs8" for private keys
    usage: KeyUsage[] // Specify allowed usages: e.g., ["encrypt"] or ["decrypt"]
): Promise<CryptoKey> {
    return new Promise<CryptoKey>((resolve, reject) => {
        try {
            // Check if the key is already imported
            if (keysImported[keyBase64]) {
                return resolve(keysImported[keyBase64]);
            }

            // If there are pending import requests for the same key, queue the current request
            if (importingKeys[keyBase64]?.length) {
                return importingKeys[keyBase64].push({ resolve, reject });
            }

            // Initialize the queue for this key
            importingKeys[keyBase64] = [{ resolve, reject }];

            // Decode the Base64-encoded key
            const keyBuffer = Uint8Array.from(atob(keyBase64), c => c.charCodeAt(0));

            // Import the key with the specified type and usage
            window.crypto.subtle.importKey(
                keyType, // Either "spki" or "pkcs8"
                keyBuffer, // The key buffer
                { name: "RSA-OAEP", hash: "SHA-256" }, // Algorithm and hash settings
                true, // Key is extractable (optional)
                usage // Define usage: e.g., "encrypt" for public keys or "decrypt" for private keys
            )
                .then((key) => {
                    // Cache the imported key
                    keysImported[keyBase64] = key;

                    // Resolve all queued requests for this key
                    const pendingRequests = importingKeys[keyBase64] || [];
                    delete importingKeys[keyBase64];
                    pendingRequests.forEach((request) => request.resolve(key));
                })
                .catch((err) => {
                    // Reject all queued requests in case of an error
                    const pendingRequests = importingKeys[keyBase64] || [];
                    delete importingKeys[keyBase64];
                    pendingRequests.forEach((request) => request.reject(err));
                });
        } catch (err) {
            reject(err); // Handle unexpected errors
        }
    });
}

// Define types for caching and queue management
const keysImported: Record<string, CryptoKey> = {}; // Cache for imported keys
const importingKeys: Record<
    string,
    { resolve: (key: CryptoKey) => void; reject: (err: unknown) => void }[]
> = {};

let generatingKeyPair: {
    resolve: (data: { privateKey: string, publicKey: string, serverPublicKey: string }) => void,
    reject: (err: unknown) => void;
}[] = [];

// Utility for managing and retrieving key pairs
export default {
    getKeyPair() {
        return new Promise<{ publicKey: string, privateKey: string, serverPublicKey: string }>((resolve, reject) => {
            try {
                // Access the "key-pair" table in the database
                dbUtils.getTable("key-pair")
                    .then((table) => {
                        return table.findOne()
                            .then((keyPair) => {
                                if (keyPair) {
                                    // Return existing keys if found
                                    return resolve({
                                        privateKey: keyPair.privateKey,
                                        publicKey: keyPair.publicKey,
                                        serverPublicKey: keyPair.serverPublicKey,
                                    });
                                }

                                if (!generatingKeyPair.length) {
                                    // Generate new keys if not found
                                    generateKeyPair()
                                        .then((data) => {
                                            return table.delete()
                                                .then(() => table.insert(data))
                                                .then(() => data);
                                        })
                                        .then((data) => {
                                            // Resolve all pending requests with new keys
                                            const generatingKeyPairTemp = generatingKeyPair;
                                            generatingKeyPair = [];
                                            generatingKeyPairTemp.forEach((gItem) => {
                                                gItem.resolve(data);
                                            });
                                        })
                                        .catch((err) => {
                                            // Reject all pending requests on error
                                            const generatingKeyPairTemp = generatingKeyPair;
                                            generatingKeyPair = [];
                                            generatingKeyPairTemp.forEach((gItem) => {
                                                gItem.reject(err);
                                            });
                                        });
                                }

                                // Add current request to the queue
                                generatingKeyPair.push({ resolve, reject });
                            });
                    })
                    .catch(reject); // Handle database errors
            } catch (err) {
                reject(err); // Handle unexpected errors
            }
        });
    },
    encryptDataWithServerPublicKey(data: string) {
        return new Promise<string>((resolve, reject) => {
            try {
                this.getKeyPair()
                    .then(({ serverPublicKey }) => {
                        return importCryptoKey(serverPublicKey, "spki", ["encrypt"]);
                    })
                    .then((publicKey) => {
                        // Encode the data into a byte array
                        const encodedData = new TextEncoder().encode(data);

                        // Encrypt the data using the backend's public key
                        window.crypto.subtle.encrypt(
                            { name: "RSA-OAEP" }, // Algorithm settings
                            publicKey, // The imported public key
                            encodedData // Data to encrypt
                        )
                            .then((encryptedData) => {
                                // Convert the encrypted data to Base64 for transport
                                resolve(btoa(String.fromCharCode(...new Uint8Array(encryptedData))));
                            })
                            .catch(reject);
                    })
                    .catch(reject);
            }
            catch (err) {
                reject(err);
            }
        });
    },
    decryptDataWithPrivateKey(encryptedDataBase64: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            try {
                // Import the private key using the generic importCryptoKey function
                this.getKeyPair()
                    .then(({ privateKey }) => importCryptoKey(privateKey, "pkcs8", ["decrypt"]))
                    .then((privateKey) => {
                        // Decode the encrypted data from Base64 to a Uint8Array
                        const encryptedDataBuffer = Uint8Array.from(
                            atob(encryptedDataBase64),
                            (c) => c.charCodeAt(0)
                        );
    
                        // Decrypt the data using the private key
                        return window.crypto.subtle.decrypt(
                            { name: "RSA-OAEP" }, // Algorithm settings
                            privateKey, // Imported private key
                            encryptedDataBuffer // Encrypted data
                        );
                    })
                    .then((decryptedDataBuffer) => {
                        // Convert the decrypted ArrayBuffer back to a string
                        const decryptedData = new TextDecoder().decode(decryptedDataBuffer);
                        resolve(decryptedData); // Return the decrypted data as a string
                    })
                    .catch(reject); // Handle decryption errors
            } catch (err) {
                reject(err); // Handle unexpected errors
            }
        });
    }    
};
