
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, Typography, Grid, Container } from "@mui/material";

export default function Postedjobs({ mob }) {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function Getdata() {
      try {
        const response = await fetch('https://backend-tkha.onrender.com/api/users/Getdata', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            phone: mob,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          setJobs([data]);
        }
      } catch (error) {
        console.log(error.message);
      }
    }

    Getdata();
  }, [mob]);

  const render = jobs.map((job, index) => (
    <Grid container spacing={2} key={index}>
      {job.location.map((location, locIndex) => (
        <Grid item xs={12} sm={6} md={4} key={locIndex}>
          <Card sx={{ maxWidth: 345, mb: 2 }}>
            <CardHeader
              
              subheader={`स्थान: ${location}`}
            />
            <CardContent>
              <Typography variant="h6" color="text.secondary">
                शीर्षक:
              </Typography>
              {job.heading[locIndex] && (
                <Typography variant="body2" color="text.primary">
                  {job.heading[locIndex]}
                </Typography>
              )}
              <Typography variant="h6" color="text.secondary" sx={{ mt: 2 }}>
                विवरण:
              </Typography>
              {job.description && job.description[locIndex] && (
                <Typography variant="body2" color="text.primary">
                  {job.description[locIndex]}
                </Typography>
              )}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  ));

  return (
    <Container sx={{ mt: 12 }}>
      <Typography variant="h4" gutterBottom>
        पिछले कार्य
      </Typography>
      {render}
    </Container>
  );
}








