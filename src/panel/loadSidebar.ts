/*
    Rai Website, a powerful tools, fun!
    ©2024 Rai and UpLauncher.

    Description: Load Sidebar module for the Rai Website.
*/

import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getFirestore, getDoc, doc, setDoc } from 'firebase/firestore'
import { InitApp } from '../firebase'

//Initialize Firebase
InitApp()
const auth = getAuth()
const db = getFirestore()

console.info('[loadSidebar.ts]: Loading Sidebar...')
;(document.querySelector('.p-4')! as HTMLElement).style.display = 'none'

onAuthStateChanged(auth, async (user) => {
  if (user === null) {
    console.log('[loadSidebar.ts] User is not signed in')

    //loadSidebar
    const sidebarRequest = new XMLHttpRequest()
    sidebarRequest.open('GET', '/auth/panel/sidebar.html', true)
    sidebarRequest.onreadystatechange = async function () {
      if (sidebarRequest.readyState === 4 && sidebarRequest.status === 200) {
        const response = sidebarRequest.responseText
        const element = document.querySelector('#settings-sidebar')
        if (element !== null) element.innerHTML = response
        ;(element as HTMLElement).style.pointerEvents = 'none'
        ;(element as HTMLElement).style.opacity = '0.5'

        console.info('[loadSidebar.ts] Sidebar loaded')
        ;(document.querySelector('.p-4')! as HTMLElement).style.display = ''
      }
    }
    sidebarRequest.send()

    return
  }

  //loadSidebar
  const sidebarRequest = new XMLHttpRequest()
  sidebarRequest.open('GET', '/auth/panel/sidebar.html', true)
  sidebarRequest.onreadystatechange = async function () {
    if (sidebarRequest.readyState === 4 && sidebarRequest.status === 200) {
      const response = sidebarRequest.responseText
      const element = document.querySelector('#settings-sidebar')
      if (element !== null) element.innerHTML = response

      console.info('[loadSidebar.ts] Sidebar loaded')

      const premiumUpsellText = document.getElementById('premiumUpgradeUpsell_Text') as HTMLElement
      const premiumUpsellButton = document.getElementById('premiumUpgradeUpsell_Button') as HTMLAnchorElement
      const query = await getDoc(doc(db, 'patreonlinkstatus', user.uid))
      if (!query.exists()) {
        ;(document.querySelector('.p-4')! as HTMLElement).style.display = ''
        return
      }
      //7d
      if (
        query.data().lastChecked + 604800000 < Date.now() &&
        query.data().plan !== 'free' &&
        query.data().plan !== 'owner' &&
        query.data().isStudent === false
      ) {
        setDoc(doc(db, 'patreonlinkstatus', user.uid), {
          linked: true,
          id: user?.uid,
          isStudent: false,
          isExpired: true,
          lastChecked: new Date().toISOString(),
          plan: 'free',
        })
      }
      //1y student
      if (query.data().lastChecked + 31556952000 < Date.now() && query.data().isStudent) {
        setDoc(doc(db, 'patreonlinkstatus', user.uid), {
          linked: true,
          id: 'student-' + user?.uid,
          isStudent: false,
          isExpired: true,
          lastChecked: new Date().toISOString(),
          plan: 'free',
        })
      }
      console.log(
        '[loadSidebar.ts] User is signed in',
        '\nUser Plan:',
        query.data().plan,
        '\nisStudent (old linked user is undefined): ',
        query.data().isStudent,
        '\nisExpired (undefined in not expired): ',
        query.data().isExpired,
      )

      switch (query.data().plan) {
        case 'owner':
          premiumUpsellText.textContent = 'おめでとうございます。あなたのアカウントはオーナー権限を持っています。'
          premiumUpsellButton.classList.add('is-hidden')
          break
        case 'enhanced':
          premiumUpsellText.textContent = 'おめでとうございます。あなたのEnhancedはアクティブです。'
          premiumUpsellButton.classList.add('is-hidden')
          break
        case 'premium':
          premiumUpsellText.textContent = 'おめでとうございます。あなたのプレミアムはアクティブです。'
          premiumUpsellButton.innerHTML = '<i class="fas fa-money-bill"></i>アップグレード'
          break
        case 'standard':
          premiumUpsellText.textContent = 'おめでとうございます。あなたのStandardはアクティブです。'
          premiumUpsellButton.textContent = '<i class="fas fa-money-bill"></i>アップグレード'
          break
        case 'free':
          break
      }

      if (query.data().isStudent) {
        premiumUpsellText.textContent =
          'おめでとうございます。あなたのアカウントは学生プランを持っています。(学生の間、無料です)'
        premiumUpsellButton.classList.add('is-hidden')
      }
      if (query.data().isExpired) {
        premiumUpsellText.textContent =
          'あなたのプランを再確認する必要があります。Patreonアカウントを再リンクしてください。再確認するまで、一時的にプレミアムの特典は利用できなくなります。'
        premiumUpsellButton.classList.remove('is-hidden')
        premiumUpsellButton.textContent = 'Patreonアカウントを再リンク'
        if (query.data().id.includes('student-')) {
          premiumUpsellText.innerHTML =
            'あなたが学生であることを再確認する必要があります。再確認するまで、一時的にプレミアムの特典は利用できなくなります。<br>もう学生ではありませんか？<a href="/auth/panel/patreon.html">こちら</a>をクリックしてプレミアムへアップグレードしてください。'
          premiumUpsellButton.textContent = '学生確認へ'
          premiumUpsellButton.href = '/student/'
        }
      }
      ;(document.querySelector('.p-4')! as HTMLElement).style.display = ''
    }
  }
  sidebarRequest.send()
})
