import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { db } from '../../firebase'
import DiscountsAvailableCard from '../../components/discount/DiscountsAvailableCard'
import HeaderDA from '../../components/Header/HeaderDA'

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
      <div className="flex flex-row content-end items-end justify-start space-x-2 py-2">
        <div className="md:pl-7">
          <HeaderDA />
        </div>
        <h1 className="mt-20 flex pl-5 text-xl font-bold text-primary md:pl-5">
          Discounts Available
        </h1>
        <p className="text-md font-bold text-secondary">from this shop</p>
      </div>
      <div>
        {discounts.map((discount) => (
          <Link href={'/discountsAvailable/' + discount.id} key={discount.id}>
            <a>
              <DiscountsAvailableCard
                discountName={discount.data().discountName}
                imagePath={discount.data().imagePath}
                imagePath1={discount.data().imagePath1}
                imagePath2={discount.data().imagePath2}
                imagePath3={discount.data().imagePath3}
                imagePath4={discount.data().imagePath4}
                rewardPointsGain={discount.data().rewardPointsGain}
              />
            </a>
          </Link>
        ))}
      </div>
      <div className="h-10" />
    </div>
  )
}
