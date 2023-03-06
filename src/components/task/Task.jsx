import React from "react";
import s from "./style.module.css";

const task = (taskName, checked, delTask ) => {
  return (
    <div id="Task" className={s.task}>
      <span>{taskName}</span>
      <div className="btns">
        <input id="check" className={s.check} type="checkbox" />
        <button onClick={delTask}>Del</button>
      </div>
    </div>
  );
};

export default task;
