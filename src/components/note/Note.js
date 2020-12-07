//imports for the file
import React from "react";
import "./Note.css";

//React dumb component which accepts props
const Note = (props) => {
  const setIndex = (data) => {
    props.noteIndex(data);
  };

  return props.notetitle.map((data, i) => {
    return (
      <article id={`note-main`} key={i}>
        <div>
          <p
            key={i}
            id={`para`}
            onClick={() => {
              setIndex(i);
            }}
          >
            {" "}
            {data}{" "}
          </p>
        </div>
      </article>
    );
  });
};

// exporting component to be used with other files
export default Note;
