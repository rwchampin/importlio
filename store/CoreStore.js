"use client"
import React, { createContext, useContext, useReducer, useState } from 'react';

// Define the actions that can be dispatched to update the store
const actions = {
    SHOW_MODAL: 'SHOW_MODAL',
    HIDE_MODAL: 'HIDE_MODAL',
    SET_DEBUG_STATE: 'SET_DEBUG_MODE',
    TOGGLE_DEBUG_STATE: 'TOGGLE_DEBUG_MODE',
    TOGGLE_LOADING: 'TOGGLE_LOADING',
    SET_LOADING: 'SET_LOADING',
    TOGGLE_MODAL: 'TOGGLE_MODAL',
    SET_MODAL: 'SET_MODAL',
    SET_ERRORS: 'SET_ERRORS',
    CLEAR_ERRORS: 'CLEAR_ERRORS',
};


const coreReducer = (state, action) => {
    switch (action.type) {
        case actions.SET_DEBUG_MODE:
            return {
                ...state,
                debugMode: action.payload,
            };
        case actions.TOGGLE_DEBUG_MODE:
            return {
                ...state,
                debugMode: !state.debugMode,
            };
        case actions.TOGGLE_LOADING:
            return {
                ...state,
                isLoading: !state.isLoading,
            };
        case actions.SET_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            };
        case actions.TOGGLE_MODAL:
            return {
                ...state,
                showModal: !state.showModal,
            };
        case actions.SET_MODAL:
            return {
                ...state,
                showModal: action.payload,
            };
        case actions.SET_ERRORS:
            return {
                ...state,
                errors: action.payload,
            };
        case actions.CLEAR_ERRORS:
            return {
                ...state,
                errors: [],
            };

        default:
            return state;
    }
};



const CoreContext = createContext();


const CoreProvider = ({ children }) => {
    const [coreState, dispatch] = useReducer(coreReducer, {
        debugMode: false,
        appStatus: true,
        modalStatus: false,
        errors: [],
    });


    
    return (
        <CoreContext.Provider value={{ coreState, dispatch }}>
            {children}
        </CoreContext.Provider>
    );
};


const useCore = () => {
    const store = useContext(CoreContext);

    if (!store) {
        throw new Error('useCore must be used within a CoreProvider');
    }

    const setLoading = (isLoading) => {
        store.dispatch({
            type: actions.SET_LOADING,
            payload: isLoading,
        });
    };

    const toggleLoading = () => {
        store.dispatch({
            type: actions.TOGGLE_LOADING,
        });
    };

    const setModal = (showModal) => {
        store.dispatch({
            type: actions.SET_MODAL,
            payload: showModal,
        });
    };

    const showModal = () => {
        store.dispatch({
            type: actions.SHOW_MODAL,
        });
    };

    const hideModal = () => {
        store.dispatch({
            type: actions.HIDE_MODAL,
        });
    };

    const toggleModal = () => {
        store.dispatch({
            type: actions.TOGGLE_MODAL,
        });
    };

    const setErrors = (errors) => {
        store.dispatch({
            type: actions.SET_ERRORS,
            payload: errors,
        });
    };

    const clearErrors = () => {
        store.dispatch({
            type: actions.CLEAR_ERRORS,
        });
    };

    const setDebugMode = (debugMode) => {
        store.dispatch({
            type: actions.SET_DEBUG_MODE,
            payload: debugMode,
        });
    };

    const toggleDebugMode = () => {
        store.dispatch({
            type: actions.TOGGLE_DEBUG_MODE,
        });
    };

    return {
        ...store,
        setLoading,
        toggleLoading,
        setModal,
        toggleModal,
        setErrors,
        showModal,
        hideModal,
        clearErrors,    
        setDebugMode,
        toggleDebugMode,
    };

};

export {
    useCore,
    CoreProvider
}