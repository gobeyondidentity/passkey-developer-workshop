import Layout from "../components/layout";
import BindCredential from "./sections/BindCredential";
import RecoverCredential from "./sections/RecoverCredential";
import GetCredentials from "./sections/GetCredentials";
import AuthenticateWithBeyondIdentity from "./sections/AuthenticateWithBeyondIdentity";

export default function IndexPage() {
  return (
    <Layout>
      <main className="flex-shrink-0 mb-5">
        <section style={{ textAlign: "center" }}>
          <br />
          <a href="https://developers.beyondidentity.com" target="_blank"><img src="https://user-images.githubusercontent.com/238738/178780350-489309c5-8fae-4121-a20b-562e8025c0ee.png" width="150px" ></img></a>
          <h3 style={{ textAlign: "center" }}>Beyond Identity</h3>
          <p style={{ textAlign: "center" }}>Universal Passkeys for Developers</p>
          <p style={{ textAlign: "center" }}>
            All devices. Any protocol. Zero shared secrets.
          </p>
        </section>

        <div className="section-divider"></div>

        <BindCredential></BindCredential>

        <div className="section-divider"></div>

        <RecoverCredential></RecoverCredential>

        <div className="section-divider"></div>

        <AuthenticateWithBeyondIdentity></AuthenticateWithBeyondIdentity>

        <div className="section-divider"></div>

        <GetCredentials></GetCredentials>
      </main>
    </Layout>
  )
}