import React from "react";
import { Button } from "antd";
import Popup from "./modal.component";
export default function Cards(props) {
    return (
        <div className="cards" key={props.id}>
            <div className="cards-header">
                {String(props.type).toLowerCase() === "home" ? (
                    <div className="home-icon"></div>
                ) : null}
                {String(props.type).toLowerCase() === "office" ? (
                    <div className="office-icon"></div>
                ) : null}
                {String(props.type).toLowerCase() === "pg" ? (
                    <div className="pg-icon"></div>
                ) : null}
                <h4>{String(props.type).toUpperCase()}</h4>
            </div>
            <div className="cards-address">
                <p>{props.address}</p>
                <div className="cards-btn-container">
                    <Popup
                        name="edit"
                        state={props.state}
                        showModal={props.showModal}
                        handleOk={props.handleOk}
                        handleCancel={props.handleCancel}
                        onChange={props.onChange}
                        type={props.address.type}
                        address={props.address.address}
                    />
                    <Button
                        className="cards-btn delete"
                        onClick={() => props.delete(props.id)}
                    >
                        Delete
                    </Button>
                </div>
            </div>
        </div>
    );
}
