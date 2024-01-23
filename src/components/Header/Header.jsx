import React from "react";
import style from "./Header.module.css";

export const Header = ({ openMenu, tasks, endTask, userMenu }) => {
  return (
    <header className={style.header}>
      <div className={style.boxTitle}>
        <h2 className={style.title}>Привіт, {userMenu}!</h2>
        <h2 className={style.titleShadow}>Привіт, Олександр!</h2>
      </div>
      <ul className={style.list}>
        <li className={style.listParagraph}>
          <p className={style.paragraph}>Активних завдань: {tasks.length}</p>
          <p className={style.paragraphShadow}>
            Активних завдань: {tasks.length}
          </p>
        </li>
        <li className={style.listParagraph}>
          <p className={style.paragraph}>Виконаних завдань: {endTask}</p>
          <p className={style.paragraphShadow}>Активних завдань: {endTask}</p>
        </li>
      </ul>
      <button className={style.button} onClick={openMenu}>
        |||
      </button>
    </header>
  );
};
