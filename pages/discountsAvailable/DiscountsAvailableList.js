import DiscountsAvailableCard from '../../components/discount/DiscountsAvailableCard'
import Link from 'next/link'
import { server } from '../../config/index'

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/discounts`)
  const dataDiscounts = await res.json()

  return {
    props: { dataDiscounts },
  }
}

export default function DiscountsAvailableList({ dataDiscounts }) {
  return (
    <div className="mx-auto flex-row justify-center space-y-3">
      <h1 className="ml-5 mt-10 text-2xl font-bold text-[#5865F2]">
        Discounts Available
      </h1>
      {dataDiscounts.map((dataDiscount) => (
        <Link
          href={'/discountsAvailable/' + dataDiscount.id}
          key={dataDiscount.id}
        >
          <a>
            <DiscountsAvailableCard
              discountName={dataDiscount.discountName}
              imagePath={dataDiscount.imagePath}
              rewardPointsGain={dataDiscount.rewardPointsGain}
            />
          </a>
        </Link>
      ))}
    </div>
  )
}
