// import DropdownMenu from './DropDownMenu'
import TailwindRewardTable2 from '../components/TailwindRewardTable2'
import DatePicker from '../components/DatePicker'

export default function Records() {
  return (
    <div className="mt-5 flex flex-col items-center justify-center">
      <h1 className="mt-3 text-2xl font-bold text-primary">Records</h1>
      <div className="mt-10"></div>
      <DatePicker />
      <div className="mt-10"></div>
      {/* <DropdownMenu /> */}
      <TailwindRewardTable2 />
    </div>
  )
}
