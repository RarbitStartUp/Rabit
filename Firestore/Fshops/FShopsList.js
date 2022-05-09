import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { db } from '../../firebase'
import ShopCard from '../../components/ShopCard'

export default function ShopsList() {
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
    <div className="flex">
      <div className="mx-auto flex-col space-y-3">
        {shops.map((shop) => (
          <Link href={'/Firestore/Fshops/' + shop.id} key={shop.id}>
            <a>
              <ShopCard
                key={shop.id}
                shopName={shop.data().shopName}
                categories={shop.data().categories}
                location={shop.data().location}
                rewardPoints={shop.data().rewardPoints}
                tokenAllocations={shop.data().tokenAllocations}
                imagePath={shop.data().imagePath}
                timestamp={shop.data().timestamp}
                email={shop.data().email}
              />
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}
