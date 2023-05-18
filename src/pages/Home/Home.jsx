import React from 'react';
import TypeWriter from "typewriter-effect";
import Profile from "../../assets/profile.jpeg";
import {Skills} from '../../components/Helpers/Skills';
import './Home.css';

export default function Home() {

  return (
      <div className='home' id='home'>
        {/* <div className='welcome'>
            <h3>Pick Your Favorite Color For A Surprise</h3>
            <div className='rainbowarch'>
                <button className='rainbow' id='red'></button>
                <button className='rainbow' id='orange'></button>
                <button className='rainbow' id='yellow'></button>
                <button className='rainbow' id='green'></button>
                <button className='rainbow' id='blue'></button>
                <button className='rainbow' id='indigo'></button>
                <button className='rainbow' id='violet'></button>
            </div>
        </div> */}
          <div className='bioContainer' >
              <div className='profilePhoto'>
                  <img src={Profile} alt='profile' />
              </div>
              <div className='about'>
                    <p className="typewriter" >
                    <TypeWriter
                    className="typewriter"
                        options={{
                            strings: ['Coachable', 'Organized', 'Cooperative'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                    </p>
                  <h2 >Trevor Campbell</h2>
                  <div className='prompt'>
                      <p >I bring creative and palatable projects to life with surgical precision and organized code. As a full stack developer experienced in
                        several languages, I combine my passion for technology with my healthcare background to create seamless impactful solutions. 
                      </p>
                  </div>
              </div>
          </div>
          <div className='list'>
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
