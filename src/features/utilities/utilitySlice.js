import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modalState: null,
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
        }
    }
})

export const { openModal, closeModal } = utilitySlice.actions
export const utilityReducer = utilitySlice.reducer
