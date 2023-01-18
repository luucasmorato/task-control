import { useState } from "react";
import plus from "../assets/plus.svg";
import styles from "./NewTask.module.css";

type NewTaskProps = {
  tasks: string[];
  setTasks: (tasks: string[]) => void;
};

export const NewTask = ({ tasks, setTasks }: NewTaskProps) => {
  const [newTask, setNewTask] = useState("");

  function handleAddNewTask() {
    if (newTask) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  }

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddNewTask}>
        Criar
        <img src={plus} alt="plus" />
      </button>
    </div>
  );
};
