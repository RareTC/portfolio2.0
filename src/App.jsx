import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './components/Contact/Contact';
import Sidebar from './components/Sidebar/Sidebar';


export default function App() {
  
  return (
    <div className="App" >
      <Navbar />
      <Sidebar />
      <Home />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

