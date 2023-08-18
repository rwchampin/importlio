"use client"
import React, { createContext, useContext, useReducer, useState } from 'react';

// Define the actions that can be dispatched to update the store
const actions = {
    SHOW_ALERT: 'SHOW_ALERT',
    HIDE_ALERT: 'HIDE_ALERT',
    TOGGLE_ALERT: 'TOGGLE_ALERT',
};


const alertReducer = (state, action) => {
    switch (action.type) {
        case actions.SHOW_ALERT:
            return {
                ...state,
                alert: {
                    ...state.alert,
                    show: true,
                    message: action.payload.message,
                    type: action.payload.type,
                },
            };
        case actions.HIDE_ALERT:
            return {
                ...state,
                alert: {
                    ...state.alert,
                    show: false,
                    message: '',
                    type: '',
                },
            };
        case actions.TOGGLE_ALERT:
            return {
                ...state,
                alert: {
                    ...state.alert,
                    show: !state.alert.show,

                },
            };

        default:
            return state;
    }
};



const AlertContext = createContext();


const AlertProvider = ({ children }) => {
    const [alertState, dispatch] = useReducer(alertReducer, {
        show: false,
        message: '',
        type: 'info',
    });



    return (
        <AlertContext.Provider value={{ ...alertState, dispatch }}>
            {children}
        </AlertContext.Provider>
    );
};


const useAlert = () => {
    const store = useContext(AlertContext);

    if (!store) {
        throw new Error('useAlert must be used within a AlertProvider');
    }

    const showAlert = (message, type="info") => {
        store.dispatch({
            type: actions.SHOW_ALERT,
            payload: {
                message,
                type,
            },
        });
    };

    const hideAlert = () => {
        store.dispatch({
            type: actions.HIDE_ALERT,
        });
    };

    const toggleAlert = (message, type="info") => {
        store.dispatch({
            type: actions.TOGGLE_ALERT,
        });
    };

    return {
        ...store,
        showAlert,
        hideAlert,
        toggleAlert,
    };

};

export {
    useAlert,
    AlertProvider
}