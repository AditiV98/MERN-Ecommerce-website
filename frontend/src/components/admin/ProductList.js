import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../actions/productAction";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import axios from "axios";
const ProductList = () => {
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios.get("/api/products").catch((err) => {
      console.log("Err: ", err);
    });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  const products = useSelector((state) => state.allProducts.products);
  return (
    <Box component="span">
      <center>
        <h1>ALL PRODUCTS</h1>
      </center>
      <hr></hr>
      <Container
      // maxWidth="sm"
      // sx={{
      //   border: "1px solid black",
      // }}
      >
        <TableContainer>
          <Table sx={{ minWidth: 600 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontSize: "15pt" }}> Sr. No.</TableCell>
                <TableCell style={{ fontSize: "15pt" }}> ID</TableCell>
                <TableCell style={{ fontSize: "15pt" }}> Name</TableCell>
                <TableCell style={{ fontSize: "15pt" }}>Price</TableCell>
                <TableCell style={{ fontSize: "15pt" }}> Category</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product, index) => (
                <TableRow key={product._id}>
                  <TableCell align="left">{index + 1}</TableCell>
                  <TableCell align="left">
                    {" "}
                    <Link
                      to={`/admin/product/${product._id}`}
                      // style={{ textDecoration: "none", color: "black" }}
                    >
                      {product._id}
                    </Link>
                  </TableCell>
                  <TableCell align="left">{product.title}</TableCell>
                  <TableCell align="left">{product.price}</TableCell>
                  <TableCell align="left">{product.category}</TableCell>
                  {/* <TableCell align="left">
                    {" "}
                    <Button
                      color="error"
                      size="small"
                      variant="contained"
                      onClick={() => deleteTask(player.id)}
                    >
                      Delete
                    </Button>
                  </TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
};

export default ProductList;
