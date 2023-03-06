import React from "react";
import { useState } from "react";
import Task from "../task/Task";
import s from "./style.module.css";

export const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const addTask = (task) => {
        setTasks([...tasks, task]);
        setInputValue("");
    };

    const delTask = (index) => {
        setTasks(tasks.splice(index, 1));
    };

    const handleChange = (event) => {
        event.preventDefault();
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addTask(inputValue);
        console.log(inputValue);
    };

    return (
        <div className={s.taskList}>
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputValue} onChange={handleChange} />
                <button className={s.add} type="submit">
                    Add Task
                </button>
            </form>
            
        
        </div>
    );
};
