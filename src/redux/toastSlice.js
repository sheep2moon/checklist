import { createSlice } from "@reduxjs/toolkit";
import { generateUEID } from "../utils/generateUEID.js";

const initialState = {
    list: [],
    fireConfetti: false
};

export const toastSlice = createSlice({
    name: "toast",
    initialState,
    reducers: {
        addToast: (state, action) => {
            state.list = [...state.list, { ...action.payload, id: generateUEID() }];
        },
        removeToast: (state, action) => {
            state.list = state.list.filter(toast => toast.id !== action.payload);
        },
        toggleConfetti: (state, action) => {
            state.fireConfetti = !state.fireConfetti;
        }
    }
});

export const { addToast, removeToast, toggleConfetti } = toastSlice.actions;
export default toastSlice.reducer;
