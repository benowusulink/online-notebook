//imports for the file
import React from "react";
import "./Notelist.css";
import Note from "../note/Note.js";
import ViewNote from "../view-note/ViewNote.js";

//React dumb component which accepts props
const Notelist = (props) => {
  //Return for the dumb component
  return (
    <div id={`main-div`}>
      <button
        onClick={() => {
          props.onRoutechange("new-note");
        }}
      >
        {`New note`}
      </button>
      <main id={`notelist`}>
        <section id={`notelist-notes`}>
          <Note notetitle={props.notetitle} noteIndex={props.noteIndex} />
        </section>
        <section id={`view-note1`}>
          <ViewNote note={props.note} noteid={props.noteid} />
        </section>
      </main>
    </div>
  );
};

// exporting component to be used with other files
export default Notelist;
