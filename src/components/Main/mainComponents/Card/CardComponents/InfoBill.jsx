import React from "react";
import "./InfoBill.css";

function InfoBill(props){
    return (
        <div className="bill-info">
            <div className="bill-info-name">
                <h4>{props.infoTitle}</h4>
                <h5>/ person</h5>
            </div>
            <div className="bill-info-result">
                <h2>${props.amount}</h2>
            </div>
        </div>
    )
}

export default InfoBill;