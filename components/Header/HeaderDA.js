import React from 'react'
// import Image from 'next/Image'
import { SearchIcon } from '@heroicons/react/outline'
import { MdSort } from 'react-icons/md'
import { FilterIcon } from '@heroicons/react/solid'
import BackButton from '../BackButton/BackButton'

export default function HeaderDA() {
  return (
    <div className="fixed top-3 z-20 flex flex-row justify-between ">
      <div className="left-5 flex flex-row items-center justify-start space-x-3 ">
        <BackButton />
      </div>
      {/* Search Bar*/}
      <div className="pl-3">
        {/* <div className="relative mt-2 shadow"> */}
        <div className="pointer-events-none relative inset-y-1/2 flex items-center pl-3">
          <SearchIcon className="h-5 w-5 text-gray-500" />
        </div>
        <input
          className="sm-text-sm focus:border-1  w-full rounded-3xl  border-0 border-primary bg-gray-100 pl-10 placeholder-secondary shadow-inner focus:border-primary focus:ring-primary"
          type="text"
          placeholder="Search"
        />
        {/* </div> */}
      </div>

      {/* Right Side */}
      <div className="flex space-x-3 px-3 ">
        <button
          className="mt-5 flex rounded-xl bg-white/100 p-2.5 text-primary  duration-300 ease-linear hover:bg-primary hover:text-white "
          onClick={() => {}}
        >
          <FilterIcon className="h-5 w-5" />
        </button>
        <button
          className="mt-5 flex rounded-xl bg-white/100 p-2.5 text-primary  duration-300 ease-linear hover:bg-primary hover:text-white "
          onClick={() => {}}
        >
          <MdSort className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
