export default function Input({ dropdown, onChange, label, symbols }) {
  const arrOfSymbols = Object.keys(symbols)
  return (
    <div className="mb-12 flex h-16 flex-col">
      <label htmlFor={label} className="pb-2 text-2xl font-bold text-primary">
        {label}
      </label>
      {(dropdown && (
        <select
          name="countries"
          onChange={(e) => onChange(e.target.value)}
          className="rounded px-4 py-2"
        >
          {arrOfSymbols.map((symbol) => (
            <option value={symbol} key={arrOfSymbols.indexOf(symbol)}>
              {symbols[symbol]}
            </option>
          ))}
        </select>
      )) || (
        <input
          type="number"
          placeholder="Enter amount..."
          className="rounded-sm border-none bg-primary px-4 py-2 outline-none"
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </div>
  )
}
