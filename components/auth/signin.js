import { getProviders, signIn } from 'next-auth/react'
// import Header from '../Header'

// Browser
export default function signin({ providers }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <>
        {/* <Header /> */}
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button
              className="m-2 rounded-lg bg-[#5865F2] p-2 text-white shadow-md"
              onClick={() => signIn(provider.id, { callbackUrl: '/Reward' })}
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </>
    </div>
  )
}

// Server ( SSR )
export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}
