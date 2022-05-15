import { Tab } from '@headlessui/react'
import Tabs from './Tabs'
import Reward from './Reward'
import { MdRedeem, MdOutlineExplore } from 'react-icons/md'
import { BsFillCameraFill } from 'react-icons/bs'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function BottomTabs() {
  return (
    <Tab.Group defaultIndex={2}>
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
          <div className="flex flex-col items-center justify-center">
            <MdRedeem size={20} />
            Rewards
          </div>
        </Tab>
        <Tab
          className={({ selected }) =>
            classNames(
              'rounded-3xl py-2.5 text-sm font-medium leading-5 text-[#5865F2]',
              'ring-offset-5 ring-white ring-opacity-60 ring-offset-blue-400 focus:outline-none focus:ring-2',
              selected
                ? 'bg-white px-10 shadow'
                : 'text-[#9499d4] hover:bg-white/[0.12] hover:text-white'
            )
          }
        >
          <div className="flex flex-col items-center justify-center">
            <BsFillCameraFill size={20} />
            Scan
          </div>
        </Tab>
        <Tab
          className={({ selected }) =>
            classNames(
              'rounded-3xl py-2.5 text-sm font-medium leading-5 text-[#5865F2]',
              'ring-offset-5 ring-white ring-opacity-60 ring-offset-blue-400 focus:outline-none focus:ring-2',
              selected
                ? 'bg-white px-10 shadow'
                : 'text-[#9499d4] hover:bg-white/[0.12] hover:text-white'
            )
          }
        >
          <div className="flex flex-col items-center justify-center">
            <MdOutlineExplore size={20} />
            Explore
          </div>
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <Reward />
        </Tab.Panel>
        <Tab.Panel></Tab.Panel>
        <Tab.Panel>
          <Tabs />
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

// Icons Options for Camera :

// RiCameraLensFill
// RiCameraLensLine
