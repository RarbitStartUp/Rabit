import Link from 'next/link'
import Card from '../Card'

export default function ShopCard({
  shop
}) {
  return (
    <>
      <Link href={'/shops/' + shop.id} key={shop.id}>
        <a>
          <Card
            key={shop.id}
            shopName={shop.shopName}
            categories={shop.categories}
            location={shop.location}
            rewardPoints={shop.rewardPoints}
            tokenAllocations={shop.tokenAllocations}
            imageUrl={shop.imageUrl}
            timestamp={shop.timestamp}
            email={shop.email}
          />
        </a>
      </Link>
    </>
  )

}