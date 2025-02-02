/*
    Rai Website, a powerful tools, fun!
    ©2024 Rai and UpLauncher.

    Description: Menu module for the Rai Website.
*/

const isHeaderLoadingCompleted = false

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
      } else {
        // If the element does not exist, log an error
        console.error('[XHR : menu.ts : P1]: No footer element found')
      }
    }
  }
  footerRequest.send()
})
