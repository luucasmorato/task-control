import { Trash } from "phosphor-react";
import { useEffect, useState } from "react";
import styles from "./Task.module.css";

type TaskProps = {
  content: string;
  tasks: string[];
  countTasksCompleted: number;
  setTasks: (tasks: string[]) => void;
  setCountTasksCompleted: (countTasksCompleted: number) => void;
};

export const Task = ({
  content,
  tasks,
  setTasks,
  setCountTasksCompleted,
  countTasksCompleted,
}: TaskProps) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (countTasksCompleted > tasks.length) {
      setCountTasksCompleted(countTasksCompleted - 1);
    }
  }, [tasks]);

  function handleCheck(value: boolean) {
    setChecked(value);

    if (value) {
      setCountTasksCompleted(countTasksCompleted + 1);
    } else {
      setCountTasksCompleted(countTasksCompleted - 1);
    }
  }

  function handleRemoveTask() {
    let newArrayTasks = [];

    newArrayTasks = tasks.filter((task) => task !== content);
    setTasks(newArrayTasks);
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerCheck}>
        <label>
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => handleCheck(e.target.checked)}
          />
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
