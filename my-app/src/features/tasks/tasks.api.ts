import { createAsyncThunk } from "@reduxjs/toolkit"
import { IStatus, ITask } from "./types"
import axios from "axios";


const BASE_URL = "http://localhost:3001/tasks"

export const getTasks = createAsyncThunk<ITask[]>(
    "tasks/getTasks",async () => {
        const response = await axios.get(BASE_URL)
        return response.data
    }
)

export const updateTaskStatus = createAsyncThunk(
    "tasks/update",
    async ({ id, status }: { id: number | string; status: IStatus }) => {
        const response = await axios.patch(`${BASE_URL}/${id}`, { status })
        return response.data
    }
)