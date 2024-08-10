import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendMessage } from '../../features/chat/chatSlice';

const MessageInput = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      dispatch(sendMessage(message));
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message"
        className="flex-1 p-2 border border-gray-300 rounded-l-md"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded-r-md">
        Send
      </button>
    </form>
  );
};

export default MessageInput;
