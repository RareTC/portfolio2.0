import React, { useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import Logo from '../../assets/tclogo.png';

export default function Navbar() {
  const handleColorChange = (event) => {
    const selectedColors = colorValues[event.target.value];
    Object.entries(selectedColors).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--color${key}`, value);
    });
  };

  const colorValues = {
    green: ['#EFF1EE', '#58DA72', '#179c78', '#688482', '#1a222a'],
    purple: ['#ECE8E6', '#62569e', '#64075C', '#966A7F', '#241829'],
    blue: ['#F8F9F9', '#41B1FC', '#3c92b3','#AEBAB3', '#285f87'],
    red: ['#F2F0EC', '#F09393', '#B4223A', '#9F6C66', '#2D212C']
  };

  useEffect(() => {
    // Set the initial color values based on the default selected option
    const defaultOption = 'green';
    handleColorChange({ target: { value: defaultOption } });
  }, []);

  return (
    <div className='navbar'>
      <div className="links">
        <div className='theme'>
          Theme
          <select onChange={handleColorChange}>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="red">Red</option>
            <option value="purple">Purple</option>
          </select>
        </div>
        <Link to='home' smooth={true} duration={1000} className='navlink'>
          <img className='logo' src={Logo} alt="" />
        </Link>
        <Link to="home" smooth={true} duration={1000} className='navlink'> Home </Link>
        <Link to="/projects" className='navlink'> Projects </Link>
        <Link to="about" smooth={true} duration={1000} className='navlink'> About </Link>
        {/* <Link to="/resume" className='navlink'> Resume </Link>
        <Link to="contact" smooth={true} duration={1000} className='navlink'> Contact </Link> */}
      </div>
    </div>
  );
}
