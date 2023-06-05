import React, {useEffect} from 'react';
import './About.css';
import AboutMe from '../../assets/aboutme.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function About() {

  useEffect(()=> {
    AOS.init({duration: 2000});
},[])

  return (
    <>
    <div className='aboutContainer' id='about'>
      <div className='aboutPhoto' data-aos="fade-left">
        <img src={AboutMe} alt='profile'/>
      </div>
      <div className='aboutSection' data-aos="fade-right">
        <h2>About Me</h2>
          <p>
          Hi there, I'm Trevor, a Software Developer with a passion for creating sleek and user-friendly interfaces.
          When I'm not coding, you'll catch me at the beach playing volleyball with my trusty sidekick, Cooper.
          </p>
          <p>
          I have a knack for noticing the little things. 
          Drawing from my previous career in Heart Surgery, I bring a unique perspective and a splash of innovation to everything I do.
          </p>
          <p>
            Let's create something amazing!
          </p>
      </div>
    </div>
    </>
  )
}

