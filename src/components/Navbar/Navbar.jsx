import React, { useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import Logo from '../../assets/tclogo.png';

export default function Navbar({ selectedColor, onColorChange }) {

  return (
    <div className='navbar'>
      <div className="links">
        <div className='theme'>
          Theme
          <select onChange={(e) => onColorChange(e.target.value)} value={selectedColor}>
            <option value="neutral">Neutral</option>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="purple">Purple</option>
            <option value="pink">Pink</option>
          </select>
        </div>
        <Link to='home' smooth={true} duration={1000} className='navlink'>
          <img className='logo' src={Logo} alt="" />
        </Link>
        <Link to="home" smooth={true} duration={1000} className='navlink'> Home </Link>
        <Link to="/projects" className='navlink'> Projects </Link>
        <Link to="about" smooth={true} duration={1000} className='navlink'> About </Link>
      </div>
    </div>
  );
}
