import { useRouter } from 'next/router'
<<<<<<< HEAD
import SoicalLogin from './components/auth/SoicalLogin'
import EmailLogin from './components/auth/EmailLogin'
=======
import SocialLogin from './auth/components/SocialLogin'
import EmailLogin from './auth/components/EmailLogin'
>>>>>>> 4e85b244f9da251778e9b2d91dfb72323fb48439

export default function Login() {
  const router = useRouter()

  return (
    <>
      <div className="h-screen bg-gray-100">
        <div className=" mx-auto h-full bg-gray-900 px-2">
          <div className="flex h-full content-center items-center justify-center">
            <div className="w-full px-4 lg:w-3/12">
              <div className="relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg border-0 bg-gray-300 shadow-lg">
                <SocialLogin />
                <div className="mb-0 rounded-t  pb-6">
                  <hr className="border-b-1 mt-6 border-gray-400" />
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
