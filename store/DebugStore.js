"use client"

import React, { createContext, useContext, useReducer, useState } from 'react';
import Debug from '@/components/Debug';
// Define the actions that can be dispatched to update the store
const debugStates = {
    active: 'ACTIVE',
    inactive: 'INACTIVE',
};
const actions = {
    ACTIVATE_DEBUG: 'ACTIVATE_DEBUG',
    DEACTIVATE_DEBUG: 'DEACTIVATE_DEBUG',
    TOGGLE_DEBUG: 'TOGGLE_DEBUG',
};


const debugReducer = (state, action) => {
    switch (action.type) {
        case actions.ACTIVATE_DEBUG:
            return {
                ...state,
                debugStatus: debugStates.ACTIVE,
            };
        case actions.DEACTIVATE_DEBUG:
            return {
                ...state,
                debugStatus: debugStates.INACTIVE,
            };
        case actions.TOGGLE_DEBUG:
            return {
                ...state,
                debugStatus: state.debugStatus === debugStates.ACTIVE ? debugStates.INACTIVE : debugStates.ACTIVE,
            };
        default:
            return state;
    }
};



const DebugContext = createContext();


const DebugProvider = ({ children }) => {
    const [debugState, dispatch] = useReducer(debugReducer, {
        debugStatus: debugStates.ACTIVE,
    });



    return (
        <DebugContext.Provider value={{ ...debugState, dispatch }}>
            {children}
        </DebugContext.Provider>
    );
};


const useDebug = () => {
    const store = useContext(DebugContext);

    if (!store) {
        throw new Error('useDebug must be used within a DebugProvider');
    }

  

    const getCurrentHash = () => {
        if (window && window.location) {
            return window.location.hash;
        }
    };

  

    function removeDebugHash() {
        const currentHash = window.location.hash;
      
        // Check if #debug is present in the hash
        if (currentHash.includes('#debug')) {
          // Remove only the #debug fragment
          const newHash = currentHash.replace('#debug', '');
      
          // Update the URL without causing a page reload
          history.replaceState(null, null, newHash);
        }

        store.dispatch({
            type: actions.DEACTIVATE_DEBUG,
        });
      }


    const activateDebugMode = () => {
        store.dispatch({
            type: actions.ACTIVATE_DEBUG,
        });

        if (window && window.location) {
            window.location.hash = getCurrentHash() + '#debug';
        }
    };

    const deactivateDebugMode = () => {
       
    };

 

    return {
        ...store,
        activateDebugMode,
        deactivateDebugMode,

    };

};

export {
    useDebug,
    DebugProvider
}