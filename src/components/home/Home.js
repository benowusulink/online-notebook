import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./Home.css";
import NoteContainer from "../note-ctn/NoteContainer.js";

class Home extends Component {
  constructor() {
    super();
  }

  render(props) {
    return (
      <Jumbotron fluid id={`jumbotron`}>
        <h1>{`Welcome ${this.props.name}`}</h1>
        <h2 id={`h2-message`}>
          {" "}
          Create a new note or view existing notes below{" "}
        </h2>
        <NoteContainer id={this.props.id} />
      </Jumbotron>
    );
  }
}

export default Home;
