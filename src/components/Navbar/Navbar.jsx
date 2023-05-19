import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import Select from 'react-select';
import Logo from '../../assets/tclogo.png';

export default function Navbar({ selectedColor, onColorChange }) {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
      return '10px';
    } else if (windowWidth <= 870) {
      return '12px';
    } else {
      return '18px';
    }
  };

  const getWidth = () => {
    if (windowWidth <= 500) {
      return '70px';
    } else if (windowWidth <= 870) {
      return '100px';
    } else {
      return '180px';
    }
  };

  return (
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
        <Link to='welcome' smooth={true} duration={1000} className='navlink'>
          <img className='logo' src={Logo} alt="" />
        </Link>
        <Link to="home" offset={-58} smooth={true} duration={1000} className='navlink'> Home </Link>
        <Link to="projectList" offset={-70} smooth={true} duration={1000} className='navlink'> Projects </Link>
        <Link to="about" offset={-60} smooth={true} duration={1000} className='navlink'> About </Link>
      </div>
    </div>
  );
}
