import type { NextPage } from 'next'
import Head from 'next/head'
import Reward from './Reward'

const Home: NextPage = () => {
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

export default Home
