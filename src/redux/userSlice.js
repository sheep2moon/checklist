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

export const deleteTask = createAsyncThunk("user/delete-task", async task_id => {
    const res = await supabase.from("tasks").delete().eq("id", task_id);
    return res.data;
});

export const updateColumn = createAsyncThunk("user/update-task", async req => {
    const { task_id, column, val } = req;
    const res = await supabase
        .from("tasks")
        .update({ [column]: val })
        .eq("id", task_id);
    console.log(res);
    return res.data;
});

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserData: (state, action) => {
            const { id, email } = action.payload;
            state.user_id = id;
            state.email = email;
        },
        setUserTasks: (state, action) => {
            state.tasks = action.payload;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchUserTasks.fulfilled, (state, action) => {
                if (action.payload) {
                    state.tasks = action.payload;
                    console.log(action.payload);
                }
            })
            .addCase(deleteTask.fulfilled, (state, action) => {
                state.tasks = state.tasks.filter(task => task.id !== action.payload[0].id);
            })
            .addCase(updateColumn.fulfilled, (state, action) => {
                const index = state.tasks.findIndex(t => t.id === action.payload[0].id);
                state.tasks[index] = action.payload[0];
            });
    }
});

export const { setUserData, setUserTasks } = userSlice.actions;
export default userSlice.reducer;
