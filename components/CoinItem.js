import React from 'react'

export default function CoinItem({ coins }) {
  return (
    <div>
      <p className="text-xl text-primary">{coins.current_price}</p>
      <p className="text-xl font-semibold uppercase text-primary">
        {coins.symbol}
      </p>
      <img src={coins.image} alt="" />
    </div>
  )
}
