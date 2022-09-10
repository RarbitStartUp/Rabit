import Image from 'next/image'
import { FaCommentDots, FaVoteYea } from 'react-icons/fa'
import {
  MdRoom,
  MdBookmarks,
  MdRedeem,
  MdOutlineGeneratingTokens,
} from 'react-icons/md'
import CarouselCard from '../Carousel/CarouselCard'
import { useRouter } from 'next/router'

export default function DiscountsCard({
  imagePath,
  imagePath1,
  imagePath2,
  imagePath3,
  imagePath4,
  discountName,
  shopName,
  rewardPointsGain,
  tokenAllocations,
  location,
}) {
  const router = useRouter()

  return (
    // set the parent Components (in other files maybe) to "static" to avoid padding exceed the screen width and made the screen movable, "w-screen" needs to be on the same layer of the padding "pxy-"
    <div className="relative w-screen px-2 ">
      <div className=" mt-3 flex h-[28rem] grid-cols-2 flex-col rounded-2xl bg-white shadow-lg duration-300 ease-linear dark:bg-slate-800 dark:shadow-slate-700 md:h-[29rem] md:w-[25rem] md:rounded-2xl ">
        <div className="relative h-full w-full  basis-2/3 md:rounded-2xl">
          {/* <div className=" absolute z-10 rounded-tl-2xl rounded-br-2xl bg-[#5865F2] pl-8 pr-8 pb-2  pt-2 font-semibold text-white">
          <h1>NEW</h1>
        </div> */}
          <div className="relative h-full w-full">
            <CarouselCard
              imagePath={imagePath}
              imagePath1={imagePath1}
              imagePath2={imagePath2}
              imagePath3={imagePath3}
              imagePath4={imagePath4}
            />

            {/* {imagePath && (
            <Image
              src={imagePath}
              alt="thumbnail"
              layout="fill"
              objectFit="cover"
              className="md:rounded-t-2xl"
            />
          )} */}
          </div>
        </div>

        <div className="ml-3 mb-5">
          <div className=" mr-2 rounded-2xl ">
            <div className="flex max-w-6xl justify-between">
              <p className="text-md mx-2 mt-1 text-secondary">{shopName}</p>
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
                <MdOutlineGeneratingTokens
                  className="text-miniIcon"
                  size={17}
                />
                <h1 className="pl-1 text-sm text-black dark:text-white">
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
      </div>
    </div>
  )
}
