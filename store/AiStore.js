"use client"
import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { Configuration, OpenAIApi } from 'openai';


// Define the actions that can be dispatched to update the store
const actions = {
    SET_LOADING: 'SET_LOADING',
    SET_AI: 'SET_AI',
    SET_AI_ERROR: 'SET_AI_ERROR',
}

const aiReducer = (state, action) => {
    switch (action.type) {
        case actions.SET_LOADING:
            return {
                ...state,
                isLoading: action.payload.isLoading,
            };
        case actions.SET_AI:
            return {
                ...state,
                ai: action.payload.ai,
            };
        case actions.SET_AI_ERROR:
            return {
                ...state,
                ai: null,
                error: action.payload.error,
            };
        default:
            return state;
    }
};


const AiContext = createContext();


const AiProvider = ({ children }) => {
    const [aiState, dispatch] = useReducer(aiReducer, {
        ai: null,
        isLoading: true,
    });

    useEffect(() => {
        const fetchAi = async () => {
            try {
                // Configure OpenAI API
                // const openai = new OpenAIApi({
                //     apiKey: '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'
                // });

                // const response = await openai.createChatCompletion({
                //     model: 'gpt-3.5-turbo',
                //     apiKey: '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',
                //     messages: [
                //         {
                //             role: 'system',
                //             content: 'You are a helpful assistant that generates business names.',
                //         },
                //     ],
                // });

                debugger
                dispatch({
                    type: actions.SET_AI,
                    payload: {
                        ai: response.data,
                    },
                });


            } catch (error) {
                dispatch({
                    type: actions.SET_AI_ERROR,
                    payload: {
                        error,
                    },
                });


            }

            dispatch({
                type: actions.SET_LOADING,
                payload: {
                    isLoading: false,
                },
            });
        };

        fetchAi();
    }, []);


    return (
        <AiContext.Provider value={{ ...aiState, dispatch }}>
            {children}
        </AiContext.Provider>
    );
};


const useAi = () => {
    const store = useContext(AiContext);

    if (!store) {
        throw new Error('useAi must be used within a AiProvider');
    }




    return {
        ...store,
    };

};

export {
    useAi,
    AiProvider
}