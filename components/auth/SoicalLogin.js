import { useRouter } from 'next/router'

export default function SoicalLogin() {
    const router = useRouter()

    const array = [
        { type: "Twitter", icon: "/img/social/twitter.svg", provider: () => router.push('/Tabs') },
        { type: "Google", icon: "/img/social/google.svg", provider: () => router.push('/Tabs') },
        { type: "Meta", icon: "/img/social/facebook.svg", provider: () => router.push('/Tabs') }
    ];

    return (
        <>
            <div className="rounded-t mb-0 px-6 pt-6">
                <div className="text-center mb-3">
                    <h6 className="text-gray-600 text-sm font-bold">Sign in with</h6>
                </div>
                <div className="btn-wrapper text-center">
                    {array.map(social =>
                        <button
                            className="bg-white active:bg-gray-100 text-gray-800 font-normal px-2 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                            type="button"
                            onClick={social.provider}
                        >
                            <img alt={social.type} src={social.icon} />
                        </button>

                    )}
                </div>
            </div>
        </>
    )
}