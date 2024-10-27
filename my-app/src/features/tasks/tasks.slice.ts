import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IState, IStatus, IUpdateAction } from "./types";
import { getTasks, updateTaskStatus } from "./tasks.api";

const initialState:IState = {
    tasks:[
        // {
        //     id:101,
        //     content:"Add more css",
        //     status:IStatus.unstarted
        // },
        // {
        //     id:102,
        //     content:"Fix a bug on Render.tsx",
        //     status:IStatus.onProcess
        // },
        // {
        //     id:103,
        //     content:"Read JS flanagan, finally!!!",
        //     status:IStatus.unstarted
        // },
        // {
        //     id:104,
        //     content:"Change theme of dark mode",
        //     status:IStatus.completed
        // }
    ]
}

export const taskSlice = createSlice({
    name:"tasks",
    initialState,
    reducers:{
        // updateTask:(state:IState, action: PayloadAction<IUpdateAction>) => {
        //     const task = state.tasks.find(task => task.id === action.payload.id)
        //     if(task){
        //         task.status = action.payload.status
        //     }
        // }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getTasks.fulfilled, (state, action) => {
            state.tasks = action.payload
        })
        
        .addCase(updateTaskStatus.fulfilled, (state, action: PayloadAction<IUpdateAction>) => {
            state.tasks = state.tasks.map(task => 
                task.id === action.payload.id 
                    ? { ...task, status: action.payload.status } 
                    : task
            )
        })
        
    },
})
 
export const reducer = taskSlice.reducer
