/*
    Rai Website, a powerful tools, fun!
    ©2024 Rai and UpLauncher.

    Description: Stripe checkout module for the Rai Website.
*/

import { auth } from '../firebase'

auth.onAuthStateChanged(async (user) => {
  if (!user) {
    location.href = '/auth/signin.html?continue_to=' + location.href
    return
  }

  const progressElement = document.getElementById('app_paidEquipProgress')
  if (!progressElement) {
    alert('必要な要素が見つかりませんでした。再読み込みしても解決しない場合は、Stripeに入力したメールアドレスを添えてサポートへ連絡してください。')
    return
  }
  const urlParams = new URLSearchParams(window.location.search)
  const sessionId = urlParams.get('session_id')

  if (!sessionId) {
    progressElement.textContent = 'セッションIDの取得に失敗しました。これは本当にStripeで購入したものですか？本当に購入した場合は、Stripeに入力したメールアドレスを添えてサポートに連絡してください。'
    return
  }

  const ENDPOINT_URL = window.location.hostname === '10.249.176.251' ? 'http://127.0.0.1:4649' : 'https://api.raic.tech'

  progressElement.textContent = 'サーバーに接続中...しばらくお待ちください。'

  let req = null
  try {
    req = await fetch(`${ENDPOINT_URL}/stripe/equip_paid_plans?session_id=${sessionId}`, { method: 'POST', headers: { authorization: await user.getIdToken() } })
  } catch (e) {
    progressElement.textContent = 'リクエスト中にエラーが発生しました。再読み込みしても解決しない場合、サポートにこのメッセージとStripeに入力したメールアドレスを添えて連絡してください。'
    return
  }
  if (req) {
    if (req.ok) {
      progressElement.textContent = '有料プランの適用に成功しました！パネルへ移動しています...'
    } else {
      if (req.status == 400) {
        progressElement.textContent = '有料プランの適用中にエラーが発生しました。サポートにこのメッセージとStripeに入力したメールアドレスを添えて連絡してください。'
      } else if (req.status == 401) {
        progressElement.textContent = '有料プランの適用中にエラーが発生しました。ユーザーを認証できませんでした。サポートにこのメッセージとStripeに入力したメールアドレスを添えて連絡してください。'
      } else {
        progressElement.textContent = '不明なエラーが発生しました。サポートにこのメッセージとStripeに入力したメールアドレスを添えて連絡してください。'
      }
    }
  } else {
    progressElement.textContent = "Request is null."
  }
})
