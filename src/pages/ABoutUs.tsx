// import { Outlet } from "react-router";
// import App from "../App";
// import { Footer, Header } from "../components/layout";
import React, { useEffect } from "react";
import * as ReactDOM from "react-dom/client";
import Button from '@mui/material/Button';

// import {
//   withStyles,
//   makeStyles,
//   createStyles,
//   Theme,
//   useTheme,
// } from "@material-ui/core/styles";


const AboutUs = () => {
  console.log("Home is here");
  return(
    <div>
      {/* <Header />
      <Outlet />
      <Footer /> */}
      About us page

      <Button variant="contained">Hello World</Button>
    </div>
  );
}

export default AboutUs;