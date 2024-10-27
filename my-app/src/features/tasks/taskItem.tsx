
import React from 'react';
import { ITask, IStatus } from './types';

interface TaskItemProps {
    task: ITask
    onUpdateStatus: (id: number | string, status: IStatus) => void
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onUpdateStatus }) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onUpdateStatus(task.id, Number(e.target.value))
    }

    return (
        <div key={task.id}>
            <p>{task.content}</p>
            <img 
                src={
                    task.status === IStatus.unstarted
                        ? "https://cdn1.iconfinder.com/data/icons/carbon-design-system-vol-6/32/pending--filled-256.png"
                        : task.status === IStatus.onProcess
                        ? "https://cdn2.iconfinder.com/data/icons/complex-arrows-add-on-flat/48/Complex_Arrows-20-256.png"
                        : "https://cdn0.iconfinder.com/data/icons/ecommercy/32/tick-256.png"
                }
                alt=""
            />
            <br />
            <select value={task.status} onChange={handleChange}>
                <option value={IStatus.unstarted}>unstarted</option>
                <option value={IStatus.onProcess}>on process</option>
                <option value={IStatus.completed}>completed</option>
            </select>
        </div>
    )
}

export default TaskItem
