"use client"
import React, { createContext, useContext, useReducer, useState } from 'react';

// Define the actions that can be dispatched to update the store
 
const actions = {
    SHOW_MODAL: 'SHOW_MODAL',
    HIDE_MODAL: 'HIDE_MODAL',
    TOGGLE_MODAL: 'TOGGLE_MODAL',
};


const modalReducer = (state, action) => {
    switch (action.type) {
        case actions.SHOW_MODAL:
            return {
                ...state,
                isOpen: true,
            };
        case actions.HIDE_MODAL:
            return {
                ...state,
                isOpen: false,
            };
        case actions.TOGGLE_MODAL:
            return {
                ...state,
                isOpen: state.isOpen === false ? true : false,
            };
        default:
            return state;
    }
};



const ModalContext = createContext();


const ModalProvider = ({ children }) => {
    const [modalState, dispatch] = useReducer(modalReducer, {
        isOpen: false,
    });


    
    return (
        <ModalContext.Provider value={{ ...modalState, dispatch }}>
            {children}
        </ModalContext.Provider>
    );
};


const useModal = () => {
    const store = useContext(ModalContext);

    if (!store) {
        throw new Error('useCore must be used within a ModalProvider');
    }
    
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


    return {
        ...store,
        showModal,
        hideModal,
        toggleModal,
    };

};

export {
    useModal,
    ModalProvider
}