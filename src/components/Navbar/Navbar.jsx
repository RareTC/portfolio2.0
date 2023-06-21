import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link} from 'react-scroll';
import Select from 'react-select';
import Logo from '../../assets/tclogo.png';
import {HiMenu, HiX} from 'react-icons/hi';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Navbar({ selectedColor, onColorChange }) {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(()=> {
    AOS.init({duration: 1000});
  },[])

  const options = [
    { value: 'grey', label: 'Neutral'},
    { value: 'red', label: 'red'},
    { value: 'orange', label: 'orange'},
    { value: 'yellow', label: 'yellow'},
    { value: 'green', label: 'green'},
    { value: 'blue', label: 'blue'},
    { value: 'purple', label: 'purple'},
    { value: 'pink', label: 'pink'},
  ]

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.data.value,
      fontSize: getFontSize(), 
    }),
    control: (provided, state) => ({
      ...provided,
      backgroundColor: state.selectProps.value,
      width: getWidth(), 
      fontSize: getFontSize(), 
    }),
    menu: (styles) => ({
      ...styles,
      color: '#2d3e45',
      fontSize: getFontSize(), 
    }),
  };
  
  // Function to handle window resize event
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getFontSize = () => {
    if (windowWidth <= 500) {
      return '16px';
    } else if (windowWidth <= 900) {
      return '16px';
    } else {
      return '18px';
    }
  };

  const getWidth = () => {
    if (windowWidth <= 900) {
      return '120px';
    } else {
      return '180px';
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {windowWidth <= 870 ? (
        <div className='mobilenavbar'>
        <div className='mobilelogo'>
          <Link to='welcome' smooth={true} duration={1000} id='navlogo'>
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className='mobiletheme'>
        Theme
          <Select
          className='reactselect'
          options={options}
          onChange={(option) => onColorChange(option.value)}
          value={options.find(option => option.value === selectedColor)}
          styles={customStyles}
          />
      </div>
      <div className='mobilemenu' onClick={toggleMenu}>
        {isMenuOpen ? <HiX data-aos="flip-right" className='mobilex'/> : <HiMenu data-aos='flip-left'/>}
      </div>
      { isMenuOpen && (
        <div className='mobilelinks' data-aos="fade-left">
          <Link to="home" offset={-58} smooth={true} duration={1000} className='mobilenavlink' onClick={toggleMenu}> Home </Link>
          <Link to="projectList" offset={-170} smooth={true} duration={1000} className='mobilenavlink' onClick={toggleMenu}> Projects </Link>
          <Link to="about" offset={-60} smooth={true} duration={1000} className='mobilenavlink' onClick={toggleMenu}> About </Link>
          <Link to="contact" offset={-190} smooth={true} duration={1000} className='mobilenavlink' onClick={toggleMenu}> Contact </Link>
        </div>
      )}
      </div>
      ) : (
        <div className='navbar'>
        <div className="links">
          <div className='theme'>
            Theme
            <Select
            className='reactselect'
            options={options}
            onChange={(option) => onColorChange(option.value)}
            value={options.find(option => option.value === selectedColor)}
            styles={customStyles}
            />
          </div>
          <Link to='welcome' smooth={true} duration={1000} id='navlogo'>
            <img className='logo' src={Logo} alt="logo" />
          </Link>
          <Link to="home" offset={-58} smooth={true} duration={1000} className='navlink'> Home </Link>
          <Link to="projectList" offset={-210} smooth={true} duration={1000} className='navlink'> Projects </Link>
          <Link to="about" offset={-60} smooth={true} duration={1000} className='navlink'> About </Link>
          <Link to="contact" offset={-190} smooth={true} duration={1000} className='navlink'> Contact </Link>
        </div>
      </div>
      )}
    </>
  );
};
