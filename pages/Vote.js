import RangeSlider3 from '../components/RangeSlider3'
import RewardTable2 from '../components/RewardTable2'

export default function Vote() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <RangeSlider3 />
      <div className="mt-10"></div>
      <RewardTable2 />
    </div>
  )
}
