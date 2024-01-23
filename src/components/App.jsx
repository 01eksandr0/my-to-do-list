import { useEffect, useState } from "react";
import { FormCreate } from "./FormCreate/FormCreate";
import { Header } from "./Header/Header";
import { Main } from "./Main/Main";
import { nanoid } from "nanoid";
import { ListTasks } from "./ListTasks/ListTasks";
import { randomColor } from "../js/randomColor";
import { WindowUser } from "./WindowUser/WindowUser";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.css";

const KEY = "1234";
const KEYendTask = "qwer";

export const App = () => {
  const [tasks, setTasks] = useState(() => {
    const data = JSON.parse(localStorage.getItem(KEY)) || [];
    return data;
  });
  const [endTask, setEndTask] = useState(() => {
    const date = JSON.parse(localStorage.getItem(KEYendTask)) || 0;
    return date;
  });
  const [isOpen, setIsOpen] = useState(false);
  const [userMenu, setUserMenu] = useState(() => {
    const data = localStorage.getItem("user") || "";
    return data;
  });
  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(tasks));
  }, [tasks]);
  useEffect(() => {
    localStorage.setItem(KEYendTask, JSON.stringify(endTask));
  }, [endTask]);
  const createTask = (e) => {
    e.preventDefault();
    if (e.target.date.value.trim() && e.target.todo.value.trim()) {
      const time = e.target.date.value.slice(11).trim();
      const date = e.target.date.value
        .slice(0, 10)
        .split("-")
        .reverse()
        .join(".")
        .trim();
      const newTask = {
        id: nanoid(),
        color: randomColor(),
        todo: e.target.todo.value,
        time: `${time} ${date}`,
      };
      setTasks([...tasks, newTask]);
      e.target.reset();
      closeMenu();
    } else {
      iziToast.error({
        message: "Заповніть усі поля будь-ласка",
        position: "center",
        backgroundColor: "red",
        messageColor: "#fff",
      });
    }
  };
  const deleteTask = (e) =>
    setTasks(tasks.filter((item) => item.id !== e.currentTarget.parentNode.id));
  const endTaskClick = (e) => {
    setTasks(tasks.filter((item) => item.id !== e.currentTarget.parentNode.id));
    setEndTask(endTask + 1);
  };
  const formCreateUser = (e) => {
    e.preventDefault();
    if (e.target.user.value.trim()) {
      localStorage.setItem("user", e.target.user.value);
      setUserMenu(e.target.user.value);
    } else {
      iziToast.error({
        message: "Заповніть усі поля будь-ласка",
        position: "center",
        backgroundColor: "red",
        messageColor: "#fff",
      });
    }
  };
  return (
    <>
      <Header
        openMenu={openMenu}
        tasks={tasks}
        endTask={endTask}
        userMenu={userMenu}
      />
      <Main>
        <ListTasks
          tasks={tasks}
          deleteTask={deleteTask}
          endTaskClick={endTaskClick}
        />
        <FormCreate
          isOpen={isOpen}
          closeMenu={closeMenu}
          createTask={createTask}
        />
      </Main>
      {!userMenu && <WindowUser formCreateUser={formCreateUser} />}
    </>
  );
};
