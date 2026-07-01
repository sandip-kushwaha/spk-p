import { useState, useEffect, useRef } from 'react'
import './Menubar.css'
import { RiMenuFold3Line } from "react-icons/ri";
import { Link } from 'react-router-dom'


const Menubar = () => {
  
  const [open, setOpen] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const handleOutside = (e) => {
      if (!navRef.current) return
      if (!navRef.current.contains(e.target)) setOpen(false)
    }

    const handleScroll = () => setOpen(false)

    document.addEventListener('click', handleOutside)
    document.addEventListener('touchstart', handleOutside)
    window.addEventListener('scroll', handleScroll, true)

    return () => {
      document.removeEventListener('click', handleOutside)
      document.removeEventListener('touchstart', handleOutside)
      window.removeEventListener('scroll', handleScroll, true)
    }
  }, [])

  return (
    <div className='menu-header'>
      <nav ref={navRef} className={`menubar ${open ? 'open' : ''}`}>
        <h1>Sandip</h1>
        <button className='menu-icon' 
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <RiMenuFold3Line size={"40"} />
        </button>

        <ul className={open ? 'open' : ''}>
          <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
          <li><Link to="/projects" onClick={() => setOpen(false)}>Projects</Link></li>
          <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
          <li><Link to="/hire" onClick={() => setOpen(false)}>Hire Me</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Menubar