/*
    Rai Website, a powerful tools, fun!
    ©2024 Rai and UpLauncher.

    Description: Signin module for the Rai Website.
*/

import { sendPasswordResetEmail, getAuth, onAuthStateChanged } from 'firebase/auth'
import { moveToPanel } from './rai'
import { InitApp } from './firebase'

// Initialize Firebase
InitApp()
const auth = getAuth()

const ForgotSubmit = document.getElementById('ForgotSubmit') as HTMLButtonElement
const ForgotError = document.getElementById('ForgotError') as HTMLElement
const ForgotNotify = document.getElementById('ForgotNotify') as HTMLElement

const email = document.getElementById('ForgotEmail') as HTMLInputElement

onAuthStateChanged(auth, (user) => {
  if (user !== null) {
    moveToPanel()
  }
})

ForgotSubmit.addEventListener('click', () => {
  if (email.value === '') {
    showNotice(ForgotError, '全てのフィールドを入力してください')
    return
  }

  sendPasswordResetEmail(auth, email.value).then(() => {
    ForgotNotify.classList.remove('is-hidden')
  }).catch((error) => {
    showNotice(ForgotError, error.message)
  })
})

function showNotice(element: HTMLElement, message: string) {
  element.classList.remove('is-hidden')

  const infoLabel = element.querySelector('label')
  if (infoLabel === null) throw new Error('No icon found')
  infoLabel.textContent = message
}
