import { useCollection } from 'react-firebase-hooks/firestore'
import { db } from '../firebase'
import 'firebase/firestore'
import firebase from 'firebase/app'
import Card from './Card'

export default function Shops() {
  const [realtimePosts] = useCollection(
    db.collection('shops').orderBy('timestamp', 'desc')
  )

  return (
    <div className="mx-auto flex justify-center space-y-3">
      {realtimePosts?.docs.map((shop) => (
        <Card
          key={shop.id}
          shopName={shop.data().shopName}
          categories={shop.data().categories}
          location={shop.data().location}
          rewardPoints={shop.data().rewardPoints}
          tokenAllocations={shop.data().tokenAllocations}
          imageUrl={shop.data().imageUrl}
          timestamp={shop.data().timestamp}
          email={shop.data().email}
        />
      ))}
    </div>
  )
}
