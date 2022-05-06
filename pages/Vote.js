import RangeSlider from '../Component/RangeSlider'

export default function Vote() {
  return (
    <div>
      <RangeSlider
        initialMin={10}
        // initialMax={100}
        min={0}
        max={100}
        step={0}
        // priceCap={50}
      />
    </div>
  )
}
