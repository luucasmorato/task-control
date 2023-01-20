import clipboard from "../assets/clipboard.svg";
import styles from "./Empty.module.css";

export const Empty = () => {
  return (
    <div className={styles.container}>
      <img src={clipboard} alt="clipboard" />
      <p>
        <b>Você ainda não tem tarefas cadastradas</b>
      </p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
};
