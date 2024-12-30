import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MoreIcon from "@mui/icons-material/MoreVert";
import { useCookies } from "react-cookie";
import AuthContext from '../../context/AuthContext';
import { useSearch } from '../../context/SearchContext';
import logo from '../../assets/images/logo.png';

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const PropertyNavbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState(null); 
  const [cookies] = useCookies(["user", "access_token"]);
  const [cartItems, setCartItems] = useState(0);
  const { logOutUser } = useContext(AuthContext);  
  const navigate = useNavigate();
  const isAuthenticated = !!cookies.access_token;

  const [inputValue, setInputValue] = useState('');
  const { setSearchQuery } = useSearch();

  const handleSearch = (e) => {
    if (e.key === 'Enter' || e.key ==='click') {
      setSearchQuery(inputValue);
    }
  };

  const handleClick = () => {
    navigate('/request');
  };

  useEffect(() => {
    const orderData = JSON.parse(localStorage.getItem("orderData")) || {};
    if (orderData.data) {
      setCartItems(orderData.data.cart_items || 0);
    }
  }, []);

  useEffect(() => {
    if (cookies.user) {
      if (cookies.user.names) {
        setUserName(cookies.user.names);
      } else if (cookies.user.firstName && cookies.user.lastName) {
        setUserName(`${cookies.user.firstName} ${cookies.user.lastName}`);
      } else {
        setUserName("Guest");
      }
      setUserId(cookies.user_id); 
    }
  }, [cookies]);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logOutUser();  
    navigate('/login');  
  };

  const isMenuOpen = Boolean(anchorEl);

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      sx={{
        mt: 1,  
      }}
    >
      {isAuthenticated ? (
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      ) : (
        [
          <MenuItem onClick={() => navigate('/signup')} key="signup">Sign Up</MenuItem>,
          <MenuItem onClick={() => navigate('/login')} key="login">Log In</MenuItem>
        ]
      )}
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          {/* Logo */}
          <Box
            sx={{
              height: '50px',
              padding: '2px',
              background: 'white', // This gives the white background to the logo container
              borderRadius: '10px',
              mt: 2,
              ml: 2,
              mb: 1,
              display: { xs: 'flex', md: 'flex' },
              justifyContent: 'center',
            }}
          >
            <img
              src={logo}
              alt="Company Logo"
              style={{
                maxHeight: '100%',
                objectFit: 'contain',
                borderRadius: '5px', // Optional: you can add a little border radius to the logo itself for a softer look
              }}
            />
          </Box>


          {/* Search Bar */}
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', mx: 2 }}>
            <Search sx={{ width: { xs: '70%', sm: '50%', md: '40%' } }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                type="text"
                placeholder="Search..."
                inputProps={{ "aria-label": "search" }}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleSearch}
              />
            </Search>
          </Box>

          {/* User Info and Cart */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
};

export default PropertyNavbar;
