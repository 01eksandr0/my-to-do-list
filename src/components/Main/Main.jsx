import React from "react";
import style from "./Main.module.css";

export const Main = ({ children }) => {
  return <main className={style.main}>{children}</main>;
};
