"use client"

import Spinner from '@/app/components/Spinner';
import Action from '@/app/dashboard/ai/Action';
import ChatMessage from '@/app/dashboard/ai/ChatMessage';
import { useLoopContent } from '@/app/dashboard/ai/useLoopContent';
import { Configuration, OpenAIApi } from 'openai';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';

import {
  createBlogPost
} from './prompts';


const ChatRoom = ({
  chat,
}) => {
  const aiName = 'assistant';
  const [messages, setMessages] = useState([]);
  const [aiIsResponding, setAiIsResponding] = useState(false); // Flag to indicate AI response
  const [responseError, setResponseError] = useState(null); // Flag to indicate AI response
  const [inputText, setInputText] = useState('');
  const openai = useRef(null);
  const post = useRef({});
  const postAttribute = useRef(null);
  const {
    setInitialHtmlString,
    sections,
    sectionIndex,
    setSectionIndex,
  } = useLoopContent();

  const createPrompt = (text) => {
    return `rephrase the following string while keeping the html elements and changing only the html elements inner text, return a full updated string of html and their new content: ${text}`;
  };

  const validatePost = () => {
    return Object.keys(post.current).length === actions.length;
  };

  useLayoutEffect(() => {
    const createConnection = async () => {
      const configuration = new Configuration({
        organizationId: 'org-cZs70lWtkVYO7TnN1HJcmICg',
        apiKey: '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'
      });
      openai.current = new OpenAIApi(configuration);
    };

    createConnection();
  }, []);

  const handleSendMessage = async () => {

    if (inputText !== '') {
      const res = await fetch('/api/ai/chat-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputText,
          object_id: 1,
          content_type: {
            id: 1,
            model: 'useraccount',
            app_label: 'users',
          }
        }),
      });


      const newMessage = { content: inputText, role: 'user' };
      setMessages([...messages, newMessage]);
      setInputText('');
      setAiIsResponding(true);
      return;
    }

    toast.error('Please enter a message before sending');
  };

   useEffect(() => {
    // if sections eists, then we are looping through the sections
    if (sections && sections.length > 0) {
      const section = sections[sectionIndex];
      const prompt = createPrompt(section.text);
      handleSendMessage(prompt);
      setSectionIndex(sectionIndex + 1);
    }
   }, [sections]);

  useEffect(() => {
    if (!aiIsResponding) { 
      return;
    }
    
    const fetchData = async () => {
        
        const request = messages.map((message) => ({
          role: message.role,
          content: message.content.toString(),
        }));
        const response = await openai.current.createChatCompletion({
          model: 'gpt-3.5-turbo',
          messages: request,
          temperature: 0,
          max_tokens: MAX_TOKENS,
        });

        if(response.status !== 200) {
          const errMessage = response.data.error.message;
          setResponseError(`Error ${response.status}: ${errMessage}`); // `Error: ${errMessage}
          setAiIsResponding(false);
          return;
        }

        const gptResponse = response.data.choices[0].message.content;
        setAiIsResponding(false);
        setMessages([...messages, { content: gptResponse, role: aiName }]);
        post.current[postAttribute.current] = gptResponse;

 
 
      }


      fetchData();
  }, [ aiIsResponding ]);

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

 

 

  const actions = [
    {
      name: 'Rephrase',
      callback: () => {

        const html = inputText;
        if (html.length === 0) {
          toast.error('Please enter a valid html string');
          return;
        }

        setInitialHtmlString(html);
         


        // handleSendMessage(prompt);
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
    <div className="w-4/5 flex flex-col h-full bg-gray-100 justify-between">
      <div className="flex-1 overflow-y-auto p-4 flex flex-col">
        {chat.messages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}

        {aiIsResponding && (
          <ChatMessage
            message={{ content: <Spinner md />, role: aiName }}
          />
        )}

{responseError && (
          <ChatMessage
            message={{
              error: true, 
              content: responseError,
              role: aiName 
            }}
          />
        )}

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
