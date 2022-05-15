import DiscountCard from '../../components/discount/DiscountsCard'
import Link from 'next/link'
import { server } from '../../config/index'

import Header from '../../components/Header'

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/discounts`)
  const dataDiscounts = await res.json()

  return {
    props: { dataDiscounts },
  }
}

export default function DiscountsList({ dataDiscounts }) {
  return (
    <div className="">
      <Header />
      <div className="mx-auto flex-col space-y-3">
        {dataDiscounts.map((dataDiscount) => (
          <Link href={'/discounts/' + dataDiscount.id} key={dataDiscount.id}>
            <a>
              <DiscountCard
                discountName={dataDiscount.discountName}
                shopName={dataDiscount.shopName}
                imagePath={dataDiscount.imagePath}
                rewardPointsGain={dataDiscount.rewardPointsGain}
                tokenAllocations={dataDiscount.tokenAllocations}
                location={dataDiscount.location}
              />
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}
