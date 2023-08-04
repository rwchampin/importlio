"use client"
import React, { createContext, useContext, useEffect, useReducer } from 'react';

// Define the actions that can be dispatched to update the store
const actions = {
    SET_POSTS: 'SET_POSTS',
    SET_TAGS: 'SET_TAGS',
    SET_CATEGORIES: 'SET_CATEGORIES',
    SET_POST_TYPES: 'SET_POST_TYPES',
};

const blogReducer = (state, action) => {
    switch (action.type) {
        case actions.INITIAL_LOAD:
            return {
                ...state,
                posts: action.payload.posts,
                tags: action.payload.tags.results,
                categories: action.payload.categories.results,
            };
        case actions.SET_POSTS:
            return {
                ...state,
                posts: action.payload,
            };
        case actions.SET_TAGS:
            return {
                ...state,
                tags: action.payload,
            };
        case actions.SET_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
            };
        case actions.SET_POST_TYPES:
            return {
                ...state,
                postTypes: action.payload,
            };
        default:
            return state;
    }
};
const BlogContext = createContext();



const getTags = async (callback) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/tags/list`)
    const data = await res.json()

    if(data && data.results) {
        callback(data.results)

        return data.results;
    }

   callback(data)

    return data;
}

const getCategories = async (callback) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/categories/list`)


    const data = await res.json()
    if(data && data.results) {
        callback(data.results)

        return data.results;
    }

    callback(data)
    return data;
}

const getPosts = async (callback) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const data = await res.json();
    if(data && data.results) {
        callback(data.results)
        return data.results;
    }
    callback(data)
    return data;
}
const getAll = async (callbacks) => {
    const [posts, tags, categories] = await Promise.all([
        getPosts(callbacks.setPosts),
        getTags(callbacks.setTags),
        getCategories(callbacks.setCategories),
    ]);

    return {
        posts,
        tags,
        categories,
    };
};


const BlogProvider = ({ children }) => {
    const [blogState, dispatch] = useReducer(blogReducer, {
        posts: [],
        tags: [],
        categories: [],
        postTypes: [],
    });

    useEffect(() => {
        const fetchData = async () => {
            const callbacks = {
                setPosts: (data) => dispatch({ type: actions.SET_POSTS, payload: data }),
                setTags: (data) => dispatch({ type: actions.SET_TAGS, payload: data }),
                setCategories: (data) => dispatch({ type: actions.SET_CATEGORIES, payload: data }),
            };
            const { posts, tags, categories } = await getAll(callbacks);
            dispatch({ type: actions.INITIAL_LOAD, payload: { posts, tags, categories } });
        };

        fetchData();
    }, []);

    return (
        <BlogContext.Provider value={{ ...blogState, dispatch }}>
            {children}
        </BlogContext.Provider>
    );
};
const useBlog = () => {
    const {
        dispatch,
        posts,
        tags,
        categories,
     } = useContext(BlogContext);


 

    return {
        posts,
        tags,
        categories,
        dispatch,
        getPosts,
        getTags,
        getCategories,
        getAll,
    }
};

export {
    BlogProvider,
    useBlog,
}