import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'
import TwitterProvider from 'next-auth/providers/twitter'
import EmailProvider from 'next-auth/providers/email'
import { FirestoreAdapter } from '@next-auth/firebase-adapter'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
    // EmailProvider({
    //   server: process.env.EMAIL_SERVER,
    //   from: process.env.EMAIL_FROM,
    // }),
    // TwitterProvider({
    //   clientId: process.env.TWITTER_ID,
    //   clientSecret: process.env.TWITTER_SECRET,
    // }),

    // ...add more providers here
  ],
  adapter: FirestoreAdapter({
    apiKey: process.env.FIREBASE_API_KEY,
    appId: process.env.FIREBASE_APP_ID,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    // Optional emulator config (see below for options)
    emulator: {},
  }),
  secret: process.env.JWT_SECRET,
  pages: {
    // signIn: '/Reward',
    signIn: '/auth/SignIn',
    // signIn: '/Login'
  },
  callbacks: {
    async session({ session, token, user }) {
      session.user.username = session.user.name
        .split(' ')
        .join('')
        .toLocaleLowerCase()

      session.user.uid = token.sub
      return session
    },
  },
})
