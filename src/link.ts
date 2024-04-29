/*
    Rai Website, a powerful tools, fun!
    ©2024 Rai and UpLauncher.

    Description: Signin module for the Rai Website.
*/

import { sendPasswordResetEmail, getAuth, onAuthStateChanged, sendSignInLinkToEmail } from 'firebase/auth'
import { moveToPanel, showNotice } from './rai'
import { auth } from './firebase'

const LinkSubmit = document.getElementById('LinkSubmit') as HTMLButtonElement
const LinkError = document.getElementById('LinkError') as HTMLElement
const LinkNotify = document.getElementById('LinkSuccess') as HTMLElement

const email = document.getElementById('LinkEmail') as HTMLInputElement

onAuthStateChanged(auth, (user) => {
  if (user !== null) {
    moveToPanel()
  }
})

const actionCodeSettings = {
  url: `https://${window.location.hostname == '10.249.176.251' ? '10.249.176.251:8080' : 'raic.tech'}/auth/finishLink.html`,
  handleCodeInApp: true,
}

LinkSubmit.addEventListener('click', () => {
  if (email.value === '') {
    showNotice(LinkError, 'メールアドレスを入力してください。')
    return
  }

  sendSignInLinkToEmail(auth, email.value, actionCodeSettings)
    .then(() => {
      window.localStorage.setItem('tempoaryEmail', email.value)
      LinkNotify.classList.remove('is-hidden')
    })
    .catch((error) => {
      showNotice(LinkError, error.message)
    })
})
