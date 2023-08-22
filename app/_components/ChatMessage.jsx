const ChatMessage = ({ message }) => {
  const isUser = message.sender === 'user';

  return (
    <div className={`mb-4 inline-flex ${isUser ? 'items-end' : 'items-start'}`}>
      <div
        className={`px-4 py-2 w-auto rounded-lg ${
          isUser ? 'bg-blue-500 text-white' : 'bg-gray-300'
        }`}
      >
        {message.text}
      </div>
    </div>
  );
};

export default ChatMessage;
