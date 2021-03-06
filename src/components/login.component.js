import React, { useState } from "react";
import { Link, navigate } from "@reach/router";
import { Button, Input, Form } from "antd";
import useFetchData from "../hooks/useFetchData";
export default function Login() {
    const url = "https://mekvahan.com/api/android_intern_task";
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const fetchedData = useFetchData(url, { mobile, password });
    const [message, setMessage] = useState("");
    function onChangeMobile(e) {
        //sets the typed mobile number
        setMobile(e.target.value);
    }

    function onChangePassword(e) {
        //sets the password
        setPassword(e.target.value);
    }

    function onSubmit() {
        //if mobile number and password are correct then it
        // will navigate to the my address page
        // else, it will display the message that the mobile
        // number or password is wrong
        if (fetchedData.response === true) {
            navigate("/home");
        } else {
            setMessage("Mobile number or password is wrong");
            resetForm();
        }
    }

    function resetForm() {
        setMobile("");
        setPassword("");
    }
    return (
        <>
            <section className="login-signup">
                <div className="login-signup-left"></div>
                <div className="login-signup-right">
                    <div className="login">
                        <div className="logo-container">
                            <div className="close"></div>
                            <div className="logo"></div>
                            <h2>MEKVAHAN</h2>
                        </div>
                        <Form className="login-form" name="basic">
                            <Input
                                type="text"
                                name="mobile"
                                placeholder="10 digits mobile number"
                                value={mobile}
                                onChange={onChangeMobile}
                            />
                            <p className="password">Password</p>
                            <Input
                                type="password"
                                name="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={onChangePassword}
                            />
                            <Link className="forgot-password" to="#">
                                Forgot password?
                            </Link>

                            {message !== "" ? (
                                <div className="err-message">{message}</div>
                            ) : null}
                            <Button
                                onClick={onSubmit}
                                className="login-btn"
                                type="primary"
                                danger
                            >
                                Login
                            </Button>
                        </Form>
                        <div className="signup">
                            <p>
                                Don't have an account?{" "}
                                <span>
                                    <Link to="#">Sign Up now</Link>
                                </span>
                            </p>
                        </div>
                        <div className="separation">
                            <hr />
                            <p>Or</p>
                            <hr />
                        </div>
                        <div className="continue-with">
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
