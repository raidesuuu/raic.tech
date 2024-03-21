/*
    Rai Website, a powerful tools, fun!
    ©2024 Rai and UpLauncher.

    Description: Old Panel module for the Rai Website.
*/

import {
  getAuth,
  onAuthStateChanged,
  EmailAuthProvider,
  PhoneAuthProvider,
  updateEmail,
  deleteUser,
  sendEmailVerification,
  PhoneMultiFactorGenerator,
  multiFactor,
  RecaptchaVerifier,
  reauthenticateWithCredential,
  updatePassword,
} from '@firebase/auth'
const auth = getAuth()

let email = 'email@example.com'

const email_password = document.getElementById('email_password') as HTMLInputElement
const email_new = document.getElementById('email_new') as HTMLInputElement
const email_info = document.getElementById('email_info') as HTMLElement
const email_submit = document.getElementById('email_submit') as HTMLButtonElement

const password_current = document.getElementById('password_current') as HTMLInputElement
const password_new = document.getElementById('password_new') as HTMLInputElement
const password_info = document.getElementById('password_info') as HTMLElement
const password_submit = document.getElementById('password_submit') as HTMLButtonElement

const tfa_add = document.getElementById('2fa_enable') as HTMLButtonElement
const tfa_dialog = document.getElementById('2fa_dialog') as HTMLDialogElement
const tfa_password = document.getElementById('2fa_password') as HTMLInputElement
const tfa_number = document.getElementById('2fa_phonenumber') as HTMLInputElement
const tfa_notice = document.getElementById('2fa_info') as HTMLElement
const tfa_getcode = document.getElementById('2fa_sendcode') as HTMLButtonElement
const tfa_code = document.getElementById('2fa_verificationcode') as HTMLInputElement
const tfa_submit = document.getElementById('2fa_submit') as HTMLButtonElement
let tfa_verificationid = ''
let tfa_enabled = false
let tfa_user = auth.currentUser

const remove_password = document.getElementById('remove_password') as HTMLInputElement
const remove_info = document.getElementById('remove_info') as HTMLElement
const remove_submit = document.getElementById('remove_submit') as HTMLButtonElement

