import React, { useState } from 'react'
import { QrReader } from 'react-qr-reader'

export default function QRCodeScanner(props) {
  const [data, setData] = useState('No result')

  return (
    <>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text)
          }

          if (!!error) {
            console.info(error)
          }
        }}
        style={{ width: '100%' }}
        constraints={{ facingMode: 'environment' }}
      />
      <p className="px-4 pt-4 pb-2 text-center text-sm text-slate-400">
        You've earned {data} Rarbit Points !
      </p>
    </>
  )
}
