import React, {useState} from "react";
import logo from '../images/Logo.svg'
import { FaBars } from "react-icons/fa";

const Nav =() =>{
    const[menuOpen, setMenuOpen]= useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }
  return(
    <nav className={`navbar ${menuOpen? "open" : ""}`}>
        <a href='/'>
            <img src={logo} alt='logo'/>
        </a>
        <button className="menu-icon" onClick={toggleMenu}>
            <FaBars/>
        </button>

        <ul className={`nav-links ${menuOpen? "visible" : ""}`}>
            <li>
                <a href='/'>HOME</a>
            </li>
            <li>
                <a href='/'>ABOUT</a>
            </li>
            <li>
                <a href='/'>MENU</a>
            </li>
            <li>
                <a href='/'>RESERVATIONS</a>
            </li>
            <li>
                <a href='/'>ORDER ONLINE</a>
            </li>
            <li>
                <a href='login'>LOGIN</a>
            </li>
        </ul>
    </nav>
  );
}

export default Nav;