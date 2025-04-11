import { Link } from "react-router";

export default function SignUpPage() {
    return (
        <div>
            <div>
                <button>Login</button>
                <button>Verification</button>
            </div>
            <div>
                <input type="tel" placeholder="Enter Full name"></input>
            </div>
            <div>
                <input type="tel"></input>
            </div>
            <button>Next step</button>
            <p>You have an account? <Link to="/signin">SignIn</Link> </p>
        </div>
    );
} 