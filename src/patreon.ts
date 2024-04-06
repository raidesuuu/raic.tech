/*
    Rai Website, a powerful tools, fun!
    ©2024 Rai and UpLauncher.

    Description: Patreon module for the Rai Website.
*/

import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getFirestore, setDoc, collection, getDocs, doc } from 'firebase/firestore'

import { getCode, getPaidStatus, moveToPanel, NotLoggedError } from './rai'
import { auth } from './firebase'

const db = getFirestore()

onAuthStateChanged(auth, async (user) => {
  // Check if user is signed in
  if (user === null) {
    // User is not signed in
    console.error('[patreon.ts] User is not signed in')
    throw new NotLoggedError('[P3: ERROR (patreon.ts)] User is not signed in')
  }

  // Get access token
  fetch('https://api.raic.tech/patreon/get-access-token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      code: getCode(),
      isLocal: window.location.href.includes('10.249.176.251'),
    }),
  })
    // Get user info
    .then((response) => response.json())
    .then(async (resToken) => {
      if (resToken.status === 401) {
        console.error('[patreon.ts] Error: ' + resToken.error)

        window.location.href = '/auth/panel/patreon.html'

        throw new Error('[P3: ERROR (patreon.ts)] ' + resToken.error)
      }
      // Define access token
      const accessToken = resToken.access_token

      // Get user info
      fetch('https://api.raic.tech/patreon/get-user-info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          accessToken: accessToken,
        }),
      }).then(async (res: Response) => {
        if (res.status === 401) {
          console.error('[patreon.ts] Error: ' + resToken.error)

          window.location.href = '/auth/panel/patreon.html'

          throw new Error('[P3: ERROR (patreon.ts)] ' + resToken.error)
        }

        // Get paid status
        let count = 0
        const bodyText = await res.text() // Extract the data from the ReadableStream
        const paidStatus = getPaidStatus(JSON.parse(bodyText)) // Parse the extracted data
        const docs = await getDocs(collection(db, 'patreonlinkstatus'))
        if (docs.size === 0) {
          await setDoc(doc(db, 'patreonlinkstatus', user?.uid), docData(paidStatus)).then(() => {
            moveToPanel()
          })
        }
        docs.forEach(async (dataDoc) => {
          if (dataDoc.data().id === paidStatus.id) {
            if (dataDoc.data().id === user.uid) return
            window.location.href = '/auth/panel/patreon.html?error=already_linked'
            throw new Error('[P3: ERROR (patreon.ts)] User is already linked')
          }
          console.log(count, docs.size, dataDoc.data().id, paidStatus.id)

          count++

          // Check if user is the last user
          if (docs.size === count) {
            //Add user to database
            await setDoc(doc(db, 'patreonlinkstatus', user?.uid), docData(paidStatus)).then(() => {
              moveToPanel()
            })
          }
        })
      })
    })
})

function docData(paidStatus: any) {
  // eslint-disable-line @typescript-eslint/no-explicit-any
  return {
    linked: true,
    id: paidStatus.id,
    isStudent: false,
    lastChecked: Date.now(),
    plan: paidStatus.type,
  }
}
