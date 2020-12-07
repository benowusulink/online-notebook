//imports for the file
import React, { Component } from "react";
import "./App.css";
import Navbar1 from "../components/navbars/navbar1/Navbar1.js";
import Navbar2 from "../components/navbars/navbar2/Navbar2.js";
import Navbar3 from "../components/navbars/navbar3/Navbar3.js";
import Signin from "../components/signin/Signin.js";
import Register from "../components/register/Register.js";
import Home from "../components/home/Home.js";

//React class component
class App extends Component {
  /*React life-cycle method constructor which will 
hold components state;
*/
  constructor() {
    super();
    this.state = { route: "signin", id: "", name: "" };
  }

  //Function within class component that sets route of the app

  onRouteChange = (route) => {
    this.setState({ route: route });
  };

  //Function within class component that loads data for state
  loadState = (data) => {
    this.setState({ id: data.id });
    this.setState({ name: data.name });
  };

  //  React Life Cycle method Render
  render() {
    switch (this.state.route) {
      case "signin":
        return (
          <div>
            <Navbar1
              onRouteChange={this.onRouteChange}
              loadState={this.loadState}
            />
            <Signin />
          </div>
        );

      case "register":
        return (
          <div>
            <Navbar2
              onRouteChange={this.onRouteChange}
              loadState={this.loadState}
            />
            <Register
              onRouteChange={this.onRouteChange}
              loadState={this.loadState}
            />
          </div>
        );

      case "home":
        return (
          <div>
            <Navbar3 onRouteChange={this.onRouteChange} />
            <Home id={this.state.id} name={this.state.name} />
          </div>
        );

      default:
        return (
          <div>
            <Navbar1 onRouteChange={this.onRouteChange} />
            <Signin />
          </div>
        );
    }
  }
}

// exporting component to be used with other files

export default App;
