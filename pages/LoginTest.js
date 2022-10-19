import { useSession, signIn, signOut } from 'next-auth/react'

import React from 'react'
// import SignIn from './SignIn'

function SocialLogin() {
  const { data: session } = useSession()
  if (session) {
    return (
      <div>
        <p>Hi, {session.user.name}</p>
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    )
  } else {
    return (
      <div>
        <p> you are not signed in.</p>
        <button onClick={() => signIn()}>Sign in</button>
      </div>
    )
  }
}

export default SocialLogin
