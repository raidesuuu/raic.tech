/*
    Rai Website, a powerful tools, fun!
    ©2024 Rai and UpLauncher.

    Description: Remove account module for the Rai Website.
*/

import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  deleteUser,
  getAuth,
  multiFactor,
  onAuthStateChanged,
  getMultiFactorResolver,
  TotpMultiFactorGenerator,
  GoogleAuthProvider,
  reauthenticateWithPopup,
  UserCredential,
  OAuthProvider,
} from 'firebase/auth'
import { NotLoggedError } from '../rai'

import { auth } from '../firebase'

window.addEventListener('DOMContentLoaded', () => {
  const removePassword = document.getElementById('RemoveAccountPassword') as HTMLInputElement
  const removeGoogle = document.getElementById('RemoveAccountGoogle') as HTMLButtonElement
  const removeMicrosoft = document.getElementById('RemoveAccountMicrosoft') as HTMLButtonElement
  const removeGitHub = document.getElementById('RemoveAccountGitH') as HTMLButtonElement
  const removeAlert = document.getElementById('RemoveAccountAlert') as HTMLElement
  const removeCheck = document.getElementById('RemoveAccountVerify') as HTMLInputElement
  const removeSubmit = document.getElementById('RemoveAccountSubmit') as HTMLButtonElement
  const removeTfa = document.getElementById('RemoveAccountTFA') as HTMLButtonElement
  const removeTfaContainer = document.getElementById('RemoveAccountTFAContainer') as HTMLDivElement
  const removePasswordContainer = document.getElementById('RemoveAccountPasswordProvider') as HTMLDivElement

  let GoogleCredential = {} as UserCredential
  let MicrosoftCredential = {} as UserCredential
  let GitHubCredential = {} as UserCredential
  let isGoogleSigned = false
  let isMicrosoftSigned = false
  let isGitHubSigned = false

  if (
    removePassword === null ||
    removeAlert === null ||
    removeSubmit === null ||
    removeTfa === null ||
    removeTfaContainer === null ||
    removeCheck === null ||
    removePasswordContainer === null ||
    removeGoogle === null ||
    removeMicrosoft === null ||
    removeGitHub === null
  ) {
    console.error('[data.ts : P1]: No Required element found')

    return
  }

  onAuthStateChanged(auth, (user) => {
    if (user === null) {
      window.location.href = '/auth/signin.html'
      throw new NotLoggedError('User is not signed in')
    }

    if (multiFactor(user).enrolledFactors.length > 0) {
      removeTfaContainer.classList.remove('is-hidden')
    }

    if (user.providerData[0].providerId === 'google.com') {
      removePasswordContainer.classList.add('is-hidden')
      removeGoogle.classList.remove('is-hidden')

      removeGoogle.addEventListener('click', () => {
        const provider = new GoogleAuthProvider()
        reauthenticateWithPopup(user, provider).then((cred: UserCredential) => {
          GoogleCredential = cred // Update the type of GoogleCredential to Credential
          removeGoogle.disabled = true

          isGoogleSigned = true
        })
      })
    }

    if (user.providerData[0].providerId === 'microsoft.com') {
      removePasswordContainer.classList.add('is-hidden')
      removeMicrosoft.classList.remove('is-hidden')

      removeMicrosoft.addEventListener('click', () => {
        const provider = new OAuthProvider("microsoft.com")
        reauthenticateWithPopup(user, provider).then((cred: UserCredential) => {
          MicrosoftCredential = cred // Update the type of GoogleCredential to Credential
          removeMicrosoft.disabled = true

          isMicrosoftSigned = true
        })
      })
    }

    if (user.providerData[0].providerId === 'github.com') {
      removePasswordContainer.classList.add('is-hidden')
      removeGitHub.classList.remove('is-hidden')

      removeGitHub.addEventListener('click', () => {
        const provider = new OAuthProvider("github.com")
        reauthenticateWithPopup(user, provider).then((cred: UserCredential) => {
          GitHubCredential = cred // Update the type of GoogleCredential to Credential
          removeGitHub.disabled = true

          isGitHubSigned = true
        })
      })
    }


    removeCheck.addEventListener('change', (e) => {
      if (user.providerData[0].providerId === 'google.com' && !isGoogleSigned) {
        e.preventDefault()
        removeCheck.checked = false
      }
      if (user.providerData[0].providerId === 'microsoft.com' && !isMicrosoftSigned) {
        e.preventDefault()
        removeCheck.checked = false
      }

      if (user.providerData[0].providerId === 'github.com' && !isGitHubSigned) {
        e.preventDefault()
        removeCheck.checked = false
      }
      if (removeCheck.checked) {
        removeSubmit.disabled = false
      } else {
        removeSubmit.disabled = true
      }
    })

    removeSubmit.addEventListener('click', () => {
      if (user.providerData[0].providerId == 'microsoft.com') {
        deleteUser(MicrosoftCredential.user).then(() => {
          window.location.href = '/auth/signin.html?account_removed=1'
        })
        return
      } else if (user.providerData[0].providerId == 'google.com') {
        deleteUser(GoogleCredential.user).then(() => {
          window.location.href = '/auth/signin.html?account_removed=1'
        })
        return
      } else if (user.providerData[0].providerId == 'github.com') {
        deleteUser(GitHubCredential.user).then(() => {
          window.location.href = '/auth/signin.html?account_removed=1'
        })
        return  
      } else {
        if (removePassword.value === '') {
          showNotice(removeAlert, 'パスワードを入力してください。')
          return
        }

        if (multiFactor(user).enrolledFactors.length > 0 && removeTfa.value === '') {
          showNotice(removeAlert, 'すべてのフィールドを入力してください。')
          return
        }
      }

      reauthenticateWithCredential(
        user,
        EmailAuthProvider.credential(user.email || 'its@invalid.email', removePassword.value),
      )
        .then((userCredentials) => {
          deleteUser(userCredentials.user).then(() => {
            window.location.href = '/auth/signin.html?account_removed=1'
          })
        })
        .catch((error) => {
          const errorCode = error.code
          let errorMessage = error.message

          // Remove 'Firebase: Error ' from the error message
          errorMessage = errorMessage.replace('Firebase: Error ', '')

          if (errorCode === 'auth/wrong-password' || errorCode === 'auth/invalid-credential') {
            showNotice(removeAlert, 'パスワードが間違っています。')
          } else if (errorCode === 'auth/multi-factor-auth-required') {
            const resolver = getMultiFactorResolver(auth, error)

            if (resolver.hints[0].factorId === TotpMultiFactorGenerator.FACTOR_ID) {
              // Ask the user for the OTP code from the TOTP app.
              const multiFactorAssertion = TotpMultiFactorGenerator.assertionForSignIn(
                resolver.hints[0].uid,
                removeTfa.value,
              )

              // Finalize the sign-in.
              return resolver.resolveSignIn(multiFactorAssertion).then(function (userCredential) {
                // The user successfully signed in with the TOTP second factor.
                deleteUser(userCredential.user).then(() => {
                  window.location.href = '/auth/signin.html?account_removed=1'
                })
              })
            }
          } else {
            showNotice(removeAlert, errorMessage)
          }
        })
    })

    function showNotice(element: HTMLElement, message: string) {
      const infoLabel = element.querySelector('label')
      if (infoLabel === null) throw new Error('No icon found')
      element.classList.remove('is-hidden')
      infoLabel.textContent = message
    }
  })
})
