import React from 'react';
import './Header.css';
import TypeWriter from "typewriter-effect";
import Wave from '../../assets/wave.PNG';
import Chefkiss from '../../assets/chefkiss.PNG';
import Chin from '../../assets/chin.PNG';
import Greet from '../../assets/greet.PNG';
import Heart from '../../assets/heart.PNG';
import Snap from '../../assets/snap.PNG';
import Surf from '../../assets/surf.PNG';
import Laptop from '../../assets/laptop.PNG'
import {TbArrowBearRight} from 'react-icons/tb';


export default function Header({ selectedColor, onColorChange }) {
  
  const colorToImageMap = {
    grey: Laptop,
    green: Wave,
    purple: Chefkiss,
    blue: Chin,
    red: Greet,
    orange: Snap,
    yellow: Surf,
    pink: Heart,
  };

  return (
    <>
    <div className='welcome'>
      <h3 id='h3'>Pick Your Favorite Color To Add Some Life</h3>
      <div className='rainbowarch'>
          <button className={`${selectedColor === 'red' ? 'pulse' : ''}`}
            id='red' value="red" onClick={() => onColorChange('red')}>
          </button>

          <button className={`${selectedColor === 'orange' ? 'pulse' : ''}`}
            id='orange' value="orange" onClick={() => onColorChange('orange')}>
          </button>

          <button className={`${selectedColor === 'yellow' ? 'pulse' : ''}`}
            id='yellow' value="yellow" onClick={() => onColorChange('yellow')}>
          </button>

          <button className={`${selectedColor === 'green' ? 'pulse' : ''}`}
            id='green' value="green" onClick={() => onColorChange('green')}>
          </button>

          <button className={`${selectedColor === 'blue' ? 'pulse' : ''}`}
            id='blue' value="blue" onClick={() => onColorChange('blue')}>
          </button>

          <button className={`${selectedColor === 'purple' ? 'pulse' : ''}`}
            id='purple' value="purple" onClick={() => onColorChange('purple')}>
          </button>

          <button className={`${selectedColor === 'pink' ? 'pulse' : ''}`}
            id='pink' value="pink" onClick={() => onColorChange('pink')}>
          </button>

          <button className={`${selectedColor === 'grey' ? 'pulse' : ''}`}
            id='grey' value="grey" onClick={() => onColorChange('grey')}>
          </button>
      </div>
      <p className="typewriter" >
        <TypeWriter
          className="typewriter"
          options={{
            strings: ['Coachable', 'Organized', 'Creative'],
            autoStart: true,
            loop: true,
          }}
          />
      </p>
    </div>
    <div className='memojicontainer'>
        <img
          src={colorToImageMap[selectedColor]}
          alt="memoji"
          className="memoji"
          />

    </div>
    </>
  )
}
