import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const menuItems = [
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
  { label: 'Careers', path: '/careers' },
];

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ background: '#232526', color: '#fff' }} elevation={1}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <img
            src={process.env.PUBLIC_URL + '/images/WS-Symbol.png'}
            alt="WildStone Solutions Symbol"
            style={{ height: 48, marginRight: 16, cursor: 'pointer' }}
            onClick={handleMenuClick}
          />
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{ 'aria-labelledby': 'navbar-symbol' }}
          >
            {menuItems.map((item) => (
              <MenuItem
                key={item.label}
                component={Link}
                to={item.path}
                onClick={handleClose}
              >
                {item.label}
              </MenuItem>
            ))}
          </Menu>
          <Typography variant="h6" color="inherit" component={Link} to="/" sx={{ textDecoration: 'none', color: '#fff', fontWeight: 700 }}>
            WildStone Solutions
          </Typography>
        </Box>
        <Button color="primary" variant="contained" component={Link} to="/portal" sx={{ fontWeight: 600, background: '#fff', color: '#232526', '&:hover': { background: '#eee' } }}>
          Client Portal
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 