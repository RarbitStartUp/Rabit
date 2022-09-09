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
      <p className="px-4 text-center text-slate-400">
        You've earned {data} Rarbit Points !
      </p>
    </>
  )
}
