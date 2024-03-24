import { InitApp } from '../firebase'
import { getAuth } from 'firebase/auth'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

InitApp()

const dbF = getFirestore()
const uidText = document.getElementById('app-uid') as HTMLSpanElement

const content = document.getElementById('app-content') as HTMLDivElement

;(content as HTMLElement)!.style.display = 'none'

getAuth().onAuthStateChanged(async (user) => {
  // Check if user is logged in
  if (user === null) {
    // User is not logged in
    window.location.href = '/auth/signin.html'
    return
  }

  // Check if user is banned
  const userDoc = await getDoc(doc(dbF, 'raichat-user-status', user.uid))
  if (userDoc.exists()) {
    if (userDoc.data().banned === false) {
      // User is not banned
      console.log('User is not banned')
      window.location.href = '/chat/'
    }
  }

  // User is banned
  console.log('User is banned')
  uidText.textContent = user.uid
  ;(content as HTMLElement)!.style.display = 'block'
})
