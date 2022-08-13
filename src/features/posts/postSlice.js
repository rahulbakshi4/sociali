import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { addBookmarkService, addCommentService, deleteCommentService, dislikePostService, editCommentService, editPostService, getAllBookmarkService, getPostByIdService, likePostService, removeBookmarkService } from "../../services/postServices";
import { deletePostService, getAllPostService, newPostService } from '../../services/postServices'

const initialState = {
    userPosts: [],
    allPosts: [],
    bookmarkedPosts: [],
    post: {},
    postLoading: false,
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
    console.log(post);
    try {
        const response = await newPostService(token, post);
        return response.data.posts;
    } catch (error) {
        return ThunkAPI.rejectWithValue(error.response.data);
    }
})

export const getPostById = createAsyncThunk('posts/postbyId', async ({ postID }, ThunkAPI) => {
    try {
        const response = await getPostByIdService(postID);
        return response.data.post;
    }
    catch (error) {
        return ThunkAPI.rejectWithValue(error.response.data);
    }
})
export const editPost = createAsyncThunk(
    'posts/editPost',
    async ({ token, postID, postData }, thunkAPI) => {
        try {
            const response = await editPostService(token, postID, postData);
            return response.data.posts;
        } catch (err) {
            thunkAPI.rejectWithValue(err.response.data);
        }
    }
);


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
export const likePost = createAsyncThunk(
    'posts/likePost',
    async ({ token, postID }, { rejectWithValue }) => {
        try {
            const response = await likePostService(token, postID);
            return response.data.posts;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const dislikePost = createAsyncThunk(
    'posts/dislikePost',
    async ({ token, postID }, { rejectWithValue }) => {
        try {
            const response = await dislikePostService(token, postID);
            return response.data.posts;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    });

export const addComment = createAsyncThunk(
    "posts/addComments",
    async ({ postID, commentData, token }, { rejectWithValue }) => {
        try {
            const response = await addCommentService(postID, commentData, token);
            return response.data.posts;
        } catch (err) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const editComment = createAsyncThunk(
    "posts/editComment",
    async ({ postID, commentID, commentData, token }, { rejectWithValue }) => {
        try {
            const response = await editCommentService(postID, commentID, commentData, token);
            return response.data.posts;
        } catch (err) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const deleteComment = createAsyncThunk(
    "posts/addComments",
    async ({ postID, commentID, token }, { rejectWithValue }) => {
        try {
            const response = await deleteCommentService(postID, commentID, token);
            return response.data.posts;
        } catch (err) {
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
        [getAllPosts.pending]: (state, action) => {
            state.postLoading = true
        },
        [getAllPosts.fulfilled]: (state, action) => {
            state.postLoading = false;
            state.allPosts = action.payload
        },

        [deletePost.fulfilled]: (state, action) => {
            state.allPosts = action.payload
        },
        [editPost.fulfilled]: (state, action) => {
            state.allPosts = action.payload
        },
        [getPostById.fulfilled]: (state, action) => {
            state.post = action.payload
        },
        [getAllBookmarks.fulfilled]: (state, action) => {
            state.bookmarkedPosts = action.payload
        },
        [addBookmark.fulfilled]: (state, action) => {
            state.bookmarkedPosts = action.payload.bookmarks
        },
        [removeBookmark.fulfilled]: (state, action) => {
            state.bookmarkedPosts = action.payload.bookmarks
        },
        [likePost.fulfilled]: (state, action) => {
            state.allPosts = action.payload
        },
        [dislikePost.fulfilled]: (state, action) => {
            state.allPosts = action.payload
        },
        [addComment.fulfilled]: (state, action) => {
            state.allPosts = action.payload
        },
        [editComment.fulfilled]: (state, action) => {
            state.allPosts = action.payload
        },
        [deleteComment.fulfilled]: (state, action) => {
            state.allPosts = action.payload
        }
    }
})
export const postReducer = postSlice.reducer;
