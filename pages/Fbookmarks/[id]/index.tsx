import { db } from '../../../firebase'
import { getDoc, doc } from '@firebase/firestore'
import { GetServerSideProps } from 'next'
import FBookmarkDetail from '../FBookmarkDetail'

export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  const docRef = doc(db, 'bookmarks', ctx.query.id)
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
      <FBookmarkDetail
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
