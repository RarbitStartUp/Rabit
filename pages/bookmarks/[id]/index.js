import { server } from '../../../config'
import BookmarkDetail from '../BookmarkDetail'

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/bookmarks/${context.params.id}`)
  const dataBookmark = await res.json()

  return {
    props: { dataBookmark },
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/bookmarks/`)

  const dataBookmarks = await res.json()

  const ids = dataBookmarks.map((dataBookmark) => dataBookmark.id)

  const paths = ids.map((id) => ({
    params: { id: id.toString() },
  }))

  return {
    paths,
    fallback: false,
  }
}

export default function BookmarksDetail({ dataBookmark }) {
  return (
    <div>
      <BookmarkDetail
        key={dataBookmark.id}
        shopName={dataBookmark.shopName}
        categories={dataBookmark.categories}
        location={dataBookmark.location}
        rewardPoints={dataBookmark.rewardPoints}
        tokenAllocations={dataBookmark.tokenAllocations}
        imagePath={dataBookmark.imagePath}
        description={dataBookmark.description}
      />
    </div>
  )
}
