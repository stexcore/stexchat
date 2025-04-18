import environment from "../environments/environment"
import keyPairUtils from "./key-pair.utils"

interface IFetchOptionsHttp {
    data?: any,
    headers?: Record<string, string>,
    method?: string,
    signal?: AbortSignal
}

export default {

    async fetch(path: string, options: IFetchOptionsHttp) {
        // Url Real
        const url = new URL(path, environment.backend);
        // Encrypt body
        const body = await keyPairUtils.encryptDataWithServerPublicKey(JSON.stringify({
            path: url.pathname,
            method: options.method || "GET",
            headers: options.headers,
            data: JSON.stringify(options.data ?? null),
        }));

        // Send Request HTTP
        const response = await fetch(new URL("/", url), {
            headers: {
                "Content-Type": "stexcore/encrypt"
            },
            body: body
        });
    }
    
}