import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import Popup from "./modal.component";
import Cards from "./cards.component";

const { Content } = Layout;
export default function Home() {
    const [state, setState] = useState({ visible: false });
    const [allAddress, setAllAddress] = useState([
        {
            type: "home",
            address:
                "DTTDC, Under Flyover Facility, Raja Garden Crossing Rd, New Delhi 110015, India",
            date: "",
        },
        {
            type: "office",
            address:
                "DTTDC, Under Flyover Facility, Raja Garden Crossing Rd, New Delhi 110015, India",
            date: "",
        },
        {
            type: "pg",
            address:
                "DTTDC, Under Flyover Facility, Raja Garden Crossing Rd, New Delhi 110015, India",
            date: "",
        },
    ]);
    const [address, setAddress] = useState({ type: "", address: "" });

    useEffect(
        function () {
            console.log({ allAddress });
        },
        [allAddress]
    );

    function onChange(e) {
        setAddress({
            ...address,
            [e.target.name]: [e.target.value],
            date: Date.now(),
        });
    }
    function showModal() {
        setState({
            visible: true,
        });
    }

    function handleOk(e) {
        console.log("ok", e);
        setState({
            visible: false,
        });
        const container = document.querySelector(".active-tab-body");
        console.log(container);
        container.classList.remove("empty-body");
        console.log("address", address);

        const currentAddress = address;
        setAllAddress([...allAddress, currentAddress]);

        resetForm();
    }

    function handleCancel(e) {
        console.log(e);
        setState({
            visible: false,
        });

        resetForm();
    }

    function resetForm() {
        setAddress({ type: "", address: "" });
    }
    function handleDelete(key) {
        const filteredData = allAddress.filter(
            (address) => address.date !== key
        );
        setAllAddress(filteredData);
    }
    const cardsContainer = (
        <div className="cards-container">
            {allAddress.map((address) => {
                console.log(address);
                return (
                    <Cards
                        id={address.date}
                        type={address.type}
                        address={address.address}
                        delete={handleDelete}
                        state={state}
                        showModal={showModal}
                        handleOk={handleOk}
                        handleCancel={handleCancel}
                        onChange={onChange}
                    />
                );
            })}
        </div>
    );
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
                        <Popup
                            name="address"
                            state={state}
                            showModal={showModal}
                            handleOk={handleOk}
                            handleCancel={handleCancel}
                            onChange={onChange}
                            type={address.type}
                            address={address.address}
                        />
                    </div>
                    <hr />

                    <div className=" active-tab-body">{cardsContainer}</div>
                </section>
            </Content>
        </Layout>
    );
}
