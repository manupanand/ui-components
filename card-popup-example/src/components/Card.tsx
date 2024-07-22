import React, { useState } from 'react';

const Card = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-4">
      <div
        className="cursor-pointer border border-gray-200 shadow-md p-4 rounded-lg"
        onClick={toggleCard}
      >
        <h2 className="text-lg font-semibold">{title}</h2>
        {isOpen && (
          <div className="mt-4">
            <p>{content}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;