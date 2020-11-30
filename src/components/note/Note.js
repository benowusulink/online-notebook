import React from "react";
import "./Note.css";

const Note = (props) => {
  const setIndex = (data) => {
    console.log(data);
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

export default Note;
