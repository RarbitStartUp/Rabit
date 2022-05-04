import React from 'react'
// import Image from 'next/Image'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  heartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline'
import { MdSort } from 'react-icons/md'
import { FilterIcon } from '@heroicons/react/solid'

function Header() {
  return (
    <div>
      {/* <div className="mx-5 flex max-w-6xl justify-between xl:mx-auto">
        <div className="relative  h-24 w-24 flex-shrink-0">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div> */}
      <div className="flex justify-between">
        <div className="max-w-xs pt-5 pl-5">
          <div className="relative mt-1 rounded-md">
            <div className="pointer-events-none absolute inset-y-0 flex items-center pl-3">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="sm-text-sm block w-full rounded-3xl border-[#5865F2] bg-gray-50 pl-10 focus:border-[#5865F2] focus:ring-[#5865F2]"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-end space-x-4 pr-8">
          <button
            className="m-auto mt-5 flex flex-row items-center justify-center rounded-xl bg-white p-2.5 shadow-md shadow-[#5865f28a] duration-300 ease-linear hover:bg-[#424bb6] md:m-2"
            onClick={() => {}}
          >
            <FilterIcon className="h-5 w-5 text-[#5865F2]" />
          </button>
          <button
            className="m-auto mt-5 flex flex-row items-center justify-center rounded-xl bg-white p-2.5 shadow-md shadow-[#5865f28a] duration-300 ease-linear hover:bg-[#424bb6] md:m-2"
            onClick={() => {}}
          >
            <MdSort className="h-5 w-5 text-[#5865F2]" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
