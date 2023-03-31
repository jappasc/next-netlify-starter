import styles from "./modal.module.scss";

const Modal = ({ show, close }) =>
  show ? (
    <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <header className={styles.modal_header}>
          <h2 className={styles.modal_header}>Bienvenido al homosexógrafo.</h2>
        </header>
        <main className={styles.modal_content}>
          Por favor, rellene los siguientes campos:
        </main>
        <footer className={styles.modal_footer}>
          <button className={styles.ubmit}>Confirmar</button>
        </footer>
      </div>
    </div>
  ) : null;

export default Modal;
