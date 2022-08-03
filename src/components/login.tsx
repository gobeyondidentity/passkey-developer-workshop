import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"
import "bootstrap/dist/css/bootstrap.css";
import styles from "./login.module.css"

export default function Login() {
  const { data: session, status } = useSession()
  const loading = status === "loading"

  return (
    
      <main className="flex-shrink-0 mb-5">
        <noscript>
          <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
        </noscript>

        <div className={styles.signedInStatus}>
          <p className={`nojs-show ${!session && loading ? styles.loading : styles.loaded}`}>
            {!session && (
              <>
                <span className={styles.notSignedInText}>
                  You are not signed in
                </span>
                <a
                  href={`/api/auth/signin`}
                  className={styles.buttonPrimary}
                  onClick={(e) => {
                    e.preventDefault()
                    signIn("beyondidentity")
                  }}
                >
                  Sign in
                </a>
              </>
            )}
            {session?.user && (
              <>
                <span
                  style={{ backgroundImage: `url('https://user-images.githubusercontent.com/238738/178780350-489309c5-8fae-4121-a20b-562e8025c0ee.png` }}
                  className={styles.avatar}
                />
                <span className={styles.signedInText}>
                  <small>Signed in as</small>
                  <br />
                  <strong>{session.user.name}</strong>
                </span>
                <a
                  href={`/api/auth/signout`}
                  className={styles.button}
                  onClick={(e) => {
                    e.preventDefault()
                    signOut()
                  }}
                >
                  Sign out
                </a>
              </>
            )}
          </p>
        </div>

      </main>
  )
}
