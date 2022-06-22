import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { followUserService, getAllUsersService, getUserPostService, getUserService, unFollowUserService } from "../../services/userServices";

const initialState = {
    userProfile: null,
    allUsers: [],
    userPosts: [],
};

export const getUser = createAsyncThunk(
    "users/getUser",
    async (userID, { rejectWithValue }) => {
        try {
            const response = await getUserService(userID);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const getAllUsers = createAsyncThunk(
    "users/getAllUsers",
    async (_, { rejectWithValue }) => {
        try {
            const response = await getAllUsersService();
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);
export const getUserPost = createAsyncThunk('users/getUserPost',
    async ({ username }, ThunkAPI) => {
        try {
            const response = await getUserPostService(username);
            return response.data
        }
        catch (error) {
            return ThunkAPI.rejectWithValue(error.response.data)
        }
    })


export const follow = createAsyncThunk('users/follow',
    async ({ userID, token }, ThunkAPI) => {
        try {
            const response = await followUserService(userID, token);
            return response.data
        }
        catch (error) {
            return ThunkAPI.rejectWithValue(error.response.data)
        }
    })

export const unfollow = createAsyncThunk('users/unfollow',
    async ({ userID, token }, ThunkAPI) => {
        try {
            const response = await unFollowUserService(userID, token);
            return response.data
        }
        catch (error) {
            return ThunkAPI.rejectWithValue(error.response.data)
        }
    })




export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        reset: (state) => {
            state.userProfile = null;
        },
    },
    extraReducers: {
        [getUser.fulfilled]: (state, action) => {
            state.userProfile = action.payload.user
        },
        [getAllUsers.fulfilled]: (state, action) => {
            state.allUsers = action.payload.users
        },
        [getUserPost.fulfilled]: (state, action) => {
            state.userPosts = action.payload.posts
        },
        [follow.fulfilled]: (state, action) => {
            state.allUsers = state.allUsers.map((currUser) =>
                currUser.username === action.payload.user.username ? action.payload.user : currUser
            );
            state.allUsers = state.allUsers.map((currUser) =>
                currUser.username === action.payload.followUser.username ? action.payload.followUser : currUser
            );
            state.userProfile = action.payload.followUser
        },
        [unfollow.fulfilled]: (state, action) => {
            state.allUsers = state.allUsers.map((currUser) =>
                currUser.username === action.payload.user.username ? action.payload.user : currUser
            );
            state.allUsers = state.allUsers.map((currUser) =>
                currUser.username === action.payload.followUser.username ? action.payload.followUser : currUser
            );
            state.userProfile = action.payload.followUser
        },

    }
})
export const usersReducer = usersSlice.reducer
export const { reset } = usersSlice.actions
