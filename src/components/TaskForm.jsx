import "../App.css"
import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
    const [text, setText] = useState('')
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() === '') return;
        addTask(text);
        setText('');
        setInputValue('');
    }

    const handleInputChange = (e) => {
        const capitalizedVaule = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
        setInputValue(capitalizedVaule);
    }

    return (
        <form onSubmit={handleSubmit} className="toDoForm">
            <input
                type="text"
                placeholder="Add a new task"
                value={inputValue}
                onChange={(e) => {
                    handleInputChange(e)
                    setText(e.target.value);
                }}
                autoFocus
            />
            <button type="submit">Add</button>
        </form>
    )
}

export default TaskForm
