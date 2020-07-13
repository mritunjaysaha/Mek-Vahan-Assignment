import React from "react";
import { Link } from "@reach/router";
// asset 3 --- logo
// asset 5 --- google
// asset 6 --- facebook

export default function Login() {
    return (
        <>
            <section>
                <div>img</div>
                <div>
                    <div>
                        <input
                            type="text"
                            name="mobile"
                            placeholder="10 digits mobile number"
                        />
                        <p>Password</p>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter password"
                        />
                        <Link to="#">Forgot password?</Link>
                        <button>Login</button>
                        <p>
                            Don't have an account{" "}
                            <span>
                                <Link to="#">Sign up</Link>
                            </span>
                        </p>
                    </div>
                    <div>
                        <hr />
                        <p>or</p>
                        <hr />
                    </div>
                    <div>
                        <p>Continue with</p>
                        <div>
                            <button>Facebook</button>
                            <button>Google</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
