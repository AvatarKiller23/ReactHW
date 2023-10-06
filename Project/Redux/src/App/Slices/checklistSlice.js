import { createSlice } from "@reduxjs/toolkit";

const checklistSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload);
        },
        destroyTask: (state, action) => {
            return state.filter(task => task.id !== action.payload)
        },
        editTask: (state, action) => {
            
        }
    }
});

export const { addTask, destroyTask, editTask } = checklistSlice.actions;

export default checklistSlice.reducer;


/* 
window.open('https://www.google.com', '_blank');    в новой вкладке

window.location.href = 'https://www.example.com';   в той же вкладке
*/