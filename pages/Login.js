import { useRouter } from 'next/router'
import SocialLogin from './auth/SocialLogin'
import EmailLogin from './auth/EmailLogin'
// import Testing from './LoginTest'

export default function Login() {
  const router = useRouter()

  return (
    <>
      <div className="h-screen bg-slate-100">
        <div className="mx-auto h-full px-2">
          <div className="flex h-full content-center items-center justify-center">
            <div className="w-full px-4 lg:w-3/12">
              <div className="relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg border-0 bg-white shadow-lg">
                <SocialLogin />
                {/* <Testing /> */}
                <div className="mb-0 rounded-t  pb-6">
                  <hr className="border-b-1 mt-6 bg-slate-100" />
                </div>
                <EmailLogin />
              </div>
              <button
                onClick={() => router.push('/TermsAndConditions')}
                className="absolute bottom-7 mt-5 justify-center text-sm font-bold text-slate-300"
              >
                Rarbit Ltd. - Terms and Conditions
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
