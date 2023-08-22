"use client"

import React, { createContext, useContext, useEffect, useReducer } from 'react';

// Define the actions that can be dispatched to update the store
const actions = {
    SET_POSTS: 'SET_POSTS',
    SET_TAGS: 'SET_TAGS',
    SET_CATEGORIES: 'SET_CATEGORIES',
    SET_POST_TYPES: 'SET_POST_TYPES',
    INITIAL_LOAD: 'INITIAL_LOAD',
    SET_LOADING: 'SET_LOADING',
    SET_POSTS_LOADING: 'SET_POSTS_LOADING',
    SET_TAGS_LOADING: 'SET_TAGS_LOADING',
    SET_CATEGORIES_LOADING: 'SET_CATEGORIES_LOADING',
    SET_POST_TYPES_LOADING: 'SET_POST_TYPES_LOADING',

};

const blogReducer = (state, action) => {

    switch (action.type) {
        case actions.INITIAL_LOAD:
            return {
                ...state,
                posts: action.payload.posts,
                tags: action.payload.tags.results,
                categories: action.payload.categories.results,
                postTypes: action.payload.postTypes.results,
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
        case actions.SET_LOADING:
            return {
                ...state,
                postsLoading: action.payload,
                tagsLoading: action.payload,
                categoriesLoading: action.payload,
                postTypesLoading: action.payload,
            };

        default:
            return state;
    }
};
const BlogContext = createContext();


const getPostTypes = async (callback) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/post-types/list`)
    const data = await res.json()

    if (data && data.results) {
        callback(data.results)

        return data.results;
    }

    callback(data)

    return data;
}
const getTags = async (callback) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/tags/list`)
    const data = await res.json()

    if (data && data.results) {
        callback(data.results)

        return data.results;
    }

    callback(data)

    return data;
}

const getCategories = async (callback) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/categories/list`)


    const data = await res.json()
    if (data && data.results) {
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
    if (data && data.results) {
        callback(data.results)
        return data.results;
    }
    callback(data)
    return data;
}
const getAll = async (callbacks) => {
    const [posts, tags, categories, postTypes] = await Promise.all([
        getPosts(callbacks.setPosts),
        getTags(callbacks.setTags),
        getCategories(callbacks.setCategories),
        getPostTypes(callbacks.setPostTypes),
    ]);

    return {
        posts,
        tags,
        categories,
        postTypes,
    };
};


const BlogProvider = ({ children }) => {
    const [blogState, dispatch] = useReducer(blogReducer, {
        posts: [],
        tags: [],
        categories: [],
        postTypes: [],
        postsLoading: true,
        tagsLoading: true,
        categoriesLoading: true,
        postTypesLoading: true,

    });

   
    
 
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
        postTypes,
        postsLoading,
    } = useContext(BlogContext);

     useEffect(() => {
        const fetchData = async () => {
            const callbacks = {
                setPosts: (data) => dispatch({ type: actions.SET_POSTS, payload: data }),
                setTags: (data) => dispatch({ type: actions.SET_TAGS, payload: data }),
                setCategories: (data) => dispatch({ type: actions.SET_CATEGORIES, payload: data }),
                setPostTypes: (data) => dispatch({ type: actions.SET_POST_TYPES, payload: data }),
            };
            const { posts, tags, categories, postTypes } = await getAll(callbacks);

            dispatch({
                type: actions.INITIAL_LOAD,
                payload: {
                    posts,
                    tags,
                    categories,
                    postTypes,
                },
            });
             
        };

        if(posts.length === 0){
            fetchData();
        }
    }, []);


    return {
        posts,
        tags,
        categories,
        postTypes,
        dispatch,
        getPosts,
        getTags,
        getCategories,
        getPostTypes,
        getAll,
    }
};

export {
    BlogProvider,
    useBlog,
}