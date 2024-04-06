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
  return '0.0.8-beta'
}

export function getUserId() {
  return window.localStorage.getItem('userId')
}

export function getCode() {
  try {
    return window.location.href.split('?')[1].split('=')[1].split('&')[0]
  } catch (e) {
    return null
  }
}

export function getPaidStatus(data: { data: { currently_enabled_tiers: string; id: string } }) {
  try {
    const patreonData = JSON.stringify(data)
    if (patreonData.includes('"id":"21880338"')) {
      return { type: 'premiumplus', id: data.data.id }
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

declare global {
  interface Window {
    rai: any // eslint-disable-line @typescript-eslint/no-explicit-any
  }
}

window.rai = {
  getURL,
  getDomain,
  getProtocol,
  getUserId,
  getPort,
  getPath,
  getHash,
  getSearch,
  getOrigin,
  getHostname,
  getVersion,
  getCode,
  getPaidStatus,
  moveToPanel,
  NotLoggedError,
}
