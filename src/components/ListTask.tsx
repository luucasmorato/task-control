import styles from "./ListTask.module.css";
import { Empty } from "./Empty";
import { Task } from "./Task";
import { useState } from "react";

type ListTaskProps = {
  tasks: string[];
  setTasks: (tasks: string[]) => void;
};

export const ListTask = ({ tasks, setTasks }: ListTaskProps) => {
  const [countTasksCompleted, setCountTasksCompleted] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.headerTasks}>
        <div className={styles.tasksCreated}>
          Tarefas criadas
          <div className={styles.counter}> {tasks.length} </div>
        </div>
        <div className={styles.completedTasks}>
          Concluídas
          <div className={styles.counter}>
            {countTasksCompleted} de {tasks.length}
          </div>
        </div>
      </div>
      <div className={styles.tasks}>
        {tasks.length ? (
          tasks.map((task) => (
            <Task
              content={task}
              tasks={tasks}
              setTasks={setTasks}
              countTasksCompleted={countTasksCompleted}
              setCountTasksCompleted={setCountTasksCompleted}
              key={task}
            />
          ))
        ) : (
          <Empty />
        )}
      </div>
    </div>
  );
};
