import { getDatabase, ref, set, onChildAdded } from 'firebase/database'
import { getFirestore, getDocs, setDoc, collection, addDoc } from 'firebase/firestore'
import { User, getAuth, onAuthStateChanged } from 'firebase/auth'
import { InitApp } from '../firebase'

InitApp()

//define elements
const content = document.getElementById('app-content')
const sendMessageButton = document.getElementById('app-send-message') as HTMLButtonElement
const timeline = document.getElementById('app-timeline')
const messageAlert = document.getElementById('app-message-alert')
const srnfc = document.getElementById('searchResultNotFoundContainer')
let subscription = 'free'
let current_limit = 0

const auth = getAuth()
const db = getDatabase()
const dbF = getFirestore()

if (window.localStorage.getItem('raichat-settings-available') === null) {
  window.localStorage.setItem('raichat-settings-available', 'true')
  window.localStorage.setItem('raichat-markdown', 'true')
  window.localStorage.setItem('raichat-ngwords', JSON.stringify(['死ね']))
}

const raiMarkdown = window.localStorage.getItem('raichat-markdown')

const timeout = setTimeout(() => {
  current_limit = 0
}, 15000)
;(content as HTMLElement)!.style.display = 'none'

document.querySelector('body')?.addEventListener('click', async function (e) {
  if (e.target instanceof HTMLAnchorElement) {
    if (
      e.target.href.includes('https://raic.tech') ||
      e.target.href.includes('http://10.249.176.251:8080') ||
      e.target.href.includes('https://www.patreon.com') ||
      e.target.href.includes('javascript:void(0)') ||
      e.target.href === ''
    )
      return
    e.preventDefault()
    if (e.target.href.includes('javascript:')) {
      if (e.target.href.includes('javascript:void(0)')) return
      alert(
        '悪意のあるリンクを開こうとしました。このリンクは、UpLauncherのサイト外です。\nWebは便利ですが、危険なリンクもあります。',
      )
      return
    }
    confirm(
      'リンクを開きますか？このリンクは、UpLauncherのサイト外です。\nWebは便利ですが、このリンクは危険な可能性もあります。(新しいタブで開きます)',
    ) && window.open(e.target.href, '_blank')
  }

  console.log(subscription)
  if (subscription == 'owner') {
    console.log('owner')
    if (e.target instanceof HTMLElement) {
      console.log(e.target.classList.contains('ban'))
      if (e.target.classList.contains('ban')) {
        const userId = e.target.parentElement?.parentElement?.parentElement?.getAttribute('data-userId')
        console.log(userId)
        if (userId) {
          if (confirm('このユーザーをBANしますか？')) {
            await addDoc(collection(dbF, 'raichat-user-status' + userId), {
              banned: true,
            })
          }
        }
      }
    }
  }

  if (e.target instanceof HTMLElement) {
    if (e.target.classList.contains('verified')) {
      alert('このユーザーはStandard以上のプランを購入しているため、認証されています。')
    } else if (e.target.classList.contains('owner')) {
      alert('このユーザーはUpLauncherの管理者なため、認証されています。')
    }
  }
})

