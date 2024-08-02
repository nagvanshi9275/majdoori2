

import { Box, Container, Grid, Typography, Avatar } from '@mui/material';

// Sample testimonials data
const testimonials = [
  {
    name: 'राम कुमार',
    title: 'कारपेंटर',
    feedback: 'मुझे मजदूरी के माध्यम से कई काम मिले हैं। यह बहुत उपयोगी मंच है।',
    image: 'https://i.postimg.cc/pTf4F7dY/Untitled-design-2.png',
  },
  {
    name: 'सीता शर्मा',
    title: 'इलेक्ट्रीशियन',
    feedback: 'मैंने यहां से कई काम हासिल किए हैं और मेरे ग्राहक भी संतुष्ट हैं।',
    image: 'https://i.postimg.cc/MTPTYkC8/Untitled-design-3.png',
  },
];

const TestimonialsSection = () => (
  <Box sx={{ padding: 4, backgroundColor: '#f9f9f9' }}>
    <Container>
      <Typography variant="h4" component="h2" gutterBottom>
        क्या कहते हैं हमारे ग्राहक
      </Typography>
      <Grid container spacing={4}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                textAlign: 'center',
                padding: 3,
                backgroundColor: '#fff',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                border: '1px solid #e0e0e0',
                borderRadius: 1,
                transform: 'rotate(-2deg)',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <Avatar
                src={testimonial.image}
                alt={testimonial.name}
                sx={{ width: 80, height: 80, mb: 2, mx: 'auto' }}
              />
              <Typography variant="h6" component="h3" gutterBottom>
                {testimonial.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                {testimonial.title}
              </Typography>
              <Typography variant="body1" mt={2} sx={{ textAlign: 'center', px: 2 }}>
                "{testimonial.feedback}"
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default TestimonialsSection;





