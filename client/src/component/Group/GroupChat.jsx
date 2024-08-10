import React from 'react';
import ChatWindow from '../Chat/ChatWindow';

const GroupChat = () => {
  return (
    <div className="flex flex-col w-full max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl mb-4">Group Chat</h2>
      <ChatWindow />
    </div>
  );
};

export default GroupChat;