onAuthStateChanged(auth, async (user) => {
  if (user === null) {
    window.location.href = '/auth/signin.html'
    return
  }

  if (timeline === null) {
    console.log('[NullCheck]: #timeline is null')
    return
  }
  const userDoc = await getDocs(collection(dbF, 'raichat-user-status' + user.uid))
  userDoc.forEach((doc) => {
    if (doc.data().banned == true) {
      window.location.href = '/chat/app/banned.html'
    }
  })

  if (userDoc.empty) {
    await addDoc(collection(dbF, 'raichat-user-status' + user?.uid), {
      banned: false,
    })
  }

  const query = await getDocs(collection(dbF, 'patreonlinkstatus-' + user.uid))
  query.forEach((doc) => {
    subscription = doc.data().plan
  })

  const fetchChat = ref(db, 'messages/')

  sendMessageButton.addEventListener('click', () => {
    const message = (document.getElementById('app-message') as HTMLInputElement).value
    sendMessage(message, user)
  })

  let loopTime = 0

  onChildAdded(fetchChat, async (snapshot) => {
    const messages = snapshot.val()
    // check xss
    const messageElement = document.createElement('li')
    messageElement.setAttribute('data-messageId', messages.id || 'undefined')
    messageElement.setAttribute('data-userId', messages.uid || 'undefined')

    messageElement.classList.add(user?.displayName === messages.username ? 'sent' : 'receive')
    const messageSpan = document.createElement('span')
    let message = messages.message
    //protect from xss
    message = message.replace(/</g, '&lt;')
    message = message.replace(/>/g, '&gt;')
    message = message.replace(/&/g, '&amp;')
    message = message.replace(/"/g, '&quot;')
    message = message.replace(/'/g, '&#x27;')
    message = message.replace(/\n/g, '<br>')
    //support markdown
    if (raiMarkdown === 'true') {
      message = message.replace(/\[b\]/g, '<b>')
      message = message.replace(/\[\/b\]/g, '</b>')
      message = message.replace(/\[i\]/g, '<i>')
      message = message.replace(/\[\/i\]/g, '</i>')
      message = message.replace(/\[u\]/g, '<u>')
      message = message.replace(/\[\/u\]/g, '</u>')
      message = message.replace(/\[s\]/g, '<s>')
      message = message.replace(/\[\/s\]/g, '</s>')
      //protect from xss
      message = message.replace(/\[icon\]/g, '<i class="fas fa-')
      message = message.replace(/\[\/icon\]/g, '"></i>')
      message = auto_link(message)
      message = message.replace(/\[url\]/g, '<a href="')
      message = message.replace(/\[\/url\]/g, '"><i style="color: white;" class="fa fa-globe">&nbsp;</i>URL</a>')
      message = message.replace(/\[img\]/g, '<br><img src="')
      message = message.replace(/\[\/img\]/g, '" onload="this.width=500;this.onload=null;">')
      //color with hex = [color=#ff0000]text[/color]
      message = message.replace(/\[color=#([0-9a-fA-F]{6})\]/g, '<span style="color: #$1 !important">')
      message = message.replace(/\[\/color\]/g, '</span>')
    }
    messageSpan.innerHTML = `<span>${messages.username} ${messages.paid != 'free' ? (messages.paid == 'owner' ? '<i style="color: gold" class="fas fa-screwdriver-wrench owner"></i>' : '<i style="color: gold" class="fas fa-check verified"></i>') : ''}(${messages.time})${subscription == 'owner' ? '&nbsp<i style="color: gold" class="far fa-hammer ban"></i>&nbsp' : ''}: ${message}</span>`
    const userDoc = await getDocs(collection(dbF, 'raichat-user-status' + messages.uid))
    console.log(messageSpan)
    userDoc.forEach((doc) => {
      if (doc.data().banned == true) {
        console.log("Banned user's message")
        console.log(messageSpan)
        messageElement.remove()
        return
      } else {
        loopTime++
        messageElement.appendChild(messageSpan)
        timeline.insertBefore(messageElement, timeline.firstChild)
      }
    })
    ;(content as HTMLElement)!.style.display = ''
  })
})

document.getElementById('searchInput')?.addEventListener('keyup', function () {
  const searchValue = (this as HTMLInputElement).value.toLowerCase()
  const listItems = document.getElementById('app-timeline')?.getElementsByTagName('li')

  if (listItems === undefined || listItems === null) return

  for (let i = 0; i < listItems.length; i++) {
    if (listItems[i] === null) return
    srnfc?.classList.add('is-hidden')
    const itemText = listItems[i]?.textContent?.toLowerCase()
    if (itemText && itemText.indexOf(searchValue) > -1) {
      listItems[i].style.display = ''
    } else {
      listItems[i].style.display = 'none'
      srnfc?.classList.remove('is-hidden')
    }
  }
})

function auto_link(val: string) {
  const exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi
  if (val.includes('[url]')) {
    return val
  } else if (val.includes('img')) {
    return val
  } else {
    return val.replace(exp, "<i class='fa fa-globe'>&nbsp;</i><a target='_blank' href='$1'>$1</a>")
  }
}

async function sendMessage(message: string, user: User | null) {
  const ngWords = [
    '死ね',
    '殺す',
    '殺害',
    'アホ',
    'バカ',
    'カス',
    'ころす',
    'しね',
    'あほ',
    'アダルト',
    'エロ',
    'セックス',
    'sex',
    'fuck',
    'マン凸',
    'チン凸',
    'pornhub.com',
    'xvideos.com',
  ]
  if (user === null || messageAlert === null) return
  if (message === '') {
    messageAlert.classList.remove('is-hidden')
    messageAlert.textContent = 'メッセージを入力してください'
    return
  }
  const userDoc = await getDocs(collection(dbF, 'raichat-user-status' + user.uid))
  userDoc.forEach((doc) => {
    if (doc.data().banned == true) {
      window.location.href = '/chat/app/banned.html'
    }
  })
  if (message.length > 100) {
    messageAlert.classList.remove('is-hidden')
    messageAlert.textContent = 'メッセージは100文字以内で入力してください'
    return
  }
  if (ngWords.some((word) => message.includes(word))) {
    messageAlert!.classList.remove('is-hidden')
    messageAlert!.textContent = 'NGワードが含まれています'
    if (subscription != 'owner') {
      await addDoc(collection(dbF, 'raichat-user-status' + user?.uid), {
        banned: true,
      })
      window.location.reload()
    } else {
      messageAlert!.textContent = 'NGワードが含まれていますが、オーナー権限がアクティブなためBANされません。'
    }

    return
  }
  //rate limit
  if (current_limit >= 3) {
    messageAlert!.classList.remove('is-hidden')
    messageAlert!.textContent = '連続でメッセージを送信することはできません'
    return
  }
  const timestamp = Date.now()

  set(ref(db, 'messages/' + timestamp + '-' + user.uid), {
    username: user.displayName,
    paid: subscription,
    uid: user.uid,
    id: user.uid + '-' + timestamp,
    time: new Date().toLocaleString(),
    message,
  }).then(() => {
    current_limit++
  })
}
