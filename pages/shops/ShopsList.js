import ShopCard from '../../components/shop/ShopCard'
import Link from 'next/link'
import { server } from '../../config/index'
import Header from '../../components/Header'

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/shops`)
  const dataShops = await res.json()

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
                shopName={dataShop.shopName}
                categories={dataShop.categories}
                location={dataShop.location}
                rewardPoints={dataShop.rewardPoints}
                tokenAllocations={dataShop.tokenAllocations}
                imagePath={dataShop.imagePath}
              />
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}
