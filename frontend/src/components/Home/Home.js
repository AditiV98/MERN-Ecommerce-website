import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <div id="banner_image">
      <div id="banner_content">
        <Link to="/shop" style={{ textDecoration: "none", color: "white" }}>
          <Button variant="contained" size="large" color="error">
            Shop Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
