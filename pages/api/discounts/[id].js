import { dataDiscounts } from '../../../data/dataDiscounts'

export default function handler({ query: { id } }, res) {
  const filtered = dataDiscounts.filter(
    (dataDiscount) => dataDiscount.id === id
  )

  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res
      .status(404)
      .json({ message: `Discount with the id of ${id} is not found` })
  }
}
