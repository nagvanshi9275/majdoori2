

import React, { useState } from "react";
import { TextField, Button, Grid, Box, Typography } from "@mui/material";


import { useNavigate } from "react-router-dom";


export default function Login({setusername, setmob, setprofile}) {
  const [phone, setPhone] = useState(""); // State for phone number
  const [password, setPassword] = useState(""); // State for password

  const navigate = useNavigate(); 


  async function Login1() {
    try {
      const response = await fetch('https://backend-tkha.onrender.com/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone: phone, // Send phone and password in the request body
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful:", data);
        // Handle successful login, e.g., navigate to a different page

    setusername(data.name)

    setmob(data.phone)

    setprofile(true)

    navigate('/')

      } else {
        console.error("Login failed:", data);
        // Optionally display an error message to the user
      }
    } catch (error) {
      console.error("Error:", error.message);
      // Optionally display an error message to the user
    }
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "40vh",
        padding: 2,
        backgroundColor: "#f5f5f5", // Light background color
      }}
    >
      <Grid container spacing={2} maxWidth={400}>
        <Grid item xs={12}>
          <Typography variant="h5" align="center" sx={{ marginBottom: 2 }}>
            लॉगिन पेज
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="फ़ोन नंबर"
            variant="outlined"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)} // Update phone state
            sx={{
              backgroundColor: "#ffffff", // White background for input fields
              borderRadius: 1,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="पासवर्ड"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update password state
            sx={{
              backgroundColor: "#ffffff",
              borderRadius: 1,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={Login1} // Call Login1 function on button click
            sx={{
              backgroundColor: "#4caf50", // Green color to represent growth and trust
              padding: "10px 0",
              fontSize: "16px",
            }}
          >
            लॉगिन करें
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}







