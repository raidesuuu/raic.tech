/*
    Rai Website, a powerful tools, fun!
    ©2024 Rai and UpLauncher.

    Description: Security module for the Rai Website.
*/

import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
  getAuth,
  multiFactor,
  TotpMultiFactorGenerator,
  onAuthStateChanged,
  getMultiFactorResolver,
  TotpSecret,
} from 'firebase/auth'
import { NotLoggedError } from '../rai'
import qrcode from 'qrcode'
import { InitApp } from '../firebase'

//Initialize Firebase
InitApp()
const auth = getAuth()

window.addEventListener('DOMContentLoaded', () => {
  const passwordOld = document.getElementById('ChangePasswordCurrent') as HTMLInputElement
  const passwordNew = document.getElementById('ChangePasswordNew') as HTMLInputElement
  const passwordConfirm = document.getElementById('ChangePasswordCheck') as HTMLInputElement
  const passwordAlert = document.getElementById('ChangePasswordAlert') as HTMLElement
  const passwordSubmit = document.getElementById('ChangePasswordSubmit') as HTMLButtonElement
  const passwordTfa = document.getElementById('ChangePasswordTFA') as HTMLButtonElement
  const passwordTfaContainer = document.getElementById('ChangePasswordTFAContainer') as HTMLDivElement

  //Tfa Enabler
  const tfaDialog = document.getElementById('TFADialog') as HTMLDialogElement
  const tfaDialogContainer = document.getElementById('TFADialog_modal') as HTMLDivElement
  const tfaOpenDialog = document.getElementById('TFAOpenDialog') as HTMLButtonElement

  const tfaPassword = document.getElementById('TFAPassword') as HTMLInputElement
  const tfaPasswordContainer = document.getElementById('TFAPasswordContainer') as HTMLDivElement
  const tfaPasswordAlert = document.getElementById('TFAPasswordAlert') as HTMLElement
  const tfaPasswordConfirm = document.getElementById('buttonTFAPasswordConfirm') as HTMLInputElement

  const tfaEnableContainer = document.getElementById('TFAEnableContainer') as HTMLDivElement
  const tfaEnable = document.getElementById('buttonEnableTFA') as HTMLButtonElement

  const tfaSecretKey = document.getElementById('TFASecretKey') as HTMLElement
  const tfaQrCode = document.getElementById('TFAQRCode') as HTMLCanvasElement
  const tfaCode = document.getElementById('TFACode') as HTMLInputElement

  const tfaAlert = document.getElementById('TFAEnableAlert') as HTMLElement

  //Tfa Disabler
  const tfaDisable = document.getElementById('buttonDisableTFA') as HTMLButtonElement
  const tfaDisablePassword = document.getElementById('TFADisablePassword') as HTMLInputElement
  const tfaDisableCode = document.getElementById('TFADisableCode') as HTMLInputElement
  const tfaDisableAlert = document.getElementById('TFADisableAlert') as HTMLElement
  const tfaDisableDialog = document.getElementById('TFADisableDialog') as HTMLDialogElement
  const tfaDisableDialogContainer = document.getElementById('TFADisableDialog_modal') as HTMLDivElement

  let tfaSecret = {} as TotpSecret

  if (
    passwordOld === null ||
    passwordNew === null ||
    passwordConfirm === null ||
    passwordAlert === null ||
    passwordSubmit === null ||
    tfaDialog === null ||
    tfaOpenDialog === null ||
    tfaDialogContainer === null ||
    tfaPassword === null ||
    tfaPasswordConfirm === null ||
    tfaSecretKey === null ||
    tfaQrCode === null ||
    tfaEnable === null ||
    tfaEnableContainer === null ||
    tfaPasswordContainer === null ||
    tfaPasswordAlert === null ||
    tfaCode === null ||
    tfaAlert === null ||
    passwordTfa === null ||
    passwordTfaContainer === null ||
    tfaDisable === null ||
    tfaDisablePassword === null ||
    tfaDisableCode === null ||
    tfaDisableAlert === null ||
    tfaDisableDialog === null ||
    tfaDisableDialogContainer === null
  ) {
    console.error('[security.ts : P1]: No Required element found')

    return
  }

  onAuthStateChanged(auth, (user) => {
    if (user === null) {
      window.location.href = '/auth/signin.html'
      throw new NotLoggedError('User is not signed in')
    }

    if (multiFactor(user).enrolledFactors.length > 0) {
      tfaOpenDialog.innerHTML = '<i class="fas fa-check"></i>2段階認証を無効にする'

      passwordTfaContainer.classList.remove('is-hidden')
    }

    tfaOpenDialog.addEventListener('click', async () => {
      if (multiFactor(user).enrolledFactors.length > 0) {
        tfaDisableDialogContainer.classList.add('is-active')
        tfaDisableDialog.showModal()
      } else {
        tfaDialogContainer.classList.add('is-active')
        tfaDialog.showModal()
      }
    })

    tfaDisable.addEventListener('click', async () => {
      reauthenticateWithCredential(user, EmailAuthProvider.credential(user.email || '', tfaDisablePassword.value))
        .then(async (credentials) => {
          await multiFactor(credentials.user).unenroll(TotpMultiFactorGenerator.FACTOR_ID)
        })
        .catch(async (error) => {
          const mfaResolver = getMultiFactorResolver(getAuth(), error)

          const cred = await mfaResolver.resolveSignIn(
            TotpMultiFactorGenerator.assertionForSignIn(mfaResolver.hints[0].uid, tfaDisableCode.value),
          )

          try {
            await multiFactor(cred.user)
              .unenroll(TotpMultiFactorGenerator.FACTOR_ID)
              .then(() => {
                showNotice(passwordAlert, '2段階認証が無効になりました！')
              })
          } catch (error) {
            // Invalid or expired OTP.
            showNotice(passwordAlert, '2段階認証のコードが無効です。もう一度お試しください。')
          }
        })
    })

    tfaEnable.addEventListener('click', async () => {
      // Finalize the enrollment.
      const multiFactorAssertion = TotpMultiFactorGenerator.assertionForEnrollment(tfaSecret, tfaCode.value)
      await multiFactor(user)
        .enroll(multiFactorAssertion, 'TOTP')
        .then(() => {
          showNotice(tfaAlert, '多要素認証が有効になりました')
        })
        .catch((error) => {
          const errorCode = error.code

          if (errorCode == 'auth/invalid-verification-code') {
            showNotice(tfaAlert, 'コードが無効です。もう一度お試しください。')
          }
        })
    })

    tfaPasswordConfirm.addEventListener('click', () => {
      if (tfaPassword.value === '') {
        showNotice(tfaPasswordAlert, '全てのフィールドを入力してください')
        return
      }

      reauthenticateWithCredential(
        user,
        EmailAuthProvider.credential(user.email || 'its@invalid.email', tfaPassword.value),
      )
        .then(async (credential) => {
          console.info("User's password has been reauthenticated")
          tfaPasswordContainer.classList.add('is-hidden')
          tfaEnableContainer.classList.remove('is-hidden')

          const multiFactorSession = await multiFactor(credential.user).getSession()
          const totpSecret = await TotpMultiFactorGenerator.generateSecret(multiFactorSession)

          tfaSecretKey.textContent = 'シークレットキー: ' + totpSecret.secretKey

          tfaSecret = totpSecret

          const qrCode = new URL(`otpauth://totp/UpLauncher?secret=${totpSecret.secretKey}&issuer=UpLauncher`)

          qrcode.toCanvas(tfaQrCode, qrCode.toString(), (error) => {
            if (error) {
              console.error(error)
            }
          })
        })
        .catch((error) => {
          console.error('[security.ts : TFA]', error)

          const errorCode = error.code
          const errorMessage = error.message

          if (errorCode === 'auth/wrong-password') {
            showNotice(tfaPasswordAlert, 'パスワードが違います。もう一度お試しください。')
          } else if (errorCode === 'auth/invalid-password') {
            showNotice(tfaPasswordAlert, 'パスワードが無効です。もう一度お試しください。')
          } else if (errorCode === 'auth/weak-password') {
            showNotice(tfaPasswordAlert, 'パスワードは6文字以上である必要があります。')
          } else if (errorCode === 'auth/invalid-credential') {
            showNotice(tfaPasswordAlert, 'パスワードが違います。もう一度お試しください。')
          } else {
            showNotice(tfaPasswordAlert, 'エラーが発生しました: ' + errorMessage)
          }
        })
    })

    passwordSubmit.addEventListener('click', () => {
      if (passwordOld.value === '' || passwordNew.value === '' || passwordConfirm.value === '') {
        showNotice(passwordAlert, '全てのフィールドを入力してください')
        return
      }

      if (passwordNew.value !== passwordConfirm.value) {
        showNotice(passwordAlert, '新しいパスワードが一致しません')
        return
      }

      reauthenticateWithCredential(user, EmailAuthProvider.credential(user.email || '', passwordOld.value))
        .then(() => {
          updatePassword(user, passwordNew.value)
          showNotice(passwordAlert, 'パスワードが変更されました')
        })
        .catch(async (error) => {
          const errorCode = error.code
          const errorMessage = error.message

          if (errorCode === 'auth/wrong-password') {
            showNotice(passwordAlert, 'パスワードが違います。もう一度お試しください。')
          } else if (errorCode === 'auth/invalid-password') {
            showNotice(passwordAlert, 'パスワードが無効です。もう一度お試しください。')
          } else if (errorCode === 'auth/weak-password') {
            showNotice(passwordAlert, 'パスワードは6文字以上である必要があります。')
          } else if (errorCode === 'auth/invalid-credential') {
            showNotice(passwordAlert, 'パスワードが違います。もう一度お試しください。')
          } else if (errorCode === 'auth/multi-factor-auth-required') {
            const mfaResolver = getMultiFactorResolver(getAuth(), error)

            const cred = await mfaResolver.resolveSignIn(
              TotpMultiFactorGenerator.assertionForSignIn(mfaResolver.hints[0].uid, passwordTfa.value),
            )

            try {
              updatePassword(cred.user, passwordNew.value)
              showNotice(passwordAlert, 'パスワードが変更されました')
            } catch (error) {
              // Invalid or expired OTP.
              showNotice(passwordAlert, '2段階認証のコードが無効です。もう一度お試しください。')
            }
          } else {
            showNotice(passwordAlert, 'エラーが発生しました: ' + errorMessage)
          }
        })
    })
  })

  function showNotice(element: HTMLElement, message: string) {
    const infoLabel = element.querySelector('label')
    if (infoLabel === null) throw new Error('No icon found')
    element.classList.remove('is-hidden')
    infoLabel.textContent = message
  }
})
