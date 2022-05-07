export default function DiscountsCard({ imagePath, discountName, shopName }) {
  return (
    <a
      // href="#"
      className="flex flex-row items-center rounded-lg border bg-white shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:max-w-xl md:flex-row"
    >
      <img
        className="h-15 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={imagePath}
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {discountName}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {shopName}
        </p>
      </div>
    </a>
  )
}
