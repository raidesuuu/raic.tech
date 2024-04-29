/*
    Rai Website, a powerful tools, fun!
    ©2024 Rai and UpLauncher.

    Description: Signin module for the Rai Website.
*/

import { isSignInWithEmailLink, onAuthStateChanged, sendSignInLinkToEmail, signInWithEmailLink } from 'firebase/auth'
import { moveToPanel, showNotice } from './rai'
import { auth } from './firebase'

onAuthStateChanged(auth, (user) => {
  if (user !== null) {
    moveToPanel()
  }
})

if (isSignInWithEmailLink(auth, window.location.href)) {
  let email = window.localStorage.getItem('tempoaryEmail')
  if (!email) {
    document.getElementById("LinkFailed")?.classList.remove("is-hidden")
  } else {
    // The client SDK will parse the code from the link for you.
    signInWithEmailLink(auth, email || '', window.location.href)
      .then(() => {
        window.localStorage.removeItem('tempoaryEmail')
        moveToPanel()
      })
      .catch((error) => {
        console.error(error)
        document.getElementById("LinkFailed")?.classList.remove("is-hidden")
      })
  }
}
