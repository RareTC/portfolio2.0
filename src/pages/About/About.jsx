import React from 'react';
import './About.css';
import AboutMe from '../../assets/aboutme.jpeg';



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
          Hi there, I'm Trevor, a Software Developer with a passion for creating sleek and user-friendly interfaces.
          When I'm not coding, you'll catch me at the beach playing volleyball with my dog Cooper.
          </p>
          <p>
          I have a keen eye for the details others overlook.
          Before diving into Software Development, I worked as a Nurse in Heart Surgery, honing my eye for detail and teamwork.
          With a background in healthcare and a knack for coding, I bring creativity and innovation to everything I do.
          </p>
          <p>
            Let's create something amazing together!
          </p>
      </div>
    </div>
    </>
  )
}

