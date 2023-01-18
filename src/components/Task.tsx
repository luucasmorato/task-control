import { Trash } from "phosphor-react";
import styles from "./Task.module.css";

type TaskProps = {
  content: string;
  tasks: string[];
  setTasks: (tasks: string[]) => void;
};

export const Task = ({ content, tasks, setTasks }: TaskProps) => {
  function handleRemoveTask() {
    let newArrayTasks = [];

    newArrayTasks = tasks.filter((task) => task !== content);
    setTasks(newArrayTasks);
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerCheck}>
        <label>
          <input type="checkbox" />
          <div className={styles.check}></div>
          <span>{content}</span>
        </label>
      </div>
      <button onClick={handleRemoveTask} title="Deletar tarefa">
        <Trash size={24} color="var(--gray-300)" />
      </button>
    </div>
  );
};
