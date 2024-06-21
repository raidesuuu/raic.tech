/*
    Rai Website, a powerful tools, fun!
    ©2024 Rai and UpLauncher.

    Description: Subscription module for the Rai Website.
*/

import { getFirestore, getDoc, doc } from 'firebase/firestore'
import { NotLoggedError, getPlan } from '../rai'
import { auth } from '../firebase'
import { SubscriptionDataInterface } from 'chat/raiChatTypes'

const db = getFirestore()

auth.onAuthStateChanged(async (user) => {
  if (user === null) {
    window.location.href = '/auth/signin.html'
    throw new NotLoggedError('User is not signed in')
  }

  const ENDPOINT_URL = window.location.hostname === '10.249.176.251' ? 'http://127.0.0.1:4649' : 'https://api.raic.tech'

  const query = await getDoc(doc(db, 'subscription-state', user.uid))
  const userData = query.data() as SubscriptionDataInterface
  if (!query.exists()) return

  const sSContainer = document.getElementById('subscriptionStateContainer') as HTMLDivElement
  const formElement = document.getElementById('checkoutCreateForm') as HTMLFormElement
  const payButtons = document.querySelectorAll('.pay-buttons')
  const sSTitle = document.getElementById('subscriptionStateHeader')
  const sSDescription = document.getElementById('subscriptionStateBody')

  if (sSContainer == null || sSTitle == null || sSDescription == null || formElement == null) return

  formElement.action = `${ENDPOINT_URL}/stripe/create-checkout-session`

  sSContainer.classList.remove('is-hidden')

  if (getPlan(userData.plan) != 'free') {
    payButtons.forEach((element) => {
      element.classList.add('disabled')
      element.setAttribute('disabled', 'true')
      const payContainer = element.closest(".app_payContainer")
      if (payContainer) {
        (payContainer as HTMLElement).style.filter = "blur(10px)";
        (payContainer as HTMLElement).style.pointerEvents = "none";
        (payContainer as HTMLElement).style.display = "none";
      }
      if (element.hasAttribute("href")) {
        element.setAttribute("href", "javascript:void(0)")
      }
    })
  }

  switch (getPlan(userData.plan)) {
    case 'pro':
      sSTitle.textContent = 'Proはアクティブです'
      sSDescription.innerHTML = 'あなたの特典申請リクエストは承認されました。<br>Proをご購入いただき、ありがとうございます。'
      break
    case 'premiumplus':
      sSTitle.textContent = 'プレミアムプラスはアクティブです'
      sSDescription.innerHTML = 'あなたの特典申請リクエストは承認されました。<br>プレミアムプラスをご購入いただき、ありがとうございます。'
      break
    case 'premium':
      sSTitle.textContent = 'プレミアムはアクティブです'
      sSDescription.innerHTML = 'あなたの特典申請リクエストは承認されました。<br>プレミアムをご購入いただき、ありがとうございます。'
      break
  }
  if (userData.isStaff) {
    sSTitle.textContent = 'スタッフ権限がアクティブです'
    sSDescription.innerHTML = 'あなたは、UpLauncherチームのスタッフであるため、プレミアムプラスとRai Chatの管理などを利用できます。'
  }
  if (userData.isStudent) {
    sSTitle.textContent = '学生プランがアクティブです'
    sSDescription.innerHTML = 'あなたは、学生であるため、プレミアムプラスの特典が利用できます。'
  }
})
