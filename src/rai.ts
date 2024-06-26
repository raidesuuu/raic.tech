/*
    Rai Website, a powerful tools, fun!
    ©2024 Rai and UpLauncher.

    Description: Rai module for the Rai Website.
*/

import { UserDataInterface } from "./chat/raiChatTypes"

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
  return '0.1-beta'
}

export function getUserId() {
  return window.localStorage.getItem('userId')
}

export function getPlan(planId: string) {
  if (planId.includes("pro_")) {
    return "pro"
  } else if (planId.includes("premiumPlus_")) {
    return "premiumplus"
  } else if (planId.includes("premium_")) {
    return "premium"
  } else {
    return "free"
  }
}

export function getCode() {
  try {
    return window.location.href.split('?')[1].split('=')[1].split('&')[0]
  } catch (e) {
    return null
  }
}

export function isCheckmarker(userData: UserDataInterface) {
  const result = userData.paid != 'free' && userData.verified == true && userData.checkmarkState === false
  return result
}

export function xssProtectedText(text: string) {
  text = text.replace(/&/g, '&amp;')
  text = text.replace(/"/g, '&quot;')
  text = text.replace(/'/g, '&#x27;')
  text = text.replace(/</g, '&lt;')
  text = text.replace(/>/g, '&gt;')

  console.log(text)

  return text;
}

/**
 *
 * @param element noticeElement型（i、labelが入っているp要素)
 * @param message (オプション)表示するメッセージ。指定されていない場合、要素を非表示にします。
 * @returns
 */
export function showNotice(element: HTMLElement, message?: string) {
  if (message == '' || message == null) {
    element.classList.add('is-hidden')
    return
  }
  element.classList.remove('is-hidden')

  const infoLabel = element.querySelector('label')
  if (infoLabel === null) throw new Error('No icon found')
  infoLabel.textContent = message
}

export function getPaidStatus(data: { data: { currently_enabled_tiers: string; id: string } }) {
  try {
    const patreonData = JSON.stringify(data)
    if (patreonData.includes('"id":"21880338"')) {
      return { type: 'premiumplus', id: data.data.id }
    } else if (patreonData.includes('"id": "10216194"')) {
      return { type: 'premium', id: data.data.id }
    } else if (patreonData.includes('"id": "21880320"')) {
      return { type: 'basic', id: data.data.id }
    } else {
      return { type: 'free', id: data.data.id }
    }
  } catch (e) {
    const patreonData = JSON.stringify(data)
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
