import React from 'react'
import { MdLanguage, MdLogout } from 'react-icons/md'

function RewardHeader() {
  return (
    <div class="flex w-screen items-center justify-between">
      <div class="justify-start">
        <div class="py-7 pl-10 text-2xl font-bold text-gray-600">Rarbit</div>
      </div>

      {/* <div class="-my-2 -mr-2"> */}
      {/* <PopUpMenu /> */}
      <div className="flex flex-row justify-end pr-7">
        <MdLanguage
          className="mr-5 h-6 w-6 text-secondary"
          aria-hidden="true"
        />

        <MdLogout
          onClick={() => router.push('../Login')}
          className="mr-5 h-6 w-6 text-secondary"
          aria-hidden="true"
        />
      </div>
    </div>
  )
}

export default RewardHeader
