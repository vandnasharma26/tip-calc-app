import React from "react";
import "./Reset.css";

function Reset(props){
    return (
        <button onClick={props.reset} className="reset">RESET</button>
    );
}

export default Reset;