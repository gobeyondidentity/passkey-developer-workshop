import styles from "./header.module.css"

// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function Header() {
  
  return (
    <header className={styles.header}>
      <div className={styles.navItems}>
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
      </div>

      <section style={{ textAlign: "center" }}>
        <br />
        <a href="https://developers.beyondidentity.com" target="_blank" rel="noreferrer">
          <img src="https://user-images.githubusercontent.com/238738/178780350-489309c5-8fae-4121-a20b-562e8025c0ee.png" width="150px" alt="Beyond Identity Developer Homepage"></img>
        </a>
        <h3 style={{ textAlign: "center" }}>Beyond Identity</h3>
        <p style={{ textAlign: "center" }}>Universal Passkeys for Developers</p>
        <p style={{ textAlign: "center" }}>
          All devices. Any protocol. Zero shared secrets.
        </p>
      </section>
    </header>
  )
}
