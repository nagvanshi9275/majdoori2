

import React from 'react';
import { Box, Container, Grid, Typography, Button, useTheme, useMediaQuery, Card, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';

const HeroContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  backgroundImage: 'url(https://www.imghippo.com/i/7tzLo1722544394.png)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: 'white',
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  padding: theme.spacing(4),
}));

const Overlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'rgba(0, 0, 0, 0.5)',
}));

const HeroContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  padding: theme.spacing(4),
}));

const ProfessionCard = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 300,
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  margin: theme.spacing(2),
  cursor: 'pointer', // Add pointer cursor
  transition: 'transform 0.3s ease', // Add transition for smooth animation
  '&:hover': {
    transform: 'scale(1.05)', // Scale up effect on hover
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
    margin: theme.spacing(1),
  },
}));

const professions = [
  {
    title: 'बढ़ई',
    description: 'मजबूत लकड़ी के काम और फर्नीचर निर्माण में विशेषज्ञता।',
    image: 'https://i.postimg.cc/SKX0dNTr/carpan.jpg',
  },
  {
    title: 'राजमिस्त्री',
    description: 'मजबूत और टिकाऊ इमारतें बनाने में कुशल। yuva youth',
    image: 'https://i.postimg.cc/xjG55MKt/constructon1.jpg',
  },
  {
    title: 'इलेक्ट्रीशियन',
    description: 'घरों और वाणिज्यिक भवनों के लिए सुरक्षित और कुशल विद्युत समाधान।',
    image: 'https://i.postimg.cc/Vvwn4vR0/electrician.webp',
  },
  {
    title: 'प्लम्बर',
    description: 'विश्वसनीय और तेज़ प्लंबिंग सेवाएं। or products ghar baithe',
    image: 'https://i.postimg.cc/rFfJQGt1/plumber.jpg',
  },
];

export default function HeroSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


     function Click() {

     console.log("Click")


      
     }






  return (
    <HeroContainer maxWidth={false}>
      <Overlay />
      <HeroContent>
        <Grid container spacing={2} direction="column" alignItems="center" justifyContent="center">
          <Grid item>
            <Typography variant="h2" component="h1" gutterBottom>
              मजदूरी में आपका स्वागत है
            </Typography>
            <Typography variant="h5" component="p" gutterBottom>
              ग्रामीण श्रमिकों को अवसरों से जोड़ना 
            </Typography>
          </Grid>

          {/* Profession Cards Section */}
          <Grid item xs={12} md={10}>
            <Grid container spacing={2} justifyContent="center">
              {professions.map((profession, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <ProfessionCard>
                    <CardMedia
                      component="img"
                      alt={profession.title}
                      height="140"
                      image={profession.image}
                    />
                    <CardContent>
                      <Typography variant="h6" component="h3" gutterBottom>
                        {profession.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {profession.description}
                      </Typography>
                    </CardContent>
                  </ProfessionCard>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Call-to-Action Button for Employers */}
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              
              onClick={Click}


              sx={{
                mt: 4,
                padding: '12px 24px',
                fontWeight: 'bold',

                


                borderWidth: 2,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                },
              }}
            
            >
              नौकरियाँ पोस्ट करें
            </Button>
          </Grid>
        </Grid>
      </HeroContent>
    </HeroContainer>
  );
}








