import React, { useState } from "react";
import { Modal, Button, Input } from "antd";

export default function Popup() {
    const [state, setState] = useState({ visible: false });
    const [address, setAddress] = useState({ type: "", address: "" });

    function onChange(e) {
        console.log(e.target.value);

        setAddress({ ...address, [e.target.name]: [e.target.value] });
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
    }

    function handleCancel(e) {
        console.log(e);
        setState({
            visible: false,
        });
    }

    return (
        <div>
            <Button className="address-btn" onClick={showModal}>
                <p>&#43;</p>
                <p>Add Address</p>
            </Button>
            <Modal
                title="Address"
                visible={state.visible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Input
                    name="type"
                    placeholder="Home/Office/PG"
                    onChange={onChange}
                />
                <br />
                <br />
                <Input
                    name="address"
                    placeholder="Address"
                    onChange={onChange}
                />
            </Modal>
        </div>
    );
}
