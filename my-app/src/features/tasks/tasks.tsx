import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getTasks, updateTaskStatus } from './tasks.api';
import { IStatus } from './types';
import TaskItem from './taskItem';

export const TaskList = () => {
    const tasks = useAppSelector(state => state.tasks)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getTasks())
    }, [dispatch])

    const handleUpdateStatus = (id: number | string, status: IStatus) => {
        dispatch(updateTaskStatus({ id, status }))
    }

    return (
        <>
            <h3>Task List</h3>
            <div id="tasks">
                {tasks.map(task => (
                    <TaskItem
                        key={task.id} 
                        task={task} 
                        onUpdateStatus={handleUpdateStatus} 
                    />
                ))}
            </div>
        </>
    )
}
