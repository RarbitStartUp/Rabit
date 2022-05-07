import DiscountsCard from './DiscountsCard'

const discounts = [
  {
    discountName: 'Buy One get One Free',
    imagePath:
      'https://images.unsplash.com/flagged/photo-1568625365032-32ebd987d414?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
    shopName: 'XTC Ice Cream',
    rewardPointsGain: 90,
    allocationsPercentage: 10,
    location: 'Central',
    description: 'Top Chief from Japan',
  },
  {
    discountName: 'Free Chicken Wings & Fries',
    imagePath:
      'https://images.unsplash.com/photo-1625937759420-26d7e003e04c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1521&q=80',
    shopName: 'California Kitchen',
    rewardPointsGain: 86,
    allocationsPercentage: 20,
    location: 'Tsim Sha Shui',
    description: 'Best Coffee in the City',
  },
  {
    discountName: 'Happy Hour 70% off',
    imagePath:
      'https://images.unsplash.com/photo-1485872299829-c673f5194813?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1460&q=80',
    shopName: 'Drift Land Bar',
    rewardPointsGain: 73,
    allocationsPercentage: 30,
    location: 'Causeway Bay',
    description: 'Top Bar in Hong Kong',
  },
]

export default function DiscountsList() {
  return (
    <div className="mx-auto flex-row justify-center space-y-3">
      {discounts.map((discount) => (
        <DiscountsCard
          discountName={discount.discountName}
          shopName={discount.shopName}
          imagePath={discount.imagePath}
          rewardPointsGain={discount.rewardPointsGain}
          allocationsPercentage={discount.allocationsPercentage}
          location={discount.location}
          description={discount.description}
        />
      ))}
    </div>
  )
}
