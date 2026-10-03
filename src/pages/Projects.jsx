import SEO from "../components/SEO";
import Project1Img from "../assets/Project-1.png";
import Project2Img from "../assets/Project-2.png";
import Project3Img from "../assets/Project-3.png";
import Project5Img from "../assets/Project-5.png";
import ReactLogo from "../assets/react.svg";
import {
  FadeInDown,
  StaggerContainer,
  StaggerItem,
  HoverSlideUp,
} from "../animations/ScrollAnimations";

const Projects = () => {
  return (
    <>
      {/* SEO Tags */}
      <SEO
        title="Projects"
        description="Explore web development projects built by Sandip Prasad Kushwaha including React, Node.js, Express, and MongoDB applications."
        url="https://www.sandipprasadkushwaha.com.np/projects"
      />

      <FadeInDown>
        <div className="projects-header">
          <h1>My Projects</h1>
          <p>Here are some of the projects I've worked on:</p>
        </div>
      </FadeInDown>

      <StaggerContainer>
        <div className="projects-container">
          <StaggerItem>
            <HoverSlideUp>
              <div className="project-card">
                <img src={Project1Img} alt="Portfolio Website" />
                <h2>Project 1: Portfolio Website</h2>
                <p>
                  A personal portfolio website built with React, showcasing my
                  skills, projects, and experience.
                </p>
                <a href="https://www.sandipprasadkushwaha.com.np/">
                  View Project
                </a>
              </div>
            </HoverSlideUp>
          </StaggerItem>

          <StaggerItem>
            <HoverSlideUp>
              <div className="project-card">
                <img src={Project2Img} alt="PicBook Photo Sharing App" />
                <h2>Project 2: PicBook</h2>
                <p>
                  PicBook is a full-stack photo sharing web application where
                  users can upload, view, and delete images easily. Built using
                  React, Node.js, Express, and MongoDB.
                </p>
                <a href="https://github.com/sandip-kushwaha/PicBook">
                  View Project
                </a>
              </div>
            </HoverSlideUp>
          </StaggerItem>

          <StaggerItem>
            <HoverSlideUp>
              <div className="project-card">
                <img src={Project3Img} alt="HTML CSS Portfolio Website" />
                <h2>Project 3: Portfolio Website</h2>
                <p>
                  A personal portfolio website built with HTML, CSS, and
                  JavaScript, featuring a responsive design and smooth
                  animations.
                </p>
                <a href="https://www.sandipprasadkushwaha.com.np/">
                  View Project
                </a>
              </div>
            </HoverSlideUp>
          </StaggerItem>

          <StaggerItem>
            <HoverSlideUp>
              <div className="project-card">
                <img src={ReactLogo} alt="Realtime Chat Application" />
                <h2>Project 4: Chat Application</h2>
                <p>
                  A real-time chat application built with Socket.io, allowing
                  users to join chat rooms and communicate instantly.
                </p>
                <a href="/projects/chatapp">View Project</a>
              </div>
            </HoverSlideUp>
          </StaggerItem>

          <StaggerItem>
            <HoverSlideUp>
              <div className="project-card">
                <img src={Project5Img} alt="Rock Paper Scissors Game App" />
                <h2>Project 5: Game app</h2>
                <p>
                  A simple game application built with HTML, CSS, and
                  JavaScript, featuring interactive gameplay and responsive
                  design.
                </p>
                <a href="https://github.com/sandip-kushwaha/Rock--Paper---Scissors">
                  View Project
                </a>
              </div>
            </HoverSlideUp>
          </StaggerItem>

          <p>More projects coming soon...</p>
        </div>
      </StaggerContainer>
    </>
  );
};

export default Projects;
