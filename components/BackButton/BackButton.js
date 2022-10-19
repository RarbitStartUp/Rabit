import React from 'react'
import { useRouter } from 'next/router'
import { BiArrowBack } from 'react-icons/bi'

export default function BackButton() {
  const router = useRouter()
  return (
    <div>
      <button
        className="ml-4 mt-5 flex flex-row items-center justify-center rounded-xl bg-slate-100 p-2.5 text-slate-400 duration-300  ease-linear hover:bg-primary hover:text-white md:hidden "
        onClick={() => router.back()}
      >
        <BiArrowBack className="h-5 w-5" />
      </button>
    </div>
  )
}
