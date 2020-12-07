/* Global app imports */

import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./containers/App";

/* Compoent that will be mounted into the the html element 
called root, this is done through the reactdom package  */
ReactDOM.render(<App />, document.getElementById("root"));
