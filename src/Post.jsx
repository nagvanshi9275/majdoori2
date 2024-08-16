

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
} from "@mui/material";

export default function Post() {
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

  const handleSubmit = (e) => {
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
  };

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
        {/* Job Title Select */}
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

        {/* Job Description Text Field */}
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

        {/* Location Text Field */}
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

        {/* Salary Text Field */}
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

        {/* Submit Button */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            marginTop: "20px",
            backgroundColor: "#FF9800",
            "&:hover": {
              backgroundColor: "#E65100",
            },
          }}
        >
          नौकरी पोस्ट करें
        </Button>
      </form>

      {/* Display job postings */}
      <Box sx={{ marginTop: "40px" }}>
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








