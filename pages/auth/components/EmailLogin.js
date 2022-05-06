import { useRouter } from 'next/router'

export default function EmailLogin() {
    const router = useRouter()

    return (
        <>
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
        </>
    )
}