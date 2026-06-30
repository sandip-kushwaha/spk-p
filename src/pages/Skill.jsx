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
import { FadeInDown, ScrollFadeInUp, StaggerContainer, StaggerItem, ScaleOnHover } from '../animations/ScrollAnimations';
import { Link } from 'react-router-dom';


 const Skill = () => {
  return (
    <>
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
    </>

  )};

export default Skill;

