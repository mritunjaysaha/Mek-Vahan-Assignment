import React, { useState } from "react";
import { Link, navigate } from "@reach/router";
import { Button, Input, Form } from "antd";
import useFetchData from "../hooks/useFetchData";
export default function Login() {
    const url = "https://mekvahan.com/api/android_intern_task";
    const [mobile, setMobile] = useState("9999999999");
    const [password, setPassword] = useState("0123456789");
    const fetchedData = useFetchData(url, { mobile, password });

    function onChangeMobile(e) {
        console.log(e.target.value);
        setMobile(e.target.value);
    }
    function onChangePassword(e) {
        console.log(e.target.value);
        setPassword(e.target.value);
    }

    function onSubmit() {
        console.log(fetchedData);

        if (fetchedData.response === true) {
            navigate("/home");
        }
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
                        <Form
                            // onSubmit={onSubmit}
                            className="login-form"
                            name="basic"
                        >
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
                            <Button
                                onClick={onSubmit}
                                className="login-btn"
                                type="primary"
                                danger
                            >
                                Login
                            </Button>
                            {/* <Link to="/home">HOME</Link> */}
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
