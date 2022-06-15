import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllUsersService, getUserPostService, getUserService } from "../../services/userServices";

const initialState = {
    userProfile: null,
    allUsers: [],
    userPosts: []
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
        }
    }
})
export const usersReducer = usersSlice.reducer
export const { reset } = usersSlice.actions
