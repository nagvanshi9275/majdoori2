import React from 'react';
import { Container, Grid, Typography, TextField, Button, FormControl, InputLabel, MenuItem, Select, Box } from '@mui/material';

export default function Findjobs({ username, mob }) {
  const [profession, setProfession] = React.useState('');
  const [place, setPlace] = React.useState('');
  const [experience, setExperience] = React.useState('');
  const [age, setAge] = React.useState('');
  const [mobileNumber, setMobileNumber] = React.useState(mob);

  // Check if all required fields are filled
  const isFormValid = profession && place && experience && age && mobileNumber;

  async function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    if (!isFormValid) return; // Prevent submission if form is not valid

    console.log("form submit ho gya")

    console.log(profession, place, experience, age, mob, username)

    

    try{

      const response = await fetch('https://backend-tkha.onrender.com/api/users/seekjobs', {

       method: 'POST',


       headers: {

        'Content-Type': 'application/json',


       },

       body: JSON.stringify({

        profession: profession,

        place: place,

// Suggested code may be subject to a license. Learn more: ~LicenseLog:1467612093.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:298163115.
        experience: experience,

        age: age,

        phone: mob,

       name: username


       })
     





      })


      if(response.ok){

        console.log("congralatuion")


      } 


    } catch(error){


    console.log(error.message)

    }


  



  }

  const handleProfessionChange = (event) => {
    setProfession(event.target.value);
  };

  const handlePlaceChange = (event) => {
    setPlace(event.target.value);
  };

  const handleExperienceChange = (event) => {
    setExperience(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };

  return (
    <Container maxWidth="sm">
      <Box py={4}>
        <Typography variant="h4" align="center" gutterBottom>
          नौकरी ढूंढें
        </Typography>
        <Typography variant="h6" align="center" gutterBottom>
          कृपया नीचे अपनी जानकारी भरें
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {/* Profession Selection */}
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel shrink={profession !== ''}>पेशा चुनें</InputLabel>
                <Select value={profession} onChange={handleProfessionChange}>
                  <MenuItem value="बढ़ई">बढ़ई</MenuItem>
                  <MenuItem value="राजमिस्त्री">राजमिस्त्री</MenuItem>
                  <MenuItem value="इलेक्ट्रीशियन">इलेक्ट्रीशियन</MenuItem>
                  <MenuItem value="प्लम्बर">प्लम्बर</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Location Input */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="स्थान लिखें"
                variant="outlined"
                value={place}
                onChange={handlePlaceChange}
              />
            </Grid>

            {/* Experience Selection */}
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel shrink={experience !== ''}>अनुभव (सालों में)</InputLabel>
                <Select value={experience} onChange={handleExperienceChange}>
                  <MenuItem value="0-2">0-2</MenuItem>
                  <MenuItem value="3-5">3-5</MenuItem>
                  <MenuItem value="6-10">6-10</MenuItem>
                  <MenuItem value="10+">10+</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Age Input */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="अपनी उम्र लिखें"
                variant="outlined"
                type="number"
                value={age}
                onChange={handleAgeChange}
              />
            </Grid>

            {/* Mobile Number Input */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="मोबाइल नंबर"
                variant="outlined"
                type="tel"
                value={mobileNumber}
                onChange={handleMobileNumberChange}
              />
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                sx={{ fontWeight: 'bold' }}
                type="submit"
                disabled={!isFormValid} // Disable button if form is not valid
              >
                नौकरी खोजें
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
}
