import { useSelector } from 'react-redux';

const useChat = () => {
  const messages = useSelector((state) => state.chat.messages);
  return { messages };
};

export default useChat;
