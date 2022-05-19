import { db } from '../../../firebase'
import { getDoc, doc } from '@firebase/firestore'
import { GetServerSideProps } from 'next'
import DiscountDetail from '../../../components/discount/DiscountDetail'

export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  const docRef = doc(db, 'discounts', ctx.query.id)
  const docSnap = await getDoc(docRef)
  const data = JSON.parse(JSON.stringify(docSnap.data()))
  console.log(data)
  if (!data) return { notFound: true }
  return { props: { data } }
}

const Post = ({ data }: any) => {
  if (!data) {
    return 'Loading...'
  }

  return (
    <div>
      <DiscountDetail
        shopName={data.shopName}
        discountName={data.discountName}
        location={data.location}
        rewardPointsGain={data.rewardPointsGain}
        tokenAllocations={data.tokenAllocations}
        imagePath={data.imagePath}
        imagePath1={data.imagePath1}
        description={data.description}
      />
    </div>
  )
}

export default Post
