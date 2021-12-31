import React from "react";
import "./Form.css";
import Label from "../Label/Label.jsx";

function Form(props) {
    const errorStyle = { outline: "2px solid red" }

    return (
        <form>
            <div className="form-title">
                <Label title={props.title} />
                {(props.value == 0 && !props.value == "") && <h5>Can't be zero</h5>}
            </div>
            <div>
                {props.icon}
                <input
                    onChange={props.handleChange}
                    type="number"
                    name={props.value}
                    placeholder={props.placeholder}
                    value={props.value==props.placeholder ? "" : props.value}
                    style={(props.value == 0 && !props.value == "") ? errorStyle : null}
                />
            </div>
        </form>
    )
}

export default Form;