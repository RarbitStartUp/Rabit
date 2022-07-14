import React from 'react'
import CoinItem from './CoinItem'

export default function Coins({ coins }) {
  return (
    <div>
      <CoinItem coins={coins} key={coins.id} />
      {coins.map((coins) => {
        return <CoinItem coins={coins} key={coins.id} />
      })}
    </div>
  )
}
