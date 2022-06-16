import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { deletePostService, getAllPostService, newPostService } from '../../services/postServices'

const initialState = {
    userPosts: [],
    allPosts: [],
}

export const getAllPosts = createAsyncThunk(
    "posts/getPosts",
    async (_, ThunkAPI) => {
        try {
            const response = await getAllPostService();
            return response.data.posts;
        } catch (error) {
            return ThunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const newPost = createAsyncThunk('posts/newPost', async ({ token, post }, ThunkAPI) => {
    try {
        const response = await newPostService(token, post);
        return response.data.posts;
    } catch (error) {
        return ThunkAPI.rejectWithValue(error.response.data);
    }
})

export const deletePost = createAsyncThunk('posts/deletePost', async ({ token, postID }, ThunkAPI) => {
    try {
        const response = await deletePostService(token, postID)
        return response.data.posts;
    }
    catch (error) {
        console.log(error)
        return ThunkAPI.rejectWithValue(error.response.data);
    }
})

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: {
        [newPost.fulfilled]: (state, action) => {
            state.allPosts = action.payload
        },
        [getAllPosts.fulfilled]: (state, action) => {
            state.allPosts = action.payload
        },
        [deletePost.fulfilled]: (state, action) => {
            state.allPosts = action.payload
        }
    }
})
export const postReducer = postSlice.reducer;
