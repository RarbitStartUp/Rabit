import DiscountCard from '../../components/DiscountCard'
import Link from 'next/link'
import { server } from '../../config/index'

// import path from 'path'
// import fs from 'fs'
import Header from '../../components/Header'

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
    <div className="">
      <Header />
      <div className="mx-auto flex-col space-y-3">
        {dataDiscounts.map((dataDiscount) => (
          <Link href={'/discounts/' + dataDiscount.id} key={dataDiscount.id}>
            <a>
              <DiscountCard
                discountName={dataDiscount.discountName}
                shopName={dataDiscount.shopName}
                categories={dataDiscount.categories}
                imagePath={dataDiscount.imagePath}
                rewardPointsGain={dataDiscount.rewardPointsGain}
                tokenAllocations={dataDiscount.tokenAllocations}
                location={dataDiscount.location}
                description={dataDiscount.description}
              />
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}
