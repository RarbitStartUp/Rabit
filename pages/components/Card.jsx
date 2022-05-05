// import Image from 'next/image'
import { FaDollarSign, FaReact, FaRegComment } from 'react-icons/fa'
import {
  MdRoom,
  MdBookmarks,
  MdFavorite,
  MdRedeem,
  MdMoney,
} from 'react-icons/md'
import { SiTypescript } from 'react-icons/si'
import { AiOutlineClockCircle, AiOutlineComment } from 'react-icons/ai'
import { VscChecklist, VscLocation } from 'react-icons/vsc'
import { FaPlay } from 'react-icons/fa'
import { MoonIcon } from '@heroicons/react/solid'
import { SunIcon } from '@heroicons/react/solid'

// export default function Card({ toggle, setToggle }) {
export default function Card({
  shopName,
  location,
  rewardPoints,
  categories,
  tokenAllocations,
  imageUrl,
}) {
  // const url = Shops.image[0]?.url

  return (
    <div
      onClick={() => router.push('./components/CardDetail')}
      className="flex h-[100rem] w-[20.5rem] flex-col rounded-2xl bg-white p-4 shadow-lg duration-300 ease-linear dark:bg-slate-800 dark:shadow-slate-700 md:h-[20.5rem] md:w-[50rem] md:flex-row-reverse"
    >
      <div className=" relative h-full  w-full basis-2/3 rounded-2xl shadow-md">
        <div className=" absolute z-10 rounded-tl-2xl rounded-br-2xl bg-[#5865F2] pl-8 pr-8 pb-2  pt-2 font-semibold text-white">
          <h1>NEW</h1>
        </div>
        <div className="relative h-full w-full rounded-2xl border-2 border-white">
          {imageUrl && (
            <img
              src={imageUrl}
              alt="thumbnail"
              layout="fill"
              objectFit="cover"
              className=" rounded-2xl"
            />
          )}
        </div>
      </div>

      <div className=" mr-2 h-full w-full rounded-2xl ">
        <p className="m-2 pl-1 text-lg font-bold text-[#5865F2]">
          {categories}
        </p>
        <h1 className="m-2 text-2xl font-bold dark:text-white">{shopName}</h1>

        <div className=" flex flex-row flex-wrap justify-around pt-1 pr-4 pl-2">
          <div className="m-2 flex flex-row items-center">
            <MdRedeem size={20} color="#5865F2" />
            <h1 className="pl-1 dark:text-white">
              {rewardPoints + ' points'}{' '}
            </h1>
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

        <div className="flex flex-row">
          <button className="m-auto mt-3 mb-3 flex flex-row items-center justify-center  rounded-xl bg-[#5865F2] pt-2 pb-2 pl-6 pr-10 shadow-md shadow-[#5865f28a] duration-300 ease-linear hover:bg-[#424bb6] md:m-2">
            <FaPlay className="animate-ping" size={10} color="#fff" />
            <h1 className="text-md pl-4 font-semibold text-white">Vote</h1>
          </button>
          {/* <button
            className="m-auto mt-8 flex flex-row items-center justify-center rounded-xl bg-[#5865F2] p-2.5 shadow-md shadow-[#5865f28a] duration-300 ease-linear hover:bg-[#424bb6] md:m-2"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? (
              <MoonIcon className="h-5 w-5 text-white" />
            ) : (
              <SunIcon className="h-5 w-5 text-white" />
            )}
          </button> */}

          <button
            className="m-auto mb-3 mt-3 flex flex-row items-center justify-center rounded-xl bg-[#5865F2] p-2.5 shadow-md shadow-[#5865f28a] duration-300 ease-linear hover:bg-[#424bb6] md:m-2"
            onClick={() => {}}
          >
            <MdBookmarks className="h-5 w-5 text-white" />
          </button>

          <button
            className="m-auto mt-3 mb-3 flex flex-row items-center justify-center rounded-xl bg-[#5865F2] p-2.5 shadow-md shadow-[#5865f28a] duration-300 ease-linear hover:bg-[#424bb6] md:m-2"
            onClick={() => {}}
          >
            <MdFavorite className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}
