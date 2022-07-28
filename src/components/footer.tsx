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
        <li className={styles.navItem}>
          <a href="https://stackoverflow.com/questions/tagged/beyondidentity">Stack Overflow</a>
        </li>
        <li className={styles.navItem}>
          <a href="https://join.slack.com/t/byndid/shared_invite/zt-1anns8n83-NQX4JvW7coi9dksADxgeBQ">Slack</a>
        </li>
        <li className={styles.navItem}>
          <a href="https://twitter.com/BI_Developers">Twitter</a>
        </li>
        <li className={styles.navItem}>
          <a href="https://www.beyondidentity.com/developers/blog">Blog</a>
        </li>
      </ul>
    </footer>
  )
}
