import { dataShops } from '../../../data/dataShops'

export default function handler({ query: { id } }, res) {
  const filtered = dataShops.filter((dataShop) => dataShop.id === id)

  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `Shop with the id of ${id} is not found` })
  }
}
