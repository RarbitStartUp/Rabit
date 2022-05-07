import DiscountsList from './discounts/DiscountsList'

export default function DiscountsAvailable() {
  return (
    <div>
      {/* <div className="mt-10 flex min-h-screen flex-col items-center justify-center"> */}
      <div className="">
        <h1 className="ml-5 mt-10 text-2xl font-bold text-[#5865F2]">
          Discounts Available
        </h1>
        <div className=""></div>
        <DiscountsList />
      </div>
    </div>
  )
}
