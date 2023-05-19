import './App.css';
import React, {useState} from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './components/Contact/Contact';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Projects from './pages/Projects/Projects';


export default function App() {

  const[selectedColor, setSelectedColor] = useState('grey');


  const handleColorChange = (color) => {
    setSelectedColor(color);

    const selectedColors = colorValues[color];
    Object.entries(selectedColors).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--color${key}`, value);
    });
  };
  
  const colorValues = {
    grey: ['#DDDBCC', '#5f8d9e', '#495868', '#8f8f8f', '#1C2120'],
    green: ['#EFF1EE', '#58DA72', '#179c78', '#688482', '#1a222a'],
    purple: ['#ECE8E6', '#62569e', '#64075C', '#966A7F', '#241829'],
    blue: ['#F8F9F9', '#41B1FC', '#3c92b3','#AEBAB3', '#285f87'],
    red: ['#F2F0EC', '#F09393', '#B4223A', '#9F6C66', '#2D212C'],
    orange: ['#F2F2EF', '#e98522', '#ce5615', '#ca6f4d', '#222128'],
    yellow: ['#EFF4EF', '#F2F747', '#DFCD2E', '#BEA944', '#3E6669'],
    pink: ['#F8F5F7', '#ee60a1', '#be2177', '#A296B3', '#843574'],
  };

  return (
    <div className="App" >
      <Navbar selectedColor={selectedColor} onColorChange={handleColorChange}/>
      <Sidebar />
      <Header selectedColor={selectedColor} onColorChange={handleColorChange}/>
      <Home />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

