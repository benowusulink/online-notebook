//imports for the file
import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./Home.css";
import NoteContainer from "../note-ctn/NoteContainer.js";

//React dumb component which accepts props
const Home = (props) => {
  //Return for the dumb component
  return (
    <Jumbotron fluid id={`jumbotron`}>
      <h1>{`Welcome ${props.name}`}</h1>
      <h2 id={`h2-message`}>
        {" "}
        Create a new note or view existing notes below{" "}
      </h2>
      <NoteContainer id={props.id} />
    </Jumbotron>
  );
};

// exporting component to be used with other files
export default Home;
