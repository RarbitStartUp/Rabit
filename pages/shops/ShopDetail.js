import Image from 'next/image'

export default function ShopDetail({
  shopName,
  location,
  rewardPoints,
  categories,
  tokenAllocations,
  imageUrl,
}) {
  return (
    <div className="h-30 w-30">
      {imageUrl && (
        <Image
          src={imageUrl}
          alt="thumbnail"
          width={300}
          height={300}
          //   layout="fill"
          objectFit="cover"
          className="h-30 w-30"
        />
      )}
      <p className="m-2 text-lg font-bold text-[#5865F2]">{categories}</p>
      <h1 className="m-2 text-2xl font-bold dark:text-white">{shopName}</h1>
    </div>
  )
}
