


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

import Postedjobs from "./Postedjob";

import Findjobs from "./Findjobs";

import Getjobs  from "./Getjobs";

import Talent from "./Talent";

import Profile from "./Profile";

function App() {
  const [count, setCount] = useState(0);

  const[useremail, setuseremail] = useState()

  const[username, setusername] = useState(null)

  const[mob, setmob] = useState(null)

  const[heading, setheading] = useState(null)

 const[title, settitle] = useState('')

  const[jobnaam, setjobnaam] = useState("")


  const[profile, setprofile] = useState(false);


  return (
    <Router>
      <Navbar profile={profile} />
      <Routes>
        
        <Route path="/register*" element={<Form setusername={setusername} setmob={setmob} setprofile={setprofile}/>} />


        <Route path="/form" element={<Form setusername={setusername} />} />



{/* Suggested code may be subject to a license. Learn more: ~LicenseLog:950197975. */}
        <Route path="/" element={<Page username={username} />} />

        <Route path="/post" element={<Post mob={mob} />}/>

        <Route path="/login" element={<Login/>}/>


        <Route path="/jobs" element={<Post mob={mob} username={username} settitle={settitle} />}/>

{/* Suggested code may be subject to a license. Learn more: ~LicenseLog:1430100677. */}
        
<Route path="/postedjobs" element={<Postedjobs mob={mob}/>}/>

<Route path="/findjobs" element={<Findjobs mob={mob} username={username} setheading={setheading}/>}/>
    

<Route path="/Getjobs" element={<Getjobs heading={heading} mob={mob} />}/>

<Route path="/findtalent" element={<Talent mob={mob} title={title}/>}/>


<Route path="/profile" element={<Profile username={username} mob={mob} />}/>


      </Routes>
    
    


    </Router>
  );
}

export default App;






