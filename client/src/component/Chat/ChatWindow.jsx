import React from 'react';
import MessageInput from './MessageInput';

const ChatWindow = () => {
  return (
    <div className="flex flex-col w-full max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
      <div className="flex-1 overflow-y-auto">
        {/* Display chat messages here */}
      </div>
      <MessageInput />
    </div>
  );
};

export default ChatWindow;
