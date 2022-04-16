import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { pool } from "../../../db";
import postgresAdapter from "../../../postgresAdapter";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      // authorizationUrl:
      //   "https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code",
    }),
  ],
  adapter: postgresAdapter(pool),
  // jwt: {
  //   encryption: true,
  // },
  secret: process.env.GOOGLE_CLIENT_SECRET,
  callbacks: {
    // async signIn({ user, account, profile, email, credentials }) {
    //   console.log(user);
    //   // console.log(account);
    //   // console.log(profile);
    //   // console.log(email);
    //   // console.log(credentials);
    //   return user;
    // },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.user.user_id = user.user_id;
      // session.accessToken = token.accessToken;
      return session;
    },
    // async jwt(token, account) {
    //   if (account?.accessToken) {
    //     token.accessToken = account.accessToken;
    //   }
    //   return token;
    // },
    // redirect: async (url, _baseUrl) => {
    //   if (url === "/profile") {
    //     return Promise.resolve("/");
    //   }
    //   return Promise.resolve("/");
    // },
  },
});
