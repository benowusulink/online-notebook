import React, { Component } from "react";
import "./NewNote.css";

class NewNote extends Component {
  constructor() {
    super();
    this.state = { title: "", note: "" };
  }

  onTitleChange = (event) => {
    console.log(event.target.value);
    this.setState({ title: event.target.value });
  };

  onNoteChange = (event) => {
    console.log(event.target.value);
    this.setState({ note: event.target.value });
  };

  saveButton = () => {
    const { id, loadState } = this.props;

    fetch("http://localhost:3003/new-note", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        id: id,
        noteTitle: this.state.title,
        note: this.state.note,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        if (res.status === "success") {
          console.log(res);
          this.deleteButton();
          loadState(res.info);
        }
      });
  };

  deleteButton = () => {
    this.setState({
      title: "",
      note: "",
    });

    document.getElementById("notetitle").value = "";
    document.getElementById("notetext").value = "";
  };

  render() {
    const { onRoutechange } = this.props;

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

export default NewNote;
