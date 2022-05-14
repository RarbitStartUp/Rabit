import Image from 'next/image'
import { FaDollarSign, FaCommentDots, FaVoteYea } from 'react-icons/fa'
import { MdRoom, MdRedeem, MdBookmarks } from 'react-icons/md'
import { useRouter } from 'next/router'

export default function ShopDetail({
  shopName,
  location,
  rewardPoints,
  categories,
  tokenAllocations,
  imagePath,
  description,
}) {
  const router = useRouter()

  return (
    <div>
      {/* <div className="w-[20.5rem]basis-2/3 md:h-[20.5rem]border-2 mt-3 h-[30rem] rounded-2xl border-white shadow-md"> */}
      <div className=" ">
        {imagePath && (
          <Image
            src={imagePath}
            alt="thumbnail"
            width={600}
            height={400}
            // layout="fill"
            objectFit="cover"
            className="h-30 w-30"
          />
        )}
      </div>

      <div className="ml-5">
        {/* ShopName and Categories */}
        <div className="mr-5 flex max-w-6xl justify-between">
          <p className="mt-3 mr-2 ml-2 mb-1 text-lg font-bold text-[#5865F2]">
            {categories}
          </p>
          {/* Icons Buttons */}
          <div className="mt-3 mr-1 flex flex-row items-center justify-end space-x-4">
            <button
              className=" flex flex-row items-center justify-center "
              onClick={() => router.push('../discounts/DiscountsList')}
            >
              <MdRedeem className=" h-7 w-7 text-[#5865F2] hover:text-[#424bb6]" />
            </button>
            <button
              className=" flex flex-row items-center justify-center "
              onClick={() => {}}
            >
              <FaCommentDots className="ml-2 h-7 w-7 text-[#5865F2] hover:text-[#424bb6]" />
            </button>
            <button
              className=" flex flex-row items-center justify-center "
              onClick={() => router.push('../Vote')}
            >
              <FaVoteYea className="ml-2 h-7 w-7 text-[#5865F2] hover:text-[#424bb6]" />
            </button>
            <button
              className=" flex flex-row items-center justify-center "
              onClick={() => {}}
            >
              <MdBookmarks className="ml-2 h-7 w-7 text-[#5865F2] hover:text-[#424bb6]" />
            </button>
          </div>
        </div>
        <h1 className="mb-2 ml-2 mr-2 text-2xl font-bold dark:text-white">
          {shopName}
        </h1>

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
        </div>
        <p className="m-2 text-lg font-bold text-[#5865F2]">Shop Description</p>
        <p className="m-2 text-sm text-[#7b80b3]">{description}</p>
      </div>
    </div>
  )
}
