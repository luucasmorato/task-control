import todoLogo from "../assets/todo-logo.svg";
import styles from "./Home.module.css";
import { NewTask } from "../components/NewTask";

export const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={todoLogo} alt="todo-list" />
      </div>
      <div className={styles.content}>
        <NewTask />
      </div>
    </div>
  );
};
