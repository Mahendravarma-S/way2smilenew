import React from "react";
import { Box, Typography, Card, CardContent, Avatar, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import author from "../assets/Rectangle 4200.png";

const TestimonialCard = () => {
  return (
    <Box
      sx={{
        position: "relative",
        maxWidth: "1400px",
        margin: "auto",
        borderRadius: "30px",
        overflow: "hidden",
        padding: { xs: "20px", md: "40px" },
      }}
    >
      
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${author})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "transform 0.4s ease-in-out",
          zIndex: 1,
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
      />

      <Card
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#FCF8ED",
          borderRadius: "30px",
          padding: { xs: "30px", md: "50px" },
          maxWidth: "1400px",
          height: { xs: "auto", md: "400px" },
          margin: "auto",
          flexDirection: { xs: "column", md: "row" },
          boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.3)",
          zIndex: 2,
          textAlign: { xs: "center", md: "left" },
        }}
      >
        
        <Avatar
          src={author}
          alt="User"
          sx={{
            width: { xs: "100px", sm: "140px", md: "220px" },
            height: { xs: "100px", sm: "140px", md: "220px" },
            marginBottom: { xs: "20px", md: "0" },
          }}
        />

       
        <CardContent
          sx={{
            flex: 1,
            maxWidth: { xs: "100%", md: "600px" },
            padding: { xs: "0 20px", md: "0" },
          }}
        >
          <Typography
            variant="h5"
            fontWeight={700}
            sx={{
              color: "#222",
              marginBottom: "15px",
              fontSize: { xs: "20px", sm: "22px", md: "24px" },
            }}
          >
            What our customers thought?
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#333",
              marginBottom: "16px",
              fontSize: { xs: "14px", sm: "16px" },
              lineHeight: "1.6",
            }}
          >
            Euismod magna id purus eget nunc ligula suspendisse dui netus.
            Condimentum blandit rutrum at mauris enim pulvinar dui etiam dui.
          </Typography>

          <Typography
            variant="body2"
            fontWeight={600}
            sx={{
              color: "#000",
              fontSize: { xs: "14px", sm: "16px" },
              marginBottom: "20px",
            }}
          >
            Holly Davidson
          </Typography>

          
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" }, 
              alignItems: "center",
              gap: "10px",
            }}
          >
            <IconButton sx={{ color: "#000" }}>
              <ArrowBackIcon />
            </IconButton>
            <IconButton sx={{ color: "#FFB703" }}>
              <ArrowForwardIcon />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TestimonialCard;
