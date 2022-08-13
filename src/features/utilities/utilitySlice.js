import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modalState: null,
    postData: null,
    openPostModal: false,
    commentData: null,

}
export const utilitySlice = createSlice({
    name: "utilities",
    initialState,
    reducers: {
        openModal: (state, action) => {
            state.modalState = 'block'
        },
        closeModal: (state, action) => {
            state.modalState = null
        },
        setPostData: (state, action) => {
            state.postData = action.payload.postData
        },
        setPostModalState: (state, action) => {
            state.openPostModal = action.payload
        },
        setCommentData: (state, action) => {
            state.commentData = action.payload.commentData
        },
        clearPostData: (state, action) => {
            state.postData = null
        },
    }
})

export const { openModal, closeModal, setPostData, clearPostData, setCommentData, setPostModalState, viewImg } = utilitySlice.actions
export const utilityReducer = utilitySlice.reducer
