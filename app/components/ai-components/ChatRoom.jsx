"use client"; import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import Icon from '@/app/components/Icon';
import { toast } from 'react-hot-toast';
import ChatMessage from '@/app/components/ai-components/ChatMessage';
import Spinner from '@/app/components/Spinner'; // Import a spinner component
import Sidebar from '@/app/components/ai-components/Sidebar';
import Action from './Action';

import { createPost } from '@/lib/api'
import {
  createBlogPost,
  createShadowText,
  createSeoTitle,
  createSeoDescription,
  createPostHeadline,
  createPostSubHeadline,
  createPostTitle,
  createPostExcerpt
} from './prompts'




const api = "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"
// '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';

const ChatRoom = () => {
  const aiName = 'assistant';
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [openai, setOpenAI] = useState(null);
  const post = useRef({});
  const postAttribute = useRef(null);
  const isUser = useRef(true);// Add a new state variable [1

  const validatePost = () => {
    return Object.keys(post.current).length === actions.length
  }

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
      const tempResponse = { content: <Spinner md />, role: aiName };
      setMessages([...messages, newMessage, tempResponse]); // Add user's message immediately
      setInputText('');
      isUser.current = false;
      return;
    }

    toast.error('Please enter a message before sending');
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
        post.current[postAttribute.current] = gptResponse;
        console.log(post.current);
        debugger
        setMessages([...request, { content: gptResponse, role: aiName }]);

        // if full post - create post
        if (validatePost()) {
          console.log('create post');
          createPost(post.current)
          debugger
        }
      }

      isUser.current = true;
    };

    if (!isUser.current) {
      fetchData();
    }

  }, [messages]);

   
  const actions = [
    {
      name: 'Create a blog post',
      callback: () => {
        if(inputText.trim() === '') {
          toast.error('Please enter a post topic in the input field before creating a new blog post')
          return
        }
        postAttribute.current = 'content'
        const prompt = createBlogPost(inputText)
        handleSendMessage(prompt)
      }
    },
    {
      name: 'Create a Title',
      callback: () => {
        postAttribute.current = 'title'
        setInputText(createPostTitle())
        
      }
    },
    {
      name: 'Create a Subtitle',
      callback: () => {
        postAttribute.current = 'subtitle'
        setInputText(createPostSubHeadline())
        
      }
    },
    {
      name: 'Create a Headline',
      callback: () => {
        postAttribute.current = 'headline'
        setInputText(createPostHeadline())
        
      }
    },
    {
      name: 'Create a Post Excerpt',
      callback: () => {
        postAttribute.current = 'excerpt'
        setInputText(createPostExcerpt())
      }
    },
    {
      name: 'Create a ShadowText',
      callback: () => {
        postAttribute.current = 'shadowText'
        setInputText(createShadowText())
        
      }
    },
    {
      name: 'Create an SEO Title',
      callback: () => {
        postAttribute.current = 'seoTitle'
        setInputText(createSeoTitle())
        
      }
    },
    {
      name: 'Create a SEO Description',
      callback: () => {
        postAttribute.current = 'seoDescription'
        setInputText(createSeoDescription())
        
      }
    }
  ]

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
              <Icon type="send" className="inline-block w-6 h-6 align-middle" />
            </button>
          </div>
          <div className="flex flex-row justify-between gap-2 overflow-scroll w-full">
            {actions.map((action, index) => <Action key={index} action={action} />)}
          </div>

      </div>
    </div>
  );
};

export default ChatRoom;
