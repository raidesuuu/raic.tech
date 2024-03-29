/*
    Rai Website, a powerful tools, fun!
    ©2024 Rai and UpLauncher.

    Description: Signin module for the Rai Website.
*/

import {
  TotpMultiFactorGenerator,
  browserLocalPersistence,
  browserSessionPersistence,
  getAuth,
  getMultiFactorResolver,
  onAuthStateChanged,
  setPersistence,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { moveToPanel } from './rai'
import { InitApp } from './firebase'

// Initialize Firebase
InitApp()
const auth = getAuth()

const SigninButton = document.getElementById('SigninSubmit') as HTMLButtonElement
const SigninError = document.getElementById('SigninError') as HTMLElement
const SigninRemember = document.getElementById('SigninRemember') as HTMLInputElement

const email = document.getElementById('LoginEmail') as HTMLInputElement
const password = document.getElementById('LoginPassword') as HTMLInputElement
const tfa = document.getElementById('LoginTfa') as HTMLInputElement

onAuthStateChanged(auth, (user) => {
  if (user !== null) {
    location.href = '/auth/panel/home.html'
  }
})
const urlParams = new URLSearchParams(window.location.search)
const state = urlParams.get('continue_with')
const title = document.getElementById('LoginTitle') as HTMLElement
if (state === 'student') {
  title.textContent = 'ログインして学生連携を続行'
}

SigninButton.addEventListener('click', () => {
  if (email.value === '' || password.value === '') {
    showNotice(SigninError, '全てのフィールドを入力してください')
    return
  }

  if (SigninRemember.checked) {
    setPersistence(auth, browserLocalPersistence).then(() => {
      login()
    })
  } else {
    setPersistence(auth, browserSessionPersistence).then(() => {
      login()
    })
  }
})

function login() {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      if (state === 'student') {
        location.href = '/student/app/'
        return
      }
      moveToPanel()
    })
    .catch(async (error) => {
      const errorCode = error.code
      const errorContent = error.message

      if (errorCode == 'auth/user-not-found') {
        showNotice(SigninError, 'ユーザーが見つかりませんでした。')
      } else if (errorCode == 'auth/invalid-password' || errorCode == 'auth/invalid-credential') {
        showNotice(SigninError, 'パスワードが間違っています。')
      } else if (errorCode == 'auth/multi-factor-auth-required') {
        const mfaResolver = getMultiFactorResolver(getAuth(), error)

        const resolver = getMultiFactorResolver(auth, error)
        // Ask user which second factor to use.
        if (resolver.hints[0].factorId === TotpMultiFactorGenerator.FACTOR_ID) {
          const multiFactorAssertion = TotpMultiFactorGenerator.assertionForSignIn(mfaResolver.hints[0].uid, tfa.value)
          try {
            await mfaResolver.resolveSignIn(multiFactorAssertion).then(() => {
              if (state === 'student') {
                location.href = '/student/app/'
                return
              }
              moveToPanel() // Move to panel
            })
          } catch (e) {
            showNotice(SigninError, '無効な認証コードです。もう一度お試しください。')
          }
        }
      } else if (errorCode == 'auth/too-many-requests') {
        showNotice(SigninError, 'リクエストが多すぎます。しばらくしてから再度お試しください。')
      } else if (errorCode == 'auth/invalid-email') {
        showNotice(SigninError, 'メールアドレスが無効です。')
      } else {
        showNotice(SigninError, errorContent)
      }
    })
}

function showNotice(element: HTMLElement, message: string) {
  element.classList.remove('is-hidden')

  const infoLabel = element.querySelector('label')
  if (infoLabel === null) throw new Error('No icon found')
  infoLabel.textContent = message
}
