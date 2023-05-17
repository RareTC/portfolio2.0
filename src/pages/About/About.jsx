import React from 'react';
// import './About.css';
import { Link } from 'react-router-dom';
import AboutMe from '../../assets/aboutme.jpeg';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from "@mui/icons-material/Email";


export default function About() {
  return (
    <>
    <div className='aboutContainer' id='about'>
      <div className='aboutPhoto'>
        <img src={AboutMe} alt='profile'/>
      </div>
      <div className='aboutSection'>
        <h2>About Me</h2>
          <p>
          Hi, I'm Trevor! As a Full Stack Developer, I'm passionate about creating sleek and user-friendly interfaces.
          When I'm not working, you can usually find me at the beach playing volleyball with my dog Cooper.
          </p>
          <p>
          As a detail-oriented person, I enjoy examining details others might overlook and am constantly seeking ways to improve. I'm always on the lookout for new and unique
           approaches to problems, and I'm not afraid to think outside the box.
          </p>
          <p>
          Before diving into Software Development, I worked as a Nurse in Heart Surgery, gaining valuable experience working on teams, communicating, and meticulous documentation.
           I learned the importance of being flexible in high-pressure environments a skill that has served me well in my current role.
          </p>
          <p>
          Overall, I'm someone who is passionate about delivering high-quality work and making a positive impact. My unique background, combined with my skills in Software Development,
           make me a well-rounded individual who is dedicated to bringing creativity and innovation to everything I do.   
          </p>
      <div className='aboutLinks'>
          <Link to="https://www.linkedin.com/in/-trevorcampbell" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
          </Link>
          <Link to="https://github.com/RareTC" target='_blank' rel='noopener noreferrer'>
            <GitHubIcon />
          </Link>
          <Link to="/contact">
            <EmailIcon />
          </Link>
      </div>
      </div>
    </div>
    </>
  )
}

