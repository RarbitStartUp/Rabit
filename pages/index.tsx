import type { NextPage } from 'next'
import Head from 'next/head'
import Login from './Login'

const Home: NextPage = () => {
  return (
    <>
      <div>
        <Head>
          <title>Rarbit</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Login />
      </div>
    </>
  )
}

export default Home
