(()=>{"use strict";var e={6743:(e,t,n)=>{n.d(t,{Am:()=>D,FA:()=>S,Fy:()=>g,I9:()=>R,Im:()=>A,Ku:()=>M,T9:()=>d,Tj:()=>u,Uj:()=>o,XA:()=>f,ZQ:()=>m,bD:()=>k,cY:()=>p,eX:()=>I,g:()=>T,hp:()=>O,jZ:()=>y,lT:()=>_,lV:()=>w,nr:()=>E,sr:()=>v,tD:()=>P,u:()=>a,yU:()=>l,zW:()=>b});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,h=i>>2,u=(3&i)<<4|o>>4;let l=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(l=64)),r.push(n[h],n[u],n[l],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],o=t<e.length?n[e.charAt(t)]:0;++t;const a=t<e.length?n[e.charAt(t)]:64;++t;const c=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==o||null==a||null==c)throw new s;const h=i<<2|o>>4;if(r.push(h),64!==a){const e=o<<4&240|a>>2;if(r.push(e),64!==c){const e=a<<6&192|c;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const o=function(e){return function(e){const t=r(e);return i.encodeByteArray(t,!0)}(e).replace(/\./g,"")},a=function(e){try{return i.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const c=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n.g)return n.g;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,h=()=>{try{return c()||(()=>{if("undefined"==typeof process||void 0===process.env)return;const e=process.env.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&a(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},u=e=>{var t,n;return null===(n=null===(t=h())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},l=e=>{const t=u(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},d=()=>{var e;return null===(e=h())||void 0===e?void 0:e.config},f=e=>{var t;return null===(t=h())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class p{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[o(JSON.stringify({alg:"none",type:"JWT"})),o(JSON.stringify(s)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function y(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(m())}function v(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function w(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function _(){const e=m();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function E(){return!function(){var e;const t=null===(e=h())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(e){return!1}}()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function b(){try{return"object"==typeof indexedDB}catch(e){return!1}}function I(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}class T extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,T.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,S.prototype.create)}}class S{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(C,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new T(r,o,n)}}const C=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function k(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(N(n)&&N(s)){if(!k(n,s))return!1}else if(n!==s)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function N(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function D(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function R(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function O(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(e,t){const n=new L(e,t);return n.subscribe.bind(n)}class L{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=x),void 0===r.error&&(r.error=x),void 0===r.complete&&(r.complete=x);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function x(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function M(e){return e&&e._delegate?e._delegate:e}},6582:(e,t,n)=>{n.d(t,{o:()=>i});var r=n(1990);function i(){"10.249.176.251"!=window.location.hostname&&setInterval((function(){}),1);var e={apiKey:(0,String.fromCharCode)(65,73,122,97,83,121,68,68,95,65,83,90,45,83,104,110,103,89,80,116,117,109,114,86,75,77,51,89,72,54,55,114,69,73,54,98,98,82,99),authDomain:"auth.raic.tech",projectId:"e-mediator-401323",storageBucket:"e-mediator-401323.appspot.com",messagingSenderId:"237760903684"};void 0!==e?((0,r.Wp)(e),console.log("[firebase.ts] Initialized Firebase App (Type: InitApp)")):console.error("[firebase.ts] Firebase Config is not defined")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KO)("firebase","10.9.0","app")},1990:(e,t,n)=>{n.d(t,{MF:()=>U,j6:()=>P,om:()=>O,Sx:()=>V,Wp:()=>F,KO:()=>j});var r=n(5125),i=n(3424),s=n(6743);const o=(e,t)=>t.some((t=>e instanceof t));let a,c;const h=new WeakMap,u=new WeakMap,l=new WeakMap,d=new WeakMap,f=new WeakMap;let p={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return u.get(e);if("objectStoreNames"===t)return e.objectStoreNames||l.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return y(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function g(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(v(this),t),y(h.get(this))}:function(...t){return y(e.apply(v(this),t))}:function(t,...n){const r=e.call(v(this),t,...n);return l.set(r,t.sort?t.sort():[t]),y(r)}}function m(e){return"function"==typeof e?g(e):(e instanceof IDBTransaction&&function(e){if(u.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));u.set(e,t)}(e),o(e,a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,p):e)}function y(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(y(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&h.set(t,e)})).catch((()=>{})),f.set(t,e),t}(e);if(d.has(e))return d.get(e);const t=m(e);return t!==e&&(d.set(e,t),f.set(t,e)),t}const v=e=>f.get(e);const w=["get","getKey","getAll","getAllKeys","count"],_=["put","add","delete","clear"],E=new Map;function b(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(E.get(t))return E.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!w.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return E.set(t,s),s}p=(e=>({...e,get:(t,n,r)=>b(t,n)||e.get(t,n,r),has:(t,n)=>!!b(t,n)||e.has(t,n)}))(p);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class I{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const T="@firebase/app",S="0.9.29",C=new i.Vy("@firebase/app"),A="[DEFAULT]",k={[T]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},N=new Map,D=new Map;function R(e,t){try{e.container.addComponent(t)}catch(n){C.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function O(e){const t=e.name;if(D.has(t))return C.debug(`There were multiple attempts to register component ${t}.`),!1;D.set(t,e);for(const t of N.values())R(t,e);return!0}function P(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const L={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},x=new s.FA("app","Firebase",L);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class M{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.uA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw x.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U="10.9.0";function F(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const i=Object.assign({name:A,automaticDataCollectionEnabled:!1},t),o=i.name;if("string"!=typeof o||!o)throw x.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.T9)()),!n)throw x.create("no-options");const a=N.get(o);if(a){if((0,s.bD)(n,a.options)&&(0,s.bD)(i,a.config))return a;throw x.create("duplicate-app",{appName:o})}const c=new r.h1(o);for(const e of D.values())c.addComponent(e);const h=new M(n,i,c);return N.set(o,h),h}function V(e=A){const t=N.get(e);if(!t&&e===A&&(0,s.T9)())return F();if(!t)throw x.create("no-app",{appName:e});return t}function j(e,t,n){var i;let s=null!==(i=k[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void C.warn(e.join(" "))}O(new r.uA(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const B="firebase-heartbeat-database",q=1,$="firebase-heartbeat-store";let z=null;function K(){return z||(z=function(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=y(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(y(o.result),e.oldVersion,e.newVersion,y(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}(B,q,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore($)}catch(e){console.warn(e)}}}).catch((e=>{throw x.create("idb-open",{originalErrorMessage:e.message})}))),z}async function H(e,t){try{const n=(await K()).transaction($,"readwrite"),r=n.objectStore($);await r.put(t,G(e)),await n.done}catch(e){if(e instanceof s.g)C.warn(e.message);else{const t=x.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});C.warn(t.message)}}}function G(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new J(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e,t;const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Q();if((null!=(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||(this._heartbeatsCache=await this._heartbeatsCachePromise,null!=(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))&&this._heartbeatsCache.lastSentHeartbeatDate!==r&&!this._heartbeatsCache.heartbeats.some((e=>e.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=Q(),{heartbeatsToSend:n,unsentEntries:r}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),X(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),X(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),i=(0,s.Uj)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Q(){return(new Date).toISOString().substring(0,10)}class J{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.zW)()&&(0,s.eX)().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await K()).transaction($),n=await t.objectStore($).get(G(e));return await t.done,n}catch(e){if(e instanceof s.g)C.warn(e.message);else{const t=x.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});C.warn(t.message)}}}(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return H(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return H(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function X(e){return(0,s.Uj)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;Y="",O(new r.uA("platform-logger",(e=>new I(e)),"PRIVATE")),O(new r.uA("heartbeat",(e=>new W(e)),"PRIVATE")),j(T,S,Y),j(T,S,"esm2017"),j("fire-js","")},5125:(e,t,n)=>{n.d(t,{h1:()=>a,uA:()=>i});var r=n(6743);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.cY;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===s?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class a{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},3424:(e,t,n)=>{n.d(t,{$b:()=>i,Vy:()=>h});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class h{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e,t=n(1990),r=n(5125),i=n(3424),s=n(6743),o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},a={},c=c||{},h=o||self;function u(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function l(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var d="closure_uid_"+(1e9*Math.random()>>>0),f=0;function p(e,t,n){return e.call.apply(e.bind,arguments)}function g(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function m(e,t,n){return(m=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p:g).apply(null,arguments)}function y(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function v(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function w(){this.s=this.s,this.o=this.o}w.prototype.s=!1,w.prototype.sa=function(){var e;!this.s&&(this.s=!0,this.N(),0)&&(e=this,Object.prototype.hasOwnProperty.call(e,d)&&e[d]||(e[d]=++f))},w.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const _=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function E(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function b(e,t){for(let t=1;t<arguments.length;t++){const n=arguments[t];if(u(n)){const t=e.length||0,r=n.length||0;e.length=t+r;for(let i=0;i<r;i++)e[t+i]=n[i]}else e.push(n)}}function I(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var T=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const e=()=>{};h.addEventListener("test",e,t),h.removeEventListener("test",e,t)}catch(e){}return e}();function S(e){return/^[\s\xa0]*$/.test(e)}function C(){var e=h.navigator;return e&&(e=e.userAgent)?e:""}function A(e){return-1!=C().indexOf(e)}function k(e){return k[" "](e),e}k[" "]=function(){};var N,D,R,O=A("Opera"),P=A("Trident")||A("MSIE"),L=A("Edge"),x=L||P,M=A("Gecko")&&!(-1!=C().toLowerCase().indexOf("webkit")&&!A("Edge"))&&!(A("Trident")||A("MSIE"))&&!A("Edge"),U=-1!=C().toLowerCase().indexOf("webkit")&&!A("Edge");function F(){var e=h.document;return e?e.documentMode:void 0}e:{var V="",j=(D=C(),M?/rv:([^\);]+)(\)|;)/.exec(D):L?/Edge\/([\d\.]+)/.exec(D):P?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(D):U?/WebKit\/(\S+)/.exec(D):O?/(?:Version)[ \/]?(\S+)/.exec(D):void 0);if(j&&(V=j?j[1]:""),P){var B=F();if(null!=B&&B>parseFloat(V)){N=String(B);break e}}N=V}if(h.document&&P){var q=F();R=q||(parseInt(N,10)||void 0)}else R=void 0;var $=R;function z(e,t){if(I.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(M){e:{try{k(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:K[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&z.$.h.call(this)}}v(z,I);var K={2:"touch",3:"pen",4:"mouse"};z.prototype.h=function(){z.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var H="closure_listenable_"+(1e6*Math.random()|0),G=0;function W(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++G,this.fa=this.ia=!1}function Q(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function J(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function X(e){const t={};for(const n in e)t[n]=e[n];return t}const Y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Z(e,t){let n,r;for(let t=1;t<arguments.length;t++){for(n in r=arguments[t],r)e[n]=r[n];for(let t=0;t<Y.length;t++)n=Y[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function ee(e){this.src=e,this.g={},this.h=0}function te(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=_(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Q(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function ne(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}ee.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=ne(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):((t=new W(t,this.src,s,!!r,i)).ia=n,e.push(t)),t};var re="closure_lm_"+(1e6*Math.random()|0),ie={};function se(e,t,n,r,i){if(r&&r.once)return ae(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)se(e,t[s],n,r,i);return null}return n=pe(n),e&&e[H]?e.O(t,n,l(r)?!!r.capture:!!r,i):oe(e,t,n,!1,r,i)}function oe(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=l(i)?!!i.capture:!!i,a=de(e);if(a||(e[re]=a=new ee(e)),(n=a.add(t,n,r,o,s)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}const t=le;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)T||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(ue(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function ae(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)ae(e,t[s],n,r,i);return null}return n=pe(n),e&&e[H]?e.P(t,n,l(r)?!!r.capture:!!r,i):oe(e,t,n,!0,r,i)}function ce(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)ce(e,t[s],n,r,i);else r=l(r)?!!r.capture:!!r,n=pe(n),e&&e[H]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=ne(s=e.g[t],n,r,i))&&(Q(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=de(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ne(t,n,r,i)),(n=-1<e?t[e]:null)&&he(n))}function he(e){if("number"!=typeof e&&e&&!e.fa){var t=e.src;if(t&&t[H])te(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(ue(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=de(t))?(te(n,e),0==n.h&&(n.src=null,t[re]=null)):Q(e)}}}function ue(e){return e in ie?ie[e]:ie[e]="on"+e}function le(e,t){if(e.fa)e=!0;else{t=new z(t,this);var n=e.listener,r=e.la||e.src;e.ia&&he(e),e=n.call(r,t)}return e}function de(e){return(e=e[re])instanceof ee?e:null}var fe="__closure_events_fn_"+(1e9*Math.random()>>>0);function pe(e){return"function"==typeof e?e:(e[fe]||(e[fe]=function(t){return e.handleEvent(t)}),e[fe])}function ge(){w.call(this),this.i=new ee(this),this.S=this,this.J=null}function me(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,"string"==typeof t)t=new I(t,e);else if(t instanceof I)t.target=t.target||e;else{var i=t;Z(t=new I(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=ye(o,r,!0,t)&&i}if(i=ye(o=t.g=e,r,!0,t)&&i,i=ye(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=ye(o=t.g=n[s],r,!1,t)&&i}function ye(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&te(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}v(ge,w),ge.prototype[H]=!0,ge.prototype.removeEventListener=function(e,t,n,r){ce(this,e,t,n,r)},ge.prototype.N=function(){if(ge.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Q(n[r]);delete t.g[e],t.h--}}this.J=null},ge.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},ge.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var ve=h.JSON.stringify;function we(){var e=Ce;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var _e=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Ee),(e=>e.reset()));class Ee{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function be(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Ie(e){h.setTimeout((()=>{throw e}),0)}let Te,Se=!1,Ce=new class{constructor(){this.h=this.g=null}add(e,t){const n=_e.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},Ae=()=>{const e=h.Promise.resolve(void 0);Te=()=>{e.then(ke)}};var ke=()=>{for(var e;e=we();){try{e.h.call(e.g)}catch(e){Ie(e)}var t=_e;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Se=!1};function Ne(e,t){ge.call(this),this.h=e||1,this.g=t||h,this.j=m(this.qb,this),this.l=Date.now()}function De(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function Re(e,t,n){if("function"==typeof e)n&&(e=m(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=m(e.handleEvent,e)}return 2147483647<Number(t)?-1:h.setTimeout(e,t||0)}function Oe(e){e.g=Re((()=>{e.g=null,e.i&&(e.i=!1,Oe(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}v(Ne,ge),(e=Ne.prototype).ga=!1,e.T=null,e.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),me(this,"tick"),this.ga&&(De(this),this.start()))}},e.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},e.N=function(){Ne.$.N.call(this),De(this),delete this.g};class Pe extends w{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Oe(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Le(e){w.call(this),this.h=e,this.g={}}v(Le,w);var xe=[];function Me(e,t,n,r){Array.isArray(n)||(n&&(xe[0]=n.toString()),n=xe);for(var i=0;i<n.length;i++){var s=se(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Ue(e){J(e.g,(function(e,t){this.g.hasOwnProperty(t)&&he(e)}),e),e.g={}}function Fe(){this.g=!0}function Ve(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return ve(n)}catch(e){return t}}(e,n)+(r?" "+r:"")}))}Le.prototype.N=function(){Le.$.N.call(this),Ue(this)},Le.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Fe.prototype.Ea=function(){this.g=!1},Fe.prototype.info=function(){};var je={},Be=null;function qe(){return Be=Be||new ge}function $e(e){I.call(this,je.Ta,e)}function ze(e){const t=qe();me(t,new $e(t))}function Ke(e,t){I.call(this,je.STAT_EVENT,e),this.stat=t}function He(e){const t=qe();me(t,new Ke(t,e))}function Ge(e,t){I.call(this,je.Ua,e),this.size=t}function We(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){e()}),t)}je.Ta="serverreachability",v($e,I),je.STAT_EVENT="statevent",v(Ke,I),je.Ua="timingevent",v(Ge,I);var Qe={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Je={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Xe(){}function Ye(e){return e.h||(e.h=e.i())}function Ze(){}Xe.prototype.h=null;var et,tt={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function nt(){I.call(this,"d")}function rt(){I.call(this,"c")}function it(){}function st(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Le(this),this.P=at,e=x?125:void 0,this.V=new Ne(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new ot}function ot(){this.i=null,this.g="",this.h=!1}v(nt,I),v(rt,I),v(it,Xe),it.prototype.g=function(){return new XMLHttpRequest},it.prototype.i=function(){return{}},et=new it;var at=45e3,ct={},ht={};function ut(e,t,n){e.L=1,e.A=Nt(Tt(t)),e.u=n,e.S=!0,lt(e,null)}function lt(e,t){e.G=Date.now(),gt(e),e.B=Tt(e.A);var n=e.B,r=e.W;Array.isArray(r)||(r=[String(r)]),qt(n.i,"t",r),e.o=0,n=e.l.J,e.h=new ot,e.g=$n(e.l,n?t:null,!e.u),0<e.O&&(e.M=new Pe(m(e.Pa,e,e.g),e.O)),Me(e.U,e.g,"readystatechange",e.nb),t=e.I?X(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),ze(),function(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var h=a[c].split("=");if(1<h.length){var u=h[0];h=h[1];var l=u.split("_");o=2<=l.length&&"type"==l[1]?o+(u+"=")+h+"&":o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.v,e.B,e.m,e.W,e.u)}function dt(e){return!!e.g&&("GET"==e.v&&2!=e.L&&e.l.Ha)}function ft(e,t,n){let r,i=!0;for(;!e.J&&e.o<n.length;){if(r=pt(e,n),r==ht){4==t&&(e.s=4,He(14),i=!1),Ve(e.j,e.m,null,"[Incomplete Response]");break}if(r==ct){e.s=4,He(15),Ve(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Ve(e.j,e.m,r,null),_t(e,r)}dt(e)&&0!=e.o&&(e.h.g=e.h.g.slice(e.o),e.o=0),4!=t||0!=n.length||e.h.h||(e.s=1,He(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.ba&&(e.ba=!0,(t=e.l).g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),xn(t),t.M=!0,He(11))):(Ve(e.j,e.m,n,"[Invalid Chunked Response]"),wt(e),vt(e))}function pt(e,t){var n=e.o,r=t.indexOf("\n",n);return-1==r?ht:(n=Number(t.substring(n,r)),isNaN(n)?ct:(r+=1)+n>t.length?ht:(t=t.slice(r,r+n),e.o=r+n,t))}function gt(e){e.Y=Date.now()+e.P,mt(e,e.P)}function mt(e,t){if(null!=e.C)throw Error("WatchDog timer not null");e.C=We(m(e.lb,e),t)}function yt(e){e.C&&(h.clearTimeout(e.C),e.C=null)}function vt(e){0==e.l.H||e.J||Fn(e.l,e)}function wt(e){yt(e);var t=e.M;t&&"function"==typeof t.sa&&t.sa(),e.M=null,De(e.V),Ue(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function _t(e,t){try{var n=e.l;if(0!=n.H&&(n.g==e||Qt(n.i,e)))if(!e.K&&Qt(n.i,e)&&3==n.H){try{var r=n.Ja.g.parse(t)}catch(e){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.G+3e3<e.G))break e;Un(n),An(n)}Ln(n),He(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&0==n.A&&!n.v&&(n.v=We(m(n.ib,n),6e3));if(1>=Wt(n.i)&&n.oa){try{n.oa()}catch(e){}n.oa=void 0}}else jn(n,11)}else if((e.K||n.g==e)&&Un(n),!S(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let h=i[t];if(n.V=h[0],h=h[1],2==n.H)if("c"==h[0]){n.K=h[1],n.pa=h[2];const t=h[3];null!=t&&(n.ra=t,n.l.info("VER="+n.ra));const i=h[4];null!=i&&(n.Ga=i,n.l.info("SVER="+n.Ga));const u=h[5];null!=u&&"number"==typeof u&&0<u&&(r=1.5*u,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const l=e.g;if(l){const e=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.i;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Jt(s,s.h),s.h=null))}if(r.F){const e=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.Da=e,kt(r.I,r.F,e))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms"));var o=e;if((r=n).wa=qn(r,r.J?r.pa:null,r.Y),o.K){Xt(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(yt(a),gt(a)),r.g=o}else Pn(r);0<n.j.length&&Nn(n)}else"stop"!=h[0]&&"close"!=h[0]||jn(n,7);else 3==n.H&&("stop"==h[0]||"close"==h[0]?"stop"==h[0]?jn(n,7):Cn(n):"noop"!=h[0]&&n.h&&n.h.Aa(h),n.A=0)}ze()}catch(e){}}function Et(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(u(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(u(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}(e),r=function(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(u(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}(e=st.prototype).setTimeout=function(e){this.P=e},e.nb=function(e){e=e.target;const t=this.M;t&&3==_n(e)?t.l():this.Pa(e)},e.Pa=function(e){try{if(e==this.g)e:{const l=_n(this.g);var t=this.g.Ia();this.g.da();if(!(3>l)&&(3!=l||x||this.g&&(this.h.h||this.g.ja()||En(this.g)))){this.J||4!=l||7==t||ze(),yt(this);var n=this.g.da();this.ca=n;t:if(dt(this)){var r=En(this.g);e="";var i=r.length,s=4==_n(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){wt(this),vt(this);var o="";break t}this.h.i=new h.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.length=0,this.h.g+=e,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,function(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}(this.j,this.v,this.B,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(a)){var u=a;break t}}u=null}if(!(n=u)){this.i=!1,this.s=3,He(12),wt(this),vt(this);break e}Ve(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,_t(this,n)}this.S?(ft(this,l,o),x&&this.i&&3==l&&(Me(this.U,this.V,"tick",this.mb),this.V.start())):(Ve(this.j,this.m,o,null),_t(this,o)),4==l&&wt(this),this.i&&!this.J&&(4==l?Fn(this.l,this):(this.i=!1,gt(this)))}else(function(e){const t={};e=(e.g&&2<=_n(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(S(e[r]))continue;var n=be(e[r]);const i=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}!function(e,t){for(const n in e)t.call(void 0,e[n],n,e)}(t,(function(e){return e.join(", ")}))})(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.s=3,He(12)):(this.s=0,He(13)),wt(this),vt(this)}}}catch(e){}},e.mb=function(){if(this.g){var e=_n(this.g),t=this.g.ja();this.o<t.length&&(yt(this),ft(this,e,t),this.i&&4!=e&&gt(this))}},e.cancel=function(){this.J=!0,wt(this)},e.lb=function(){this.C=null;const e=Date.now();0<=e-this.Y?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.B),2!=this.L&&(ze(),He(17)),wt(this),this.s=2,vt(this)):mt(this,this.Y-e)};var bt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function It(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof It){this.h=e.h,St(this,e.j),this.s=e.s,this.g=e.g,Ct(this,e.m),this.l=e.l;var t=e.i,n=new Ft;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),At(this,n),this.o=e.o}else e&&(t=String(e).match(bt))?(this.h=!1,St(this,t[1]||"",!0),this.s=Dt(t[2]||""),this.g=Dt(t[3]||"",!0),Ct(this,t[4]),this.l=Dt(t[5]||"",!0),At(this,t[6]||"",!0),this.o=Dt(t[7]||"")):(this.h=!1,this.i=new Ft(null,this.h))}function Tt(e){return new It(e)}function St(e,t,n){e.j=n?Dt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ct(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function At(e,t,n){t instanceof Ft?(e.i=t,function(e,t){t&&!e.j&&(Vt(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(jt(this,t),qt(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=Rt(t,Mt)),e.i=new Ft(t,e.h))}function kt(e,t,n){e.i.set(t,n)}function Nt(e){return kt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Dt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Rt(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,Ot),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Ot(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}It.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Rt(t,Pt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Rt(t,Pt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Rt(n,"/"==n.charAt(0)?xt:Lt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Rt(n,Ut)),e.join("")};var Pt=/[#\/\?@]/g,Lt=/[#\?:]/g,xt=/[#\?]/g,Mt=/[#\?@]/g,Ut=/#/g;function Ft(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Vt(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function jt(e,t){Vt(e),t=$t(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Bt(e,t){return Vt(e),t=$t(e,t),e.g.has(t)}function qt(e,t,n){jt(e,t),0<n.length&&(e.i=null,e.g.set($t(e,t),E(n)),e.h+=n.length)}function $t(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(e=Ft.prototype).add=function(e,t){Vt(this),this.i=null,e=$t(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},e.forEach=function(e,t){Vt(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},e.ta=function(){Vt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},e.Z=function(e){Vt(this);let t=[];if("string"==typeof e)Bt(this,e)&&(t=t.concat(this.g.get($t(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},e.set=function(e,t){return Vt(this),this.i=null,Bt(this,e=$t(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},e.get=function(e,t){return e&&0<(e=this.Z(e)).length?String(e[0]):t},e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};var zt=class{constructor(e,t){this.g=e,this.map=t}};function Kt(e){this.l=e||Ht,h.PerformanceNavigationTiming?e=0<(e=h.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(h.g&&h.g.Ka&&h.g.Ka()&&h.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ht=10;function Gt(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Wt(e){return e.h?1:e.g?e.g.size:0}function Qt(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Jt(e,t){e.g?e.g.add(t):e.h=t}function Xt(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Yt(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return E(e.i)}Kt.prototype.cancel=function(){if(this.i=Yt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var Zt=class{stringify(e){return h.JSON.stringify(e,void 0)}parse(e){return h.JSON.parse(e,void 0)}};function en(){this.g=new Zt}function tn(e,t,n){const r=n||"";try{Et(e,(function(e,n){let i=e;l(e)&&(i=ve(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}function nn(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(e){}}function rn(e){this.l=e.ec||null,this.j=e.ob||!1}function sn(e,t){ge.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=on,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}v(rn,Xe),rn.prototype.g=function(){return new sn(this.l,this.j)},rn.prototype.i=function(e){return function(){return e}}({}),v(sn,ge);var on=0;function an(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function cn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,hn(e)}function hn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(e=sn.prototype).open=function(e,t){if(this.readyState!=on)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,hn(this)},e.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||h).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},e.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,cn(this)),this.readyState=on},e.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,hn(this)),this.g&&(this.readyState=3,hn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==h.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;an(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))},e.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?cn(this):hn(this),3==this.readyState&&an(this)}},e.Za=function(e){this.g&&(this.response=this.responseText=e,cn(this))},e.Ya=function(e){this.g&&(this.response=e,cn(this))},e.ka=function(){this.g&&cn(this)},e.setRequestHeader=function(e,t){this.v.append(e,t)},e.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(sn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var un=h.JSON.parse;function ln(e){ge.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=dn,this.L=this.M=!1}v(ln,ge);var dn="",fn=/^https?$/i,pn=["POST","PUT"];function gn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,mn(e),vn(e)}function mn(e){e.F||(e.F=!0,me(e,"complete"),me(e,"error"))}function yn(e){if(e.h&&void 0!==c&&(!e.C[1]||4!=_n(e)||2!=e.da()))if(e.v&&4==_n(e))Re(e.La,0,e);else if(me(e,"readystatechange"),4==_n(e)){e.h=!1;try{const o=e.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===o){var i=String(e.I).match(bt)[1]||null;!i&&h.self&&h.self.location&&(i=h.self.location.protocol.slice(0,-1)),r=!fn.test(i?i.toLowerCase():"")}n=r}if(n)me(e,"complete"),me(e,"success");else{e.m=6;try{var s=2<_n(e)?e.g.statusText:""}catch(e){s=""}e.j=s+" ["+e.da()+"]",mn(e)}}finally{vn(e)}}}function vn(e,t){if(e.g){wn(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||me(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function wn(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(h.clearTimeout(e.A),e.A=null)}function _n(e){return e.g?e.g.readyState:0}function En(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case dn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function bn(e){let t="";return J(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function In(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=bn(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):kt(e,t,n))}function Tn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Sn(e){this.Ga=0,this.j=[],this.l=new Fe,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Tn("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Tn("baseRetryDelayMs",5e3,e),this.hb=Tn("retryDelaySeedMs",1e4,e),this.eb=Tn("forwardChannelMaxRetries",2,e),this.xa=Tn("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Kt(e&&e.concurrentRequestLimit),this.Ja=new en,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function Cn(e){if(kn(e),3==e.H){var t=e.W++,n=Tt(e.I);if(kt(n,"SID",e.K),kt(n,"RID",t),kt(n,"TYPE","terminate"),Rn(e,n),(t=new st(e,e.l,t)).L=2,t.A=Nt(Tt(n)),n=!1,h.navigator&&h.navigator.sendBeacon)try{n=h.navigator.sendBeacon(t.A.toString(),"")}catch(e){}!n&&h.Image&&((new Image).src=t.A,n=!0),n||(t.g=$n(t.l,null),t.g.ha(t.A)),t.G=Date.now(),gt(t)}Bn(e)}function An(e){e.g&&(xn(e),e.g.cancel(),e.g=null)}function kn(e){An(e),e.u&&(h.clearTimeout(e.u),e.u=null),Un(e),e.i.cancel(),e.m&&("number"==typeof e.m&&h.clearTimeout(e.m),e.m=null)}function Nn(e){if(!Gt(e.i)&&!e.m){e.m=!0;var t=e.Na;Te||Ae(),Se||(Te(),Se=!0),Ce.add(t,e),e.C=0}}function Dn(e,t){var n;n=t?t.m:e.W++;const r=Tt(e.I);kt(r,"SID",e.K),kt(r,"RID",n),kt(r,"AID",e.V),Rn(e,r),e.o&&e.s&&In(r,e.o,e.s),n=new st(e,e.l,n,e.C+1),null===e.o&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=On(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Jt(e.i,n),ut(n,r,t)}function Rn(e,t){e.na&&J(e.na,(function(e,n){kt(t,n,e)})),e.h&&Et({},(function(e,n){kt(t,n,e)}))}function On(e,t,n){n=Math.min(e.j.length,n);var r=e.h?m(e.h.Va,e.h,e):null;e:{var i=e.j;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].g;const a=i[o].map;if(n-=t,0>n)t=Math.max(0,i[o].g-100),s=!1;else try{tn(a,e,"req"+n+"_")}catch(e){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function Pn(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Te||Ae(),Se||(Te(),Se=!0),Ce.add(t,e),e.A=0}}function Ln(e){return!(e.g||e.u||3<=e.A)&&(e.ba++,e.u=We(m(e.Ma,e),Vn(e,e.A)),e.A++,!0)}function xn(e){null!=e.B&&(h.clearTimeout(e.B),e.B=null)}function Mn(e){e.g=new st(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=Tt(e.wa);kt(t,"RID","rpc"),kt(t,"SID",e.K),kt(t,"AID",e.V),kt(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&kt(t,"TO",e.qa),kt(t,"TYPE","xmlhttp"),Rn(e,t),e.o&&e.s&&In(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=Nt(Tt(t)),n.u=null,n.S=!0,lt(n,e)}function Un(e){null!=e.v&&(h.clearTimeout(e.v),e.v=null)}function Fn(e,t){var n=null;if(e.g==t){Un(e),xn(e),e.g=null;var r=2}else{if(!Qt(e.i,t))return;n=t.F,Xt(e.i,t),r=1}if(0!=e.H)if(t.i)if(1==r){n=t.u?t.u.length:0,t=Date.now()-t.G;var i=e.C;me(r=qe(),new Ge(r,n)),Nn(e)}else Pn(e);else if(3==(i=t.s)||0==i&&0<t.ca||!(1==r&&function(e,t){return!(Wt(e.i)>=e.i.j-(e.m?1:0)||(e.m?(e.j=t.F.concat(e.j),0):1==e.H||2==e.H||e.C>=(e.cb?0:e.eb)||(e.m=We(m(e.Na,e,t),Vn(e,e.C)),e.C++,0)))}(e,t)||2==r&&Ln(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:jn(e,5);break;case 4:jn(e,10);break;case 3:jn(e,6);break;default:jn(e,2)}}function Vn(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function jn(e,t){if(e.l.info("Error code "+t),2==t){var n=null;e.h&&(n=null);var r=m(e.pb,e);n||(n=new It("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||St(n,"https"),Nt(n)),function(e,t){const n=new Fe;if(h.Image){const r=new Image;r.onload=y(nn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=y(nn,n,r,"TestLoadImage: error",!1,t),r.onabort=y(nn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=y(nn,n,r,"TestLoadImage: timeout",!1,t),h.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(n.toString(),r)}else He(2);e.H=0,e.h&&e.h.za(t),Bn(e),kn(e)}function Bn(e){if(e.H=0,e.ma=[],e.h){const t=Yt(e.i);0==t.length&&0==e.j.length||(b(e.ma,t),b(e.ma,e.j),e.i.i.length=0,E(e.j),e.j.length=0),e.h.ya()}}function qn(e,t,n){var r=n instanceof It?Tt(n):new It(n);if(""!=r.g)t&&(r.g=t+"."+r.g),Ct(r,r.m);else{var i=h.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new It(null);r&&St(s,r),t&&(s.g=t),i&&Ct(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&kt(r,n,t),kt(r,"VER",e.ra),Rn(e,r),r}function $n(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=e.Ha&&!e.va?new ln(new rn({ob:n})):new ln(e.va)).Oa(e.J),t}function zn(){}function Kn(){if(P&&!(10<=Number($)))throw Error("Environmental error: no available transport.")}function Hn(e,t){ge.call(this),this.g=new Sn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!S(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!S(t)&&(this.g.F=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new Qn(this)}function Gn(e){nt.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Wn(){rt.call(this),this.status=1}function Qn(e){this.g=e}function Jn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function Xn(e,t,n){n||(n=0);var r=Array(16);if("string"==typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;o=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=n+(o<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^n&(i^s))+r[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^n&(i^s))+r[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^n&(i^s))+r[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=t+(i^s&(n^i))+r[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^s&(n^i))+r[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^s&(n^i))+r[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^s&(n^i))+r[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=t+(n^i^s)+r[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^i^s)+r[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^i^s)+r[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^i^s)+r[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=t+(i^(n|~s))+r[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(s|~n))+r[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~t))+r[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=t+(i^(n|~s))+r[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(s|~n))+r[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~t))+r[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=t+(i^(n|~s))+r[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(s|~n))+r[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~t))+r[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((s=(t=n+((o=t+(i^(n|~s))+r[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((i=s+((o=i+(t^(s|~n))+r[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function Yn(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=0|e[i];r&&s==t||(n[i]=s,r=!1)}this.g=n}(e=ln.prototype).Oa=function(e){this.M=e},e.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():et.g(),this.C=this.u?Ye(this.u):Ye(et),this.g.onreadystatechange=m(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(e){return void gn(this,e)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),i=h.FormData&&e instanceof h.FormData,!(0<=_(pn,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[e,t]of n)this.g.setRequestHeader(e,t);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{wn(this),0<this.B&&((this.L=function(e){return P&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=m(this.ua,this)):this.A=Re(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){gn(this,e)}},e.ua=function(){void 0!==c&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,me(this,"timeout"),this.abort(8))},e.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,me(this,"complete"),me(this,"abort"),vn(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),vn(this,!0)),ln.$.N.call(this)},e.La=function(){this.s||(this.G||this.v||this.l?yn(this):this.kb())},e.kb=function(){yn(this)},e.isActive=function(){return!!this.g},e.da=function(){try{return 2<_n(this)?this.g.status:-1}catch(e){return-1}},e.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},e.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),un(t)}},e.Ia=function(){return this.m},e.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(e=Sn.prototype).ra=8,e.H=1,e.Na=function(e){if(this.m)if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new st(this,this.l,e);let s=this.s;if(this.U&&(s?(s=X(s),Z(s,this.U)):s=this.U),null!==this.o||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){var r=this.j[n];if(void 0===(r="__data__"in r.map&&"string"==typeof(r=r.map.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=On(this,i,t),kt(n=Tt(this.I),"RID",e),kt(n,"CVER",22),this.F&&kt(n,"X-HTTP-Session-Id",this.F),Rn(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(bn(s)))+"&"+t:this.o&&In(n,this.o,s)),Jt(this.i,i),this.bb&&kt(n,"TYPE","init"),this.P?(kt(n,"$req",t),kt(n,"SID","null"),i.aa=!0,ut(i,n,null)):ut(i,n,t),this.H=2}}else 3==this.H&&(e?Dn(this,e):0==this.j.length||Gt(this.i)||Dn(this))},e.Ma=function(){if(this.u=null,Mn(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=We(m(this.jb,this),e)}},e.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,He(10),An(this),Mn(this))},e.ib=function(){null!=this.v&&(this.v=null,An(this),Ln(this),He(19))},e.pb=function(e){e?(this.l.info("Successfully pinged google.com"),He(2)):(this.l.info("Failed to ping google.com"),He(1))},e.isActive=function(){return!!this.h&&this.h.isActive(this)},(e=zn.prototype).Ba=function(){},e.Aa=function(){},e.za=function(){},e.ya=function(){},e.isActive=function(){return!0},e.Va=function(){},Kn.prototype.g=function(e,t){return new Hn(e,t)},v(Hn,ge),Hn.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;He(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=qn(e,null,e.Y),Nn(e)},Hn.prototype.close=function(){Cn(this.g)},Hn.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=ve(e),e=n);t.j.push(new zt(t.fb++,e)),3==t.H&&Nn(t)},Hn.prototype.N=function(){this.g.h=null,delete this.j,Cn(this.g),delete this.g,Hn.$.N.call(this)},v(Gn,nt),v(Wn,rt),v(Qn,zn),Qn.prototype.Ba=function(){me(this.g,"a")},Qn.prototype.Aa=function(e){me(this.g,new Gn(e))},Qn.prototype.za=function(e){me(this.g,new Wn)},Qn.prototype.ya=function(){me(this.g,"b")},v(Jn,(function(){this.blockSize=-1})),Jn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},Jn.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(0==i)for(;s<=n;)Xn(this,e,s),s+=this.blockSize;if("string"==typeof e){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){Xn(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){Xn(this,r),i=0;break}}this.h=i,this.i+=t},Jn.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var Zn={};function er(e){return-128<=e&&128>e?function(e,t){var n=Zn;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}(e,(function(e){return new Yn([0|e],0>e?-1:0)})):new Yn([0|e],0>e?-1:0)}function tr(e){if(isNaN(e)||!isFinite(e))return rr;if(0>e)return cr(tr(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=nr;return new Yn(t,0)}var nr=4294967296,rr=er(0),ir=er(1),sr=er(16777216);function or(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function ar(e){return-1==e.h}function cr(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new Yn(n,~e.h).add(ir)}function hr(e,t){return e.add(cr(t))}function ur(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function lr(e,t){this.g=e,this.h=t}function dr(e,t){if(or(t))throw Error("division by zero");if(or(e))return new lr(rr,rr);if(ar(e))return t=dr(cr(e),t),new lr(cr(t.g),cr(t.h));if(ar(t))return t=dr(e,cr(t)),new lr(cr(t.g),t.h);if(30<e.g.length){if(ar(e)||ar(t))throw Error("slowDivide_ only works with positive integers.");for(var n=ir,r=t;0>=r.X(e);)n=fr(n),r=fr(r);var i=pr(n,1),s=pr(r,1);for(r=pr(r,2),n=pr(n,2);!or(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=pr(r,1),n=pr(n,1)}return t=hr(e,i.R(t)),new lr(i,t)}for(i=rr;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=48>=(r=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,r-48),o=(s=tr(n)).R(t);ar(o)||0<o.X(e);)o=(s=tr(n-=r)).R(t);or(s)&&(s=ir),i=i.add(s),e=hr(e,o)}return new lr(i,e)}function fr(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new Yn(n,e.h)}function pr(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new Yn(i,e.h)}(e=Yn.prototype).ea=function(){if(ar(this))return-cr(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:nr+r)*t,t*=nr}return e},e.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(or(this))return"0";if(ar(this))return"-"+cr(this).toString(e);for(var t=tr(Math.pow(e,6)),n=this,r="";;){var i=dr(n,t).g,s=((0<(n=hr(n,i.R(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(or(n=i))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},e.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},e.X=function(e){return ar(e=hr(this,e))?-1:or(e)?0:1},e.abs=function(){return ar(this)?cr(this):this},e.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(65535&this.D(i))+(65535&e.D(i)),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Yn(n,-2147483648&n[n.length-1]?-1:0)},e.R=function(e){if(or(this)||or(e))return rr;if(ar(this))return ar(e)?cr(this).R(cr(e)):cr(cr(this).R(e));if(ar(e))return cr(this.R(cr(e)));if(0>this.X(sr)&&0>e.X(sr))return tr(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=65535&this.D(r),a=e.D(i)>>>16,c=65535&e.D(i);n[2*r+2*i]+=o*c,ur(n,2*r+2*i),n[2*r+2*i+1]+=s*c,ur(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,ur(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,ur(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new Yn(n,0)},e.gb=function(e){return dr(this,e).h},e.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new Yn(n,this.h&e.h)},e.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new Yn(n,this.h|e.h)},e.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new Yn(n,this.h^e.h)},Kn.prototype.createWebChannel=Kn.prototype.g,Hn.prototype.send=Hn.prototype.u,Hn.prototype.open=Hn.prototype.m,Hn.prototype.close=Hn.prototype.close,Qe.NO_ERROR=0,Qe.TIMEOUT=8,Qe.HTTP_ERROR=6,Je.COMPLETE="complete",Ze.EventType=tt,tt.OPEN="a",tt.CLOSE="b",tt.ERROR="c",tt.MESSAGE="d",ge.prototype.listen=ge.prototype.O,ln.prototype.listenOnce=ln.prototype.P,ln.prototype.getLastError=ln.prototype.Sa,ln.prototype.getLastErrorCode=ln.prototype.Ia,ln.prototype.getStatus=ln.prototype.da,ln.prototype.getResponseJson=ln.prototype.Wa,ln.prototype.getResponseText=ln.prototype.ja,ln.prototype.send=ln.prototype.ha,ln.prototype.setWithCredentials=ln.prototype.Oa,Jn.prototype.digest=Jn.prototype.l,Jn.prototype.reset=Jn.prototype.reset,Jn.prototype.update=Jn.prototype.j,Yn.prototype.add=Yn.prototype.add,Yn.prototype.multiply=Yn.prototype.R,Yn.prototype.modulo=Yn.prototype.gb,Yn.prototype.compare=Yn.prototype.X,Yn.prototype.toNumber=Yn.prototype.ea,Yn.prototype.toString=Yn.prototype.toString,Yn.prototype.getBits=Yn.prototype.D,Yn.fromNumber=tr,Yn.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return cr(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=tr(Math.pow(n,8)),i=rr,s=0;s<t.length;s+=8){var o=Math.min(8,t.length-s),a=parseInt(t.substring(s,s+o),n);8>o?(o=tr(Math.pow(n,o)),i=i.R(o).add(tr(a))):i=(i=i.R(r)).add(tr(a))}return i};var gr=a.createWebChannelTransport=function(){return new Kn},mr=a.getStatEventTarget=function(){return qe()},yr=a.ErrorCode=Qe,vr=a.EventType=Je,wr=a.Event=je,_r=a.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Er=(a.FetchXmlHttpFactory=rn,a.WebChannel=Ze),br=a.XhrIo=ln,Ir=a.Md5=Jn,Tr=a.Integer=Yn;const Sr="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Cr.UNAUTHENTICATED=new Cr(null),Cr.GOOGLE_CREDENTIALS=new Cr("google-credentials-uid"),Cr.FIRST_PARTY=new Cr("first-party-uid"),Cr.MOCK_USER=new Cr("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Ar="10.9.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr=new i.Vy("@firebase/firestore");function Nr(){return kr.logLevel}function Dr(e,...t){if(kr.logLevel<=i.$b.DEBUG){const n=t.map(Pr);kr.debug(`Firestore (${Ar}): ${e}`,...n)}}function Rr(e,...t){if(kr.logLevel<=i.$b.ERROR){const n=t.map(Pr);kr.error(`Firestore (${Ar}): ${e}`,...n)}}function Or(e,...t){if(kr.logLevel<=i.$b.WARN){const n=t.map(Pr);kr.warn(`Firestore (${Ar}): ${e}`,...n)}}function Pr(e){if("string"==typeof e)return e;try{
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return function(e){return JSON.stringify(e)}(e)}catch(t){return e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(e="Unexpected state"){const t=`FIRESTORE (${Ar}) INTERNAL ASSERTION FAILED: `+e;throw Rr(t),new Error(t)}function xr(e,t){e||Lr()}function Mr(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Fr extends s.g{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Br{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Cr.UNAUTHENTICATED)))}shutdown(){}}class qr{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class $r{constructor(e){this.t=e,this.currentUser=Cr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new Vr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Vr,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{Dr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Dr("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Vr)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Dr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(xr("string"==typeof t.accessToken),new jr(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return xr(null===e||"string"==typeof e),new Cr(e)}}class zr{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=Cr.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Kr{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new zr(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable((()=>t(Cr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Hr{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Gr{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const n=e=>{null!=e.error&&Dr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.R;return this.R=e.token,Dr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{Dr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.A.getImmediate({optional:!0});e?r(e):Dr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(xr("string"==typeof e.token),this.R=e.token,new Hr(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Wr(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(256/62);let n="";for(;n.length<20;){const r=Wr(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%62))}return n}}function Jr(e,t){return e<t?-1:e>t?1:0}function Xr(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yr{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Fr(Ur.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Fr(Ur.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Fr(Ur.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Fr(Ur.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Yr.fromMillis(Date.now())}static fromDate(e){return Yr.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new Yr(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Jr(this.nanoseconds,e.nanoseconds):Jr(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Zr(e)}static min(){return new Zr(new Yr(0,0))}static max(){return new Zr(new Yr(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,t,n){void 0===t?t=0:t>e.length&&Lr(),void 0===n?n=e.length-t:n>e.length-t&&Lr(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===ei.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ei?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ti extends ei{construct(e,t,n){return new ti(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Fr(Ur.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new ti(t)}static emptyPath(){return new ti([])}}const ni=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ri extends ei{construct(e,t,n){return new ri(e,t,n)}static isValidIdentifier(e){return ni.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ri.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new ri(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new Fr(Ur.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new Fr(Ur.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Fr(Ur.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new Fr(Ur.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ri(t)}static emptyPath(){return new ri([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e){this.path=e}static fromPath(e){return new ii(ti.fromString(e))}static fromName(e){return new ii(ti.fromString(e).popFirst(5))}static empty(){return new ii(ti.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===ti.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return ti.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ii(new ti(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}si.UNKNOWN_ID=-1;function oi(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=Zr.fromTimestamp(1e9===r?new Yr(n+1,0):new Yr(n,r));return new ci(i,ii.empty(),t)}function ai(e){return new ci(e.readTime,e.key,-1)}class ci{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new ci(Zr.min(),ii.empty(),-1)}static max(){return new ci(Zr.max(),ii.empty(),-1)}}function hi(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=ii.comparator(e.documentKey,t.documentKey),0!==n?n:Jr(e.largestBatchId,t.largestBatchId)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)}const ui="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class li{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function di(e){if(e.code!==Ur.FAILED_PRECONDITION||e.message!==ui)throw e;Dr("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Lr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new fi(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof fi?t:fi.resolve(t)}catch(e){return fi.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):fi.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):fi.reject(t)}static resolve(e){return new fi(((t,n)=>{t(e)}))}static reject(e){return new fi(((t,n)=>{n(e)}))}static waitFor(e){return new fi(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=fi.resolve(!1);for(const n of e)t=t.next((e=>e?fi.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new fi(((n,r)=>{const i=e.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;t(e[c]).next((e=>{s[c]=e,++o,o===i&&n(s)}),(e=>r(e)))}}))}static doWhile(e,t){return new fi(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new Vr,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new yi(e,t.error)):this.V.resolve()},this.transaction.onerror=t=>{const n=bi(t.target.error);this.V.reject(new yi(e,n))}}static open(e,t,n,r){try{return new pi(t,e.transaction(r,n))}catch(e){throw new yi(t,e)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(Dr("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const t=this.transaction.objectStore(e);return new wi(t)}}class gi{constructor(e,t,n){this.name=e,this.version=t,this.p=n,12.2===gi.S((0,s.ZQ)())&&Rr("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return Dr("SimpleDb","Removing database:",e),_i(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!(0,s.zW)())return!1;if(gi.C())return!0;const e=(0,s.ZQ)(),t=gi.S(e),n=0<t&&t<10,r=gi.v(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static C(){var e;return"undefined"!=typeof process&&"YES"===(null===(e=process.__PRIVATE_env)||void 0===e?void 0:e.F)}static M(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static v(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async O(e){return this.db||(Dr("SimpleDb","Opening database:",this.name),this.db=await new Promise(((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{const n=e.target.result;t(n)},r.onblocked=()=>{n(new yi(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{const r=t.target.error;"VersionError"===r.name?n(new Fr(Ur.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new Fr(Ur.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new yi(e,r))},r.onupgradeneeded=e=>{Dr("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.p.N(t,r.transaction,e.oldVersion,this.version).next((()=>{Dr("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.L&&(this.db.onversionchange=e=>this.L(e)),this.db}B(e){this.L=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){const i="readonly"===t;let s=0;for(;;){++s;try{this.db=await this.O(e);const t=pi.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).next((e=>(t.g(),e))).catch((e=>(t.abort(e),fi.reject(e)))).toPromise();return s.catch((()=>{})),await t.m,s}catch(e){const t=e,n="FirebaseError"!==t.name&&s<3;if(Dr("SimpleDb","Transaction failed with error:",t.message,"Retrying:",n),this.close(),!n)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class mi{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return _i(this.k.delete())}}class yi extends Fr{constructor(e,t){super(Ur.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function vi(e){return"IndexedDbTransactionError"===e.name}class wi{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(Dr("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(Dr("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),_i(n)}add(e){return Dr("SimpleDb","ADD",this.store.name,e,e),_i(this.store.add(e))}get(e){return _i(this.store.get(e)).next((t=>(void 0===t&&(t=null),Dr("SimpleDb","GET",this.store.name,e,t),t)))}delete(e){return Dr("SimpleDb","DELETE",this.store.name,e),_i(this.store.delete(e))}count(){return Dr("SimpleDb","COUNT",this.store.name),_i(this.store.count())}W(e,t){const n=this.options(e,t),r=n.index?this.store.index(n.index):this.store;if("function"==typeof r.getAll){const e=r.getAll(n.range);return new fi(((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}}))}{const e=this.cursor(n),t=[];return this.G(e,((e,n)=>{t.push(n)})).next((()=>t))}}j(e,t){const n=this.store.getAll(e,null===t?void 0:t);return new fi(((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}}))}H(e,t){Dr("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.J=!1;const r=this.cursor(n);return this.G(r,((e,t,n)=>n.delete()))}Y(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.G(r,t)}Z(e){const t=this.cursor({});return new fi(((n,r)=>{t.onerror=e=>{const t=bi(e.target.error);r(t)},t.onsuccess=t=>{const r=t.target.result;r?e(r.primaryKey,r.value).next((e=>{e?r.continue():n()})):n()}}))}G(e,t){const n=[];return new fi(((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{const i=e.target.result;if(!i)return void r();const s=new mi(i),o=t(i.primaryKey,i.value,s);if(o instanceof fi){const e=o.catch((e=>(s.done(),fi.reject(e))));n.push(e)}s.isDone?r():null===s.$?i.continue():i.continue(s.$)}})).next((()=>fi.waitFor(n)))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.J?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function _i(e){return new fi(((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=bi(e.target.error);n(t)}}))}let Ei=!1;function bi(e){const t=gi.S((0,s.ZQ)());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new Fr("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Ei||(Ei=!0,setTimeout((()=>{throw e}),0)),e}}return e}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ii{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.se(e),this.oe=e=>t.writeSequenceNumber(e))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}function Ti(e){return null==e}function Si(e){return 0===e&&1/e==-1/0}Ii._e=-1;const Ci=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Ai=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],ki=Ai;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ni(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Di(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Ri(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,t){this.comparator=e,this.root=t||Li.EMPTY}insert(e,t){return new Oi(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Li.BLACK,null,null))}remove(e){return new Oi(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Li.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Pi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Pi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Pi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Pi(this.root,e,this.comparator,!0)}}class Pi{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Li{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Li.RED,this.left=null!=r?r:Li.EMPTY,this.right=null!=i?i:Li.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Li(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Li.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Li.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Li.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Li.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Lr();if(this.right.isRed())throw Lr();const e=this.left.check();if(e!==this.right.check())throw Lr();return e+(this.isRed()?0:1)}}Li.EMPTY=null,Li.RED=!0,Li.BLACK=!1,Li.EMPTY=new class{constructor(){this.size=0}get key(){throw Lr()}get value(){throw Lr()}get color(){throw Lr()}get left(){throw Lr()}get right(){throw Lr()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Li(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xi{constructor(e){this.comparator=e,this.data=new Oi(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Mi(this.data.getIterator())}getIteratorFrom(e){return new Mi(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof xi))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new xi(this.comparator);return t.data=e,t}}class Mi{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ui{constructor(e){this.fields=e,e.sort(ri.comparator)}static empty(){return new Ui([])}unionWith(e){let t=new xi(ri.comparator);for(const e of this.fields)t=t.add(e);for(const n of e)t=t.add(n);return new Ui(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Xr(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vi{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new Fi("Invalid base64 string: "+e):e}}(e);return new Vi(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Vi(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Jr(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Vi.EMPTY_BYTE_STRING=new Vi("");const ji=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Bi(e){if(xr(!!e),"string"==typeof e){let t=0;const n=ji.exec(e);if(xr(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:qi(e.seconds),nanos:qi(e.nanos)}}function qi(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function $i(e){return"string"==typeof e?Vi.fromBase64String(e):Vi.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Ki(e){const t=e.mapValue.fields.__previous_value__;return zi(t)?Ki(t):t}function Hi(e){const t=Bi(e.mapValue.fields.__local_write_time__.timestampValue);return new Yr(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,t,n,r,i,s,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class Wi{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Wi("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Wi&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ji(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?zi(e)?4:hs(e)?9007199254740991:10:Lr()}function Xi(e,t){if(e===t)return!0;const n=Ji(e);if(n!==Ji(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Hi(e).isEqual(Hi(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Bi(e.timestampValue),r=Bi(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return $i(e.bytesValue).isEqual($i(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return qi(e.geoPointValue.latitude)===qi(t.geoPointValue.latitude)&&qi(e.geoPointValue.longitude)===qi(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return qi(e.integerValue)===qi(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=qi(e.doubleValue),r=qi(t.doubleValue);return n===r?Si(n)===Si(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Xr(e.arrayValue.values||[],t.arrayValue.values||[],Xi);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Ni(n)!==Ni(r))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!Xi(n[e],r[e])))return!1;return!0}(e,t);default:return Lr()}}function Yi(e,t){return void 0!==(e.values||[]).find((e=>Xi(e,t)))}function Zi(e,t){if(e===t)return 0;const n=Ji(e),r=Ji(t);if(n!==r)return Jr(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Jr(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=qi(e.integerValue||e.doubleValue),r=qi(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return es(e.timestampValue,t.timestampValue);case 4:return es(Hi(e),Hi(t));case 5:return Jr(e.stringValue,t.stringValue);case 6:return function(e,t){const n=$i(e),r=$i(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){const t=Jr(n[e],r[e]);if(0!==t)return t}return Jr(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Jr(qi(e.latitude),qi(t.latitude));return 0!==n?n:Jr(qi(e.longitude),qi(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){const t=Zi(n[e],r[e]);if(t)return t}return Jr(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===Qi.mapValue&&t===Qi.mapValue)return 0;if(e===Qi.mapValue)return 1;if(t===Qi.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){const t=Jr(r[e],s[e]);if(0!==t)return t;const o=Zi(n[r[e]],i[s[e]]);if(0!==o)return o}return Jr(r.length,s.length)}(e.mapValue,t.mapValue);default:throw Lr()}}function es(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Jr(e,t);const n=Bi(e),r=Bi(t),i=Jr(n.seconds,r.seconds);return 0!==i?i:Jr(n.nanos,r.nanos)}function ts(e){return ns(e)}function ns(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Bi(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(e){return $i(e).toBase64()}(e.bytesValue):"referenceValue"in e?function(e){return ii.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=ns(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${ns(e.fields[i])}`;return n+"}"}(e.mapValue):Lr()}function rs(e){return!!e&&"integerValue"in e}function is(e){return!!e&&"arrayValue"in e}function ss(e){return!!e&&"nullValue"in e}function os(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function as(e){return!!e&&"mapValue"in e}function cs(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Di(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=cs(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=cs(e.arrayValue.values[n]);return t}return Object.assign({},e)}function hs(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class us{constructor(e){this.value=e}static empty(){return new us({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!as(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=cs(t)}setAll(e){let t=ri.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=cs(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());as(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Xi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];as(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Di(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new us(cs(this.value))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ls{constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new ls(e,0,Zr.min(),Zr.min(),Zr.min(),us.empty(),0)}static newFoundDocument(e,t,n,r){return new ls(e,1,t,Zr.min(),n,r,0)}static newNoDocument(e,t){return new ls(e,2,t,Zr.min(),Zr.min(),us.empty(),0)}static newUnknownDocument(e,t){return new ls(e,3,t,Zr.min(),Zr.min(),us.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Zr.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=us.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=us.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Zr.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof ls&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ls(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,t){this.position=e,this.inclusive=t}}function fs(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?ii.comparator(ii.fromName(o.referenceValue),n.key):Zi(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function ps(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Xi(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,t="asc"){this.field=e,this.dir=t}}function ms(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{}class vs extends ys{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new Cs(e,t,n):"array-contains"===t?new Ds(e,n):"in"===t?new Rs(e,n):"not-in"===t?new Os(e,n):"array-contains-any"===t?new Ps(e,n):new vs(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new As(e,n):new ks(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(Zi(t,this.value)):null!==t&&Ji(this.value)===Ji(t)&&this.matchesComparison(Zi(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Lr()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ws extends ys{constructor(e,t){super(),this.filters=e,this.op=t,this.ue=null}static create(e,t){return new ws(e,t)}matches(e){return _s(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ue||(this.ue=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function _s(e){return"and"===e.op}function Es(e){return bs(e)&&_s(e)}function bs(e){for(const t of e.filters)if(t instanceof ws)return!1;return!0}function Is(e){if(e instanceof vs)return e.field.canonicalString()+e.op.toString()+ts(e.value);if(Es(e))return e.filters.map((e=>Is(e))).join(",");{const t=e.filters.map((e=>Is(e))).join(",");return`${e.op}(${t})`}}function Ts(e,t){return e instanceof vs?function(e,t){return t instanceof vs&&e.op===t.op&&e.field.isEqual(t.field)&&Xi(e.value,t.value)}(e,t):e instanceof ws?function(e,t){return t instanceof ws&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&Ts(n,t.filters[r])),!0)}(e,t):void Lr()}function Ss(e){return e instanceof vs?function(e){return`${e.field.canonicalString()} ${e.op} ${ts(e.value)}`}(e):e instanceof ws?function(e){return e.op.toString()+" {"+e.getFilters().map(Ss).join(" ,")+"}"}(e):"Filter"}class Cs extends vs{constructor(e,t,n){super(e,t,n),this.key=ii.fromName(n.referenceValue)}matches(e){const t=ii.comparator(e.key,this.key);return this.matchesComparison(t)}}class As extends vs{constructor(e,t){super(e,"in",t),this.keys=Ns("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class ks extends vs{constructor(e,t){super(e,"not-in",t),this.keys=Ns("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Ns(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>ii.fromName(e.referenceValue)))}class Ds extends vs{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return is(t)&&Yi(t.arrayValue,this.value)}}class Rs extends vs{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Yi(this.value.arrayValue,t)}}class Os extends vs{constructor(e,t){super(e,"not-in",t)}matches(e){if(Yi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Yi(this.value.arrayValue,t)}}class Ps extends vs{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!is(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Yi(this.value.arrayValue,e)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ce=null}}function xs(e,t=null,n=[],r=[],i=null,s=null,o=null){return new Ls(e,t,n,r,i,s,o)}function Ms(e){const t=Mr(e);if(null===t.ce){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>Is(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),Ti(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>ts(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>ts(e))).join(",")),t.ce=e}return t.ce}function Us(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!ms(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Ts(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!ps(e.startAt,t.startAt)&&ps(e.endAt,t.endAt)}function Fs(e){return ii.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vs{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function js(e,t,n,r,i,s,o,a){return new Vs(e,t,n,r,i,s,o,a)}function Bs(e){return new Vs(e)}function qs(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function $s(e){return null!==e.collectionGroup}function zs(e){const t=Mr(e);if(null===t.le){t.le=[];const e=new Set;for(const n of t.explicitOrderBy)t.le.push(n),e.add(n.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc",r=function(e){let t=new xi(ri.comparator);return e.filters.forEach((e=>{e.getFlattenedFilters().forEach((e=>{e.isInequality()&&(t=t.add(e.field))}))})),t}(t);r.forEach((r=>{e.has(r.canonicalString())||r.isKeyField()||t.le.push(new gs(r,n))})),e.has(ri.keyField().canonicalString())||t.le.push(new gs(ri.keyField(),n))}return t.le}function Ks(e){const t=Mr(e);return t.he||(t.he=Hs(t,zs(e))),t.he}function Hs(e,t){if("F"===e.limitType)return xs(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map((e=>{const t="desc"===e.dir?"asc":"desc";return new gs(e.field,t)}));const n=e.endAt?new ds(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new ds(e.startAt.position,e.startAt.inclusive):null;return xs(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function Gs(e,t,n){return new Vs(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Ws(e,t){return Us(Ks(e),Ks(t))&&e.limitType===t.limitType}function Qs(e){return`${Ms(Ks(e))}|lt:${e.limitType}`}function Js(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>Ss(e))).join(", ")}]`),Ti(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>ts(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>ts(e))).join(",")),`Target(${t})`}(Ks(e))}; limitType=${e.limitType})`}function Xs(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):ii.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of zs(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=fs(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,zs(e),t))&&!(e.endAt&&!function(e,t,n){const r=fs(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,zs(e),t))}(e,t)}function Ys(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Zs(e){return(t,n)=>{let r=!1;for(const i of zs(e)){const e=eo(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function eo(e,t,n){const r=e.field.isKeyField()?ii.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?Zi(r,i):Lr()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Lr()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,r]of n)if(this.equalsFn(t,e))return r}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Di(this.inner,((t,n)=>{for(const[t,r]of n)e(t,r)}))}isEmpty(){return Ri(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no=new Oi(ii.comparator);function ro(){return no}const io=new Oi(ii.comparator);function so(...e){let t=io;for(const n of e)t=t.insert(n.key,n);return t}function oo(e){let t=io;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function ao(){return ho()}function co(){return ho()}function ho(){return new to((e=>e.toString()),((e,t)=>e.isEqual(t)))}new Oi(ii.comparator);const uo=new xi(ii.comparator);function lo(...e){let t=uo;for(const n of e)t=t.add(n);return t}const fo=new xi(Jr);function po(){return fo}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Si(t)?"-0":t}}function mo(e){return{integerValue:""+e}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(){this._=void 0}}function vo(e,t,n){return e instanceof Eo?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&zi(t)&&(t=Ki(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof bo?Io(e,t):e instanceof To?So(e,t):function(e,t){const n=_o(e,t),r=Ao(n)+Ao(e.Ie);return rs(n)&&rs(e.Ie)?mo(r):go(e.serializer,r)}(e,t)}function wo(e,t,n){return e instanceof bo?Io(e,t):e instanceof To?So(e,t):n}function _o(e,t){return e instanceof Co?function(e){return rs(e)||function(e){return!!e&&"doubleValue"in e}(e)}(t)?t:{integerValue:0}:null}class Eo extends yo{}class bo extends yo{constructor(e){super(),this.elements=e}}function Io(e,t){const n=ko(t);for(const t of e.elements)n.some((e=>Xi(e,t)))||n.push(t);return{arrayValue:{values:n}}}class To extends yo{constructor(e){super(),this.elements=e}}function So(e,t){let n=ko(t);for(const t of e.elements)n=n.filter((e=>!Xi(e,t)));return{arrayValue:{values:n}}}class Co extends yo{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function Ao(e){return qi(e.integerValue||e.doubleValue)}function ko(e){return is(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new No}static exists(e){return new No(void 0,e)}static updateTime(e){return new No(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Do(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Ro{}function Oo(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Bo(e.key,No.none()):new Mo(e.key,e.data,No.none());{const n=e.data,r=us.empty();let i=new xi(ri.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new Uo(e.key,r,new Ui(i.toArray()),No.none())}}function Po(e,t,n){e instanceof Mo?function(e,t,n){const r=e.value.clone(),i=Vo(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Uo?function(e,t,n){if(!Do(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Vo(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(Fo(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function Lo(e,t,n,r){return e instanceof Mo?function(e,t,n,r){if(!Do(e.precondition,t))return n;const i=e.value.clone(),s=jo(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof Uo?function(e,t,n,r){if(!Do(e.precondition,t))return n;const i=jo(e.fieldTransforms,r,t),s=t.data;return s.setAll(Fo(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return Do(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function xo(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&Xr(e,t,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof bo&&t instanceof bo||e instanceof To&&t instanceof To?Xr(e.elements,t.elements,Xi):e instanceof Co&&t instanceof Co?Xi(e.Ie,t.Ie):e instanceof Eo&&t instanceof Eo}(e.transform,t.transform)}(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Mo extends Ro{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Uo extends Ro{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Fo(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function Vo(e,t,n){const r=new Map;xr(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,wo(o,a,n[i]))}return r}function jo(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,vo(e,s,t))}return r}class Bo extends Ro{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qo{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const r=this.mutations[t];r.key.isEqual(e.key)&&Po(r,e,n[t])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Lo(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Lo(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=co();return this.mutations.forEach((r=>{const i=e.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;const a=Oo(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(Zr.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),lo())}isEqual(e){return this.batchId===e.batchId&&Xr(this.mutations,e.mutations,((e,t)=>xo(e,t)))&&Xr(this.baseMutations,e.baseMutations,((e,t)=>xo(e,t)))}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $o{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zo{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ko,Ho;function Go(e){if(void 0===e)return Rr("GRPC error has no .code"),Ur.UNKNOWN;switch(e){case Ko.OK:return Ur.OK;case Ko.CANCELLED:return Ur.CANCELLED;case Ko.UNKNOWN:return Ur.UNKNOWN;case Ko.DEADLINE_EXCEEDED:return Ur.DEADLINE_EXCEEDED;case Ko.RESOURCE_EXHAUSTED:return Ur.RESOURCE_EXHAUSTED;case Ko.INTERNAL:return Ur.INTERNAL;case Ko.UNAVAILABLE:return Ur.UNAVAILABLE;case Ko.UNAUTHENTICATED:return Ur.UNAUTHENTICATED;case Ko.INVALID_ARGUMENT:return Ur.INVALID_ARGUMENT;case Ko.NOT_FOUND:return Ur.NOT_FOUND;case Ko.ALREADY_EXISTS:return Ur.ALREADY_EXISTS;case Ko.PERMISSION_DENIED:return Ur.PERMISSION_DENIED;case Ko.FAILED_PRECONDITION:return Ur.FAILED_PRECONDITION;case Ko.ABORTED:return Ur.ABORTED;case Ko.OUT_OF_RANGE:return Ur.OUT_OF_RANGE;case Ko.UNIMPLEMENTED:return Ur.UNIMPLEMENTED;case Ko.DATA_LOSS:return Ur.DATA_LOSS;default:return Lr()}}(Ho=Ko||(Ko={}))[Ho.OK=0]="OK",Ho[Ho.CANCELLED=1]="CANCELLED",Ho[Ho.UNKNOWN=2]="UNKNOWN",Ho[Ho.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ho[Ho.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ho[Ho.NOT_FOUND=5]="NOT_FOUND",Ho[Ho.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ho[Ho.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ho[Ho.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ho[Ho.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ho[Ho.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ho[Ho.ABORTED=10]="ABORTED",Ho[Ho.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ho[Ho.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ho[Ho.INTERNAL=13]="INTERNAL",Ho[Ho.UNAVAILABLE=14]="UNAVAILABLE",Ho[Ho.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Wo=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo=new Tr([4294967295,4294967295],0);function Xo(e){const t=Qo().encode(e),n=new Ir;return n.update(t),new Uint8Array(n.digest())}function Yo(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Tr([n,r],0),new Tr([i,s],0)]}class Zo{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new ea(`Invalid padding: ${t}`);if(n<0)throw new ea(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new ea(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new ea(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ee=Tr.fromNumber(this.Te)}de(e,t,n){let r=e.add(t.multiply(Tr.fromNumber(n)));return 1===r.compare(Jo)&&(r=new Tr([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Ee).toNumber()}Ae(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Te)return!1;const t=Xo(e),[n,r]=Yo(t);for(let e=0;e<this.hashCount;e++){const t=this.de(n,r,e);if(!this.Ae(t))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),s=new Zo(i,r,t);return n.forEach((e=>s.insert(e))),s}insert(e){if(0===this.Te)return;const t=Xo(e),[n,r]=Yo(t);for(let e=0;e<this.hashCount;e++){const t=this.de(n,r,e);this.Re(t)}}Re(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class ea extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,na.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new ta(Zr.min(),r,new Oi(Jr),ro(),lo())}}class na{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new na(n,t,lo(),lo(),lo())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,t,n,r){this.Ve=e,this.removedTargetIds=t,this.key=n,this.me=r}}class ia{constructor(e,t){this.targetId=e,this.fe=t}}class sa{constructor(e,t,n=Vi.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class oa{constructor(){this.ge=0,this.pe=ha(),this.ye=Vi.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return 0!==this.ge}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=lo(),t=lo(),n=lo();return this.pe.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Lr()}})),new na(this.ye,this.we,e,t,n)}Fe(){this.Se=!1,this.pe=ha()}Me(e,t){this.Se=!0,this.pe=this.pe.insert(e,t)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,xr(this.ge>=0)}Le(){this.Se=!0,this.we=!0}}class aa{constructor(e){this.Be=e,this.ke=new Map,this.qe=ro(),this.Qe=ca(),this.Ke=new Oi(Jr)}$e(e){for(const t of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(t,e.me):this.We(t,e.key,e.me);for(const t of e.removedTargetIds)this.We(t,e.key,e.me)}Ge(e){this.forEachTarget(e,(t=>{const n=this.ze(t);switch(e.state){case 0:this.je(t)&&n.Ce(e.resumeToken);break;case 1:n.Ne(),n.be||n.Fe(),n.Ce(e.resumeToken);break;case 2:n.Ne(),n.be||this.removeTarget(t);break;case 3:this.je(t)&&(n.Le(),n.Ce(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),n.Ce(e.resumeToken));break;default:Lr()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ke.forEach(((e,n)=>{this.je(n)&&t(n)}))}Je(e){const t=e.targetId,n=e.fe.count,r=this.Ye(t);if(r){const i=r.target;if(Fs(i))if(0===n){const e=new ii(i.path);this.We(t,e,ls.newNoDocument(e,Zr.min()))}else xr(1===n);else{const r=this.Ze(t);if(r!==n){const n=this.Xe(e),i=n?this.et(n,e,r):1;if(0!==i){this.He(t);const e=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,e)}null==Wo||Wo.tt(function(e,t,n,r,i){var s,o,a,c,h,u;const l={localCacheCount:e,existenceFilterCount:t.count,databaseId:n.database,projectId:n.projectId},d=t.unchangedNames;return d&&(l.bloomFilter={applied:0===i,hashCount:null!==(s=null==d?void 0:d.hashCount)&&void 0!==s?s:0,bitmapLength:null!==(c=null===(a=null===(o=null==d?void 0:d.bits)||void 0===o?void 0:o.bitmap)||void 0===a?void 0:a.length)&&void 0!==c?c:0,padding:null!==(u=null===(h=null==d?void 0:d.bits)||void 0===h?void 0:h.padding)&&void 0!==u?u:0,mightContain:e=>{var t;return null!==(t=null==r?void 0:r.mightContain(e))&&void 0!==t&&t}}),l}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r,e.fe,this.Be.nt(),n,i))}}}}Xe(e){const t=e.fe.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=t;let s,o;try{s=$i(n).toUint8Array()}catch(e){if(e instanceof Fi)return Or("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{o=new Zo(s,r,i)}catch(e){return Or(e instanceof ea?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===o.Te?null:o}et(e,t,n){return t.fe.count===n-this.rt(e,t.targetId)?0:2}rt(e,t){const n=this.Be.getRemoteKeysForTarget(t);let r=0;return n.forEach((n=>{const i=this.Be.nt(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.mightContain(s)||(this.We(t,n,null),r++)})),r}it(e){const t=new Map;this.ke.forEach(((n,r)=>{const i=this.Ye(r);if(i){if(n.current&&Fs(i.target)){const t=new ii(i.target.path);null!==this.qe.get(t)||this.st(r,t)||this.We(r,t,ls.newNoDocument(t,e))}n.De&&(t.set(r,n.ve()),n.Fe())}}));let n=lo();this.Qe.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.Ye(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.qe.forEach(((t,n)=>n.setReadTime(e)));const r=new ta(e,t,this.Ke,this.qe,n);return this.qe=ro(),this.Qe=ca(),this.Ke=new Oi(Jr),r}Ue(e,t){if(!this.je(e))return;const n=this.st(e,t.key)?2:0;this.ze(e).Me(t.key,n),this.qe=this.qe.insert(t.key,t),this.Qe=this.Qe.insert(t.key,this.ot(t.key).add(e))}We(e,t,n){if(!this.je(e))return;const r=this.ze(e);this.st(e,t)?r.Me(t,1):r.xe(t),this.Qe=this.Qe.insert(t,this.ot(t).delete(e)),n&&(this.qe=this.qe.insert(t,n))}removeTarget(e){this.ke.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let t=this.ke.get(e);return t||(t=new oa,this.ke.set(e,t)),t}ot(e){let t=this.Qe.get(e);return t||(t=new xi(Jr),this.Qe=this.Qe.insert(e,t)),t}je(e){const t=null!==this.Ye(e);return t||Dr("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.ke.get(e);return t&&t.be?null:this.Be._t(e)}He(e){this.ke.set(e,new oa),this.Be.getRemoteKeysForTarget(e).forEach((t=>{this.We(e,t,null)}))}st(e,t){return this.Be.getRemoteKeysForTarget(e).has(t)}}function ca(){return new Oi(ii.comparator)}function ha(){return new Oi(ii.comparator)}const ua={asc:"ASCENDING",desc:"DESCENDING"},la={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},da={and:"AND",or:"OR"};class fa{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function pa(e,t){return e.useProto3Json||Ti(t)?t:{value:t}}function ga(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ma(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function ya(e){return xr(!!e),Zr.fromTimestamp(function(e){const t=Bi(e);return new Yr(t.seconds,t.nanos)}(e))}function va(e,t){return wa(e,t).canonicalString()}function wa(e,t){const n=function(e){return new ti(["projects",e.projectId,"databases",e.database])}(e).child("documents");return void 0===t?n:n.child(t)}function _a(e){const t=ti.fromString(e);return xr(Ma(t)),t}function Ea(e,t){const n=_a(t);if(n.get(1)!==e.databaseId.projectId)throw new Fr(Ur.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Fr(Ur.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new ii(Sa(n))}function ba(e,t){return va(e.databaseId,t)}function Ia(e){const t=_a(e);return 4===t.length?ti.emptyPath():Sa(t)}function Ta(e){return new ti(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Sa(e){return xr(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Ca(e,t){return{documents:[ba(e,t.path)]}}function Aa(e,t){const n={structuredQuery:{}},r=t.path;let i;null!==t.collectionGroup?(i=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=ba(e,i);const s=function(e){if(0!==e.length)return xa(ws.create(e,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const o=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:Pa(e.field),direction:Da(e.dir)}}(e)))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const a=pa(e,t.limit);return null!==a&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt=function(e){return{before:e.inclusive,values:e.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),{ut:n,parent:i}}function ka(e){let t=Ia(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){xr(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=Na(e);return t instanceof ws&&Es(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=function(e){return e.map((e=>function(e){return new gs(La(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e)))}(n.orderBy));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Ti(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new ds(n,t)}(n.startAt));let h=null;return n.endAt&&(h=function(e){const t=!e.before,n=e.values||[];return new ds(n,t)}(n.endAt)),js(t,i,o,s,a,"F",c,h)}function Na(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=La(e.unaryFilter.field);return vs.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=La(e.unaryFilter.field);return vs.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=La(e.unaryFilter.field);return vs.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=La(e.unaryFilter.field);return vs.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Lr()}}(e):void 0!==e.fieldFilter?function(e){return vs.create(La(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Lr()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return ws.create(e.compositeFilter.filters.map((e=>Na(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return Lr()}}(e.compositeFilter.op))}(e):Lr()}function Da(e){return ua[e]}function Ra(e){return la[e]}function Oa(e){return da[e]}function Pa(e){return{fieldPath:e.canonicalString()}}function La(e){return ri.fromServerFormat(e.fieldPath)}function xa(e){return e instanceof vs?function(e){if("=="===e.op){if(os(e.value))return{unaryFilter:{field:Pa(e.field),op:"IS_NAN"}};if(ss(e.value))return{unaryFilter:{field:Pa(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(os(e.value))return{unaryFilter:{field:Pa(e.field),op:"IS_NOT_NAN"}};if(ss(e.value))return{unaryFilter:{field:Pa(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Pa(e.field),op:Ra(e.op),value:e.value}}}(e):e instanceof ws?function(e){const t=e.getFilters().map((e=>xa(e)));return 1===t.length?t[0]:{compositeFilter:{op:Oa(e.op),filters:t}}}(e):Lr()}function Ma(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,t,n,r,i=Zr.min(),s=Zr.min(),o=Vi.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new Ua(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ua(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ua(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ua(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e){this.ct=e}}function Va(e){const t=ka({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Gs(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ja{constructor(){}Pt(e,t){this.It(e,t),t.Tt()}It(e,t){if("nullValue"in e)this.Et(t,5);else if("booleanValue"in e)this.Et(t,10),t.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(t,15),t.dt(qi(e.integerValue));else if("doubleValue"in e){const n=qi(e.doubleValue);isNaN(n)?this.Et(t,13):(this.Et(t,15),Si(n)?t.dt(0):t.dt(n))}else if("timestampValue"in e){const n=e.timestampValue;this.Et(t,20),"string"==typeof n?t.At(n):(t.At(`${n.seconds||""}`),t.dt(n.nanos||0))}else if("stringValue"in e)this.Rt(e.stringValue,t),this.Vt(t);else if("bytesValue"in e)this.Et(t,30),t.ft($i(e.bytesValue)),this.Vt(t);else if("referenceValue"in e)this.gt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.Et(t,45),t.dt(n.latitude||0),t.dt(n.longitude||0)}else"mapValue"in e?hs(e)?this.Et(t,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,t),this.Vt(t)):"arrayValue"in e?(this.wt(e.arrayValue,t),this.Vt(t)):Lr()}Rt(e,t){this.Et(t,25),this.St(e,t)}St(e,t){t.At(e)}yt(e,t){const n=e.fields||{};this.Et(t,55);for(const e of Object.keys(n))this.Rt(e,t),this.It(n[e],t)}wt(e,t){const n=e.values||[];this.Et(t,50);for(const e of n)this.It(e,t)}gt(e,t){this.Et(t,37),ii.fromName(e).path.forEach((e=>{this.Et(t,60),this.St(e,t)}))}Et(e,t){e.dt(t)}Vt(e){e.dt(2)}}ja.bt=new ja;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ba{constructor(){this._n=new qa}addToCollectionParentIndex(e,t){return this._n.add(t),fi.resolve()}getCollectionParents(e,t){return fi.resolve(this._n.getEntries(t))}addFieldIndex(e,t){return fi.resolve()}deleteFieldIndex(e,t){return fi.resolve()}deleteAllFieldIndexes(e){return fi.resolve()}createTargetIndexes(e,t){return fi.resolve()}getDocumentsMatchingTarget(e,t){return fi.resolve(null)}getIndexType(e,t){return fi.resolve(0)}getFieldIndexes(e,t){return fi.resolve([])}getNextCollectionGroupToUpdate(e){return fi.resolve(null)}getMinOffset(e,t){return fi.resolve(ci.min())}getMinOffsetFromCollectionGroup(e,t){return fi.resolve(ci.min())}updateCollectionGroup(e,t,n){return fi.resolve()}updateIndexEntries(e,t){return fi.resolve()}}class qa{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new xi(ti.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new xi(ti.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class $a{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new $a(e,$a.DEFAULT_COLLECTION_PERCENTILE,$a.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$a.DEFAULT_COLLECTION_PERCENTILE=10,$a.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,$a.DEFAULT=new $a(41943040,$a.DEFAULT_COLLECTION_PERCENTILE,$a.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),$a.DISABLED=new $a(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class za{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new za(0)}static Ln(){return new za(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ka{constructor(){this.changes=new to((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ls.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?fi.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ha{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&Lo(n.mutation,e,Ui.empty(),Yr.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,lo()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=lo()){const r=ao();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=so();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=ao();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,lo())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=ro();const s=ho(),o=ho();return t.forEach(((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof Uo)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),Lo(o.mutation,t,o.mutation.getFieldMask(),Yr.now())):s.set(t.key,Ui.empty())})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new Ha(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=ho();let r=new Oi(((e,t)=>e-t)),i=lo();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||Ui.empty();o=i.applyToLocalView(s,o),n.set(e,o);const a=(r.get(i.batchId)||lo()).add(e);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,h=co();c.forEach((e=>{if(!i.has(e)){const r=Oo(t.get(e),n.get(e));null!==r&&h.set(e,r),i=i.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,a,h))}return fi.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n,r){return function(e){return ii.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):$s(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):fi.resolve(ao());let o=-1,a=i;return s.next((t=>fi.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?fi.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,a,t,lo()))).next((e=>({batchId:o,changes:oo(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ii(t)).next((e=>{let t=so();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const i=t.collectionGroup;let s=so();return this.indexManager.getCollectionParents(e,i).next((o=>fi.forEach(o,(o=>{const a=function(e,t){return new Vs(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,o.child(i));return this.getDocumentsMatchingCollectionQuery(e,a,n,r).next((e=>{e.forEach(((e,t)=>{s=s.insert(e,t)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r)))).next((e=>{i.forEach(((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,ls.newInvalidDocument(r)))}));let n=so();return e.forEach(((e,r)=>{const s=i.get(e);void 0!==s&&Lo(s.mutation,r,Ui.empty(),Yr.now()),Xs(t,r)&&(n=n.insert(e,r))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,t){return fi.resolve(this.cr.get(t))}saveBundleMetadata(e,t){return this.cr.set(t.id,function(e){return{id:e.id,version:e.version,createTime:ya(e.createTime)}}(t)),fi.resolve()}getNamedQuery(e,t){return fi.resolve(this.lr.get(t))}saveNamedQuery(e,t){return this.lr.set(t.name,function(e){return{name:e.name,query:Va(e.bundledQuery),readTime:ya(e.readTime)}}(t)),fi.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(){this.overlays=new Oi(ii.comparator),this.hr=new Map}getOverlay(e,t){return fi.resolve(this.overlays.get(t))}getOverlays(e,t){const n=ao();return fi.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.ht(e,t,r)})),fi.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.hr.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.hr.delete(n)),fi.resolve()}getOverlaysForCollection(e,t,n){const r=ao(),i=t.length+1,s=new ii(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return fi.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new Oi(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=ao(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=ao(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((e,t)=>o.set(e,t))),!(o.size()>=r)););return fi.resolve(o)}ht(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.hr.get(r.largestBatchId).delete(n.key);this.hr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new $o(t,n));let i=this.hr.get(t);void 0===i&&(i=lo(),this.hr.set(t,i)),this.hr.set(t,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(){this.Pr=new xi(Xa.Ir),this.Tr=new xi(Xa.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,t){const n=new Xa(e,t);this.Pr=this.Pr.add(n),this.Tr=this.Tr.add(n)}dr(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.Ar(new Xa(e,t))}Rr(e,t){e.forEach((e=>this.removeReference(e,t)))}Vr(e){const t=new ii(new ti([])),n=new Xa(t,e),r=new Xa(t,e+1),i=[];return this.Tr.forEachInRange([n,r],(e=>{this.Ar(e),i.push(e.key)})),i}mr(){this.Pr.forEach((e=>this.Ar(e)))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const t=new ii(new ti([])),n=new Xa(t,e),r=new Xa(t,e+1);let i=lo();return this.Tr.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new Xa(e,0),n=this.Pr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Xa{constructor(e,t){this.key=e,this.pr=t}static Ir(e,t){return ii.comparator(e.key,t.key)||Jr(e.pr,t.pr)}static Er(e,t){return Jr(e.pr,t.pr)||ii.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.yr=1,this.wr=new xi(Xa.Ir)}checkEmpty(e){return fi.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new qo(i,t,n,r);this.mutationQueue.push(s);for(const t of r)this.wr=this.wr.add(new Xa(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return fi.resolve(s)}lookupMutationBatch(e,t){return fi.resolve(this.Sr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.br(n),i=r<0?0:r;return fi.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return fi.resolve(0===this.mutationQueue.length?-1:this.yr-1)}getAllMutationBatches(e){return fi.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Xa(t,0),r=new Xa(t,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([n,r],(e=>{const t=this.Sr(e.pr);i.push(t)})),fi.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new xi(Jr);return t.forEach((e=>{const t=new Xa(e,0),r=new Xa(e,Number.POSITIVE_INFINITY);this.wr.forEachInRange([t,r],(e=>{n=n.add(e.pr)}))})),fi.resolve(this.Dr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;ii.isDocumentKey(i)||(i=i.child(""));const s=new Xa(new ii(i),0);let o=new xi(Jr);return this.wr.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.pr)),!0)}),s),fi.resolve(this.Dr(o))}Dr(e){const t=[];return e.forEach((e=>{const n=this.Sr(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){xr(0===this.Cr(t.batchId,"removed")),this.mutationQueue.shift();let n=this.wr;return fi.forEach(t.mutations,(r=>{const i=new Xa(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.wr=n}))}Mn(e){}containsKey(e,t){const n=new Xa(t,0),r=this.wr.firstAfterOrEqual(n);return fi.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,fi.resolve()}Cr(e,t){return this.br(e)}br(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Sr(e){const t=this.br(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e){this.vr=e,this.docs=new Oi(ii.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.vr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return fi.resolve(n?n.document.mutableCopy():ls.newInvalidDocument(t))}getEntries(e,t){let n=ro();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():ls.newInvalidDocument(e))})),fi.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=ro();const s=t.path,o=new ii(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||hi(ai(o),n)<=0||(r.has(o.key)||Xs(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return fi.resolve(i)}getAllFromCollectionGroup(e,t,n,r){Lr()}Fr(e,t){return fi.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new ec(this)}getSize(e){return fi.resolve(this.size)}}class ec extends Ka{constructor(e){super(),this.ar=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.ar.addEntry(e,r)):this.ar.removeEntry(n)})),fi.waitFor(t)}getFromCache(e,t){return this.ar.getEntry(e,t)}getAllFromCache(e,t){return this.ar.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e){this.persistence=e,this.Mr=new to((e=>Ms(e)),Us),this.lastRemoteSnapshotVersion=Zr.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Ja,this.targetCount=0,this.Lr=za.Nn()}forEachTarget(e,t){return this.Mr.forEach(((e,n)=>t(n))),fi.resolve()}getLastRemoteSnapshotVersion(e){return fi.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return fi.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),fi.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Or&&(this.Or=t),fi.resolve()}qn(e){this.Mr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Lr=new za(t),this.highestTargetId=t),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,t){return this.qn(t),this.targetCount+=1,fi.resolve()}updateTargetData(e,t){return this.qn(t),fi.resolve()}removeTargetData(e,t){return this.Mr.delete(t.target),this.Nr.Vr(t.targetId),this.targetCount-=1,fi.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Mr.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Mr.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),fi.waitFor(i).next((()=>r))}getTargetCount(e){return fi.resolve(this.targetCount)}getTargetData(e,t){const n=this.Mr.get(t)||null;return fi.resolve(n)}addMatchingKeys(e,t,n){return this.Nr.dr(t,n),fi.resolve()}removeMatchingKeys(e,t,n){this.Nr.Rr(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),fi.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Nr.Vr(t),fi.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Nr.gr(t);return fi.resolve(n)}containsKey(e,t){return fi.resolve(this.Nr.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e,t){this.Br={},this.overlays={},this.kr=new Ii(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new tc(this),this.indexManager=new Ba,this.remoteDocumentCache=function(e){return new Za(e)}((e=>this.referenceDelegate.Kr(e))),this.serializer=new Fa(t),this.$r=new Wa(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Qa,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Br[e.toKey()];return n||(n=new Ya(t,this.referenceDelegate),this.Br[e.toKey()]=n),n}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,t,n){Dr("MemoryPersistence","Starting transaction:",e);const r=new rc(this.kr.next());return this.referenceDelegate.Ur(),n(r).next((e=>this.referenceDelegate.Wr(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Gr(e,t){return fi.or(Object.values(this.Br).map((n=>()=>n.containsKey(e,t))))}}class rc extends li{constructor(e){super(),this.currentSequenceNumber=e}}class ic{constructor(e){this.persistence=e,this.zr=new Ja,this.jr=null}static Hr(e){return new ic(e)}get Jr(){if(this.jr)return this.jr;throw Lr()}addReference(e,t,n){return this.zr.addReference(n,t),this.Jr.delete(n.toString()),fi.resolve()}removeReference(e,t,n){return this.zr.removeReference(n,t),this.Jr.add(n.toString()),fi.resolve()}markPotentiallyOrphaned(e,t){return this.Jr.add(t.toString()),fi.resolve()}removeTarget(e,t){this.zr.Vr(t.targetId).forEach((e=>this.Jr.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Jr.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Ur(){this.jr=new Set}Wr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return fi.forEach(this.Jr,(n=>{const r=ii.fromPath(n);return this.Yr(e,r).next((e=>{e||t.removeEntry(r,Zr.min())}))})).next((()=>(this.jr=null,t.apply(e))))}updateLimboDocument(e,t){return this.Yr(e,t).next((e=>{e?this.Jr.delete(t.toString()):this.Jr.add(t.toString())}))}Kr(e){return 0}Yr(e,t){return fi.or([()=>fi.resolve(this.zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gr(e,t)])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sc{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.qi=n,this.Qi=r}static Ki(e,t){let n=lo(),r=lo();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new sc(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=(0,s.nr)()?8:gi.v((0,s.ZQ)())>0?6:4}initialize(e,t){this.zi=e,this.indexManager=t,this.$i=!0}getDocumentsMatchingQuery(e,t,n,r){const i={result:null};return this.ji(e,t).next((e=>{i.result=e})).next((()=>{if(!i.result)return this.Hi(e,t,r,n).next((e=>{i.result=e}))})).next((()=>{if(i.result)return;const n=new oc;return this.Ji(e,t,n).next((r=>{if(i.result=r,this.Ui)return this.Yi(e,t,n,r.size)}))})).next((()=>i.result))}Yi(e,t,n,r){return n.documentReadCount<this.Wi?(Nr()<=i.$b.DEBUG&&Dr("QueryEngine","SDK will not create cache indexes for query:",Js(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),fi.resolve()):(Nr()<=i.$b.DEBUG&&Dr("QueryEngine","Query:",Js(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Gi*r?(Nr()<=i.$b.DEBUG&&Dr("QueryEngine","The SDK decides to create cache indexes for query:",Js(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ks(t))):fi.resolve())}ji(e,t){if(qs(t))return fi.resolve(null);let n=Ks(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=Gs(t,null,"F"),n=Ks(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=lo(...r);return this.zi.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.Zi(t,r);return this.Xi(t,s,i,n.readTime)?this.ji(e,Gs(t,null,"F")):this.es(e,s,t,n)}))))})))))}Hi(e,t,n,r){return qs(t)||r.isEqual(Zr.min())?fi.resolve(null):this.zi.getDocuments(e,n).next((s=>{const o=this.Zi(t,s);return this.Xi(t,o,n,r)?fi.resolve(null):(Nr()<=i.$b.DEBUG&&Dr("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Js(t)),this.es(e,o,t,oi(r,-1)).next((e=>e)))}))}Zi(e,t){let n=new xi(Zs(e));return t.forEach(((t,r)=>{Xs(e,r)&&(n=n.add(r))})),n}Xi(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ji(e,t,n){return Nr()<=i.$b.DEBUG&&Dr("QueryEngine","Using full collection scan to execute query:",Js(t)),this.zi.getDocumentsMatchingQuery(e,t,ci.min(),n)}es(e,t,n,r){return this.zi.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e,t,n,r){this.persistence=e,this.ts=t,this.serializer=r,this.ns=new Oi(Jr),this.rs=new to((e=>Ms(e)),Us),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(n)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ga(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.ns)))}}function hc(e,t,n,r){return new cc(e,t,n,r)}async function uc(e,t){const n=Mr(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n._s(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let o=lo();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({us:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function lc(e){const t=Mr(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Qr.getLastRemoteSnapshotVersion(e)))}function dc(e,t,n){let r=lo(),i=lo();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=ro();return n.forEach(((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(Zr.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):Dr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{cs:r,ls:i}}))}function fc(e,t){const n=Mr(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Qr.getTargetData(e,t).next((i=>i?(r=i,fi.resolve(r)):n.Qr.allocateTargetId(e).next((i=>(r=new Ua(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.Qr.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.ns.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.ns=n.ns.insert(e.targetId,e),n.rs.set(t,e.targetId)),e}))}async function pc(e,t,n){const r=Mr(e),i=r.ns.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!vi(e))throw e;Dr("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.ns=r.ns.remove(t),r.rs.delete(i.target)}function gc(e,t,n){const r=Mr(e);let i=Zr.min(),s=lo();return r.persistence.runTransaction("Execute query","readwrite",(e=>function(e,t,n){const r=Mr(e),i=r.rs.get(n);return void 0!==i?fi.resolve(r.ns.get(i)):r.Qr.getTargetData(t,n)}(r,e,Ks(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.ts.getDocumentsMatchingQuery(e,t,n?i:Zr.min(),n?s:lo()))).next((e=>(mc(r,Ys(t),e),{documents:e,hs:s})))))}function mc(e,t,n){let r=e.ss.get(t)||Zr.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.ss.set(t,r)}class yc{constructor(){this.activeTargetIds=po()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class vc{constructor(){this.no=new yc,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,t,n){this.ro[e]=t}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new yc,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{io(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){Dr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){Dr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ec=null;function bc(){return null===Ec?Ec=268435456+Math.round(2147483648*Math.random()):Ec++,"0x"+Ec.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Ic={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc="WebChannelConnection";class Cc extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.fo=t+"://"+e.host,this.po=`projects/${n}/databases/${r}`,this.yo="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get wo(){return!1}So(e,t,n,r,i){const s=bc(),o=this.bo(e,t.toUriEncodedString());Dr("RestConnection",`Sending RPC '${e}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(a,r,i),this.Co(e,o,a,n).then((t=>(Dr("RestConnection",`Received RPC '${e}' ${s}: `,t),t)),(t=>{throw Or("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",n),t}))}vo(e,t,n,r,i,s){return this.So(e,t,n,r,i)}Do(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ar,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}bo(e,t){const n=Ic[e];return`${this.fo}/v1/${t}:${n}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,t,n,r){const i=bc();return new Promise(((s,o)=>{const a=new br;a.setWithCredentials(!0),a.listenOnce(vr.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case yr.NO_ERROR:const t=a.getResponseJson();Dr(Sc,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case yr.TIMEOUT:Dr(Sc,`RPC '${e}' ${i} timed out`),o(new Fr(Ur.DEADLINE_EXCEEDED,"Request time out"));break;case yr.HTTP_ERROR:const n=a.getStatus();if(Dr(Sc,`RPC '${e}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Ur).indexOf(t)>=0?t:Ur.UNKNOWN}(t.status);o(new Fr(e,t.message))}else o(new Fr(Ur.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new Fr(Ur.UNAVAILABLE,"Connection failed."));break;default:Lr()}}finally{Dr(Sc,`RPC '${e}' ${i} completed.`)}}));const c=JSON.stringify(r);Dr(Sc,`RPC '${e}' ${i} sending request:`,r),a.send(t,"POST",c,n,15)}))}Fo(e,t,n){const r=bc(),i=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=gr(),o=mr(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Do(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const h=i.join("");Dr(Sc,`Creating RPC '${e}' stream ${r}: ${h}`,a);const u=s.createWebChannel(h,a);let l=!1,d=!1;const f=new Tc({lo:t=>{d?Dr(Sc,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(l||(Dr(Sc,`Opening RPC '${e}' stream ${r} transport.`),u.open(),l=!0),Dr(Sc,`RPC '${e}' stream ${r} sending:`,t),u.send(t))},ho:()=>u.close()}),p=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return p(u,Er.EventType.OPEN,(()=>{d||Dr(Sc,`RPC '${e}' stream ${r} transport opened.`)})),p(u,Er.EventType.CLOSE,(()=>{d||(d=!0,Dr(Sc,`RPC '${e}' stream ${r} transport closed`),f.Vo())})),p(u,Er.EventType.ERROR,(t=>{d||(d=!0,Or(Sc,`RPC '${e}' stream ${r} transport errored:`,t),f.Vo(new Fr(Ur.UNAVAILABLE,"The operation could not be completed")))})),p(u,Er.EventType.MESSAGE,(t=>{var n;if(!d){const i=t.data[0];xr(!!i);const s=i,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){Dr(Sc,`RPC '${e}' stream ${r} received error:`,o);const t=o.status;let n=function(e){const t=Ko[e];if(void 0!==t)return Go(t)}(t),i=o.message;void 0===n&&(n=Ur.INTERNAL,i="Unknown error status: "+t+" with message "+o.message),d=!0,f.Vo(new Fr(n,i)),u.close()}else Dr(Sc,`RPC '${e}' stream ${r} received:`,i),f.mo(i)}})),p(o,wr.STAT_EVENT,(t=>{t.stat===_r.PROXY?Dr(Sc,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===_r.NOPROXY&&Dr(Sc,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{f.Ro()}),0),f}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kc(e){return new fa(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e,t,n=1e3,r=1.5,i=6e4){this.oi=e,this.timerId=t,this.Mo=n,this.xo=r,this.Oo=i,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const t=Math.floor(this.No+this.Qo()),n=Math.max(0,Date.now()-this.Bo),r=Math.max(0,t-n);r>0&&Dr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.No} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,r,(()=>(this.Bo=Date.now(),e()))),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){null!==this.Lo&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){null!==this.Lo&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e,t,n,r,i,s,o,a){this.oi=e,this.$o=n,this.Uo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new Nc(e,t)}Ho(){return 1===this.state||5===this.state||this.Jo()}Jo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&null===this.Go&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,(()=>this.e_())))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,t){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,4!==e?this.jo.reset():t&&t.code===Ur.RESOURCE_EXHAUSTED?(Rr(t.toString()),Rr("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):t&&t.code===Ur.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(t)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),t=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Wo===t&&this.o_(e,n)}),(t=>{e((()=>{const e=new Fr(Ur.UNKNOWN,"Fetching auth token failed: "+t.message);return this.__(e)}))}))}o_(e,t){const n=this.s_(this.Wo);this.stream=this.a_(e,t),this.stream.Po((()=>{n((()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,(()=>(this.Jo()&&(this.state=3),Promise.resolve()))),this.listener.Po())))})),this.stream.To((e=>{n((()=>this.__(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Yo(){this.state=5,this.jo.qo((async()=>{this.state=0,this.start()}))}__(e){return Dr("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return t=>{this.oi.enqueueAndForget((()=>this.Wo===e?t():(Dr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Rc extends Dc{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}a_(e,t){return this.connection.Fo("Listen",e,t)}onMessage(e){this.jo.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:Lr()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.useProto3Json?(xr(void 0===t||"string"==typeof t),Vi.fromBase64String(t||"")):(xr(void 0===t||t instanceof Uint8Array),Vi.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?Ur.UNKNOWN:Go(e.code);return new Fr(t,e.message||"")}(o);n=new sa(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ea(e,r.document.name),s=ya(r.document.updateTime),o=r.document.createTime?ya(r.document.createTime):Zr.min(),a=new us({mapValue:{fields:r.document.fields}}),c=ls.newFoundDocument(i,s,o,a),h=r.targetIds||[],u=r.removedTargetIds||[];n=new ra(h,u,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Ea(e,r.document),s=r.readTime?ya(r.readTime):Zr.min(),o=ls.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ra([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Ea(e,r.document),s=r.removedTargetIds||[];n=new ra([],s,i,null)}else{if(!("filter"in t))return Lr();{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:i}=e,s=new zo(r,i),o=e.targetId;n=new ia(o,s)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return Zr.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?Zr.min():t.readTime?ya(t.readTime):Zr.min()}(e);return this.listener.u_(t,n)}c_(e){const t={};t.database=Ta(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=Fs(r)?{documents:Ca(e,r)}:{query:Aa(e,r).ut},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=ma(e,t.resumeToken);const r=pa(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(Zr.min())>0){n.readTime=ga(e,t.snapshotVersion.toTimestamp());const r=pa(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=function(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Lr()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.t_(t)}l_(e){const t={};t.database=Ta(this.serializer),t.removeTarget=e,this.t_(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oc extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.A_=!1}R_(){if(this.A_)throw new Fr(Ur.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,n,r){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.So(e,wa(t,n),r,i,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Ur.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Fr(Ur.UNKNOWN,e.toString())}))}vo(e,t,n,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,o])=>this.connection.vo(e,wa(t,n),r,s,o,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Ur.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Fr(Ur.UNKNOWN,e.toString())}))}terminate(){this.A_=!0,this.connection.terminate()}}class Pc{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){0===this.m_&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve()))))}S_(e){"Online"===this.state?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,"Online"===e&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(Rr(t),this.g_=!1):Dr("OnlineStateTracker",t)}b_(){null!==this.f_&&(this.f_.cancel(),this.f_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io((e=>{n.enqueueAndForget((async()=>{$c(this)&&(Dr("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=Mr(e);t.v_.add(4),await Mc(t),t.x_.set("Unknown"),t.v_.delete(4),await xc(t)}(this))}))})),this.x_=new Pc(n,r)}}async function xc(e){if($c(e))for(const t of e.F_)await t(!0)}async function Mc(e){for(const t of e.F_)await t(!1)}function Uc(e,t){const n=Mr(e);n.C_.has(t.targetId)||(n.C_.set(t.targetId,t),qc(n)?Bc(n):Xc(n).Jo()&&Vc(n,t))}function Fc(e,t){const n=Mr(e),r=Xc(n);n.C_.delete(t),r.Jo()&&jc(n,t),0===n.C_.size&&(r.Jo()?r.Xo():$c(n)&&n.x_.set("Unknown"))}function Vc(e,t){if(e.O_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Zr.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Xc(e).c_(t)}function jc(e,t){e.O_.Oe(t),Xc(e).l_(t)}function Bc(e){e.O_=new aa({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.C_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),Xc(e).start(),e.x_.p_()}function qc(e){return $c(e)&&!Xc(e).Ho()&&e.C_.size>0}function $c(e){return 0===Mr(e).v_.size}function zc(e){e.O_=void 0}async function Kc(e){e.C_.forEach(((t,n)=>{Vc(e,t)}))}async function Hc(e,t){zc(e),qc(e)?(e.x_.S_(t),Bc(e)):e.x_.set("Unknown")}async function Gc(e,t,n){if(e.x_.set("Online"),t instanceof sa&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.C_.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.C_.delete(r),e.O_.removeTarget(r))}(e,t)}catch(n){Dr("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Wc(e,n)}else if(t instanceof ra?e.O_.$e(t):t instanceof ia?e.O_.Je(t):e.O_.Ge(t),!n.isEqual(Zr.min()))try{const t=await lc(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.O_.it(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.C_.get(r);i&&e.C_.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const r=e.C_.get(t);if(!r)return;e.C_.set(t,r.withResumeToken(Vi.EMPTY_BYTE_STRING,r.snapshotVersion)),jc(e,t);const i=new Ua(r.target,t,n,r.sequenceNumber);Vc(e,i)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Dr("RemoteStore","Failed to raise snapshot:",t),await Wc(e,t)}}async function Wc(e,t,n){if(!vi(t))throw t;e.v_.add(1),await Mc(e),e.x_.set("Offline"),n||(n=()=>lc(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Dr("RemoteStore","Retrying IndexedDB access"),await n(),e.v_.delete(1),await xc(e)}))}async function Qc(e,t){const n=Mr(e);n.asyncQueue.verifyOperationInProgress(),Dr("RemoteStore","RemoteStore received new credentials");const r=$c(n);n.v_.add(3),await Mc(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.v_.delete(3),await xc(n)}async function Jc(e,t){const n=Mr(e);t?(n.v_.delete(2),await xc(n)):t||(n.v_.add(2),await Mc(n),n.x_.set("Unknown"))}function Xc(e){return e.N_||(e.N_=function(e,t,n){const r=Mr(e);return r.R_(),new Rc(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{Po:Kc.bind(null,e),To:Hc.bind(null,e),u_:Gc.bind(null,e)}),e.F_.push((async t=>{t?(e.N_.Zo(),qc(e)?Bc(e):e.x_.set("Unknown")):(await e.N_.stop(),zc(e))}))),e.N_}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yc{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Vr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new Yc(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Fr(Ur.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zc(e,t){if(Rr("AsyncQueue",`${t}: ${e}`),vi(e))return new Fr(Ur.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e){this.comparator=e?(t,n)=>e(t,n)||ii.comparator(t.key,n.key):(e,t)=>ii.comparator(e.key,t.key),this.keyedMap=so(),this.sortedSet=new Oi(this.comparator)}static emptySet(e){return new eh(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof eh))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new eh;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(){this.B_=new Oi(ii.comparator)}track(e){const t=e.doc.key,n=this.B_.get(t);n?0!==e.type&&3===n.type?this.B_=this.B_.insert(t,e):3===e.type&&1!==n.type?this.B_=this.B_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.B_=this.B_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.B_=this.B_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.B_=this.B_.remove(t):1===e.type&&2===n.type?this.B_=this.B_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.B_=this.B_.insert(t,{type:2,doc:e.doc}):Lr():this.B_=this.B_.insert(t,e)}k_(){const e=[];return this.B_.inorderTraversal(((t,n)=>{e.push(n)})),e}}class nh{constructor(e,t,n,r,i,s,o,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,r,i){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new nh(e,t,eh.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ws(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(){this.q_=void 0,this.Q_=[]}K_(){return this.Q_.some((e=>e.U_()))}}class ih{constructor(){this.queries=new to((e=>Qs(e)),Ws),this.onlineState="Unknown",this.W_=new Set}}async function sh(e,t){const n=Mr(e);let r=3;const i=t.query;let s=n.queries.get(i);s?!s.K_()&&t.U_()&&(r=2):(s=new rh,r=t.U_()?0:1);try{switch(r){case 0:s.q_=await n.onListen(i,!0);break;case 1:s.q_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(e){const n=Zc(e,`Initialization of query '${Js(t.query)}' failed`);return void t.onError(n)}n.queries.set(i,s),s.Q_.push(t),t.G_(n.onlineState),s.q_&&t.z_(s.q_)&&hh(n)}async function oh(e,t){const n=Mr(e),r=t.query;let i=3;const s=n.queries.get(r);if(s){const e=s.Q_.indexOf(t);e>=0&&(s.Q_.splice(e,1),0===s.Q_.length?i=t.U_()?0:1:!s.K_()&&t.U_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function ah(e,t){const n=Mr(e);let r=!1;for(const e of t){const t=e.query,i=n.queries.get(t);if(i){for(const t of i.Q_)t.z_(e)&&(r=!0);i.q_=e}}r&&hh(n)}function ch(e,t,n){const r=Mr(e),i=r.queries.get(t);if(i)for(const e of i.Q_)e.onError(n);r.queries.delete(t)}function hh(e){e.W_.forEach((e=>{e.next()}))}var uh,lh;(lh=uh||(uh={})).j_="default",lh.Cache="cache";class dh{constructor(e,t,n){this.query=e,this.H_=t,this.J_=!1,this.Y_=null,this.onlineState="Unknown",this.options=n||{}}z_(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new nh(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.J_?this.Z_(e)&&(this.H_.next(e),t=!0):this.X_(e,this.onlineState)&&(this.ea(e),t=!0),this.Y_=e,t}onError(e){this.H_.error(e)}G_(e){this.onlineState=e;let t=!1;return this.Y_&&!this.J_&&this.X_(this.Y_,e)&&(this.ea(this.Y_),t=!0),t}X_(e,t){if(!e.fromCache)return!0;if(!this.U_())return!0;const n="Offline"!==t;return(!this.options.ta||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Z_(e){if(e.docChanges.length>0)return!0;const t=this.Y_&&this.Y_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}ea(e){e=nh.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.J_=!0,this.H_.next(e)}U_(){return this.options.source!==uh.Cache}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fh{constructor(e){this.key=e}}class ph{constructor(e){this.key=e}}class gh{constructor(e,t){this.query=e,this.ua=t,this.ca=null,this.hasCachedResults=!1,this.current=!1,this.la=lo(),this.mutatedKeys=lo(),this.ha=Zs(e),this.Pa=new eh(this.ha)}get Ia(){return this.ua}Ta(e,t){const n=t?t.Ea:new th,r=t?t.Pa:this.Pa;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const h=r.get(e),u=Xs(this.query,t)?t:null,l=!!h&&this.mutatedKeys.has(h.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;h&&u?h.data.isEqual(u.data)?l!==d&&(n.track({type:3,doc:u}),f=!0):this.da(h,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.ha(u,a)>0||c&&this.ha(u,c)<0)&&(o=!0)):!h&&u?(n.track({type:0,doc:u}),f=!0):h&&!u&&(n.track({type:1,doc:h}),f=!0,(a||c)&&(o=!0)),f&&(u?(s=s.add(u),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Pa:s,Ea:n,Xi:o,mutatedKeys:i}}da(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){const i=this.Pa;this.Pa=e.Pa,this.mutatedKeys=e.mutatedKeys;const s=e.Ea.k_();s.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Lr()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.ha(e.doc,t.doc))),this.Aa(n),r=null!=r&&r;const o=t&&!r?this.Ra():[],a=0===this.la.size&&this.current&&!r?1:0,c=a!==this.ca;return this.ca=a,0!==s.length||c?{snapshot:new nh(this.query,e.Pa,i,s,e.mutatedKeys,0===a,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),Va:o}:{Va:o}}G_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Pa:this.Pa,Ea:new th,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Va:[]}}ma(e){return!this.ua.has(e)&&!!this.Pa.has(e)&&!this.Pa.get(e).hasLocalMutations}Aa(e){e&&(e.addedDocuments.forEach((e=>this.ua=this.ua.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.ua=this.ua.delete(e))),this.current=e.current)}Ra(){if(!this.current)return[];const e=this.la;this.la=lo(),this.Pa.forEach((e=>{this.ma(e.key)&&(this.la=this.la.add(e.key))}));const t=[];return e.forEach((e=>{this.la.has(e)||t.push(new ph(e))})),this.la.forEach((n=>{e.has(n)||t.push(new fh(n))})),t}fa(e){this.ua=e.hs,this.la=lo();const t=this.Ta(e.documents);return this.applyChanges(t,!0)}ga(){return nh.fromInitialDocuments(this.query,this.Pa,this.mutatedKeys,0===this.ca,this.hasCachedResults)}}class mh{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class yh{constructor(e){this.key=e,this.pa=!1}}class vh{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.ya={},this.wa=new to((e=>Qs(e)),Ws),this.Sa=new Map,this.ba=new Set,this.Da=new Oi(ii.comparator),this.Ca=new Map,this.va=new Ja,this.Fa={},this.Ma=new Map,this.xa=za.Ln(),this.onlineState="Unknown",this.Oa=void 0}get isPrimaryClient(){return!0===this.Oa}}async function wh(e,t,n=!0){const r=Mh(e);let i;const s=r.wa.get(t);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ga()):i=await Eh(r,t,n,!0),i}async function _h(e,t){const n=Mh(e);await Eh(n,t,!0,!1)}async function Eh(e,t,n,r){const i=await fc(e.localStore,Ks(t)),s=i.targetId,o=n?e.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await bh(e,t,s,"current"===o,i.resumeToken)),e.isPrimaryClient&&n&&Uc(e.remoteStore,i),a}async function bh(e,t,n,r,i){e.Na=(t,n,r)=>async function(e,t,n,r){let i=t.view.Ta(n);i.Xi&&(i=await gc(e.localStore,t.query,!1).then((({documents:e})=>t.view.Ta(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=r&&null!=r.targetMismatches.get(t.targetId),a=t.view.applyChanges(i,e.isPrimaryClient,s,o);return Dh(e,t.targetId,a.Va),a.snapshot}(e,t,n,r);const s=await gc(e.localStore,t,!0),o=new gh(t,s.hs),a=o.Ta(s.documents),c=na.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),h=o.applyChanges(a,e.isPrimaryClient,c);Dh(e,n,h.Va);const u=new mh(t,n,o);return e.wa.set(t,u),e.Sa.has(n)?e.Sa.get(n).push(t):e.Sa.set(n,[t]),h.snapshot}async function Ih(e,t,n){const r=Mr(e),i=r.wa.get(t),s=r.Sa.get(i.targetId);if(s.length>1)return r.Sa.set(i.targetId,s.filter((e=>!Ws(e,t)))),void r.wa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await pc(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Fc(r.remoteStore,i.targetId),kh(r,i.targetId)})).catch(di)):(kh(r,i.targetId),await pc(r.localStore,i.targetId,!0))}async function Th(e,t){const n=Mr(e),r=n.wa.get(t),i=n.Sa.get(r.targetId);n.isPrimaryClient&&1===i.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Fc(n.remoteStore,r.targetId))}async function Sh(e,t){const n=Mr(e);try{const e=await function(e,t){const n=Mr(e),r=t.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const o=[];t.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Qr.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.Qr.addMatchingKeys(e,s.addedDocuments,a))));let h=c.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(a)?h=h.withResumeToken(Vi.EMPTY_BYTE_STRING,Zr.min()).withLastLimboFreeSnapshotVersion(Zr.min()):s.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(s.resumeToken,r)),i=i.insert(a,h),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0}(c,h,s)&&o.push(n.Qr.updateTargetData(e,h))}));let a=ro(),c=lo();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(dc(e,s,t.documentUpdates).next((e=>{a=e.cs,c=e.ls}))),!r.isEqual(Zr.min())){const t=n.Qr.getLastRemoteSnapshotVersion(e).next((t=>n.Qr.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return fi.waitFor(o).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.ns=i,e)))}(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.Ca.get(t);r&&(xr(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.pa=!0:e.modifiedDocuments.size>0?xr(r.pa):e.removedDocuments.size>0&&(xr(r.pa),r.pa=!1))})),await Ph(n,e,t)}catch(e){await di(e)}}function Ch(e,t,n){const r=Mr(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.wa.forEach(((n,r)=>{const i=r.view.G_(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=Mr(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const e of n.Q_)e.G_(t)&&(r=!0)})),r&&hh(n)}(r.eventManager,t),e.length&&r.ya.u_(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Ah(e,t,n){const r=Mr(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Ca.get(t),s=i&&i.key;if(s){let e=new Oi(ii.comparator);e=e.insert(s,ls.newNoDocument(s,Zr.min()));const n=lo().add(s),i=new ta(Zr.min(),new Map,new Oi(Jr),e,n);await Sh(r,i),r.Da=r.Da.remove(s),r.Ca.delete(t),Oh(r)}else await pc(r.localStore,t,!1).then((()=>kh(r,t,n))).catch(di)}function kh(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Sa.get(t))e.wa.delete(r),n&&e.ya.La(r,n);e.Sa.delete(t),e.isPrimaryClient&&e.va.Vr(t).forEach((t=>{e.va.containsKey(t)||Nh(e,t)}))}function Nh(e,t){e.ba.delete(t.path.canonicalString());const n=e.Da.get(t);null!==n&&(Fc(e.remoteStore,n),e.Da=e.Da.remove(t),e.Ca.delete(n),Oh(e))}function Dh(e,t,n){for(const r of n)r instanceof fh?(e.va.addReference(r.key,t),Rh(e,r)):r instanceof ph?(Dr("SyncEngine","Document no longer in limbo: "+r.key),e.va.removeReference(r.key,t),e.va.containsKey(r.key)||Nh(e,r.key)):Lr()}function Rh(e,t){const n=t.key,r=n.path.canonicalString();e.Da.get(n)||e.ba.has(r)||(Dr("SyncEngine","New document in limbo: "+n),e.ba.add(r),Oh(e))}function Oh(e){for(;e.ba.size>0&&e.Da.size<e.maxConcurrentLimboResolutions;){const t=e.ba.values().next().value;e.ba.delete(t);const n=new ii(ti.fromString(t)),r=e.xa.next();e.Ca.set(r,new yh(n)),e.Da=e.Da.insert(n,r),Uc(e.remoteStore,new Ua(Ks(Bs(n.path)),r,"TargetPurposeLimboResolution",Ii._e))}}async function Ph(e,t,n){const r=Mr(e),i=[],s=[],o=[];r.wa.isEmpty()||(r.wa.forEach(((e,a)=>{o.push(r.Na(a,t,n).then((e=>{if((e||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){i.push(e);const t=sc.Ki(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.ya.u_(i),await async function(e,t){const n=Mr(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>fi.forEach(t,(t=>fi.forEach(t.qi,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>fi.forEach(t.Qi,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!vi(e))throw e;Dr("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.ns.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.ns=n.ns.insert(t,i)}}}(r.localStore,s))}async function Lh(e,t){const n=Mr(e);if(!n.currentUser.isEqual(t)){Dr("SyncEngine","User change. New user:",t.toKey());const e=await uc(n.localStore,t);n.currentUser=t,function(e,t){e.Ma.forEach((e=>{e.forEach((e=>{e.reject(new Fr(Ur.CANCELLED,t))}))})),e.Ma.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Ph(n,e.us)}}function xh(e,t){const n=Mr(e),r=n.Ca.get(t);if(r&&r.pa)return lo().add(r.key);{let e=lo();const r=n.Sa.get(t);if(!r)return e;for(const t of r){const r=n.wa.get(t);e=e.unionWith(r.view.Ia)}return e}}function Mh(e){const t=Mr(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Sh.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=xh.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Ah.bind(null,t),t.ya.u_=ah.bind(null,t.eventManager),t.ya.La=ch.bind(null,t.eventManager),t}class Uh{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=kc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return hc(this.persistence,new ac,e.initialUser,this.serializer)}createPersistence(e){return new nc(ic.Hr,this.serializer)}createSharedClientState(e){return new vc}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Fh{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Ch(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Lh.bind(null,this.syncEngine),await Jc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new ih}createDatastore(e){const t=kc(e.databaseInfo.databaseId),n=function(e){return new Cc(e)}(e.databaseInfo);return function(e,t,n,r){return new Oc(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(e,t,n,r,i){return new Lc(e,t,n,r,i)}(this.localStore,this.datastore,e.asyncQueue,(e=>Ch(this.syncEngine,e,0)),_c.D()?new _c:new wc)}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new vh(e,t,n,r,i,s);return o&&(a.Oa=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e;await async function(e){const t=Mr(e);Dr("RemoteStore","RemoteStore shutting down."),t.v_.add(5),await Mc(t),t.M_.shutdown(),t.x_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.qa(this.observer.next,e)}error(e){this.observer.error?this.qa(this.observer.error,e):Rr("Uncaught Error in snapshot listener:",e.toString())}Qa(){this.muted=!0}qa(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jh{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Cr.UNAUTHENTICATED,this.clientId=Qr.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Dr("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(Dr("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Fr(Ur.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Vr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Zc(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Bh(e,t){e.asyncQueue.verifyOperationInProgress(),Dr("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await uc(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function qh(e,t){e.asyncQueue.verifyOperationInProgress();const n=await zh(e);Dr("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener((e=>Qc(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>Qc(t.remoteStore,n))),e._onlineComponents=t}function $h(e){return"FirebaseError"===e.name?e.code===Ur.FAILED_PRECONDITION||e.code===Ur.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function zh(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){Dr("FirestoreClient","Using user provided OfflineComponentProvider");try{await Bh(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!$h(n))throw n;Or("Error using user provided cache. Falling back to memory cache: "+n),await Bh(e,new Uh)}}else Dr("FirestoreClient","Using default OfflineComponentProvider"),await Bh(e,new Uh);return e._offlineComponents}async function Kh(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(Dr("FirestoreClient","Using user provided OnlineComponentProvider"),await qh(e,e._uninitializedComponentsProvider._online)):(Dr("FirestoreClient","Using default OnlineComponentProvider"),await qh(e,new Fh))),e._onlineComponents}async function Hh(e){const t=await Kh(e),n=t.eventManager;return n.onListen=wh.bind(null,t.syncEngine),n.onUnlisten=Ih.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=_h.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=Th.bind(null,t.syncEngine),n}function Gh(e,t,n={}){const r=new Vr;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new Vh({next:s=>{t.enqueueAndForget((()=>oh(e,o)));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new Fr(Ur.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new Fr(Ur.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new dh(Bs(n.path),s,{includeMetadataChanges:!0,ta:!0});return sh(e,o)}(await Hh(e),e.asyncQueue,t,n,r))),r.promise}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Wh(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Qh=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jh(e,t,n){if(!n)throw new Fr(Ur.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Xh(e){if(!ii.isDocumentKey(e))throw new Fr(Ur.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Yh(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":Lr()}function Zh(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Fr(Ur.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Yh(e);throw new Fr(Ur.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class eu{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new Fr(Ur.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Fr(Ur.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new Fr(Ur.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Wh(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new Fr(Ur.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new Fr(Ur.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new Fr(Ur.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(e,t){return e.timeoutSeconds===t.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class tu{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new eu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Fr(Ur.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Fr(Ur.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new eu(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Br;switch(e.type){case"firstParty":return new Kr(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new Fr(Ur.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Qh.get(e);t&&(Dr("ComponentProvider","Removing Datastore"),Qh.delete(e),t.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nu{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new nu(this.firestore,e,this._query)}}class ru{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new iu(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ru(this.firestore,e,this._key)}}class iu extends nu{constructor(e,t,n){super(e,t,Bs(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ru(this.firestore,null,new ii(e))}withConverter(e){return new iu(this.firestore,e,this._path)}}function su(e,t,...n){if(e=(0,s.Ku)(e),1===arguments.length&&(t=Qr.newId()),Jh("doc","path",t),e instanceof tu){const r=ti.fromString(t,...n);return Xh(r),new ru(e,null,new ii(r))}{if(!(e instanceof ru||e instanceof iu))throw new Fr(Ur.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(ti.fromString(t,...n));return Xh(r),new ru(e.firestore,e instanceof iu?e.converter:null,new ii(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ou{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new Nc(this,"async_queue_retry"),this.cu=()=>{const e=Ac();e&&Dr("AsyncQueue","Visibility state changed to "+e.visibilityState),this.jo.Ko()};const e=Ac();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.lu(),this.hu(e)}enterRestrictedMode(e){if(!this.iu){this.iu=!0,this.au=e||!1;const t=Ac();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.cu)}}enqueue(e){if(this.lu(),this.iu)return new Promise((()=>{}));const t=new Vr;return this.hu((()=>this.iu&&this.au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.ru.push(e),this.Pu())))}async Pu(){if(0!==this.ru.length){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(e){if(!vi(e))throw e;Dr("AsyncQueue","Operation failed with retryable error: "+e)}this.ru.length>0&&this.jo.qo((()=>this.Pu()))}}hu(e){const t=this.nu.then((()=>(this._u=!0,e().catch((e=>{this.ou=e,this._u=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw Rr("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this._u=!1,e))))));return this.nu=t,t}enqueueAfterDelay(e,t,n){this.lu(),this.uu.indexOf(e)>-1&&(t=0);const r=Yc.createAndSchedule(this,e,t,n,(e=>this.Iu(e)));return this.su.push(r),r}lu(){this.ou&&Lr()}verifyOperationInProgress(){}async Tu(){let e;do{e=this.nu,await e}while(e!==this.nu)}Eu(e){for(const t of this.su)if(t.timerId===e)return!0;return!1}du(e){return this.Tu().then((()=>{this.su.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.su)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Tu()}))}Au(e){this.uu.push(e)}Iu(e){const t=this.su.indexOf(e);this.su.splice(t,1)}}class au extends tu{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new ou,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||hu(this),this._firestoreClient.terminate()}}function cu(e){return e._firestoreClient||hu(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function hu(e){var t,n,r;const i=e._freezeSettings(),s=function(e,t,n,r){return new Gi(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,Wh(r.experimentalLongPollingOptions),r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new jh(e._authCredentials,e._appCheckCredentials,e._queue,s),(null===(n=i.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class uu{constructor(e){this._byteString=e}static fromBase64String(e){try{return new uu(Vi.fromBase64String(e))}catch(e){throw new Fr(Ur.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new uu(Vi.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Fr(Ur.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ri(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class du{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Fr(Ur.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Fr(Ur.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Jr(this._lat,e._lat)||Jr(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fu=new RegExp("[~\\*/\\[\\]]");function pu(e,t,n){if(t.search(fu)>=0)throw gu(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new lu(...t.split("."))._internalPath}catch(r){throw gu(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function gu(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new Fr(Ur.INVALID_ARGUMENT,a+e+c)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mu{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ru(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new yu(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(vu("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class yu extends mu{data(){return super.data()}}function vu(e,t){return"string"==typeof t?pu(e,t):t instanceof lu?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{convertValue(e,t="none"){switch(Ji(e)){case 0:return null;case 1:return e.booleanValue;case 2:return qi(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes($i(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Lr()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Di(e,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new du(qi(e.latitude),qi(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Ki(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Hi(e));default:return null}}convertTimestamp(e){const t=Bi(e);return new Yr(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=ti.fromString(e);xr(Ma(n));const r=new Wi(n.get(1),n.get(3)),i=new ii(n.popFirst(5));return r.isEqual(t)||Rr(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _u{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Eu extends mu{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new bu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(vu("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class bu extends Eu{data(e={}){return super.data(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Iu(e){e=Zh(e,ru);const t=Zh(e.firestore,au);return Gh(cu(t),e._key).then((n=>Su(t,e,n)))}class Tu extends wu{constructor(e){super(),this.firestore=e}convertBytes(e){return new uu(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ru(this.firestore,null,t)}}function Su(e,t,n){const r=n.docs.get(t._key),i=new Tu(e);return new Eu(e,i,t._key,r,new _u(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new WeakMap;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,n=!0){!function(e){Ar=e}(t.MF),(0,t.om)(new r.uA("firestore",((e,{instanceIdentifier:t,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new au(new $r(e.getProvider("auth-internal")),new Gr(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Fr(Ur.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wi(e.options.projectId,t)}(i,t),i);return r=Object.assign({useFetchStreams:n},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),(0,t.KO)(Sr,"4.5.0",e),(0,t.KO)(Sr,"4.5.0","esm2017")}();function Cu(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;"function"==typeof SuppressedError&&SuppressedError;function Au(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ku=Au,Nu=new s.FA("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Du=new i.Vy("@firebase/auth");function Ru(e,...n){Du.logLevel<=i.$b.ERROR&&Du.error(`Auth (${t.MF}): ${e}`,...n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ou(e,...t){throw xu(e,...t)}function Pu(e,...t){return xu(e,...t)}function Lu(e,t,n){const r=Object.assign(Object.assign({},ku()),{[t]:n});return new s.FA("auth","Firebase",r).create(t,{appName:e.name})}function xu(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Nu.create(e,...t)}function Mu(e,t,...n){if(!e)throw xu(t,...n)}function Uu(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ru(t),new Error(t)}function Fu(e,t){e||Uu(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vu(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function ju(){return"http:"===Bu()||"https:"===Bu()}function Bu(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qu{constructor(e,t){this.shortDelay=e,this.longDelay=t,Fu(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,s.jZ)()||(0,s.lV)()}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(ju()||(0,s.sr)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u(e,t){Fu(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void Uu("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void Uu("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void Uu("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ku={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},Hu=new qu(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Wu(e,t,n,r,i={}){return Qu(e,i,(async()=>{let i={},o={};r&&("GET"===t?o=r:i={body:JSON.stringify(r)});const a=(0,s.Am)(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),zu.fetch()(Xu(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},i))}))}async function Qu(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ku),t);try{const t=new Zu(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw el(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw el(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw el(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw el(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw Lu(e,a,o);Ou(e,a)}}catch(t){if(t instanceof s.g)throw t;Ou(e,"network-request-failed",{message:String(t)})}}async function Ju(e,t,n,r,i={}){const s=await Wu(e,t,n,r,i);return"mfaPendingCredential"in s&&Ou(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Xu(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?$u(e.config,i):`${e.config.apiScheme}://${i}`}function Yu(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Zu{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Pu(this.auth,"network-request-failed"))),Hu.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function el(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Pu(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl(e){return void 0!==e&&void 0!==e.enterprise}class nl{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Yu(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rl(e,t){return Wu(e,"GET","/v2/recaptchaConfig",Gu(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function il(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sl(e){return 1e3*Number(e)}function ol(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return Ru("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,s.u)(n);return e?JSON.parse(e):(Ru("Failed to decode base64 JWT payload"),null)}catch(e){return Ru("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function al(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof s.g&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class cl{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=il(this.lastLoginAt),this.creationTime=il(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ul(e){var t;const n=e.auth,r=await e.getIdToken(),i=await al(e,async function(e,t){return Wu(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));Mu(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=Cu(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=e.providerData,h=o,[...c.filter((e=>!h.some((t=>t.providerId===e.providerId)))),...h]);var c,h;const u=e.isAnonymous,l=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!u&&l,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new hl(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ll{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Mu(e.idToken,"internal-error"),Mu(void 0!==e.idToken,"internal-error"),Mu(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=ol(e);return Mu(t,"internal-error"),Mu(void 0!==t.exp,"internal-error"),Mu(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Mu(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */await async function(e,t){const n=await Qu(e,{},(async()=>{const n=(0,s.Am)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,o=Xu(e,r,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",zu.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new ll;return n&&(Mu("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(Mu("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(Mu("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ll,this.toJSON())}_performRefresh(){return Uu("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(e,t){Mu("string"==typeof e||void 0===e,"internal-error",{appName:t})}class fl{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=Cu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new cl(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new hl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await al(this,this.stsTokenManager.getToken(this.auth,e));return Mu(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=(0,s.Ku)(e),r=await n.getIdToken(t),i=ol(r);Mu(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o="object"==typeof i.firebase?i.firebase:void 0,a=null==o?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:il(sl(i.auth_time)),issuedAtTime:il(sl(i.iat)),expirationTime:il(sl(i.exp)),signInProvider:a||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=(0,s.Ku)(e);await ul(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Mu(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new fl(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Mu(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ul(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await al(this,async function(e,t){return Wu(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,h;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,l=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(h=t.lastLoginAt)&&void 0!==h?h:void 0,{uid:v,emailVerified:w,isAnonymous:_,providerData:E,stsTokenManager:b}=t;Mu(v&&b,e,"internal-error");const I=ll.fromJSON(this.name,b);Mu("string"==typeof v,e,"internal-error"),dl(u,e.name),dl(l,e.name),Mu("boolean"==typeof w,e,"internal-error"),Mu("boolean"==typeof _,e,"internal-error"),dl(d,e.name),dl(f,e.name),dl(p,e.name),dl(g,e.name),dl(m,e.name),dl(y,e.name);const T=new fl({uid:v,auth:e,email:l,emailVerified:w,displayName:u,isAnonymous:_,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:I,createdAt:m,lastLoginAt:y});return E&&Array.isArray(E)&&(T.providerData=E.map((e=>Object.assign({},e)))),g&&(T._redirectEventId=g),T}static async _fromIdTokenResponse(e,t,n=!1){const r=new ll;r.updateFromServerResponse(t);const i=new fl({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await ul(i),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl=new Map;function gl(e){Fu(e instanceof Function,"Expected a class definition");let t=pl.get(e);return t?(Fu(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,pl.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ml.type="NONE";const yl=ml;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(e,t,n){return`firebase:${e}:${t}:${n}`}class wl{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=vl(this.userKey,r.apiKey,i),this.fullPersistenceKey=vl("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?fl._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new wl(gl(yl),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||gl(yl);const s=vl(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const r=fl._fromJSON(e,t);n!==i&&(o=r),i=n;break}}catch(e){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new wl(i,e,n)):new wl(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Tl(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(El(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Cl(t))return"Blackberry";if(Al(t))return"Webos";if(bl(t))return"Safari";if((t.includes("chrome/")||Il(t))&&!t.includes("edge/"))return"Chrome";if(Sl(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function El(e=(0,s.ZQ)()){return/firefox\//i.test(e)}function bl(e=(0,s.ZQ)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Il(e=(0,s.ZQ)()){return/crios\//i.test(e)}function Tl(e=(0,s.ZQ)()){return/iemobile/i.test(e)}function Sl(e=(0,s.ZQ)()){return/android/i.test(e)}function Cl(e=(0,s.ZQ)()){return/blackberry/i.test(e)}function Al(e=(0,s.ZQ)()){return/webos/i.test(e)}function kl(e=(0,s.ZQ)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Nl(e=(0,s.ZQ)()){return kl(e)||Sl(e)||Al(e)||Cl(e)||/windows phone/i.test(e)||Tl(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Dl(e,n=[]){let r;switch(e){case"Browser":r=_l((0,s.ZQ)());break;case"Worker":r=`${_l((0,s.ZQ)())}-${e}`;break;default:r=e}const i=n.length?n.join(","):"FirebaseCore-web";return`${r}/JsCore/${t.MF}/${i}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(e){r(e)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e){var t,n,r,i;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=s.minPasswordLength)&&void 0!==t?t:6,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(r=null===(n=e.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(i=e.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,r,i,s,o;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=null===(t=a.meetsMinPasswordLength)||void 0===t||t),a.isValid&&(a.isValid=null===(n=a.meetsMaxPasswordLength)||void 0===n||n),a.isValid&&(a.isValid=null===(r=a.containsLowercaseLetter)||void 0===r||r),a.isValid&&(a.isValid=null===(i=a.containsUppercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(s=a.containsNumericCharacter)||void 0===s||s),a.isValid&&(a.isValid=null===(o=a.containsNonAlphanumericCharacter)||void 0===o||o),a}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xl(this),this.idTokenSubscription=new xl(this),this.beforeStateQueue=new Rl(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Nu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=gl(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await wl.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null==o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Mu(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ul(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,s.Ku)(e):null;return t&&Mu(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Mu(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(gl(e))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await async function(e,t={}){return Wu(e,"GET","/v2/passwordPolicy",Gu(e,t))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this),t=new Ol(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new s.FA("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise(((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged((()=>{n(),e()}),t)}}))}async revokeAccessToken(e){if(this.currentUser){const t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await async function(e,t){return Wu(e,"POST","/v2/accounts:revokeToken",Gu(e,t))}(this,t)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&gl(e)||this._popupRedirectResolver;Mu(t,this,"argument-error"),this.redirectPersistenceManager=await wl.create(this,[gl(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t);let s=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(Mu(o,this,"internal-error"),o.then((()=>{s||i(this.currentUser)})),"function"==typeof t){const i=e.addObserver(t,n,r);return()=>{s=!0,i()}}{const n=e.addObserver(t);return()=>{s=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Mu(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Dl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const n=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==n?void 0:n.error)&&function(e,...n){Du.logLevel<=i.$b.WARN&&Du.warn(`Auth (${t.MF}): ${e}`,...n)}(`Error while retrieving App Check token: ${n.error}`),null==n?void 0:n.token}}function Ll(e){return(0,s.Ku)(e)}class xl{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,s.tD)((e=>this.observer=e))}get next(){return Mu(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ml={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ul(e){return Ml.loadJS(e)}function Fl(e){return`__${e}${Math.floor(1e6*Math.random())}`}class Vl{constructor(e){this.type="recaptcha-enterprise",this.auth=Ll(e)}async verify(e="verify",t=!1){function n(t,n,r){const i=window.grecaptcha;tl(i)?i.enterprise.ready((()=>{i.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n("NO_RECAPTCHA")}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,r)=>{(async function(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{rl(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new nl(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))})(this.auth).then((i=>{if(!t&&tl(window.grecaptcha))n(i,e,r);else{if("undefined"==typeof window)return void r(new Error("RecaptchaVerifier is only supported in browser"));let t=Ml.recaptchaEnterpriseScript;0!==t.length&&(t+=i),Ul(t).then((()=>{n(i,e,r)})).catch((e=>{r(e)}))}})).catch((e=>{r(e)}))}))}}async function jl(e,t,n,r=!1){const i=new Vl(e);let s;try{s=await i.verify(n)}catch(e){s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Bl(e,t,n,r){var i;if(null===(i=e._getRecaptchaConfig())||void 0===i?void 0:i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await jl(e,t,n,"getOobCode"===n);return r(e,i)}return r(e,t).catch((async i=>{if("auth/missing-recaptcha-token"===i.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const i=await jl(e,t,n,"getOobCode"===n);return r(e,i)}return Promise.reject(i)}))}function ql(e,t,n){const r=Ll(e);Mu(r._canInitEmulator,r,"emulator-config-failed"),Mu(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),s=$l(t),{host:o,port:a}=function(e){const t=$l(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:zl(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:zl(t)}}}(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function $l(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function zl(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Kl{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Uu("not implemented")}_getIdTokenResponse(e){return Uu("not implemented")}_linkToIdToken(e,t){return Uu("not implemented")}_getReauthenticationResolver(e){return Uu("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hl(e,t){return Wu(e,"POST","/v1/accounts:signUp",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Gl(e,t){return Ju(e,"POST","/v1/accounts:signInWithPassword",Gu(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wl extends Kl{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Wl(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Wl(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Bl(e,{returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signInWithPassword",Gl);case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return Ju(e,"POST","/v1/accounts:signInWithEmailLink",Gu(e,t))}(e,{email:this._email,oobCode:this._password});default:Ou(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Bl(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Hl);case"emailLink":return async function(e,t){return Ju(e,"POST","/v1/accounts:signInWithEmailLink",Gu(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Ou(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ql(e,t){return Ju(e,"POST","/v1/accounts:signInWithIdp",Gu(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl extends Kl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Jl(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ou("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=Cu(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new Jl(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return Ql(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ql(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ql(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,s.Am)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xl={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yl extends Kl{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Yl({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Yl({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return Ju(e,"POST","/v1/accounts:signInWithPhoneNumber",Gu(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await Ju(e,"POST","/v1/accounts:signInWithPhoneNumber",Gu(e,t));if(n.temporaryProof)throw el(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return Ju(e,"POST","/v1/accounts:signInWithPhoneNumber",Gu(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Xl)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Yl({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e){var t,n,r,i,o,a;const c=(0,s.I9)((0,s.hp)(e)),h=null!==(t=c.apiKey)&&void 0!==t?t:null,u=null!==(n=c.oobCode)&&void 0!==n?n:null,l=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=c.mode)&&void 0!==r?r:null);Mu(h&&u&&l,"argument-error"),this.apiKey=h,this.operation=l,this.code=u,this.continueUrl=null!==(i=c.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(o=c.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(a=c.tenantId)&&void 0!==a?a:null}static parseLink(e){const t=function(e){const t=(0,s.I9)((0,s.hp)(e)).link,n=t?(0,s.I9)((0,s.hp)(t)).deep_link_id:null,r=(0,s.I9)((0,s.hp)(e)).deep_link_id;return(r?(0,s.I9)((0,s.hp)(r)).link:null)||r||n||t||e}(e);try{return new Zl(t)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ed{constructor(){this.providerId=ed.PROVIDER_ID}static credential(e,t){return Wl._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Zl.parseLink(t);return Mu(n,"argument-error"),Wl._fromEmailAndCode(e,n.code,n.tenantId)}}ed.PROVIDER_ID="password",ed.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ed.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class td{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd extends td{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rd extends nd{constructor(){super("facebook.com")}static credential(e){return Jl._fromParams({providerId:rd.PROVIDER_ID,signInMethod:rd.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rd.credentialFromTaggedObject(e)}static credentialFromError(e){return rd.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return rd.credential(e.oauthAccessToken)}catch(e){return null}}}rd.FACEBOOK_SIGN_IN_METHOD="facebook.com",rd.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class id extends nd{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Jl._fromParams({providerId:id.PROVIDER_ID,signInMethod:id.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return id.credentialFromTaggedObject(e)}static credentialFromError(e){return id.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return id.credential(t,n)}catch(e){return null}}}id.GOOGLE_SIGN_IN_METHOD="google.com",id.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sd extends nd{constructor(){super("github.com")}static credential(e){return Jl._fromParams({providerId:sd.PROVIDER_ID,signInMethod:sd.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sd.credentialFromTaggedObject(e)}static credentialFromError(e){return sd.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return sd.credential(e.oauthAccessToken)}catch(e){return null}}}sd.GITHUB_SIGN_IN_METHOD="github.com",sd.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class od extends nd{constructor(){super("twitter.com")}static credential(e,t){return Jl._fromParams({providerId:od.PROVIDER_ID,signInMethod:od.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return od.credentialFromTaggedObject(e)}static credentialFromError(e){return od.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return od.credential(t,n)}catch(e){return null}}}od.TWITTER_SIGN_IN_METHOD="twitter.com",od.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ad{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await fl._fromIdTokenResponse(e,n,r),s=cd(n);return new ad({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=cd(n);return new ad({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function cd(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hd extends s.g{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,hd.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new hd(e,t,n,r)}}function ud(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw hd._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ld(e,t,n=!1){const r=await al(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return ad._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function dd(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await al(e,ud(r,i,t,e),n);Mu(s.idToken,r,"internal-error");const o=ol(s.idToken);Mu(o,r,"internal-error");const{sub:a}=o;return Mu(e.uid===a,r,"user-mismatch"),ad._forOperation(e,i,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&Ou(r,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fd(e,t,n=!1){const r="signIn",i=await ud(e,r,t),s=await ad._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}new WeakMap;const pd="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(pd,"1"),this.storage.removeItem(pd),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md extends gd{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=(0,s.ZQ)();return bl(e)||kl(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Nl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);(0,s.lT)()&&10===document.documentMode&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}md.type="LOCAL";const yd=md;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd extends gd{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}vd.type="SESSION";const wd=vd;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _d{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new _d(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ed(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_d.receivers=[];class bd{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=Ed("",20);r.port1.start();const h=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(h),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(h),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Id(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Td(){return void 0!==Id().WorkerGlobalScope&&"function"==typeof Id().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Sd="firebaseLocalStorageDb",Cd="firebaseLocalStorage",Ad="fbase_key";class kd{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Nd(e,t){return e.transaction([Cd],t?"readwrite":"readonly").objectStore(Cd)}function Dd(){const e=indexedDB.open(Sd,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Cd,{keyPath:Ad})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Cd)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Sd);return new kd(e).toPromise()}(),t(await Dd()))}))}))}async function Rd(e,t,n){const r=Nd(e,!0).put({[Ad]:t,value:n});return new kd(r).toPromise()}function Od(e,t){const n=Nd(e,!0).delete(t);return new kd(n).toPromise()}class Pd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Dd()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Td()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_d._getInstance(Td()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new bd(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Dd();return await Rd(e,pd,"1"),await Od(e,pd),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Rd(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Nd(e,!1).get(t),r=await new kd(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Od(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Nd(e,!1).getAll();return new kd(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Pd.type="LOCAL";const Ld=Pd;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Fl("rcb"),new qu(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const xd="recaptcha";async function Md(e,t,n){var r;const i=await n.verify();try{let s;if(Mu("string"==typeof i,e,"argument-error"),Mu(n.type===xd,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){Mu("enroll"===t.type,e,"internal-error");const n=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */await function(e,t){return Wu(e,"POST","/v2/accounts/mfaEnrollment:start",Gu(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{Mu("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;Mu(n,e,"missing-multi-factor-info");const o=await function(e,t){return Wu(e,"POST","/v2/accounts/mfaSignIn:start",Gu(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return Wu(e,"POST","/v1/accounts:sendVerificationCode",Gu(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ud{constructor(e){this.providerId=Ud.PROVIDER_ID,this.auth=Ll(e)}verifyPhoneNumber(e,t){return Md(this.auth,e,(0,s.Ku)(t))}static credential(e,t){return Yl._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Ud.credentialFromTaggedObject(t)}static credentialFromError(e){return Ud.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Yl._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Fd(e,t){return t?gl(t):(Mu(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ud.PROVIDER_ID="phone",Ud.PHONE_SIGN_IN_METHOD="phone";class Vd extends Kl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ql(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ql(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ql(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function jd(e){return fd(e.auth,new Vd(e),e.bypassAuthState)}function Bd(e){const{auth:t,user:n}=e;return Mu(n,t,"internal-error"),dd(n,new Vd(e),e.bypassAuthState)}async function qd(e){const{auth:t,user:n}=e;return Mu(n,t,"internal-error"),ld(n,new Vd(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return jd;case"linkViaPopup":case"linkViaRedirect":return qd;case"reauthViaPopup":case"reauthViaRedirect":return Bd;default:Ou(this.auth,"internal-error")}}resolve(e){Fu(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Fu(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zd=new qu(2e3,1e4);class Kd extends $d{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Kd.currentPopupAction&&Kd.currentPopupAction.cancel(),Kd.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Mu(e,this.auth,"internal-error"),e}async onExecution(){Fu(1===this.filter.length,"Popup operations only handle one event");const e=Ed();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Pu(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Pu(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Kd.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Pu(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,zd.get())};e()}}Kd.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Hd="pendingRedirect",Gd=new Map;class Wd extends $d{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Gd.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=Xd(t),r=Jd(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Gd.set(this.auth._key(),e)}return this.bypassAuthState||Gd.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Qd(e,t){Gd.set(e._key(),t)}function Jd(e){return gl(e._redirectPersistence)}function Xd(e){return vl(Hd,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yd(e,t,n=!1){const r=Ll(e),i=Fd(r,t),s=new Wd(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}class Zd{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tf(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!tf(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Pu(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(ef(e))}saveEventToCache(e){this.cachedEventUids.add(ef(e)),this.lastProcessedEventTime=Date.now()}}function ef(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function tf({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const nf=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rf=/^https?/;async function sf(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Wu(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(of(e))return}catch(e){}Ou(e,"unauthorized-domain")}function of(e){const t=Vu(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!rf.test(n))return!1;if(nf.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af=new qu(3e4,6e4);function cf(){const e=Id().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}function hf(e){return new Promise(((t,n)=>{var r,i,s;function o(){cf(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{cf(),n(Pu(e,"network-request-failed"))},timeout:af.get()})}if(null===(i=null===(r=Id().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Id().gapi)||void 0===s?void 0:s.load)){const t=Fl("iframefcb");return Id()[t]=()=>{gapi.load?o():n(Pu(e,"network-request-failed"))},Ul(`${Ml.gapiScript}?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw uf=null,e}))}let uf=null;
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const lf=new qu(5e3,15e3),df="__/auth/iframe",ff="emulator/auth/iframe",pf={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},gf=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mf(e){const n=e.config;Mu(n.authDomain,e,"auth-domain-config-required");const r=n.emulator?$u(n,ff):`https://${e.config.authDomain}/${df}`,i={apiKey:n.apiKey,appName:e.name,v:t.MF},o=gf.get(e.config.apiHost);o&&(i.eid=o);const a=e._getFrameworks();return a.length&&(i.fw=a.join(",")),`${r}?${(0,s.Am)(i).slice(1)}`}async function yf(e){const t=await function(e){return uf=uf||hf(e),uf}(e),n=Id().gapi;return Mu(n,e,"internal-error"),t.open({where:document.body,url:mf(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pf,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=Pu(e,"network-request-failed"),s=Id().setTimeout((()=>{r(i)}),lf.get());function o(){Id().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vf={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class wf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function _f(e,t,n,r=500,i=600){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const h=Object.assign(Object.assign({},vf),{width:r.toString(),height:i.toString(),top:o,left:a}),u=(0,s.ZQ)().toLowerCase();n&&(c=Il(u)?"_blank":n),El(u)&&(t=t||"http://localhost",h.scrollbars="yes");const l=Object.entries(h).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=(0,s.ZQ)()){var t;return kl(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==c)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",c),new wf(null);const d=window.open(t||"",c,l);Mu(d,e,"popup-blocked");try{d.focus()}catch(e){}return new wf(d)}const Ef="__/auth/handler",bf="emulator/auth/handler",If=encodeURIComponent("fac");async function Tf(e,n,r,i,o,a){Mu(e.config.authDomain,e,"auth-domain-config-required"),Mu(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:i,v:t.MF,eventId:o};if(n instanceof td){n.setDefaultLanguage(e.languageCode),c.providerId=n.providerId||"",(0,s.Im)(n.getCustomParameters())||(c.customParameters=JSON.stringify(n.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(n instanceof nd){const e=n.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const h=c;for(const e of Object.keys(h))void 0===h[e]&&delete h[e];const u=await e._getAppCheckToken(),l=u?`#${If}=${encodeURIComponent(u)}`:"";return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${Ef}`;return $u(e,bf)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${(0,s.Am)(h).slice(1)}${l}`}const Sf="webStorageSupport";const Cf=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wd,this._completeRedirectFn=Yd,this._overrideRedirectResult=Qd}async _openPopup(e,t,n,r){var i;Fu(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return _f(e,await Tf(e,t,n,Vu(),r),Ed())}async _openRedirect(e,t,n,r){await this._originValidation(e);return function(e){Id().location.href=e}(await Tf(e,t,n,Vu(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Fu(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await yf(e),n=new Zd(e);return t.register("authEvent",(t=>{Mu(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Sf,{type:Sf},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[Sf];void 0!==i&&t(!!i),Ou(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=sf(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Nl()||bl()||kl()}};var Af="@firebase/auth",kf="1.6.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nf{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Mu(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Df=(0,s.XA)("authIdTokenMaxAge")||300;let Rf=null;var Of;!function(e){Ml=e}({loadJS:e=>new Promise(((t,n)=>{const r=document.createElement("script");var i,s;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=Pu("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)})),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),Of="Browser",(0,t.om)(new r.uA("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:s,authDomain:o}=n.options;Mu(s&&!s.includes(":"),"invalid-api-key",{appName:n.name});const a={apiKey:s,authDomain:o,clientPlatform:Of,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Dl(Of)},c=new Pl(n,r,i,a);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(gl);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(c,t),c}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),(0,t.om)(new r.uA("auth-internal",(e=>(e=>new Nf(e))(Ll(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,t.KO)(Af,kf,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(Of)),(0,t.KO)(Af,kf,"esm2017");var Pf=n(6582),Lf=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();var xf=function(e){function t(t){return e.call(this,t)||this}return Lf(t,e),t}(Error);window.rai={getURL:function(){return window.location.href},getDomain:function(){return window.location.hostname},getProtocol:function(){return window.location.protocol},getUserId:function(){return window.localStorage.getItem("userId")},getPort:function(){return window.location.port},getPath:function(){return window.location.pathname},getHash:function(){return window.location.hash},getSearch:function(){return window.location.search},getOrigin:function(){return window.location.origin},getHostname:function(){return window.location.hostname},getVersion:function(){return"0.0.8-beta"},getCode:function(){try{return window.location.href.split("?")[1].split("=")[1].split("&")[0]}catch(e){return null}},getPaidStatus:function(e){try{return(t=JSON.stringify(e)).includes('"id":"21880338"')?{type:"premiumplus",id:e.data.id}:t.includes('"id": "10216194"')?{type:"premium",id:e.data.id}:t.includes('"id": "21880320"')?{type:"standard",id:e.data.id}:(console.log("free",t),{type:"free",id:e.data.id})}catch(n){var t=JSON.stringify(e);return console.log("free",t,n),{type:"free",id:e.data.id}}},moveToPanel:function(){window.location.href="/auth/panel/home.html"},NotLoggedError:xf};var Mf=function(e,t,n,r){return new(n||(n=Promise))((function(i,s){function o(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}c((r=r.apply(e,t||[])).next())}))},Uf=function(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;s&&(s=0,a[0]&&(o=0)),o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}};(0,Pf.o)();var Ff=function(e,n){const r="object"==typeof e?e:(0,t.Sx)(),i="string"==typeof e?e:n||"(default)",o=(0,t.j6)(r,"firestore").getImmediate({identifier:i});if(!o._initialized){const e=(0,s.yU)("firestore");e&&function(e,t,n,r={}){var i;const o=(e=Zh(e,tu))._getSettings(),a=`${t}:${n}`;if("firestore.googleapis.com"!==o.host&&o.host!==a&&Or("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=Cr.MOCK_USER;else{t=(0,s.Fy)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const o=r.mockUserToken.sub||r.mockUserToken.user_id;if(!o)throw new Fr(Ur.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Cr(o)}e._authCredentials=new qr(new jr(t,n))}}(o,...e)}return o}();(function(e=(0,t.Sx)()){const n=(0,t.j6)(e,"auth");if(n.isInitialized())return n.getImmediate();const r=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,n){const r=(0,t.j6)(e,"auth");if(r.isInitialized()){const e=r.getImmediate(),t=r.getOptions();if((0,s.bD)(t,null!=n?n:{}))return e;Ou(e,"already-initialized")}return r.initialize({options:n})}(e,{popupRedirectResolver:Cf,persistence:[Ld,yd,wd]}),i=(0,s.XA)("authTokenSyncURL");if(i&&i.match(/^\/[^\/].*/)){const e=(o=i,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Df)return;const r=null==t?void 0:t.token;Rf!==r&&(Rf=r,await fetch(o,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(e,t,n){(0,s.Ku)(e).beforeAuthStateChanged(t,n)}(r,e,(()=>e(r.currentUser))),function(e,t,n,r){(0,s.Ku)(e).onIdTokenChanged(t,n,r)}(r,(t=>e(t)))}var o;const a=(0,s.Tj)("auth");return a&&ql(r,`http://${a}`),r})().onAuthStateChanged((function(e){return Mf(void 0,void 0,void 0,(function(){var t,n,r,i,s,o,a,c,h,u,l,d;return Uf(this,(function(f){switch(f.label){case 0:if(null===e)throw window.location.href="/auth/signin.html",new xf("User is not signed in");return t=document.getElementById("premiumUpsell"),n=document.getElementById("premiumFeatures"),r=document.getElementById("premiumPlusUpsell"),i=document.getElementById("premiumPlusFeatures"),s=!1,o=!1,[4,Iu(su(Ff,"patreonlinkstatus",e.uid))];case 1:if(!(a=f.sent()).exists())return[2];switch(a.data().plan){case"owner":case"premiumplus":s=!0,o=!0;break;case"premium":s=!0}return s&&(t.classList.add("is-hidden"),n.classList.remove("disabled")),o&&(r.classList.add("is-hidden"),i.classList.remove("disabled")),null===window.localStorage.getItem("raichat-settings-available")&&(window.localStorage.setItem("raichat-settings-available","true"),window.localStorage.setItem("raichat-markdown","true")),c=document.getElementById("rai-markdown"),h=document.getElementById("hide-checkmark"),u=document.getElementById("test-highlight"),l=document.getElementById("edit-message"),d=document.getElementById("sort-with-time"),c.checked="true"===window.localStorage.getItem("raichat-markdown"),c.addEventListener("change",(function(){window.localStorage.setItem("raichat-markdown",c.checked.toString())})),s&&(null===window.localStorage.getItem("raichat-hide-checkmark")&&window.localStorage.setItem("raichat-hide-checkmark","false"),h.checked="true"===window.localStorage.getItem("raichat-hide-checkmark"),h.addEventListener("change",(function(){window.localStorage.setItem("raichat-hide-checkmark",h.checked.toString())}))),o&&(null===window.localStorage.getItem("raichat-highlight")&&window.localStorage.setItem("raichat-highlight","true"),null===window.localStorage.getItem("raichat-edit")&&window.localStorage.setItem("raichat-edit","true"),null===window.localStorage.getItem("raichat-sort-with-time")&&window.localStorage.setItem("raichat-sort-with-time","true"),u.checked="true"===window.localStorage.getItem("raichat-highlight"),u.addEventListener("change",(function(){window.localStorage.setItem("raichat-highlight",u.checked.toString())})),l.checked="true"===window.localStorage.getItem("raichat-edit"),l.addEventListener("change",(function(){window.localStorage.setItem("raichat-edit",l.checked.toString())})),d.checked="true"===window.localStorage.getItem("raichat-sort-with-time"),d.addEventListener("change",(function(){window.localStorage.setItem("raichat-sort-with-time",d.checked.toString())}))),[2]}}))}))}))})()})();