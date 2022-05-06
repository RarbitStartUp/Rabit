import type { NextPage } from 'next'
import Head from 'next/head'
import Login from './Login'

// export async function getServerSideProps() {}

const Home: NextPage = () => {
  return (
    <div
    // className="flex min-h-screen flex-col items-center justify-center py-2"
    >
      <Head>
        <title>Rarbit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login />
    </div>
  )
}

export default Home
