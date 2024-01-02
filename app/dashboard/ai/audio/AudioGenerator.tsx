"use client";
import { Configuration, OpenAIApi } from 'openai';
import React, {
    useLayoutEffect
} from 'react';

export default function AudioGenerator({
    audio,
}:any) {
    const openai = React.useRef<any>(null);

    useLayoutEffect(() => {
        const createConnection = async () => {
          const configuration = new Configuration({
            apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
          });
          openai.current = new OpenAIApi(configuration);
        };
    
        createConnection();
      }, []);

  return (
    <div>AudioGenerator</div>
  )
}
