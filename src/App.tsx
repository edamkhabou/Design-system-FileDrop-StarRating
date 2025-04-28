import React from 'react';
import FileDropZone from './components/DragAndDrop/FileDropZone';
import StarRating from './components/StarRating/StarRating';
import './styles/global.css';

const App: React.FC = () => {
  const handleEmojiSelect = (emoji: string) => {
    console.log(`Selected emoji: ${emoji}`);
  };
  return (
    <div className="app-container">
      <h1>Design System</h1>
      <section>
        <h2>File Upload</h2>
        <FileDropZone />
      </section>
      <section>
        <h2>Star Rating</h2>
        <StarRating onRatingChange={(rating) => console.log(`Rating selected: ${rating}`)} />
      </section>
    </div>
  );
};

export default App;