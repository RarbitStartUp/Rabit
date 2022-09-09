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
        constraints={'environment'}
      />
      <p>{data}</p>
    </>
  )
}
