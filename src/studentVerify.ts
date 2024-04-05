//import firestore
import { InitApp } from './firebase'
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

InitApp()
const db = getFirestore()

;(function () {
  onAuthStateChanged(getAuth(), async (user) => {
    console.log('[StudentVerification_PageChecker : INFO (studentVerify.ts)] Checking page...')
    if (window.location.pathname === ('/student/app/' as string)) {
      console.log(
        '[StudentVerification_PageChecker : INFO (studentVerify.ts)] Page: Student Verification Application Page.',
      )
      if (!user) {
        window.location.href = '/auth/signin.html?continue_with=student'
        throw new Error('User is not signed in')
      }
      //url params
      const urlParams = new URLSearchParams(window.location.search)
      const state = urlParams.get('state')
      if (state == 'success') {
        const studentSuccess = document.getElementById('studentVerificationSuccess')
        if (!studentSuccess) {
          throw new Error('Element not found')
        }
        studentSuccess.classList.remove('is-hidden')
      } else if (state == 'not_student') {
        const studentNotStudent = document.getElementById('studentVerificationNotStudent')
        if (!studentNotStudent) {
          throw new Error('Element not found')
        }
        studentNotStudent.classList.remove('is-hidden')
      } else if (state == 'failed') {
        const studentFailed = document.getElementById('studentVerificationFailed')
        if (!studentFailed) {
          throw new Error('Element not found')
        }
        studentFailed.classList.remove('is-hidden')
      }

      const startVerify = document.getElementById('studentVerify')
      if (!startVerify) {
        throw new Error('Element not found')
      }

      if (user) {
        const query = await getDoc(doc(db, 'patreonlinkstatus', user.uid))
        if (query.exists()) {
          if (query.data().isStudent) {
            const studentLinked = document.getElementById('studentVerificationSuccess')
            if (!studentLinked) {
              throw new Error('Element not found')
            }
            studentLinked.classList.remove('is-success')
            studentLinked.classList.add('is-link')
            studentLinked.classList.remove('is-hidden')
            startVerify.innerHTML = '<i class="fas fa-forward"></i>学生であることを再確認する（オプション）'
          }

          if (query.data().isExpired && query.data().id === 'student-' + user.uid) {
            const studentExpired = document.getElementById('studentVerificationExpired')
            if (!studentExpired) {
              throw new Error('Element not found')
            }
            studentExpired.classList.remove('is-hidden')
          }
        }
      }
      startVerify.addEventListener('click', () => {
        fetch('https://api.raic.tech/student/get-github-uri')
          .then((response) => response.json())
          .then((data) => {
            if (data.status === 'success' && data.githubUri) {
              window.open(data.githubUri)
            } else {
              alert('GitHubのURIを取得できませんでした。もう一度お試しください。')
            }
          })
      })
    } else if (
      window.location.pathname === '/student/app/verify' ||
      window.location.pathname === ('/student/app/verify.html' as string)
    ) {
      fetch('https://api.raic.tech/student/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code: window.location.search.split('=')[1],
        }),
      })
        .then((response) => response.json())
        .then(async (data) => {
          if (data.status === 'success') {
            await setDoc(doc(db, 'patreonlinkstatus', user?.uid ?? ''), {
              linked: true,
              id: user ? 'student-' + user.uid : '',
              isStudent: true,
              lastChecked: new Date().toISOString(),
              plan: 'premiumplus',
            }).then(() => {
              window.location.href = '/student/app?state=success'
            })
          } else if (data.status === 'not_student') {
            window.location.href = '/student/app?state=not_student'
          } else {
            window.location.href = '/student/app?state=failed'
          }
        })
    } else {
      console.log('[StudentVerification_PageChecker : INFO (studentVerify.ts)] Page: Not Student Verification Page.')
    }
  })
})()
