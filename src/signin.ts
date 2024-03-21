/*
    Rai Website, a powerful tools, fun!
    ©2024 Rai and UpLauncher.

    Description: Signin module for the Rai Website.
*/

import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { moveToPanel } from './rai'
import { InitApp } from './firebase'

// Initialize Firebase
InitApp()
const auth = getAuth()

const SigninButton = document.getElementById('SigninSubmit') as HTMLButtonElement
const SigninError = document.getElementById('SigninError') as HTMLElement

const email = document.getElementById('LoginEmail') as HTMLInputElement
const password = document.getElementById('LoginPassword') as HTMLInputElement

document.addEventListener('DOMContentLoaded', () => {
  onAuthStateChanged(auth, (user) => {
    if (user !== null) {
      location.href = '/auth/panel.html'
    }
  })

  SigninButton.addEventListener('click', () => {
    if (email.value === '' || password.value === '') {
      showNotice(SigninError, '全てのフィールドを入力してください')
      return
    }

    signInWithEmailAndPassword(auth, email.value, password.value)
      .then(() => moveToPanel())
      .catch((error) => {
        const errorCode = error.code
        const errorContent = error.message

        if (errorCode == 'auth/user-not-found') {
          showNotice(SigninError, 'ユーザーが見つかりませんでした。')
        } else if (errorCode == 'auth/invalid-password' || errorCode == 'auth/invalid-credential') {
          showNotice(SigninError, 'パスワードが間違っています。')
        } else if (errorCode == 'auth/multi-factor-auth-required') {
          // Save email and password to session storage (reason: multi-factor authentication is required)
          window.sessionStorage.setItem('email', email.value)
          window.sessionStorage.setItem('password', password.value)

          window.location.href = '/auth/tfa-auth.html'
        } else if (errorCode == 'auth/too-many-requests') {
          showNotice(SigninError, 'リクエストが多すぎます。しばらくしてから再度お試しください。')
        } else if (errorCode == 'auth/invalid-email') {
          showNotice(SigninError, 'メールアドレスが無効です。')
        } else {
          showNotice(SigninError, errorContent)
        }
      })
  })

  function showNotice(element: HTMLElement, message: string) {
    element.classList.remove('is-hidden')

    const infoLabel = element.querySelector('label')
    if (infoLabel === null) throw new Error('No icon found')
    infoLabel.textContent = message
  }
})
