import React from "react";
import { Modal, Button, Input } from "antd";

export default function Popup(props) {
    return (
        <div>
            <Button
                className="address-btn"
                onClick={() => {
                    props.showModal();
                }}
            >
                <p>&#43;</p>
                <p>Add Address</p>
            </Button>
            <Modal
                title="Address"
                visible={props.state.visible}
                onOk={() => {
                    props.handleOk();
                }}
                onCancel={() => {
                    props.handleCancel();
                }}
            >
                <Input
                    name="type"
                    placeholder="Home/Office/PG"
                    onChange={(e) => {
                        props.onChange(e);
                    }}
                    value={props.type}
                />
                <br />
                <br />
                <Input
                    name="address"
                    placeholder="Address"
                    onChange={(e) => {
                        props.onChange(e);
                    }}
                    value={props.address}
                />
            </Modal>
        </div>
    );
}
