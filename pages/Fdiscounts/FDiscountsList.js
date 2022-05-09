import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { db } from '../../firebase'
import DiscountCard2 from './DiscountsCard2'
import Header from '../Header'

export default function DiscountsList() {
  const [discounts, setDiscounts] = useState([])

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, 'discounts'), orderBy('timestamp', 'desc')),
        (snapshot) => {
          setDiscounts(snapshot.docs)
        }
      ),
    [db]
  )

  console.log(discounts)

  return (
    <div>
      <Header />
      <div className="flex">
        <div className="mx-auto flex-col space-y-3">
          {discounts.map((discount) => (
            <Link href={'/Fdiscounts/' + discount.id} key={discount.id}>
              <a>
                <DiscountCard2
                  key={discount.id}
                  shopName={discount.data().shopName}
                  discountName={discount.data().discountName}
                  // categories={discount.data().categories}
                  location={discount.data().location}
                  rewardPointsGain={discount.data().rewardPointsGain}
                  tokenAllocations={discount.data().tokenAllocations}
                  imagePath={discount.data().imagePath}
                  timestamp={discount.data().timestamp}
                  email={discount.data().email}
                />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
