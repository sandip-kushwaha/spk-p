import "./About.css";
import SK_image from "../assets/sandip_image.webp";
import SEO from "../components/SEO";
import {
  SlideInLeft,
  SlideInRight,
  ScrollFadeInUp,
} from "../animations/ScrollAnimations";

const About = () => {
  return (
    <>
      {/* About Page SEO Meta Tags */}
      <SEO
        title="About Me"
        description="Learn more about Sandip Prasad Kushwaha — CSIT Student & Full Stack Web Developer based in Hetauda, Nepal."
        url="https://www.sandipprasadkushwaha.com.np/about"
        image="https://www.sandipprasadkushwaha.com.np/assets/sandip_image.webp"
      />

      <section className="about-section">
        <div className="about-container">
          <SlideInLeft delay={0.1}>
            <div className="about-text">
              <h1>About Me</h1>
              <p>
                I'm a full-stack web developer who builds clean, responsive, and
                user-friendly applications. I work with React, Node.js, MongoDB,
                and Express to deliver polished frontends and reliable backends.
              </p>

              <p>
                I enjoy solving problems and learning new technologies. I care
                about readable code, strong UX, and shipping dependable
                products. I'm open to freelance and full-time
                opportunities—let's build something great together.
              </p>

              <ScrollFadeInUp delay={0.2}>
                <div className="about-highlights">
                  <h3>Highlights</h3>
                  <ul className="skills-list">
                    <li className="skill">React</li>
                    <li className="skill">Node.js</li>
                    <li className="skill">MongoDB</li>
                    <li className="skill">Express</li>
                    <li className="skill">Javascript (+ES6)</li>
                    <li className="skill">HTML / CSS</li>
                    <li className="skill">Tailwind CSS</li>
                    <li className="skill">C / C++</li>{" "}
                    {/* C+ को बदल कर C++ कर दिया गया है */}
                    <li className="skill">Python</li>
                    <li className="skill">Responsive Design</li>
                    <li className="skill">RESTful APIs</li>
                    <li className="skill">Version Control (Git)</li>
                    <li className="skill">API Development</li>
                    <li className="skill">API Testing</li>
                  </ul>
                </div>
              </ScrollFadeInUp>

              <ScrollFadeInUp delay={0.3}>
                <div className="about-education">
                  <h3>Education</h3>
                  <ul className="education-list">
                    <li className="education-item">
                      <div className="edu-left">
                        <strong>
                          Bachelor's in Computer Science & Information
                          Technology (BSc CSIT)
                        </strong>
                        <p>Hetauda City College, Hetauda</p>
                        <div className="edu-meta">
                          Tribhuvan University — 2024-2027
                        </div>
                      </div>
                      <div className="edu-right">
                        Focus: Web development & programming
                      </div>
                    </li>
                    <br />
                    <li className="education-item">
                      <div className="edu-left">
                        <strong>+2 (Science)</strong>
                        <p>Makawanpur Multiple Campus, Hetauda</p>
                        <div className="edu-meta">
                          National Examinations Board (NEB) — 2021-2023
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </ScrollFadeInUp>
            </div>
          </SlideInLeft>

          <SlideInRight delay={0.1}>
            <div className="about-visual">
              <img
                src={SK_image}
                alt="Sandip Prasad Kushwaha - Full Stack Developer in Nepal"
              />
            </div>
          </SlideInRight>
        </div>
      </section>
    </>
  );
};

export default About;
