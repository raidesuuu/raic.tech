/*
    Rai Website, a powerful tools, fun!
    ©2024 Rai and UpLauncher.

    Description: Signup module for the Rai Website.
*/

import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword } from 'firebase/auth'
import { moveToPanel } from './rai'
import { auth } from './firebase'

const submit = document.getElementById('signup') as HTMLButtonElement

const error = document.getElementById('RegisterError')

const email = document.getElementById('RegisterEmail') as HTMLInputElement
const password = document.getElementById('RegisterPassword') as HTMLInputElement

if (submit == null || error == null || email == null || password == null) {
  throw new Error('[P1: ERROR (signup.ts)] Element not found')
}

onAuthStateChanged(auth, (user) => {
  if (user !== null) {
    location.href = '/auth/panel/subscriptions.html'
  }
})

submit.addEventListener('click', () => {
  if (email.value == '' || password.value == '') {
    showNotice(error, '全てのフィールドを入力してください')
    throw new Error('[P3: ERROR (signup.ts)] Email or password is not entered')
  }

  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(() => moveToPanel())
    .catch((errorInfo) => {
      const errorCode: string = errorInfo.code
      let errorMessage: string = errorInfo.message

      // Remove 'Firebase: Error ' from the error message
      errorMessage = errorMessage.replace('Firebase: Error ', '')

      // Set error message

      if (errorCode == 'auth/email-already-in-use') {
        showNotice(error, 'このメールアドレスは既に使用されています。')
      } else if (errorCode == 'auth/invalid-email') {
        showNotice(error, 'メールアドレスが無効です。')
      } else if (errorCode == 'auth/weak-password') {
        showNotice(error, 'パスワードが弱すぎます。(6文字以上が必要です)')
      } else {
        showNotice(error, errorMessage)
      }
    })

  function showNotice(element: HTMLElement, message: string) {
    element.classList.remove('is-hidden')

    const infoLabel = element.querySelector('label')
    if (infoLabel === null) throw new Error('No icon found')
    infoLabel.textContent = message
  }
})
