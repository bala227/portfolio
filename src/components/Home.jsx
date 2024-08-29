import React from 'react'
import '../components/Home.css'
import bala from '../images/photo.jpeg'
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import VerifiedIcon from '@mui/icons-material/Verified';
import balaresume from '../images/Balasubramanian Resume.pdf'
import Navbar from './Navbar';
import Education from './Education';
import Footer from './Footer';

export default function Home() {

  const onButtonClick = () => {
    const pdfUrl = balaresume;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Bala Subramanian Resume"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

  return (
    <div className='home'>
        <Navbar />
        <div className='homebody' id='Home'>
            <div className='first' id='first'>
                <img src={bala} alt="" className='bala'/>
                <h3 className='about1'>Hi, It's <span className='red'>Bala Subramanian</span></h3>
                <h3 className='about1'>I'm a <span className='red'>FullStack Developer</span></h3>
                <p className='about'>I am a hardworking and diligent individiual, currently pursuing B.E. CSE AIML. I have considerable experience in the Frontend development. I am seeking a challenging role in web development to kickstart my career in this field.</p>
                <div className='icons'>
                    <a href="https://www.instagram.com/itz_.bala_/" rel="noopener noreferrer"><InstagramIcon style={{fontSize:50,color:"#fd1d1d",marginRight:13,cursor:"pointer"}}/></a>
                    <a href="https://www.linkedin.com/in/bala-subramanian-s-3a95a8261/" rel="noopener noreferrer"><LinkedInIcon style={{fontSize:50,color:"#0A66C2",marginRight:13,cursor:"pointer"}}/></a>
                    <a href="https://github.com/bala227" rel="noopener noreferrer"><GitHubIcon style={{fontSize:50,marginRight:13,cursor:"pointer",color:"white"}}/></a>
                    <a href="https://x.com/K_arthi7777" rel="noopener noreferrer"><XIcon style={{fontSize:50,cursor:"pointer",color:"white"}}/></a>
                </div>
                <div className='buttons'>
                  <a href="mailto: balasubramanian.s2000@gmail.com"><p className='button'>Hire Me</p></a>
                  <p id='resume' onClick={onButtonClick}>Resume</p>
                </div>
            </div>
            
        </div>
        <div className='second' id='Skills'>
            <p className='exp'>Explore my</p>
            <h1 className='skills'>Skills</h1>
            <div className='skillbox'>
              <div className='skill'>
                <h2>Frontend Development</h2>
                <div id='box'>
                  <article>
                    <VerifiedIcon />
                    <h3>HTML</h3>
                    <span>Intermediate</span>
                  </article>
                  <article>
                    <VerifiedIcon />
                    <h3>CSS</h3>
                    <span>Intermediate</span>
                  </article>
                  <article>
                    <VerifiedIcon />
                    <h3>UI/UX</h3>
                    <span>Basic</span>
                  </article>
                  <article className='ui'>
                    <VerifiedIcon />
                    <h3>JavaScript</h3>
                    <span>Beginner</span>
                  </article>
                </div>
              </div>
              <div className='skill'>
                <h2>Backend Development</h2>
                <div id='box'>
                <article>
                    <VerifiedIcon />
                    <h3>NodeJS</h3>
                    <span>Beginner</span>
                  </article>
                  <article>
                    <VerifiedIcon />
                    <h3>ExpressJS</h3>
                    <span>Beginner</span>
                  </article>
                  <article>
                    <VerifiedIcon />
                    <h3>MongoDB</h3>
                    <span>Beginner</span>
                  </article>
                  <article className='ui'>
                    <VerifiedIcon />
                    <h3>Git</h3>
                    <span>Beginner</span>
                  </article>
                </div>
              </div>
            </div>
        </div>
        <Education />
        <Footer />
    </div>
  )
}
