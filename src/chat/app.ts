import { getDatabase, ref, set, onChildAdded, child, get } from 'firebase/database'
import { getFirestore, getDocs, collection, addDoc, getDoc, doc, setDoc } from 'firebase/firestore'
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
let isStudent = false

const auth = getAuth()
const db = getDatabase()
const dbF = getFirestore()

if (window.localStorage.getItem('raichat-settings-available') === null) {
  window.localStorage.setItem('raichat-settings-available', 'true')
  window.localStorage.setItem('raichat-markdown', 'true')
  window.localStorage.setItem('raichat-ngwords', JSON.stringify(['死ね']))
}

if (window.localStorage.getItem('raichat-hide-checkmark') === undefined) {
  window.localStorage.setItem('raichat-hide-checkmark', 'false')
}

const raiMarkdown = window.localStorage.getItem('raichat-markdown')
const hideCheckmark = window.localStorage.getItem('raichat-hide-checkmark')

setTimeout(() => {
  current_limit = 0
}, 15000)
;(content as HTMLElement)!.style.display = 'none'

document.querySelector('body')?.addEventListener('click', async function (e) {
  if (e.target instanceof HTMLAnchorElement) {
    if (
      e.target.hostname == 'raic.tech' ||
      e.target.hostname == '10.249.176.251' ||
      e.target.hostname == 'www.patreon.com' ||
      e.target.href === 'javascript:void(0)' ||
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

  if (subscription == 'owner') {
    if (e.target instanceof HTMLElement) {
      if (e.target.classList.contains('ban')) {
        const userId = e.target.parentElement?.parentElement?.parentElement?.getAttribute('data-userId')
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
    if (e.target.classList.contains('favorite')) {
      const messageId = e.target.parentElement?.parentElement?.parentElement?.getAttribute('data-messageId')
      if (messageId) {
        const fetchChat = ref(db)
        const userId = document.getElementsByTagName('body')[0].dataset.user

        await getDoc(doc(dbF, 'raichat-message-status', messageId, userId || 'null', 'data')).then(async (snapshot) => {
          if (snapshot.exists()) {
            if (snapshot.data().isFavorited) {
              ShowAlert('いいね', 'このメッセージを既にいいねしています。')
              return
            }
          } else {
            get(child(fetchChat, 'messages/' + messageId)).then(async (snapshot) => {
              set(ref(db, 'messages/' + messageId), {
                username: snapshot.val().username,
                paid: snapshot.val().paid,
                uid: snapshot.val().uid,
                id: snapshot.val().id,
                time: snapshot.val().time,
                message: snapshot.val().message,
                favorite: snapshot.val().favorite ? snapshot.val().favorite + 1 : 1,
              })

              if (e.target instanceof HTMLElement) {
                const favoriteText =
                  e.target.parentElement?.parentElement?.parentElement?.querySelector('.favoriteText')
                if (favoriteText) {
                  favoriteText.textContent = snapshot.val().favorite ? snapshot.val().favorite + 1 : 1
                }
              }
              await setDoc(doc(dbF, 'raichat-message-status', messageId, userId || 'null', 'data'), {
                isFavorited: true,
              })
            })
          }
        })
      }
    }
  }

  if (e.target instanceof HTMLElement) {
    if (e.target.classList.contains('verified')) {
      ShowAlert(
        '認証されたユーザー',
        '<i class="fas fa-check color-blue"></i>このユーザーはStandard以上のプランを購入しているため、認証されています。',
      )
    } else if (e.target.classList.contains('owner')) {
      ShowAlert(
        '認証されたユーザー',
        '<i class="fas fa-screwdriver-wrench color-gold"></i>このユーザーはオーナー権限を持っているため、認証されています。',
      )
    } else if (e.target.classList.contains('student')) {
      ShowAlert(
        '認証されたユーザー',
        '<i class="fas fa-user color-green"></i>このユーザーは学生のため、認証されています。',
      )
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

  document.getElementsByTagName('body')[0].dataset.user = user.uid

  const query = await getDoc(doc(dbF, 'patreonlinkstatus', user.uid))
  if (query.exists()) {
    subscription = query.data().plan
    isStudent = query.data().isStudent
  }

  const userDoc = await getDoc(doc(dbF, 'raichat-user-status', user.uid))

  if (userDoc.exists() === false) {
    await setDoc(doc(dbF, 'raichat-user-status', user?.uid), {
      banned: false,
    })
  } else {
    await setDoc(doc(dbF, 'raichat-user-status', user?.uid), {
      username: user.displayName,
      checkmarkState: hideCheckmark,
      paid: subscription,
      isStudent: isStudent,
      banned: userDoc.data().banned,
    })
    if (userDoc.data().banned == true) {
      window.location.href = '/chat/app/banned.html'
    }
  }

  const fetchChat = ref(db, 'messages/')

  sendMessageButton.addEventListener('click', () => {
    const message = (document.getElementById('app-message') as HTMLInputElement).value
    sendMessage(message, user)
  })

  const loopTime = 0 // eslint-disable-line @typescript-eslint/no-unused-vars

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
    message = message.replace(/&/g, '&amp;')
    message = message.replace(/"/g, '&quot;')
    message = message.replace(/'/g, '&#x27;')
    message = message.replace(/</g, '&lt;')
    message = message.replace(/>/g, '&gt;')
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
      if (messages.paid != 'free') {
        message = message.replace(/\[img\]/g, '<br><img src="')
        message = message.replace(/\[\/img\]/g, '" onload="this.width=500;this.onload=null;">')
        message = message.replace(/\[color=#([0-9a-fA-F]{6})\]/g, '<span style="color: #$1 !important">')
        message = message.replace(/\[\/color\]/g, '</span>')
      }
    }
    const userDoc = await getDoc(doc(dbF, 'raichat-user-status', messages.uid))
    if (userDoc.exists() === true) {
      const userDocData = userDoc.data()
      if (userDoc.data().banned == true) {
        messageElement.remove()
        ;(content as HTMLElement)!.style.display = ''
        return
      } else {
        messageElement.classList.add(
          isCheckmarker(userDocData)
            ? userDocData.paid == 'owner'
              ? 'owner'
              : userDocData.isStudent
                ? 'student'
                : 'verified'
            : 'free',
        )

        messageSpan.innerHTML = `<span>${userDocData.username} ${isCheckmarker(userDocData) ? (userDocData.paid == 'owner' ? '<i class="fas fa-screwdriver-wrench owner color-gold"></i>' : userDocData.isStudent ? '<i class="fas fa-user student color-green"></i>' : '<i class="fas fa-check verified color-blue"></i>') : ''}(${messages.time})${subscription == 'owner' ? '&nbsp;<i class="far fa-hammer ban color-gold"></i>&nbsp;' : ''} <i class="far fa-heart favorite color-red"></i>&nbsp; <span class="favoriteText">${messages.favorite}</span>: ${message}</span>`
      }
    }

    messageElement.appendChild(messageSpan)
    timeline.insertBefore(messageElement, timeline.firstChild)
    ;(content as HTMLElement)!.style.display = ''
  })
})

function isCheckmarker(userData: any) {
  // eslint-disable-line @typescript-eslint/no-explicit-any
  const result = userData.paid != 'free' && userData.checkmarkState === 'false'
  return result
}

document.getElementById('searchInput')?.addEventListener('keyup', function () {
  let searchValue = (this as HTMLInputElement).value.toLowerCase()
  const listItems = document.getElementById('app-timeline')?.getElementsByTagName('li')

  if (listItems === undefined || listItems === null) return

  const isPremiumSearch = searchValue.includes(' [premium]')
  const isStudentSearch = searchValue.includes(' [student]')
  if (isPremiumSearch) {
    searchValue = searchValue.replace(' [premium]', '')
  }
  if (isStudentSearch) {
    searchValue = searchValue.replace(' [student]', '')
  }
  for (let i = 0; i < listItems.length; i++) {
    if (listItems[i] === null) return
    srnfc?.classList.add('is-hidden')
    const itemText = listItems[i]?.textContent?.toLowerCase()
    itemText?.replace(/\&lt;/g, '') // eslint-disable-line no-useless-escape
    itemText?.replace(/\&gt;/g, '') // eslint-disable-line no-useless-escape
    if (itemText && itemText.indexOf(searchValue) > -1) {
      if (isPremiumSearch) {
        if (listItems[i].classList.contains('verified') || listItems[i].classList.contains('owner')) {
          listItems[i].style.display = ''
        } else {
          listItems[i].style.display = 'none'
        }
      } else if (isStudentSearch) {
        if (listItems[i].classList.contains('student')) {
          listItems[i].style.display = ''
        } else {
          listItems[i].style.display = 'none'
        }
      } else {
        listItems[i].style.display = ''
        srnfc?.classList.add('is-hidden')
      }
    } else {
      listItems[i].style.display = 'none'
      srnfc?.classList.remove('is-hidden')
    }
  }
})

function auto_link(val: string) {
  const exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi // eslint-disable-line no-useless-escape
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
    paid: hideCheckmark ? 'free' : isStudent ? 'student' : subscription,
    uid: user.uid,
    id: timestamp + '-' + user.uid,
    time: new Date().toLocaleString(),
    message,
    favorite: 0,
  }).then(() => {
    current_limit++
  })
}

function ShowAlert(title: string, message: string) {
  const messageAlertDialog = document.getElementById('app-message-dialog') as HTMLDialogElement
  const dialogContent = document.getElementById('app-message-dialog-content')
  const dialogTitle = document.getElementById('app-message-dialog-title')
  const dialogDescription = document.getElementById('app-message-dialog-description')
  if (messageAlertDialog === null || dialogContent === null || dialogTitle === null || dialogDescription === null)
    return
  dialogContent.classList.add('is-active')
  dialogTitle.innerHTML = title
  dialogDescription.innerHTML = message
  messageAlertDialog.showModal()
}
