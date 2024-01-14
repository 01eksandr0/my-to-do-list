import React, { useRef } from 'react';
import style from './FormCreate.module.css';

export const FormCreate = () => {
  return (
    <div className={style.formContainer}>
      <form className={style.form}>
        <div className={style.formTitleBox}>
          <h2 className={style.formTitle}>Створити задачу</h2>
          <h2 className={style.formTitleShadow}>Створити задачу</h2>
        </div>

        <label className={style.formLabel}>
          Час виконання
          <span>Час виконання</span>
          <input className={style.input} type="datetime-local" />
        </label>
        <label className={style.formLabel}>
          Поставлена задача
          <span>Поставлена задача</span>
          <input
            className={style.input}
            type="text"
            placeholder="Виконати ..."
          />
        </label>
        <button className={style.button}>Створити</button>
      </form>
    </div>
  );
};
