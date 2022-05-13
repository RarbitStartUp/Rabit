import { useRouter } from 'next/router'

export default function SocialLogin() {
  const router = useRouter()

  const array = [
    {
      type: 'Twitter',
      icon: '/img/social/twitter.svg',
      provider: () => router.push('/BottomTabs'),
    },
    {
      type: 'Google',
      icon: '/img/social/google.svg',
      provider: () => router.push('/BottomTabs'),
    },
    {
      type: 'Meta',
      icon: '/img/social/facebook.svg',
      provider: () => router.push('/BottomTabs'),
    },
  ]

  return (
    <>
      <div className="mb-0 rounded-t px-6 pt-6">
        <div className="mb-3 text-center">
          <h6 className="text-sm font-bold text-gray-600">Sign in with</h6>
        </div>
        <div className="btn-wrapper text-center">
          {array.map((social) => (
            <button
              className="mr-2 mb-1 inline-flex items-center rounded bg-white px-2 py-2 text-xs font-normal font-bold uppercase text-gray-800 shadow outline-none hover:shadow-md focus:outline-none active:bg-gray-100"
              type="button"
              onClick={social.provider}
            >
              <img alt={social.type} src={social.icon} />
            </button>
          ))}
        </div>
      </div>
    </>
  )
}
