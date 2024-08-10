





import React, { useState } from 'react';
import { Box, Container, Typography, Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';  // Import CloseIcon
import logo from '../../assets/images/Home/logo.png';
import {useNavigate} from "react-router-dom";


function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsDrawerOpen(open);
  };

  return (
    <div>
      <Box sx={{ backgroundColor: "black", color: "#73829a", paddingTop: "10px" }}>
        <Container>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Box>
              <img src={logo} alt="" />
            </Box>
            <IconButton 
              color="inherit" 
              aria-label="open drawer" 
              edge="start" 
              onClick={toggleDrawer(true)} 
              sx={{ display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, padding: "10px", cursor: "pointer" }}>
              <Typography sx={{ paddingRight: "35px", fontSize: "13px", fontWeight: "600", "&:hover": {
                color: "white"
              }}} onClick={() => navigate("/")}>Home</Typography>
              <Typography sx={{ paddingRight: "35px", fontSize: "13px", fontWeight: "600", "&:hover": {
                color: "white"
              }}} onClick={() => navigate("/about")}>About</Typography>
              <Typography sx={{ paddingRight: "35px", fontSize: "13px", fontWeight: "600", "&:hover": {
                color: "white"
              }}} onClick={() => navigate("/diamond")}>Diamond</Typography>
              <Typography sx={{ paddingRight: "35px", fontSize: "13px", fontWeight: "600", "&:hover": {
                color: "white"
              }}} onClick={() => navigate("/product")}>Product</Typography>
              <Typography sx={{ paddingRight: "35px", fontSize: "13px", fontWeight: "600", "&:hover": {
                color: "white"
              }}} onClick={() => navigate("/contact")}>Contact Us</Typography>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'block' }, width: {lg:"10%",md:"12%"}, border: "solid 1px white", whiteSpace: "nowrap", color: "white", cursor: "pointer" }}>
              <Typography sx={{ fontSize: "12px", padding: "6px" }}>Book Appointment</Typography>
            </Box>
          </Box>
        </Container>
      </Box>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{ width: 350 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-end", padding: "10px" }}>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {['Home', 'About', 'Diamond', 'Product', 'Contact Us'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
            <ListItem button>
              <ListItemText primary="Book Appointment" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </div>
  );
}

export default Header;




