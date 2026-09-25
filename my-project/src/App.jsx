import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Compnents/Navbar';
import Footer from './Compnents/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Skill from './pages/Skill';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skill />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
