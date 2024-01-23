import React from "react";
import style from "./WindowUser.module.css";

export const WindowUser = ({ formCreateUser }) => {
  return (
    <div className={style.back}>
      <div className={style.formContainer}>
        <h2>Привіт! Введи будь-ласка своє імьʼя</h2>
        <form className={style.form} onSubmit={formCreateUser}>
          <input
            className={style.input}
            placeholder={"Олександр"}
            type="text"
            name="user"
          />
          <button className={style.button}>Уперед</button>
        </form>
      </div>
    </div>
  );
};
