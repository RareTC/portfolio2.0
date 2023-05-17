import './Navbar.css';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';
import ReorderIcon from '@mui/icons-material/Reorder';
import Logo from '../../assets/tclogo.png';


export default function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();
  useEffect(() => {
    setExpandNavbar(false)
  }, [location])

  return (
    <div className='navbar' id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button onClick={() => { setExpandNavbar((prev) => !prev) }}>
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <img className='logo' src={Logo} alt="" />
        <Link to="home" smooth={true} duration={1000}> Home </Link>
        <Link to="/projects"> Projects </Link>
        {/* <Link to="/experience"> Experience </Link> */}
        <Link to="/resume"> Resume </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="about" smooth={true} duration={1000}> About </Link>
      </div>
    </div>
  )
}

