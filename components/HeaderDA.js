import React from 'react'
// import Image from 'next/Image'
import { SearchIcon } from '@heroicons/react/outline'
import { MdSort } from 'react-icons/md'
import { FilterIcon } from '@heroicons/react/solid'

export default function HeaderDA() {
  return (
    <div className="fixed top-3 z-20 flex ">
      {/* Search Bar*/}
      <div className="pl-5 ">
        {/* <div className="relative mt-2 shadow"> */}
        <div className="pointer-events-none relative inset-y-1/2 flex items-center pl-3">
          <SearchIcon className="h-5 w-5 text-gray-500" />
        </div>
        <input
          className="sm-text-sm focus:border-1  w-full rounded-3xl  border-0 border-primary bg-gray-50/90 pl-10 placeholder-secondary shadow-inner focus:border-primary focus:ring-primary"
          type="text"
          placeholder="Search"
        />
        {/* </div> */}
      </div>

      {/* Right Side */}
      <div className="fixed right-5 flex flex-row items-center justify-end space-x-3 ">
        <button
          className="m-auto ml-4 mt-5 flex flex-row items-center justify-center rounded-xl bg-white/90 p-2.5 text-primary  duration-300 ease-linear hover:bg-primary hover:text-white "
          onClick={() => {}}
        >
          <FilterIcon className="h-5 w-5" />
        </button>
        <button
          className="m-auto mt-5 flex flex-row items-center justify-center rounded-xl bg-white/90 p-2.5 text-primary  duration-300 ease-linear hover:bg-primary hover:text-white "
          onClick={() => {}}
        >
          <MdSort className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
