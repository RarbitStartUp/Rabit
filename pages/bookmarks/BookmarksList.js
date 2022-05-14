import ShopCard from '../../components/ShopCard'
import Link from 'next/link'
import { server } from '../../config/index'
import Header from '../../components/Header'

// import path from 'path'
// import fs from 'fs'

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/bookmarks`)
  const dataBookmarks = await res.json()

  // const dataFilePath = path.join(process.cwd(), 'jsonFiles', 'data.json')
  // console.log(dataFilePath) // will be YourProject/jsonFiles/data.json

  // const fileContents = fs.readFileSync(dataFilePath, 'utf8')
  // const data = JSON.parse(fileContents)

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
                key={dataBookmark.id}
                shopName={dataBookmark.shopName}
                categories={dataBookmark.categories}
                location={dataBookmark.location}
                rewardPoints={dataBookmark.rewardPoints}
                tokenAllocations={dataBookmark.tokenAllocations}
                imagePath={dataBookmark.imagePath}
                // timestamp={dataBookmark.timestamp}
                // email={dataBookmark.email}
              />
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}
