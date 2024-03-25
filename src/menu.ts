/*
    Rai Website, a powerful tools, fun!
    ©2024 Rai and UpLauncher.

    Description: Menu module for the Rai Website.
*/

import { getAuth, onAuthStateChanged, User } from '@firebase/auth'
import { InitApp } from './firebase'

InitApp()

setTimeout(() => {
  document.body.style.display = 'block'
}, 1000)

document.addEventListener('DOMContentLoaded', () => {
  console.info('[EventHandler : INFO (menu.ts)]: Loading menu... (header, footer)')
  //includeHeader
  const headerRequest = new XMLHttpRequest()
  headerRequest.open('GET', '/menu/header.html', true)
  headerRequest.onreadystatechange = function () {
    if (headerRequest.readyState === 4 && headerRequest.status === 200) {
      const response = headerRequest.responseText
      const element = document.querySelector('header')
      if (element !== null) {
        element.innerHTML = response
        console.info('[XHR : INFO (menu.ts)]: Header loaded')
      } else {
        console.error('[XHR : ERROR (menu.ts)]: No header element found')
      }

      const auth = getAuth()
      onAuthStateChanged(auth, (user: User | null) => {
        if (user !== null) {
          // User is signed in
          window.localStorage.setItem('userId', user.uid)

          // Get the elements
          const signupElement = document.getElementById('signup')
          const signinElement = document.getElementById('signin')
          const panelElement = document.getElementById('panel')
          const logoutElement = document.getElementById('logout')
          const newPanelElement = document.getElementById('newPanel')

          // Check if the elements exist
          if (
            signupElement == null ||
            signinElement == null ||
            panelElement == null ||
            logoutElement == null ||
            newPanelElement == null
          )
            return

          if (window.location.pathname === '/auth/panel/patreon.html') {
            // this is not used
            console.info('[EventHandler : INFO (menu.ts)]: Panel page detected, showing new panel button')
            newPanelElement.classList.remove('is-hidden')
          }

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
        }

        // Get the elements
        document.getElementById('SearchBarSearch')?.addEventListener('click', () => {
          const searchBar = document.getElementById('SearchBar') as HTMLInputElement
          if (searchBar.value === '') return
          window.location.href = 'https://cse.google.com/cse?cx=3463a8dc396be47a7&q=' + searchBar.value
        })

        document.body.style.display = 'block'
      })

      const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)

      $navbarBurgers.forEach((el) => {
        el.addEventListener('click', () => {
          const target = el.dataset.target
          const $target = document.getElementById(target)

          el.classList.toggle('is-active')
          if ($target !== null) $target.classList.toggle('is-active')
          else console.error('[header : menu.ts]: No target element found')
        })
      })
    }
  }
  headerRequest.send()

  //includeFooter
  // Create a new XMLHttpRequest
  const footerRequest = new XMLHttpRequest()
  // Open a new GET request
  footerRequest.open('GET', '/menu/footer.html', true)
  // Set the onreadystatechange function
  footerRequest.onreadystatechange = function () {
    // Check if the request is done and successful
    if (footerRequest.readyState === 4 && footerRequest.status === 200) {
      // Get the response
      const response = footerRequest.responseText
      // Get the element
      const element = document.querySelector('footer')

      // Check if the element exists
      if (element !== null) {
        // If the element exists, set the innerHTML to the response
        element.innerHTML = response
        document.body.style.display = 'block'
      } else {
        // If the element does not exist, log an error
        console.error('[XHR : menu.ts : P1]: No footer element found')
      }
    }
  }
  footerRequest.send()
})
