import React from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import Select from 'react-select';
import Logo from '../../assets/tclogo.png';

export default function Navbar({ selectedColor, onColorChange }) {

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
    }),
    control: (provided, state) => ({
      ...provided,
      backgroundColor: state.selectProps.value,
      width: '180px',
      fontSize: '18px',
    }),
    menu: (styles) => ({
      ...styles,
      color: '#2d3e45',
      fontSize: '18px',
    }),
  };

  const mobileStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.data.value,
    }),
    control: (provided, state) => ({
      ...provided,
      backgroundColor: state.selectProps.value,
      width: '100px',
      fontSize: '12px',
    }),
    menu: (styles) => ({
      ...styles,
      color: '#2d3e45',
      fontSize: '12px',
    }),
  };

  const smallStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.data.value,
    }),
    control: (provided, state) => ({
      ...provided,
      backgroundColor: state.selectProps.value,
      width: '70px',
      fontSize: '10px',
    }),
    menu: (styles) => ({
      ...styles,
      color: '#2d3e45',
      fontSize: '10px',
    }),
  };

  //use the below function to adjust select react component for mobile
  if (window.innerWidth <= 870) {
    Object.assign(customStyles, mobileStyles);
  }

  if (window.innerWidth <= 500) {
    Object.assign(customStyles, smallStyles);
  }

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
