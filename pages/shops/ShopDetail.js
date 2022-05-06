import Image from 'next/image'
import { FaDollarSign, FaRegComment } from 'react-icons/fa'
import { MdRoom, MdBookmarks, MdFavorite, MdRedeem } from 'react-icons/md'
import { FaPlay } from 'react-icons/fa'

export default function ShopDetail({
  shopName,
  location,
  rewardPoints,
  categories,
  tokenAllocations,
  imageUrl,
}) {
  return (
    <div className="h-30 w-30">
      {imageUrl && (
        <Image
          src={imageUrl}
          alt="thumbnail"
          width={300}
          height={300}
          //   layout="fill"
          objectFit="cover"
          className="h-30 w-30"
        />
      )}
      <div className="ml-5">
        {/* ShopName and Categories */}
        <p className="m-2 text-lg font-bold text-[#5865F2]">{categories}</p>
        <h1 className="m-2 text-2xl font-bold dark:text-white">{shopName}</h1>
        {/* Subtile Details */}
        <div className="flex flex-row flex-wrap space-x-2">
          <div className="m-2 flex flex-row items-center">
            <MdRedeem size={20} color="#5865F2" />
            <h1 className="pl-1 dark:text-white">{rewardPoints + ' points'}</h1>
          </div>
          <div className="m-2 flex flex-row items-center">
            <FaDollarSign size={20} color="#5865F2" />
            <h1 className="pl-1 dark:text-white">
              {tokenAllocations + ' % token'}
            </h1>
          </div>
          <div className="m-2 flex flex-row items-center">
            <MdRoom size={20} color="red" className="dark:text-white" />
            <h1 className="pl-1 dark:text-white">{location}</h1>
          </div>
          <div className="m-2 flex flex-row items-center">
            <FaRegComment size={20} color="grey" className="dark:text-white" />
            <h1 className="pl-1 dark:text-white">Comments</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
