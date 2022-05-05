import Card from './Card'

const shops = [
  {
    shopName: 'Sora Ramen',
    imageUrl:
      'https://images.unsplash.com/photo-1623341214825-9f4f963727da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    rewardPoints: 1011,
    tokenAllocations: 10,
    location: 'Central',
    description: 'Top Chief from Japan',
  },
  {
    shopName: 'Rim Cafe',
    imageUrl:
      'https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1937&q=80',
    rewardPoints: 2032,
    tokenAllocations: 20,
    location: 'Tsim Sha Shui',
    description: 'Best Coffee in the City',
  },
  {
    shopName: 'Aqua Spirit Bar',
    imageUrl:
      'https://images.unsplash.com/photo-1543007630-9710e4a00a20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
    rewardPoints: 1298,
    tokenAllocations: 15,
    location: 'Central',
    description: 'Top Bar in Hong Kong',
  },
]

export default function Shops() {
  return (
    <div className="mx-auto flex h-[20.5rem] w-[20.5rem] flex-col space-y-3 rounded-2xl bg-white pt-5 shadow-lg duration-300 ease-linear dark:bg-slate-800 dark:shadow-slate-700 md:h-[20.5rem] md:w-[50rem] ">
      {/* <div className="justify-center space-y-3 overflow-hidden"> */}
      {shops.map((shop) => (
        <Card
          key={shop.id}
          shopName={shop.shopName}
          categories={shop.categories}
          location={shop.location}
          rewardPoints={shop.rewardPoints}
          tokenAllocations={shop.tokenAllocations}
          imageUrl={shop.imageUrl}
          timestamp={shop.timestamp}
          email={shop.email}
        />
      ))}
    </div>
  )
}
