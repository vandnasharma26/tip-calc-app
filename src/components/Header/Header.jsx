import React from "react";
import './Header.css';

function Header(){
    return (
        <header>
            <img src={process.env.PUBLIC_URL + "/images/logo.svg"} alt="logo" />
        </header>
    )
}

export default Header; 