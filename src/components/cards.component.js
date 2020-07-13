import React from "react";
import { Button } from "antd";
export default function Cards(props) {
    return (
        <div className="cards">
            <p>icon</p>
            <h4>{props.type}</h4>
            <p>{props.address}</p>
            <Button>Edit</Button>
            <Button>Delete</Button>
        </div>
    );
}