onAuthStateChanged(auth, (user) => {
  // Redirect to sign in page if user is not signed in
  if (user === null) {
    window.location.href = '/auth/signin.html'
    throw new Error('[P3: ERROR (panel.ts)] User is not signed in')
  }

  if (
    email_password == null ||
    email_new == null ||
    email_info == null ||
    email_submit == null ||
    password_current == null ||
    password_new == null ||
    password_info == null ||
    password_submit == null ||
    tfa_password == null ||
    tfa_number == null ||
    tfa_notice == null ||
    tfa_getcode == null ||
    tfa_code == null ||
    tfa_submit == null ||
    tfa_add == null ||
    tfa_dialog == null ||
    remove_password == null ||
    remove_info == null ||
    remove_submit == null
  )
    throw new Error('[P1: ERROR (panel.ts)] Element not found')

  if (user.email == null) throw new Error('[P2: ERROR (panel.ts)] User email not found')

  if (multiFactor(user).enrolledFactors.length > 0) tfa_enabled = true

  const urlParams = new URLSearchParams(window.location.search)

  console.info("[UserInfoAgent : INFO (panel.ts)] User's email: ", user.email)
  console.info("[UserInfoAgent : INFO (panel.ts)] User's phone number: ", user.phoneNumber || 'No phone number found')
  console.info("[UserInfoAgent : INFO (panel.ts)] User's 2FA enabled: ", tfa_enabled)

  tfa_add.addEventListener('click', () => {
    tfa_dialog.showModal()
  })

  if (urlParams.get('email-verify') == '1') {
    sendEmailVerification(user).then(() => {
      tfa_notice.style.display = ''
    })
  }

  email = user.email || 'メールアドレスが見つかりません。'
  email_password.addEventListener('change', () => {
    if (email_password.value != '' && email_new.value != '') {
      email_submit.removeAttribute('disabled')
    } else {
      email_submit.setAttribute('disabled', 'true')
    }
  })
  email_new.addEventListener('change', () => {
    if (email_password.value != '' && email_new.value != '') {
      email_submit.removeAttribute('disabled')
    } else {
      email_submit.setAttribute('disabled', 'true')
    }
  })
  email_submit.addEventListener('click', async () => {
    const userCredential = EmailAuthProvider.credential(user.email || '', email_password.value)
    reauthenticateWithCredential(user, userCredential)
      .then(() => {
        updateEmail(user, email_new.value)
          .then(() => {
            email_info.textContent = 'メールアドレスを変更しました。'
          })
          .catch((error) => {
            email_info.textContent = 'エラー: ' + error
          })
      })
      .catch(() => {
        email_info.textContent = 'エラー: パスワードが違います。'
        return
      })
  })
  password_submit.addEventListener('click', () => {
    const credential = EmailAuthProvider.credential(user.email || '', password_current.value)
    reauthenticateWithCredential(user, credential)
      .then(() => {
        updatePassword(user, password_new.value)
          .then(() => {
            password_info.textContent = 'パスワードが変更されました。'
          })
          .catch((error) => {
            password_info.textContent = 'エラー: ' + error
          })
      })
      .catch(() => {
        password_info.textContent = 'エラー: パスワードが違います。'
        return
      })
  })

  password_new.addEventListener('change', () => {
    if (password_new.value != '' && password_current.value != '') {
      password_submit.removeAttribute('disabled')
    } else {
      password_submit.setAttribute('disabled', 'true')
    }
  })
  password_current.addEventListener('change', () => {
    if (password_new.value == '' && password_current.value == '') {
      password_submit.removeAttribute('disabled')
    } else {
      password_submit.setAttribute('disabled', 'true')
    }
  })

  remove_password.addEventListener('change', () => {
    if (remove_password.value != '') {
      remove_submit.removeAttribute('disabled')
    } else {
      remove_submit.setAttribute('disabled', 'true')
    }
  })
  remove_submit.addEventListener('click', () => {
    const credential = EmailAuthProvider.credential(email, remove_password.value)
    reauthenticateWithCredential(user, credential)
      .then(() => {
        deleteUser(user)
          .then(() => {
            location.href = '/auth/signin.html'
          })
          .catch((error) => {
            remove_info.textContent = 'エラー: ' + error
          })
      })
      .catch((error) => {
        console.log('Error: ' + error.message)
        remove_info.textContent = 'エラー: パスワードが違います。'
        return
      })
  })

  const recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha_container', {
    size: 'invisible',
    callback: function () {
      tfa_getcode.removeAttribute('disabled')
    },
    'expired-callback': function () {},
  })

  tfa_code.addEventListener('click', () => {
    const credential = EmailAuthProvider.credential(email, tfa_password.value)
    reauthenticateWithCredential(user, credential)
      .then(() => {
        multiFactor(user)
          .getSession()
          .then(function (multiFactorSession) {
            const phoneInfoOptions = {
              phoneNumber: tfa_number.value,
              session: multiFactorSession,
            }

            const phoneAuthProvider = new PhoneAuthProvider(auth)
            phoneAuthProvider.verifyPhoneNumber(phoneInfoOptions, recaptchaVerifier).then(function (verificationId) {
              tfa_verificationid = verificationId
              tfa_user = user
              tfa_password.setAttribute('disabled', 'true')
              tfa_number.setAttribute('disabled', 'true')
              tfa_getcode.setAttribute('disabled', 'true')
              tfa_code.removeAttribute('disabled')
              tfa_submit.removeAttribute('disabled')
            })
          })
      })
      .catch((error) => {
        console.log('Error: ' + error.message)
        remove_info.textContent = 'エラー: パスワードが違います。'
        return
      })
  })

  tfa_submit.addEventListener('click', () => {
    window.localStorage.setItem('tfa_enabled', 'true')
    const cred = PhoneAuthProvider.credential(tfa_verificationid, tfa_code.value)
    const multiFactorAssertion = PhoneMultiFactorGenerator.assertion(cred)
    multiFactor(tfa_user || user).enroll(multiFactorAssertion, '電話番号')

    tfa_notice.textContent = '2段階認証を有効にしました！'
  })
})
