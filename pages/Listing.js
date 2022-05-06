import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../firebase'

import React from 'react'
import Link from 'next/link'

import Header from './components/Header'
import Card from './components/Card'

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
  
            <Link href={'/shops/' + shop.id} key={shop.id}>
              <a>
              <Card
                  key={shop.id}
                  shopName={shop.data().shopName}
                  categories={shop.data().categories}
                  location={shop.data().location}
                  rewardPoints={shop.data().rewardPoints}
                  tokenAllocations={shop.data().tokenAllocations}
                  imageUrl={shop.data().imageUrl}
                  timestamp={shop.data().timestamp}
                  email={shop.data().email}
                />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
