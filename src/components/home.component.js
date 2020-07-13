import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import Popup from "./modal.component";
import Cards from "./cards.component";

const { Content } = Layout;
export default function Home() {
    const [state, setState] = useState({ visible: false });
    const [allAddress, setAllAddress] = useState([]);
    const [address, setAddress] = useState({ type: "", address: "" });

    useEffect(
        function () {
            const container = document.querySelector(".active-tab-body");

            if (allAddress.length > 0) {
                // It will remove the background svg when a address is entered
                container.classList.remove("empty-body");
            } else {
                // It will add the background svg if there are no addresses to display
                container.classList.add("empty-body");
            }
        },
        [allAddress]
    );

    function onChange(e) {
        // gets the address typed by the user
        setAddress({
            ...address,
            [e.target.name]: [e.target.value],
            date: Date.now(),
        });
    }
    function showModal() {
        // opens the modal popup
        setState({
            visible: true,
        });
    }

    function handleOk(e) {
        // closes the modal and updates the addresses list
        setState({
            visible: false,
        });

        const currentAddress = address;
        setAllAddress([...allAddress, currentAddress]);

        resetForm();
    }

    function handleCancel(e) {
        // closes the modal
        setState({
            visible: false,
        });

        resetForm();
    }

    function resetForm() {
        // resets the modal forms data
        setAddress({ type: "", address: "" });
    }
    function handleDelete(key) {
        // deletes the address when the delete button is clicked
        const filteredData = allAddress.filter(
            (address) => address.date !== key
        );
        setAllAddress(filteredData);
    }

    const cardsContainer = (
        // displays all the cards
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

                    <div className="empty-body active-tab-body">
                        {cardsContainer}
                    </div>
                </section>
            </Content>
        </Layout>
    );
}
