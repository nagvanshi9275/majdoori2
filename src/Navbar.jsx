


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha('#FFF8E1', 0.15), // Cream color with transparency
  '&:hover': {
    backgroundColor: alpha('#FFF8E1', 0.25), // Darker cream on hover
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');

  // Update menu items
  const menuItems = [
    { text: 'होम', path: '/' },
    { text: 'लॉगिन', path: '/register' },
    { text: 'हमारे बारे में', path: '/about' },
    { text: 'संपर्क', path: '/contact' },
  ];

  const toggleDrawer = (open) => (event) => {
    // Prevent drawer from closing if click event originates from the input field
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    if (event.type === 'click' && event.target.closest('.MuiInputBase-root')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerList = () => (
    <Box
      role="presentation"
      sx={{ width: 250, backgroundColor: '#FFF' }} // White background for drawer items
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem>
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: '#3E2723' }} /> {/* Dark Brown color for search icon */}
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="खोजें…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </ListItem>
        {menuItems.map((item, index) => (
          <ListItem 
            button 
            component={Link} 
            to={item.path} 
            key={item.text}
            sx={{ backgroundColor: '#FFF', color: '#000' }} // White background and black text for menu items
          >
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: '#FF9800', color: '#FFF8E1', zIndex: 1201 }} // Saffron background with cream text
      >
        <Toolbar>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
            मजदूरी
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon sx={{ color: '#FFF8E1' }} /> {/* Cream color for menu icon */}
              </IconButton>
              <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                {drawerList()}
              </Drawer>
            </>
          ) : (
            <>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon sx={{ color: '#3E2723' }} /> {/* Dark Brown color for search icon */}
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="खोजें…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
              {menuItems.map((item) => (
                <Typography
                  component={Link}
                  to={item.path}
                  variant="h6"
                  key={item.text}
                  sx={{
                    margin: '0 10px',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    color: '#FFF8E1', // Cream color for menu text
                  }}
                >
                  {item.text}
                </Typography>
              ))}
            </>
          )}
        </Toolbar>
      </AppBar>

      {/* Add a spacer div to prevent content from being hidden behind the fixed navbar */}
      <div style={{ marginTop: '64px' }}></div>
    </>
  );
}
















