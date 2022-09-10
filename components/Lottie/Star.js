import React, { useRef } from 'react'

export default function Star() {
  const ref = useRef(null)
  React.useEffect(() => {
    import('@lottiefiles/lottie-player')
  })
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <lottie-player
          id="firstLottie"
          ref={ref}
          autoplay
          controls
          loop
          mode="normal"
          src="https://assets4.lottiefiles.com/packages/97585-star.json"
          style={{ width: '300px', height: '300px' }}
        ></lottie-player>
      </main>
    </div>
  )
}
