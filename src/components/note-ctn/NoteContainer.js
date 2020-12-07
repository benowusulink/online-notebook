//imports for the file
import React, { Component } from "react";
import Notelist from "../notelist/Notelist.js";
import NewNote from "../new-note/NewNote.js";

//React class component
class NoteContainer extends Component {
  /*React life-cycle method constructor which will 
hold components state;
*/
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

  /*React life-cycle method componentDidMount which will 
gets activated when component has fully mounted and rendered
on the webpage, will cause the component to re reneder;
*/
  componentDidMount() {
    fetch("https://enigmatic-fjord-29762.herokuapp.com/note-container", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        id: this.state.id,
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
      function in this components passed as props
      */
      .then((res) => {
        this.loadState(res.info);
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

    const notes = res.map((notes) => {
      return notes.note;
    });

    this.setState({
      notetitle: notetitles,
      note: notes,
      id: this.props.id,
    });
  };

  /* changing the value of the index of the 
	note */
  noteIndex = (value) => {
    this.setState({
      noteid: value,
    });
  };
  /* React Life Cycle method Render
   */

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

/* exporting component to be used with other files
 */
export default NoteContainer;
