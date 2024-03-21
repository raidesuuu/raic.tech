/*
    Rai Website, a powerful tools, fun!
    ©2024 Rai and UpLauncher.

    Description: TFA module for the Rai Website.
*/

import {
  getAuth,
  getMultiFactorResolver,
  TotpMultiFactorGenerator,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from '@firebase/auth'
import { moveToPanel } from './rai'
import { InitApp } from './firebase'

// Initialize Firebase
InitApp()
const auth = getAuth()

const tfaCode = document.getElementById('tfaCode') as HTMLInputElement
const tfaSubmit = document.getElementById('tfaSubmit') as HTMLButtonElement

const tfaError = document.getElementById('tfaError') as HTMLElement

if (tfaSubmit == null || tfaCode == null) {
  throw new Error('[P1: ERROR (tfa.ts)] Element not found')
}

onAuthStateChanged(auth, () => {
  tfaSubmit.addEventListener('click', () => {
    signInWithEmailAndPassword(
      auth,
      window.sessionStorage.getItem('email') || 'Eメールの取得に失敗しました。',
      window.sessionStorage.getItem('password') || 'パスワードの取得に失敗しました。',
    ).catch(async function (error) {
      if (error.code == 'auth/multi-factor-auth-required') {
        const mfaResolver = getMultiFactorResolver(getAuth(), error)

        const resolver = getMultiFactorResolver(auth, error)
        // Ask user which second factor to use.
        if (resolver.hints[0].factorId === TotpMultiFactorGenerator.FACTOR_ID) {
          const multiFactorAssertion = TotpMultiFactorGenerator.assertionForSignIn(
            mfaResolver.hints[0].uid,
            tfaCode.value,
          )
          try {
            await mfaResolver.resolveSignIn(multiFactorAssertion).then(() => {
              moveToPanel() // Move to panel
            })
          } catch (e) {
            showNotice(tfaError, '無効な認証コードです。もう一度お試しください。')
          }
        }
      } else if (error.code == 'auth/wrong-password') {
        window.location.href = '/auth/login.html'
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
