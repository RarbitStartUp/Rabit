import DiscountsCard from './DiscountsCard'
import Link from 'next/link'
import { server } from '../../config/index'

// import path from 'path'
// import fs from 'fs'

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/discounts`)
  const dataDiscounts = await res.json()

  // const dataFilePath = path.join(process.cwd(), 'jsonFiles', 'data.json')
  // console.log(dataFilePath) // will be YourProject/jsonFiles/data.json

  // const fileContents = fs.readFileSync(dataFilePath, 'utf8')
  // const data = JSON.parse(fileContents)

  return {
    props: { dataDiscounts },
  }
}

export default function DiscountsList({ dataDiscounts }) {
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
            <DiscountsCard
              discountName={dataDiscount.discountName}
              shopName={dataDiscount.shopName}
              imagePath={dataDiscount.imagePath}
              rewardPointsGain={dataDiscount.rewardPointsGain}
              allocationsPercentage={dataDiscount.allocationsPercentage}
              location={dataDiscount.location}
              description={dataDiscount.description}
            />
          </a>
        </Link>
      ))}
    </div>
  )
}
