// export default function DiscountsCard({ imagePath, discountName, shopName }) {
//   return (
//     <a
//       // href="#"
//       className="flex flex-row items-center rounded-lg border bg-white shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:max-w-xl md:flex-row"
//     >
//       <img
//         className="w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
//         src={imagePath}
//         alt=""
//       />
//       <div className="flex flex-col justify-between p-4 leading-normal">
//         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//           {discountName}
//         </h5>
//         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//           {shopName}
//         </p>
//       </div>
//     </a>
//   )
// }

import Image from 'next/image'
import { FaDollarSign, FaRegComment } from 'react-icons/fa'
import { MdRoom, MdBookmarks, MdFavorite, MdRedeem } from 'react-icons/md'
import { FaPlay } from 'react-icons/fa'

export default function Card({
  imagePath,
  discountName,
  shopName,
  rewardPointsGain,
  location,
}) {
  return (
    <div className=" mt-3 mr-2 ml-2 flex h-[25rem] w-full grid-cols-2 flex-col rounded-2xl bg-white p-4 shadow-lg duration-300 ease-linear dark:bg-slate-800 dark:shadow-slate-700 md:h-[20.5rem] md:w-[50rem] md:flex-row-reverse">
      <div className=" relative h-full w-full  basis-2/3 rounded-2xl shadow-md">
        <div className=" absolute z-10 rounded-tl-2xl rounded-br-2xl bg-[#5865F2] pl-8 pr-8 pb-2  pt-2 font-semibold text-white">
          <h1>NEW</h1>
        </div>
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
        <p className="m-2 text-lg font-bold text-[#5865F2]">{discountName}</p>
        {/* <h1 className="m-2 text-2xl font-bold dark:text-white">
          {discountName}
        </h1> */}

        <div className=" flex flex-row flex-wrap justify-around pt-1 pr-4 pl-2">
          <div className="m-2 flex flex-row items-center">
            <MdRedeem size={20} color="#5865F2" />
            <h1 className="pl-1 dark:text-white">
              {rewardPointsGain + ' points would be gained per consumption'}
            </h1>
          </div>
          {/* <div className="m-2 flex flex-row items-center">
            <FaDollarSign size={20} color="#5865F2" />
            <h1 className="pl-1 dark:text-white">
              {tokenAllocations + ' % token'}
            </h1>
          </div> */}
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
