import React, {useState} from "react";
import { Link } from "react-router-dom";
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
                <Link to='/'>HOME</Link>
            </li>
            <li>
                <Link to="/menu">MENU</Link>
            </li>
            <li>
                <Link to="/testimonials">TESTIMONIALS</Link>
            </li>
            <li>
                <Link to="/about">ABOUT</Link>
            </li>
            <li>
                <Link to='/'>RESERVATIONS</Link>
            </li>
            <li>
                <Link to='/'>ORDER ONLINE</Link>
            </li>
            <li>
                <Link to='login'>LOGIN</Link>
            </li>
        </ul>
    </nav>
  );
}

export default Nav;