import { Trash } from "phosphor-react";
import styles from "./Task.module.css";

type TaskProps = {
  content: string;
};

export const Task = ({ content }: TaskProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerCheck}>
        <label>
          <input type="checkbox" />
          <div className={styles.check}></div>
          <span>{content}</span>
        </label>
      </div>
      <button onClick={() => {}} title="Deletar tarefa">
        <Trash size={24} color="var(--gray-300)" />
      </button>
    </div>
  );
};
