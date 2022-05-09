import { dataDiscounts } from '../../../data/dataDiscounts'

export default function handler(req, res) {
  res.status(200).json(dataDiscounts)
}
