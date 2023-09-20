import Icon from '@/app/components/Icon';


const ChatMessage = ({ message }) => {
  const isUser = message.role === 'user'; // Check the 'role' property

  return (
    <div className={`message mb-4 items-center inline-flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <Icon
          type="openai"
          className="h-12 w-12 mr-2 rounded-full stroke-black bg-gray-300"
        />
      )}
      <div
        className={`px-4 py-2 w-auto rounded-lg ${
          isUser ? 'bg-blue-500 text-white' : 'bg-gray-300'
        }`}
      >
        {message.content} {/* Use 'content' instead of 'text' */}
      </div>

      {isUser && (
        <div className='ml-2 bg-black rounded-full h-12 w-12' />
      )}
    </div>
  );
};

export default ChatMessage;
