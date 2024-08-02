

import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CTASection = () => {
  const navigate = useNavigate();

  const Signup = () => {
    navigate('/register'); // Navigate to the signup page

   console.log("button is clicked now")


  };

  return (
    <Box 
      sx={{ 
        padding: 4, 
        backgroundColor: '#F4A300', // Warm Yellow-Orange
        color: '#fff', 
        textAlign: 'center', 
        borderRadius: 2,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Container>
        <Typography 
          variant="h4" 
          component="h2" 
          gutterBottom 
          sx={{ 
            fontWeight: 'bold', 
            color: '#3C3C3B', // Dark Gray for Text
          }}
        >
          शुरू करने के लिए तैयार हैं?
        </Typography>
        <Typography 
          variant="body1" 
          gutterBottom 
          sx={{ 
            color: '#3C3C3B', // Dark Gray for Text
            marginBottom: 2
          }}
        >
          आज ही हमारे साथ जुड़ें और अपनी आवश्यकताओं के लिए सर्वश्रेष्ठ कार्यकर्ताओं को खोजें। साइन अप करें और शुरू करें!
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          size="large" 
          onClick={Signup}
          sx={{ 
            backgroundColor: '#F77F00', // Bright Orange for Button
            '&:hover': {
              backgroundColor: '#F4A300', // Slightly lighter orange on hover
            },
          }}
        >
          साइन अप करें
        </Button>
      </Container>
    </Box>
  );
};

export default CTASection;







