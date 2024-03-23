if (window.localStorage.getItem('raichat-settings-available') === null) {
  window.localStorage.setItem('raichat-settings-available', 'true')
  window.localStorage.setItem('raichat-markdown', 'true')
  window.localStorage.setItem('raichat-ngwords', JSON.stringify(['死ね']))
}

const raiMarkdown = document.getElementById('rai-markdown') as HTMLInputElement
const hideCheckmark = document.getElementById('hide-checkmark') as HTMLInputElement

raiMarkdown.checked = window.localStorage.getItem('raichat-markdown') === 'true'
raiMarkdown.addEventListener('change', () => {
  window.localStorage.setItem('raichat-markdown', raiMarkdown.checked.toString())
})

if (window.localStorage.getItem('raichat-hide-checkmark') === null) {
  window.localStorage.setItem('raichat-hide-checkmark', 'false')
}
hideCheckmark.checked = window.localStorage.getItem('raichat-hide-checkmark') === 'true'
hideCheckmark.addEventListener('change', () => {
  window.localStorage.setItem('raichat-hide-checkmark', hideCheckmark.checked.toString())
})
