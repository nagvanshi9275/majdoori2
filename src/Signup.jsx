


import React, { useState } from 'react';
import { Client, Account, ID } from 'appwrite';
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Paper,
  Grid,
  Avatar
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom'; // Correct import

// Initialize Appwrite Client
const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1') // Replace with your Appwrite endpoint
  .setProject('66abb86600148c85e45b'); // Replace with your Appwrite project ID

const account = new Account(client);

export default function Signup() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [show, setShow] = useState(false);

  const navigate = useNavigate(); // Correct usage

  // Handle user login
  async function login(email, password) {
    try {
      await account.createEmailPasswordSession(email, password);
      const user = await account.get();
      setLoggedInUser(user);
      setShow(true);
      navigate('/'); // Navigate after login
    } catch (error) {
      console.error('Login error:', error);
      alert('Failed to log in. Please check your credentials.');
    }
  }

  // Handle user registration
  async function register() {
    try {
      await account.create(ID.unique(), email, password, name);
      login(email, password); // Automatically log in the user after registration
      
      navigate('/'); 


    } catch (error) {
      console.error('Registration error:', error);
      alert('Failed to register. Please check your details.');
    }
  }

  // Handle user logout
  async function logout() {
    try {
      await account.deleteSession('current');
      setLoggedInUser(null);
    } catch (error) {
      console.error('Logout error:', error);
      alert('Failed to log out.');
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 8 }}>
        <Grid container direction="column" alignItems="center">
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {loggedInUser ? `Welcome, ${loggedInUser.name}` : 'Sign in / Register'}
          </Typography>
        </Grid>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => login(email, password)}
          >
            Login
          </Button>
          <Button
            fullWidth
            variant="outlined"
            color="secondary"
            sx={{ mt: 1, mb: 2 }}
            onClick={register}
          >
            Register
          </Button>
          {loggedInUser && (
            <Button
              fullWidth
              variant="contained"
              color="error"
              sx={{ mt: 1 }}
              onClick={logout}
            >
              Logout
            </Button>
          )}
        </Box>
      </Paper>

      {show && <h1>Pani di gal</h1>}
    </Container>
  );
}







