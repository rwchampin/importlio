
import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"

interface Props {
  clientId: string;
  clientSecret: string;
}
const handler:any = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET_KEY,
      
    } as Props),
  ],
   
})

export { handler as GET, handler as POST }