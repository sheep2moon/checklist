import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "../supabase/supabaseConfig.js";
import { checkIsToday } from "../utils/isToday.js";

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

export const setFinished = createAsyncThunk("user/finish-task", async task_id => {
    const now = parseInt(Date.now() / 1000);
    await supabase.from("tasks").update({ is_finished: true }).eq("id", task_id);
    const { data } = await supabase.from("tasks").update({ time: now }).eq("id", task_id);
    return data;
});
export const setUnfinished = createAsyncThunk("user/unfinish-task", async task_id => {
    await supabase.from("tasks").update({ is_finished: false }).eq("id", task_id);
    const { data } = await supabase.from("tasks").update({ time: 0 }).eq("id", task_id);
    return data;
});

const userSlice = createSlice({
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
                    const tasks = action.payload;
                    let filteredTasks = [];
                    tasks.forEach(task => {
                        if (!checkIsToday(task.time) && task.is_finished && task.type === "daily") filteredTasks.push({ ...task, is_finished: false });
                        else filteredTasks.push(task);
                    });
                    state.tasks = filteredTasks;
                }
            })
            .addCase(deleteTask.fulfilled, (state, action) => {
                state.tasks = state.tasks.filter(task => task.id !== action.payload[0].id);
            })
            .addCase(updateColumn.fulfilled, (state, action) => {
                const index = state.tasks.findIndex(t => t.id === action.payload[0].id);
                state.tasks[index] = action.payload[0];
            })
            .addCase(setFinished.fulfilled, (state, action) => {
                const index = state.tasks.findIndex(t => t.id === action.payload[0].id);
                state.tasks[index] = action.payload[0];
            })
            .addCase(setUnfinished.fulfilled, (state, action) => {
                const index = state.tasks.findIndex(t => t.id === action.payload[0].id);
                state.tasks[index] = action.payload[0];
            });
    }
});

export const { setUserData, setUserTasks } = userSlice.actions;
export default userSlice.reducer;
