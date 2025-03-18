import React from "react";
import { Box, Typography, Button, Container, Stack } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1A1A1A",
        color: "#fff",
        borderRadius: "30px",
        padding: { xs: "30px", md: "50px" },
        maxWidth: "1400px",
        margin: "50px auto",
        height: "auto",
      }}
    >
      <Container>
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
          spacing={3}
          textAlign={{ xs: "center", md: "left" }}
        >
          <Box>
            <Typography
              variant="h5"
              fontWeight={700}
              sx={{ marginBottom: "8px", fontSize: { xs: "20px", md: "28px" } }}
            >
              Vulputate et pulvinar ethre
            </Typography>
            <Typography
              variant="h6"
              fontWeight={600}
              sx={{ fontSize: { xs: "16px", md: "22px" } }}
            >
              Suspendisse tellus consectetur
            </Typography>
          </Box>

          <Box sx={{ textAlign: { xs: "center", md: "right" } }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: { xs: "#F9B800", md: "#fff" }, 
                color: "#000",
                borderRadius: "50px",
                padding: "12px 30px",
                textTransform: "none",
                fontWeight: "600",
                "&:hover": { backgroundColor: "#f2f2f2" },
              }}
              endIcon={<ArrowForwardIcon />}
            >
              Lorem Ipsum
            </Button>
          </Box>
        </Stack>

        <Box
          sx={{
            borderTop: "1px solid rgba(255, 255, 255, 0.2)",
            marginTop: "30px",
            paddingTop: "15px",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            textAlign: "center",
          }}
        >
          <Typography variant="body2">Copyright © 2022 Lorem Ipsum.</Typography>
          <Box sx={{ display: "flex", gap: "15px", marginTop: { xs: "10px", md: "0" } }}>
            <Typography
              variant="body2"
              sx={{ cursor: "pointer", textDecoration: "underline" }}
            >
              Privacy Policy
            </Typography>
            <Typography
              variant="body2"
              sx={{ cursor: "pointer", textDecoration: "underline" }}
            >
              Terms and Conditions
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
