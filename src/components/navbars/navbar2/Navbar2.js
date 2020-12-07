//imports for the file
import React, { Component } from "react";
import "./Navbar2.css";
import logo from "./assets/logo_transparent.png";

//React class component
class Navbar2 extends Component {
  /*React life-cycle method constructor which will 
hold components state;
*/
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  /*Function within class component that sets email
   */
  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
    console.log(event.target.value);
  };

  /*Function within class component that sets password
   */
  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  /*Function within class component that deals with 
  the button submit
  */
  buttonSubmit = () => {
    const { onRouteChange } = this.props;
    /*const saltRounds = 10;
		const salt = bcrypt.genSaltSync(saltRounds);
		const hash = bcrypt.hashSync(this.state.password, salt);
		*/

    /*API POST request which sends a json data within its body 
    to the URL
    */
    fetch("https://enigmatic-fjord-29762.herokuapp.com/signin", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
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
          onRouteChange("home");
        } else if ("error") {
        /* If API returns a "error" message an alert is prompt to the
      user to please enter correct details 
      */
          alert("Wrong email or password");
        }
      });
  };

  /* React Life Cycle method Render
   */
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
          <li className={`sign-in-link`} id={`password2`}>
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

/* exporting component to be used with other files
 */
export default Navbar2;
