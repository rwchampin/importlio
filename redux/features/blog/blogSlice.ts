// src/features/core/coreSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { getPosts } from '@/lib/api';
const initialState = {
    posts: [],
    status: 'idle',
    tags: [],
    postTypes: [],
    categories: [],
    postStatuses: [],
}

// export const fetchPosts = createAsyncThunk('posts/fetchPosts', getPosts);

const blogSlice = createSlice({
    name: 'blog',
    initialState,
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
