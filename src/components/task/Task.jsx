import React, { useState } from "react";
import s from "./style.module.css";

const Task = ({ index, task, delTask }) => {
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckBoxChange = () => {
        setIsChecked(!isChecked);
    };

    const taskStyle = {
      textDecoration: isChecked ? "line-through" : "none",
    };
    return (
        <div id="Task" className={s.task}>
            <div className={s.info}>
                <input
                    id="check"
                    className={s.check}
                    onClick={handleCheckBoxChange}
                    type="checkbox"
                />
                <p style={taskStyle}>{task}</p>
            </div>
            <button className={s.delBtn} onClick={delTask}>
                X
            </button>
        </div>
    );
};

export default Task;
