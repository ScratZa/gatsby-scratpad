// @refresh reset
import React from "react";
import logo from "../../images/logo-white.png"

const NavBar = () =>{
return(
        <div className ="navcontainer ">
            <img src = {logo} className="logo" style={{maxHeight: "50px"}} alt="logo"/>
            <input type="checkbox" id="nav-toggle" className="nav-toggle"/>
            <label for="nav-toggle" class="nav-toggle-label">
                <span></span>
            </label>
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