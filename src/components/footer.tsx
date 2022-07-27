import styles from "./footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <hr />
      <ul className={styles.navItems}>
        <li className={styles.navItem}>
          <a href="https://developer.beyondidentity.com">Documentation</a>
        </li>
        <li className={styles.navItem}>
          <a href="https://github.com/gobeyondidentity">GitHub</a>
        </li>
      </ul>
    </footer>
  )
}
