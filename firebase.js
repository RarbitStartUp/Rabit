// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

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
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
