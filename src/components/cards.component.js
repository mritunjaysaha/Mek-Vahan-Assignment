import React from "react";
import { Button } from "antd";
export default function Cards(props) {
    return (
        <div className="cards">
            <div className="cards-header">
                {props.type.toLowerCase() === "home" ? (
                    <div className="home-icon"></div>
                ) : null}
                {props.type.toLowerCase() === "office" ? (
                    <div className="office-icon"></div>
                ) : null}
                {props.type.toLowerCase() === "pg" ? (
                    <div className="pg-icon"></div>
                ) : null}
                <h4>{props.type.toUpperCase()}</h4>
            </div>
            <div className="cards-address">
                <p>{props.address}</p>
                <div className="cards-btn-container">
                    <Button className="cards-btn edit">Edit</Button>
                    <Button className="cards-btn delete">Delete</Button>
                </div>
            </div>
        </div>
    );
}
