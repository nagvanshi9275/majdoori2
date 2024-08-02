

// Footer.jsx
import React from 'react';
import { Box, Container, Typography, Link, Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => (
  <Box sx={{ backgroundColor: '#6B4F4F', color: '#FFF', padding: 4 }}>
    <Container>
      <Grid container spacing={4}>
        {/* Company Information */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            हमारी कंपनी
          </Typography>
          <Typography variant="body2">
            गाँव में हम एक विश्वसनीय और सुलभ मंच प्रदान करते हैं ताकि आप अपनी जरूरतों के अनुसार सही कामकाजी को खोज सकें।
          </Typography>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            त्वरित लिंक
          </Typography>
          <Typography variant="body2">
            <Link href="/" color="inherit" underline="hover">होम</Link><br />
            <Link href="/about" color="inherit" underline="hover">हमारे बारे में</Link><br />
            <Link href="/contact" color="inherit" underline="hover">संपर्क</Link><br />
            <Link href="/privacy" color="inherit" underline="hover">गोपनीयता नीति</Link>
          </Typography>
        </Grid>

        {/* Social Media Links */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            सोशल मीडिया
          </Typography>
          <Link href="https://www.facebook.com" color="inherit" sx={{ marginRight: 2 }}>
            <FacebookIcon />
          </Link>
          <Link href="https://www.twitter.com" color="inherit" sx={{ marginRight: 2 }}>
            <TwitterIcon />
          </Link>
          <Link href="https://www.instagram.com" color="inherit">
            <InstagramIcon />
          </Link>
        </Grid>

        {/* Contact Information */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            संपर्क करें
          </Typography>
          <Typography variant="body2">
            <EmailIcon sx={{ verticalAlign: 'middle', marginRight: 1 }} />
            <Link href="mailto:info@example.com" color="inherit">info@example.com</Link>
          </Typography>
        </Grid>
      </Grid>

      {/* Copyright Notice */}
      <Box sx={{ textAlign: 'center', marginTop: 4 }}>
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} आपकी कंपनी का नाम. सभी अधिकार सुरक्षित।
        </Typography>
      </Box>
    </Container>
  </Box>
);

export default Footer;












