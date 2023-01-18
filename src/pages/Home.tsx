import todoLogo from "../assets/todo-logo.svg";
import styles from "./Home.module.css";
import { NewTask } from "../components/NewTask";
import { ListTask } from "../components/ListTask";
import { useState } from "react";

export const Home = () => {
  const [tasks, setTasks] = useState<string[]>([]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={todoLogo} alt="todo-list" />
      </div>
      <div className={styles.content}>
        <NewTask setTasks={setTasks} tasks={tasks} />
        <ListTask setTasks={setTasks} tasks={tasks} />
      </div>
    </div>
  );
};
