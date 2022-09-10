import React from 'react'
import { useRouter } from 'next/router'
import { BiArrowBack } from 'react-icons/bi'

export default function BackButtonDetailPage() {
  const router = useRouter()
  return (
    <div>
      <button
        className="m-auto ml-4 mt-5 flex flex-row items-center justify-center rounded-full bg-slate-100/20 p-2.5 text-white duration-300  ease-linear hover:bg-primary hover:text-white md:hidden "
        onClick={() => router.back()}
      >
        <BiArrowBack className="h-5 w-5" />
      </button>
    </div>
  )
}
