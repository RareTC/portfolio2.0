import React from 'react';
import './Header.css';


export default function Header() {
  return (
    <div className='welcome'>
      <h3>Pick Your Favorite Color To Add Some Life</h3>
      <div className='rainbowarch'>
        <button className='rainbow' id='red'></button>
        <button className='rainbow' id='orange'></button>
        <button className='rainbow' id='yellow'></button>
        <button className='rainbow' id='green'></button>
        <button className='rainbow' id='blue'></button>
        <button className='rainbow' id='purple'></button>
        <button className='rainbow' id='pink'></button>
      </div>
    </div>
  )
}
