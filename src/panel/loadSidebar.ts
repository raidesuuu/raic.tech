/*
    Rai Website, a powerful tools, fun!
    ©2024 Rai and UpLauncher.

    Description: Load Sidebar module for the Rai Website.
*/

import { getDoc, doc, setDoc } from 'firebase/firestore'
import { auth, firestore } from '../firebase'
import { SubscriptionDataInterface } from 'chat/raiChatTypes'

//Initialize Firebase

console.info('[loadSidebar.ts]: Loading Sidebar...')
;(document.querySelector('.p-4')! as HTMLElement).style.display = 'none'

auth.onAuthStateChanged((user) => {
  //check ie
  if (
    /Chrome/.test(navigator.userAgent) &&
    /Google Inc/.test(navigator.vendor) &&
    navigator.userAgent.includes('Chrome') &&
    (navigator.userAgent.match(/Chrome\/(\d{3})/) ?? [])[1] &&
    parseInt((navigator.userAgent.match(/Chrome\/(\d{3})/) ?? [])[1]) < 107
  ) {
    if (navigator.userAgent.includes('Chrome')) {
      window.location.href = '/category/infomation/unsupported-browser.html'
      return
    }
  } else if (Number.isNaN(parseInt((navigator.userAgent.match(/Chrome\/(\d{3})/) ?? [])[1]))) {
    if (navigator.userAgent.includes('Chrome')) {
      window.location.href = '/category/infomation/unsupported-browser.html'
      return
    }
  }

  //ie
  if (/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
    window.location.href = '/category/infomation/unsupported-browser.html'
    return
  }

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

      const premiumUpsellText = document.getElementById('premiumUpgradeUpsell_Text') as HTMLElement
      const premiumUpsellContainer = document.getElementById('premiumUpgradeUpsell_Container') as HTMLElement
      const premiumUpsellbutton = document.getElementById('premiumUpgradeUpsell_button') as HTMLAnchorElement
      const query = await getDoc(doc(firestore, 'subscription-state', user.uid))
      const userData = query.data() as SubscriptionDataInterface
      if (!query.exists()) {
        ;(document.querySelector('.p-4')! as HTMLElement).style.display = ''
        return
      }
      //7d
      if (userData.lastChecked + 604800000 < Date.now() && userData.plan !== 'free' && !userData.isStudent) {
        userData.isExpired = true
        userData.plan = 'free'
        setDoc(doc(firestore, 'subscription-state', user.uid), userData)
      }
      //1y student
      if (userData.lastChecked + 31556952000 < Date.now() && userData.isStudent) {
        userData.isExpired = true
        userData.plan = 'free'
        setDoc(doc(firestore, 'subscription-state', user.uid), userData)
      }

      switch (userData.plan) {
        case 'premiumplus':
          premiumUpsellText.textContent = 'プレミアムプラスへアップグレードしていただき、ありがとうございます。最高級プランをお楽しみください。'
          premiumUpsellbutton.classList.add('is-hidden')
          break
        case 'premium':
          premiumUpsellText.textContent = 'プレミアムプラスにアップグレードすると、メッセージが強調表示されたり、実験中の機能を利用できます。'
          premiumUpsellbutton.innerHTML = '<i class="fas fa-money-bill"></i>アップグレード'
          break
        case 'free':
          break
      }

      if (userData.isStudent) {
        premiumUpsellText.textContent = 'あなたは、プレミアムプラスを無料で利用する資格を持っています。学生の間、無料です。'
        premiumUpsellbutton.classList.add('is-hidden')
      }
      if (userData.isExpired) {
        premiumUpsellText.textContent = 'あなたのプランを再確認する必要があります。サブスクリプションを終了した場合はもう一度決済し、雷へ連絡すると継続できます。'
        premiumUpsellbutton.classList.remove('is-hidden')
        premiumUpsellbutton.textContent = 'サブスクリプションについて'
        if (userData.id.startsWith('student-')) {
          premiumUpsellText.innerHTML =
            'あなたが学生であることを再確認する必要があります。再確認するまで、一時的にプレミアムの特典は利用できなくなります。<br>もう学生ではありませんか？<a href="/auth/panel/subscriptions.html">こちら</a>をクリックしてプレミアムへアップグレードしてください。'
          premiumUpsellbutton.textContent = '学生確認へ'
          premiumUpsellbutton.href = '/student/'
        }
      }
      ;(document.querySelector('.p-4')! as HTMLElement).style.display = ''
    }
  }
  sidebarRequest.send()
})
