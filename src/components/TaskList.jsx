import "../App.css"
import React from "react"
import Task from "./Task"

const TaskList = ({ tasks, handleTaskClick }) => {
    return (
        <div className="tasks-list">
            {tasks.map((task, index) => (
                <Task key={index} task={task} />
            ))}
            <h1>Completed Tasks</h1>
            <ul>
                {tasks
                    .filter((task) => task.completed)
                    .map((task, index) => (
                        <li key={index}
                        onClick={()=>handleTaskClick(index)}
                        >
                        {task.text}
                        </li>
                ))}
            </ul>
        </div>
    )
}

export default TaskList
