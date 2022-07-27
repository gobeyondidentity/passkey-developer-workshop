import Layout from "../components/layout";
import BindCredential from "./sections/bind-credential";
import RecoverCredential from "./sections/recover-credential";
import GetCredentials from "./sections/get-credentials";

export default function IndexPage() {
  return (
    <Layout>
      <main className="flex-shrink-0 mb-5">
        <section style={{ textAlign: "center" }}>
          <br />
          <a href="https://developers.beyondidentity.com" target="_blank" rel="noreferrer"><img src="https://user-images.githubusercontent.com/238738/178780350-489309c5-8fae-4121-a20b-562e8025c0ee.png" width="150px" alt="Beyond Identity Developer Homepage"></img></a>
          <h3 style={{ textAlign: "center" }}>Beyond Identity</h3>
          <p style={{ textAlign: "center" }}>Universal Passkeys for Developers</p>
          <p style={{ textAlign: "center" }}>
            All devices. Any protocol. Zero shared secrets.
          </p>
        </section>

        <div className="section-divider"></div>

        <BindCredential></BindCredential>

        <div className="section-divider"></div>

        <GetCredentials></GetCredentials>

        <div className="section-divider"></div>

        <RecoverCredential></RecoverCredential>
      </main>
    </Layout>
  )
}
