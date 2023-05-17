import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './components/Contact/Contact';

const defaultColor = ['#f5f7f6', '#66819a', '#a2b6c1','#2d3e55', '#263850'];

export default function App() {
  const [selectedColors, setSelectedColors] = useState(defaultColor);

  const [c0, c1, c2, c3, c4] = selectedColors;
  console.log(c0, c1, c2, c3, c4)
  
  const handleColorChange = (colors) => {
    setSelectedColors(colors.split(','));
  }
  
  return (
    <div className="App" style={{ backgroundColor: c4 }}>
      <Navbar onColorChange={handleColorChange} colors={[c0, c1, c2, c3, c4]}/>
      <Home colors={[c0, c1, c2, c3, c4]}/>
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

