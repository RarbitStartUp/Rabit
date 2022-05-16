import { server } from '../../../config'
import DiscountDetail from '../../../components/discount/DiscountDetail'

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/discounts/${context.params.id}`)
  const dataDiscount = await res.json()

  return {
    props: { dataDiscount },
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/discounts/`)

  const dataDiscounts = await res.json()

  const ids = dataDiscounts.map((dataDiscount) => dataDiscount.id)

  const paths = ids.map((id) => ({
    params: { id: id.toString() },
  }))

  return {
    paths,
    fallback: false,
  }
}

export default function DiscountsDetail({ dataDiscount }) {
  return (
    <div>
      <DiscountDetail
        shopName={dataDiscount.shopName}
        discountName={dataDiscount.discountName}
        location={dataDiscount.location}
        rewardPointsGain={dataDiscount.rewardPointsGain}
        tokenAllocations={dataDiscount.tokenAllocations}
        imagePath={dataDiscount.imagePath}
        description={dataDiscount.description}
      />
    </div>
  )
}
