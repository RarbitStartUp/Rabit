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
