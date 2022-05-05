import Head from 'next/head'
// import Image from 'next/image'
import { useState } from 'react'
import Card2 from './Card'
import Header from './Header'

export default function CardBackup() {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <Head>
        <title>Listing</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body className={toggle ? 'dark' : 'light'}>
        <Header />
        <div className="flex h-[70vh] w-[100vw] items-center justify-center bg-white duration-300 ease-linear dark:bg-slate-900">
          <Card2 toggle={toggle} setToggle={setToggle} />
        </div>
      </body>
    </>
  )
}
