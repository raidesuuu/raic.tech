/*
    Rai Website, a powerful tools, fun!
    ©2024 Rai and UpLauncher.

    Description: Subscription module for the Rai Website.
*/

import { getFirestore, getDoc, doc } from 'firebase/firestore'
import { NotLoggedError } from '../rai'
import { auth } from '../firebase'
import { SubscriptionDataInterface } from 'chat/raiChatTypes'

const db = getFirestore()

auth.onAuthStateChanged(async (user) => {
  if (user === null) {
    window.location.href = '/auth/signin.html'
    throw new NotLoggedError('User is not signed in')
  }

  const query = await getDoc(doc(db, 'subscription-state', user.uid))
  const userData = query.data() as SubscriptionDataInterface
  if (!query.exists()) return

  const sSContainer = document.getElementById('sSContainer') as HTMLDivElement
  const sSTitle = document.getElementById("subscriptionStateHeader")
  const sSDescription = document.getElementById("subscriptionStateBody")

  if (sSContainer == null || sSTitle == null || sSDescription == null) return

  sSContainer.classList.remove('is-hidden')
  switch (userData.plan) {
    case 'premiumplus':
      sSTitle.textContent = 'プレミアムプラスはアクティブです'
      sSDescription.innerHTML = 'あなたの特典申請リクエストは承認されました。<br>最上級プランのプレミアムプラスをご購入いただき、ありがとうございます。'
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
