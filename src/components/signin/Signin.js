//imports for the file
import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./Signin.css";
import logo from "../navbars/navbar1/assets/logo_transparent.png";

//React dumb component which accepts props
const Signin = (props) => {
  return (
    <Jumbotron fluid id={`jumbotron`}>
      <h1>Online Notebook </h1>
      <img src={logo} />
    </Jumbotron>
  );
};

// exporting component to be used with other files
export default Signin;
