import React, { useRef } from 'react'

export default function Star() {
  const playerRef = useRef(null)

  function play() {
    playerRef.current.play()
  }

  React.useEffect(() => {
    import('@lottiefiles/lottie-player')
  })

  return (
    // <div className={styles.container}>
    //   <main className={styles.main}>
    <div className="">
      <main className="">
        <lottie-player
          id="firstLottie"
          ref={playerRef}
          mode="normal"
          src="https://assets7.lottiefiles.com/packages/lf20_083h7wcs.json"
          style={{ width: '100px', height: '100px' }}
          //   onEvent={{}}
          onEvent={{ play }}
        ></lottie-player>
      </main>
    </div>
  )
}
