import React, { Component } from "react";
import Home from "../home/Home.js";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./Register.css";
//import bcrypt from 'bcryptjs';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  buttonSubmit = () => {
    /*const salt = bcrypt.genSaltSync(10);
		const hash = bcrypt.hashSync(this.state.password, salt);
		const {onRouteChange} = this.props;
		*/
    fetch("http://localhost:3003/register", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        hash: this.state.password,
        name: this.state.name,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.info) {
          console.log(res.info);
          this.props.loadState(res.info);
          this.props.onRouteChange("home");
        }
      });
  };

  render() {
    return (
      <Jumbotron fluid id={`jumbotron`}>
        <h1>Register</h1>
        <section id={`register-form`}>
          <ul>
            <li>
              <label htmlFor={`name`}>{`Name:`}</label>
              <input type={`text`} name={`name`} onChange={this.onNameChange} />
            </li>
            <li>
              <label htmlFor={`email`}>{`Email:`}</label>
              <input
                type={`email`}
                name={`email`}
                onChange={this.onEmailChange}
              />
            </li>
            <li>
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
                value={`Register`}
                id={`register-btn`}
                onClick={this.buttonSubmit}
              />
            </li>
          </ul>
        </section>
      </Jumbotron>
    );
  }
}

export default Register;
