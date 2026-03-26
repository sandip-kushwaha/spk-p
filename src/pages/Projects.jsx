import React from 'react'
import Project1Img from '../assets/Project-1.png'
import Project3Img from '../assets/Project-3.png'
import Project5Img from '../assets/Project-5.png'
import ReactLogo from '../assets/react.svg'
import { FadeInDown, StaggerContainer, StaggerItem, HoverSlideUp } from '../animations/ScrollAnimations'

const Projects = () => {
  return (
    <>
      <FadeInDown>
        <div className='projects-header'>
          <h1>My Projects</h1>
          <p>Here are some of the projects I've worked on:</p>
        </div>
      </FadeInDown>
      <StaggerContainer>
        <div className='projects-container'>
          <StaggerItem>
            <HoverSlideUp>
              <div className='project-card'>
                <img src={Project1Img} alt="project1" />
                <h2>Project 1: Portfolio Website</h2>
                <p>A personal portfolio website built with React, showcasing my skills, projects, and experience.</p>
                <a href="/projects/portfolio">View Project</a>
              </div>
            </HoverSlideUp>
          </StaggerItem>

          <StaggerItem>
            <HoverSlideUp>
              <div className='project-card'>
                <img src={ReactLogo} alt="project2" />
                <h2>Project 2: E-commerce Store</h2>
                <p>An e-commerce store built with Node.js and Express, featuring user authentication, product management, and a shopping cart.</p>
                <a href="/projects/ecommerce">View Project</a>
              </div>
            </HoverSlideUp>
          </StaggerItem>
           
           <StaggerItem>
            <HoverSlideUp>
              <div className='project-card'>
                <img src={Project3Img} alt="project3" />
                <h2>Project 3: Portfolio Website</h2>
                <p>A personal portfolio website built with HTML, CSS, and JavaScript, featuring a responsive design and smooth animations.</p>
                <a href="https://sandipkushwaha.onrender.com/">View Project</a>
              </div>
            </HoverSlideUp>
          </StaggerItem>

          <StaggerItem>
            <HoverSlideUp>
              <div className='project-card'>
                <img src={ReactLogo} alt="project4" />
                <h2>Project 4: Chat Application</h2>
                <p>A real-time chat application built with Socket.io, allowing users to join chat rooms and communicate instantly.</p>
                <a href="/projects/chatapp">View Project</a>
              </div>
            </HoverSlideUp>
          </StaggerItem>

          <StaggerItem>
            <HoverSlideUp>
              <div className='project-card'>
                <img src={Project5Img} alt="project5" />
                <h2>Project 5: Game app</h2>
                <p>A simple game application built with html, css and JavaScript, featuring interactive gameplay and responsive design.</p>
                <a href="https://github.com/sandip-kushwaha/Rock--Paper---Scissors">View Project</a>
              </div>
            </HoverSlideUp>
          </StaggerItem>

          <p>More projects coming soon...</p>
        </div>
      </StaggerContainer>
  </>
  )
}

export default Projects