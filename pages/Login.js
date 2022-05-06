import { useRouter } from 'next/router'

import SoicalLogin from './auth/components/SoicalLogin'
import EmailLogin from './auth/components/EmailLogin'

export default function Login() {
  const router = useRouter()

  return (
    <>
      <div className="h-screen bg-gray-100">
        <div className=" mx-auto px-2 h-full bg-gray-900">
          <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-3/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                <SoicalLogin />
                <div className="rounded-t mb-0  pb-6">
                  <hr className="mt-6 border-b-1 border-gray-400" />
                </div>
                <EmailLogin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
