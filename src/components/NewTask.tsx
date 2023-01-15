import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./NewTask.module.css";

export const NewTask = () => {
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button>
        Criar
        {/* <FontAwesomeIcon icon="fa-regular fa-circle-plus" /> */}
      </button>
    </div>
  );
};
