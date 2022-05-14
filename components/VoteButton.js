import { FaPlay } from 'react-icons/fa'
import { useRouter } from 'next/router'

function VoteButton({ routePath }) {
  const router = useRouter()
  return (
    <div>
      <div className="mt-10 flex flex-row ">
        <button
          onClick={() => router.push(`${routePath}`)}
          className=" flex flex-row items-center justify-center  rounded-xl bg-[#5865F2] px-10 py-2 shadow-md shadow-[#5865f28a] duration-300 ease-linear hover:bg-[#424bb6] md:m-2"
        >
          {/* <FaPlay className="animate-ping" size={10} color="#fff" /> */}
          <h1 className="text-md flex font-semibold text-white">
            Vote for more Reward Points
          </h1>
        </button>
      </div>
    </div>
  )
}

export default VoteButton
