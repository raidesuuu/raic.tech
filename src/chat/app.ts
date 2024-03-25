import { getDatabase, ref, set, onChildAdded, child, get } from 'firebase/database'
import { getFirestore, getDoc, doc, setDoc, deleteDoc } from 'firebase/firestore'
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

  //danger actions
  if (e.target instanceof HTMLElement) {
    if (e.target.classList.contains('remove')) {
      const messageId = e.target.parentElement?.parentElement?.parentElement?.getAttribute('data-messageId')
      if (messageId) {
        await showConfirm('メッセージ', 'このメッセージを削除しますか？').then((result: any) => {
          if (result) {
            set(ref(db, 'messages/' + messageId), null)
            if (e.target instanceof HTMLElement) {
              e.target.parentElement?.parentElement?.parentElement?.remove()
            }
          }
        })
      }
    } else if (e.target.classList.contains('report')) {
      const messageId = e.target.parentElement?.parentElement?.parentElement?.getAttribute('data-messageId')
      const userId = document.getElementsByTagName('body')[0].dataset.user
      if (messageId) {
        await showReportConfirm().then(async (result: any) => {
          if (result != 'false') {
            await setDoc(doc(dbF, 'raichat-report', messageId, 'user', userId || 'abc'), {
              type: JSON.parse(result).type,
              message: JSON.parse(result).message,
            }).then(() => {
              ShowAlert(
                'メッセージを報告',
                'このメッセージの報告が完了しました。<br>Rai Chatを貢献してくださり、ありがとうございます。<br><h2>注意事項</h2><ul><li>・メッセージは1回しか報告できません。</li><li>・BANされるまでに時間がかかります。</li><li>・BANされてもされなくてもお知らせはされません。</li></ul>',
              )
            })
          } else {
            console.log(result)
          }
        })
      }
    }
  }

  if (subscription == 'owner') {
    if (e.target instanceof HTMLElement) {
      if (e.target.classList.contains('ban')) {
        const userId = e.target.parentElement?.parentElement?.parentElement?.getAttribute('data-userId')
        if (userId) {
          await showConfirm('ユーザー', 'このユーザーをBANしますか？').then((result: any) => {
            if (result) {
              getDoc(doc(dbF, 'raichat-user-status', userId)).then(async (snapshot) => {
                if (snapshot.exists()) {
                  setDoc(doc(dbF, 'raichat-user-status', userId), {
                    username: snapshot.data().username,
                    checkmarkState: snapshot.data().checkmarkState,
                    paid: snapshot.data().paid,
                    banned: true,
                  })
                }
              })
            }
          })
        }
      } else if (e.target.classList.contains('remove-manually')) {
        const messageId = e.target.parentElement?.parentElement?.parentElement?.getAttribute('data-messageId')
        if (messageId) {
          await showConfirm('メッセージ', 'このメッセージを"不適切"ラベル付きで削除しますか？').then((result: any) => {
            if (result) {
              const fetchChat = ref(db)
              get(child(fetchChat, 'messages/' + messageId)).then(async (snapshot) => {
                set(ref(db, 'messages/' + messageId), {
                  username: 'Rai Chat System',
                  paid: 'free',
                  uid: 'system',
                  id: snapshot.val().id,
                  time: snapshot.val().time,
                  isSystemMessage: true,
                  message: 'このメッセージはUpLauncherの管理者によって削除されました。',
                  favorite: 0,
                })
                if (e.target instanceof HTMLElement) {
                  e.target.parentElement?.parentElement?.parentElement?.remove()
                }
              })
            } else {
              console.log(result)
            }
          })
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

        const favoriteSystemCheck = e.target.parentElement?.parentElement?.parentElement?.querySelector('.system')
        if (favoriteSystemCheck) {
          ShowAlert(
            'メッセージ',
            '<i class="far fa-shield color-red"></i>このメッセージはシステムメッセージのため、いいねできません。',
          )
          return
        }

        await getDoc(doc(dbF, 'raichat-message-status', messageId, userId || 'null', 'data')).then(async (snapshot) => {
          if (snapshot.exists()) {
            if (snapshot.data().isFavorited) {
              get(child(fetchChat, 'messages/' + messageId)).then(async (snapshot) => {
                set(ref(db, 'messages/' + messageId), {
                  username: snapshot.val().username,
                  paid: snapshot.val().paid,
                  uid: snapshot.val().uid,
                  id: snapshot.val().id,
                  time: snapshot.val().time,
                  message: snapshot.val().message,
                  favorite: snapshot.val().favorite ? snapshot.val().favorite - 1 : 0,
                })

                if (e.target instanceof HTMLElement) {
                  const favoriteText =
                    e.target.parentElement?.parentElement?.parentElement?.querySelector('.favoriteText')
                  if (favoriteText) {
                    favoriteText.textContent = String(snapshot.val().favorite ? snapshot.val().favorite - 1 : 0)
                  }
                }
                await deleteDoc(doc(dbF, 'raichat-message-status', messageId, userId || 'null', 'data'))
              })
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
        '<i class="fas fa-check color-blue"></i>このユーザーはStandard以上のプランを購入していて、本人であることが確認されているため認証されています。<a href="/chat/docs/verified.html" target="_blank" noreferrer noopener>詳細はこちら。</a>',
      )
    } else if (e.target.classList.contains('owner')) {
      ShowAlert(
        '認証されたユーザー',
        '<i class="fas fa-screwdriver-wrench color-gold"></i>このユーザーはUpLauncherの管理者であるため、認証されています。<a href="/chat/docs/verified.html" target="_blank" noreferrer noopener>詳細はこちら。</a>',
      )
    } else if (e.target.classList.contains('student')) {
      ShowAlert(
        '認証されたユーザー',
        '<i class="fas fa-user color-green"></i>このユーザーは学生のため、認証されています。<a href="/chat/docs/verified.html" target="_blank" noreferrer noopener>詳細はこちら。</a>',
      )
    } else if (e.target.classList.contains('system')) {
      ShowAlert(
        '認証されたユーザー',
        '<i class="far fa-shield color-red"></i>このメッセージはRai Chatのシステムからのメッセージです。<a href="/chat/docs/verified.html" target="_blank" noreferrer noopener>詳細はこちら。</a>',
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
      verified: userDoc.data().verified ? userDoc.data().verified : false,
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
      message = message.replace(/\[\/url\]/g, '"><i style="color: white;" class="far fa-globe"></i>URL</a>')
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
        messageSpan.innerHTML = `<span>Rai Chat System <i class="far fa-shield system color-red"></i> ${messages.time})${subscription == 'owner' ? '&nbsp;<i class="far fa-hammer remove-manually color-gold mr1px"></i> <i class="far fa-xmark remove color-gold"></i> ' : ''}: BANされているユーザーからのメッセージです。<a href="/chat/docs/tos.html" target="_blank" noreferrer noopener>利用規約。</a></span>`
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

        messageSpan.innerHTML = `<span>${userDocData.username} ${isCheckmarker(userDocData) ? (userDocData.paid == 'owner' ? '<i class="fas fa-screwdriver-wrench owner color-gold"></i>' : userDocData.isStudent ? '<i class="fas fa-user student color-green"></i>' : '<i class="fas fa-check verified color-blue"></i>') : ''}${messages.isSystemMessage ? '<i class="far fa-shield system color-red"></i>' : ''}(${messages.time})${subscription == 'owner' ? '&nbsp;<i class="far fa-ban ban color-red mr1px"></i> <i class="far fa-hammer remove-manually color-gold mr1px"></i> <i class="far fa-xmark remove color-gold"></i> ' : ''} ${messages.uid == user.uid ? '<i class="far fa-xmark remove color-red"></i>' : ''}<i class="far fa-flag color-red report mr1px"></i> <i class="far fa-heart favorite color-red"></i> <span class="favoriteText">${messages.favorite}</span>: ${message}</span>`
      }
    }

    messageElement.appendChild(messageSpan)
    timeline.insertBefore(messageElement, timeline.firstChild)
    ;(content as HTMLElement)!.style.display = ''
  })
})

function isCheckmarker(userData: any) {
  // eslint-disable-line @typescript-eslint/no-explicit-any
  const result = userData.paid != 'free' && userData.verified == true && userData.checkmarkState === 'false'
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
    return val.replace(exp, "<i class='far fa-globe'></i><a target='_blank' href='$1'>$1</a>")
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
    'うんこ',
    'まんこ',
    'ちんこ',
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
  const userDoc = await getDoc(doc(dbF, 'raichat-user-status', user.uid))
  if (userDoc.exists()) {
    if (userDoc.data().banned == true) {
      window.location.href = '/chat/app/banned.html'
    }
  }

  if (message.length > 100) {
    messageAlert.classList.remove('is-hidden')
    messageAlert.textContent = 'メッセージは100文字以内で入力してください'
    return
  }
  if (
    ngWords.some((word) => message.includes(word)) ||
    ngWords.some((word) => user.displayName?.includes(word)) ||
    user.displayName === 'Rai Chat System'
  ) {
    messageAlert!.classList.remove('is-hidden')
    messageAlert!.textContent = 'NGワードが含まれているか、使用できない名前が含まれています。'
    if (subscription != 'owner') {
      const timestamp = Date.now()

      set(ref(db, 'messages/' + timestamp + '-' + user.uid), {
        username: user.displayName,
        paid: hideCheckmark ? 'free' : isStudent ? 'student' : subscription,
        verified: false,
        uid: user.uid,
        id: timestamp + '-' + user.uid,
        isSystemMessage: true,
        time: new Date().toLocaleString(),
        message: 'このメッセージの内容は、Rai Chatの利用規約に違反しています。',
        favorite: 0,
      }).then(() => {
        current_limit++
      })

      await setDoc(doc(dbF, 'raichat-user-status', user?.uid), {
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

  const userDataDoc = await getDoc(doc(dbF, 'raichat-user-status', user.uid))
  set(ref(db, 'messages/' + timestamp + '-' + user.uid), {
    username: user.displayName,
    paid: hideCheckmark ? 'free' : isStudent ? 'student' : subscription,
    verified: userDataDoc.exists() ? userDataDoc.data().verified : false,
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
  const confirmButton = document.getElementById('app-message-dialog-button')
  const cancelButton = document.getElementById('app-message-dialog-close')
  if (
    messageAlertDialog === null ||
    dialogContent === null ||
    dialogTitle === null ||
    dialogDescription === null ||
    confirmButton === null ||
    cancelButton === null
  ) {
    return
  }
  dialogContent.classList.add('is-active')
  dialogTitle.innerHTML = title
  dialogDescription.innerHTML = message
  confirmButton.classList.add('is-hidden')
  cancelButton.textContent = '閉じる'
  messageAlertDialog.showModal()
}

//support await with args
const showConfirm = (title: string, message: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const messageAlertDialog = document.getElementById('app-message-dialog') as HTMLDialogElement
    const dialogContent = document.getElementById('app-message-dialog-content')
    const dialogTitle = document.getElementById('app-message-dialog-title')
    const dialogDescription = document.getElementById('app-message-dialog-description')
    const confirmButton = document.getElementById('app-message-dialog-button')
    const cancelButton = document.getElementById('app-message-dialog-close')
    if (
      messageAlertDialog === null ||
      dialogContent === null ||
      dialogTitle === null ||
      dialogDescription === null ||
      confirmButton === null ||
      cancelButton === null
    ) {
      console.log('Error: Element is null')
      console.log('messageAlertDialog:', messageAlertDialog)
      console.log('dialogContent:', dialogContent)
      console.log('dialogTitle:', dialogTitle)
      console.log('dialogDescription:', dialogDescription)
      console.log('confirmButton:', confirmButton)
      console.log('cancelButton:', cancelButton)
      resolve(false)
      return
    }
    dialogContent.classList.add('is-active')
    dialogTitle.innerHTML = title
    dialogDescription.innerHTML = message
    confirmButton.classList.remove('is-hidden')
    cancelButton.textContent = 'キャンセル'
    messageAlertDialog.showModal()
    confirmButton.addEventListener('click', () => {
      messageAlertDialog.close()
      resolve(true)
    })
    cancelButton.addEventListener('click', () => {
      messageAlertDialog.close()
      resolve(false)
    })
  })
}

const showReportConfirm = (): Promise<string> => {
  return new Promise((resolve) => {
    const messageAlertDialog = document.getElementById('app-report-dialog') as HTMLDialogElement
    const dialogContent = document.getElementById('app-report-dialog-content')
    const dialogTitle = document.getElementById('app-report-dialog-title')
    const dialogDescription = document.getElementById('app-report-dialog-description')
    const confirmButton = document.getElementById('app-report-dialog-button')
    const cancelButton = document.getElementById('app-report-dialog-close')
    const dialogMessage = document.getElementById('app-report-dialog-message') as HTMLInputElement
    const reportType = document.getElementById('app-report-dialog-type') as HTMLSelectElement
    if (
      messageAlertDialog === null ||
      dialogContent === null ||
      dialogTitle === null ||
      dialogDescription === null ||
      confirmButton === null ||
      cancelButton === null ||
      dialogMessage === null ||
      reportType === null
    ) {
      console.log('Error: Element is null')
      resolve('false')
      return
    }
    dialogContent.classList.add('is-active')
    confirmButton.classList.remove('is-hidden')
    cancelButton.textContent = 'キャンセル'
    messageAlertDialog.showModal()
    confirmButton.addEventListener('click', () => {
      messageAlertDialog.close()
      const reportTypeInput = document.querySelector('input[name=report-type]:checked') as HTMLInputElement
      const type = reportTypeInput ? reportTypeInput.value : ''
      const message = dialogMessage.value
      resolve(JSON.stringify({ result: true, type, message }))
    })
    cancelButton.addEventListener('click', () => {
      messageAlertDialog.close()
      resolve('false')
    })
  })
}
