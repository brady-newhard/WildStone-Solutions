import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const menuItems = [
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
  { label: 'Careers', path: '/careers' },
  { label: 'Client Portal', path: '/portal' },
];

const Navbar = ({ showClientPortalButton }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ background: '#000', color: '#fff', width: '100%', overflowX: 'hidden' }} elevation={1}>
      <Toolbar 
        sx={{ 
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: { xs: 1, sm: 2 }, 
          width: '100%', 
          overflowX: 'hidden',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', overflowX: 'hidden' }}>
          <img
            src={process.env.PUBLIC_URL + '/images/WS-Symbol.png'}
            alt="WildStone Solutions Symbol"
            style={{ height: 40, marginRight: 4, cursor: 'pointer', marginBottom: 0 }}
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
          <Typography
            variant="h6"
            color="inherit"
            component={Link}
            to="/"
            sx={{
              textDecoration: 'none',
              color: '#fff',
              fontWeight: 700,
              fontSize: { xs: '1.1rem', sm: '1.25rem' },
              ml: 0,
              pl: 0.5,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Menu
          </Typography>
        </Box>
        {showClientPortalButton && (
          <Button
            color="primary"
            variant="contained"
            component={Link}
            to="/portal"
            sx={{
              fontWeight: 600,
              background: '#fff',
              color: '#000',
              '&:hover': { background: '#eee' },
              width: 'auto',
              minWidth: 40,
              px: 2,
              overflowX: 'hidden',
              ml: 'auto',
            }}
          >
            Client Portal
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 