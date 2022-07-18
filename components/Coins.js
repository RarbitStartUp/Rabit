import React from 'react'
import CoinItem from './CoinItem'

export default function Coins({ coins }) {
  return (
    <div>
      {coins
        .filter((coin) => coin.symbol === 'sol')
        .map((filteredCoin) => (
          <CoinItem coins={filteredCoin} key={filteredCoin.id} />
        ))}

      {/* {coins.map((coin) => {
        return <CoinItem coins={coin} key={coin.id} />
      })} */}
    </div>
  )
}
