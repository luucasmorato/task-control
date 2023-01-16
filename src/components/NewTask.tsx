import plus from "../assets/plus.svg";
import styles from "./NewTask.module.css";

export const NewTask = () => {
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button>
        Criar
        <img src={plus} alt="plus" />
      </button>
    </div>
  );
};
