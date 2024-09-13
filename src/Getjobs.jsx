
import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Grid, Container, CardActionArea, Box, CardActions, Button } from "@mui/material";

export default function GetJobs({ heading, mob }) {
  const [majdoori, setMajdoori] = useState([]); // State to store job data

  useEffect(() => {
    async function fetchJobs() {
      try {
        const response = await fetch("https://backend-tkha.onrender.com/api/users/fetchjobs", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            phone: mob,
            heading: heading,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }

        const data = await response.json(); // Assuming the response is in JSON format
        setMajdoori(data.filterjobs); // Store the filtered jobs in the state
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchJobs();
  }, [mob, heading]); // Use props directly as dependencies

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ color: "#1976d2", fontWeight: 'bold' }}>
        Available Jobs
      </Typography>

      {majdoori.length > 0 ? (
        <Grid container spacing={4}>
          {majdoori.map((job, index) => (
            <Grid item xs={12} sm={6} md={4} key={job._id}>
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
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Box mb={2}>
                      <Typography variant="h6" color="primary" gutterBottom>
                        Job {index + 1}
                      </Typography>
                    </Box>

                    {/* Display heading */}
                    <Box mb={1}>
                      <Typography variant="subtitle2" color="textSecondary">
                        <strong>Heading:</strong>
                      </Typography>
                      <Typography variant="body2" color="textPrimary">
                        {Array.isArray(job.heading) && job.heading.length > 0 ? job.heading[0] : "N/A"}
                      </Typography>
                    </Box>

                    {/* Display description */}
                    <Box mb={1}>
                      <Typography variant="subtitle2" color="textSecondary">
                        <strong>Description:</strong>
                      </Typography>
                      <Typography variant="body2" color="textPrimary">
                        {Array.isArray(job.description) && job.description.length > 0 ? job.description[0] : "N/A"}
                      </Typography>
                    </Box>

                    {/* Display location */}
                    <Box mb={1}>
                      <Typography variant="subtitle2" color="textSecondary">
                        <strong>Location:</strong>
                      </Typography>
                      <Typography variant="body2" color="textPrimary">
                        {Array.isArray(job.location) && job.location.length > 0 ? job.location[0] : "N/A"}
                      </Typography>
                    </Box>

                    {/* Display salary */}
                    <Box mb={1}>
                      <Typography variant="subtitle2" color="textSecondary">
                        <strong>Salary:</strong>
                      </Typography>
                      <Typography variant="body2" color="textPrimary">
                        {Array.isArray(job.sallary) && job.sallary.length > 0 ? job.sallary[0] : "N/A"}
                      </Typography>
                    </Box>
                  </CardContent>

                  {/* Action Button */}
                  <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                    <Button size="small" color="primary" variant="contained">
                      Apply Now
                    </Button>
                  </CardActions>
                </Card>
              </CardActionArea>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="h6" align="center" color="textSecondary" sx={{ mt: 4 }}>
          No jobs found.
        </Typography>
      )}
    </Container>
  );
}










