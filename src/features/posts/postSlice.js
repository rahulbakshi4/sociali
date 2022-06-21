import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { addBookmarkService, getAllBookmarkService, removeBookmarkService } from "../../services/postServices";
import { deletePostService, getAllPostService, newPostService } from '../../services/postServices'

const initialState = {
    userPosts: [],
    allPosts: [],
    bookmarkedPosts: []
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

export const getAllBookmarks = createAsyncThunk(
    "posts/getBookmarks",
    async ({ token }, { rejectWithValue }) => {
        try {
            const response = await getAllBookmarkService(token);
            return response.data.bookmarks;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const addBookmark = createAsyncThunk(
    "posts/addBookmark",
    async ({ token, postID }, { rejectWithValue }) => {
        try {
            const response = await addBookmarkService(token, postID);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const removeBookmark = createAsyncThunk(
    "posts/removeBookmark",
    async ({ token, postID }, { rejectWithValue }) => {
        try {
            const response = await removeBookmarkService(token, postID);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);



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
        },
        [getAllBookmarks.fulfilled]: (state, action) => {
            state.bookmarkedPosts = action.payload
        },
        [addBookmark.fulfilled]: (state, action) => {
            state.bookmarkedPosts = action.payload.bookmarks
        },
        [removeBookmark.fulfilled]: (state, action) => {
            state.bookmarkedPosts = action.payload.bookmarks
        }
    }
})
export const postReducer = postSlice.reducer;
