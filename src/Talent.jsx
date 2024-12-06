


import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Grid, Container, CardActionArea, Box, CardActions, Button } from "@mui/material";
import { Work, Phone, Person, School, LocationOn } from '@mui/icons-material'; // Import icons

export default function Talent({ mob, title }) {
  const [talents, setTalents] = useState([]); // State to store the fetched talents
  const [loading, setLoading] = useState(true); // State to show loading
  const [error, setError] = useState(null); // State to store any errors

  // Function to fetch talents based on job title and mob
  const fetchTalents = async () => {
    try {
      setLoading(true); // Start loading when the request is initiated
      const response = await fetch('http://localhost:4000/api/users/talent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone: mob,      // Using the phone number (mob)
          profession: title // Using the job title to search for talents
        }),
      });

      const talentData = await response.json();
      if (response.ok) {
        setTalents(talentData.filterjobs || []); // Store the fetched talents
      } else {
        throw new Error(talentData.message || 'Failed to fetch talents');
      }
    } catch (error) {
      setError(error.message); // Store error message if request fails
    } finally {
      setLoading(false); // Stop loading once the request is completed
    }
  };

  // Use useEffect to fetch talents when the component mounts
  useEffect(() => {
    fetchTalents();
  }, [mob, title]); // Fetch when either mob or title changes

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ color: "#FF5722", fontWeight: 'bold' }}>
        Available Talents
      </Typography>

      {loading && <Typography align="center">Loading talents...</Typography>}

      {error && <Typography align="center" color="error">{error}</Typography>}

      {talents.length > 0 ? (
        <Grid container spacing={4}>
          {/* Loop through talents */}
          {talents.map((talent) =>
            // Loop through each profession and place to create a card for each combination
            talent.profession.map((profession, professionIndex) => (
              talent.place.map((place, placeIndex) => (
                <Grid item xs={12} sm={6} md={4} key={`${talent._id}-${professionIndex}-${placeIndex}`}>
                  <CardActionArea>
                    <Card
                      variant="outlined"
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        boxShadow: 3,
                        transition: 'transform 0.2s',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                        },
                        borderColor: "#FF9800"
                      }}
                    >
                      <CardContent sx={{ flexGrow: 1, p: 3 }}>
                        <Box mb={2}>
                          <Typography variant="h6" color="secondary" gutterBottom>
                            <Work sx={{ verticalAlign: 'middle', mr: 1, color: "#FF9800" }} /> {profession || "N/A"}
                          </Typography>
                        </Box>

                        {/* Display name */}
                        <Box mb={1} display="flex" alignItems="center">
                          <Person sx={{ mr: 1, color: "#FF9800" }} />
                          <Typography variant="subtitle2" color="textSecondary">
                            <strong>Name:</strong>
                          </Typography>
                          <Typography variant="body2" color="textPrimary" sx={{ ml: 1 }}>
                            {talent.name || "N/A"}
                          </Typography>
                        </Box>

                        {/* Display phone */}
                        <Box mb={1} display="flex" alignItems="center">
                          <Phone sx={{ mr: 1, color: "#FF9800" }} />
                          <Typography variant="subtitle2" color="textSecondary">
                            <strong>Phone:</strong>
                          </Typography>
                          <Typography variant="body2" color="textPrimary" sx={{ ml: 1 }}>
                            {talent.phone || "N/A"}
                          </Typography>
                        </Box>

                        {/* Display education */}
                        <Box mb={1} display="flex" alignItems="center">
                          <School sx={{ mr: 1, color: "#FF9800" }} />
                          <Typography variant="subtitle2" color="textSecondary">
                            <strong>Education:</strong>
                          </Typography>
                          <Typography variant="body2" color="textPrimary" sx={{ ml: 1 }}>
                            {talent.education || "N/A"}
                          </Typography>
                        </Box>

                        {/* Display location (place) */}
                        <Box mb={1} display="flex" alignItems="center">
                          <LocationOn sx={{ mr: 1, color: "#FF9800" }} />
                          <Typography variant="subtitle2" color="textSecondary">
                            <strong>Location:</strong>
                          </Typography>
                          <Typography variant="body2" color="textPrimary" sx={{ ml: 1 }}>
                            {place || "N/A"}
                          </Typography>
                        </Box>
                      </CardContent>

                      {/* Action Button */}
                      <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                        <Button size="small" variant="contained" sx={{ backgroundColor: "#FF5722", '&:hover': { backgroundColor: "#E64A19" } }}>
                          Contact
                        </Button>
                      </CardActions>
                    </Card>
                  </CardActionArea>
                </Grid>
              ))
            ))
          )}
        </Grid>
      ) : (
        !loading && <Typography variant="h6" align="center" color="textSecondary" sx={{ mt: 4 }}>
          No talents found.
        </Typography>
      )}
    </Container>
  );
}







