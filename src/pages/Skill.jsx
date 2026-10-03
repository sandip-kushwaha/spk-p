import ReactLogo from "../assets/React.webp";
import HtmlLogo from "../assets/HTML.webp";
import CssLogo from "../assets/CSS.webp";
import JavaScriptLogo from "../assets/javascript.webp";
import NodejsLogo from "../assets/Node.webp";
import ExpressLogo from "../assets/Express.webp";
import MongodbLogo from "../assets/MongoDB.webp";
import PythonLogo from "../assets/python.webp";
import CplusplusLogo from "../assets/Cplusplus.webp";
import TailwindCss from "../assets/tailwindcss.webp";
import GitLogo from "../assets/git.webp";
import GithubLogo from "../assets/github.webp";
import MongoDBAtlasLlogo from "../assets/MongoDBAtlas.webp";
import PostmanLogo from "../assets/Postman.webp";
import cloudinaryLogo from "../assets/Cloudinary.webp";
import VscodeLogo from "../assets/VScode.webp";
import VercelLogo from "../assets/vercel.webp";
import {
  ScrollFadeInUp,
  StaggerContainer,
  StaggerItem,
  ScaleOnHover,
} from "../animations/ScrollAnimations";

const Skill = () => {
  return (
    <>
      <ScrollFadeInUp>
        <section className="skills">
          <h2>My Skills & Technologies</h2>
          <p>Here are the technologies I have worked with:</p>
          <StaggerContainer staggerDelay={0.1}>
            <div className="skills-list">
              <StaggerItem>
                <ScaleOnHover scale={1.04}>
                  <div className="skill-item">
                    <img src={HtmlLogo} alt="HTML5 Logo" />
                    <p>HTML</p>
                  </div>
                </ScaleOnHover>
              </StaggerItem>

              <StaggerItem>
                <ScaleOnHover scale={1.04}>
                  <div className="skill-item">
                    <img src={CssLogo} alt="CSS3 Logo" />
                    <p>CSS</p>
                  </div>
                </ScaleOnHover>
              </StaggerItem>

              <StaggerItem>
                <ScaleOnHover scale={1.04}>
                  <div className="skill-item">
                    <img src={JavaScriptLogo} alt="JavaScript Logo" />
                    <p>JavaScript</p>
                  </div>
                </ScaleOnHover>
              </StaggerItem>

              <StaggerItem>
                <ScaleOnHover scale={1.04}>
                  <div className="skill-item">
                    <img src={ReactLogo} alt="React.js Logo" />
                    <p>React</p>
                  </div>
                </ScaleOnHover>
              </StaggerItem>

              <StaggerItem>
                <ScaleOnHover scale={1.04}>
                  <div className="skill-item">
                    <img src={NodejsLogo} alt="Node.js Logo" />
                    <p>Node.js</p>
                  </div>
                </ScaleOnHover>
              </StaggerItem>

              <StaggerItem>
                <ScaleOnHover scale={1.04}>
                  <div className="skill-item">
                    <img src={ExpressLogo} alt="Express.js Logo" />
                    <p>Express</p>
                  </div>
                </ScaleOnHover>
              </StaggerItem>

              <StaggerItem>
                <ScaleOnHover scale={1.04}>
                  <div className="skill-item">
                    <img src={MongodbLogo} alt="MongoDB Database Logo" />
                    <p>MongoDB</p>
                  </div>
                </ScaleOnHover>
              </StaggerItem>

              <StaggerItem>
                <ScaleOnHover scale={1.04}>
                  <div className="skill-item">
                    <img src={TailwindCss} alt="Tailwind CSS Framework Logo" />
                    <p>Tailwind CSS</p>
                  </div>
                </ScaleOnHover>
              </StaggerItem>

              <StaggerItem>
                <ScaleOnHover scale={1.04}>
                  <div className="skill-item">
                    <img
                      src={PythonLogo}
                      alt="Python Programming Language Logo"
                    />
                    <p>Python</p>
                  </div>
                </ScaleOnHover>
              </StaggerItem>

              <StaggerItem>
                <ScaleOnHover scale={1.04}>
                  <div className="skill-item">
                    <img
                      src={CplusplusLogo}
                      alt="C++ Programming Language Logo"
                    />
                    <p>C++</p>
                  </div>
                </ScaleOnHover>
              </StaggerItem>

              <StaggerItem>
                <ScaleOnHover scale={1.04}>
                  <div className="skill-item">
                    <img src={GitLogo} alt="Git Version Control Logo" />
                    <p>Git</p>
                  </div>
                </ScaleOnHover>
              </StaggerItem>

              <StaggerItem>
                <ScaleOnHover scale={1.04}>
                  <div className="skill-item">
                    <img src={GithubLogo} alt="GitHub Logo" />
                    <p>GitHub</p>
                  </div>
                </ScaleOnHover>
              </StaggerItem>

              <StaggerItem>
                <ScaleOnHover scale={1.04}>
                  <div className="skill-item">
                    <img
                      src={MongoDBAtlasLlogo}
                      alt="MongoDB Atlas Cloud Logo"
                    />
                    <p>MongoDB Atlas</p>
                  </div>
                </ScaleOnHover>
              </StaggerItem>

              <StaggerItem>
                <ScaleOnHover scale={1.04}>
                  <div className="skill-item">
                    <img
                      src={VercelLogo}
                      alt="Vercel Deployment Platform Logo"
                    />
                    <p>Vercel</p>
                  </div>
                </ScaleOnHover>
              </StaggerItem>

              <StaggerItem>
                <ScaleOnHover scale={1.04}>
                  <div className="skill-item">
                    <img src={PostmanLogo} alt="Postman API Platform Logo" />
                    <p>Postman</p>
                  </div>
                </ScaleOnHover>
              </StaggerItem>

              <StaggerItem>
                <ScaleOnHover scale={1.04}>
                  <div className="skill-item">
                    <img
                      src={cloudinaryLogo}
                      alt="Cloudinary Asset Management Logo"
                    />
                    <p>Cloudinary</p>
                  </div>
                </ScaleOnHover>
              </StaggerItem>

              <StaggerItem>
                <ScaleOnHover scale={1.04}>
                  <div className="skill-item">
                    <img src={VscodeLogo} alt="VS Code Editor Logo" />
                    <p>VS Code</p>
                  </div>
                </ScaleOnHover>
              </StaggerItem>
            </div>
          </StaggerContainer>
        </section>
      </ScrollFadeInUp>
    </>
  );
};

export default Skill;
