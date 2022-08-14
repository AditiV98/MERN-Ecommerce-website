import React, { useEffect, useCallback, useMemo, Fragment } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, clearErrors } from "../actions/productAction";
import ProductComponent from "./ProductComponent";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Search from "./Search";
import { useParams } from "react-router-dom";
const Shop = () => {
  const { keyword } = useParams();
  // const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  // const [price, setPrice] = useState([0, 25000]);
  // const [category, setCategory] = useState("");

  // const [ratings, setRatings] = useState(0);
  const {
    products,
    loading,
    error,
    productsCount,

    filteredProductsCount,
  } = useSelector((state) => state.Products);
  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    dispatch(getProduct(keyword));
  }, [dispatch, keyword, alert, error]);

  // const fetchProducts = async () => {
  //   const response = await axios.get("/api/products").catch((err) => {
  //     console.log("Err: ", err);
  //   });
  //   dispatch(setProducts(response.data));
  // };

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  // console.log("Products :", products);
  return (
    // <>
    //   <br></br>
    //   <div className="ui grid container">
    //     <ProductComponent />{" "}
    //   </div>
    // </>
    <>
      <Fragment>
        {loading ? (
          <h1>Loading</h1>
        ) : (
          <Fragment>
            <br></br>
            <Container>
              <center>
                <h1>ALL PRODUCTS</h1>

                <hr></hr>
                <Search />
                <hr></hr>
              </center>
              <br></br>
              <Box sx={{ flexGrow: 1 }}>
                <br></br>
                <Grid container spacing={6}>
                  <ProductComponent />
                </Grid>
              </Box>
            </Container>
          </Fragment>
        )}
      </Fragment>
    </>
  );
};

export default Shop;
