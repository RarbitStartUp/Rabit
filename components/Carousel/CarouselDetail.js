import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import Swipe from 'react-easy-swipe'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

/**
 * Carousel component for nextJS and Tailwind.
 * Using external library react-easy-swipe for swipe gestures on mobile devices (optional)
 *
 * @param images - Array of images with src and alt attributes
 * @returns React component
 */
export default function CarouselDetail({
  imagePath,
  imagePath1,
  imagePath2,
  imagePath3,
  imagePath4,
}) {
  var images = [
    `${imagePath}`,
    `${imagePath1}`,
    `${imagePath2}`,
    `${imagePath3}`,
    `${imagePath4}`,

    // 'https://images.unsplash.com/photo-1623341214825-9f4f963727da?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFtZW58ZW58MHx8MHx8&auto=format&fit=crop&w=900',
    // 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhbWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900',
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  // const [trans, setTrans] = useState(false)
  // const [transR, setTransR] = useState(false)

  // useEffect(() => {
  //   if (transR) {
  //     setTimeout(() => {
  //       setTransR(false)
  //     }, 700)
  //   }

  //   if (trans) {
  //     setTimeout(() => {
  //       setTrans(false)
  //       // setIndex((index + 1) % images.length)
  //       // setIndex1((index1 + 1) % images.length)
  //     }, 800)
  //   }
  // }, [trans, transR])

  const handleNextSlide = () => {
    // setTrans(true)
    // setTransR(false)
    let newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1
    setCurrentSlide(newSlide)
  }

  const handlePrevSlide = () => {
    // setTransR(true)
    // setTrans(false)
    let newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1
    setCurrentSlide(newSlide)
  }

  return (
    <div>
      <div className="relative">
        <AiOutlineLeft
          size={30}
          onClick={handlePrevSlide}
          className="absolute inset-y-1/2 left-3 z-20 m-auto cursor-pointer text-white/50"
        />
        <div
          className={
            'relative m-auto flex h-[40vh] w-full overflow-hidden'
            // ${
            //   trans
            //     ? '-translate-x-full transform transition duration-500 ease-linear'
            //     : transR
            //     ? 'animate-slideL'
            //     : ''
            //   }`
          }
        >
          <Swipe
            onSwipeLeft={handleNextSlide}
            onSwipeRight={handlePrevSlide}
            className="relative z-10 h-full w-full"
          >
            {images.map((image, index) => {
              if (index === currentSlide) {
                return (
                  <Image
                    key={image.id}
                    src={image}
                    layout="fill"
                    objectFit="cover"
                    className="animate-fadeIn"
                  />
                )
              }
            })}
          </Swipe>
        </div>
        <AiOutlineRight
          size={30}
          onClick={handleNextSlide}
          className="absolute inset-y-1/2 right-3 z-20 m-auto cursor-pointer text-white/50 "
        />

        {/* dots */}
        <div className="relative bottom-5 z-20 flex justify-center">
          {/* <div className="relative flex justify-center pt-5"> */}
          {images.map((_, index) => {
            return (
              <div
                className={
                  index === currentSlide
                    ? 'mx-2 mb-2 h-2 w-2 cursor-pointer rounded-full bg-white/50'
                    : 'mx-2 mb-2 h-1.5 w-1.5 cursor-pointer rounded-full bg-white/30 '
                  // ? 'mx-2 mb-2 h-2 w-2 cursor-pointer rounded-full bg-primary'
                  // : 'mx-2 mb-2 h-1.5 w-1.5 cursor-pointer rounded-full bg-gray-300 '
                }
                key={index}
                onClick={() => {
                  setCurrentSlide(index)
                }}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

// const handleNextSlide = () => {

//   let newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1
//   setCurrentSlide(newSlide)
// }

// const handlePrevSlide = () => {

//   let newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1
//   setCurrentSlide(newSlide)
// }
