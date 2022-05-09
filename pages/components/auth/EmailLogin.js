import { useRouter } from 'next/router'

export default function EmailLogin() {
  const router = useRouter()

  return (
    <>
      <div className="flex-auto px-4 py-10 pt-0 lg:px-10">
        <div className="mb-3 text-center font-bold text-gray-500">
          <small>Or sign in with email</small>
        </div>
        <form>
          <div className="relative mb-3 w-full">
            <label
              className="mb-2 block text-xs font-bold uppercase text-gray-700"
              htmlFor="grid-password"
            >
              Email
            </label>
            <input
              type="email"
              className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-gray-700 placeholder-gray-400 shadow focus:outline-none focus:ring"
              placeholder="Email"
            />
          </div>
          <div className="mt-6 text-center">
            <button
              className="mr-1 mb-1 w-full rounded bg-gray-900 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none hover:shadow-lg focus:outline-none active:bg-gray-700"
              type="button"
              onClick={() => router.push('/Tabs')}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
