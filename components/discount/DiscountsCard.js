import Image from 'next/image'
import { FaCommentDots, FaVoteYea } from 'react-icons/fa'
import {
  MdRoom,
  MdBookmarks,
  MdRedeem,
  MdOutlineGeneratingTokens,
} from 'react-icons/md'

export default function DiscountsCard({
  imagePath,
  discountName,
  shopName,
  rewardPointsGain,
  tokenAllocations,
  location,
}) {
  return (
    <div className=" mt-3 mr-2 ml-2 flex h-[25rem] w-full grid-cols-2 flex-col rounded-2xl bg-white p-4 shadow-lg duration-300 ease-linear dark:bg-slate-800 dark:shadow-slate-700 md:h-[25rem] md:w-[28rem] ">
      <div className=" relative h-full w-full  basis-2/3 rounded-2xl shadow-md">
        {/* <div className=" absolute z-10 rounded-tl-2xl rounded-br-2xl bg-[#5865F2] pl-8 pr-8 pb-2  pt-2 font-semibold text-white">
          <h1>NEW</h1>
        </div> */}
        <div className="relative h-full w-full rounded-2xl border-2 border-white">
          {imagePath && (
            <Image
              src={imagePath}
              alt="thumbnail"
              layout="fill"
              objectFit="cover"
              className=" rounded-2xl"
            />
          )}
        </div>
      </div>

      <div className=" mr-2 rounded-2xl ">
        <div className="flex max-w-6xl justify-between">
          <p className="mt-3 ml-2 mr-2 text-lg font-bold text-secondary">
            {shopName}
          </p>
          <div className="mt-3 mr-1 flex flex-row items-center justify-end space-x-4">
            <button
              className=" flex flex-row items-center justify-center "
              onClick={() =>
                router.push('../../discountsAvailable/FDiscountsAvailableList')
              }
            >
              <MdRedeem className=" h-6 w-6 text-icon hover:text-hover" />
            </button>
            <button
              className=" flex flex-row items-center justify-center "
              onClick={() => {}}
            >
              <FaCommentDots className="ml-2 h-6 w-6 text-icon hover:text-hover" />
            </button>
            <button
              className=" flex flex-row items-center justify-center "
              onClick={() => router.push('../Vote')}
            >
              <FaVoteYea className="ml-2 h-6 w-6 text-icon hover:text-hover" />
            </button>
            <button
              className=" flex flex-row items-center justify-center "
              onClick={() => {}}
            >
              <MdBookmarks className="ml-2 h-6 w-6 text-icon hover:text-hover" />
            </button>
          </div>
        </div>
        <h1 className="mt-1 ml-2 mr-2 break-words text-xl font-bold text-primary dark:text-white">
          {discountName}
        </h1>

        <div className=" flex flex-row flex-wrap space-x-2 pt-1 pr-4 pl-2">
          <div className="mt-2 flex flex-row items-center">
            <MdRedeem className="text-miniIcon" size={17} />
            <h1 className="pl-1 text-sm dark:text-white">
              {rewardPointsGain + ' points'}
            </h1>
          </div>
          <div className="mt-2 flex flex-row items-center">
            <MdOutlineGeneratingTokens className="text-miniIcon" size={17} />
            <h1 className="pl-1 text-sm text-sm text-black dark:text-white">
              {tokenAllocations + '% token'}
            </h1>
          </div>
          <div className="mt-2 flex flex-row items-center">
            <MdRoom size={17} color="red" className="dark:text-white" />
            <h1 className="pl-1 dark:text-white">{location}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
