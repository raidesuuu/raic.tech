/*
    Rai Website, a powerful tools, fun!
    ©2024 Rai and UpLauncher.

    Description: Load Sidebar module for the Rai Website.
*/

import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'

console.info('[api/loadSidebar.ts]: Loading Sidebar...')
;(document.querySelector('.p-4')! as HTMLElement).style.display = 'none'

auth.onAuthStateChanged(async (user) => {
  if (user === null) {
    window.location.href = '/auth/signin.html'
    console.error('[loadSidebar.ts] User is not signed in')
    return
  }

  //loadSidebar
  const sidebarRequest = new XMLHttpRequest()
  sidebarRequest.open('GET', '/auth/api/sidebar.html', true)
  sidebarRequest.onreadystatechange = async function () {
    if (sidebarRequest.readyState === 4 && sidebarRequest.status === 200) {
      const response = sidebarRequest.responseText
      const element = document.querySelector('#settings-sidebar')
      if (element !== null) element.innerHTML = response

      console.info('[loadSidebar.ts] Sidebar loaded')
      ;(document.querySelector('.p-4')! as HTMLElement).style.display = ''
    }
  }
  sidebarRequest.send()
})
