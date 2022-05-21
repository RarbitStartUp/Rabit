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
    {
      img: `${imagePath}`,
      title: '',
    },
    {
      img: `${imagePath1}`,
      title: '',
    },
    {
      img: `${imagePath2}`,
      title: '',
    },
    {
      img: `${imagePath3}`,
      title: '',
    },
    {
      img: `${imagePath4}`,
      title: '',
    },
  ]

  return (
    <Box className="h-450 w-screen p-5" sx={{ overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {image.map((image) => (
          <ImageListItem key={image}>
            <img
              src={`${image.img}`}
              //   srcSet={`${image.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={image.title}
              loading="lazy"
              className="rounded-xl"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  )
}

// src={`${image.img}?w=248&fit=crop&auto=format`}
