import Link from 'next/link'
import { server } from '../../config/index'
import Header from '../../components/Header'
import ShopCard from '../../components/shop/ShopCard'

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/bookmarks`)
  const dataBookmarks = await res.json()

  return {
    props: { dataBookmarks },
  }
}

export default function BookmarksList({ dataBookmarks }) {
  return (
    <div className="">
      <Header />
      <div className="mx-auto flex-col space-y-3">
        {dataBookmarks.map((dataBookmark) => (
          <Link href={'/bookmarks/' + dataBookmark.id} key={dataBookmark.id}>
            <a>
              <ShopCard
                shopName={dataBookmark.shopName}
                categories={dataBookmark.categories}
                imagePath={dataBookmark.imagePath}
                rewardPoints={dataBookmark.rewardPoints}
                tokenAllocations={dataBookmark.tokenAllocations}
                location={dataBookmark.location}
              />
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}
