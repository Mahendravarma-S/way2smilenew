import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box, IconButton, Menu, MenuItem } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import flag from '../assets/flag.png';
import logo from '../assets/logo (1).png';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#FEF8E6", boxShadow: "none", borderBottom: "1px solid #E6E2D6" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", minHeight: "60px" }}>
        
        {/* Left Logo (Image) */}
        <Box display="flex" alignItems="center">
          <img src={logo}    alt="" style={{ height: "50px", marginRight: "8px" }} />
          <Typography variant="h6" sx={{ color: "#222", fontWeight: 700, fontSize: "18px" }}>
            
          </Typography>
        </Box>

        {/* Language Selector with Flag */}
        <Box>
          <IconButton onClick={handleClick}>
            <img 
              src={flag}
              alt="English" 
              width="24px" 
              style={{ borderRadius: "4px", marginRight: "4px" }} 
            />
            <ArrowDropDownIcon sx={{ color: "#444" }} />
          </IconButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
            <MenuItem onClick={handleClose}>
              <img src= {flag}                           alt="English" width="20px" style={{ marginRight: "8px" }} />
              
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <img src={flag}        alt="Spanish" width="20px" style={{ marginRight: "8px" }} />
              
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <img src={flag}        alt="French" width="20px" style={{ marginRight: "8px" }} />
              
            </MenuItem>
          </Menu>
        </Box>

      </Toolbar>
    </AppBar>
  );
};

export default Header;
