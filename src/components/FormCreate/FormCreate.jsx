import React, { useRef } from "react";
import style from "./FormCreate.module.css";
import { IoMdClose } from "react-icons/io";

export const FormCreate = ({ isOpen, closeMenu, createTask }) => {
  const css = `${style.formContainer} ${isOpen && style.isOpen}`;
  return (
    <div className={css}>
      <form className={style.form} onSubmit={createTask}>
        <button type="button" onClick={closeMenu} className={style.btnClose}>
          <IoMdClose />
        </button>
        <div className={style.formTitleBox}>
          <h2 className={style.formTitle}>Створити задачу</h2>
          <h2 className={style.formTitleShadow}>Створити задачу</h2>
        </div>
        <label className={style.formLabel}>
          Час виконання
          <span>Час виконання</span>
          <input className={style.input} type="datetime-local" name="date" />
        </label>
        <label className={style.formLabel}>
          Поставлена задача
          <span>Поставлена задача</span>
          <input
            className={style.input}
            type="text"
            placeholder="Виконати ..."
            name="todo"
          />
        </label>
        <button className={style.button}>Створити</button>
      </form>
    </div>
  );
};
