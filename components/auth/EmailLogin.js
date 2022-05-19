import { useRouter } from 'next/router'

export default function EmailLogin() {
  const router = useRouter()

  return (
    <>
      <div className="flex-auto px-4 py-10 pt-0 lg:px-10">
        <div className="mb-3 text-center font-bold text-slate-500">
          <small>Or sign in with email</small>
        </div>
        <form>
          <div className="relative mb-3 w-full">
            <label
              className="mb-2 ml-1 block text-xs font-bold uppercase text-slate-700"
              htmlFor="grid-password"
            >
              Email
            </label>
            <input
              type="email"
              className=" focus:border-1 w-full rounded border-slate-100 bg-white px-3 py-3 text-sm text-slate-700 placeholder-slate-400 focus:border-primary"
              placeholder="Email"
            />
          </div>
          <div className="mt-6 text-center">
            <button
              className="mr-1 mb-1 w-full rounded bg-primary px-6 py-3 text-sm font-medium text-white shadow  hover:shadow-lg  active:bg-red-700"
              type="button"
              onClick={() => router.push('/Reward')}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
