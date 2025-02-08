import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addItem(newnote) {
    setNotes((prevItem) => {
      return [...prevItem, newnote];
    });
  }

  function deleteNote(id) {
    setNotes(
      notes.filter((note, index) => {
        return id !== index;
      })
    );
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem} />
      {notes.map((noteitem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteitem.title}
            content={noteitem.content}
            onDelete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
