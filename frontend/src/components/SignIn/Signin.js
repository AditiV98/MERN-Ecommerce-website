// import React from "react";
import React, { Fragment, useState, useEffect } from "react";

import { Link } from "react-router-dom";

import "./login.css";
import { login, clearErrors } from "../../actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Signin = ({ history, location }) => {
  const dispatch = useDispatch();
  // const alert = useAlert();
  const navigate = useNavigate();
  const { error, isAuthenticated, loading } = useSelector(
    (state) => state.user
  );

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const loginSubmit = async (e) => {
    e.preventDefault();
    // try {
    dispatch(login(loginEmail, loginPassword));
    //   localStorage.setItem("firstLogin", true);
    // if (isAuthenticated === true) {
    // // await axios.get("/api/me");
    // // window.location.href = "/about";
    // navigate("/home");
    //
    // }
    // if (isAuthenticated === false) {
    //   alert("Invalid Email or Password");
    // }
    //   window.location.href = "/";
    // console.log(error);
    // e.preventDefault();
    //   // await axios.post("http://localhost:5500/api/register", newUser);
    // } catch (error) {
    //   alert(error.response.data.msg);
    // }
  };

  // const redirect = location.search ? location.search.split("=")[1] : "/account";

  useEffect(() => {
    if (error) {
      alert(error);

      dispatch(clearErrors());
    }
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [dispatch, error, alert, isAuthenticated]);

  return (
    <div className="login-page">
      <form onSubmit={loginSubmit}>
        <h2>Login</h2>
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
        />

        <input
          type="password"
          name="password"
          required
          autoComplete="on"
          placeholder="Password"
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
        />

        <div className="row">
          <button type="submit">Login</button>
          <Link to="/signup">Register</Link>
        </div>
      </form>
    </div>
    // <Fragment>
    //   {loading ? (
    //     "..loading"
    //   ) : (
    //     <Fragment>
    //       {console.log(loginEmail, loginPassword)}
    //       <Container component="main" maxWidth="xs">
    //         <CssBaseline />
    //         <div>
    //           <Typography component="h1" variant="h5">
    //             Login
    //           </Typography>
    //           <form noValidate>
    //             <Grid container spacing={2}>
    //               <Grid item xs={12}>
    //                 <TextField
    //                   variant="outlined"
    //                   required
    //                   fullWidth
    //                   label="Email Address"
    //                   name="email"
    //                   onChange={(e) => setLoginEmail(e.target.value)}
    //                   type="email"
    //                   value={loginEmail}
    //                 />
    //               </Grid>
    //               <Grid item xs={12}>
    //                 <TextField
    //                   variant="outlined"
    //                   required
    //                   fullWidth
    //                   name="password"
    //                   label="Password"
    //                   type="password"
    //                   onChange={(e) => setLoginPassword(e.target.value)}
    //                   value={loginPassword}
    //                 />
    //               </Grid>
    //             </Grid>
    //             <Button
    //               type="submit"
    //               fullWidth
    //               variant="contained"
    //               color="primary"
    //               onClick={clickSubmit}
    //             >
    //               Login
    //             </Button>
    //             <Grid container justify="flex-end">
    //               <Grid item>
    //                 <Link to="/signup" variant="body2">
    //                   Don't have an account? Sign Up
    //                 </Link>
    //               </Grid>
    //             </Grid>
    //           </form>
    //         </div>
    //       </Container>
    //     </Fragment>
    //   )}
    //   ;
    // </Fragment>
  );
};

export default Signin;
