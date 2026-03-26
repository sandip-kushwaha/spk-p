import React from 'react'
import './About.css'
import SK_image from '../assets/sandip_photo.png'
import { SlideInLeft, SlideInRight, ScrollFadeInUp } from '../animations/ScrollAnimations'

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <SlideInLeft delay={0.1}>
          <div className="about-text">
            <h1>About Me</h1>
            <p>I'm a full-stack web developer who builds clean, responsive, and user-friendly applications. I work with React, Node.js, MongoDB, and Express to deliver polished frontends and reliable backends.</p>

            <p>I enjoy solving problems and learning new technologies. I care about readable code, strong UX, and shipping dependable products. I'm open to freelance and full-time opportunities—let's build something great together.</p>

            <ScrollFadeInUp delay={0.2}>
              <div className="about-highlights">
                <h3>Highlights</h3>
                <ul className="skills-list">
                  <li className="skill">React</li>
                  <li className="skill">Node.js</li>
                  <li className="skill">MongoDB</li>
                  <li className='skill'>Express</li>
                  <li className="skill">Javascript</li>
                  <li className='skill'>HTML / CSS</li>
                  <li className='skill'>C / C+</li>
                  <li className='skill'>Python</li>
                  <li className="skill">Responsive Design</li>
                  <li className="skill">API Development</li>
                </ul>
              </div>
            </ScrollFadeInUp>
            
            <ScrollFadeInUp delay={0.3}>
              <div className="about-education">
                <h3>Education</h3>
                <ul className="education-list">
                  <li className="education-item">
                    <div className="edu-left">
                      <strong>Bachelor's in Computer Science & Information Technology</strong>
                      <div className="edu-meta">Tribhuvan University — 2024-2027</div>
                    </div>
                    <div className="edu-right">Focus: Web development & programming</div>
                  </li>
                </ul>
              </div>
            </ScrollFadeInUp>
          </div>
        </SlideInLeft>

        <SlideInRight delay={0.1}>
          <div className="about-visual">
            <img src={SK_image} alt="Image" />
          </div>
        </SlideInRight>
      </div>
    </section>
  )
}

export default About