import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

export default function Carousel1() {
  const [index, setIndex] = useState(0)
  const [index1, setIndex1] = useState(1)
  const [trans, setTrans] = useState(false)
  const [transR, setTransR] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (transR) {
      setTimeout(() => {
        setTransR(false)
      }, 700)
    }

    if (trans) {
      setTimeout(() => {
        setTrans(false)
        setIndex((index + 1) % images.length)
        setIndex1((index1 + 1) % images.length)
      }, 700)
    }
  }, [trans, transR])

  const images = [
    'https://images.unsplash.com/photo-1623341214825-9f4f963727da?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFtZW58ZW58MHx8MHx8&auto=format&fit=crop&w=900',
    'https://images.unsplash.com/photo-1557872943-16a5ac26437e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhbWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900',
  ]

  const handlePrev = () => {
    setTransR(true)
    setTrans(false)
    const nextIndex = index - 1
    const nextIndex1 = index1 - 1

    if (nextIndex1 < 0) {
      setIndex1(images.length - 1)
    } else {
      setIndex1(nextIndex1)
    }

    if (nextIndex < 0) {
      setIndex(images.length - 1)
    } else {
      setIndex(nextIndex)
    }
  }
  const handleNext = () => {
    setTrans(true)
    setTransR(false)
  }

  const handleImgClick = (idx) => {
    setActiveIndex(idx)
    if (idx === index) {
      return
    }
    if (idx < index) {
      setIndex(idx)
      setIndex1(idx + 1)
      setTransR(true)
      setTrans(false)
    } else {
      setIndex((idx - 1) % images.length)
      setIndex1(idx % images.length)
      handleNext()
    }
  }

  return (
    <>
      {images.length > 0 ? (
        <>
          <div className="relative">
            <AiOutlineLeft
              size={30}
              onClick={handlePrev}
              className="absolute inset-y-1/2 left-3 z-20 m-auto cursor-pointer text-white/50"
            />
            <div className="relative m-auto flex h-full w-full overflow-hidden md:w-[40rem]">
              <Image
                className={` ${
                  trans
                    ? '-translate-x-full transform transition duration-500 ease-linear'
                    : transR
                    ? 'animate-slideL'
                    : ''
                }`}
                src={images[index]}
                layout="fill"
                objectFit="cover"
                alt=""
              />
              <img
                className={` ${
                  trans
                    ? 'animate-slideR'
                    : transR
                    ? 'translate-x-full transform transition duration-500 ease-linear'
                    : ''
                }`}
                src={images[index1]}
                alt=""
              />
            </div>
            <AiOutlineRight
              size={30}
              onClick={handleNext}
              className="absolute inset-y-1/2 right-3 z-20 m-auto cursor-pointer text-white/50"
            />
          </div>

          <div className="mx-auto mt-3 flex w-1/2 justify-center space-x-4 ">
            {images.map((el, idx) => {
              return (
                <div key={el.name + idx + el.name}>
                  <img
                    onClick={() => handleImgClick(idx)}
                    className={`h-20 w-20 border-b-8 pb-4 ${
                      images[activeIndex] === images[idx]
                        ? 'border-primary'
                        : 'border-secondary opacity-70'
                    } `}
                    src={`${el.name}`}
                    alt=""
                  />
                </div>
              )
            })}
          </div>
        </>
      ) : (
        'no images yet'
      )}
    </>
  )
}
