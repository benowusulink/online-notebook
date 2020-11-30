import React, { Component } from "react";
import Notelist from "../notelist/Notelist.js";
import NewNote from "../new-note/NewNote.js";

class NoteContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: "new-note",

      id: this.props.id,

      notetitle: [],

      note: [],

      noteid: 0,
    };
  }

  componentDidMount() {
    fetch("http://localhost:3003/note-container", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        id: this.state.id,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res.info);
        this.loadState(res.info); /*this.loadState(res)*/
      });
  }

  /* change route for note container */
  onRoutechange = (route) => {
    this.setState({ route: route });
  };

  /* loading component state with data from 
	componentDidMount */
  loadState = (res) => {
    /* looping through fetched data and setting the state
     */
    const notetitles = res.map((title) => {
      return title.notetitle;
    });
    console.log(notetitles);

    const notes = res.map((notes) => {
      return notes.note;
    });
    console.log(notes);

    this.setState({
      notetitle: notetitles,
      note: notes,
      id: this.props.id,
    });

    console.log(this.state);
  };

  /* changing the value of the index of the 
	note */
  noteIndex = (value) => {
    this.setState({
      noteid: value,
    });
  };

  render() {
    switch (this.state.route) {
      case "new-note":
        return (
          <NewNote
            onRoutechange={this.onRoutechange}
            id={this.state.id}
            loadState={this.loadState}
          />
        );

      case "notelist":
        return (
          <Notelist
            onRoutechange={this.onRoutechange}
            note={this.state.note}
            notetitle={this.state.notetitle}
            noteIndex={this.noteIndex}
            noteid={this.state.noteid}
          />
        );

      default:
        return (
          <NewNote onRoutechange={this.onRoutechange} id={this.state.id} />
        );
    }
  }
}

export default NoteContainer;
