import { createSlice } from "@reduxjs/toolkit";
import { generateUEID } from "../utils/generateUEID.js";

const initialState = {
    list: []
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
        }
    }
});

export const { addToast, removeToast } = toastSlice.actions;
export default toastSlice.reducer;
