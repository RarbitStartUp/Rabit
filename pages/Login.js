import { useRouter } from 'next/router'
import SocialLogin from './auth/SocialLogin'
import EmailLogin from './auth/EmailLogin'
import { BsFillPersonFill } from 'react-icons/bs'
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
                <hr className="border-b-1 mt-3 bg-slate-100" />

                <div className="flex-auto px-4 py-5 lg:px-10">
                  <div className="mb-3 text-center font-bold text-slate-500">
                    <small>Or take a tour without sign in</small>
                  </div>

                  <button
                    className="mr-1 mb-1 w-full rounded border border-primary bg-white px-6 py-3 text-sm font-medium text-primary shadow  hover:shadow-lg "
                    type="button"
                    onClick={() => router.push('/Reward')}
                  >
                    <div className="flex flex-row items-center justify-center space-x-2">
                      <div>Visitors</div>
                      <BsFillPersonFill />
                    </div>
                  </button>
                </div>
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
