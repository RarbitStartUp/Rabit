// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import 'firebase/storage'
import 'firebase/firestore'
import firebase from 'firebase'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCnJyPNzkWThnN6l6kEIz2ze1MucuX2u64',
  authDomain: 'rarbit-1b28f.firebaseapp.com',
  projectId: 'rarbit-1b28f',
  storageBucket: 'rarbit-1b28f.appspot.com',
  messagingSenderId: '417715504277',
  appId: '1:417715504277:web:fbfcde149ee3d5bb19479c',
  measurementId: 'G-NEEPPB5WTJ',
}

// Initialize Firebase
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()
const analytics = getAnalytics(app)

const db = app.firestore()
const storage = firebase.storage()

export { db, storage }
