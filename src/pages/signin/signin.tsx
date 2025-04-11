import { Link } from "react-router";

export default function SignInPage() {
    return (
        <div>
            <h2>Login On Your Account</h2>
            <div>
                <button>Login</button>
                <button>Verification</button>
            </div>
            <div>
                <input type="tel"></input>
            </div>
            <button>Next step</button>
            <p>Don't have an account? <Link to="/signup">SignUp</Link> </p>
        </div>
    );
}