import React from 'react';
import './Content.css'; // Use same CSS

const Content = ({ content }) => {
  return (
    <div className="accordion-content">
      <p>{content}</p>
    </div>
  );
};

export default Content;

