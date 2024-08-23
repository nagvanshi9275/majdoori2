import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Card,
  CardContent,
  Grid,
} from "@mui/material";


import { Route, Routes, useNavigate } from "react-router-dom";


export default function Post({ mob, username }) {

  const navigate = useNavigate();

  const [jobDetails, setJobDetails] = useState({
    title: "",
    description: "",
    location: "",
    salary: "",
  });

  const [jobs, setJobs] = useState([]); // Array to store job postings

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();

    // Add the new job to the jobs array
    setJobs((prevJobs) => [...prevJobs, jobDetails]);

    // Reset form after submission
    setJobDetails({
      title: "",
      description: "",
      location: "",
      salary: "",
    });

    try {
      const response = await fetch('https://backend-tkha.onrender.com/api/users/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          heading: jobDetails.title,
          description: jobDetails.description,
          location: jobDetails.location,
          salary: jobDetails.salary,
          phone: mob,
          name: username
        })
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Successfully posted job ", data);
      }

    } catch (error) {
      console.log(error.message);
    }
  };

  async function handleScrollToJobs()  {
   
    
  try{

  const response = await fetch('https://backend-tkha.onrender.com/api/users/Getdata', {

  method: 'POST',

  headers: {

    'Content-Type': 'application/json'


  },

  body: JSON.stringify({
   
    phone: mob


  })




  })

  const data = await response.json()

if(response.ok){

  console.log("see privious jobs", data)

  navigate('/postedjobs')



}

  } catch(error){


  console.log(error.message)

  }







  }

  return (
    <Box
      sx={{
        maxWidth: 600,
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: "#fff",
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        नौकरी पोस्ट करें
      </Typography>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth margin="normal" required>
          <InputLabel id="job-title-label">नौकरी का शीर्षक</InputLabel>
          <Select
            labelId="job-title-label"
            label="नौकरी का शीर्षक"
            name="title"
            value={jobDetails.title}
            onChange={handleChange}
            variant="outlined"
          >
            <MenuItem value="Construction">निर्माण</MenuItem>
            <MenuItem value="Electrician">इलेक्ट्रीशियन</MenuItem>
            <MenuItem value="Plumber">प्लंबर</MenuItem>
            <MenuItem value="Carpenter">बढ़ई</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="नौकरी का विवरण"
          variant="outlined"
          fullWidth
          margin="normal"
          name="description"
          value={jobDetails.description}
          onChange={handleChange}
          multiline
          rows={4}
          required
        />

        <TextField
          label="स्थान"
          variant="outlined"
          fullWidth
          margin="normal"
          name="location"
          value={jobDetails.location}
          onChange={handleChange}
          required
        />

        <TextField
          label="वेतन"
          variant="outlined"
          fullWidth
          margin="normal"
          name="salary"
          value={jobDetails.salary}
          onChange={handleChange}
          type="number"
          required
        />

        {/* Buttons Section */}
        <Grid container spacing={2} sx={{ marginTop: "20px" }}>
          <Grid item xs={12} sm={6}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                backgroundColor: "#FF9800",
                "&:hover": {
                  backgroundColor: "#E65100",
                },
              }}
            >
              नौकरी पोस्ट करें
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              sx={{
                backgroundColor: "#03A9F4",
                "&:hover": {
                  backgroundColor: "#0288D1",
                },
              }}
              onClick={handleScrollToJobs}
            >
              पोस्ट की गई नौकरियां
            </Button>
          </Grid>
        </Grid>
      </form>

      {/* Display job postings */}
      <Box sx={{ marginTop: "40px" }} id="jobs-section">
        <Typography variant="h5" component="h2" gutterBottom>
          पोस्ट की गई नौकरियां
        </Typography>
        {jobs.map((job, index) => (
          <Card key={index} sx={{ marginBottom: "20px" }}>
            <CardContent>
              <Typography variant="h6" component="h3">
                {job.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                स्थान: {job.location}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                वेतन: ₹{job.salary}
              </Typography>
              <Typography variant="body1" sx={{ marginTop: "10px" }}>
                {job.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
