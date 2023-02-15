import NextAuth, { NextAuthOptions } from "next-auth"
import { authUrl } from "../../../utils/url"

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const authOptions: NextAuthOptions = {
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    {
      id: "beyondidentity",
      name: "Beyond Identity",
      type: "oauth",
      wellKnown: `${authUrl().toString()}v1/tenants/${process.env.TENANT_ID}/realms/${process.env.REALM_ID}/applications/${process.env.APPLICATION_ID}/.well-known/openid-configuration`,
      authorization: { params: { scope: "openid" } },
      clientId: process.env.APP_CLIENT_ID,
      clientSecret: process.env.APP_CLIENT_SECRET,
      idToken: true,
      checks: ["state"],
      profile(profile) {
        return {
          id: profile.name,
          name: profile.name,
          email: profile.name,
        }
      },
    },
  ],
  theme: {
    colorScheme: "light",
  },
  callbacks: {
    async jwt({ token }) {
      token.userRole = "admin"
      return token
    },
  },
}

export default NextAuth(authOptions)
