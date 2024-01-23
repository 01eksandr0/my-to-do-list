import React from "react";
import { Task } from "../Task/Task";
import style from "./ListTasks.module.css";

export const ListTasks = ({ tasks, deleteTask, endTaskClick }) => {
  return (
    <ul className={style.list}>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task
            task={task}
            deleteTask={deleteTask}
            endTaskClick={endTaskClick}
          />
        </li>
      ))}
    </ul>
  );
};
