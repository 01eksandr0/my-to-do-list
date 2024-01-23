import React from "react";
import style from "./Task.module.css";
import { MdOutlineDeleteForever } from "react-icons/md"
import { FaCircleCheck } from "react-icons/fa6";

export const Task = ({ task: { id, time, todo, color }, deleteTask, endTaskClick }) => {
  return (
    <div className={style.task} style={{ backgroundColor: color }}>
      <div className={style.timeContainer}>
        <p className={style.time}>{time}</p>
        <span className={style.btnContainer}  id={id}>
          <button className={style.button} onClick={deleteTask} type="button"><MdOutlineDeleteForever className={style.icon}/></button>
          <button className={style.button} onClick={endTaskClick} type="button"><FaCircleCheck className={style.iconCheck}/></button>
        </span>
      </div>
      <p className={style.text}>{todo}</p>
    </div>
  );
};
