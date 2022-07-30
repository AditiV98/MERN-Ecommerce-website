import React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import ListAltIcon from "@mui/icons-material/ListAlt";
import QueueIcon from "@mui/icons-material/Queue";
const DashBoard = () => {
  return (
    <Box sx={{ flexGrow: 1 }} style={{ background: "#fce4ec" }}>
      <br></br>
      <br></br>
      <Grid
        container
        spacing={2}
        // style={{ border: "1px solid black" }}
        height="500px"
      >
        <Grid item xs={2} style={{ background: "#f8bbd0" }}>
          <Link
            to="/admin/All-products"
            style={{ textDecoration: "none", color: "black" }}
          >
            <h2>
              <ListAltIcon /> All Products
            </h2>
          </Link>
          <br></br>
          <Link
            to="/admin/Add-products"
            style={{ textDecoration: "none", color: "black" }}
          >
            <h2>
              <QueueIcon /> Add Products
            </h2>
          </Link>
          {/* <Link
            to="/admin/All-products"
            style={{ textDecoration: "none", color: "black" }}
          >
            <h2>
              <ListAltIcon /> All Products
            </h2>
          </Link> */}
        </Grid>
        <Grid item xs={10}></Grid>
      </Grid>
    </Box>
  );
};

export default DashBoard;
