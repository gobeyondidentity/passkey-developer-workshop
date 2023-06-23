import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Highlight from 'react-highlight';

const BindPasskey = () => {
  const [bindPasskeyUsername, setBindPasskeyUsername] = useState(String);
  const [bindPasskeyResult, setBindPasskeyResult] = useState({});

  async function handleBindPasskeyClick(
    e: React.MouseEvent<HTMLButtonElement>
  ) {
    e.preventDefault();
    //// --- 1. Create an identity
    // const BeyondIdentityEmbeddedSdk = await import(
    //   '../utils/BeyondIdentityEmbeddedSdk'
    // );
    // let embedded = new BeyondIdentityEmbeddedSdk.default();
    // let username = bindPasskeyUsername;
    // let response = await fetch(
    //   '/api/beyondidentity/get-credential-binding-link',
    //   {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       username: username,
    //     }),
    //   }
    // );
    // let jsonResponse = await response.json();
    // if (response.status !== 200 || jsonResponse === null) {
    //   setBindPasskeyResult(jsonResponse);
    //   return;
    // }
    // let bindingLink = jsonResponse.credential_binding_link;

    //// --- 2. Get credential binding link for identity
    // if (await embedded.isBindPasskeyUrl(bindingLink)) {
    //   let result = await embedded.bindPasskey(bindingLink);
    //   setBindPasskeyResult(result);
    //   window.postMessage('update-passkeys', '*');
    // } else {
    //   setBindPasskeyResult(jsonResponse);
    // }
  }

  return (
    <main className="flex-shrink-0 mb-5">
      <section className="py-1 container">
        <div className="row py-3">
          <div className="col-lg-12 mx-auto">
            <h3 className="fw-light">Create User and Passkey</h3>
            <p className="lead text-muted">
              To get started, create a passkey on this device. <br />
              <br />
              This will create a new user in the realm with the specified
              username and immediately create a passkey for that user, on this
              browser.
            </p>

            <div className="row row-cols-1 row-cols-md-1">
              <div className="col">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control rounded-4 mb-3"
                    onChange={(event) =>
                      setBindPasskeyUsername(event.target.value)
                    }
                  />
                  <label htmlFor="bindPasskeyUsername">Username</label>
                  <button
                    type="button"
                    onClick={handleBindPasskeyClick}
                    className="btn btn-primary btn-lg px-4"
                  >
                    Create
                  </button>
                </div>
              </div>
            </div>

            {Object.keys(bindPasskeyResult).length > 0 && (
              <div className="row row-cols-1 row-cols-md-1 mt-3">
                <div className="col">
                  <Highlight className="json">
                    {JSON.stringify(bindPasskeyResult, null, 2)}
                  </Highlight>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default BindPasskey;
