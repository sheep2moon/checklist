import { configureStore } from "@reduxjs/toolkit";
import loadingSlice from "./loadingSlice.js";
import toastSlice from "./toastSlice.js";
import userSlice from "./userSlice.js";

export const store = configureStore({
    reducer: {
        toast: toastSlice,
        user: userSlice,
        loading: loadingSlice
    }
});
