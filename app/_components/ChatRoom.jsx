"use client";
import { useState, useEffect } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import { BsSend } from 'react-icons/bs';

import ChatMessage from '@/app/_components/ChatMessage';

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [openai, setOpenAI] = useState(null);

  useEffect(() => {
    const createConnection = async () => {
      const configuration = new Configuration({
        organizationId:'org-cZs70lWtkVYO7TnN1HJcmICg',
        apiKey: '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'
      });
      setOpenAI(new OpenAIApi(configuration));
    };

    createConnection();
  }, []);

  const handleSendMessage = async () => {
    if (inputText.trim() !== '') {
      const newMessage = { text: inputText, sender: 'user' };
      setMessages([...messages, newMessage]);
      setInputText('');

      if (openai) {
        const response = await openai.createChatCompletion({
          model: 'gpt-3.5-turbo',
          messages: [...messages, newMessage],
          temperature: 0,
          max_tokens: 2048
        });

        const gptResponse = response.choices[0].message.content;
        setMessages([...messages, { text: gptResponse, sender: 'bot' }]);
      }
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
      </div>
      <div className="p-4 border-t">
        <div className="flex">
          <input
            type="text"
            className="flex-1 p-2 rounded-lg bg-white border"
            placeholder="Type your message..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button
            className="px-4 py-2 ml-2 rounded-lg bg-gray-dark-8 text-white hover:text-green-dark-8"
            onClick={handleSendMessage}
          >
            <BsSend className="inline-block w-6 h-6 align-middle" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
