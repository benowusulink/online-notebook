//imports for the file
import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./Register.css";

//React class component
class Register extends Component {
  /*React life-cycle method constructor which will 
hold components state;
*/
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  /*Function within class component that sets name
   */
  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  /*Function within class component that sets password
   */
  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  /*Function within class component that sets email
   */
  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  /*Function within class component that deals with 
  the button submit
  */
  buttonSubmit = () => {
    /*const salt = bcrypt.genSaltSync(10);
		const hash = bcrypt.hashSync(this.state.password, salt);
		const {onRouteChange} = this.props;
		*/

    /*Conditions set for the requriements needed for the API
    request
    */
    if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.password === "" ||
      !this.state.email.includes("@") ||
      this.state.password.length < 5
    ) {
      /*if conditions arent met the function will return an alert
       */
      alert(
        "Please enter a name, Valid email or a password with more than 5 characters"
      );
    } else {

    /*If the conditions are passed an API POST request which sends  
    json data within its body to the URL
    */
      fetch("https://enigmatic-fjord-29762.herokuapp.com/register", {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          email: this.state.email,
          hash: this.state.password,
          name: this.state.name,
        }),
      })
        /* API request returns a promise which is json data,
      file has to be converted into javascript object to be used
      within React javascript
      */
        .then((res) => {
          return res.json();
        })

        /* If API returns json data we need, the data is used for the 
      function in this components passed as props, the route of the app
      is also changed to the home screen 
      */
        .then((res) => {
          if (res.info) {
            this.props.loadState(res.info);
            this.props.onRouteChange("home");
          } else if ("error") {

          /* If API returns a "error" message an alert is prompt to the
      user to please enter correct details 
      */
            alert(
              "This details have already been used, Please register with different details"
            );
          }
        });
    }
  };

  /* React Life Cycle method Render
   */
  render() {
    /* Rendered component which will be displayed to the user
     */
    return (
      <Jumbotron fluid id={`jumbotron`} className={`register`}>
        <h1>Register</h1>
        <h4>{`Please enter a valid email and a password over 5 characters`}</h4>
        <section id={`register-form`}>
          <ul>
            <li>
              <label htmlFor={`name`}>{`Name:`}</label>
              <input
                type={`text`}
                name={`name`}
                required
                onChange={this.onNameChange}
              />
            </li>
            <li>
              <label htmlFor={`email`}>{`Email:`}</label>
              <input
                type={`email`}
                name={`email`}
                required
                onChange={this.onEmailChange}
              />
            </li>
            <li>
              <label htmlFor={`password`}>{`Password:`}</label>
              <input
                type={`password`}
                name={`password`}
                onChange={this.onPasswordChange}
                required
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

/* exporting component to be used with other files
 */
export default Register;
