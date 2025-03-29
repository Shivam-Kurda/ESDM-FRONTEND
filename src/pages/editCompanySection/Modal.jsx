// Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  console.log("modal is open")

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
    <div className="absolute inset-0 bg-opacity-50 backdrop-blur-sm"></div>
    <div className="bg-white p-6 rounded shadow-lg w-full max-w-md z-10">
      <button onClick={onClose} className="text-red-500 float-right">X</button>
      {children}
    </div>
  </div>
  );
};

export default Modal;