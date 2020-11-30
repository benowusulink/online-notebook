import React from "react";
import "./Navbar3.css";
import logo from "./assets/logo_transparent.png";

const Navbar3 = ({ onRouteChange }) => {
  return (
    <nav id={`main-nav-2`}>
      <ul>
        <li className={`logo-image2`}>
          <img src={logo} alt={`logo`} />
        </li>
        <li className={`title`}>
          <h1> {`Online Notebook`}</h1>
        </li>
        <li>
          <input
            type={`submit`}
            value={`Logout`}
            id={`logout`}
            onClick={() => {
              onRouteChange("signin");
            }}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar3;
