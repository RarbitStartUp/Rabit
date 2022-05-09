import ShopCard from '../../components/ShopCard'
import Link from 'next/link'
import { server } from '../../config/index'
import Header from '../Header'

// import path from 'path'
// import fs from 'fs'

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/shops`)
  const dataShops = await res.json()

  // const dataFilePath = path.join(process.cwd(), 'jsonFiles', 'data.json')
  // console.log(dataFilePath) // will be YourProject/jsonFiles/data.json

  // const fileContents = fs.readFileSync(dataFilePath, 'utf8')
  // const data = JSON.parse(fileContents)

  return {
    props: { dataShops },
  }
}

export default function ShopsList({ dataShops }) {
  return (
    <div className="">
      <Header />
      <div className="mx-auto flex-col space-y-3">
        {dataShops.map((dataShop) => (
          <Link href={'/shops/' + dataShop.id} key={dataShop.id}>
            <a>
              <ShopCard
                key={dataShop.id}
                shopName={dataShop.shopName}
                categories={dataShop.categories}
                location={dataShop.location}
                rewardPoints={dataShop.rewardPoints}
                tokenAllocations={dataShop.tokenAllocations}
                imagePath={dataShop.imagePath}
                timestamp={dataShop.timestamp}
                email={dataShop.email}
              />
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}
