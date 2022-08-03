import { apiUrl, authUrl } from "../../../utils/url";
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let username: string = req.body.username;
  if (username === undefined || username.length === 0) {
    return res.status(400).json({
      error: "missing username",
      error_description: "username is required in the body of this request"
    });
  }

  let accessToken = process.env.API_TOKEN;

  // --- 1. List all identities
  const allIdentitiesResponse = await fetch(
    `${apiUrl().toString()}v1/tenants/${process.env.TENANT_ID}/realms/${process.env.REALM_ID}/identities`,
    {
      headers: {
        'Authorization': 'Bearer ' + accessToken,
      },
      method: 'GET'
    }
  );

  let allIdentitiesResponseJson = await allIdentitiesResponse.json();

  if (allIdentitiesResponse.status !== 200) {
    return res.status(400).json(allIdentitiesResponseJson);
  }

  const foundIdentity = allIdentitiesResponseJson.identities.find(
    (identity: any) => identity.traits.username === username
  );
  if (foundIdentity === undefined) {
    return res.status(400).json(
      {
        error: "identity not found",
        error_description: "identity does not exist, make sure to create one before attempting to recover it"
      }
    );
  }

  let identityId = foundIdentity.id;

  // --- 2. Get credential binding link for identity
  const credentialBindingLinkResponse = await fetch(
    `${apiUrl().toString()}v1/tenants/${process.env.TENANT_ID}/realms/${process.env.REALM_ID}/identities/${identityId}/credential-binding-jobs`,
    {
      body: JSON.stringify({
        job: {
          delivery_method: "RETURN",
          authenticator_config_id: process.env.AUTHENTICATOR_CONFIG_ID,
          post_binding_redirect_uri: process.env.NEXTAUTH_URL,
        }
      }),
      headers: {
        'Authorization': 'Bearer ' + accessToken,
      },
      method: 'POST'
    }
  );
  let credentialBindingLinkResponseJson = await credentialBindingLinkResponse.json();

  if (credentialBindingLinkResponse.status !== 200) {
    return res.status(400).json(credentialBindingLinkResponseJson);
  }

  res.send(credentialBindingLinkResponseJson);
}
