
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET_KEY as string,
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) { 
            console.log('signIn', account, profile)
          return true // Do different verification for other providers that don't have `email_verified`
        },
        async session({ session, token, user }) { 
            // Send properties to the client, like an access_token and user id from a provider.
            // session.accessToken = token.accessToken
            // session.user.id = token.id
                console.log('session', session, token, user)
            // return session
          }
      }
})

export { handler as GET, handler as POST }