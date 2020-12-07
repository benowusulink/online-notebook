//imports for the file
import React, { Component } from "react";
import "./NewNote.css";

//React class component
class NewNote extends Component {
  /*React life-cycle method constructor which will 
hold components state;
*/
  constructor() {
    super();
    this.state = { title: "", note: "" };
  }

  /*Function within class component that sets title
   */
  onTitleChange = (event) => {
    this.setState({ title: event.target.value });
  };

  /*Function within class component that sets note
   */
  onNoteChange = (event) => {
    this.setState({ note: event.target.value });
  };

  /*Function within class component that deals with 
the button submit
*/
  saveButton = () => {
    const { id, loadState } = this.props;

    //API POST request which sends json data within its body to the URL
    fetch("https://enigmatic-fjord-29762.herokuapp.com/new-note", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        id: id,
        noteTitle: this.state.title,
        note: this.state.note,
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
        console.log(res);
        if (res.status === "success") {
          this.deleteButton();
          loadState(res.info);
          alert("note saved :)");
        }
      });
  };

  /*Function within class component that erases the state and inputs
   */
  deleteButton = () => {
    this.setState({
      title: "",
      note: "",
    });

    document.getElementById("notetitle").value = "";
    document.getElementById("notetext").value = "";
  };

  /* React Life Cycle method Render
   */
  render() {
    const { onRoutechange } = this.props;

    /* Rendered component which will be displayed to the user
     */
    return (
      <main id={`new-note-main`}>
        <section id={`sec-1`}>
          <label htmlFor="title">{`Note Title:`}</label>
          <input
            type={`text`}
            name={"title"}
            maxLength={`25`}
            id={`notetitle`}
            onChange={this.onTitleChange}
            placeholder={`enter note title`}
          />
          <button
            onClick={() => {
              onRoutechange("notelist");
            }}
          >
            View notes
          </button>
        </section>
        <textarea
          id="notetext"
          name="title"
          placeholder={`write your new note here`}
          maxLength="300"
          onChange={this.onNoteChange}
        ></textarea>
        <section id={`note-btns`}>
          <button onClick={this.deleteButton}>{`Delete`}</button>
          <button onClick={this.saveButton}>{`Save`}</button>
        </section>
      </main>
    );
  }
}

/* exporting component to be used with other files
 */

export default NewNote;
