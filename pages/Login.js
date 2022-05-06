import { useRouter } from 'next/router'

export default function Login() {
  const router = useRouter()

  return (
    <>
      <div className="h-screen bg-gray-100">
        <div className=" mx-auto px-2 h-full bg-gray-900">
          <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-3/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                <div className="rounded-t mb-0 px-6 py-6">
                  <div className="text-center mb-3">
                    <h6 className="text-gray-600 text-sm font-bold">
                      Sign in with
                    </h6>
                  </div>
                  <div className="btn-wrapper text-center">
                    <button
                      className="bg-white active:bg-gray-100 text-gray-800 font-normal px-2 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                      type="button"
                      onClick={() => router.push('/Listing')}
                    >
                      <img alt="..." src="/img/social/twitter.svg" />
                    </button>
                    <button
                      className="bg-white active:bg-gray-100 text-gray-800 font-normal px-2 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                      type="button"
                      onClick={() => router.push('/Listing')}
                    >
                      <img alt="..." src="/img/social/google.svg" />
                    </button>
                    <button
                      className="bg-white active:bg-gray-100 text-gray-800 font-normal px-2 py-2 rounded outline-none focus:outline-none mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                      type="button"
                      onClick={() => router.push('/Listing')}
                    >
                      <img alt="..." src="/img/social/facebook.svg" />
                    </button>

                  </div>
                  <hr className="mt-6 border-b-1 border-gray-400" />
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <div className="text-gray-500 text-center mb-3 font-bold">
                    <small>Or sign in with email</small>
                  </div>
                  <form>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Email"

                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                        type="button"
                        onClick={() => router.push('/Listing')}
                      >
                        Sign In
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
