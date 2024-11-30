import React, { useState, useContext } from 'react';
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
import { useCookies } from 'react-cookie';
import AuthContext from '../../context/AuthContext'; 

const pages = ['Home', 'About', 'Service', 'Properties', 'Estate', 'Blog', 'Contact'];
const settings = ['Profile', 'Logout'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logOutUser } = useContext(AuthContext); 
  const [cookies] = useCookies(["access_token"]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handlePageClick = (page) => {
    setAnchorElNav(null);
    if (page.toLowerCase() === 'home') {
      navigate('/');
    } else {
      navigate(`/${page.toLowerCase()}`);
    }
  };

  const handleLogout = () => {
    handleCloseUserMenu();
    logOutUser(); 
  };

  const getActivePage = (page) => {
    const currentPath = location.pathname.toLowerCase();
    if (page.toLowerCase() === 'home' && currentPath === '/') return true;
    return currentPath.includes(page.toLowerCase());
  };

  const isAuthenticated = !!cookies.access_token; // Check if the user is authenticated

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
              }}
              PaperProps={{
                sx: {
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  boxShadow: 'none',
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handlePageClick(page)}>
                  <Typography
                    sx={{
                      color: getActivePage(page) ? 'red' : 'inherit',
                      fontWeight: getActivePage(page) ? 'bold' : 'normal',
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

          {/* Authentication Links */}
          <Box sx={{ flexGrow: 0, display: 'flex' }}>
            {isAuthenticated ? (
              <>
                {/* Avatar Menu */}
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt={user?.names || "User"} src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography onClick={() => navigate('/profile')} textAlign="center">
                      Profile
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <>
                {/* Display Signup/Login */}
                <Button
                  onClick={() => navigate('/login')}
                  sx={{ mx: 1, my: 2, color: 'white' }}
                >
                  Login
                </Button>
                <Button
                  onClick={() => navigate('/signup')}
                  sx={{ mx: 1, my: 2, color: 'white' }}
                >
                  Signup
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
