import React from "react";
import "./Label.css";

function Label(props){
    return (
        <label>{props.title}</label>
    );
}

export default Label;