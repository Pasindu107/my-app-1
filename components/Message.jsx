import React, { useState } from 'react';

function MessageBoard() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Prevent empty messages
    if (!newMessage.trim()) {
      return;
    }

    setMessages([...messages, newMessage]);
    setNewMessage(''); // Clear the input field
  };

  return (
    <div>
        <div className='grid lg:grid-cols-5 gap-4 p-4'>
            <h2>Message Board</h2>

            <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={newMessage}
                onChange={(event) => setNewMessage(event.target.value)}
                placeholder="Type your message here..."
                className='w-full m-auto p-4 border rounded-lg overflow-y-auto'
            />
            <div className='p-4'>
                <button type="submit" className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>Submit</button>

            </div>            
            </form>
        </div>
      
      <div className="messages-container">
        {messages.map((message, index) => (
          <div className="message-card" key={index}>
            <p>{message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessageBoard;