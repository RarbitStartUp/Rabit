import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { db } from '../../firebase'
import DiscountCard from '../../components/discount/DiscountsCard'
import Header from '../../components/Header/Header'

export default function FDiscountsList() {
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
            <Link href={'/discounts/' + discount.id} key={discount.id}>
              <a>
                <DiscountCard
                  shopName={discount.data().shopName}
                  discountName={discount.data().discountName}
                  location={discount.data().location}
                  rewardPointsGain={discount.data().rewardPointsGain}
                  tokenAllocations={discount.data().tokenAllocations}
                  imagePath={discount.data().imagePath}
                  imagePath1={discount.data().imagePath1}
                  imagePath2={discount.data().imagePath2}
                  imagePath3={discount.data().imagePath3}
                  imagePath4={discount.data().imagePath4}
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
