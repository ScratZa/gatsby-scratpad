import React from "react";
import logo from "../../images/logo-white.png"
const NavBar = () =>{
return(
        <div className ="navcontainer ">
            <img src = {logo} className="logo" style={{maxHeight: "50px"}} alt="logo"/>
            <nav>
            <ul>
                <li>
                    <a href="/#">About</a>
                </li>
                <li>
                    <a href="/#">Projects</a>
                </li>
                <li>
                    <a href="/#">Blog</a>
                </li>
                <li>
                    <a href="/#">Laughs</a>
                </li>
            </ul>
            </nav>
        </div>)
}

export default NavBar