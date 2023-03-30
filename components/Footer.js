import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/groot.gif" alt="Groot" className={styles.logo} />
      </footer>
    </>
  )
}
