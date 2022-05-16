import DiscountsAvailableCard from '../../components/discount/DiscountsAvailableCard'
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

export default function DiscountsAvailableList({ dataDiscounts }) {
  return (
    <div>
      <h1 className="ml-5 mt-10 flex text-2xl font-bold text-primary">
        Discounts Available
      </h1>
      <p className="ml-5 mt-3 flex text-xl font-bold text-secondary">
        from this shop
      </p>
      <Header />
      <div className="mx-auto flex-row space-y-3">
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
    </div>
  )
}
