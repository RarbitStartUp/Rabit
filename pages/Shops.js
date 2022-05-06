import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../firebase'
import Card from './Card'

export default function Shops() {
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

  console.log(shops)

  return (
    <div className="mx-auto flex flex-col justify-center space-y-3">
      {shops.map((shop) => (
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
      ))}
    </div>
  )
}