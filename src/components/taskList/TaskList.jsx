import { useState, useEffect } from "react";
import Task from "../task/Task";
import s from "./style.module.css";

export const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState("");

    useEffect(()=> {
        const storedTasks = localStorage.getItem("tasks");
        storedTasks? setTasks(JSON.parse(storedTasks)):alert("Agrega Tareas");
    },[])
    useEffect(() => {
        console.log("Agregando")
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);


    const addTask = (task) => {
        setTasks([...tasks, task]);
        setInputValue("");
    };

    const delTask = (index) => {
        const newTasks = tasks.filter((task, i) => i !== index)
        setTasks(newTasks);
    };

    const handleChange = (event) => {
        event.preventDefault();
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addTask(inputValue);
    };

    return (
        <div className={s.taskList}>
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputValue} onChange={handleChange} />
                <button className={s.add} type="submit">
                    Add Task
                </button>
            </form>

            <div className="tasks">
                {tasks.map((task, index) => (
                    <Task
                        key={index}
                        task={task}
                        delTask={() => delTask(index)}
                    />
                ))}
            </div>
        </div>
    );
};
