import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Signup3 from "./Signup3";
import Login from "./Login";

export default function Form({setusername, setmob, setprofile}) {
    const [login, setLogin] = React.useState(true);
    const [signup, setSignup] = React.useState(false);
    const navigate = useNavigate();




    function handleSignup() {
        setSignup(false);
        setLogin(true);
        navigate("/register/");

        console.log(setusername)
    }

    function handleLogin() {
        setLogin(false);
        setSignup(true);
        navigate("/register/login");

        //console.log(setusername)
    }

    return (
        <div style={{ textAlign: "center", marginTop: "10px" }}>
            <Routes>
                <Route path="/" element={<Signup3 setusername={setusername} setmob={setmob} setprofile={setprofile}/>} />
                <Route path="/login" element={<Login  setusername={setusername} setmob={setmob} setprofile={setprofile}/>} />
            </Routes>

            {signup && (
                <button 
                    onClick={handleSignup} 
                    style={buttonStyle}
                >
                    पंजीकरण करें
                </button>
            )}

            {login && (
                <button 
                    onClick={handleLogin} 
                    style={buttonStyle}
                >
                    लॉगिन करें
                </button>
            )}
        </div>
    );
}

const buttonStyle = {
    marginTop: "20px",
    marginBottom: "20px",
    padding: "12px 24px",
    backgroundColor: "#FFD700", // Bright yellow color for rural appeal
    color: "black", // Black text for contrast
    border: "none",
    borderRadius: "8px", // Slightly rounded corners for a friendly look
    cursor: "pointer",
    fontSize: "18px", // Slightly larger font size for readability
    fontWeight: "bold", // Bold text for emphasis
    transition: "background-color 0.3s ease",
};

buttonStyle['&:hover'] = {
    backgroundColor: "#FFB600" // Darker shade of yellow on hover
};















