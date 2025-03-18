import React from "react";
import { Box, Button, Typography, Card, CardContent } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import image from "../assets/DrawKit Vector Illustration-2.png";

const FeatureCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        padding: { xs: "20px", md: "40px" }, // Adjust padding for different devices
      }}
    >
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F9B800",
          borderRadius: "30px",
          padding: { xs: "20px", md: "50px" }, 
          width: "100%",
          maxWidth: "1400px",
          height: { xs: "auto", md: "600px" }, 
          marginBottom: "40px",
          boxShadow: "none",
          flexDirection: { xs: "column-reverse", md: "row" }, 
        }}
      >
        {/* Left Side - Text Content */}
        <CardContent
          sx={{
            flex: 1,
            maxWidth: "750px",
            textAlign: { xs: "center", md: "left" },
            padding: { xs: "15px", md: "0 50px" }, 
          }}
        >
          <Typography
            variant="h4"
            fontWeight={700}
            sx={{
              color: "#000",
              marginBottom: "15px",
              maxWidth: "500px",
              lineHeight: "1.4",
              wordBreak: "break-word",
              display: "-webkit-box",
              WebkitLineClamp: 3, 
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              fontSize: { xs: "24px", sm: "28px", md: "32px" }, 
            }}
          >
            Phasellus a vitae iaculis magna eleifend pulvinar velit odio.
          </Typography>

          <Typography
            variant="body1"
            fontWeight={600}
            sx={{
              color: "#000",
              textDecoration: "underline",
              marginBottom: "12px",
              marginTop: "15px",
              fontSize: { xs: "14px", sm: "16px" },
            }}
          >
            Vulputate et vulputate suspendisse natoque!
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "#333",
              marginBottom: "20px",
              lineHeight: "1.6",
              maxWidth: "500px",
              fontSize: { xs: "14px", sm: "16px" },
            }}
          >
            Euismod magna id purus eget nunc ligula suspendisse dui netus.
            Condimentum blandit rutrum at mauris enim pulvinar dui. Etiam diam
            dus vulputate et vulputate suspendisse natoque id tellus consectetur
            pulvinar et.
          </Typography>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#000",
              color: "#fff",
              padding: { xs: "12px 30px", sm: "15px 40px" }, 
              borderRadius: "30px",
              textTransform: "none",
              fontWeight: "600",
              fontSize: { xs: "14px", sm: "16px" },
              "&:hover": { backgroundColor: "#333" },
            }}
            endIcon={<ArrowForwardIcon />}
          >
            Lorem Ipsum
          </Button>
        </CardContent>

    
        <Box
          component="img"
          src={image}
          alt="Illustration"
          sx={{
            maxWidth: { xs: "80%", sm: "350px", md: "550px" }, 
            height: "auto",
            marginTop: { xs: "20px", md: "0" },
          }}
        />
      </Card>
    </Box>
  );
};

export default FeatureCard;
