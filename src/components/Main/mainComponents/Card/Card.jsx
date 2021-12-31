import React from "react";
import InfoBill from "./CardComponents/InfoBill.jsx";
import "./Card.css";
import Reset from "./CardComponents/Reset.jsx"

function Card(props) {
    return (
        <div className="card">
            <div>
                <InfoBill infoTitle="Tip Amount" amount={props.tipPerPerson}/>
                <InfoBill infoTitle="Total" amount={props.totalPerPerson} />
            </div>
            <div className="btn"><Reset reset={props.reset}/></div>
        </div>
    )
}

export default Card; 