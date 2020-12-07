//imports for the file
import React from "react";
import "./ViewNote.css";

//React dumb component which accepts props
const ViewNote = (props) => {
  const para = document.getElementById("view-note-text");
  const data = (note, noteid) => {
    note.forEach((notes, i) => {
      if (i === noteid) {
        console.log(notes, para);
        para.textContent = notes;
      }
    });
  };

  if (para !== null) {
    return (
      <main id={`view-note`}>
        <p id={`view-note-text`}>{data(props.note, props.noteid)}</p>
      </main>
    );
  } else {
    return (
      <main id={`view-note`}>
        <p id={`view-note-text`}>{`double click note on the side to view`}</p>
      </main>
    );
  }
};

// exporting component to be used with other files
export default ViewNote;
