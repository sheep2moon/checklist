import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "../supabase/supabaseConfig.js";

const initialState = {
    user_id: "",
    email: "",
    tasks: [],
    temp: {}
};

export const fetchUserTasks = createAsyncThunk("user/tasks", async user_id => {
    const res = await supabase.from("tasks").select().eq("user_id", user_id);
    return res.data;
});

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
    },
    extraReducers: builder => {
        builder.addCase(fetchUserTasks.fulfilled, (state, action) => {
            if (action.payload) {
                state.tasks = action.payload;
                console.log(action.payload);
            }
        });
    }
});

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;
