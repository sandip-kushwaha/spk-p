
import './Footer.css'
import {FaLinkedin, FaGithub } from "react-icons/fa";
import { ScrollFadeInUp } from '../animations/ScrollAnimations';
import { BsArrowRight } from "react-icons/bs";

const Footer = () => {
  return (
    <ScrollFadeInUp>
      <div className="footer">
        <div className='footer-content'>
          <h2>Sandip</h2>
          <h4>Web Developer</h4>
          <nav className="footer-items">
            <a href="/">Home</a>
            <a href="/About">About</a>
            <a href="/Projects">Projects</a>
            <a href="/Contact">Contact</a>
          </nav>
        </div>
        <div className="social">
          <h4>Follow me</h4>
          <BsArrowRight className='footericon'/> 
          <a href="https://www.linkedin.com/in/sandip-kushwaha-20b8702ba" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">
            <FaLinkedin size={30} className="social-icon" />
          </a>
          <a href="https://github.com/sandip-kushwaha" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-link">
            <FaGithub size={30} className="social-icon" />
          </a>
        </div>
        <p className='copyright'>&copy; 2026 Sandip Kushwaha. All rights reserved.</p>
      </div>
    </ScrollFadeInUp>
  )
}

export default Footer