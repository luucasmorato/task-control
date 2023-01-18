import styles from "./ListTask.module.css";
import { Empty } from "./Empty";
import { Task } from "./Task";

type ListTaskProps = {
  tasks: string[];
  setTasks: (tasks: string[]) => void;
};

export const ListTask = ({ tasks, setTasks }: ListTaskProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.headerTasks}>
        <div className={styles.tasksCreated}>
          Tarefas criadas
          <div className={styles.counter}> {tasks.length} </div>
        </div>
        <div className={styles.completedTasks}>
          Concluídas
          <div className={styles.counter}> 0 de {tasks.length} </div>
        </div>
      </div>
      <div className={styles.tasks}>
        {tasks.length ? (
          tasks.map((task) => (
            <Task content={task} tasks={tasks} setTasks={setTasks} />
          ))
        ) : (
          <Empty />
        )}
      </div>
    </div>
  );
};
