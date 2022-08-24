import React from 'react'

export default function CoinItem({ coins }) {
  //   var coins = coins.filter((coin) => coin.symbol.toString() == 'sol')
  //   var coins = coins[0]
  const earning = 10

  return (
    <div>
      <div className="flex">
        <p className="pr-2 pt-3 text-xl text-primary">{earning}</p>
        <p className="text-md pt-4 pr-3 font-semibold uppercase text-primary">
          {coins.symbol}
        </p>
        <p className="pr-3 pt-3 text-xl text-primary">=</p>
        <p className="pr-3 pt-3 text-xl text-primary">
          {Math.floor(earning * coins.current_price)}
        </p>
        <p className="text-md pt-4 pr-5 font-semibold uppercase text-primary">
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
      <div class="mt-2 leading-relaxed text-slate-500 dark:text-slate-500">
        Total value of 20 Rarbit reward points
      </div>
      <div className="flex space-x-5">
        <div class="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-500">
          *1 rarbit = 0.5 sol
        </div>
        <div class="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-500">
          *1 sol = {coins.current_price} usd
        </div>
      </div>
    </div>
  )
}
