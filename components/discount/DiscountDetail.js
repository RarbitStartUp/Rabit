import Image from 'next/image'
import {
  MdRoom,
  MdRedeem,
  MdBookmarks,
  MdOutlineGeneratingTokens,
} from 'react-icons/md'
import { FaCommentDots, FaVoteYea } from 'react-icons/fa'
import { useRouter } from 'next/router'
import CarouselDetail from '../Carousel/CarouselDetail'

export default function DiscountDetail({
  shopName,
  discountName,
  location,
  rewardPointsGain,
  tokenAllocations,
  imagePath,
  imagePath1,
  description,
}) {
  const router = useRouter()

  return (
    <div>
      {/* <div className="w-[20.5rem]basis-2/3 md:h-[20.5rem]border-2 mt-3 h-[30rem] rounded-2xl border-white shadow-md"> */}
      <div className=" ">
        <CarouselDetail imagePath={imagePath} imagePath1={imagePath1} />
        {/* 
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
        )} */}
      </div>

      <div className="ml-5">
        {/* ShopName and Categories */}
        <div className="mr-5 flex  max-w-6xl justify-between">
          <p className="mt-3 mr-2 ml-2 mb-1 text-lg font-bold text-secondary">
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
        <h1 className="m-2 text-xl font-bold text-primary dark:text-white">
          {discountName}
        </h1>

        {/* Subtile Details */}
        <div className="flex flex-row flex-wrap space-x-2">
          <div className="m-2 flex flex-row items-center">
            <MdRedeem size={17} className="text-miniIcon" />
            <h1 className="pl-1 text-sm dark:text-white">
              {rewardPointsGain + ' reward points gained per consumption'}
            </h1>
          </div>
          <div className="m-2 flex flex-row items-center">
            <MdOutlineGeneratingTokens size={17} className="text-miniIcon" />
            <h1 className="pl-1 text-sm dark:text-white">
              {tokenAllocations + ' % token'}
            </h1>
          </div>
          <div className="m-2 flex flex-row items-center">
            <MdRoom size={17} color="red" className="dark:text-white" />
            <h1 className="pl-1 text-sm dark:text-white">{location}</h1>
          </div>
        </div>
        <p className="text-md m-2 font-bold text-third">Discount Description</p>
        <p className="m-2 text-sm text-content">{description}</p>
        <p className="text-md mr-2 ml-2 mb-1 mt-5 font-bold text-third">
          Discount QR Code
        </p>
        <Image
          src={'/img/RarbitQRCode/RarbitQRCode.png'}
          alt="thumbnail"
          width={200}
          height={200}
          // layout="fill"
          objectFit="cover"
          // className=""
        />
      </div>
    </div>
  )
}
