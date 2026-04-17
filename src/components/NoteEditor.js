import React from 'react';
import SplitPane from 'react-split-pane';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './NoteEditor.css';

function NoteEditor({ activeNote, onUpdateNote }) {
  if (!activeNote) {
    return <div className="no-active-note">Select a note, or create a new one!</div>;
  }

  const onEditField = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
      lastModified: Date.now(),
    });
  };

  const CodeBlock = ({ inline, className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <SyntaxHighlighter
        style={atomOneDark}
        language={match[1]}
        PreTag="div"
        {...props}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  };

  return (
    <div className="note-editor">
      <div className="editor-header">
        <input
          type="text"
          id="title"
          value={activeNote.title}
          onChange={(e) => onEditField('title', e.target.value)}
          autoFocus
          className="editor-title-input"
        />
      </div>
      <SplitPane split="vertical" minSize={100} defaultSize="50%" className="editor-split-pane">
        <div className="editor-pane">
          <textarea
            id="content"
            placeholder="Write your markdown here..."
            value={activeNote.content}
            onChange={(e) => onEditField('content', e.target.value)}
            className="markdown-input"
          ></textarea>
        </div>
        <div className="preview-pane">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code: CodeBlock,
            }}
          >
            {activeNote.content}
          </ReactMarkdown>
        </div>
      </SplitPane>
    </div>
  );
}

export default NoteEditor;
