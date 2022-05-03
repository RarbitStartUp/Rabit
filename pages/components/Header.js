import React from 'react'
import Image from 'next/Image'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  heartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline'

function Header() {
  return (
    <div>
      <div className="mx-5 flex max-w-6xl justify-between xl:mx-auto">
        <div className="relative  h-24 w-24 flex-shrink-0">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>

      <div className="max-w-xs">
        <div className="relative mt-1 rounded-md">
          <div className="pointer-events-none absolute inset-y-0 flex items-center pl-3">
            <SearchIcon className="h-5 w-5 text-gray-500" />
          </div>
          <input
            className="sm-text-sm block w-full rounded-md border-gray-300 bg-gray-50 pl-10 focus:border-gray-300 focus:ring-gray-300"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
    </div>
  )
}

export default Header
