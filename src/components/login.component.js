import React from "react";
import { Link } from "@reach/router";
import { Button, Input, Form } from "antd";
// asset 3 --- logo
// asset 5 --- google
// asset 6 --- facebook

export default function Login() {
    return (
        <>
            <section className="login-signup">
                <div className="login-signup-left"></div>
                <div className="login-signup-right">
                    <div className="login">
                        <div className="logo-container">
                            <div className="logo">
                                <img src="../" alt="" srcset="" />
                            </div>
                            <h1>MEKVAHAN</h1>
                        </div>
                        <Form className="login-form" name="basic">
                            <Input
                                type="text"
                                name="mobile"
                                placeholder="10 digits mobile number"
                            />
                            <p className="password">Password</p>
                            <Input
                                type="password"
                                name="password"
                                placeholder="Enter password"
                            />
                            <Link className="forgot-password" to="#">
                                Forgot password?
                            </Link>
                            <Button className="login-btn" type="primary" danger>
                                Login
                            </Button>
                            <div className="signup">
                                <p>
                                    Don't have an account?{" "}
                                    <span>
                                        <Link to="#">Sign Up now</Link>
                                    </span>
                                </p>
                            </div>
                        </Form>
                        <div>
                            <hr />
                            <p>or</p>
                            <hr />
                        </div>
                        <div>
                            <p>Continue with</p>
                            <div>
                                <button className="btn facebook-logo"></button>
                                <button className="btn google-logo"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
