import React from 'react'
import { Link } from 'react-router-dom';
import {FaLinkedin, FaGithub } from "react-icons/fa";
import './Navbar.css';


const Navbar = () => {
  return (
    <div className='navbar'>
        <h1>Sandip</h1>
        <nav className='navbar-item'>
           <Link to="/">Home</Link>
           <Link to="/about">About</Link>
           <Link to="/projects">Projects</Link>
           <Link to="/contact">Contact</Link>
           <Link className='hire' to="/hire">Hire Me</Link>
           <a href="https://www.linkedin.com/in/sandip-kushwaha-20b8702ba" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className='social-link'>
           <FaLinkedin size={30} className="social-icon" />
         </a>
           <a href="https://github.com/sandip-kushwaha" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className='social-link'>
           <FaGithub size={30} className="social-icon" />
         </a>
        </nav>
         
    </div>
  )
}

export default Navbar