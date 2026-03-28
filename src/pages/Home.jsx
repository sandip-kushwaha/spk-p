import ReactLogo from '../assets/React.png';
import HtmlLogo from '../assets/HTML.png';
import CssLogo from '../assets/CSS.png';
import JavaScriptLogo from '../assets/javascript.png';
import NodejsLogo from '../assets/Node.js.png';
import ExpressLogo from '../assets/Express.png';
import MongodbLogo from '../assets/MongoDB.png'
import PythonLogo from '../assets/python.png';
import CplusplusLogo from '../assets/Cplusplus.png';
import GitLogo from '../assets/git.png';
import GithubLogo from '../assets/github.png';
import MongoDBAtlasLlogo from '../assets/MongoDBAtlas.png';
import VscodeLogo from '../assets/VScode.png'
import Projects from './Projects';
import Contact from './Contact';
import { useState, useEffect } from 'react';
import { BsArrowDown } from "react-icons/bs";
import { FadeInDown, ScrollFadeInUp, StaggerContainer, StaggerItem, ScaleOnHover } from '../animations/ScrollAnimations';


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
        <h1>Hi, I'm <span>Sandip Kushwaha</span></h1>
        <h2>{Change[index]}</h2>
        <p>I build responsive and interactive web applications using modern technologies like React, Node.js, and more. </p>
      </div>
    </FadeInDown>
    
    <FadeInDown delay={0.2}>
      <div className='home-btn'>
        <button className='btn'>
            <a href="/resume">View My Resume</a>
        </button>
        <button className='btn' >
            <a href="/contact">Get In Touch
            </a></button>
      </div>
    </FadeInDown>

     <BsArrowDown className='Homeicon'/> 

    <ScrollFadeInUp>
      <div className='skills'>
        <h2>My Skills & Technologies</h2>
        <p>Here are the technologies I have worked with:</p>
        <StaggerContainer staggerDelay={0.1}>
          <div className='skills-list'>
            <StaggerItem>
              <ScaleOnHover scale={1.04}>
                <div className='skill-item'>
                  <img src={HtmlLogo} alt="html" />
                  <p>HTML</p>
                </div>
              </ScaleOnHover>
            </StaggerItem>
            <StaggerItem>
              <ScaleOnHover scale={1.04}>
                <div className='skill-item'>
                  <img src={CssLogo} alt="css" />
                  <p>CSS</p>      
                </div>
              </ScaleOnHover>
            </StaggerItem>
            <StaggerItem>
              <ScaleOnHover scale={1.04}>
                <div className='skill-item'>
                  <img src={JavaScriptLogo} alt='javaScript' />
                  <p>JavaScript</p>
                </div>
              </ScaleOnHover>
            </StaggerItem>
            <StaggerItem>
              <ScaleOnHover scale={1.04}>
                <div className='skill-item'>
                  <img src={MongodbLogo} alt='mongodb' />
                  <p>MongoDB</p>
                </div>
              </ScaleOnHover>
            </StaggerItem>
            <StaggerItem>
              <ScaleOnHover scale={1.04}>
                <div className='skill-item'>
                  <img src={ExpressLogo} alt='express' />
                  <p>Express</p>
                </div>
              </ScaleOnHover>
            </StaggerItem>
            <StaggerItem>
              <ScaleOnHover scale={1.04}>
                <div className='skill-item'>
                  <img src={ReactLogo} alt="react" />
                  <p>React</p>
                </div>
              </ScaleOnHover>
            </StaggerItem>
            <StaggerItem>
              <ScaleOnHover scale={1.04}>
                <div className='skill-item'>
                  <img src={NodejsLogo} alt='nodejs' />
                  <p>Nodejs</p>
                </div>
              </ScaleOnHover>
            </StaggerItem>
            <StaggerItem>
              <ScaleOnHover scale={1.04}>
                <div className='skill-item'>
                  <img src={PythonLogo} alt='python' />
                  <p>Python</p>
                </div>
              </ScaleOnHover>
            </StaggerItem>
            <StaggerItem>
              <ScaleOnHover scale={1.04}>
                <div className='skill-item'>
                  <img src={CplusplusLogo} alt='C++' />
                  <p>C++</p>
                </div>
              </ScaleOnHover>
            </StaggerItem>
            <StaggerItem>
              <ScaleOnHover scale={1.04}>
                <div className='skill-item'>
                  <img src={GitLogo} alt='git' />
                  <p>Git</p>
                </div>
              </ScaleOnHover>
            </StaggerItem>
            <StaggerItem>
              <ScaleOnHover scale={1.04}>
                <div className='skill-item'>
                  <img src={GithubLogo} alt='github' />
                  <p>GitHub</p>
                </div>
              </ScaleOnHover>
            </StaggerItem>
            <StaggerItem>
              <ScaleOnHover scale={1.04}>
                <div className='skill-item'>
                  <img src={MongoDBAtlasLlogo} alt='mongodbatlas'/>
                  <p>MongoDBAtlas</p>
                </div>
              </ScaleOnHover>
            </StaggerItem>
            <StaggerItem>
              <ScaleOnHover scale={1.04}>
                <div className='skill-item'>
                  <img src={VscodeLogo} alt='vscode' />
                  <p>VS Code</p>
                </div>
              </ScaleOnHover>
            </StaggerItem>
          </div>
        </StaggerContainer>
      </div>
    </ScrollFadeInUp>
    <Projects />
    <Contact />
  </>
  )
}

export default Home