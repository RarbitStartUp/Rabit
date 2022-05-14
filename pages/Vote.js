import RangeSlider3 from '../components/RangeSlider3'
import RewardTable from '../components/RewardTable'
import VoteButton from '../components/VoteButton'

export default function Vote() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="mt-20"></div>
      <RangeSlider3 />
      <h1 className="mt-3 text-2xl font-bold text-[#5865F2]">
        % of Rarbit Token Allocations
      </h1>
      <h1 className="text-md mt-3 font-bold text-[#8689a4]">
        Vote for This Shop
      </h1>
      <div className="mt-5"></div>
      <RewardTable />
      <VoteButton routePath="/Login" />
    </div>
  )
}
