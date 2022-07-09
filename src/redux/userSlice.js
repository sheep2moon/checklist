import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user_id: "",
    email: "",
    tasks: [],
    temp: {}
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserData: (state, action) => {
            console.log("redux", action.payload);
            const { id, email } = action.payload;
            state.user_id = id;
            state.email = email;
        }
    }
});

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;
