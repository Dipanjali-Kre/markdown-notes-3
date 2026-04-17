import React, { useState, useEffect } from 'react';
import SplitPane from 'react-split-pane';
import { v4 as uuidv4 } from 'uuid';
import Sidebar from './components/Sidebar';
import NoteEditor from './components/NoteEditor';
import './App.css';

function App() {
  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );
  const [activeNoteId, setActiveNoteId] = useState(null);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    if (notes.length > 0 && !activeNoteId) {
      setActiveNoteId(notes[0].id);
    }
  }, [notes, activeNoteId]);

  const handleNewNote = () => {
    const newNote = {
      id: uuidv4(),
      title: 'Untitled Note',
      content: '# New Note\n\nStart writing your markdown here!',
      lastModified: Date.now(),
    };
    setNotes([newNote, ...notes]);
    setActiveNoteId(newNote.id);
  };

  const handleDeleteNote = (noteIdToDelete) => {
    const updatedNotes = notes.filter((note) => note.id !== noteIdToDelete);
    setNotes(updatedNotes);

    if (activeNoteId === noteIdToDelete) {
      setActiveNoteId(updatedNotes.length > 0 ? updatedNotes[0].id : null);
    }
  };

  const handleUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return { ...updatedNote, lastModified: Date.now() };
      }
      return note;
    });
    setNotes(updatedNotesArray);
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNoteId);
  };

  const activeNote = getActiveNote();

  return (
    <div className="App">
      <SplitPane split="vertical" minSize={250} defaultSize={300} className="split-pane-container">
        <Sidebar
          notes={notes}
          activeNoteId={activeNoteId}
          setActiveNoteId={setActiveNoteId}
          handleNewNote={handleNewNote}
          handleDeleteNote={handleDeleteNote}
        />
        <NoteEditor activeNote={activeNote} onUpdateNote={handleUpdateNote} />
      </SplitPane>
    </div>
  );
}

export default App;
