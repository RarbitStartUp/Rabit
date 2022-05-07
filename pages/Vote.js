import RangeSlider3 from '../components/RangeSlider3'
import RewardTable from '../components/RewardTable'
import VoteButton from '../components/VoteButton'

export default function Vote() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <RangeSlider3 />
      <div className="mt-10"></div>
      <RewardTable />
      <VoteButton />
    </div>
  )
}
