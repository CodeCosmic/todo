import React, { useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import './App.css'

function App() {
    const [tasks, setTasks] = useState([])

    const handleTaskClick = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = true;
        setTasks(updatedTasks);
    }

    const addTask = (text) => {
        setTasks([...tasks, { text, completed: false }]);
    }

    return(
        <div className="to-do-list">
            <h1 className="title">To-Do List</h1>
            <TaskForm addTask={addTask} />
            <TaskList tasks={tasks} handleTaskClick={handleTaskClick} />
        </div>
    )
}

export default App;
