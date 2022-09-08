import React from 'react'
import Image from 'next/image'
import BottomTabsScan from '../components/BottomTabs/BottomTabsScan'
import { QRCodeScanner } from './QRCodeScanner'

export default function Scan() {
  return (
    <div>
      <QRCodeScanner />
      <div class="mx-4 mt-4 flex flex-1 flex-col justify-center rounded-2xl bg-white p-8 shadow">
        <div class="flex items-center">
          <h className="text-center text-primary">
            You can Scan the QR Code on the receipts provided by the Merchants
            using Rarbit POS ( Point of Sale ) system to receive Rarbit Reward
            Points
          </h>
        </div>
      </div>
      <div className="py-3"></div>
      <h className="flex px-4 text-center text-sm text-slate-400">
        Please contact rarbit_cs@gmail.com to inquire about Rarbit POS ( Point
        of Sale ) system for your business growth
      </h>
      <div className="absolute bottom-16 right-4">
        <Image src="/img/RarbitLogo/RarbitLogo.png" width={80} height={80} />
      </div>
      <BottomTabsScan />
    </div>
  )
}
