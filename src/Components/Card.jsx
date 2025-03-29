// Card.js
import React from 'react';

const Card = ({ title, content, linkText, onLinkClick }) => {
  return (
    <div className="bg-gray-200 p-4 rounded shadow-md mb-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold">{title}</h3>
        <button onClick={onLinkClick} className="text-blue-500 hover:underline focus:outline-none">
          {linkText}
        </button>
      </div>
      <div className="mt-2">{content}</div>
    </div>
  );
};

export default Card;