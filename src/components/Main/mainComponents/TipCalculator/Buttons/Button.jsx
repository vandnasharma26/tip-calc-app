import React from "react";
import "./Button.css";

function Button(props) {
    const style = {
        backgroundColor: "hsl(172, 67%, 45%)",
        color: "hsl(183, 100%, 15%)"
    }

    return (
        <button
            onClick={props.handleClick}
            id={props.id}
            style={props.id==props.changeStyleof ? style : null}
            value={props.tipPercent}
            name="normal-button" >
            {props.tipPercent}%
        </button>
    );
}

export default Button; 