import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/martillo.gif" alt="Thor" className={styles.logo} />
      </footer>
    </>
  )
}
