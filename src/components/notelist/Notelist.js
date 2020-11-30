import React from "react";
import "./Notelist.css";
import Note from "../note/Note.js";
import ViewNote from "../view-note/ViewNote.js";

const Notelist = (props) => {
  console.log(props);

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
        <section id={`view-note`}>
          <ViewNote note={props.note} noteid={props.noteid} />
        </section>
      </main>
    </div>
  );
};

export default Notelist;
