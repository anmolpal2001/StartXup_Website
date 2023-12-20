import React from "react";

// Modal component
const Modal = ({ isOpen, onClose, cardDetail }) => {
    if (!isOpen) {
      return null;
    }
  
    return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded p-8 max-w-md">
          <button
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 cursor-pointer"
            onClick={onClose}
          >
            Close
          </button>
          <h2 className="text-2xl font-bold mb-4">{cardDetail.StartupName}</h2>
          <p className="text-xl mb-2">Location: {cardDetail.CityLocation}</p>
          {/* Add more details as needed */}
        </div>
      </div>
    );
  };

export default Modal;
  