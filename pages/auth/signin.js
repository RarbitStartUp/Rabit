export default function signIn() {
  return (
    <div>
      <h1>Sign in</h1>
    </div>
  )
}

export async function getServerSideProps() {
  const providers = getProviders()
}
