import styles from "./ListTask.module.css";
import { Empty } from "./Empty";
import { Task } from "./Task";

export const ListTask = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerTasks}>
        <div className={styles.tasksCreated}>
          Tarefas criadas
          <div className={styles.counter}> 0 </div>
        </div>
        <div className={styles.completedTasks}>
          Concluídas
          <div className={styles.counter}> 0 de 0 </div>
        </div>
      </div>
      <div className={styles.tasks}>
        {/* <Empty /> */}
        <Task content="teste 1" />
        <Task content="teste 2" />
      </div>
    </div>
  );
};
