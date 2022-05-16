import React from 'react'
// import Image from 'next/Image'
import { SearchIcon } from '@heroicons/react/outline'
import { MdSort } from 'react-icons/md'
import { FilterIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import { signIn, signOut, useSession } from 'next-auth/react'

function Header() {
  const { data: session } = useSession()

  const router = useRouter()

  return (
    <div className="">
      <div className="mx-auto flex max-w-6xl justify-between">
        {/* Search Bar*/}
        <div className="max-w-xs pt-5 pl-5">
          <div className="relative mt-1 rounded-md">
            <div className="pointer-events-none absolute inset-y-0 flex items-center pl-3">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="sm-text-sm focus:border-1 block w-full rounded-3xl border-0 border-primary bg-gray-50 pl-10 placeholder-secondary focus:border-primary focus:ring-primary"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-row items-center justify-end space-x-3 pr-5">
          <button
            className="shadow-grey m-auto ml-2 mt-6 flex flex-row items-center justify-center rounded-xl bg-white p-2.5 text-primary shadow-md duration-300 ease-linear hover:bg-primary hover:text-white "
            onClick={() => {}}
          >
            <FilterIcon className="h-5 w-5" />
          </button>
          <button
            className="shadow-grey m-auto mt-6 flex flex-row items-center justify-center rounded-xl bg-white p-2.5 text-primary shadow-md duration-300 ease-linear hover:bg-primary hover:text-white "
            onClick={() => {}}
          >
            <MdSort className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
