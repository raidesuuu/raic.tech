/*
    Rai Website, a powerful tools, fun!
    ©2024 Rai and UpLauncher.

    Description: Load Sidebar (Signin) module for the Rai Website.
*/

console.info('[signin_loadSidebar.ts]: Loading Sidebar... (Type: Signin)')
;(document.querySelector('.p-4')! as HTMLElement).style.display = 'none'

//loadSidebar
const sidebarRequest = new XMLHttpRequest()
sidebarRequest.open('GET', '/auth/panel/sidebarLogin.html', true)
sidebarRequest.onreadystatechange = async function () {
  if (sidebarRequest.readyState === 4 && sidebarRequest.status === 200) {
    const response = sidebarRequest.responseText
    const element = document.querySelector('#settings-sidebar')
    if (element !== null) element.innerHTML = response

    console.info('[loadSidebar.ts] Sidebar loaded (Type: Signin)')
    ;(document.querySelector('.p-4')! as HTMLElement).style.display = ''
  }
}
sidebarRequest.send()
