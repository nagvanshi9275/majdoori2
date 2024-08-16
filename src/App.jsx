


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

import Signup1 from "./Signup1"

import Jobs from './Jobs';


import FeaturesSection from './FeaturesSection';


import Page from "./Page";

import Post from "./Post";

import Signup3 from "./Signup3";

import Form from "./Form";

import Login from "./Login";

function App() {
  const [count, setCount] = useState(0);

  const[useremail, setuseremail] = useState()

  return (
    <Router>
      <Navbar />
      <Routes>
        
        <Route path="/register*" element={<Form setuseremail={setuseremail} />} />


        <Route path="/form" element={<Form setuseremail={setuseremail} />} />



{/* Suggested code may be subject to a license. Learn more: ~LicenseLog:950197975. */}
        <Route path="/" element={<Page useremail={useremail} />} />

        <Route path="/post" element={<Post/>}/>

        <Route path="/login" element={<Login/>}/>

{/* Suggested code may be subject to a license. Learn more: ~LicenseLog:1430100677. */}
        

        
      </Routes>
    
    


    </Router>
  );
}

export default App;






