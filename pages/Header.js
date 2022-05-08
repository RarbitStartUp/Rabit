import React from 'react'
// import Image from 'next/Image'
import { SearchIcon } from '@heroicons/react/outline'
import { MdSort } from 'react-icons/md'
import { FilterIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import { signIn, signOut, useSession } from 'next-auth/react'

function Header() {
  const { data: session } = useSession()
  console.log(session)

  const router = useRouter()

  return (
    // Username & Profile Pic

    <div>
      {/* Google Sign in Button */}
      {/* {session ? (
        <div className="flex flex-row items-center space-x-3 pt-3 pl-5">
          <img
            onClick={signOut}
            src={session?.user?.image}
            alt="profile pic"
            className="h-10 w-10 cursor-pointer rounded-full"
          />
          <div className="text-lg font-semibold text-[#7d7f9e]">
            Welcome Back !
          </div>
          <div className="text-lg font-semibold text-[#5865F2]">
            {session?.user?.name}
          </div>
        </div>
      ) : (
        <button onClick={signIn}>Sign In</button>
      )} */}
      {/* <div className="mx-5 flex max-w-6xl justify-between xl:mx-auto">
        <div className="relative  h-24 w-24 flex-shrink-0">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div> */}
      <div className="flex  max-w-6xl justify-between">
        {/* Search Bar*/}
        <div className="max-w-xs pt-5 pl-5">
          <div className="relative rounded-md">
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

        {/* Right Side */}
        <div className="flex flex-row items-center justify-end space-x-4 pr-5">
          <button
            className="ml-3 mt-4 flex flex-row items-center justify-center rounded-xl bg-white p-2.5 shadow-md shadow-[#5865f28a] duration-300 ease-linear hover:bg-[#424bb6] "
            onClick={() => {}}
          >
            <FilterIcon className="h-5 w-5 text-[#5865F2]" />
          </button>
          <button
            className=" mt-4 flex flex-row items-center justify-center rounded-xl bg-white p-2.5 shadow-md shadow-[#5865f28a] duration-300 ease-linear hover:bg-[#424bb6] "
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
