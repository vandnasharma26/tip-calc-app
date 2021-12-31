import React, {useState} from "react";
import Label from "../Label/Label.jsx";
import "./Tip.css"
import Button from "./Buttons/Button.jsx";
import CustomButton from "./Buttons/CustomButton.jsx";

function Tip(props) {  
    return (
        <div className="tip-selector">
            <Label title="Select Tip %" />
            <div className="button-list">
                <Button handleClick={props.handleClick} tipPercent={5} id={1} changeStyleof={props.id} />
                <Button handleClick={props.handleClick} tipPercent={10} id={2} changeStyleof={props.id} />
                <Button handleClick={props.handleClick} tipPercent={15} id={3} changeStyleof={props.id} />
                <Button handleClick={props.handleClick} tipPercent={25} id={4} changeStyleof={props.id} />
                <Button handleClick={props.handleClick} tipPercent={50} id={5} changeStyleof={props.id} />
                <CustomButton handleChange={props.handleClick} id={6} changeStyleof={props.id} event={props.event}/>
            </div>
        </div>
    )
}

export default Tip;