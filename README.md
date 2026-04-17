# Markdown Notes App

A simple React.js application for creating, editing, and managing markdown notes with live preview and local storage persistence.

## Features

*   **Split-Pane Editor**: Write markdown on the left, see the live preview on the right.
*   **Create Notes**: Easily add new notes.
*   **Save Notes**: All notes are automatically saved to your browser's local storage.
*   **Delete Notes**: Remove notes you no longer need.
*   **Syntax Highlighting**: Code blocks in your markdown are beautifully highlighted.
*   **GitHub Flavored Markdown (GFM)**: Supports common markdown extensions like task lists, tables, and strikethrough.
*   **Responsive Design**: Adapts to different screen sizes.

## Technologies Used

*   **React.js**: Frontend library.
*   **`react-split-pane`**: For resizable split views.
*   **`react-markdown`**: To parse and render markdown content.
*   **`remark-gfm`**: A `remark` plugin to support GitHub Flavored Markdown.
*   **`react-syntax-highlighter`**: For beautiful code block syntax highlighting.
*   **`uuid`**: To generate unique IDs for notes.
*   **Local Storage**: For client-side data persistence.

## Getting Started

### Prerequisites

Make sure you have Node.js and npm (or yarn) installed on your machine.

*   [Node.js](https://nodejs.org/)

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/markdown-notes.git
    cd markdown-notes
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Application

To start the development server:

```bash
npm start
# or
yarn start
```

This will open the application in your browser at `http://localhost:3000`.

### Building for Production

To create a production-ready build:

```bash
npm run build
# or
yarn build
```

This will generate a `build` folder with optimized static assets.

## Usage

1.  **Create a New Note**: Click the `+` button in the sidebar to add a new note.
2.  **Select a Note**: Click on any note in the sidebar to view and edit it.
3.  **Edit Markdown**: Type your markdown content in the left pane. The right pane will show a live preview.
4.  **Change Title**: Edit the title input field above the editor.
5.  **Delete a Note**: Click the `X` button next to a note in the sidebar to delete it.
6.  **Resize Panes**: Drag the vertical divider between the sidebar and editor, or between the editor and preview, to adjust their widths.

Your notes are automatically saved to your browser's local storage, so they will persist even if you close and reopen the browser.

## Project Structure

```
markdown-notes/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── NoteEditor.js
│   │   ├── NoteEditor.css
│   │   ├── Sidebar.js
│   │   └── Sidebar.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```
