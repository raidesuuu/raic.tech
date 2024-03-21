/*
    Rai Website, a powerful tools, fun!
    ©2024 Rai and UpLauncher.

    Description: Rai module for the Rai Website.
*/

export function getURL() {
  return window.location.href
}

export function getDomain() {
  return window.location.hostname
}

export function getProtocol() {
  return window.location.protocol
}

export function getPort() {
  return window.location.port
}

export function getPath() {
  return window.location.pathname
}

export function getHash() {
  return window.location.hash
}

export function getSearch() {
  return window.location.search
}

export function getOrigin() {
  return window.location.origin
}

export function getHostname() {
  return window.location.hostname
}

export function getVersion() {
  return '0.0.1-beta'
}

export function getCode() {
  try {
    return window.location.href.split('?')[1].split('=')[1].split('&')[0]
  } catch (e) {
    return null
  }
}

export function getPaidStatus(data: { data: { currently_enabled_tiers: string; id: string } }) {
  //check if user is a patreon with{"data":{"attributes":{},"id":"120007504","relationships":{"memberships":{"data":[{"id":"5413b32a-2f7d-480a-8ca6-3ab20c9c618d","type":"member"}]}},"type":"user"},"included":[{"attributes":{},"id":"5413b32a-2f7d-480a-8ca6-3ab20c9c618d","relationships":{"currently_entitled_tiers":{"data":[{"id":"21880338","type":"tier"}]}},"type":"member"},{"attributes":{},"id":"21880338","type":"tier"}],"links":{"self":"https://www.patreon.com/api/oauth2/v2/user/120007504"}}
  try {
    const patreonData = JSON.stringify(data)
    if (patreonData.includes('"id":"21880338"')) {
      return { type: 'enhanced', id: data.data.id }
    } else if (patreonData.includes('"id": "10216194"')) {
      return { type: 'premium', id: data.data.id }
    } else if (patreonData.includes('"id": "21880320"')) {
      return { type: 'standard', id: data.data.id }
    } else {
      console.log('free', patreonData)
      return { type: 'free', id: data.data.id }
    }
  } catch (e) {
    const patreonData = JSON.stringify(data)
    console.log('free', patreonData, e)
    return { type: 'free', id: data.data.id }
  }
}

export function moveToPanel() {
  window.location.href = '/auth/panel/home.html'
}

export class NotLoggedError extends Error {
  constructor(message?: string) {
    super(message)
  }
}
