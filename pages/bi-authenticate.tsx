import { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Credential } from "@beyondidentity/bi-sdk-js";

const AuthenticateWithBeyondIdentity = () => {
  useEffect(() => {
    const authenticate = async () => {
      const BeyondIdentityEmbeddedSdk = await import("../utils/BeyondIdentityEmbeddedSdk");
      let embedded = new BeyondIdentityEmbeddedSdk.default();
      embedded.isAuthenticateUrl(window.location.href).then(async shouldAuthenticate => {
        if (shouldAuthenticate) {
          let biAuthenticateUrl = window.location.href;
          let redirectURL = await biAuthenticate(biAuthenticateUrl);
          window.location.href = redirectURL;
        }
      });
    }
    authenticate().catch(console.error);
  }, []);

  async function biAuthenticate(url: string): Promise<string> {
    const BeyondIdentityEmbeddedSdk = await import("../utils/BeyondIdentityEmbeddedSdk");
    let embedded = new BeyondIdentityEmbeddedSdk.default();
    let result = await embedded.authenticate(url, (credentials: Credential[]) => {
      let promptText = credentials.map((credential, index) => {
        return `${index}: ${credential.identity.username}`;
      }).join("\n");
      let selectedIndex = parseInt(prompt(promptText, "index")!!);
      if (selectedIndex >= 0 && selectedIndex < credentials.length) {
        let selectedId = credentials[selectedIndex].id;
        return Promise.resolve(selectedId);
      } else {
        // This will fail in core as it won't match to any id
        return Promise.resolve("unknown_id");
      }
    });
    return Promise.resolve(result.redirectURL);
  }

  return (
	<></>
  );
};

export default AuthenticateWithBeyondIdentity;
