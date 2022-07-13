import { createSlice } from "@reduxjs/toolkit";
import { themes } from "../themes.js";

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        theme: themes[0]
    },
    reducers: {
        setTheme: (state, action) => {
            const newTheme = themes.find(theme => theme.name === action.payload);
            state.theme = newTheme;
        }
    }
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
