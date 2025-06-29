import React, { useState } from 'react';
import Content from './Content';
import './Card.css'

const Card = ({ items }) => {
  const [openIndexes, setOpenIndex] = useState([]);

  // to open multile 
  const handleClick = (index) => {
    setOpenIndex( (prev) => {
        if(prev.includes(index)){
            return prev.filter(idx => idx != index);
        }
        else{
            return [...prev, index];
        }
    }
    )
  };

  // to open one at a time
//   const handleClick = (idx) => {
//     setOpenIndex((prev) => prev === idx? null: idx);
//   }

  return (
     <div className="accordion-container">
      <h2 className="accordion-title">FAQ</h2>
      {items?.map((item, idx) => (
        <div className="accordion-item" key={idx}>
          <div className="accordion-header" onClick={() => handleClick(idx)}>
            <span>{item.title}</span>
            <span className="accordion-icon">
              {openIndexes.includes(idx) ? '−' : '+'}
            </span>
          </div>
          {openIndexes.includes(idx) && (
            <Content content={item.content} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Card;
