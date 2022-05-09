import { dataBookmarks } from '../../../data/dataBookmarks'

export default function handler({ query: { id } }, res) {
  const filtered = dataBookmarks.filter(
    (dataBookmark) => dataBookmark.id === id
  )

  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res
      .status(404)
      .json({ message: `Bookmark with the id of ${id} is not found` })
  }
}
