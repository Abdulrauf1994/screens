import React from 'react'
import Logo from "./imag/Logo.png"
import './Nav.css';

function Nav() {
    return (
        <>
         <div className="logo-main">
             <img src={Logo} className="logo" />
         </div>   
        </>
    )
}

export default Nav;
