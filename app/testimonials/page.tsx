'use client';

import React, { useState } from 'react';

const ThankYouLetters = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const letters = [
    {
      name: 'Person A',
      letter: 'Thank you for the amazing portrait! It truly captures my essence.',
    },
    {
      name: 'Person B',
      letter: 'Your work is remarkable! I cherish this portrait.',
    },
    {
      name: 'Person C',
      letter: 'An exceptional piece of art that I’ll treasure forever.',
    },
  ];

  const toggleDetails = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div>
      <h1>Thank You Letters</h1>
      {letters.map((item, index) => (
        <div key={index}>
          <h2 onClick={() => toggleDetails(index)} style={{ cursor: 'pointer' }}>
            {item.name}
          </h2>
          {expandedIndex === index && <p>{item.letter}</p>}
        </div>
      ))}
    </div>
  );
};

export default ThankYouLetters;
