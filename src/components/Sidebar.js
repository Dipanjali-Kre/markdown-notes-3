import React from 'react';
import './Sidebar.css';

function Sidebar({ notes, activeNoteId, setActiveNoteId, handleNewNote, handleDeleteNote }) {
  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1>Notes</h1>
        <button className="new-note-button" onClick={handleNewNote}>+</button>
      </div>
      <div className="note-list">
        {sortedNotes.map((note) => (
          <div
            key={note.id}
            className={`note-list-item ${note.id === activeNoteId ? 'active' : ''}`}
            onClick={() => setActiveNoteId(note.id)}
          >
            <div className="note-list-item-title">
              <strong>{note.title.split('\n')[0]}</strong>
              <button className="delete-note-button" onClick={(e) => {
                e.stopPropagation(); // Prevent activating the note when deleting
                handleDeleteNote(note.id);
              }}>
                &#x2715;
              </button>
            </div>
            <small className="note-list-item-date">
              {new Date(note.lastModified).toLocaleDateString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </small>
            <p className="note-list-item-preview">
              {note.content.length > 50 ? note.content.substring(0, 50) + '...' : note.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
