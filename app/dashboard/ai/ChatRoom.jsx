"use client"

import React, { useState, useEffect, useLayoutEffect, useRef, use } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import { toast } from 'react-hot-toast';
import ChatMessage from '@/app/dashboard/ai/ChatMessage';
import Spinner from '@/app/components/Spinner';
import Action from '@/app/dashboard/ai/Action';


import {
  createBlogPost,
  createShadowText,
  createSeoTitle,
  createSeoDescription,
  createPostHeadline,
  createPostSubHeadline,
  createPostTitle,
  createPostExcerpt,
  rephrase,
} from './prompts';

const ChatRoom = () => {
  const aiName = 'assistant';
  const [messages, setMessages] = useState([]);
  
  const [inputText, setInputText] = useState('');
  const [openai, setOpenAI] = useState(null);
  const post = useRef({});
  const postAttribute = useRef(null);
  const isUser = useRef(true);
  const rephraseCount = useRef(-1);
  const rephraseElements = useRef([]);
  const validatePost = () => {
    return Object.keys(post.current).length === actions.length;
  };

  useLayoutEffect(() => {
    const createConnection = async () => {
      const configuration = new Configuration({
        organizationId: process.env.NEXT_PUBLIC_OPENAI_ORG_ID,
        apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
      });
      setOpenAI(new OpenAIApi(configuration));
    };

    createConnection();
  }, []);

  const handleSendMessage = async (str) => {
    isUser.current = true;
    if (str.trim() !== '') {
      const newMessage = { content: str, role: 'user' };
      const tempResponse = { content: <Spinner md />, role: aiName };
      setMessages([...messages, newMessage, tempResponse]);
      setInputText('');
      isUser.current = false;
      return;
    }

    toast.error('Please enter a message before sending');
  };

  useEffect(() => {
    const fetchData = async () => {
      if (openai) {
        const request = messages.map((message) => ({
          role: message.role,
          content: message.content.toString(),
        }));
        const response = await openai.createChatCompletion({
          model: 'gpt-3.5-turbo',
          messages: request,
          temperature: 0,
          max_tokens: 2048,
        });

        const gptResponse = response.data.choices[0].message.content;
        setMessages([...messages, { content: gptResponse, role: aiName }]);
        post.current[postAttribute.current] = gptResponse;


        if (validatePost()) {
          console.log('create post');
          // createPost(post.current);
        }
      }

      isUser.current = true;
    };

    if (!isUser.current) {
      fetchData();
    }
  }, [messages]);

  // useEffect(() => {

  //   // fire only if is a response from the ai
  //   if (!isUser.current) {
  //     if (rephraseCount.current >= 0 && rephraseCount.current < rephraseElements.current.length) {
  //       const element = rephraseElements.current[rephraseCount.current];
  //       const text = element.outerHTML;
  //       const prompt = `rephrase the following string while keeping the html elements and changing only the html elements inner text, return a full updated string of html and their new content: ${text}`;
  //       handleSendMessage(prompt);
  //       rephraseCount.current++;
  //     }
  //   }

  // }, [messages, isUser.current]);

  const calculateTokens = (text) => {
    const chars = text.split('');
    return chars.length / 3;
  };

  const getParentElements = (html) => {
    const temp = document.createElement('div');
    temp.innerHTML = html;
    return Array.from(temp.children);
  };

 

  const actions = [
    {
      name: 'Rephrase',
      callback: () => {
        const html = getParentElements(inputText);
        const good = [];
        for (let i = 0; i < html.length; i++) {
          const l = html[i].outerHTML.length;
          const d = 4;
          debugger
          const tokens = calculateTokens(html[i].outerHTML);
          debugger
          if (tokens <= 2000) {
            good.push(html[i].outerHTML);
          }
        }

        rephraseElements.current = good;
        const element = good[0];
        const text = element.outerHTML;
        debugger
        const prompt = `rephrase the following string while keeping the html elements and changing only the html elements inner text, return a full updated string of html and their new content: ${text}`;
        handleSendMessage(prompt);
      },
    },
    {
      name: 'Create a blog post',
      callback: () => {
        if (inputText.trim() === '') {
          toast.error('Please enter a post topic in the input field before creating a new blog post');
          return;
        }
        postAttribute.current = 'content';
        const prompt = createBlogPost(inputText);
        handleSendMessage(prompt);
      },
    },
    // ... other actions ...
  ];

  return (
    <div className="flex flex-col h-full bg-gray-100 justify-between">
      <div className="flex-1 overflow-y-auto p-4 flex flex-col">
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
      </div>
      <div className="p-4 w-full">
        <div className="flex w-full mb-2">
          <input
            id="message"
            type="text"
            className="flex-1 p-2 rounded-lg bg-white border w-full"
            placeholder="Type your message..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button
            className="px-4 py-2 ml-2 rounded-lg bg-gray-dark-8 text-white hover:text-green-dark-8"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
        <div className="flex flex-row justify-between gap-2 overflow-scroll w-full">
          {actions.map((action, index) => {
            if (action.name === 'Rephrase') {
              return (
                <button
                  key={index}
                  className="px-4 py-2 rounded-lg bg-gray-dark-8 text-white hover:text-green-dark-8"
                  onClick={action.callback}
                >
                  {action.name}
                </button>
              );
            }
            return <Action key={index} action={action} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
