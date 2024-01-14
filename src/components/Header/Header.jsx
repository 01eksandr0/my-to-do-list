import React from 'react';
import style from './Header.module.css';

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.boxTitle}>
        <h2 className={style.title}>Привіт, Олександр!</h2>
        <h2 className={style.titleShadow}>Привіт, Олександр!</h2>
      </div>
      <ul className={style.list}>
        <li className={style.listParagraph}>
          <p className={style.paragraph}>Активних завдань:</p>
          <p className={style.paragraphShadow}>Активних завдань:</p>
        </li>
        <li className={style.listParagraph}>
          <p className={style.paragraph}>Виконаних завдань:</p>
          <p className={style.paragraphShadow}>Активних завдань:</p>
        </li>
      </ul>
      <button className={style.button}>|||</button>
    </header>
  );
};
