/*
    Rai Website, a powerful tools, fun!
    ©2024 Rai and UpLauncher.

    Description: Load Sidebar module for the Rai Website.
*/

import { auth } from '../firebase'

//Initialize Firebase

console.info('[loadSidebar.ts]: Loading Sidebar...')
;(document.querySelector('.p-4')! as HTMLElement).style.display = 'none'

auth.onAuthStateChanged((user) => {
  const ENDPOINT_URL = window.location.hostname === '10.249.176.251' ? 'http://127.0.0.1:4649' : 'https://api.raic.tech'

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

  if (user !== null) {
    console.log(user.uid)
    // User is signed in
    window.localStorage.setItem('userId', user.uid)

    // Get the elements
    const signupElement = document.getElementById('signup')
    const signinElement = document.getElementById('signin')
    const panelElement = document.getElementById('panel')
    const logoutElement = document.getElementById('logout')

    // Check if the elements exist
    if (signupElement == null || signinElement == null || panelElement == null || logoutElement == null) return

    console.log('payphone')

    // If the elements exist, add or remove classes
    signupElement.classList.add('is-hidden')
    signinElement.classList.add('is-hidden')
    panelElement.classList.remove('is-hidden')
    logoutElement.classList.remove('is-hidden')
    // Add the event listener
    logoutElement.addEventListener('click', () => {
      // Sign out
      auth.signOut()
      window.localStorage.removeItem('userId')
      window.location.reload()
    })

    document.body.style.display = 'block'
  } else {
    document.body.style.display = 'block'
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
      ;(document.querySelector('.p-4')! as HTMLElement).style.display = ''
    }
  }
  sidebarRequest.send()
})
