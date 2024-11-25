import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import logo from '../../assets/images/logo.png';
import { useNavigate, useLocation } from 'react-router-dom';

const pages = ['Home', 'About', 'Service', 'Properties', 'Estate', 'Blog', 'Contact'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const navigate = useNavigate();
  const location = useLocation(); // Get the current path

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handlePageClick = (page) => {
    setAnchorElNav(null);
    if (page.toLowerCase() === 'home') {
      navigate('/');
    } else {
      navigate(`/${page.toLowerCase()}`);
    }
  };

  const getActivePage = (page) => {
    const currentPath = location.pathname.toLowerCase();
    if (page.toLowerCase() === 'home' && currentPath === '/') return true;
    return currentPath.includes(page.toLowerCase());
  };

  return (
    <AppBar
      position="relative"
      sx={{
        backgroundColor: '#005fa3',
        boxShadow: 'none',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{
              height: '60px',
              padding: '2px',
              background: 'white',
              borderRadius: '10px',
              mt: 2,
              ml: 2,
              mb: 1,
              display: { xs: 'flex', md: 'flex' },
            }}
          />

          {/* Mobile and Small Screens */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                backgroundColor: 'transparent', // Transparent background
              }}
              PaperProps={{
                sx: {
                  padding: 2, // Added padding for dropdown items
                  backgroundColor: 'rgba(255, 255, 255, 0.8)', // Slightly transparent white
                  boxShadow: 'none', // Remove box-shadow
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handlePageClick(page)}>
                  <Typography
                    sx={{
                      color: getActivePage(page) ? 'red' : 'inherit',
                      fontWeight: getActivePage(page) ? 'bold' : 'normal',
                      px: 2, // Add padding inside menu items
                    }}
                    textAlign="center"
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop Menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-end',
              pr: 4,
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handlePageClick(page)}
                sx={{
                  mx: 1,
                  my: 2,
                  color: getActivePage(page) ? 'red' : 'white',
                  fontWeight: getActivePage(page) ? 'bold' : 'normal',
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Avatar */}
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="User Avatar" src="/static/images/avatar/1.jpg" />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
