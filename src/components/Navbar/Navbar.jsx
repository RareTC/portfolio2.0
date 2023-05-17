import './Navbar.css';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';
import ReorderIcon from '@mui/icons-material/Reorder';
import Logo from '../../assets/tclogo.png';


export default function Navbar({ onColorChange }) {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();
  useEffect(() => {
    setExpandNavbar(false)
  }, [location])

  //function to change colors from nav bar select menu. Passed to App in this function 
  const handleColorChange = (colors) => {
    onColorChange(colors);
    // console.log(colors)
  };

  const colorValues = {
    green: ['#EEFF1E', '#58DA72', '#179c78', '#688482', '#1a222a'],
    purple: ['#EBE2EA', '#8388b2', '#5D468A', '#897085', '#2A1f64'],
    blue: ['#f5f7f6', '#66819a', '#a2b6c1','#2d3e55', '#263850'],
    red: ['#f4f7f2', '#cc7e85', '#bc3e52', '#d46161', '#383652']
  };

  return (
    <div className='navbar' id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button onClick={() => { setExpandNavbar((prev) => !prev) }}>
          <ReorderIcon />
        </button>
      </div>
      <div className="links">

      <select onChange={(colors) => handleColorChange(colors.target.value)}>
          <option value={colorValues.blue}>Blue</option>
          <option value={colorValues.green}>Green</option>
          <option value={colorValues.red}>Red</option>
          <option value={colorValues.purple}>Purple</option>
        </select>

        <Link to='home' smooth={true} duration={1000}>
          <img className='logo' src={Logo} alt="" />
        </Link>
        <Link to="home" smooth={true} duration={1000}> Home </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/resume"> Resume </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="about" smooth={true} duration={1000}> About </Link>
      </div>
    </div>
  )
}

