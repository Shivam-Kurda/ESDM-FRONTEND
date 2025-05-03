// Card.js
import React from 'react';

const Card = ({ title, content, linkText, onLinkClick }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 mb-6 transition-transform hover:scale-[1.01]">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        {linkText && (
          <button
            onClick={onLinkClick}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-medium shadow-sm transition-colors"
          >
            {linkText}
          </button>
        )}
      </div>
      <div className="text-gray-600 text-sm leading-relaxed">{content}</div>
    </div>
  );
};


export default Card;