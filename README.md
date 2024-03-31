# 雷のウェブサイト

## 概要

雷のウェブサイト([https://raic.tech](https://raic.tech))のソースコードです。2024/03/18(月)からオープンソースになりました。

**このままでは、動作しません。firebase.tsを作成してfirebaseのコンフィグを編集する必要があります**

## Firebaseのコンフィグについて

`firebase.ts`に次のコードを追加してください。(APIキー等は編集してください)

Firebaseの構成についてヘルプが必要ですか？[こちら](https://firebase.google.com/docs/auth/web/start?hl=ja)をご覧ください。

```typescript
import { initializeApp } from 'firebase/app'

export function InitApp() {
  const firebaseConfig = {
    apiKey: 'APIキー',
    authDomain: '認証ドメイン',
    projectId: 'プロジェクトID',
    storageBucket: 'ストレージバケット',
    messagingSenderId: 'メッセージ送信者ID',
  }

  initializeApp(firebaseConfig!)
  console.log('[firebase.ts] Initialized Firebase App (Type: InitApp)')
}
```

## IssuesとPull requestsについて

IssuesとPull requestsを快適に使用するために、下記のルールに従ってください。

1. 同じリクエストを複数送信しないでください。
2. 拒否されてもクレーム等はやめてください。
3. UpLauncherチームの指示に従ってください。

## クレジット

最新のクレジットについては、[こちら](https://raic.tech)のフッター欄をご覧ください。
