

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
//import Home from './pages/Home';
//import Login from './pages/Login';
//import About from './pages/About';
//import Contact from './pages/Contact';

import HeroSection from './HeroSection';

import Signup from "./Signup";

import Jobs from './Jobs';


import FeaturesSection from './FeaturesSection';


import Page from "./Page"

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar />
      <Routes>
        
        <Route path="/register" element={<Signup />} />

{/* Suggested code may be subject to a license. Learn more: ~LicenseLog:950197975. */}
        <Route path="/" element={<Page />} />

        

{/* Suggested code may be subject to a license. Learn more: ~LicenseLog:1430100677. */}
        

        
      </Routes>
    
    


    </Router>
  );
}

export default App;








