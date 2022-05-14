import Image from 'next/image'
import { FaRegComment, FaCommentDots } from 'react-icons/fa'
import { MdRoom, MdRedeem } from 'react-icons/md'

export default function DiscountsCard({
  imagePath,
  discountName,
  shopName,
  rewardPointsGain,
  location,
}) {
  return (
    <div className=" mt-3 mr-2 ml-2 flex h-[20rem] w-full grid-cols-2 flex-col rounded-2xl bg-white p-4 shadow-lg duration-300 ease-linear dark:bg-slate-800 dark:shadow-slate-700 md:h-[20.5rem] md:w-[50rem] md:flex-row-reverse">
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
        <div className="mr-5 flex max-w-6xl justify-between">
          <p className="mt-3 mr-2 ml-2 mb-1 text-lg font-bold text-[#5865F2]">
            {discountName}
          </p>
          {/* Icons Buttons */}
          <div className="mt-3 mr-1 flex flex-row items-center justify-end space-x-4">
            <button
              className=" flex flex-row items-center justify-center "
              onClick={() => router.push('../discountsDetail/DiscountsList')}
            >
              <FaCommentDots className=" h-7 w-7 text-[#5865F2] hover:text-[#424bb6]" />
            </button>
          </div>
        </div>

        <div className=" flex flex-row flex-wrap justify-between pt-1 pr-4 pl-2">
          <div className="flex flex-row items-center">
            <MdRedeem className="" size={20} color="#5865F2" />
            <h1 className="pl-2 dark:text-white">
              {rewardPointsGain + ' reward points gained per consumption'}
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}
