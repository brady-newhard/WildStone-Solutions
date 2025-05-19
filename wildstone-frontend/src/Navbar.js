import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const menuItems = [
  { label: 'Profile', path: '/profile' },
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
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
          px: { xs: 1, sm: 2, md: 4 },
          pr: { xs: 2, sm: 4, md: 6 },
          width: '100%',
          overflowX: 'hidden',
        }}
      >
        {/* Left: Symbol routes to home */}
        <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={process.env.PUBLIC_URL + '/images/WS-Symbol.png'}
              alt="WildStone Solutions Symbol"
              style={{ height: 40, marginRight: 4, cursor: 'pointer', marginBottom: 0 }}
            />
          </Link>
        </Box>
        {/* Center: Menu button (hamburger on mobile, text on desktop) */}
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          {isMobile ? (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuClick}
              sx={{ mx: 'auto' }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Button
              color="inherit"
              onClick={handleMenuClick}
              sx={{ fontWeight: 700, fontSize: '1.1rem', letterSpacing: 1 }}
            >
              Menu
            </Button>
          )}
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{ 'aria-labelledby': 'navbar-menu' }}
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
        </Box>
        {/* Right: Client Portal button with extra right padding */}
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
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
                px: { xs: 1, sm: 2 },
                overflowX: 'hidden',
                ml: 'auto',
                mr: { xs: 1, sm: 2, md: 4 },
                fontSize: { xs: '0.85rem', sm: '1rem' },
                whiteSpace: 'nowrap',
              }}
            >
              Client Portal
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 