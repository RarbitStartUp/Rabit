// import { server } from '../../../config/index'
import { server } from '../../../config'

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
      <h1 className="ml-5 mt-10 text-2xl font-bold text-[#5865F2]">
        Discount Details
      </h1>
      <h1>{dataDiscount.discountName}</h1>
      <p>{dataDiscount.shopName}</p>
    </div>
  )
}
