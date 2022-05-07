import RangeSlider3 from '../Component/RangeSlider3'
import RewardTable from '../Component/RewardTable'

export default function Vote() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <RangeSlider3 />
      <RewardTable />
    </div>
  )
}
