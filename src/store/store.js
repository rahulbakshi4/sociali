import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../features/auth/authSlice"
import { postReducer } from '../features/posts/postSlice'
import { usersReducer } from '../features/users/usersSlice'
import { utilityReducer } from '../features/utilities/utilitySlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        users: usersReducer,
        posts: postReducer,
        utilities: utilityReducer
    },
})
