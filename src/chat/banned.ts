import { InitApp } from '../firebase'
import { getAuth } from 'firebase/auth'
import { collection, getDocs, getFirestore } from 'firebase/firestore'

InitApp()

const dbF = getFirestore()
const uidText = document.getElementById('app-uid') as HTMLSpanElement

getAuth().onAuthStateChanged(async (user) => {
  // Check if user is logged in
  if (user === null) {
    // User is not logged in
    window.location.href = '/auth/signin.html'
    return
  }

  // Check if user is banned
  const userDoc = await getDocs(collection(dbF, 'raichat-user-status' + user.uid))
  userDoc.forEach((doc) => {
    if (doc.data().banned == 'false') {
      // User is not banned
      console.log('User is not banned')
      window.location.href = '/chat/'
    }
  })
  if (userDoc.empty) {
    // User not found in database
    console.log('User not found in database')
    window.location.href = '/chat/'
  }

  // User is banned
  console.log('User is banned')
  uidText.textContent = user.uid
})
