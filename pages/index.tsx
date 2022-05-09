import type { NextPage } from 'next'
import Head from 'next/head'
import Login from './Login'

const Home: NextPage = () => {
  return (
<<<<<<< HEAD
    <>
      <div>
        <Head>
          <title>Rarbit</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Login />
      </div>
    </>

=======
    <div
    // className="flex min-h-screen flex-col items-center justify-center py-2"
    >
      <Head>
        <title>Rarbit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login />
      {/* <Testing /> */}
    </div>
>>>>>>> 4e85b244f9da251778e9b2d91dfb72323fb48439
  )
}

export default Home;
