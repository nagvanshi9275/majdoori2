import React, { useState } from "react";
import { TextField, Button, Grid, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router

export default function Signup3({setusername}) {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const [name, setName] = useState(""); // Initialize state with empty string
  const [phone, setPhone] = useState(""); // Initialize state with empty string
  const [password, setPassword] = useState(""); // Initialize state with empty string

  // Function to handle registration
  async function Register() {
    try {
      const response = await fetch('https://backend-tkha.onrender.com/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name, // Pass the name, phone, and password values
          phone: phone,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data);
        // Navigate to the login page or another page after successful registration
      //  navigate("/login");

       console.log(data.name)

       setusername(data.name)


      } else {
        console.error("Registration failed:", data);
        // Optionally display an error message to the user
      }
    } catch (error) {
      console.error("Error:", error.message);
      // Optionally display an error message to the user
    }
  }

  // Event handlers for input changes
  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "40vh",
        padding: 2,
      }}
    >
      <Grid container spacing={2} maxWidth={400}>
        <Grid item xs={12}>
          <Typography variant="h5" align="center">
            पंजीकरण फ़ॉर्म
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="नाम"
            variant="outlined"
            value={name} // Bind value to state
            onChange={handleChangeName} // Update state on change
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="फ़ोन नंबर"
            variant="outlined"
            type="tel"
            value={phone} // Bind value to state
            onChange={handleChangePhone} // Update state on change
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="पासवर्ड"
            variant="outlined"
            type="password"
            value={password} // Bind value to state
            onChange={handleChangePassword} // Update state on change
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={Register} // Call Register function on button click
          >
            पंजीकरण करें
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}









