"use client"
import React, { createContext, useContext, useEffect, useReducer } from 'react';


async function getTags() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/tags/list`)
    return res.json()
}

async function getCategories() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/categories/list`)
    return res.json()
}

const getPosts = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const data = await res.json();
    return data.results; // Assuming the API response has an array of posts in the 'results' property
}

const getAll = async () => {
    const postRes = getPosts()
    const tagRes = getTags()
    const categoryRes = getCategories()

    const [posts, tags, categories] = await Promise.all([postRes, tagRes, categoryRes])

    return {
        posts,
        tags,
        categories,
    }
}

// Define the actions that can be dispatched to update the store
const actions = {
    INITIAL_LOAD: 'INITIAL_LOAD',
    SET_POSTS: 'SET_POSTS',
    SET_TAGS: 'SET_TAGS',
    SET_CATEGORIES: 'SET_CATEGORIES',
    SET_POST_TYPES: 'SET_POST_TYPES',
    SET_LOADED_POSTS: 'SET_LOADED_POSTS',
};

const blogReducer = (state, action) => {
    switch (action.type) {
        case actions.SET_LOADED_POSTS:
            return {
                ...state,
                loadedPosts: true,
            };

        case actions.INITIAL_LOAD:

            return {
                ...state,
                posts: action.payload.posts,
                tags: action.payload.tags.results,
                categories: action.payload.categories.results,
                // postTypes: action.payload.postTypes,
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



const BlogProvider = ({ children }) => {
    debugger

    const [blogState, dispatch] = useReducer(blogReducer, {
        posts: [],
        tags: [],
        categories: [],
        postTypes: [],
        loadedPosts: false,
    });
    useEffect(() => {
        const fetchPosts = async () => {

            try {
                const fetchedPosts = await getPosts();
                const fetchedTags = await getTags();
                const fetchedCategories = await getCategories();

                const [categories, tags, posts] = await Promise.all([fetchedCategories, fetchedTags, fetchedPosts])

                dispatch({
                    type: actions.INITIAL_LOAD,
                    payload: {
                        posts,
                        tags,
                        categories,
                        // postTypes,
                    },
                });


            } catch (error) {
                console.error("Error fetching posts:", error);

            }
        };

        fetchPosts();
    }, []);

    return (
        <BlogContext.Provider value={{ blogState, dispatch }}>
            {children}
        </BlogContext.Provider>
    );
};
const useBlog = () => {
    const store = useContext(BlogContext);
    
    const getPosts = async () => {
        if(store.loadedPosts) return store.posts

        const {posts, tags, categories} = await getAll()
        store.dispatch({
            type: actions.SET_LOADED_POSTS,
        });

        store.dispatch({
            type: actions.INITIAL_LOAD,
            payload: {
                posts,
                tags,
                categories,
                // postTypes,
            },
        });

        return {
            posts,
            tags,
            categories,
        }


    }


    if (!store) {
        throw new Error('useBlogContext must be used within a BlogProvider');
    }

    return {
        ...store,
        dispatch:store.dispatch,
        getPosts,
    }
};

export {
    BlogProvider,
    useBlog,
}