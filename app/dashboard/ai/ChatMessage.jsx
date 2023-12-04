"use client"
import { RiOpenaiFill } from "react-icons/ri";
import cs from 'classnames';

const ChatMessage = ({ message }) => {
  const isUser = message.content_type.model === 'useraccount';

  const classes = cs(
    `px-4 py-2 w-auto rounded-lg`,
    {
    'bg-gray-300 text-black': isUser,
    'bg-gray-500 text-white': !isUser,
    'bg-danger-500 text-red-800': message.error,
  });

  return (
    <div className={`message mb-2 items-center inline-flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <RiOpenaiFill
          className="h-12 w-12 mr-2 rounded-full stroke-black bg-gray-300 flex-shrink-0"
        />
      )}
      <div
        className={classes}
      >
        {message.message} {/* Use 'content' instead of 'text' */}
      </div>

      {isUser && (
        <div className='ml-2 bg-black rounded-full h-12 w-12 flex-shrink-0 shadow-lg' />
      )}
    </div>
  );
};

export default ChatMessage;
