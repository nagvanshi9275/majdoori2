







import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, CardMedia } from '@mui/material';

const features = [
  {
    icon: 'https://i.postimg.cc/TwtBRsYk/resume1.jpg',
    title: 'विस्तृत कार्य प्रोफाइल',
    description: 'कार्यकर्ताओं के विस्तृत प्रोफाइल के माध्यम से सही उम्मीदवार का चयन करें।',
  },
  {
    icon: 'https://i.postimg.cc/tCTT311f/phone1.webp',
    title: 'सीधे संपर्क',
    description: 'कार्यकर्ता से सीधे संपर्क करें और अपनी आवश्यकताओं पर चर्चा करें।',
  },
  {
    icon: 'https://i.postimg.cc/hjp4kgzh/response.webp',
    title: 'त्वरित प्रतिक्रिया',
    description: 'जल्दी से प्रतिक्रिया प्राप्त करें और कार्य को तुरंत शुरू करें।',
  },
];

const FeaturesSection = () => (
  <Box sx={{ padding: 4, backgroundColor: '#f9f9f9' }}>
    <Container>
      <Typography variant="h4" component="h2" gutterBottom align="center">
        हमारी विशेषताएं
      </Typography>
      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                maxWidth: 345,
                margin: '0 auto',
                boxShadow: 3,
                borderRadius: '16px', // Adding a slight border-radius for card styling
              }}
            >
              <CardContent sx={{ textAlign: 'center', padding: 3 }}>
                <CardMedia
                  component="img"
                  src={feature.icon}
                  alt={feature.title}
                  sx={{
                    width: 100,
                    height: 100,
                    borderRadius: '50%', // Make the image circular
                    margin: '0 auto', // Center the image
                    mb: 2, // Add margin-bottom
                  }}
                />
                <Typography variant="h6" component="h3" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default FeaturesSection;











