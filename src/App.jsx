import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './components/Contact/Contact';
import Sidebar from './components/Sidebar/Sidebar';
import Resume from './components/ResumeView/ResumeView';

const defaultColor = ['#EFF1EE', '#58DA72', '#179c78', '#688482', '#1a222a']

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
      <Sidebar colors={[c0, c1, c2, c3, c4]}/>
      <Home colors={[c0, c1, c2, c3, c4]}/>
      <About />
      <Contact colors={[c0, c1, c2, c3, c4]}/>
      <Footer />
    </div>
  );
}

