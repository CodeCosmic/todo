import React from "react";

const Task = ({ task, handleTaskClick }) => {
    return (
        <div className="task" onClick={handleTaskClick}>
           <p>{task.text}</p>
        </div>
    );
}

export default Task
