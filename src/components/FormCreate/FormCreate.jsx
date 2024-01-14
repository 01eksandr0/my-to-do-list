import React, { useRef } from 'react';
import style from './FormCreate.module.css';

export const FormCreate = () => {
  return (
    <div className={style.formContainer}>
      <form>
        <label>
          Час виконання
          <input type="datetime-local" />
        </label>
        <label>
          Поставлена задача
          <input type="text" />
        </label>
      </form>
    </div>
  );
};
