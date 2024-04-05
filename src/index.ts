/*
    Rai Website, a powerful tools, fun!
    ©2024 Rai and UpLauncher.

    Description: Main module for the Rai Website.
*/

import './index.scss'
import { getVersion, getURL, getHostname } from './rai'

document.addEventListener('DOMContentLoaded', () => {
  console.info('[EventHandler : INFO (index.ts)] DOMContentLoaded event has been fired.')
  console.info('[EventHandler : INFO (index.ts)] Current Version: ' + getVersion())
  console.info('[EventHandler : INFO (index.ts)] Page URL:' + getURL())
  window.removeEventListener('DOMContentLoaded', () => {
    console.info('[EventHandler : INFO (index.ts)] Removed DOMContentLoaded event listener.')
  })

  document.querySelectorAll('a').forEach((element) => {
    if (getHostname() == 'raic.tech') {
      element.href = element.href.replace('.html', '')
    }
  })
})
