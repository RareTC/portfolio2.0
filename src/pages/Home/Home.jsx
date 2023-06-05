import React,{useEffect} from 'react';
import Profile from "../../assets/profile.jpeg";
import {Skills} from '../../components/Helpers/Skills';
import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
    useEffect(()=> {
        AOS.init({duration: 2000});
    },[])

  return (
      <div className='home' id='home'>
          <div className='bioContainer' >
              <div className='profilePhoto' data-aos="fade-in">
                  <img src={Profile} alt='profile' />
              </div>
              <div className='about' data-aos="fade-in">
                  <h2 >Trevor Campbell</h2>
                  <div className='prompt' data-aos="fade-in">
                      <p >I bring creative and palatable projects to life with surgical precision and organized code. I combine my passion for technology with my healthcare background to create seamless impactful solutions. 
                      </p>
                  </div>
              </div>
          </div>
          <div className='list' data-aos="fade-up">
          <h1 className='skills'>Skills</h1>
              {Skills.map(skillCategory => (
                  <div className='item'>
                      {/* <h2>{skillCategory.category}</h2> */}
                      <div className='group'>
                          {skillCategory.languages.map(language => (
                              <div className='icon-text'>
                                  <h5>{language.icon}</h5>
                                  <span>{language.name}</span>
                              </div>
                          ))}
                      </div>
                  </div>
              ))}
          </div>
      </div>
  )
}
