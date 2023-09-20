"use client";import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import Icon from '@/app/components/Icon';

import ChatMessage from '@/app/components/ai/ChatMessage';
import Spinner from '@/app/components/Spinner'; // Import a spinner component
import Sidebar from '@/app/components/ai/Sidebar';
import Action from './Action';
 
 
 

const api = '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';

const ChatRoom = () => {

  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('write me a blog post about starting a business');
  const [openai, setOpenAI] = useState(null);
  const isUser = useRef(true);// Add a new state variable [1
  useLayoutEffect(() => {
    const createConnection = async () => {
      const configuration = new Configuration({
        organizationId: 'org-cZs70lWtkVYO7TnN1HJcmICg',
        apiKey: api,
      });
      setOpenAI(new OpenAIApi(configuration));
    };

    createConnection();
  }, []);

  const handleSendMessage = async () => {
    isUser.current = true;
    if (inputText.trim() !== '') {

      const newMessage = { content: inputText, role: 'user' };
      const tempResponse = { content: <Spinner md />, role: 'bot' };
      setMessages([...messages, newMessage, tempResponse]); // Add user's message immediately
      setInputText('');
      isUser.current = false;
    }

  };
    
    useEffect(() => {
      const fetchData = async () => {
      if (openai) {
        const request = messages.splice(0, messages.length - 1);
        const response = await openai.createChatCompletion({
          model: 'gpt-3.5-turbo',
          messages: request,
          temperature: 0,
          max_tokens: 2048,
        });
        console.log(request, response);
        debugger
        const gptResponse = response.data.choices[0].message.content;
        debugger
        setMessages([...request, { content: gptResponse, role: 'bot' }]);
      }

      isUser.current = true;
    };

    if(!isUser.current) {
      fetchData();
    }

  }, [messages]);

  const actions = [
    {
      name: 'Create a blog post',
      description: 'Create a blog post',
      callback: () => {
        setInputText('write me a blog post about starting a business');
        handleSendMessage();
      }
    }
  ]

  return (
    <div className="flex flex-row h-screen bg-gray-100">
      <Sidebar />
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex-1 overflow-y-auto p-4 flex flex-col">
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
            <Icon type="send" className="inline-block w-6 h-6 align-middle" />
          </button>
        </div>
        {actions.map((action, index) => <Action key={index} action={action} />)}
      </div>
    </div>
    </div>
  );
};

export default ChatRoom;
