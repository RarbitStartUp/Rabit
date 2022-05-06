import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../firebase'

import React from 'react'

import Header from './components/Header'
import ShopCard from './components/shop/ShopCard'

export default function Listing() {
  const [shops, setShops] = useState([])

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, 'shops'), orderBy('timestamp', 'desc')),
        (snapshot) => {
          setShops(snapshot.docs)
        }
      ),
    [db]
  )

  return (
    <div>
      <Header />
      <div className="flex">
        <div className="mx-auto flex-col space-y-3">
          {shops.map((shop) => (
            <ShopCard shop={shop.data()}></ShopCard>
          ))}
        </div>
      </div>
    </div>
  )
}
