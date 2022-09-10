import React from 'react'
import { useLottie } from 'lottie-react'
import BookmarkStar from './JSON/BookmarkStar.json'

const App = () => {
  const options = {
    animationData: BookmarkStar,
    loop: false,
  }

  const { View } = useLottie(options)

  return <>{View}</>
}

export default App
