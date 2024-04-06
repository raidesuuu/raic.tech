/*
    Rai Website, a powerful tools, fun!
    ©2024 Rai and UpLauncher.

    Description: Patreon module for the Rai Website.
*/

import { onAuthStateChanged } from 'firebase/auth'
import { getFirestore, getDoc, doc, deleteDoc } from 'firebase/firestore'
import { NotLoggedError } from '../rai'
import { auth } from '../firebase'

const db = getFirestore()

onAuthStateChanged(auth, async (user) => {
  if (user === null) {
    window.location.href = '/auth/signin.html'
    throw new NotLoggedError('User is not signed in')
  }

  const linkPatreon = document.getElementById('buttonLinkPatreon') as HTMLAnchorElement
  const patreonError = document.getElementById('patreonAlert') as HTMLElement
  const patreonErrorText = patreonError.querySelector('p') as HTMLElement
  const labelUnlinkInfo = document.getElementById('labelLinkInfo') as HTMLLabelElement
  const labelUnlink = document.getElementById('labelUnlinkPatreon') as HTMLLabelElement
  const unlinkDialog = document.getElementById('unlinkConfirm') as HTMLDialogElement
  const unlinkButton = document.getElementById('buttonUnlinkPatreon') as HTMLButtonElement

  //url params "?error=already_linked"
  console.log(window.location.search)
  if (window.location.search.includes('error=already_linked')) {
    patreonErrorText.innerHTML = '<p>このPatreonアカウントは既に他のアカウントでリンクされています。<br>サポートが必要ですか？<a href="/contact">ご連絡ください。</a></p>'
    patreonError.classList.remove('is-hidden')
  }

  const query = await getDoc(doc(db, 'patreonlinkstatus', user.uid))
  if (!query.exists()) return
  switch (query.data().plan) {
    case 'owner':
      linkPatreon.textContent = 'オーナー権限はアクティブです'
      break
    case 'premiumplus':
      linkPatreon.textContent = 'プレミアムプラスはアクティブです'
      break
    case 'premium':
      linkPatreon.textContent = 'プレミアムはアクティブです'
      break
    case 'standard':
      linkPatreon.textContent = 'Standardはアクティブです'
      break
    case 'free':
      linkPatreon.textContent = 'Patreonと連携済み'
      break
  }
  if (query.data().isStudent) {
    linkPatreon.textContent = '学生プランはアクティブです'
  }
  linkPatreon.setAttribute('disabled', 'true')
  linkPatreon.href = 'javascript:void(0)'

  if (query.data().isStudent) return
  labelUnlinkInfo.classList.remove('is-hidden')

  labelUnlink.addEventListener('click', () => {
    document.getElementById('unlinkConfirm_modal')?.classList.add('is-active')
    unlinkDialog.showModal()
  })

  unlinkButton.addEventListener('click', async () => {
    await deleteDoc(doc(db, 'patreonlinkstatus', user.uid)).then(() => {
      window.location.reload()
    })
  })
})

window.addEventListener('DOMContentLoaded', () => {
  if (window.location.href.includes('10.249.176.251:8080')) {
    const buttonLinkPatreon_Local = document.getElementById('localLinkAccount_Container')
    if (buttonLinkPatreon_Local) {
      buttonLinkPatreon_Local.classList.remove('is-hidden')
    }
  }
})
