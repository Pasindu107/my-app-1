import React from 'react'

const DateBox = ({ content }) => {
    // Get the current date
    const currentDate = new Date().toLocaleDateString();
  
    return (
      <div className="">
        <div>
          <p className="text-xl font-semibold">{content}</p>
          <p className="text-gray-500">{currentDate}</p>
        </div>
      </div>
    );
  };

export default DateBox
