import { useRouter } from 'next/router'
import SocialLogin from '../components/auth/SocialLogin'
import EmailLogin from '../components/auth/EmailLogin'

export default function Login() {
  const router = useRouter()

  return (
    <>
      <div className="h-screen bg-slate-100">
        <div className=" mx-auto h-full px-2">
          <div className="flex h-full content-center items-center justify-center">
            <div className="w-full px-4 lg:w-3/12">
              <div className="relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg border-0 bg-white shadow-lg">
                <SocialLogin />
                <div className="mb-0 rounded-t  pb-6">
                  <hr className="border-b-1 mt-6 bg-slate-100" />
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
