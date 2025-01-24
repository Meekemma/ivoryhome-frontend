import React, { useState, useContext, useEffect } from 'react';
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
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import logo from '../../assets/images/logo.png';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import AuthContext from '../../context/AuthContext';

const pages = ['Home', 'About', 'Service', 'Properties', 'Estate', 'Blog', 'Contact'];
const estateDropdown = ['Royal Dynasty Estate', 'Indiobi Estate', 'Owerri Estate'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElEstate, setAnchorElEstate] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logOutUser } = useContext(AuthContext);
  const [cookies] = useCookies(['access_token', 'user', 'user_id']);
  const [avatar, setAvatar] = useState('');

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

  const handleOpenEstateMenu = (event) => {
    setAnchorElEstate(event.currentTarget);
  };

  const handleCloseEstateMenu = () => {
    setAnchorElEstate(null);
  };

  const handlePageClick = (page) => {
    setAnchorElNav(null);
    if (page.toLowerCase() === 'home') {
      navigate('/');
    } else {
      navigate(`/${page.toLowerCase()}`);
    }
  };

  const handleEstateClick = (estate) => {
    setAnchorElEstate(null);
    navigate(`/estate/${estate.toLowerCase().replace(/ /g, '-')}`);
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

  const isAuthenticated = !!cookies.access_token;
  const userId = cookies.user_id;

  useEffect(() => {
    if (cookies.user) {
      if (cookies.user.names) {
        const initials = cookies.user.names
          .split(' ')
          .map((name) => name[0])
          .join('')
          .toUpperCase();
        setAvatar(initials);
      } else if (cookies.user.firstName && cookies.user.lastName) {
        setAvatar(
          `${cookies.user.firstName[0].toUpperCase()}${cookies.user.lastName[0].toUpperCase()}`
        );
      } else {
        setAvatar('G');
      }
    }
  }, [cookies]);

  return (
    <AppBar position="relative" sx={{ backgroundColor: 'black' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
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
            
              mb: 1,
              display: { xs: 'flex', md: 'flex' },
              cursor: 'pointer',
            }}
            onClick={() => navigate('/')}
          />

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
              PaperProps={{
                sx: {
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  boxShadow: 'none',
                  width: '250px',
                  textAlign: 'left',
                  zIndex: 1200,
                },
              }}
            >
              {pages.map((page) => (
                page === 'Estate' ? (
                  <Box key={page}>
                    <MenuItem
                      onClick={(event) => handleOpenEstateMenu(event)}
                      sx={{ display: 'flex', justifyContent: 'space-between' }}
                    >
                      <Typography textAlign="center">{page}</Typography>
                      <ArrowDropDownIcon />
                    </MenuItem>
                    <Menu
                      anchorEl={anchorElEstate}
                      open={Boolean(anchorElEstate)}
                      onClose={handleCloseEstateMenu}
                      PaperProps={{
                        sx: {
                          mt: 1,
                          zIndex: 1300,
                          backgroundColor: 'rgba(255, 255, 255, 0.95)',
                          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                        },
                      }}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                    >
                      {estateDropdown.map((estate) => (
                        <MenuItem key={estate} onClick={() => handleEstateClick(estate)}>
                          <Typography textAlign="center">{estate}</Typography>
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                ) : (
                  <MenuItem key={page} onClick={() => handlePageClick(page)}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                )
              ))}

              {!isAuthenticated ? (
                <>
                  <MenuItem onClick={() => { handleCloseNavMenu(); navigate('/login'); }}>
                    <Typography textAlign="center">Login</Typography>
                  </MenuItem>
                  <MenuItem onClick={() => { handleCloseNavMenu(); navigate('/signup'); }}>
                    <Typography textAlign="center">Signup</Typography>
                  </MenuItem>
                </>
              ) : (
                <MenuItem onClick={() => { handleCloseNavMenu(); navigate(`/profile/${userId}`); }}>
                  <Typography textAlign="center">Profile</Typography>
                </MenuItem>
              )}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
            }}
          >
            {pages.map((page) => (
              page === 'Estate' ? (
                <Box key={page} sx={{ position: 'relative' }}>
                  <Button
                    onClick={handleOpenEstateMenu}
                    endIcon={<ArrowDropDownIcon />}
                    sx={{
                      mx: 1,
                      my: 2,
                      color: 'white',
                      textTransform: 'capitalize',
                    }}
                  >
                    {page}
                  </Button>
                  <Menu
                    anchorEl={anchorElEstate}
                    open={Boolean(anchorElEstate)}
                    onClose={handleCloseEstateMenu}
                    PaperProps={{ sx: { mt: 2 } }}
                  >
                    {estateDropdown.map((estate) => (
                      <MenuItem key={estate} onClick={() => handleEstateClick(estate)}>
                        <Typography textAlign="center">{estate}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              ) : (
                <Button
                  key={page}
                  onClick={() => handlePageClick(page)}
                  sx={{
                    mx: 1,
                    my: 2,
                    color: getActivePage(page) ? 'red' : 'white',
                    fontWeight: getActivePage(page) ? 'bold' : 'normal',
                    textTransform: 'capitalize',
                  }}
                >
                  {page}
                </Button>
              )
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            {!isAuthenticated ? (
              <>
                <Button
                  onClick={() => navigate('/login')}
                  sx={{
                    mx: 1,
                    my: 2,
                    color: 'white',
                    textTransform: 'capitalize',
                    border: '2px solid white',
                    borderRadius: '15px',
                    ':hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' },
                  }}
                >
                  Login
                </Button>
                <Button
                  onClick={() => navigate('/signup')}
                  sx={{
                    mx: 1,
                    my: 2,
                    color: 'white',
                    textTransform: 'capitalize',
                    border: '2px solid white',
                    borderRadius: '15px',
                    ':hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' },
                  }}
                >
                  Signup
                </Button>
              </>
            ) : (
              <>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt={cookies.user?.names || 'User'} sx={{ background: '#000', color: '#fff' }}>
                      {avatar}
                    </Avatar>
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
                    <Typography onClick={() => navigate(`/profile/${userId}`)} textAlign="center" sx={{ textTransform: 'capitalize' }}>
                      Profile
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>
                    <Typography textAlign="center" sx={{ textTransform: 'capitalize' }}>
                      Logout
                    </Typography>
                  </MenuItem>
                </Menu>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
