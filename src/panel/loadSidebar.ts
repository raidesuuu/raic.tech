/*
    Rai Website, a powerful tools, fun!
    ©2024 Rai and UpLauncher.

    Description: Load Sidebar module for the Rai Website.
*/

import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getFirestore, getDoc, doc } from 'firebase/firestore'
import { InitApp } from '../firebase'

//Initialize Firebase
InitApp()
const auth = getAuth()
const db = getFirestore()

console.info('[loadSidebar.ts]: Loading Sidebar...')
;(document.querySelector('.p-4')! as HTMLElement).style.display = 'none'

onAuthStateChanged(auth, async (user) => {
  if (user === null) {
    window.location.href = '/auth/signin.html'
    console.error('[loadSidebar.ts] User is not signed in')
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
      const premiumUpsellButton = document.getElementById('premiumUpgradeUpsell_Button') as HTMLButtonElement
      const query = await getDoc(doc(db, 'patreonlinkstatus', user.uid))
      if (!query.exists()) {
        ;(document.querySelector('.p-4')! as HTMLElement).style.display = ''
        return
      }
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
          premiumUpsellButton.classList.add('is-hidden')
          break
        case 'standard':
          premiumUpsellText.textContent = 'おめでとうございます。あなたのStandardはアクティブです。'
          premiumUpsellButton.classList.add('is-hidden')
          break
        case 'free':
          break
      }
      ;(document.querySelector('.p-4')! as HTMLElement).style.display = ''
    }
  }
  sidebarRequest.send()
})
