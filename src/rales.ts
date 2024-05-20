if (window.location.pathname == '/rales/downloads' || window.location.pathname == '/rales/downloads.html') {
  document.addEventListener('DOMContentLoaded', () => {
    console.log('aa')
    const targetElem = document.getElementById('app-commit-history')
    if (targetElem == null) {
      console.error('Element not found')
      return
    }

    fetch('https://api.github.com/repos/uplauncher/rales/commits?per_page=10')
      .then((response) => response.json())
      .then((res) => {
        Object.keys(res).forEach((key) => {
            const boxElement = document.createElement("div")
            boxElement.classList.add('box')
            const titleElement = document.createElement('p')
            titleElement.style.fontSize = '20px'
            console.log(res[key])
            titleElement.innerHTML = `${res[key].commit.verification.verified ? '<span class="c-tooltip" data-tooltip="認証済みのコミット"><i class="fas fa-check"></i></span>' : ''}${res[key].commit.message} <small>${new Date(res[key].commit.committer.date).toLocaleString()}</small>`
            boxElement.appendChild(titleElement)
            targetElem.appendChild(boxElement)
        })
      })
  })
} else {
  window.addEventListener('load', () => {
    const targetElem = document.getElementById('app-rales-anim')?.querySelector('p')
    if (targetElem == null) {
      console.error('Element not found')
      return
    }

    setInterval(() => {
      targetElem.parentElement!.scrollTop = targetElem.parentElement!.scrollHeight
    }, 100)

    targetElem.innerHTML += '<span class="rcs-code-comment">Loading libraries, please wait...</span><br>'
    setTimeout(() => {
      targetElem.innerHTML += `[${toMCDate()} INFO] Environment: Environment[sessionHost=https://sessionserver.mojang.com, servicesHost=https://api.minecraftservices.com, name=PROD]<br>`
      setTimeout(() => {
        targetElem.innerHTML += `[${toMCDate()} INFO] Rales サーバー (マインクラフト 1.20.6) を起動中です...<br>`
        targetElem.innerHTML += `[${toMCDate()} INFO] レベル "world" を準備中です...<br>`
        targetElem.innerHTML += `[${toMCDate()} INFO] ディメンションの準備: minecraft:overworld<br>`
        setTimeout(() => {
          targetElem.innerHTML += `[${toMCDate()} INFO] 完了: 320 ms<br>`
          targetElem.innerHTML += `[${toMCDate()} INFO] ディメンションの準備: minecraft:the_nether<br>`
          setTimeout(() => {
            targetElem.innerHTML += `[${toMCDate()} INFO] 完了: 270 ms<br>`
            targetElem.innerHTML += `[${toMCDate()} INFO] ディメンションの準備: minecraft:the_end<br>`
            setTimeout(() => {
              targetElem.innerHTML += `[${toMCDate()} INFO] 完了: 220 ms<br>`
              targetElem.innerHTML += `[${toMCDate()} INFO] 完了しました！ (1.810 s)! "help" でヘルプを表示します。<br>`
              targetElem.innerHTML += `> <input class="rcs-code-input rcs-aniable">`
              rcsInternalElem()
              const observer = new MutationObserver(rcsInternalElem)
              observer.observe(targetElem, { childList: true })
            }, 220)
          }, 270)
        }, 320)
      }, 300)
    }, 700)
  })
}

function rcsInternalElem() {
  const targetElem = document.getElementById('app-rales-anim')?.querySelector('p')
  if (targetElem == null) {
    console.error('Element not found')
    return
  }

  document.querySelectorAll('.rcs-aniable').forEach((element) => {
    if (element.getAttribute('attached') == 'true') return
    targetElem.setAttribute('attached', 'true')
    element.addEventListener('keydown', (e) => {
      const event = e as KeyboardEvent
      const inputElem = targetElem.querySelector('input')
      if (inputElem == null) return

      const inputElemValue = inputElem.value
      if (event.key == 'Enter') {
        inputElem.remove()
        targetElem.innerHTML += `${inputElemValue}<br>`
        if (inputElemValue == 'help') {
          targetElem.innerHTML += `[${toMCDate()} INFO] 利用可能なコマンド: help, downloads`
        } else if (inputElemValue == 'downloads') {
          targetElem.innerHTML += `[${toMCDate()} INFO] /rales/downloads へ移動中です...`
          setTimeout(() => {
            window.location.href = '/rales/downloads'
          }, 500)
        } else {
          targetElem.innerHTML += `[${toMCDate()} INFO] コマンドが見つかりませんでした。/helpでヘルプを表示します。`
        }

        const newInputElem = document.createElement('input')
        newInputElem.classList.add('rcs-code-input', 'rcs-aniable')
        targetElem.innerHTML += '<br>>'
        targetElem.appendChild(newInputElem)
        newInputElem.select()
      }
    })
  })
}

/**
 * @deprecated
 * @description Deprecated. Use Date.toLocaleTimeString() instead.
 * @returns Date.toLocateTimeString()
 */
function toMCDate() {
  return new Date().toLocaleTimeString()
}
