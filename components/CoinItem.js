import React from 'react'

export default function CoinItem({ coins }) {
  //   var coins = coins.filter((coin) => coin.symbol.toString() == 'sol')
  //   var coins = coins[0]
  const earning = 10

  return (
    <div className="flex">
      <p className="pr-2 pt-3 text-xl text-primary">{earning}</p>
      <p className="text-md pt-4 pr-3 font-semibold uppercase text-primary">
        {coins.symbol}
      </p>
      <p className="pr-3 pt-3 text-xl text-primary">=</p>
      <p className="pr-3 pt-3 text-xl text-primary">
        {earning * coins.current_price}
      </p>
      <p className="text-md pt-4 pr-3 font-semibold uppercase text-primary">
        USD
      </p>
      {/* <p className="pr-3 pt-3 text-xl text-primary">{coins.current_price}</p> */}
      <img
        src={coins.image}
        alt=""
        width="50"
        height="50"
        className="rounded-full"
      />
    </div>
  )
}
