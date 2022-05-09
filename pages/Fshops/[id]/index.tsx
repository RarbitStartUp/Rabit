<<<<<<< HEAD:pages/shops/[id].tsx
import { db } from '../../firebase'
import { getDoc, doc } from '@firebase/firestore'
import { GetServerSideProps } from 'next'
import ShopDetail from '../components/shop/ShopDetail'
=======
import { db } from '../../../firebase'
import { getDoc, doc } from '@firebase/firestore'
import { GetServerSideProps } from 'next'
import FShopDetail from '../FShopDetail'
>>>>>>> 4e85b244f9da251778e9b2d91dfb72323fb48439:pages/Fshops/[id]/index.tsx

export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  const docRef = doc(db, 'shops', ctx.query.id)
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
      <FShopDetail
        key={data.id}
        shopName={data.shopName}
        categories={data.categories}
        location={data.location}
        rewardPoints={data.rewardPoints}
        tokenAllocations={data.tokenAllocations}
        imagePath={data.imagePath}
        description={data.description}
      />
    </div>
  )
}

export default Post
