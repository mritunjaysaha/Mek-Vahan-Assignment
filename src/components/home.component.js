import React, { useState } from "react";
import { Button, Layout } from "antd";

const { Content } = Layout;
export default function Home() {
    const [data, setData] = useState();
    function handleClick() {
        const container = document.querySelector(".active-tab-body");
        console.log(container);
        container.classList.remove("empty-body");
    }

    return (
        <Layout className="home-layout">
            <Content className="home-content">
                <section className="home-content-left">
                    <div className="user-info">
                        <div className="profile"></div>
                        <div className="greet-user">
                            <h3>
                                Hi <br />
                                Mekvahan
                            </h3>
                        </div>
                    </div>
                    <div className=" user-panel">
                        <p>My Profile</p>
                        <hr />
                        <p className="active">Manage Address</p>
                        <hr />
                        <p>Change Password</p>
                        <hr />
                    </div>
                </section>
                <section className="home-content-right">
                    <div className="active-tab">
                        <h3>My Address</h3>
                        <Button className="address-btn" onClick={handleClick}>
                            <p>&#43;</p>
                            <p>Add Address</p>
                        </Button>
                    </div>
                    <hr />

                    <div className="empty-body active-tab-body"></div>
                </section>
            </Content>
        </Layout>
    );
}
