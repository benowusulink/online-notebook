import React, { Component } from "react";
import "./Navbar2.css";
import Home from "../../home/Home.js";
import logo from "./assets/logo_transparent.png";
//import bcrypt from 'bcryptjs';

class Navbar2 extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
    console.log(event.target.value);
  };

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  buttonSubmit = () => {
    const { onRouteChange } = this.props;
    /*const saltRounds = 10;
		const salt = bcrypt.genSaltSync(saltRounds);
		const hash = bcrypt.hashSync(this.state.password, salt);
		*/
    fetch("http://localhost:3003/signin", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.info) {
          console.log(res.info);
          this.props.loadState(res.info);
          onRouteChange("home");
        }
      });
  };

  render() {
    return (
      <nav id={`main-nav-1`}>
        <ul>
          <li className={`logo-image`}>
            <img src={logo} alt={`logo`} />
          </li>
          <li className={`sign-in-link`}>
            <label htmlFor={`email`}>{`Email:`}</label>
            <input
              type={`email`}
              name={`email`}
              onChange={this.onEmailChange}
            />
          </li>
          <li className={`sign-in-link`}>
            <label htmlFor={`password`}>{`Password:`}</label>
            <input
              type={`password`}
              name={`password`}
              onChange={this.onPasswordChange}
            />
          </li>
          <li>
            <input
              type={`submit`}
              value={`Login`}
              id={`submit`}
              onClick={this.buttonSubmit}
            />
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar2;
