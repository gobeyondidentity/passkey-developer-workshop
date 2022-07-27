import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Highlight from "react-highlight";

const BindCredential = () => {
  const [bindCredentialUsername, setBindCredentialUsername] = useState(String);
  const [bindCredentialResult, setBindCredentialResult] = useState({});

  async function handleBindCredentialClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const BeyondIdentityEmbeddedSdk = await import("../utils/BeyondIdentityEmbeddedSdk");
    let embedded = new BeyondIdentityEmbeddedSdk.default();
    let username = bindCredentialUsername;
    let response = await fetch('/api/beyondidentity/get-credential-binding-link', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'username': username,
      })
    });
    let jsonResponse = await response.json();
    if (response.status !== 200 || jsonResponse === null) {
      setBindCredentialResult(jsonResponse);
      return;
    }
    let credentialBindingLink = jsonResponse.credential_binding_link;
    if (await embedded.isBindCredentialUrl(credentialBindingLink)) {
      let result = await embedded.bindCredential(credentialBindingLink);
      setBindCredentialResult(result);
      window.postMessage("update-credentials", "*");
    } else {
      setBindCredentialResult(jsonResponse);
    }
  }

  return (
    <main className="flex-shrink-0 mb-5">
      <section className="py-1 container">
        <div className="row py-3">
          <div className="col-lg-12 mx-auto">
            <h1 className="fw-light">Bind Credential</h1>
            <p className="lead text-muted">
              To get started using the Embedded SDK sample app, enter any
              username to bind a credential to this device. Note: This requires
              a username for which an identity has NOT been created before. It
              will fail if the username is taken.
            </p>

            <div className="row row-cols-1 row-cols-md-1">
              <div className="col">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control rounded-4 mb-3"
                    onChange={event => setBindCredentialUsername(event.target.value)}
                  />
                  <label htmlFor="bindCredentialUsername">Username</label>
                  <button
                    type="button"
                    onClick={handleBindCredentialClick}
                    className="btn btn-primary btn-lg px-4"
                  >
                    Bind Credential
                  </button>
                </div>
              </div>
            </div>

            {Object.keys(bindCredentialResult).length > 0 &&
              <div className="row row-cols-1 row-cols-md-1 mt-3">
                <div className="col">
                  <Highlight className='json'>
                    {JSON.stringify(bindCredentialResult, null, 2)}
                  </Highlight>
                </div>
              </div>
            }
          </div>
        </div>
      </section>
    </main>
  );
};

export default BindCredential;
