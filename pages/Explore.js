import React from 'react'
import Header from '../components/Header'
import Tabs from './Tabs'

function Explore() {
  return (
    <div className="relative">
      <div className="sticky top-0 right-0 left-0">
        <Header />
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1595295333158-4742f28fbd85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          alt="thumbnail"
          //   layout="fill"
          width="150"
          height="150"
          objectFit="cover"
          className=" rounded-2xl"
        />
      </div>

      <Tabs />
    </div>
  )
}

export default Explore
