import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const shouldSticky = window.scrollY > 10 && window.innerWidth > 768;
          setIsSticky((prev) => (prev === shouldSticky ? prev : shouldSticky));
          document.body.classList.toggle('navbar-sticky', shouldSticky);
          ticking = false;
        });

        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      document.body.classList.remove('navbar-sticky');
    };
  }, []);

  return (
    <div className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <h2>Sandip</h2>
      <nav className='navbar-item'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Link className='hire' to="/hire">Hire Me</Link>
      <a href="https://www.linkedin.com/in/sandip-kushwaha-20b8702ba" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className='social-link'>
        <FaLinkedin size={30} className="social-icon" />
      </a>
      <a href="https://github.com/sandip-kushwaha" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className='social-link'>
        <FaGithub size={30} className="social-icon" />
      </a>
    </div>
  );
};

export default Navbar