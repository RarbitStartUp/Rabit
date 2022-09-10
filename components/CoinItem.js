import React from 'react'

export default function CoinItem({ coins }) {
  //   var coins = coins.filter((coin) => coin.symbol.toString() == 'sol')
  //   var coins = coins[0]
  const earning = 10
  const round10 = (value, exp) => decimalAdjust('round', value, exp)

  function decimalAdjust(type, value, exp) {
    type = String(type)
    if (!['round', 'floor', 'ceil'].includes(type)) {
      throw new TypeError(
        "The type of decimal adjustment must be one of 'round', 'floor', or 'ceil'."
      )
    }
    exp = Number(exp)
    value = Number(value)
    if (exp % 1 !== 0 || Number.isNaN(value)) {
      return NaN
    } else if (exp === 0) {
      return Math[type](value)
    }
    const [magnitude, exponent = 0] = value.toString().split('e')
    const adjustedValue = Math[type](`${magnitude}e${exponent - exp}`)
    // Shift back
    const [newMagnitude, newExponent = 0] = adjustedValue.toString().split('e')
    return Number(`${newMagnitude}e${+newExponent + exp}`)
  }

  return (
    <div>
      <div className="flex">
        <p className="pr-2 pt-3 text-xl text-primary">{earning}</p>
        <p className="text-md pt-4 pr-3 font-semibold uppercase text-primary">
          {coins.symbol}
        </p>
        <p className="pr-3 pt-3 text-xl text-primary">=</p>
        <p className="pr-3 pt-3 text-xl text-primary">
          {round10(earning * coins.current_price, -2)}
          {/* {Math.floor(earning * coins.current_price)} */}
          {/* {earning * coins.current_price} */}
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
        Total value of {earning} Rarbit reward points
      </div>
      <div className="flex space-x-5">
        <div class="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-500">
          *1 rarbit = 1 sol
        </div>
        <div class="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-500">
          *1 sol = {round10(coins.current_price, -2)} usd
        </div>
      </div>
    </div>
  )
}
