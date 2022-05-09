import { dataBookmarks } from '../../../data/dataBookmarks'

export default function handler(req, res) {
  res.status(200).json(dataBookmarks)
}
