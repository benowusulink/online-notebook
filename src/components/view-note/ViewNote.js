import React from "react";
import "./ViewNote.css";

const ViewNote = (props) => {
  console.log(props.noteid);
  const para = document.getElementById("view-note-text");
  console.log(para);

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

export default ViewNote;
