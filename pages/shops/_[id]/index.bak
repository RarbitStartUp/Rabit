import { server } from '../../../config'
import ShopDetail from '../../../components/shop/ShopDetail'

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/shops/${context.params.id}`)
  const dataShop = await res.json()

  return {
    props: { dataShop },
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/shops/`)

  const dataShops = await res.json()

  const ids = dataShops.map((dataShop) => dataShop.id)

  const paths = ids.map((id) => ({
    params: { id: id.toString() },
  }))

  return {
    paths,
    fallback: false,
  }
}

export default function ShopsDetail({ dataShop }) {
  return (
    <div>
      <ShopDetail
        shopName={dataShop.shopName}
        categories={dataShop.categories}
        location={dataShop.location}
        rewardPoints={dataShop.rewardPoints}
        tokenAllocations={dataShop.tokenAllocations}
        imagePath={dataShop.imagePath}
        description={dataShop.description}
      />
    </div>
  )
}
