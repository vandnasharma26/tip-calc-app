import React from "react";
import "../../Form/Form.css";
import "../Buttons/Button.css";

function CustomButton(props) {
    return (
        <input
            onChange={props.handleChange}
            onClick={props.handleChange}
            className="custom-button"
            type="number"
            name="custom-button"
            placeholder="Custom" />
    );
}

export default CustomButton;