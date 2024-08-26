

import React from 'react';
import { Box, Container, Grid, Typography, Button, useTheme, useMediaQuery, Card, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

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
  minHeight: 320, // Ensure all cards have the same minimum height
  display: 'flex',
  flexDirection: 'column', // Ensure that content inside card is vertically aligned
  justifyContent: 'space-between', // Distribute space evenly between elements
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  margin: theme.spacing(2),
  cursor: 'pointer',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
    margin: theme.spacing(1),
  },
}));

const ProfessionCardContent = styled(CardContent)({
  flexGrow: 1, // Ensure the content takes up available space
});

const professions = [
  {
    title: 'बढ़ई',
    description: 'मजबूत लकड़ी के काम और फर्नीचर निर्माण में विशेषज्ञता।',
    image: 'https://i.postimg.cc/SKX0dNTr/carpan.jpg',
  },
  {
    title: 'राजमिस्त्री',
    description: 'मजबूत और टिकाऊ इमारतें बनाने में कुशल।',
    image: 'https://i.postimg.cc/xjG55MKt/constructon1.jpg',
  },
  {
    title: 'इलेक्ट्रीशियन',
    description: 'घरों और वाणिज्यिक भवनों के लिए सुरक्षित और कुशल विद्युत समाधान।',
    image: 'https://i.postimg.cc/Vvwn4vR0/electrician.webp',
  },
  {
    title: 'प्लम्बर',
    description: 'विश्वसनीय और तेज़ प्लंबिंग सेवाएं।',
    image: 'https://i.postimg.cc/rFfJQGt1/plumber.jpg',
  },
];

export default function HeroSection({ username }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  function handlePostJobClick() {
    if (username != null) {
      navigate('/jobs');
    } else {
      navigate('/register');
    }
  }

  function handleFindJobClick() {
    //navigate('/find-jobs'); // Replace with the actual route for finding jobs


    if(username != null){

      navigate('/findjobs');



    } else {

    navigate('/register')

    }




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
                    <ProfessionCardContent>
                      <Typography variant="h6" component="h3" gutterBottom>
                        {profession.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {profession.description}
                      </Typography>
                    </ProfessionCardContent>
                  </ProfessionCard>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Call-to-Action Buttons */}
          <Grid item container direction={isMobile ? 'column' : 'row'} spacing={2} justifyContent="center">
            <Grid item>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                onClick={handlePostJobClick}
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
            <Grid item>
              <Button
                variant="outlined"
                color="secondary"
                size="large"
                onClick={handleFindJobClick}
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
                नौकरी ढूंढें
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </HeroContent>
    </HeroContainer>
  );
}







