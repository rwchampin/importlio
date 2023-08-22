"use client"
import React, { createContext, useContext, useEffect, useReducer } from 'react';

// Define the actions that can be dispatched to update the store
const actions = {
    SET_REGISTRANTS: 'SET_REGISTRANTS',
};

const analyticsReducer = (state, action) => {

    switch (action.type) {
        case actions.INITIAL_LOAD:
            return {
                ...state,
                registrants: action.payload,
            };
        default:
            return state;
    }
};
const AnalyticsContext = createContext();


const getRegistrants = async (callback) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/registrants/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const data = await res.json()

    if (data && data.results) {
        callback(data.results)

        return data.results;
    }

    callback(data)

    return data;
}
 
const getAll = async (callbacks) => {
    const [registrants] = await Promise.all([
        getRegistrants(callbacks.setRegistrants),
    ]);

    return {
        registrants,
    };
};


const AnalyticsProvider = ({ children }) => {
    const [analyticsState, dispatch] = useReducer(analyticsReducer, {
        registrants: [],
    });

    useEffect(() => {
       
        getRegistrants((registrants) => dispatch( { type: actions.INITIAL_LOAD, payload: registrants } ));

    }, []);

    return (
        <AnalyticsContext.Provider value={{ ...analyticsState, dispatch }}>
            {children}
        </AnalyticsContext.Provider>
    );
};
const useAnalytics = () => {
    const { registrants} = useContext(AnalyticsContext);




    return {
        registrants,
    }
    
};

export {
    AnalyticsProvider,
    useAnalytics,
}