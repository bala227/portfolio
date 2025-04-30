import React from "react";
import "../components/Home.css";
import skull from "../images/skull.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import VerifiedIcon from "@mui/icons-material/Verified";
import balaresume from "../images/Balasubramanian Resume.pdf";
import Navbar from "./Navbar";
import Education from "./Education";
import Footer from "./Footer";
import Projects from "./Projects";
import { motion } from "framer-motion";
import AllProjects from "./AllProjects";

export default function Home() {
  const onButtonClick = () => {
    const pdfUrl = balaresume;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Balasubramanian Resume";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="home">
      <Navbar />
      <div className="homebody" id="Home">
        <div className="first" id="first">
          {/* Image and name/title on the same row */}
          <div className="first-top">
            <img src={skull} alt="" className="bala" />
            <div className="about-texts">
            <h3 className="about1">
              <span className="hide-on-mobile">Hi, It's </span>
              <span className="red">Bala Subramanian</span>
            </h3>
            <h3 className="about1">
              <span className="hide-on-mobile">I'm a </span>
              <span className="red">Full Stack Developer</span>
            </h3>
            </div>
          </div>

          {/* Paragraph below */}
          <p className="about">
            I am a hardworking and diligent individiual, currently pursuing B.E.
            CSE AIML. I have considerable experience in the Frontend
            development. I am seeking a challenging role in web development to
            kickstart my career in this field.
          </p>

          {/* Social Icons */}
          <div className="icons">
            <a
              href="https://www.instagram.com/_helixul_/"
              target="blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon style={{ fontSize: 40, color: "#fd1d1d" }} />
            </a>
            <a
              href="https://www.linkedin.com/in/bala-subramanian-s-3a95a8261/"
              target="blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon style={{ fontSize: 40, color: "#0A66C2" }} />
            </a>
            <a
              href="https://github.com/bala227"
              target="blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon style={{ fontSize: 40, color: "white" }} />
            </a>
            <a
              href="https://x.com/K_arthi7777"
              target="blank"
              rel="noopener noreferrer"
            >
              <XIcon style={{ fontSize: 40, color: "white" }} />
            </a>
          </div>

          {/* Buttons in a row */}
          <div className="buttons">
            <motion.a
              href="mailto:balasubramanian.s2000@gmail.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.p className="button">Hire Me</motion.p>
            </motion.a>

            <motion.p
              id="resume"
              onClick={onButtonClick}
              className="button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Resume
            </motion.p>
          </div>
        </div>
      </div>
      <div className="second" id="Skills">
        <p className="exp">Explore my</p>
        <h1 className="skills">Skills</h1>
        <div className="skillbox">
          <div className="skill">
            <h2>Frontend Development</h2>
            <div id="box">
              <article>
                <VerifiedIcon sx={{ color: "#1DA1F2" }} />
                <h3>HTML</h3>
                <span>Intermediate</span>
              </article>
              <article>
                <VerifiedIcon sx={{ color: "#1DA1F2" }} />
                <h3>CSS</h3>
                <span>Intermediate</span>
              </article>
              <article>
                <VerifiedIcon sx={{ color: "#1DA1F2" }} />
                <h3>UI/UX</h3>
                <span>Basic</span>
              </article>
              <article>
                <VerifiedIcon sx={{ color: "#1DA1F2" }} />
                <h3>Tailwind CSS</h3>
                <span>Basic</span>
              </article>
              <article className="ui">
                <VerifiedIcon sx={{ color: "#1DA1F2" }} />
                <h3>JavaScript</h3>
                <span>Beginner</span>
              </article>
            </div>
          </div>
          <div className="skill">
            <h2>Backend Development</h2>
            <div id="box">
              <article>
                <VerifiedIcon sx={{ color: "#1DA1F2" }} />
                <h3>NodeJS</h3>
                <span>Beginner</span>
              </article>
              <article>
                <VerifiedIcon sx={{ color: "#1DA1F2" }} />
                <h3>ExpressJS</h3>
                <span>Beginner</span>
              </article>
              <article>
                <VerifiedIcon sx={{ color: "#1DA1F2" }} />
                <h3>MongoDB</h3>
                <span>Beginner</span>
              </article>
              <article className="ui">
                <VerifiedIcon sx={{ color: "#1DA1F2" }} />
                <h3>Git</h3>
                <span>Beginner</span>
              </article>
              <article className="ui">
                <VerifiedIcon sx={{ color: "#1DA1F2" }} />
                <h3>PHP</h3>
                <span>Beginner</span>
              </article>
              <article className="ui">
                <VerifiedIcon sx={{ color: "#1DA1F2" }} />
                <h3>Neo4j</h3>
                <span>Beginner</span>
              </article>
            </div>
          </div>
        </div>
      </div>
      <Education />
      <Projects />
      <AllProjects />
      <Footer />
    </div>
  );
}
