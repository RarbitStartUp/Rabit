import Link from 'next/link'
import { MdRedeem, MdOutlineExplore } from 'react-icons/md'
import { BsFillCameraFill } from 'react-icons/bs'

export default function BottomTabs() {
  return (
    <div>
      <nav class="fixed inset-x-0 bottom-0 flex justify-between bg-white/[0.95] text-sm text-secondary shadow">
        <Link href="/Reward">
          <a class="block w-full py-4 px-3 text-center text-primary transition duration-300 hover:text-primary">
            <div className="flex flex-col items-center justify-center">
              <MdRedeem size={20} />
              <div className="text-xs">Reward</div>
            </div>
          </a>
        </Link>

        <a
          href="#"
          class="block w-full py-4 px-3 text-center hover:text-primary"
        >
          <div className="flex flex-col items-center justify-center">
            <BsFillCameraFill size={20} />
             <div className="text-xs">Scan</div>
          </div>
        </a>

        <Link href="/Tabs">
          <a class="block w-full py-4 px-3 text-center hover:text-primary">
            <div className="flex flex-col items-center justify-center">
              <MdOutlineExplore size={20} />
              <div className="text-xs">Explore</div>
            </div>
          </a>
        </Link>
      </nav>
    </div>
  )
}
