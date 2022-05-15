import { dataShops } from '../../../data/dataShops'

export default function handler(req, res) {
  res.status(200).json(dataShops)
}
