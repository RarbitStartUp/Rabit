import type { NextPage } from 'next'
import Head from 'next/head'
import Reward from './Reward'
import { getSession } from 'next-auth/react'
import Login from './Login'

export default function Home({ session }) {
  if (!session) return <Login />
  return (
    <>
      <div>
        <Head>
          <title>Rarbit</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Reward />
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  // Get the user
  const session = await getSession(context)

  return {
    props: {
      session,
    },
  }
}
