import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "./loadingSlice.js";
import themeReducer from "./themeSlice.js";
import toastReducer from "./toastSlice.js";
import userReducer from "./userSlice.js";

export const store = configureStore({
    reducer: {
        toast: toastReducer,
        user: userReducer,
        loading: loadingReducer,
        theme: themeReducer
    }
});
