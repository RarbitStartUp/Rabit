import { Tab } from '@headlessui/react'

import { MdRedeem } from 'react-icons/md'
import { AiTwotoneShop } from 'react-icons/ai'
import { RiBookMarkFill } from 'react-icons/ri'

import FShopsList from './shops/FShopsList'
import FDiscountsList from './discounts/FDiscountsList'
import FBookmarksList from './bookmarks/FBookmarksList'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function BottomTabs() {
  return (
    <Tab.Group>
      <Tab.List className="flex justify-around ">
        <Tab
          className={({ selected }) =>
            classNames(
              'rounded-3xl py-2.5 text-sm font-medium leading-5 text-[#5865F2]',
              'ring-offset-5 ring-white ring-opacity-60 ring-offset-blue-400 focus:outline-none focus:ring-2',
              selected
                ? 'bg-white px-10 shadow'
                : 'text-[#9499d4] hover:bg-white/[0.12] hover:text-white '
            )
          }
        >
          <div className="my-1 flex flex-row items-center justify-center">
            <AiTwotoneShop className="mr-2" size={20} />
            Shops
          </div>
        </Tab>
        <Tab
          className={({ selected }) =>
            classNames(
              'rounded-3xl py-2.5 text-sm font-medium leading-5 text-[#5865F2]',
              'ring-offset-5 ring-white ring-opacity-60 ring-offset-blue-400 focus:outline-none focus:ring-2',
              selected
                ? 'bg-white px-8 shadow'
                : 'text-[#9499d4] hover:bg-white/[0.12] hover:text-white'
            )
          }
        >
          <div className="flex flex-row items-center justify-center">
            <MdRedeem className="mr-2" size={20} />
            Discounts
          </div>
        </Tab>
        <Tab
          className={({ selected }) =>
            classNames(
              'rounded-3xl py-2.5 text-sm font-medium leading-5 text-[#5865F2]',
              'ring-offset-5 ring-white ring-opacity-60 ring-offset-blue-400 focus:outline-none focus:ring-2',
              selected
                ? 'bg-white px-8 shadow'
                : 'text-[#9499d4] hover:bg-white/[0.12] hover:text-white'
            )
          }
        >
          <div className="flex flex-row items-center justify-center">
            <RiBookMarkFill className="mr-2" size={20} />
            Bookmarks
          </div>
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <FShopsList />
        </Tab.Panel>
        <Tab.Panel>
          <FDiscountsList />
        </Tab.Panel>
        <Tab.Panel>
          <FBookmarksList />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  )
}

{
  /* <Tab
          className={({ selected }) =>
            classNames(
              ' rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
              selected
                ? 'bg-white shadow'
                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
            )
          }
        ></Tab> */
}
