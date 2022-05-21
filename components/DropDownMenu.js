import Image from 'next/image'
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { MdLanguage, MdHistory, MdLogout } from 'react-icons/md'

import { ChevronDownIcon } from '@heroicons/react/solid'

export default function PopUpMenu() {
  return (
    // <div className="w-106 top-106 fixed text-right">
    <Menu as="div" className="relative inline-block text-left">
      <div className="flex-row ">
         <Menu.Button className="inline-flex w-[8rem] justify-center rounded-md bg-slate-100 bg-opacity-90 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <div className="my-1 flex flex-row items-center justify-center space-x-3">
              USD
              <div className="ml-3">
            <Image
            src="/img/flag/us-flag.webp"
            alt="thumbnail"
            width={15}
            height={10}
            // layout="fill"
            objectFit="cover"
            className="ml-5"
          />

              </div>
            <ChevronDownIcon 
              className="mx-2 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
        </div>  
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    (active ? 'bg-violet-500 text-white' : 'text-violet-500', )
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  {active ? (
                    <MdHistory className="mr-2 h-5 w-5" aria-hidden="true" />
                  ) : (
                    <MdHistory className="mr-2 h-5 w-5" aria-hidden="true" />
                  )}
                  USD
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-violet-500 text-white' : 'text-violet-500 '
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  {active ? (
                    <MdLanguage className="mr-2 h-5 w-5" aria-hidden="true" />
                  ) : (
                    <MdLanguage className="mr-2 h-5 w-5" aria-hidden="true" />
                  )}
                  HKD
                </button>
              )}
            </Menu.Item>
          </div>

         
        </Menu.Items>
      </Transition>
    </Menu>
    // </div>
  )
}

//   <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
