import Image from 'next/Image'
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
      <div className="mt-5 ml-5"></div>
      <Image
        src={'/img/RarbitQRCode/RarbitQRCode.png'}
        alt="thumbnail"
        width={300}
        height={300}
        // layout="fill"
        objectFit="cover"
        // className=""
      />
      <Image
        src={dataDiscount.imagePath}
        alt="thumbnail"
        width={300}
        height={300}
        // layout="fill"
        objectFit="cover"
        // className=""
      />
      <h1 className="ml-5 mt-3 text-2xl font-bold text-[#5865F2]">
        {dataDiscount.discountName}
      </h1>
      <p className="ml-5 mt-2 text-xl font-bold text-[#313564]">
        {dataDiscount.shopName}
      </p>
      <p className="text-md ml-5 mt-2 font-bold text-[#313564]">
        {dataDiscount.description}
      </p>
    </div>
  )
}
