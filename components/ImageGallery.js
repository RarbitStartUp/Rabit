import * as React from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'

export default function MasonryImageList({
  imagePath,
  imagePath1,
  imagePath2,
  imagePath3,
  imagePath4,
}) {
  const image = [
    `${imagePath}`,
    `${imagePath1}`,
    `${imagePath2}`,
    `${imagePath3}`,
    `${imagePath4}`,
  ]

  return (
    <Box className="h-450 w-screen p-5" sx={{ overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {image.map((image) => (
          <ImageListItem key={image}>
            <img
              src={`${image}?w=248&fit=crop&auto=format`}
              // srcSet={`${image}?w=248&fit=crop&auto=format&dpr=2 2x`}
              // alt={image.title}
              loading="lazy"
              className="rounded-xl"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  )
}
