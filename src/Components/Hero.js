import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Box, Typography, Button, Chip, Grid } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const HeroSection = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Tristique"],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => typed.destroy();
  }, []);

  const chipData = [
    "Cursus Integer",
    "Integer Consequat",
    "Tellus Euismod Pellentesque",
    "Aliquot Tristique",
    "Pellentesque Tempus",
    "Mauris Fermentum Praesent",
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#FCF8ED",
        padding: { xs: "40px", md: "80px" },
        textAlign: "center",
        marginTop: { xs: "50px", md: "100px" },  
        marginBottom: { xs: "50px", md: "100px" }, 
      }}
    >
      {/* Heading */}
      <Typography
        variant="h6"
        sx={{
          color: "#F4B400",
          fontWeight: 700,
          textTransform: "uppercase",
          fontSize: { xs: "14px", md: "16px" },
          marginBottom: "10px",
        }}
      >
        RISUS PRAESENT VULPITATE.
      </Typography>

      <Typography
        variant="h3"
        sx={{
          color: "#222",
          fontWeight: 700,
          marginBottom: "20px",
          fontSize: { xs: "28px", md: "40px" },
        }}
      >
        Cursus Consequat{" "}
        <span style={{ color: "#262626" }} ref={typedRef}></span>
      </Typography>

      <Grid container spacing={1.5} justifyContent="center" sx={{ maxWidth: "750px", mx: "auto" }}>
        {chipData.slice(0, 4).map((text, index) => (
          <Grid item key={index}>
            <Chip
              label={text}
              icon={
                <CheckCircleIcon 
                  style={{ color: "#F9B800" }} 
                />
              }
              sx={{
                backgroundColor: "white",
                fontWeight: 400,
                borderRadius: "25px",
                boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
                fontSize: "14px",
                "& .MuiChip-icon": { order: -1, marginRight: "6px" },
              }}
            />
          </Grid>
        ))}
      </Grid>

     
      <Grid
        container
        spacing={1.5}
        justifyContent="center"
        sx={{ marginTop: "10px", maxWidth: "750px", mx: "auto" }}
      >
        {chipData.slice(4, 6).map((text, index) => (
          <Grid item key={index}>
            <Chip
              label={text}
              icon={
                <CheckCircleIcon 
                  style={{ color: "#F9B800" }} 
                />
              }
              sx={{
                backgroundColor: "white",
                fontWeight: 400,
                borderRadius: "25px",
                boxShadow: "0px 2px 0px rgba(0, 0, 0, 0.1)",
                fontSize: "14px",
                "& .MuiChip-icon": { order: -1, marginRight: "6px" },
              }}
            />
          </Grid>
        ))}
      </Grid>

     
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#F9B800",
          color: "#000",
          fontWeight: 600,
          fontSize: "14px",
          paddingX: "20px",
          paddingY: "10px",
          borderRadius: "30px",
          marginTop: "30px", 
          "&:hover": { backgroundColor: "#F9B800" },
        }}
        endIcon={<ArrowForwardIcon />}
      >
        LOREM IPSUM
      </Button>
    </Box>
  );
};

export default HeroSection;
