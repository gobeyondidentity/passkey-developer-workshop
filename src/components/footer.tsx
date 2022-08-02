import styles from "./footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.navItem}>
        <a href="https://developer.beyondidentity.com">Documentation</a>
      </div>
      <div className={styles.navItem}>
        <a href="https://github.com/gobeyondidentity">GitHub</a>
      </div>
      <div className={styles.navItem}>
        <a href="https://stackoverflow.com/questions/tagged/beyondidentity">Stack Overflow</a>
      </div>
      <div className={styles.navItem}>
        <a href="https://join.slack.com/t/byndid/shared_invite/zt-1anns8n83-NQX4JvW7coi9dksADxgeBQ">Slack</a>
      </div>
      <div className={styles.navItem}>
        <a href="https://twitter.com/BI_Developers">Twitter</a>
      </div>
      <div className={styles.navItem}>
        <a href="https://www.beyondidentity.com/developers/blog">Blog</a>
      </div>
    </footer>
  )
}
