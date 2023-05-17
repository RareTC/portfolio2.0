import './App.css';
import { Routes, Route } from "react-router-dom";
import { Links } from 'react-scroll';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';

function App() {
  return (
    <div className="App">
      <Navbar />
        <About />
        <Home />
      <Footer />
    </div>
  );
}

export default App;
