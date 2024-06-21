/*
    Rai Website, a powerful tools, fun!
    ©2024 Rai and UpLauncher.

    Description: Signin module for the Rai Website.
*/

import {
  GoogleAuthProvider,
  OAuthProvider,
  TotpMultiFactorGenerator,
  browserLocalPersistence,
  browserSessionPersistence,
  getAuth,
  getMultiFactorResolver,
  onAuthStateChanged,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth'
import { moveToPanel } from './rai'
import { auth } from './firebase'

const Signinbutton = document.getElementById('SigninSubmit') as HTMLButtonElement
const SigninGoogle = document.getElementById('SigninGoogle') as HTMLButtonElement
const SigninGitHub = document.getElementById('SigninGitHub') as HTMLButtonElement
const SigninMicrosoft = document.getElementById('SigninMicrosoft') as HTMLButtonElement
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
const continueTo = urlParams.get('continue_to')
const title = document.getElementById('LoginTitle') as HTMLElement
if (state === 'student') {
  title.textContent = 'ログインして学生連携を続行'
}

SigninGoogle.addEventListener('click', () => {
  loginWithProvider("google.com")
})

SigninMicrosoft.addEventListener('click', () => {
  loginWithProvider("microsoft.com")
})

SigninGitHub.addEventListener('click', () => {
  loginWithProvider("github.com")
})

Signinbutton.addEventListener('click', () => {
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

function loginWithProvider(providerId: string) {
  const provider = new OAuthProvider(providerId)
  signInWithPopup(auth, provider)
    .then(() => {
      if (state === 'student') {
        location.href = '/student/app/'
        return
      }

      if (continueTo) {
        location.href = continueTo
        return
      }

      moveToPanel()
    })
    .catch((error) => {
      showNotice(SigninError, error.message)
    })
}

function login() {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      if (state === 'student') {
        location.href = '/student/app/'
        return
      }

      if (continueTo) {
        location.href = continueTo
        return
      }

      moveToPanel()
    })
    .catch(async (error) => {
      const errorCode = error.code
      const errorContent = error.message

      if (errorCode == 'auth/user-not-found') {
        showNotice(SigninError, 'アカウントが見つかりませんでした。')
      } else if (errorCode == 'auth/invalid-password' || errorCode == 'auth/invalid-credential') {
        showNotice(SigninError, 'メールアドレスがパスワードが間違っています。')
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
      } else if (errorCode == 'auth/user-disabled') {
        showNotice(SigninError, 'このユーザーは、UpLauncherの管理者によって停止されました。')
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
