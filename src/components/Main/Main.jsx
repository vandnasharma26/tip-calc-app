import React, { useState } from "react";
import './Main.css';
import Form from "./mainComponents/Form/Form.jsx";
import Dollar from "./mainComponents/Icons/Dollar";
import Person from "./mainComponents/Icons/Person";
import Tip from "./mainComponents/TipCalculator/Tip.jsx";
import Card from "./mainComponents/Card/Card.jsx";

function Main(props) {
    const [bill, setBill] = useState(0.00)
    const [person, setPerson] = useState(1)
    const [tipId, setTipId] = useState(0);
    const [tipAmount, setTipAmount] = useState(0.00);

    function billChange(event) {
        setBill(event.target.value)
    }

    function personChange(event) {
        setPerson(event.target.value)
    }

    var totalPerPerson = Math.round((bill / person) * 100) / 100;

    function TipCalulate(event) {
        const id = event.target.id;
        setTipId(id);
        const tipPercent = event.target.value;
        const tip = Math.round((totalPerPerson * tipPercent / 100) * 100) / 100
        setTipAmount(tip)
    }

    var totalPerPerson = totalPerPerson + tipAmount;

    function reset(event){
        event.preventDefault();
        setBill(0);
        setPerson(1);
        setTipAmount(0);
        setTipId(0);
        totalPerPerson = 0;
        document.getElementsByName("custom-button")[0].value = null;
    }

    return (
        <div className="main">
            <div className="input-info">
                <Form
                    title="Bill"
                    name="bill"
                    icon={<Dollar />}
                    value={bill}
                    handleChange={billChange}
                    placeholder={0} />
                <Tip
                    handleClick={TipCalulate}
                    id={tipId} />
                <Form
                    title="Number of People"
                    name="people"
                    icon={<Person />}
                    value={person}
                    handleChange={personChange}
                    placeholder={1} />
            </div>
            <Card
                totalPerPerson={totalPerPerson}
                tipPerPerson={tipAmount} 
                reset={reset} />
        </div>
    );
}

export default Main; 