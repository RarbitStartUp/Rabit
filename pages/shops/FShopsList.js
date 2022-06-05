import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { db } from '../../firebase'
import ShopCard from '../../components/shop/ShopCard'
import Header from '../../components/Header'

export default function FShopsList() {
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
    <div>
      <Header />
      <div className="flex">
        <div className="mx-auto flex-col space-y-3">
          {shops.map((shop) => (
            <Link href={'/shops/' + shop.id} key={shop.id}>
              <a>
                <ShopCard
                  key={shop.id}
                  shopName={shop.data().shopName}
                  categories={shop.data().categories}
                  location={shop.data().location}
                  rewardPoints={shop.data().rewardPoints}
                  tokenAllocations={shop.data().tokenAllocations}
                  imagePath={shop.data().imagePath}
                  imagePath1={shop.data().imagePath1}
                  imagePath2={shop.data().imagePath2}
                  imagePath3={shop.data().imagePath3}
                  imagePath4={shop.data().imagePath4}
                  timestamp={shop.data().timestamp}
                  email={shop.data().email}
                />
              </a>
            </Link>
          ))}
        </div>
      </div>
      <div className="h-20" />
    </div>
  )
}
