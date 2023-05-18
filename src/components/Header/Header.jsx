import React from 'react';
import './Header.css';


export default function Header() {

  const handleColorSelect = (event) => {
    const selectedColors = colorValues[event.target.value];
    Object.entries(selectedColors).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--color${key}`, value);
    });
  };

  const colorValues = {
    neutral: ['#DDDBCC', '#5f8d9e', '#495868', '#8f8f8f', '#1C2120'],
    green: ['#EFF1EE', '#58DA72', '#179c78', '#688482', '#1a222a'],
    purple: ['#ECE8E6', '#62569e', '#64075C', '#966A7F', '#241829'],
    blue: ['#F8F9F9', '#41B1FC', '#3c92b3','#AEBAB3', '#285f87'],
    red: ['#F2F0EC', '#F09393', '#B4223A', '#9F6C66', '#2D212C'],
    orange: ['#F2F2EF', '#e98522', '#ce5615', '#ca6f4d', '#222128'],
    yellow: ['#EFF4EF', '#F2F747', '#DFCD2E', '#BEA944', '#3E6669'],
    pink: ['#F8F5F7', '#ee60a1', '#be2177', '#A296B3', '#843574'],
  };

  return (
    <div className='welcome'>
      <h3>Pick Your Favorite Color To Add Some Life</h3>
      <div className='rainbowarch'>
        <button className='rainbow' id='red' value="red" onClick={handleColorSelect}></button>
        <button className='rainbow' id='orange' value="orange" onClick={handleColorSelect}></button>
        <button className='rainbow' id='yellow' value="yellow" onClick={handleColorSelect}></button>
        <button className='rainbow' id='green' value="green" onClick={handleColorSelect}></button>
        <button className='rainbow' id='blue' value="blue" onClick={handleColorSelect}></button>
        <button className='rainbow' id='purple' value="purple" onClick={handleColorSelect}></button>
        <button className='rainbow' id='pink' value="pink" onClick={handleColorSelect}></button>
      </div>
    </div>
  )
}
