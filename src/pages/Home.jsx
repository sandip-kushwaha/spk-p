
import Skill from './Skill';
import Projects from './Projects';
import Contact from './Contact';
import { useState, useEffect } from 'react';
import { BsArrowDown } from "react-icons/bs";
import { FadeInDown } from '../animations/ScrollAnimations';
import { Link } from 'react-router-dom';



const Home = () => {

        const [Change, setChange] = useState(["MERN Stack Developer", "CSIT Student", "Web Developer"]);
        const [index, setIndex] = useState(0);

        useEffect(() => {
            const interval = setInterval(() => {
                setIndex(i => (i + 1) % Change.length);
            }, 1500);
            return () => clearInterval(interval);
        }, [Change.length]);

  return (
    <> 
    <FadeInDown>
      <div className='home'>
        <h4>Welcome to my Portfolio !!!</h4>
        <h1>Hi, I'm <span>Sandip prasad Kushwaha</span></h1>
        <h2>{Change[index]}</h2>
        <p>I build responsive and interactive web applications using modern technologies like React, Node.js, and more. </p>
      </div>
    </FadeInDown>
    
    <FadeInDown delay={0.2}>
      <div className='home-btn'>
        <button className='btn'>
            <a href="/resume">View My Resume</a>
        </button>
         <Link to="/contact" className='btn'>Get In Touch</Link>
      </div>
    </FadeInDown>

     <BsArrowDown className='Homeicon'/> 
    <Skill />
    <Projects />
    <Contact />
  </>
  )
}

export default Home