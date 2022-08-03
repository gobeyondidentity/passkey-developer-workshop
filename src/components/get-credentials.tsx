import "bootstrap/dist/css/bootstrap.css";
import { Credential } from '@beyondidentity/bi-sdk-js';
import { Component } from "react";

class GetCredentials extends Component<{}, { credentials: Credential[] }> {
  constructor(props: any) {
    super(props);
    this.state = { credentials: [] };
  }

  async componentDidMount() {
    const BeyondIdentityEmbeddedSdk = await import("../utils/BeyondIdentityEmbeddedSdk");
    let embedded = new BeyondIdentityEmbeddedSdk.default();
    this.setState({ credentials: await embedded.getCredentials() });
    window.addEventListener("message", async (event) => {
      if (event.data === "update-credentials") {
        this.setState({ credentials: await embedded.getCredentials() });
      } else {
        console.log("Unknown event data received:", event.data);
      }
    });
  }

  async handleDeleteCredentialClick(e: React.MouseEvent<HTMLButtonElement>, credential: Credential) {
    e.preventDefault();
    const BeyondIdentityEmbeddedSdk = await import("../utils/BeyondIdentityEmbeddedSdk");
    let embedded = new BeyondIdentityEmbeddedSdk.default();
    let result = window.confirm(`Are you sure you want to delete credential with username \"${credential.identity.username}\"?`);
    if (result) {
      await embedded.deleteCredential(credential.id);
      this.setState({ credentials: await embedded.getCredentials() });
    }
  }

  render() {
    return (
      <main className="flex-shrink-0 mb-5">
        <section className="py-1 container">
          <br></br>
          <h1 className="fw-light">Passkeys</h1>
          <br></br>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Logo</th>
                <th scope="col">Username</th>
                <th scope="col">Display Name</th>
                <th scope="col">ID</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>

            <tbody>
              {this.state.credentials.map(credential => (
                <tr key={credential.id}>
                  <th scope="row"><img src={credential.theme.logoUrlLight} style={{ width: "50px" }} alt="Beyond Identity Credential Logo"></img></th>
                  <td>{credential.identity.username}</td>
                  <td>{credential.identity.displayName}</td>
                  <td>{credential.id}</td>
                  <td><button
                    type="button"
                    value={credential.id}
                    onClick={event => this.handleDeleteCredentialClick(event, credential)}
                    className="btn btn-primary btn-lg px-4"
                  >Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    );
  }
}

export default GetCredentials;