/*
    Rai Website, a powerful tools, fun!
    ©2024 Rai and UpLauncher.

    Description: Load Sidebar module for the Rai Website.
*/

import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getFirestore, getDoc, doc, setDoc } from 'firebase/firestore'
import { getApp } from 'firebase/app'
import { auth, firestore } from '../firebase'

//Initialize Firebase

console.info('[loadSidebar.ts]: Loading Sidebar...')
;(document.querySelector('.p-4')! as HTMLElement).style.display = 'none'

onAuthStateChanged(auth, async (user) => {
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
      const premiumUpsellButton = document.getElementById('premiumUpgradeUpsell_Button') as HTMLAnchorElement
      const query = await getDoc(doc(firestore, 'patreonlinkstatus', user.uid))
      if (!query.exists()) {
        ;(document.querySelector('.p-4')! as HTMLElement).style.display = ''
        return
      }
      //7d
      console.log(query.data().lastChecked, Date.now())
      if (query.data().lastChecked + 604800000 < Date.now() && query.data().plan !== 'free' && query.data().plan !== 'owner' && query.data().isStudent === false) {
        setDoc(doc(firestore, 'patreonlinkstatus', user.uid), {
          linked: false,
          id: user?.uid,
          isStudent: false,
          isExpired: true,
          lastChecked: new Date().toISOString(),
          plan: 'free',
        })
      }
      //1y student
      if (query.data().lastChecked + 31556952000 < Date.now() && query.data().isStudent) {
        setDoc(doc(firestore, 'patreonlinkstatus', user.uid), {
          linked: false,
          id: 'student-' + user?.uid,
          isStudent: false,
          isExpired: true,
          lastChecked: new Date().toISOString(),
          plan: 'free',
        })
      }
      console.log('[loadSidebar.ts] User is signed in', '\nUser Plan:', query.data().plan, '\nisStudent (old linked user is undefined): ', query.data().isStudent, '\nisExpired (undefined in not expired): ', query.data().isExpired)

      switch (query.data().plan) {
        case 'owner':
          premiumUpsellText.textContent = 'UpLauncherの管理者権限がアクティブです。プレミアムプラスの機能とRai Chatの管理機能が利用可能です。'
          premiumUpsellButton.classList.add('is-hidden')
          break
        case 'premiumplus':
          premiumUpsellText.textContent = 'プレミアムプラスへアップグレードしていただき、ありがとうございます。最高級プランをお楽しみください。'
          premiumUpsellButton.classList.add('is-hidden')
          break
        case 'premium':
          premiumUpsellText.textContent = 'プレミアムプラスにアップグレードすると、メッセージが強調表示されたり、実験中の機能を利用できます。'
          premiumUpsellButton.innerHTML = '<i class="fas fa-money-bill"></i>アップグレード'
          break
        case 'basic':
          premiumUpsellText.textContent = 'プレミアムプラスにアップグレードすると、Rai API Basic、メッセージの強調表示、実験中の機能を利用できます。'
          premiumUpsellButton.textContent = '<i class="fas fa-money-bill"></i>アップグレード'
          break
        case 'free':
          break
      }

      if (query.data().isStudent) {
        premiumUpsellText.textContent = 'あなたは、プレミアムプラスを無料で利用する資格を持っています。学生の間、無料です。'
        premiumUpsellButton.classList.add('is-hidden')
      }
      if (query.data().isExpired) {
        premiumUpsellText.textContent = 'あなたのプランを再確認する必要があります。Patreonアカウントを再リンクしてください。再確認するまで、一時的にプレミアムの特典は利用できなくなります。'
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
