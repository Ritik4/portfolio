import React,{useState} from 'react'
import Logo from '../Images/logo.png'
import { Link } from 'react-router-dom'
import "./header.css"

 function Header() { 

   const [isClicked, setisClicked] = useState('false');

    return ( 
        <div className="navbar_wrapper">
            <header className="header container flex">
                <Link className="logo_wrapper" to="/">
                  <img className="logo" src={Logo} alt="" />
                </Link>

                <i onClick={()=>{setisClicked(!isClicked)}} className="fas fa-2x fa-bars"></i>
                <nav className={isClicked ? "flex nav_hide" : "flex nav_expand"}>

                    <ul className="nav_links flex">
                        <li><Link to="/about">ABOUT</Link></li>
                        <li><Link to="/work">WORK</Link></li>
                        <li><Link to="/contact">CONTACT</Link></li>
                    </ul>

                    <ul className="social_icons flex">
                        <li><a href="https://www.google.com"><i className="fab fa-2x fa-twitter"></i></a></li>
                        <li><a href="https://www.google.com"><i className="fab fa-2x fa-linkedin-in"></i></a></li>
                        <li><a href="https://www.google.com"><i className="fab fa-2x fa-instagram"></i></a></li>
                    </ul>
                </nav>  

            </header>
        </div>
    )
}

export default Header