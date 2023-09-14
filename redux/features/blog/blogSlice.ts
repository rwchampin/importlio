// src/features/core/coreSlice.js
import { createSlice } from '@reduxjs/toolkit';


const blogSlice = createSlice({
    name: 'blog',
    initialState: {
        posts: [],
        tags: [],
        postTypes: [],
        categories: [],
        postStatuses: [],
    },
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload;
        },
        setTags: (state, action) => {
            state.tags = action.payload;
        },
        setPostTypes: (state, action) => {
            state.postTypes = action.payload;
        },
        setCategories: (state, action) => {
            state.categories = action.payload;
        },
        setPostStatuses: (state, action) => {
            state.postStatuses = action.payload;
        },

    },
});

export const { 
    setPosts,
    setTags,
    setPostTypes,
    setCategories,
    setPostStatuses,
} = blogSlice.actions;
export default blogSlice.reducer;
