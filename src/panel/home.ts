/*
    Rai Website, a powerful tools, fun!
    ©2024 Rai and UpLauncher.

    Description: Panel Home module for the Rai Website.
*/

import {
  getAuth,
  onAuthStateChanged,
  EmailAuthProvider,
  updateProfile,
  TotpMultiFactorGenerator,
  getMultiFactorResolver,
  sendEmailVerification,
  multiFactor,
  reauthenticateWithCredential,
} from '@firebase/auth'

import { NotLoggedError } from '../rai'
import { verifyBeforeUpdateEmail } from 'firebase/auth'
import { InitApp } from '../firebase'

//Initialize Firebase
InitApp()
const auth = getAuth()

onAuthStateChanged(auth, (user) => {
  if (user === null) {
    window.location.href = '/auth/signin.html'
    throw new NotLoggedError('User is not signed in')
  }

  const email = user.email
  const displayName = user.displayName

  if (displayName === null) {
    updateProfile(user, {
      displayName: makeRandomText(5),
    }).catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      if (errorCode === 'auth/too-many-requests') {
        alert(
          'デフォルトの名前を設定する際にエラーが発生しました。ページを再読み込み、ロードしすぎているか、アクションを実行しすぎている可能性があります。',
        )
      } else {
        alert('デフォルトの名前を設定する際にエラーが発生しました: ' + errorMessage)
      }
    })
  }

  const helloName = document.getElementById('helloSectionName') as HTMLElement
  const helloDate = document.getElementById('helloSectionDate') as HTMLElement

  const get = {
    Hour: () => new Date().getHours(),
    Minute: () => new Date().getMinutes(),
    Second: () => new Date().getSeconds(),
    Milliseconds: () => new Date().getMilliseconds(),
  }

  helloName.textContent = displayName || '名無し'
  helloDate.textContent = `${get.Hour()}時${get.Minute()}分${get.Second()}秒`

  setInterval(() => {
    helloDate.textContent = `${get.Hour()}時${get.Minute()}分${get.Second()}秒`
  }, 1000)

  const emailVerificationAlert = document.getElementById('emailVerificationAlert') as HTMLElement
  const emailVerificationButton = document.getElementById('emailVerificationButton') as HTMLButtonElement

  const emailNew = document.getElementById('ChangeEmailNew') as HTMLInputElement
  const emailPassword = document.getElementById('ChangeEmailPassword') as HTMLInputElement
  const emailAlert = document.getElementById('ChangeEmailAlert') as HTMLElement
  const emailSubmit = document.getElementById('ChangeEmailSubmit') as HTMLButtonElement
  const emailTFA = document.getElementById('ChangeEmailTFA') as HTMLInputElement

  const emailTFAContainer = document.getElementById('ChangeEmailTFAContainer') as HTMLDivElement

  const NameNew = document.getElementById('ChangeNameNewName') as HTMLInputElement
  const NameAlert = document.getElementById('ChangeNameAlert') as HTMLElement
  const NameSubmit = document.getElementById('ChangeNameSubmit') as HTMLButtonElement

  emailNew.value = email || 'メールアドレスがありません'
  NameNew.value = displayName || '名前がありません'

  if (
    emailNew === null ||
    emailPassword === null ||
    emailAlert === null ||
    emailSubmit === null ||
    NameNew === null ||
    NameAlert === null ||
    NameSubmit === null ||
    emailTFA === null ||
    helloName === null ||
    helloDate === null ||
    emailVerificationAlert === null ||
    emailVerificationButton === null ||
    emailTFAContainer === null
  ) {
    console.error('[security.ts : P1]: No Required element found')

    return
  }

  if (multiFactor(user).enrolledFactors.length > 0) {
    emailTFAContainer.classList.remove('is-hidden')
  }

  if (!user.emailVerified) {
    console.info("[EmailVerifiedChecker : INFO (home.ts)] Email isn't verified yet. Showing alert.")
    emailVerificationAlert.classList.remove('is-hidden')
  } else {
    console.info('[EmailVerifiedChecker : (home.ts)] Email is verified.')
  }

  emailVerificationButton.addEventListener('click', () => {
    sendEmailVerification(user)
      .then(() => {
        emailVerificationAlert.querySelector('p')!.innerHTML =
          '<p>下のボタンをクリックして、メールアドレスを認証してください。<br><i class="fas fa-check"></i>送信が完了しました。メールアドレスのメールボックスを確認してください。</p>'
      })
      .catch((error) => {
        const errorCode = error.code
        if (errorCode === 'auth/too-many-requests') {
          emailVerificationAlert.querySelector('p')!.innerHTML =
            '<p>下のボタンをクリックして、メールアドレスを認証してください。<br><i class="fas fa-circle-xmark"></i>短時間に多くのアクションを起こしています。後でお試しください。</p>'
        }
      })
  })

  NameSubmit.addEventListener('click', () => {
    if (NameNew.value === '') {
      NameAlert.textContent = '新しい名前を入力してください'
      return
    }

    updateProfile(user, {
      displayName: NameNew.value,
    })
      .then(() => {
        showNotice(NameAlert, '名前が変更されました！')
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message

        if (errorCode === 'auth/too-many-requests') {
          showNotice(NameAlert, '短時間に多くのアクションを起こしています。後でお試しください。')
        } else {
          NameAlert.textContent = 'エラー: ' + errorMessage
        }
      })
  })

  emailSubmit.addEventListener('click', () => {
    if (emailNew.value === '' || emailPassword.value === '') {
      showNotice(emailAlert, '新しいメールアドレスとパスワードを入力してください。')
      return
    }

    reauthenticateWithCredential(user, EmailAuthProvider.credential(user.email || '', emailPassword.value))
      .then(() => {
        verifyBeforeUpdateEmail(user, emailNew.value)
          .then(() => {
            showNotice(
              emailAlert,
              'メールアドレスの変更を完了するには、新しいメールアドレスを認証する必要があります。\n新しいメールアドレスのメールボックスを確認してください。',
            )
          })
          .catch((error) => {
            if (error.code === 'auth/email-already-in-use') {
              showNotice(emailAlert, 'このメールアドレスは既に使用されています。')
            } else if (error.code === 'auth/invalid-email') {
              showNotice(emailAlert, '無効なメールアドレスです。')
            } else if (error.code === 'auth/operation-not-allowed') {
              showNotice(emailAlert, 'メールアドレスを変更するには、メールアドレスを確認する必要があります。')
            }
          })
      })
      .catch(async (error) => {
        const errorCode = error.code
        const errorMessage = error.message

        emailAlert.classList.remove('is-hidden')

        if (errorCode === 'auth/wrong-password') {
          showNotice(emailAlert, 'パスワードが間違っています。')
        } else if (errorCode === 'auth/invalid-email') {
          showNotice(emailAlert, '無効なメールアドレスです。')
        } else if (errorCode === 'auth/email-already-in-use') {
          showNotice(emailAlert, 'このメールアドレスは既に使用されています。')
        } else if (errorCode === 'auth/invalid-credential') {
          showNotice(emailAlert, 'パスワードが間違っています。')
        } else if (errorCode === 'auth/multi-factor-auth-required') {
          const mfaResolver = getMultiFactorResolver(getAuth(), error)

          const cred = await mfaResolver.resolveSignIn(
            TotpMultiFactorGenerator.assertionForSignIn(mfaResolver.hints[0].uid, emailTFA.value),
          )

          try {
            verifyBeforeUpdateEmail(cred.user, emailNew.value)
              .then(() => {
                showNotice(emailAlert, 'メールアドレスが変更されました！')
              })
              .catch((error) => {
                if (error.code === 'auth/email-already-in-use') {
                  showNotice(emailAlert, 'このメールアドレスは既に使用されています。')
                } else if (error.code === 'auth/invalid-email') {
                  showNotice(emailAlert, '無効なメールアドレスです。')
                } else if (error.code === 'auth/operation-not-allowed') {
                  showNotice(emailAlert, 'メールアドレスを変更するには、メールアドレスを確認する必要があります。')
                }
              })
          } catch (error) {
            // Invalid or expired OTP.
            showNotice(emailAlert, '無効なOTPです。')
          }
        } else {
          showNotice(emailAlert, 'エラー: ' + errorMessage)
        }
      })
  })
})

function makeRandomText(length: number) {
  let result = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  let counter = 0
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
    counter += 1
  }
  return result
}

function showNotice(element: HTMLElement, message: string) {
  const infoLabel = element.querySelector('label')
  if (infoLabel === null) throw new Error('No icon found')
  element.classList.remove('is-hidden')
  infoLabel.textContent = message
}
