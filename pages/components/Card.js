import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Card_temp_2 from './Card_temp_2'
import Header from './Header'

export default function Home() {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <Head>
        <title>Listing</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body className={toggle ? 'dark' : 'light'}>
        <Header />
        <div className="flex h-[100vh] w-[100vw] items-center justify-center bg-gray-100 duration-300 ease-linear dark:bg-slate-900">
          <Card_temp_2 toggle={toggle} setToggle={setToggle} />
        </div>
      </body>
    </>
  )
}
