import React from "react";
import {Box} from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Testimonial from "./Components/Testimonial";
import FeatureCard from "./Components/FeaturesCard";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Header from "./Components/Header";

const App = () => {

  
  return (
    <div className="main-container">
      <Header />
      {/* Header Section */}
    <Hero />
      
  
    <Box sx={{ width: "100vw", overflow: "hidden" }}>
  <FeatureCard />
</Box>



      {/* Testimonials Section */}
      <Box>
        <Testimonial />
        
      </Box>
      
      {/* Footer Section */}
     <Footer />
    
    </div>
  );
};

export default App;
