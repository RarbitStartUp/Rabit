import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { db } from '../../firebase'
import DiscountsAvailableCard from '../../components/discount/DiscountsAvailableCard'
import Header from '../../components/Header'

export default function FDiscountsAvailableList() {
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
      <h1 className="ml-5 mt-10 flex text-2xl font-bold text-primary">
        Discounts Available
      </h1>
      <p className="ml-5 mt-2 flex text-xl font-bold text-secondary">
        from this shop
      </p>
      <Header />
      <div className="mx-auto flex-col space-y-3">
        {discounts.map((discount) => (
          <Link href={'/discountsAvailable/' + discount.id} key={discount.id}>
            <a>
              <DiscountsAvailableCard
                discountName={discount.data().discountName}
                imagePath={discount.data().imagePath}
                rewardPointsGain={discount.data().rewardPointsGain}
              />
            </a>
          </Link>
        ))}
      </div>
      <div className="h-20" />
    </div>
  )
}
