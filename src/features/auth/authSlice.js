import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { SignUpService } from '../../services/authServices'
import { LoginService } from '../../services/authServices'
const initialState = {
    token: JSON.parse(localStorage.getItem('userDetails'))?.token,
    user: JSON.parse(localStorage.getItem('userDetails'))?.user
}

export const signUp = createAsyncThunk('auth/signUp', async (formData, thunkAPI) => {
    try {
        return await SignUpService(formData)
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

export const login = createAsyncThunk('auth/login', async (formData, thunkAPI) => {
    try {
        return await LoginService(formData)
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.token = null,
                state.user = null
        }
    },
    extraReducers: {
        [signUp.fulfilled]: (state, action) => {
            state.user = action.payload.createdUser;
            state.token = action.payload.encodedToken;
        },
        [login.fulfilled]: (state, action) => {
            state.user = action.payload.foundUser;
            state.token = action.payload.encodedToken;
        },
    }
})

export default authSlice.reducer
