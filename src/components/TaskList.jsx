import "../App.css"
import React from "react"
import Task from "./Task"

    const TaskList = ({ tasks, handleTaskClick }) => {

    return (
        <div className="tasks-list">
            {tasks.map((task, index) => (
                !task.completed ? <Task key={index} task={task} handleTaskClick={()=>handleTaskClick(index)} /> : ''
            ))}
            <h1>Completed Tasks</h1>
            <div >
                {tasks
                    .filter((task) => task.completed)
                    .map((task, index) => (
                        <div className="completed-tasks">
                            <p className="completed-p" key={index}>
                                {task.text}
                            </p>
                        </div>
                ))}
            </div>
        </div>
    )
}

export default TaskList
