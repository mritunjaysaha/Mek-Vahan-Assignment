import React, { useState } from "react";
import { Layout } from "antd";
import Popup from "./modal.component";
const { Content } = Layout;
export default function Home() {
    const [data, setData] = useState();

    return (
        <Layout className="home-layout">
            <Content className="home-content">
                <section className="home-content-left">
                    <div className="user-info">
                        <div className="profile"></div>
                        <div className="greet-user">
                            <h3>
                                Hi <br />
                                Mekvahan!
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
                        <Popup />
                    </div>
                    <hr />

                    <div className="empty-body active-tab-body"></div>
                </section>
            </Content>
        </Layout>
    );
}
