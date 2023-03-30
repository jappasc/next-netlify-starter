import styles from "./Footer.module.css";
import { options } from "../constants";

export default function Footer({ selectedOption }) {
  return (
    <>
      <footer className={styles.footer}>
        {selectedOption === options.MARICONASO && (
          <img src="/mariconaso.gif" alt="Thor" className={styles.logo} />
        )}
        {selectedOption === options.HETERILLO && (
          <img src="/hetero.gif" alt="Thor" className={styles.logo} />
        )}
        {selectedOption === options.CURIOSETE && (
          <img src="/curiosete.gif" alt="Thor" className={styles.logo} />
        )}
        {selectedOption == null && (
          <img src="/martillo.gif" alt="Thor" className={styles.logo} />
        )}
      </footer>
    </>
  );
}
