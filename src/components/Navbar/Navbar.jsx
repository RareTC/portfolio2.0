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
    purple: ['#EFF1EE', '#8388b2', '#5D468A', '#897085', '#2A1f64'],
    blue: ['#EFF1EE', '#66819a', '#a2b6c1','#2d3e55', '#263850'],
    red: ['#EFF1EE', '#cc7e85', '#bc3e52', '#d46161', '#383652']
  };

  useEffect(() => {
    // Set the initial color values based on the default selected option
    const defaultOption = 'green';
    handleColorChange({ target: { value: defaultOption } });
  }, []);

  return (
    <div className='navbar'>
      <div className="links">
        <select onChange={handleColorChange}>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="red">Red</option>
          <option value="purple">Purple</option>
        </select>
        <Link to='home' smooth={true} duration={1000} className='navlink'>
          <img className='logo' src={Logo} alt="" />
        </Link>
        <Link to="home" smooth={true} duration={1000} className='navlink'> Home </Link>
        <Link to="/projects" className='navlink'> Projects </Link>
        <Link to="about" smooth={true} duration={1000} className='navlink'> About </Link>
        <Link to="/resume" className='navlink'> Resume </Link>
        <Link to="contact" smooth={true} duration={1000} className='navlink'> Contact </Link>
      </div>
    </div>
  );
}
