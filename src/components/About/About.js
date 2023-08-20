import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/anime-self.png"
            alt="man-svgrepo"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              Hi there! My name is <strong>Marc Jerome T. Doria</strong> originally from the Philippines and currently residing in Quezon City.
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
              My journey into the world of technology was sparked by a strong passion for problem-solving, which drove me to pursue a degree in Computer Science. During my freshman year, I discovered my love for web development. The intricacies of website structure fascinated me, igniting a desire to tweak and enhance their front-end design. Despite the challenges, my determination remained unwavering, and I cultivated lasting friendships that provided crucial support throughout this demanding program at BSCS.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              The thrill of collaborating with a team towards a common goal has been incredibly fulfilling and unique for me. I'm excited to dive into upcoming projects, with a special interest in web development.
              <div className="tagline2">
                I've gained confidence in working with the following technologies:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
