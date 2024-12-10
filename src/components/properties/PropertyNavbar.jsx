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
  const [userId, setUserId] = useState(null); // For storing the user_id
  const [cookies] = useCookies(["user"]);
  const [cartItems, setCartItems] = useState(0);
  const { logOutUser } = useContext(AuthContext);  // Access logOutUser function from AuthContext
  const navigate = useNavigate();

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
    logOutUser();  // Calling logOutUser to log the user out
    navigate('/login');  // Redirect user to login page after logout
  };

  const isMenuOpen = Boolean(anchorEl);

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
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
    >
      <MenuItem onClick={() => navigate(`/profile/${userId}`)}>Profile</MenuItem>
      <MenuItem onClick={handleLogout}>Logout</MenuItem> {/* Updated Logout */}
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}>
        <Toolbar>
          {/* Replace Menu Icon with Company Logo */}
          <Box sx={{
            height: '60px',
            padding: '2px',
            background: 'white',
            borderRadius: '10px',
            mt: 2,
            ml: 2,
            mb: 1,
            display: { xs: 'flex', md: 'flex' },
            justifyContent: 'center', // Center the logo horizontally
          }}>
            <img src={logo} alt="Company Logo" style={{ maxHeight: '100%', objectFit: 'contain' }} />
          </Box>

          {/* Search Bar */}
          <Search sx={{
            marginLeft: { xs: '10px', sm: '20px' }, // More space between logo and search bar on smaller screens
            width: { xs: '80%', sm: '90%', md: 'auto' }, // Increase the width on larger screens
          }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search Properties…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          {/* Cart, User Info, Account Icon */}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
            <IconButton size="large" aria-label="cart items" color="inherit" onClick={handleClick}>
              <Badge badgeContent={cartItems} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <Typography variant="body1" sx={{ ml: 2, mr: 1 }}>
              {userName}
            </Typography>
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

          {/* Mobile Menu Icon */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls="primary-search-account-menu-mobile"
              aria-haspopup="true"
              onClick={(e) => setAnchorEl(e.currentTarget)}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
};

export default PropertyNavbar;
