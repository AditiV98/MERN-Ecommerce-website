// import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Nav";
import Home from "./Home";
import Shop from "./Shop";
import About from "./About/About";
import Contact from "./Contact/Contact";
import SignUp from "./SignUp/SignUp";
import Signin from "./SignIn/Signin";
import Cart from "./Cart";
import ProductDetails from "./ProductDetails";
import Account from "./account";
import UpdateProfile from "./UpdateProfile/updateProfile";
import UpdatePassword from "./UpdatePassword/UpdatePassword";
import store from "../store";
import { useEffect } from "react";
import { loadUser } from "../actions/userAction";
import { useSelector } from "react-redux";
import UserOptions from "./UserOptions";
function MyApp() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        {/* {isAuthenticated && <UserOptions user={user} />} */}
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="home" element={<Home></Home>}></Route>
          <Route
            path="/product/:productId"
            element={<ProductDetails></ProductDetails>}
          ></Route>
          <Route path="shop" element={<Shop></Shop>}></Route>
          <Route path="contact-us" element={<Contact></Contact>}></Route>
          <Route path="about" element={<About></About>}></Route>
          <Route path="cart" element={<Cart></Cart>}></Route>
          <Route path="signup" element={<SignUp></SignUp>}></Route>
          <Route path="login" element={<Signin></Signin>}></Route>
          {isAuthenticated && (
            <Route path="account" element={<Account></Account>}></Route>
          )}
          {isAuthenticated && (
            <Route
              path="update-profile"
              element={<UpdateProfile></UpdateProfile>}
            ></Route>
          )}
          {isAuthenticated && (
            <Route
              path="update-password"
              element={<UpdatePassword></UpdatePassword>}
            ></Route>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default MyApp;
