import React from 'react'
import Image from 'next/image'
import BottomTabsScan from '../components/BottomTabs/BottomTabsScan'
import { QRCodeScanner } from './QRCodeScanner'

export default function Scan() {
  return (
    <div>
      <QRCodeScanner />
      <div class="mx-4 mt-4 flex flex-1 flex-col justify-center rounded-2xl bg-white p-8 shadow">
        <div class="items-center">
          <h className="flex text-center text-primary">
            You can Scan the QR Code on the receipts provided by the Merchants
            using Rarbit POS ( Point of Sale ) system to receive Rarbit Reward
            Points
          </h>
        </div>
      </div>
      <p className="py-3 text-center text-xs text-slate-400">
        Contact us to enquire about Rarbit POS
      </p>
      <div className="absolute bottom-16 right-4">
        <Image src="/img/RarbitLogo/RarbitLogo.png" width={80} height={80} />
      </div>
      <BottomTabsScan />
    </div>
  )
}
