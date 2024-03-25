(()=>{"use strict";var e={6743:(e,t,n)=>{n.d(t,{Am:()=>D,FA:()=>S,Fy:()=>g,I9:()=>R,Im:()=>A,Ku:()=>M,T9:()=>d,Tj:()=>h,Uj:()=>o,XA:()=>f,ZQ:()=>m,bD:()=>k,cY:()=>p,eX:()=>I,g:()=>T,hp:()=>O,jZ:()=>y,lT:()=>_,lV:()=>w,nr:()=>b,sr:()=>v,tD:()=>P,u:()=>a,yU:()=>l,zW:()=>E});
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
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,u=i>>2,h=(3&i)<<4|o>>4;let l=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(l=64)),r.push(n[u],n[h],n[l],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],o=t<e.length?n[e.charAt(t)]:0;++t;const a=t<e.length?n[e.charAt(t)]:64;++t;const c=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==o||null==a||null==c)throw new s;const u=i<<2|o>>4;if(r.push(u),64!==a){const e=o<<4&240|a>>2;if(r.push(e),64!==c){const e=a<<6&192|c;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n.g)return n.g;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,u=()=>{try{return c()||(()=>{if("undefined"==typeof process||void 0===process.env)return;const e=process.env.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&a(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},h=e=>{var t,n;return null===(n=null===(t=u())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},l=e=>{const t=h(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},d=()=>{var e;return null===(e=u())||void 0===e?void 0:e.config},f=e=>{var t;return null===(t=u())||void 0===t?void 0:t[`_${e}`]};
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
 */function m(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function y(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(m())}function v(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function w(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function _(){const e=m();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function b(){return!function(){var e;const t=null===(e=u())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(e){return!1}}()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function E(){try{return"object"==typeof indexedDB}catch(e){return!1}}function I(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}class T extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,T.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,S.prototype.create)}}class S{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(C,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new T(r,o,n)}}const C=/\{\$([^}]+)}/g;
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
(0,r.KO)("firebase","10.9.0","app")},1990:(e,t,n)=>{n.d(t,{MF:()=>U,j6:()=>P,om:()=>O,Sx:()=>V,Wp:()=>F,KO:()=>j});var r=n(5125),i=n(3424),s=n(6743);const o=(e,t)=>t.some((t=>e instanceof t));let a,c;const u=new WeakMap,h=new WeakMap,l=new WeakMap,d=new WeakMap,f=new WeakMap;let p={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return h.get(e);if("objectStoreNames"===t)return e.objectStoreNames||l.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return y(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function g(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(v(this),t),y(u.get(this))}:function(...t){return y(e.apply(v(this),t))}:function(t,...n){const r=e.call(v(this),t,...n);return l.set(r,t.sort?t.sort():[t]),y(r)}}function m(e){return"function"==typeof e?g(e):(e instanceof IDBTransaction&&function(e){if(h.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));h.set(e,t)}(e),o(e,a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,p):e)}function y(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(y(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&u.set(t,e)})).catch((()=>{})),f.set(t,e),t}(e);if(d.has(e))return d.get(e);const t=m(e);return t!==e&&(d.set(e,t),f.set(t,e)),t}const v=e=>f.get(e);const w=["get","getKey","getAll","getAllKeys","count"],_=["put","add","delete","clear"],b=new Map;function E(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(b.get(t))return b.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!w.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return b.set(t,s),s}p=(e=>({...e,get:(t,n,r)=>E(t,n)||e.get(t,n,r),has:(t,n)=>!!E(t,n)||e.has(t,n)}))(p);
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
 */const U="10.9.0";function F(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const i=Object.assign({name:A,automaticDataCollectionEnabled:!1},t),o=i.name;if("string"!=typeof o||!o)throw x.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.T9)()),!n)throw x.create("no-options");const a=N.get(o);if(a){if((0,s.bD)(n,a.options)&&(0,s.bD)(i,a.config))return a;throw x.create("duplicate-app",{appName:o})}const c=new r.h1(o);for(const e of D.values())c.addComponent(e);const u=new M(n,i,c);return N.set(o,u),u}function V(e=A){const t=N.get(e);if(!t&&e===A&&(0,s.T9)())return F();if(!t)throw x.create("no-app",{appName:e});return t}function j(e,t,n){var i;let s=null!==(i=k[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void C.warn(e.join(" "))}O(new r.uA(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===s?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class a{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},3424:(e,t,n)=>{n.d(t,{$b:()=>i,Vy:()=>u});
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
const r=[];var i;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(6743),t=n(1990),r=n(3424);function i(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;"function"==typeof SuppressedError&&SuppressedError;var s=n(5125);function o(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const a=o,c=new e.FA("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),u=new r.Vy("@firebase/auth");function h(e,...n){u.logLevel<=r.$b.ERROR&&u.error(`Auth (${t.MF}): ${e}`,...n)}
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
 */function l(e,...t){throw p(e,...t)}function d(e,...t){return p(e,...t)}function f(t,n,r){const i=Object.assign(Object.assign({},a()),{[n]:r});return new e.FA("auth","Firebase",i).create(n,{appName:t.name})}function p(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return c.create(e,...t)}function g(e,t,...n){if(!e)throw p(t,...n)}function m(e){const t="INTERNAL ASSERTION FAILED: "+e;throw h(t),new Error(t)}function y(e,t){e||m(t)}
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
 */function v(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function w(){return"http:"===_()||"https:"===_()}function _(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
class b{constructor(t,n){this.shortDelay=t,this.longDelay=n,y(n>t,"Short delay should be less than long delay!"),this.isMobile=(0,e.jZ)()||(0,e.lV)()}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(w()||(0,e.sr)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
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
 */function E(e,t){y(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class I{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void m("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void m("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void m("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const T={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},S=new b(3e4,6e4);
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
 */function C(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function A(t,n,r,i,s={}){return k(t,s,(async()=>{let s={},o={};i&&("GET"===n?o=i:s={body:JSON.stringify(i)});const a=(0,e.Am)(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),I.fetch()(D(t,t.config.apiHost,r,a),Object.assign({method:n,headers:c,referrerPolicy:"no-referrer"},s))}))}async function k(t,n,r){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},T),n);try{const e=new O(t),n=await Promise.race([r(),e.promise]);e.clearNetworkTimeout();const s=await n.json();if("needConfirmation"in s)throw P(t,"account-exists-with-different-credential",s);if(n.ok&&!("errorMessage"in s))return s;{const e=n.ok?s.errorMessage:s.error.message,[r,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===r)throw P(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===r)throw P(t,"email-already-in-use",s);if("USER_DISABLED"===r)throw P(t,"user-disabled",s);const a=i[r]||r.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw f(t,a,o);l(t,a)}}catch(n){if(n instanceof e.g)throw n;l(t,"network-request-failed",{message:String(n)})}}async function N(e,t,n,r,i={}){const s=await A(e,t,n,r,i);return"mfaPendingCredential"in s&&l(e,"multi-factor-auth-required",{_serverResponse:s}),s}function D(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?E(e.config,i):`${e.config.apiScheme}://${i}`}function R(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class O{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(d(this.auth,"network-request-failed"))),S.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function P(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=d(e,t,r);return i.customData._tokenResponse=n,i}
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
 */function L(e){return void 0!==e&&void 0!==e.enterprise}class x{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return R(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}}
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
 */async function M(e,t){return A(e,"GET","/v2/recaptchaConfig",C(e,t))}
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
function U(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
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
 */function F(e){return 1e3*Number(e)}function V(t){const[n,r,i]=t.split(".");if(void 0===n||void 0===r||void 0===i)return h("JWT malformed, contained fewer than 3 sections"),null;try{const t=(0,e.u)(r);return t?JSON.parse(t):(h("Failed to decode base64 JWT payload"),null)}catch(e){return h("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
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
async function j(t,n,r=!1){if(r)return n;try{return await n}catch(n){throw n instanceof e.g&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */(n)&&t.auth.currentUser===t&&await t.auth.signOut(),n}}class B{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
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
 */class q{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=U(this.lastLoginAt),this.creationTime=U(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function $(e){var t;const n=e.auth,r=await e.getIdToken(),s=await j(e,async function(e,t){return A(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));g(null==s?void 0:s.users.length,n,"internal-error");const o=s.users[0];e._notifyReloadListener(o);const a=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?o.providerUserInfo.map((e=>{var{providerId:t}=e,n=i(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const c=(u=e.providerData,h=a,[...u.filter((e=>!h.some((t=>t.providerId===e.providerId)))),...h]);var u,h;const l=e.isAnonymous,d=!(e.email&&o.passwordHash||(null==c?void 0:c.length)),f=!!l&&d,p={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new q(o.createdAt,o.lastLoginAt),isAnonymous:f};Object.assign(e,p)}
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
class z{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){g(e.idToken,"internal-error"),g(void 0!==e.idToken,"internal-error"),g(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=V(e);return g(t,"internal-error"),g(void 0!==t.exp,"internal-error"),g(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return g(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=
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
 */await async function(t,n){const r=await k(t,{},(async()=>{const r=(0,e.Am)({grant_type:"refresh_token",refresh_token:n}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=D(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",I.fetch()(o,{method:"POST",headers:a,body:r})}));return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new z;return n&&(g("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(g("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(g("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new z,this.toJSON())}_performRefresh(){return m("not implemented")}}
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
 */function K(e,t){g("string"==typeof e||void 0===e,"internal-error",{appName:t})}class H{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,s=i(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new B(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new q(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await j(this,this.stsTokenManager.getToken(this.auth,e));return g(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(t){return async function(t,n=!1){const r=(0,e.Ku)(t),i=await r.getIdToken(n),s=V(i);g(s&&s.exp&&s.auth_time&&s.iat,r.auth,"internal-error");const o="object"==typeof s.firebase?s.firebase:void 0,a=null==o?void 0:o.sign_in_provider;return{claims:s,token:i,authTime:U(F(s.auth_time)),issuedAtTime:U(F(s.iat)),expirationTime:U(F(s.exp)),signInProvider:a||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}(this,t)}reload(){return async function(t){const n=(0,e.Ku)(t);await $(n),await n.auth._persistUserIfCurrent(n),n.auth._notifyListenersIfCurrent(n)}(this)}_assign(e){this!==e&&(g(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new H(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){g(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await $(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await j(this,async function(e,t){return A(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,u;const h=null!==(n=t.displayName)&&void 0!==n?n:void 0,l=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,y=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:w,emailVerified:_,isAnonymous:b,providerData:E,stsTokenManager:I}=t;g(w&&I,e,"internal-error");const T=z.fromJSON(this.name,I);g("string"==typeof w,e,"internal-error"),K(h,e.name),K(l,e.name),g("boolean"==typeof _,e,"internal-error"),g("boolean"==typeof b,e,"internal-error"),K(d,e.name),K(f,e.name),K(p,e.name),K(m,e.name),K(y,e.name),K(v,e.name);const S=new H({uid:w,auth:e,email:l,emailVerified:_,displayName:h,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:y,lastLoginAt:v});return E&&Array.isArray(E)&&(S.providerData=E.map((e=>Object.assign({},e)))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(e,t,n=!1){const r=new z;r.updateFromServerResponse(t);const i=new H({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await $(i),i}}
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
 */const G=new Map;function W(e){y(e instanceof Function,"Expected a class definition");let t=G.get(e);return t?(y(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,G.set(e,t),t)}
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
 */class Q{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Q.type="NONE";const J=Q;
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
 */function X(e,t,n){return`firebase:${e}:${t}:${n}`}class Y{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=X(this.userKey,r.apiKey,i),this.fullPersistenceKey=X("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?H._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Y(W(J),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||W(J);const s=X(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const r=H._fromJSON(e,t);n!==i&&(o=r),i=n;break}}catch(e){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new Y(i,e,n)):new Y(i,e,n)}}
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
 */function Z(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(re(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ee(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(se(t))return"Blackberry";if(oe(t))return"Webos";if(te(t))return"Safari";if((t.includes("chrome/")||ne(t))&&!t.includes("edge/"))return"Chrome";if(ie(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function ee(t=(0,e.ZQ)()){return/firefox\//i.test(t)}function te(t=(0,e.ZQ)()){const n=t.toLowerCase();return n.includes("safari/")&&!n.includes("chrome/")&&!n.includes("crios/")&&!n.includes("android")}function ne(t=(0,e.ZQ)()){return/crios\//i.test(t)}function re(t=(0,e.ZQ)()){return/iemobile/i.test(t)}function ie(t=(0,e.ZQ)()){return/android/i.test(t)}function se(t=(0,e.ZQ)()){return/blackberry/i.test(t)}function oe(t=(0,e.ZQ)()){return/webos/i.test(t)}function ae(t=(0,e.ZQ)()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ce(t=(0,e.ZQ)()){return ae(t)||ie(t)||oe(t)||se(t)||/windows phone/i.test(t)||re(t)}
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
function ue(n,r=[]){let i;switch(n){case"Browser":i=Z((0,e.ZQ)());break;case"Worker":i=`${Z((0,e.ZQ)())}-${n}`;break;default:i=n}const s=r.length?r.join(","):"FirebaseCore-web";return`${i}/JsCore/${t.MF}/${s}`}
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
 */class he{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(e){r(e)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}
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
 */class le{constructor(e){var t,n,r,i;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=s.minPasswordLength)&&void 0!==t?t:6,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(r=null===(n=e.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(i=e.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,r,i,s,o;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=null===(t=a.meetsMinPasswordLength)||void 0===t||t),a.isValid&&(a.isValid=null===(n=a.meetsMaxPasswordLength)||void 0===n||n),a.isValid&&(a.isValid=null===(r=a.containsLowercaseLetter)||void 0===r||r),a.isValid&&(a.isValid=null===(i=a.containsUppercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(s=a.containsNumericCharacter)||void 0===s||s),a.isValid&&(a.isValid=null===(o=a.containsNonAlphanumericCharacter)||void 0===o||o),a}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}
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
 */class de{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pe(this),this.idTokenSubscription=new pe(this),this.beforeStateQueue=new he(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=c,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=W(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await Y.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null==o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return g(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await $(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?(0,e.Ku)(t):null;return n&&g(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&g(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(W(e))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await async function(e,t={}){return A(e,"GET","/v2/passwordPolicy",C(e,t))}
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
 */(this),t=new le(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new e.FA("auth","Firebase",t())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise(((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged((()=>{n(),e()}),t)}}))}async revokeAccessToken(e){if(this.currentUser){const t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await async function(e,t){return A(e,"POST","/v2/accounts:revokeToken",C(e,t))}(this,t)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&W(e)||this._popupRedirectResolver;g(t,this,"argument-error"),this.redirectPersistenceManager=await Y.create(this,[W(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t);let s=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(g(o,this,"internal-error"),o.then((()=>{s||i(this.currentUser)})),"function"==typeof t){const i=e.addObserver(t,n,r);return()=>{s=!0,i()}}{const n=e.addObserver(t);return()=>{s=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return g(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ue(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const n=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==n?void 0:n.error)&&function(e,...n){u.logLevel<=r.$b.WARN&&u.warn(`Auth (${t.MF}): ${e}`,...n)}(`Error while retrieving App Check token: ${n.error}`),null==n?void 0:n.token}}function fe(t){return(0,e.Ku)(t)}class pe{constructor(t){this.auth=t,this.observer=null,this.addObserver=(0,e.tD)((e=>this.observer=e))}get next(){return g(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
 */let ge={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function me(e){return ge.loadJS(e)}function ye(e){return`__${e}${Math.floor(1e6*Math.random())}`}class ve{constructor(e){this.type="recaptcha-enterprise",this.auth=fe(e)}async verify(e="verify",t=!1){function n(t,n,r){const i=window.grecaptcha;L(i)?i.enterprise.ready((()=>{i.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n("NO_RECAPTCHA")}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,r)=>{(async function(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{M(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new x(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))})(this.auth).then((i=>{if(!t&&L(window.grecaptcha))n(i,e,r);else{if("undefined"==typeof window)return void r(new Error("RecaptchaVerifier is only supported in browser"));let t=ge.recaptchaEnterpriseScript;0!==t.length&&(t+=i),me(t).then((()=>{n(i,e,r)})).catch((e=>{r(e)}))}})).catch((e=>{r(e)}))}))}}async function we(e,t,n,r=!1){const i=new ve(e);let s;try{s=await i.verify(n)}catch(e){s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function _e(e,t,n,r){var i;if(null===(i=e._getRecaptchaConfig())||void 0===i?void 0:i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await we(e,t,n,"getOobCode"===n);return r(e,i)}return r(e,t).catch((async i=>{if("auth/missing-recaptcha-token"===i.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const i=await we(e,t,n,"getOobCode"===n);return r(e,i)}return Promise.reject(i)}))}function be(e,t,n){const r=fe(e);g(r._canInitEmulator,r,"emulator-config-failed"),g(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),s=Ee(t),{host:o,port:a}=function(e){const t=Ee(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Ie(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Ie(t)}}}(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */()}function Ee(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Ie(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Te{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return m("not implemented")}_getIdTokenResponse(e){return m("not implemented")}_linkToIdToken(e,t){return m("not implemented")}_getReauthenticationResolver(e){return m("not implemented")}}
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
 */async function Se(e,t){return A(e,"POST","/v1/accounts:signUp",t)}
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
async function Ce(e,t){return N(e,"POST","/v1/accounts:signInWithPassword",C(e,t))}
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
class Ae extends Te{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Ae(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ae(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return _e(e,{returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signInWithPassword",Ce);case"emailLink":
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
return async function(e,t){return N(e,"POST","/v1/accounts:signInWithEmailLink",C(e,t))}(e,{email:this._email,oobCode:this._password});default:l(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return _e(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Se);case"emailLink":return async function(e,t){return N(e,"POST","/v1/accounts:signInWithEmailLink",C(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:l(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
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
 */async function ke(e,t){return N(e,"POST","/v1/accounts:signInWithIdp",C(e,t))}
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
 */class Ne extends Te{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ne(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):l("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,s=i(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new Ne(n,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){return ke(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,ke(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ke(e,t)}buildRequest(){const t={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=(0,e.Am)(n)}return t}}
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
 */const De={USER_NOT_FOUND:"user-not-found"};
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
class Re extends Te{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Re({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Re({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return N(e,"POST","/v1/accounts:signInWithPhoneNumber",C(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await N(e,"POST","/v1/accounts:signInWithPhoneNumber",C(e,t));if(n.temporaryProof)throw P(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return N(e,"POST","/v1/accounts:signInWithPhoneNumber",C(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),De)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Re({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
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
 */class Oe{constructor(t){var n,r,i,s,o,a;const c=(0,e.I9)((0,e.hp)(t)),u=null!==(n=c.apiKey)&&void 0!==n?n:null,h=null!==(r=c.oobCode)&&void 0!==r?r:null,l=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=c.mode)&&void 0!==i?i:null);g(u&&h&&l,"argument-error"),this.apiKey=u,this.operation=l,this.code=h,this.continueUrl=null!==(s=c.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(o=c.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(a=c.tenantId)&&void 0!==a?a:null}static parseLink(t){const n=function(t){const n=(0,e.I9)((0,e.hp)(t)).link,r=n?(0,e.I9)((0,e.hp)(n)).deep_link_id:null,i=(0,e.I9)((0,e.hp)(t)).deep_link_id;return(i?(0,e.I9)((0,e.hp)(i)).link:null)||i||r||n||t}(t);try{return new Oe(n)}catch(e){return null}}}
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
class Pe{constructor(){this.providerId=Pe.PROVIDER_ID}static credential(e,t){return Ae._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Oe.parseLink(t);return g(n,"argument-error"),Ae._fromEmailAndCode(e,n.code,n.tenantId)}}Pe.PROVIDER_ID="password",Pe.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Pe.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class Le{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
 */class xe extends Le{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
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
class Me extends xe{constructor(){super("facebook.com")}static credential(e){return Ne._fromParams({providerId:Me.PROVIDER_ID,signInMethod:Me.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Me.credentialFromTaggedObject(e)}static credentialFromError(e){return Me.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Me.credential(e.oauthAccessToken)}catch(e){return null}}}Me.FACEBOOK_SIGN_IN_METHOD="facebook.com",Me.PROVIDER_ID="facebook.com";
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
class Ue extends xe{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ne._fromParams({providerId:Ue.PROVIDER_ID,signInMethod:Ue.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ue.credentialFromTaggedObject(e)}static credentialFromError(e){return Ue.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Ue.credential(t,n)}catch(e){return null}}}Ue.GOOGLE_SIGN_IN_METHOD="google.com",Ue.PROVIDER_ID="google.com";
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
class Fe extends xe{constructor(){super("github.com")}static credential(e){return Ne._fromParams({providerId:Fe.PROVIDER_ID,signInMethod:Fe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fe.credentialFromTaggedObject(e)}static credentialFromError(e){return Fe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Fe.credential(e.oauthAccessToken)}catch(e){return null}}}Fe.GITHUB_SIGN_IN_METHOD="github.com",Fe.PROVIDER_ID="github.com";
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
class Ve extends xe{constructor(){super("twitter.com")}static credential(e,t){return Ne._fromParams({providerId:Ve.PROVIDER_ID,signInMethod:Ve.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ve.credentialFromTaggedObject(e)}static credentialFromError(e){return Ve.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Ve.credential(t,n)}catch(e){return null}}}Ve.TWITTER_SIGN_IN_METHOD="twitter.com",Ve.PROVIDER_ID="twitter.com";
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
class je{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await H._fromIdTokenResponse(e,n,r),s=Be(n);return new je({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Be(n);return new je({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Be(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
class qe extends e.g{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,qe.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new qe(e,t,n,r)}}function $e(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw qe._fromErrorAndOperation(e,n,t,r);throw n}))}
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
 */async function ze(e,t,n=!1){const r=await j(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return je._forOperation(e,"link",r)}
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
async function Ke(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await j(e,$e(r,i,t,e),n);g(s.idToken,r,"internal-error");const o=V(s.idToken);g(o,r,"internal-error");const{sub:a}=o;return g(e.uid===a,r,"user-mismatch"),je._forOperation(e,i,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&l(r,"user-mismatch"),e}}
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
 */async function He(e,t,n=!1){const r="signIn",i=await $e(e,r,t),s=await je._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}new WeakMap;const Ge="__sak";
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
 */class We{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ge,"1"),this.storage.removeItem(Ge),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
 */class Qe extends We{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const t=(0,e.ZQ)();return te(t)||ae(t)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=ce(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(t,n=!1){if(!t.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const e=this.storage.getItem(r);if(t.newValue!==e)null!==t.newValue?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const e=this.storage.getItem(r);(n||this.localCache[r]!==e)&&this.notifyListeners(r,e)},s=this.storage.getItem(r);(0,e.lT)()&&10===document.documentMode&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Qe.type="LOCAL";const Je=Qe;
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
 */class Xe extends We{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Xe.type="SESSION";const Ye=Xe;
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
class Ze{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Ze(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function et(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
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
 */Ze.receivers=[];class tt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=et("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
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
 */function nt(){return window}
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
function rt(){return void 0!==nt().WorkerGlobalScope&&"function"==typeof nt().importScripts}
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
const it="firebaseLocalStorageDb",st="firebaseLocalStorage",ot="fbase_key";class at{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function ct(e,t){return e.transaction([st],t?"readwrite":"readonly").objectStore(st)}function ut(){const e=indexedDB.open(it,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(st,{keyPath:ot})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(st)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(it);return new at(e).toPromise()}(),t(await ut()))}))}))}async function ht(e,t,n){const r=ct(e,!0).put({[ot]:t,value:n});return new at(r).toPromise()}function lt(e,t){const n=ct(e,!0).delete(t);return new at(n).toPromise()}class dt{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await ut()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ze._getInstance(rt()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new tt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ut();return await ht(e,Ge,"1"),await lt(e,Ge),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>ht(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=ct(e,!1).get(t),r=await new at(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>lt(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=ct(e,!1).getAll();return new at(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}dt.type="LOCAL";const ft=dt;
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
ye("rcb"),new b(3e4,6e4);
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
const pt="recaptcha";async function gt(e,t,n){var r;const i=await n.verify();try{let s;if(g("string"==typeof i,e,"argument-error"),g(n.type===pt,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){g("enroll"===t.type,e,"internal-error");const n=
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
 */await function(e,t){return A(e,"POST","/v2/accounts/mfaEnrollment:start",C(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{g("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;g(n,e,"missing-multi-factor-info");const o=await function(e,t){return A(e,"POST","/v2/accounts/mfaSignIn:start",C(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return A(e,"POST","/v1/accounts:sendVerificationCode",C(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
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
class mt{constructor(e){this.providerId=mt.PROVIDER_ID,this.auth=fe(e)}verifyPhoneNumber(t,n){return gt(this.auth,t,(0,e.Ku)(n))}static credential(e,t){return Re._fromVerification(e,t)}static credentialFromResult(e){const t=e;return mt.credentialFromTaggedObject(t)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Re._fromTokenResponse(t,n):null}}
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
function yt(e,t){return t?W(t):(g(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */mt.PROVIDER_ID="phone",mt.PHONE_SIGN_IN_METHOD="phone";class vt extends Te{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ke(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ke(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ke(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function wt(e){return He(e.auth,new vt(e),e.bypassAuthState)}function _t(e){const{auth:t,user:n}=e;return g(n,t,"internal-error"),Ke(n,new vt(e),e.bypassAuthState)}async function bt(e){const{auth:t,user:n}=e;return g(n,t,"internal-error"),ze(n,new vt(e),e.bypassAuthState)}
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
 */class Et{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return wt;case"linkViaPopup":case"linkViaRedirect":return bt;case"reauthViaPopup":case"reauthViaRedirect":return _t;default:l(this.auth,"internal-error")}}resolve(e){y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const It=new b(2e3,1e4);class Tt extends Et{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Tt.currentPopupAction&&Tt.currentPopupAction.cancel(),Tt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return g(e,this.auth,"internal-error"),e}async onExecution(){y(1===this.filter.length,"Popup operations only handle one event");const e=et();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(d(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(d(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Tt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(d(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,It.get())};e()}}Tt.currentPopupAction=null;
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
const St="pendingRedirect",Ct=new Map;class At extends Et{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Ct.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=Dt(t),r=Nt(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Ct.set(this.auth._key(),e)}return this.bypassAuthState||Ct.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function kt(e,t){Ct.set(e._key(),t)}function Nt(e){return W(e._redirectPersistence)}function Dt(e){return X(St,e.config.apiKey,e.name)}
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
 */async function Rt(e,t,n=!1){const r=fe(e),i=yt(r,t),s=new At(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}class Ot{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Lt(e);default:return!1}}
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Lt(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(d(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Pt(e))}saveEventToCache(e){this.cachedEventUids.add(Pt(e)),this.lastProcessedEventTime=Date.now()}}function Pt(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Lt({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
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
const xt=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Mt=/^https?/;async function Ut(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return A(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Ft(e))return}catch(e){}l(e,"unauthorized-domain")}function Ft(e){const t=v(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Mt.test(n))return!1;if(xt.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
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
 */const Vt=new b(3e4,6e4);function jt(){const e=nt().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}function Bt(e){return new Promise(((t,n)=>{var r,i,s;function o(){jt(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{jt(),n(d(e,"network-request-failed"))},timeout:Vt.get()})}if(null===(i=null===(r=nt().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=nt().gapi)||void 0===s?void 0:s.load)){const t=ye("iframefcb");return nt()[t]=()=>{gapi.load?o():n(d(e,"network-request-failed"))},me(`${ge.gapiScript}?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw qt=null,e}))}let qt=null;
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
const $t=new b(5e3,15e3),zt="__/auth/iframe",Kt="emulator/auth/iframe",Ht={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Gt=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Wt(n){const r=n.config;g(r.authDomain,n,"auth-domain-config-required");const i=r.emulator?E(r,Kt):`https://${n.config.authDomain}/${zt}`,s={apiKey:r.apiKey,appName:n.name,v:t.MF},o=Gt.get(n.config.apiHost);o&&(s.eid=o);const a=n._getFrameworks();return a.length&&(s.fw=a.join(",")),`${i}?${(0,e.Am)(s).slice(1)}`}async function Qt(e){const t=await function(e){return qt=qt||Bt(e),qt}(e),n=nt().gapi;return g(n,e,"internal-error"),t.open({where:document.body,url:Wt(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ht,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=d(e,"network-request-failed"),s=nt().setTimeout((()=>{r(i)}),$t.get());function o(){nt().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
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
 */const Jt={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Xt{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Yt(t,n,r,i=500,s=600){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Jt),{width:i.toString(),height:s.toString(),top:o,left:a}),h=(0,e.ZQ)().toLowerCase();r&&(c=ne(h)?"_blank":r),ee(h)&&(n=n||"http://localhost",u.scrollbars="yes");const l=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(t=(0,e.ZQ)()){var n;return ae(t)&&!!(null===(n=window.navigator)||void 0===n?void 0:n.standalone)}(h)&&"_self"!==c)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */(n||"",c),new Xt(null);const d=window.open(n||"",c,l);g(d,t,"popup-blocked");try{d.focus()}catch(e){}return new Xt(d)}const Zt="__/auth/handler",en="emulator/auth/handler",tn=encodeURIComponent("fac");async function nn(n,r,i,s,o,a){g(n.config.authDomain,n,"auth-domain-config-required"),g(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:i,redirectUrl:s,v:t.MF,eventId:o};if(r instanceof Le){r.setDefaultLanguage(n.languageCode),c.providerId=r.providerId||"",(0,e.Im)(r.getCustomParameters())||(c.customParameters=JSON.stringify(r.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(r instanceof xe){const e=r.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}n.tenantId&&(c.tid=n.tenantId);const u=c;for(const e of Object.keys(u))void 0===u[e]&&delete u[e];const h=await n._getAppCheckToken(),l=h?`#${tn}=${encodeURIComponent(h)}`:"";return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${Zt}`;return E(e,en)}
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
 */(n)}?${(0,e.Am)(u).slice(1)}${l}`}const rn="webStorageSupport";const sn=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ye,this._completeRedirectFn=Rt,this._overrideRedirectResult=kt}async _openPopup(e,t,n,r){var i;y(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return Yt(e,await nn(e,t,n,v(),r),et())}async _openRedirect(e,t,n,r){await this._originValidation(e);return function(e){nt().location.href=e}(await nn(e,t,n,v(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(y(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Qt(e),n=new Ot(e);return t.register("authEvent",(t=>{g(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(rn,{type:rn},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[rn];void 0!==i&&t(!!i),l(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ut(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ce()||te()||ae()}};var on="@firebase/auth",an="1.6.2";
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
class cn{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){g(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
const un=(0,e.XA)("authIdTokenMaxAge")||300;let hn=null;var ln;!function(e){ge=e}({loadJS:e=>new Promise(((t,n)=>{const r=document.createElement("script");var i,s;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=d("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)})),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),ln="Browser",(0,t.om)(new s.uA("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:s,authDomain:o}=n.options;g(s&&!s.includes(":"),"invalid-api-key",{appName:n.name});const a={apiKey:s,authDomain:o,clientPlatform:ln,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ue(ln)},c=new de(n,r,i,a);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(W);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(c,t),c}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),(0,t.om)(new s.uA("auth-internal",(e=>(e=>new cn(e))(fe(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,t.KO)(on,an,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(ln)),(0,t.KO)(on,an,"esm2017");var dn,fn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},pn={},gn=gn||{},mn=fn||self;function yn(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function vn(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var wn="closure_uid_"+(1e9*Math.random()>>>0),_n=0;function bn(e,t,n){return e.call.apply(e.bind,arguments)}function En(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function In(e,t,n){return(In=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?bn:En).apply(null,arguments)}function Tn(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function Sn(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function Cn(){this.s=this.s,this.o=this.o}Cn.prototype.s=!1,Cn.prototype.sa=function(){var e;!this.s&&(this.s=!0,this.N(),0)&&(e=this,Object.prototype.hasOwnProperty.call(e,wn)&&e[wn]||(e[wn]=++_n))},Cn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const An=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function kn(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Nn(e,t){for(let t=1;t<arguments.length;t++){const n=arguments[t];if(yn(n)){const t=e.length||0,r=n.length||0;e.length=t+r;for(let i=0;i<r;i++)e[t+i]=n[i]}else e.push(n)}}function Dn(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Dn.prototype.h=function(){this.defaultPrevented=!0};var Rn=function(){if(!mn.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const e=()=>{};mn.addEventListener("test",e,t),mn.removeEventListener("test",e,t)}catch(e){}return e}();function On(e){return/^[\s\xa0]*$/.test(e)}function Pn(){var e=mn.navigator;return e&&(e=e.userAgent)?e:""}function Ln(e){return-1!=Pn().indexOf(e)}function xn(e){return xn[" "](e),e}xn[" "]=function(){};var Mn,Un,Fn,Vn=Ln("Opera"),jn=Ln("Trident")||Ln("MSIE"),Bn=Ln("Edge"),qn=Bn||jn,$n=Ln("Gecko")&&!(-1!=Pn().toLowerCase().indexOf("webkit")&&!Ln("Edge"))&&!(Ln("Trident")||Ln("MSIE"))&&!Ln("Edge"),zn=-1!=Pn().toLowerCase().indexOf("webkit")&&!Ln("Edge");function Kn(){var e=mn.document;return e?e.documentMode:void 0}e:{var Hn="",Gn=(Un=Pn(),$n?/rv:([^\);]+)(\)|;)/.exec(Un):Bn?/Edge\/([\d\.]+)/.exec(Un):jn?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Un):zn?/WebKit\/(\S+)/.exec(Un):Vn?/(?:Version)[ \/]?(\S+)/.exec(Un):void 0);if(Gn&&(Hn=Gn?Gn[1]:""),jn){var Wn=Kn();if(null!=Wn&&Wn>parseFloat(Hn)){Mn=String(Wn);break e}}Mn=Hn}if(mn.document&&jn){var Qn=Kn();Fn=Qn||(parseInt(Mn,10)||void 0)}else Fn=void 0;var Jn=Fn;function Xn(e,t){if(Dn.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if($n){e:{try{xn(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:Yn[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Xn.$.h.call(this)}}Sn(Xn,Dn);var Yn={2:"touch",3:"pen",4:"mouse"};Xn.prototype.h=function(){Xn.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Zn="closure_listenable_"+(1e6*Math.random()|0),er=0;function tr(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++er,this.fa=this.ia=!1}function nr(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function rr(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function ir(e){const t={};for(const n in e)t[n]=e[n];return t}const sr="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function or(e,t){let n,r;for(let t=1;t<arguments.length;t++){for(n in r=arguments[t],r)e[n]=r[n];for(let t=0;t<sr.length;t++)n=sr[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function ar(e){this.src=e,this.g={},this.h=0}function cr(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=An(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(nr(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function ur(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}ar.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=ur(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):((t=new tr(t,this.src,s,!!r,i)).ia=n,e.push(t)),t};var hr="closure_lm_"+(1e6*Math.random()|0),lr={};function dr(e,t,n,r,i){if(r&&r.once)return pr(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)dr(e,t[s],n,r,i);return null}return n=br(n),e&&e[Zn]?e.O(t,n,vn(r)?!!r.capture:!!r,i):fr(e,t,n,!1,r,i)}function fr(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=vn(i)?!!i.capture:!!i,a=wr(e);if(a||(e[hr]=a=new ar(e)),(n=a.add(t,n,r,o,s)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}const t=vr;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)Rn||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(yr(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function pr(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)pr(e,t[s],n,r,i);return null}return n=br(n),e&&e[Zn]?e.P(t,n,vn(r)?!!r.capture:!!r,i):fr(e,t,n,!0,r,i)}function gr(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)gr(e,t[s],n,r,i);else r=vn(r)?!!r.capture:!!r,n=br(n),e&&e[Zn]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=ur(s=e.g[t],n,r,i))&&(nr(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=wr(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ur(t,n,r,i)),(n=-1<e?t[e]:null)&&mr(n))}function mr(e){if("number"!=typeof e&&e&&!e.fa){var t=e.src;if(t&&t[Zn])cr(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(yr(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=wr(t))?(cr(n,e),0==n.h&&(n.src=null,t[hr]=null)):nr(e)}}}function yr(e){return e in lr?lr[e]:lr[e]="on"+e}function vr(e,t){if(e.fa)e=!0;else{t=new Xn(t,this);var n=e.listener,r=e.la||e.src;e.ia&&mr(e),e=n.call(r,t)}return e}function wr(e){return(e=e[hr])instanceof ar?e:null}var _r="__closure_events_fn_"+(1e9*Math.random()>>>0);function br(e){return"function"==typeof e?e:(e[_r]||(e[_r]=function(t){return e.handleEvent(t)}),e[_r])}function Er(){Cn.call(this),this.i=new ar(this),this.S=this,this.J=null}function Ir(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,"string"==typeof t)t=new Dn(t,e);else if(t instanceof Dn)t.target=t.target||e;else{var i=t;or(t=new Dn(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Tr(o,r,!0,t)&&i}if(i=Tr(o=t.g=e,r,!0,t)&&i,i=Tr(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=Tr(o=t.g=n[s],r,!1,t)&&i}function Tr(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&cr(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}Sn(Er,Cn),Er.prototype[Zn]=!0,Er.prototype.removeEventListener=function(e,t,n,r){gr(this,e,t,n,r)},Er.prototype.N=function(){if(Er.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)nr(n[r]);delete t.g[e],t.h--}}this.J=null},Er.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Er.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Sr=mn.JSON.stringify;function Cr(){var e=Pr;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var Ar=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new kr),(e=>e.reset()));class kr{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Nr(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Dr(e){mn.setTimeout((()=>{throw e}),0)}let Rr,Or=!1,Pr=new class{constructor(){this.h=this.g=null}add(e,t){const n=Ar.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},Lr=()=>{const e=mn.Promise.resolve(void 0);Rr=()=>{e.then(xr)}};var xr=()=>{for(var e;e=Cr();){try{e.h.call(e.g)}catch(e){Dr(e)}var t=Ar;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Or=!1};function Mr(e,t){Er.call(this),this.h=e||1,this.g=t||mn,this.j=In(this.qb,this),this.l=Date.now()}function Ur(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function Fr(e,t,n){if("function"==typeof e)n&&(e=In(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=In(e.handleEvent,e)}return 2147483647<Number(t)?-1:mn.setTimeout(e,t||0)}function Vr(e){e.g=Fr((()=>{e.g=null,e.i&&(e.i=!1,Vr(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}Sn(Mr,Er),(dn=Mr.prototype).ga=!1,dn.T=null,dn.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ir(this,"tick"),this.ga&&(Ur(this),this.start()))}},dn.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},dn.N=function(){Mr.$.N.call(this),Ur(this),delete this.g};class jr extends Cn{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Vr(this)}N(){super.N(),this.g&&(mn.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Br(e){Cn.call(this),this.h=e,this.g={}}Sn(Br,Cn);var qr=[];function $r(e,t,n,r){Array.isArray(n)||(n&&(qr[0]=n.toString()),n=qr);for(var i=0;i<n.length;i++){var s=dr(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function zr(e){rr(e.g,(function(e,t){this.g.hasOwnProperty(t)&&mr(e)}),e),e.g={}}function Kr(){this.g=!0}function Hr(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Sr(n)}catch(e){return t}}(e,n)+(r?" "+r:"")}))}Br.prototype.N=function(){Br.$.N.call(this),zr(this)},Br.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Kr.prototype.Ea=function(){this.g=!1},Kr.prototype.info=function(){};var Gr={},Wr=null;function Qr(){return Wr=Wr||new Er}function Jr(e){Dn.call(this,Gr.Ta,e)}function Xr(e){const t=Qr();Ir(t,new Jr(t))}function Yr(e,t){Dn.call(this,Gr.STAT_EVENT,e),this.stat=t}function Zr(e){const t=Qr();Ir(t,new Yr(t,e))}function ei(e,t){Dn.call(this,Gr.Ua,e),this.size=t}function ti(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return mn.setTimeout((function(){e()}),t)}Gr.Ta="serverreachability",Sn(Jr,Dn),Gr.STAT_EVENT="statevent",Sn(Yr,Dn),Gr.Ua="timingevent",Sn(ei,Dn);var ni={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ri={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ii(){}function si(e){return e.h||(e.h=e.i())}function oi(){}ii.prototype.h=null;var ai,ci={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ui(){Dn.call(this,"d")}function hi(){Dn.call(this,"c")}function li(){}function di(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Br(this),this.P=pi,e=qn?125:void 0,this.V=new Mr(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new fi}function fi(){this.i=null,this.g="",this.h=!1}Sn(ui,Dn),Sn(hi,Dn),Sn(li,ii),li.prototype.g=function(){return new XMLHttpRequest},li.prototype.i=function(){return{}},ai=new li;var pi=45e3,gi={},mi={};function yi(e,t,n){e.L=1,e.A=Mi(Ri(t)),e.u=n,e.S=!0,vi(e,null)}function vi(e,t){e.G=Date.now(),Ei(e),e.B=Ri(e.A);var n=e.B,r=e.W;Array.isArray(r)||(r=[String(r)]),Qi(n.i,"t",r),e.o=0,n=e.l.J,e.h=new fi,e.g=Qs(e.l,n?t:null,!e.u),0<e.O&&(e.M=new jr(In(e.Pa,e,e.g),e.O)),$r(e.U,e.g,"readystatechange",e.nb),t=e.I?ir(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),Xr(),function(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&"type"==l[1]?o+(h+"=")+u+"&":o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.v,e.B,e.m,e.W,e.u)}function wi(e){return!!e.g&&("GET"==e.v&&2!=e.L&&e.l.Ha)}function _i(e,t,n){let r,i=!0;for(;!e.J&&e.o<n.length;){if(r=bi(e,n),r==mi){4==t&&(e.s=4,Zr(14),i=!1),Hr(e.j,e.m,null,"[Incomplete Response]");break}if(r==gi){e.s=4,Zr(15),Hr(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Hr(e.j,e.m,r,null),Ai(e,r)}wi(e)&&0!=e.o&&(e.h.g=e.h.g.slice(e.o),e.o=0),4!=t||0!=n.length||e.h.h||(e.s=1,Zr(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.ba&&(e.ba=!0,(t=e.l).g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Bs(t),t.M=!0,Zr(11))):(Hr(e.j,e.m,n,"[Invalid Chunked Response]"),Ci(e),Si(e))}function bi(e,t){var n=e.o,r=t.indexOf("\n",n);return-1==r?mi:(n=Number(t.substring(n,r)),isNaN(n)?gi:(r+=1)+n>t.length?mi:(t=t.slice(r,r+n),e.o=r+n,t))}function Ei(e){e.Y=Date.now()+e.P,Ii(e,e.P)}function Ii(e,t){if(null!=e.C)throw Error("WatchDog timer not null");e.C=ti(In(e.lb,e),t)}function Ti(e){e.C&&(mn.clearTimeout(e.C),e.C=null)}function Si(e){0==e.l.H||e.J||zs(e.l,e)}function Ci(e){Ti(e);var t=e.M;t&&"function"==typeof t.sa&&t.sa(),e.M=null,Ur(e.V),zr(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Ai(e,t){try{var n=e.l;if(0!=n.H&&(n.g==e||ns(n.i,e)))if(!e.K&&ns(n.i,e)&&3==n.H){try{var r=n.Ja.g.parse(t)}catch(e){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.G+3e3<e.G))break e;$s(n),Ps(n)}js(n),Zr(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&0==n.A&&!n.v&&(n.v=ti(In(n.ib,n),6e3));if(1>=ts(n.i)&&n.oa){try{n.oa()}catch(e){}n.oa=void 0}}else Hs(n,11)}else if((e.K||n.g==e)&&$s(n),!On(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],2==n.H)if("c"==u[0]){n.K=u[1],n.pa=u[2];const t=u[3];null!=t&&(n.ra=t,n.l.info("VER="+n.ra));const i=u[4];null!=i&&(n.Ga=i,n.l.info("SVER="+n.Ga));const h=u[5];null!=h&&"number"==typeof h&&0<h&&(r=1.5*h,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const l=e.g;if(l){const e=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.i;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(rs(s,s.h),s.h=null))}if(r.F){const e=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.Da=e,xi(r.I,r.F,e))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms"));var o=e;if((r=n).wa=Ws(r,r.J?r.pa:null,r.Y),o.K){is(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(Ti(a),Ei(a)),r.g=o}else Vs(r);0<n.j.length&&xs(n)}else"stop"!=u[0]&&"close"!=u[0]||Hs(n,7);else 3==n.H&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Hs(n,7):Os(n):"noop"!=u[0]&&n.h&&n.h.Aa(u),n.A=0)}Xr()}catch(e){}}function ki(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(yn(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(yn(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}(e),r=function(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(yn(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}(dn=di.prototype).setTimeout=function(e){this.P=e},dn.nb=function(e){e=e.target;const t=this.M;t&&3==Cs(e)?t.l():this.Pa(e)},dn.Pa=function(e){try{if(e==this.g)e:{const h=Cs(this.g);var t=this.g.Ia();this.g.da();if(!(3>h)&&(3!=h||qn||this.g&&(this.h.h||this.g.ja()||As(this.g)))){this.J||4!=h||7==t||Xr(),Ti(this);var n=this.g.da();this.ca=n;t:if(wi(this)){var r=As(this.g);e="";var i=r.length,s=4==Cs(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Ci(this),Si(this);var o="";break t}this.h.i=new mn.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.length=0,this.h.g+=e,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,function(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}(this.j,this.v,this.B,this.m,this.W,h,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!On(a)){var u=a;break t}}u=null}if(!(n=u)){this.i=!1,this.s=3,Zr(12),Ci(this),Si(this);break e}Hr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ai(this,n)}this.S?(_i(this,h,o),qn&&this.i&&3==h&&($r(this.U,this.V,"tick",this.mb),this.V.start())):(Hr(this.j,this.m,o,null),Ai(this,o)),4==h&&Ci(this),this.i&&!this.J&&(4==h?zs(this.l,this):(this.i=!1,Ei(this)))}else(function(e){const t={};e=(e.g&&2<=Cs(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(On(e[r]))continue;var n=Nr(e[r]);const i=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}!function(e,t){for(const n in e)t.call(void 0,e[n],n,e)}(t,(function(e){return e.join(", ")}))})(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.s=3,Zr(12)):(this.s=0,Zr(13)),Ci(this),Si(this)}}}catch(e){}},dn.mb=function(){if(this.g){var e=Cs(this.g),t=this.g.ja();this.o<t.length&&(Ti(this),_i(this,e,t),this.i&&4!=e&&Ei(this))}},dn.cancel=function(){this.J=!0,Ci(this)},dn.lb=function(){this.C=null;const e=Date.now();0<=e-this.Y?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.B),2!=this.L&&(Xr(),Zr(17)),Ci(this),this.s=2,Si(this)):Ii(this,this.Y-e)};var Ni=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Di(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Di){this.h=e.h,Oi(this,e.j),this.s=e.s,this.g=e.g,Pi(this,e.m),this.l=e.l;var t=e.i,n=new Ki;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Li(this,n),this.o=e.o}else e&&(t=String(e).match(Ni))?(this.h=!1,Oi(this,t[1]||"",!0),this.s=Ui(t[2]||""),this.g=Ui(t[3]||"",!0),Pi(this,t[4]),this.l=Ui(t[5]||"",!0),Li(this,t[6]||"",!0),this.o=Ui(t[7]||"")):(this.h=!1,this.i=new Ki(null,this.h))}function Ri(e){return new Di(e)}function Oi(e,t,n){e.j=n?Ui(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Pi(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Li(e,t,n){t instanceof Ki?(e.i=t,function(e,t){t&&!e.j&&(Hi(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Gi(this,t),Qi(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=Fi(t,$i)),e.i=new Ki(t,e.h))}function xi(e,t,n){e.i.set(t,n)}function Mi(e){return xi(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Ui(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Fi(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,Vi),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Vi(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}Di.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Fi(t,ji,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Fi(t,ji,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Fi(n,"/"==n.charAt(0)?qi:Bi,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Fi(n,zi)),e.join("")};var ji=/[#\/\?@]/g,Bi=/[#\?:]/g,qi=/[#\?]/g,$i=/[#\?@]/g,zi=/#/g;function Ki(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Hi(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Gi(e,t){Hi(e),t=Ji(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Wi(e,t){return Hi(e),t=Ji(e,t),e.g.has(t)}function Qi(e,t,n){Gi(e,t),0<n.length&&(e.i=null,e.g.set(Ji(e,t),kn(n)),e.h+=n.length)}function Ji(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(dn=Ki.prototype).add=function(e,t){Hi(this),this.i=null,e=Ji(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},dn.forEach=function(e,t){Hi(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},dn.ta=function(){Hi(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},dn.Z=function(e){Hi(this);let t=[];if("string"==typeof e)Wi(this,e)&&(t=t.concat(this.g.get(Ji(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},dn.set=function(e,t){return Hi(this),this.i=null,Wi(this,e=Ji(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},dn.get=function(e,t){return e&&0<(e=this.Z(e)).length?String(e[0]):t},dn.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};var Xi=class{constructor(e,t){this.g=e,this.map=t}};function Yi(e){this.l=e||Zi,mn.PerformanceNavigationTiming?e=0<(e=mn.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(mn.g&&mn.g.Ka&&mn.g.Ka()&&mn.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Zi=10;function es(e){return!!e.h||!!e.g&&e.g.size>=e.j}function ts(e){return e.h?1:e.g?e.g.size:0}function ns(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function rs(e,t){e.g?e.g.add(t):e.h=t}function is(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function ss(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return kn(e.i)}Yi.prototype.cancel=function(){if(this.i=ss(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var os=class{stringify(e){return mn.JSON.stringify(e,void 0)}parse(e){return mn.JSON.parse(e,void 0)}};function as(){this.g=new os}function cs(e,t,n){const r=n||"";try{ki(e,(function(e,n){let i=e;vn(e)&&(i=Sr(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}function us(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(e){}}function hs(e){this.l=e.ec||null,this.j=e.ob||!1}function ls(e,t){Er.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=ds,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Sn(hs,ii),hs.prototype.g=function(){return new ls(this.l,this.j)},hs.prototype.i=function(e){return function(){return e}}({}),Sn(ls,Er);var ds=0;function fs(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function ps(e){e.readyState=4,e.l=null,e.j=null,e.A=null,gs(e)}function gs(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(dn=ls.prototype).open=function(e,t){if(this.readyState!=ds)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,gs(this)},dn.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||mn).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},dn.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,ps(this)),this.readyState=ds},dn.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,gs(this)),this.g&&(this.readyState=3,gs(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==mn.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;fs(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))},dn.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?ps(this):gs(this),3==this.readyState&&fs(this)}},dn.Za=function(e){this.g&&(this.response=this.responseText=e,ps(this))},dn.Ya=function(e){this.g&&(this.response=e,ps(this))},dn.ka=function(){this.g&&ps(this)},dn.setRequestHeader=function(e,t){this.v.append(e,t)},dn.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},dn.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(ls.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var ms=mn.JSON.parse;function ys(e){Er.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=vs,this.L=this.M=!1}Sn(ys,Er);var vs="",ws=/^https?$/i,_s=["POST","PUT"];function bs(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Es(e),Ts(e)}function Es(e){e.F||(e.F=!0,Ir(e,"complete"),Ir(e,"error"))}function Is(e){if(e.h&&void 0!==gn&&(!e.C[1]||4!=Cs(e)||2!=e.da()))if(e.v&&4==Cs(e))Fr(e.La,0,e);else if(Ir(e,"readystatechange"),4==Cs(e)){e.h=!1;try{const o=e.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===o){var i=String(e.I).match(Ni)[1]||null;!i&&mn.self&&mn.self.location&&(i=mn.self.location.protocol.slice(0,-1)),r=!ws.test(i?i.toLowerCase():"")}n=r}if(n)Ir(e,"complete"),Ir(e,"success");else{e.m=6;try{var s=2<Cs(e)?e.g.statusText:""}catch(e){s=""}e.j=s+" ["+e.da()+"]",Es(e)}}finally{Ts(e)}}}function Ts(e,t){if(e.g){Ss(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||Ir(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function Ss(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(mn.clearTimeout(e.A),e.A=null)}function Cs(e){return e.g?e.g.readyState:0}function As(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case vs:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function ks(e){let t="";return rr(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Ns(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=ks(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):xi(e,t,n))}function Ds(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Rs(e){this.Ga=0,this.j=[],this.l=new Kr,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ds("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ds("baseRetryDelayMs",5e3,e),this.hb=Ds("retryDelaySeedMs",1e4,e),this.eb=Ds("forwardChannelMaxRetries",2,e),this.xa=Ds("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Yi(e&&e.concurrentRequestLimit),this.Ja=new as,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function Os(e){if(Ls(e),3==e.H){var t=e.W++,n=Ri(e.I);if(xi(n,"SID",e.K),xi(n,"RID",t),xi(n,"TYPE","terminate"),Us(e,n),(t=new di(e,e.l,t)).L=2,t.A=Mi(Ri(n)),n=!1,mn.navigator&&mn.navigator.sendBeacon)try{n=mn.navigator.sendBeacon(t.A.toString(),"")}catch(e){}!n&&mn.Image&&((new Image).src=t.A,n=!0),n||(t.g=Qs(t.l,null),t.g.ha(t.A)),t.G=Date.now(),Ei(t)}Gs(e)}function Ps(e){e.g&&(Bs(e),e.g.cancel(),e.g=null)}function Ls(e){Ps(e),e.u&&(mn.clearTimeout(e.u),e.u=null),$s(e),e.i.cancel(),e.m&&("number"==typeof e.m&&mn.clearTimeout(e.m),e.m=null)}function xs(e){if(!es(e.i)&&!e.m){e.m=!0;var t=e.Na;Rr||Lr(),Or||(Rr(),Or=!0),Pr.add(t,e),e.C=0}}function Ms(e,t){var n;n=t?t.m:e.W++;const r=Ri(e.I);xi(r,"SID",e.K),xi(r,"RID",n),xi(r,"AID",e.V),Us(e,r),e.o&&e.s&&Ns(r,e.o,e.s),n=new di(e,e.l,n,e.C+1),null===e.o&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Fs(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),rs(e.i,n),yi(n,r,t)}function Us(e,t){e.na&&rr(e.na,(function(e,n){xi(t,n,e)})),e.h&&ki({},(function(e,n){xi(t,n,e)}))}function Fs(e,t,n){n=Math.min(e.j.length,n);var r=e.h?In(e.h.Va,e.h,e):null;e:{var i=e.j;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].g;const a=i[o].map;if(n-=t,0>n)t=Math.max(0,i[o].g-100),s=!1;else try{cs(a,e,"req"+n+"_")}catch(e){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function Vs(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Rr||Lr(),Or||(Rr(),Or=!0),Pr.add(t,e),e.A=0}}function js(e){return!(e.g||e.u||3<=e.A)&&(e.ba++,e.u=ti(In(e.Ma,e),Ks(e,e.A)),e.A++,!0)}function Bs(e){null!=e.B&&(mn.clearTimeout(e.B),e.B=null)}function qs(e){e.g=new di(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=Ri(e.wa);xi(t,"RID","rpc"),xi(t,"SID",e.K),xi(t,"AID",e.V),xi(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&xi(t,"TO",e.qa),xi(t,"TYPE","xmlhttp"),Us(e,t),e.o&&e.s&&Ns(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=Mi(Ri(t)),n.u=null,n.S=!0,vi(n,e)}function $s(e){null!=e.v&&(mn.clearTimeout(e.v),e.v=null)}function zs(e,t){var n=null;if(e.g==t){$s(e),Bs(e),e.g=null;var r=2}else{if(!ns(e.i,t))return;n=t.F,is(e.i,t),r=1}if(0!=e.H)if(t.i)if(1==r){n=t.u?t.u.length:0,t=Date.now()-t.G;var i=e.C;Ir(r=Qr(),new ei(r,n)),xs(e)}else Vs(e);else if(3==(i=t.s)||0==i&&0<t.ca||!(1==r&&function(e,t){return!(ts(e.i)>=e.i.j-(e.m?1:0)||(e.m?(e.j=t.F.concat(e.j),0):1==e.H||2==e.H||e.C>=(e.cb?0:e.eb)||(e.m=ti(In(e.Na,e,t),Ks(e,e.C)),e.C++,0)))}(e,t)||2==r&&js(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Hs(e,5);break;case 4:Hs(e,10);break;case 3:Hs(e,6);break;default:Hs(e,2)}}function Ks(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Hs(e,t){if(e.l.info("Error code "+t),2==t){var n=null;e.h&&(n=null);var r=In(e.pb,e);n||(n=new Di("//www.google.com/images/cleardot.gif"),mn.location&&"http"==mn.location.protocol||Oi(n,"https"),Mi(n)),function(e,t){const n=new Kr;if(mn.Image){const r=new Image;r.onload=Tn(us,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Tn(us,n,r,"TestLoadImage: error",!1,t),r.onabort=Tn(us,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Tn(us,n,r,"TestLoadImage: timeout",!1,t),mn.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(n.toString(),r)}else Zr(2);e.H=0,e.h&&e.h.za(t),Gs(e),Ls(e)}function Gs(e){if(e.H=0,e.ma=[],e.h){const t=ss(e.i);0==t.length&&0==e.j.length||(Nn(e.ma,t),Nn(e.ma,e.j),e.i.i.length=0,kn(e.j),e.j.length=0),e.h.ya()}}function Ws(e,t,n){var r=n instanceof Di?Ri(n):new Di(n);if(""!=r.g)t&&(r.g=t+"."+r.g),Pi(r,r.m);else{var i=mn.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Di(null);r&&Oi(s,r),t&&(s.g=t),i&&Pi(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&xi(r,n,t),xi(r,"VER",e.ra),Us(e,r),r}function Qs(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=e.Ha&&!e.va?new ys(new hs({ob:n})):new ys(e.va)).Oa(e.J),t}function Js(){}function Xs(){if(jn&&!(10<=Number(Jn)))throw Error("Environmental error: no available transport.")}function Ys(e,t){Er.call(this),this.g=new Rs(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!On(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!On(t)&&(this.g.F=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new to(this)}function Zs(e){ui.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function eo(){hi.call(this),this.status=1}function to(e){this.g=e}function no(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function ro(e,t,n){n||(n=0);var r=Array(16);if("string"==typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;o=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=n+(o<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^n&(i^s))+r[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^n&(i^s))+r[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^n&(i^s))+r[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=t+(i^s&(n^i))+r[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^s&(n^i))+r[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^s&(n^i))+r[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^s&(n^i))+r[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=t+(n^i^s)+r[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^i^s)+r[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^i^s)+r[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^i^s)+r[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=t+(i^(n|~s))+r[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(s|~n))+r[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~t))+r[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=t+(i^(n|~s))+r[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(s|~n))+r[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~t))+r[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=t+(i^(n|~s))+r[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(s|~n))+r[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~t))+r[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((s=(t=n+((o=t+(i^(n|~s))+r[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((i=s+((o=i+(t^(s|~n))+r[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function io(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=0|e[i];r&&s==t||(n[i]=s,r=!1)}this.g=n}(dn=ys.prototype).Oa=function(e){this.M=e},dn.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ai.g(),this.C=this.u?si(this.u):si(ai),this.g.onreadystatechange=In(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(e){return void bs(this,e)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),i=mn.FormData&&e instanceof mn.FormData,!(0<=An(_s,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[e,t]of n)this.g.setRequestHeader(e,t);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Ss(this),0<this.B&&((this.L=function(e){return jn&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=In(this.ua,this)):this.A=Fr(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){bs(this,e)}},dn.ua=function(){void 0!==gn&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ir(this,"timeout"),this.abort(8))},dn.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Ir(this,"complete"),Ir(this,"abort"),Ts(this))},dn.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ts(this,!0)),ys.$.N.call(this)},dn.La=function(){this.s||(this.G||this.v||this.l?Is(this):this.kb())},dn.kb=function(){Is(this)},dn.isActive=function(){return!!this.g},dn.da=function(){try{return 2<Cs(this)?this.g.status:-1}catch(e){return-1}},dn.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},dn.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),ms(t)}},dn.Ia=function(){return this.m},dn.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(dn=Rs.prototype).ra=8,dn.H=1,dn.Na=function(e){if(this.m)if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new di(this,this.l,e);let s=this.s;if(this.U&&(s?(s=ir(s),or(s,this.U)):s=this.U),null!==this.o||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){var r=this.j[n];if(void 0===(r="__data__"in r.map&&"string"==typeof(r=r.map.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Fs(this,i,t),xi(n=Ri(this.I),"RID",e),xi(n,"CVER",22),this.F&&xi(n,"X-HTTP-Session-Id",this.F),Us(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(ks(s)))+"&"+t:this.o&&Ns(n,this.o,s)),rs(this.i,i),this.bb&&xi(n,"TYPE","init"),this.P?(xi(n,"$req",t),xi(n,"SID","null"),i.aa=!0,yi(i,n,null)):yi(i,n,t),this.H=2}}else 3==this.H&&(e?Ms(this,e):0==this.j.length||es(this.i)||Ms(this))},dn.Ma=function(){if(this.u=null,qs(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=ti(In(this.jb,this),e)}},dn.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Zr(10),Ps(this),qs(this))},dn.ib=function(){null!=this.v&&(this.v=null,Ps(this),js(this),Zr(19))},dn.pb=function(e){e?(this.l.info("Successfully pinged google.com"),Zr(2)):(this.l.info("Failed to ping google.com"),Zr(1))},dn.isActive=function(){return!!this.h&&this.h.isActive(this)},(dn=Js.prototype).Ba=function(){},dn.Aa=function(){},dn.za=function(){},dn.ya=function(){},dn.isActive=function(){return!0},dn.Va=function(){},Xs.prototype.g=function(e,t){return new Ys(e,t)},Sn(Ys,Er),Ys.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;Zr(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Ws(e,null,e.Y),xs(e)},Ys.prototype.close=function(){Os(this.g)},Ys.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=Sr(e),e=n);t.j.push(new Xi(t.fb++,e)),3==t.H&&xs(t)},Ys.prototype.N=function(){this.g.h=null,delete this.j,Os(this.g),delete this.g,Ys.$.N.call(this)},Sn(Zs,ui),Sn(eo,hi),Sn(to,Js),to.prototype.Ba=function(){Ir(this.g,"a")},to.prototype.Aa=function(e){Ir(this.g,new Zs(e))},to.prototype.za=function(e){Ir(this.g,new eo)},to.prototype.ya=function(){Ir(this.g,"b")},Sn(no,(function(){this.blockSize=-1})),no.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},no.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(0==i)for(;s<=n;)ro(this,e,s),s+=this.blockSize;if("string"==typeof e){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){ro(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){ro(this,r),i=0;break}}this.h=i,this.i+=t},no.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var so={};function oo(e){return-128<=e&&128>e?function(e,t){var n=so;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}(e,(function(e){return new io([0|e],0>e?-1:0)})):new io([0|e],0>e?-1:0)}function ao(e){if(isNaN(e)||!isFinite(e))return uo;if(0>e)return go(ao(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=co;return new io(t,0)}var co=4294967296,uo=oo(0),ho=oo(1),lo=oo(16777216);function fo(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function po(e){return-1==e.h}function go(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new io(n,~e.h).add(ho)}function mo(e,t){return e.add(go(t))}function yo(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function vo(e,t){this.g=e,this.h=t}function wo(e,t){if(fo(t))throw Error("division by zero");if(fo(e))return new vo(uo,uo);if(po(e))return t=wo(go(e),t),new vo(go(t.g),go(t.h));if(po(t))return t=wo(e,go(t)),new vo(go(t.g),t.h);if(30<e.g.length){if(po(e)||po(t))throw Error("slowDivide_ only works with positive integers.");for(var n=ho,r=t;0>=r.X(e);)n=_o(n),r=_o(r);var i=bo(n,1),s=bo(r,1);for(r=bo(r,2),n=bo(n,2);!fo(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=bo(r,1),n=bo(n,1)}return t=mo(e,i.R(t)),new vo(i,t)}for(i=uo;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=48>=(r=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,r-48),o=(s=ao(n)).R(t);po(o)||0<o.X(e);)o=(s=ao(n-=r)).R(t);fo(s)&&(s=ho),i=i.add(s),e=mo(e,o)}return new vo(i,e)}function _o(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new io(n,e.h)}function bo(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new io(i,e.h)}(dn=io.prototype).ea=function(){if(po(this))return-go(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:co+r)*t,t*=co}return e},dn.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(fo(this))return"0";if(po(this))return"-"+go(this).toString(e);for(var t=ao(Math.pow(e,6)),n=this,r="";;){var i=wo(n,t).g,s=((0<(n=mo(n,i.R(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(fo(n=i))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},dn.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},dn.X=function(e){return po(e=mo(this,e))?-1:fo(e)?0:1},dn.abs=function(){return po(this)?go(this):this},dn.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(65535&this.D(i))+(65535&e.D(i)),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new io(n,-2147483648&n[n.length-1]?-1:0)},dn.R=function(e){if(fo(this)||fo(e))return uo;if(po(this))return po(e)?go(this).R(go(e)):go(go(this).R(e));if(po(e))return go(this.R(go(e)));if(0>this.X(lo)&&0>e.X(lo))return ao(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=65535&this.D(r),a=e.D(i)>>>16,c=65535&e.D(i);n[2*r+2*i]+=o*c,yo(n,2*r+2*i),n[2*r+2*i+1]+=s*c,yo(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,yo(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,yo(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new io(n,0)},dn.gb=function(e){return wo(this,e).h},dn.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new io(n,this.h&e.h)},dn.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new io(n,this.h|e.h)},dn.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new io(n,this.h^e.h)},Xs.prototype.createWebChannel=Xs.prototype.g,Ys.prototype.send=Ys.prototype.u,Ys.prototype.open=Ys.prototype.m,Ys.prototype.close=Ys.prototype.close,ni.NO_ERROR=0,ni.TIMEOUT=8,ni.HTTP_ERROR=6,ri.COMPLETE="complete",oi.EventType=ci,ci.OPEN="a",ci.CLOSE="b",ci.ERROR="c",ci.MESSAGE="d",Er.prototype.listen=Er.prototype.O,ys.prototype.listenOnce=ys.prototype.P,ys.prototype.getLastError=ys.prototype.Sa,ys.prototype.getLastErrorCode=ys.prototype.Ia,ys.prototype.getStatus=ys.prototype.da,ys.prototype.getResponseJson=ys.prototype.Wa,ys.prototype.getResponseText=ys.prototype.ja,ys.prototype.send=ys.prototype.ha,ys.prototype.setWithCredentials=ys.prototype.Oa,no.prototype.digest=no.prototype.l,no.prototype.reset=no.prototype.reset,no.prototype.update=no.prototype.j,io.prototype.add=io.prototype.add,io.prototype.multiply=io.prototype.R,io.prototype.modulo=io.prototype.gb,io.prototype.compare=io.prototype.X,io.prototype.toNumber=io.prototype.ea,io.prototype.toString=io.prototype.toString,io.prototype.getBits=io.prototype.D,io.fromNumber=ao,io.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return go(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=ao(Math.pow(n,8)),i=uo,s=0;s<t.length;s+=8){var o=Math.min(8,t.length-s),a=parseInt(t.substring(s,s+o),n);8>o?(o=ao(Math.pow(n,o)),i=i.R(o).add(ao(a))):i=(i=i.R(r)).add(ao(a))}return i};var Eo=pn.createWebChannelTransport=function(){return new Xs},Io=pn.getStatEventTarget=function(){return Qr()},To=pn.ErrorCode=ni,So=pn.EventType=ri,Co=pn.Event=Gr,Ao=pn.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},ko=(pn.FetchXmlHttpFactory=hs,pn.WebChannel=oi),No=pn.XhrIo=ys,Do=pn.Md5=no,Ro=pn.Integer=io;const Oo="@firebase/firestore";
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
 */class Po{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Po.UNAUTHENTICATED=new Po(null),Po.GOOGLE_CREDENTIALS=new Po("google-credentials-uid"),Po.FIRST_PARTY=new Po("first-party-uid"),Po.MOCK_USER=new Po("mock-user");
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
let Lo="10.9.0";
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
 */const xo=new r.Vy("@firebase/firestore");function Mo(){return xo.logLevel}function Uo(e,...t){if(xo.logLevel<=r.$b.DEBUG){const n=t.map(jo);xo.debug(`Firestore (${Lo}): ${e}`,...n)}}function Fo(e,...t){if(xo.logLevel<=r.$b.ERROR){const n=t.map(jo);xo.error(`Firestore (${Lo}): ${e}`,...n)}}function Vo(e,...t){if(xo.logLevel<=r.$b.WARN){const n=t.map(jo);xo.warn(`Firestore (${Lo}): ${e}`,...n)}}function jo(e){if("string"==typeof e)return e;try{
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
 */function Bo(e="Unexpected state"){const t=`FIRESTORE (${Lo}) INTERNAL ASSERTION FAILED: `+e;throw Fo(t),new Error(t)}function qo(e,t){e||Bo()}function $o(e,t){return e}
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
 */const zo={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ko extends e.g{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class Ho{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
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
 */class Go{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Wo{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Po.UNAUTHENTICATED)))}shutdown(){}}class Qo{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Jo{constructor(e){this.t=e,this.currentUser=Po.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new Ho;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ho,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{Uo("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Uo("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ho)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Uo("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(qo("string"==typeof t.accessToken),new Go(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return qo(null===e||"string"==typeof e),new Po(e)}}class Xo{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=Po.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Yo{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new Xo(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable((()=>t(Po.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Zo{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ea{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const n=e=>{null!=e.error&&Uo("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.R;return this.R=e.token,Uo("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{Uo("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.A.getImmediate({optional:!0});e?r(e):Uo("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(qo("string"==typeof e.token),this.R=e.token,new Zo(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
function ta(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
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
 */class na{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(256/62);let n="";for(;n.length<20;){const r=ta(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%62))}return n}}function ra(e,t){return e<t?-1:e>t?1:0}function ia(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
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
class sa{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Ko(zo.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Ko(zo.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Ko(zo.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Ko(zo.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return sa.fromMillis(Date.now())}static fromDate(e){return sa.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new sa(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ra(this.nanoseconds,e.nanoseconds):ra(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class oa{constructor(e){this.timestamp=e}static fromTimestamp(e){return new oa(e)}static min(){return new oa(new sa(0,0))}static max(){return new oa(new sa(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */class aa{constructor(e,t,n){void 0===t?t=0:t>e.length&&Bo(),void 0===n?n=e.length-t:n>e.length-t&&Bo(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===aa.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof aa?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ca extends aa{construct(e,t,n){return new ca(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Ko(zo.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new ca(t)}static emptyPath(){return new ca([])}}const ua=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ha extends aa{construct(e,t,n){return new ha(e,t,n)}static isValidIdentifier(e){return ua.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ha.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new ha(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new Ko(zo.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new Ko(zo.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Ko(zo.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new Ko(zo.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ha(t)}static emptyPath(){return new ha([])}}
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
 */class la{constructor(e){this.path=e}static fromPath(e){return new la(ca.fromString(e))}static fromName(e){return new la(ca.fromString(e).popFirst(5))}static empty(){return new la(ca.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===ca.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return ca.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new la(new ca(e.slice()))}}
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
 */class da{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}da.UNKNOWN_ID=-1;function fa(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=oa.fromTimestamp(1e9===r?new sa(n+1,0):new sa(n,r));return new ga(i,la.empty(),t)}function pa(e){return new ga(e.readTime,e.key,-1)}class ga{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new ga(oa.min(),la.empty(),-1)}static max(){return new ga(oa.max(),la.empty(),-1)}}function ma(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=la.comparator(e.documentKey,t.documentKey),0!==n?n:ra(e.largestBatchId,t.largestBatchId)
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
 */)}const ya="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class va{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
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
 */async function wa(e){if(e.code!==zo.FAILED_PRECONDITION||e.message!==ya)throw e;Uo("LocalStore","Unexpectedly lost primary lease")}
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
 */class _a{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Bo(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new _a(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof _a?t:_a.resolve(t)}catch(e){return _a.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):_a.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):_a.reject(t)}static resolve(e){return new _a(((t,n)=>{t(e)}))}static reject(e){return new _a(((t,n)=>{n(e)}))}static waitFor(e){return new _a(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=_a.resolve(!1);for(const n of e)t=t.next((e=>e?_a.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new _a(((n,r)=>{const i=e.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;t(e[c]).next((e=>{s[c]=e,++o,o===i&&n(s)}),(e=>r(e)))}}))}static doWhile(e,t){return new _a(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}}
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
 */class ba{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new Ho,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new Ta(e,t.error)):this.V.resolve()},this.transaction.onerror=t=>{const n=Na(t.target.error);this.V.reject(new Ta(e,n))}}static open(e,t,n,r){try{return new ba(t,e.transaction(r,n))}catch(e){throw new Ta(t,e)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(Uo("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Ca(t)}}class Ea{constructor(t,n,r){this.name=t,this.version=n,this.p=r,12.2===Ea.S((0,e.ZQ)())&&Fo("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return Uo("SimpleDb","Removing database:",e),Aa(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!(0,e.zW)())return!1;if(Ea.C())return!0;const t=(0,e.ZQ)(),n=Ea.S(t),r=0<n&&n<10,i=Ea.v(t),s=0<i&&i<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||r||s)}static C(){var e;return"undefined"!=typeof process&&"YES"===(null===(e=process.__PRIVATE_env)||void 0===e?void 0:e.F)}static M(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static v(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async O(e){return this.db||(Uo("SimpleDb","Opening database:",this.name),this.db=await new Promise(((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{const n=e.target.result;t(n)},r.onblocked=()=>{n(new Ta(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{const r=t.target.error;"VersionError"===r.name?n(new Ko(zo.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new Ko(zo.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new Ta(e,r))},r.onupgradeneeded=e=>{Uo("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.p.N(t,r.transaction,e.oldVersion,this.version).next((()=>{Uo("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.L&&(this.db.onversionchange=e=>this.L(e)),this.db}B(e){this.L=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){const i="readonly"===t;let s=0;for(;;){++s;try{this.db=await this.O(e);const t=ba.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).next((e=>(t.g(),e))).catch((e=>(t.abort(e),_a.reject(e)))).toPromise();return s.catch((()=>{})),await t.m,s}catch(e){const t=e,n="FirebaseError"!==t.name&&s<3;if(Uo("SimpleDb","Transaction failed with error:",t.message,"Retrying:",n),this.close(),!n)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Ia{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return Aa(this.k.delete())}}class Ta extends Ko{constructor(e,t){super(zo.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Sa(e){return"IndexedDbTransactionError"===e.name}class Ca{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(Uo("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(Uo("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Aa(n)}add(e){return Uo("SimpleDb","ADD",this.store.name,e,e),Aa(this.store.add(e))}get(e){return Aa(this.store.get(e)).next((t=>(void 0===t&&(t=null),Uo("SimpleDb","GET",this.store.name,e,t),t)))}delete(e){return Uo("SimpleDb","DELETE",this.store.name,e),Aa(this.store.delete(e))}count(){return Uo("SimpleDb","COUNT",this.store.name),Aa(this.store.count())}W(e,t){const n=this.options(e,t),r=n.index?this.store.index(n.index):this.store;if("function"==typeof r.getAll){const e=r.getAll(n.range);return new _a(((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}}))}{const e=this.cursor(n),t=[];return this.G(e,((e,n)=>{t.push(n)})).next((()=>t))}}j(e,t){const n=this.store.getAll(e,null===t?void 0:t);return new _a(((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}}))}H(e,t){Uo("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.J=!1;const r=this.cursor(n);return this.G(r,((e,t,n)=>n.delete()))}Y(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.G(r,t)}Z(e){const t=this.cursor({});return new _a(((n,r)=>{t.onerror=e=>{const t=Na(e.target.error);r(t)},t.onsuccess=t=>{const r=t.target.result;r?e(r.primaryKey,r.value).next((e=>{e?r.continue():n()})):n()}}))}G(e,t){const n=[];return new _a(((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{const i=e.target.result;if(!i)return void r();const s=new Ia(i),o=t(i.primaryKey,i.value,s);if(o instanceof _a){const e=o.catch((e=>(s.done(),_a.reject(e))));n.push(e)}s.isDone?r():null===s.$?i.continue():i.continue(s.$)}})).next((()=>_a.waitFor(n)))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.J?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Aa(e){return new _a(((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=Na(e.target.error);n(t)}}))}let ka=!1;function Na(t){const n=Ea.S((0,e.ZQ)());if(n>=12.2&&n<13){const e="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(e)>=0){const t=new Ko("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ka||(ka=!0,setTimeout((()=>{throw t}),0)),t}}return t}
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
class Da{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.se(e),this.oe=e=>t.writeSequenceNumber(e))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}function Ra(e){return null==e}function Oa(e){return 0===e&&1/e==-1/0}function Pa(e){return"number"==typeof e&&Number.isInteger(e)&&!Oa(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
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
 */Da._e=-1;const La=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],xa=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Ma=xa;
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
function Ua(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Fa(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Va(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
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
 */class ja{constructor(e,t){this.comparator=e,this.root=t||qa.EMPTY}insert(e,t){return new ja(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,qa.BLACK,null,null))}remove(e){return new ja(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qa.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ba(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ba(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ba(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ba(this.root,e,this.comparator,!0)}}class Ba{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class qa{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:qa.RED,this.left=null!=r?r:qa.EMPTY,this.right=null!=i?i:qa.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new qa(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return qa.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return qa.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,qa.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,qa.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Bo();if(this.right.isRed())throw Bo();const e=this.left.check();if(e!==this.right.check())throw Bo();return e+(this.isRed()?0:1)}}qa.EMPTY=null,qa.RED=!0,qa.BLACK=!1,qa.EMPTY=new class{constructor(){this.size=0}get key(){throw Bo()}get value(){throw Bo()}get color(){throw Bo()}get left(){throw Bo()}get right(){throw Bo()}copy(e,t,n,r,i){return this}insert(e,t,n){return new qa(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class $a{constructor(e){this.comparator=e,this.data=new ja(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new za(this.data.getIterator())}getIteratorFrom(e){return new za(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof $a))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new $a(this.comparator);return t.data=e,t}}class za{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
class Ka{constructor(e){this.fields=e,e.sort(ha.comparator)}static empty(){return new Ka([])}unionWith(e){let t=new $a(ha.comparator);for(const e of this.fields)t=t.add(e);for(const n of e)t=t.add(n);return new Ka(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ia(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
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
 */class Ha extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
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
class Ga{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new Ha("Invalid base64 string: "+e):e}}(e);return new Ga(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Ga(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ra(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ga.EMPTY_BYTE_STRING=new Ga("");const Wa=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qa(e){if(qo(!!e),"string"==typeof e){let t=0;const n=Wa.exec(e);if(qo(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Ja(e.seconds),nanos:Ja(e.nanos)}}function Ja(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Xa(e){return"string"==typeof e?Ga.fromBase64String(e):Ga.fromUint8Array(e)}
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
 */function Ya(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Za(e){const t=e.mapValue.fields.__previous_value__;return Ya(t)?Za(t):t}function ec(e){const t=Qa(e.mapValue.fields.__local_write_time__.timestampValue);return new sa(t.seconds,t.nanos)}
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
 */class tc{constructor(e,t,n,r,i,s,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class nc{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new nc("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof nc&&e.projectId===this.projectId&&e.database===this.database}}
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
 */const rc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ic(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ya(e)?4:yc(e)?9007199254740991:10:Bo()}function sc(e,t){if(e===t)return!0;const n=ic(e);if(n!==ic(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return ec(e).isEqual(ec(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Qa(e.timestampValue),r=Qa(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Xa(e.bytesValue).isEqual(Xa(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Ja(e.geoPointValue.latitude)===Ja(t.geoPointValue.latitude)&&Ja(e.geoPointValue.longitude)===Ja(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Ja(e.integerValue)===Ja(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Ja(e.doubleValue),r=Ja(t.doubleValue);return n===r?Oa(n)===Oa(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return ia(e.arrayValue.values||[],t.arrayValue.values||[],sc);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Ua(n)!==Ua(r))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!sc(n[e],r[e])))return!1;return!0}(e,t);default:return Bo()}}function oc(e,t){return void 0!==(e.values||[]).find((e=>sc(e,t)))}function ac(e,t){if(e===t)return 0;const n=ic(e),r=ic(t);if(n!==r)return ra(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ra(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Ja(e.integerValue||e.doubleValue),r=Ja(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return cc(e.timestampValue,t.timestampValue);case 4:return cc(ec(e),ec(t));case 5:return ra(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Xa(e),r=Xa(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){const t=ra(n[e],r[e]);if(0!==t)return t}return ra(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=ra(Ja(e.latitude),Ja(t.latitude));return 0!==n?n:ra(Ja(e.longitude),Ja(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){const t=ac(n[e],r[e]);if(t)return t}return ra(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===rc.mapValue&&t===rc.mapValue)return 0;if(e===rc.mapValue)return 1;if(t===rc.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){const t=ra(r[e],s[e]);if(0!==t)return t;const o=ac(n[r[e]],i[s[e]]);if(0!==o)return o}return ra(r.length,s.length)}(e.mapValue,t.mapValue);default:throw Bo()}}function cc(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return ra(e,t);const n=Qa(e),r=Qa(t),i=ra(n.seconds,r.seconds);return 0!==i?i:ra(n.nanos,r.nanos)}function uc(e){return hc(e)}function hc(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Qa(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(e){return Xa(e).toBase64()}(e.bytesValue):"referenceValue"in e?function(e){return la.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=hc(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${hc(e.fields[i])}`;return n+"}"}(e.mapValue):Bo()}function lc(e){return!!e&&"integerValue"in e}function dc(e){return!!e&&"arrayValue"in e}function fc(e){return!!e&&"nullValue"in e}function pc(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function gc(e){return!!e&&"mapValue"in e}function mc(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Fa(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=mc(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=mc(e.arrayValue.values[n]);return t}return Object.assign({},e)}function yc(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
class vc{constructor(e){this.value=e}static empty(){return new vc({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!gc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=mc(t)}setAll(e){let t=ha.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=mc(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());gc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return sc(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];gc(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Fa(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new vc(mc(this.value))}}function wc(e){const t=[];return Fa(e.fields,((e,n)=>{const r=new ha([e]);if(gc(n)){const e=wc(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new Ka(t)
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
 */}class _c{constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new _c(e,0,oa.min(),oa.min(),oa.min(),vc.empty(),0)}static newFoundDocument(e,t,n,r){return new _c(e,1,t,oa.min(),n,r,0)}static newNoDocument(e,t){return new _c(e,2,t,oa.min(),oa.min(),vc.empty(),0)}static newUnknownDocument(e,t){return new _c(e,3,t,oa.min(),oa.min(),vc.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(oa.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=vc.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=vc.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=oa.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof _c&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new _c(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class bc{constructor(e,t){this.position=e,this.inclusive=t}}function Ec(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?la.comparator(la.fromName(o.referenceValue),n.key):ac(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Ic(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!sc(e.position[n],t.position[n]))return!1;return!0}
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
 */class Tc{constructor(e,t="asc"){this.field=e,this.dir=t}}function Sc(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
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
 */class Cc{}class Ac extends Cc{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new xc(e,t,n):"array-contains"===t?new Vc(e,n):"in"===t?new jc(e,n):"not-in"===t?new Bc(e,n):"array-contains-any"===t?new qc(e,n):new Ac(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new Mc(e,n):new Uc(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(ac(t,this.value)):null!==t&&ic(this.value)===ic(t)&&this.matchesComparison(ac(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Bo()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class kc extends Cc{constructor(e,t){super(),this.filters=e,this.op=t,this.ue=null}static create(e,t){return new kc(e,t)}matches(e){return Nc(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ue||(this.ue=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Nc(e){return"and"===e.op}function Dc(e){return Rc(e)&&Nc(e)}function Rc(e){for(const t of e.filters)if(t instanceof kc)return!1;return!0}function Oc(e){if(e instanceof Ac)return e.field.canonicalString()+e.op.toString()+uc(e.value);if(Dc(e))return e.filters.map((e=>Oc(e))).join(",");{const t=e.filters.map((e=>Oc(e))).join(",");return`${e.op}(${t})`}}function Pc(e,t){return e instanceof Ac?function(e,t){return t instanceof Ac&&e.op===t.op&&e.field.isEqual(t.field)&&sc(e.value,t.value)}(e,t):e instanceof kc?function(e,t){return t instanceof kc&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&Pc(n,t.filters[r])),!0)}(e,t):void Bo()}function Lc(e){return e instanceof Ac?function(e){return`${e.field.canonicalString()} ${e.op} ${uc(e.value)}`}(e):e instanceof kc?function(e){return e.op.toString()+" {"+e.getFilters().map(Lc).join(" ,")+"}"}(e):"Filter"}class xc extends Ac{constructor(e,t,n){super(e,t,n),this.key=la.fromName(n.referenceValue)}matches(e){const t=la.comparator(e.key,this.key);return this.matchesComparison(t)}}class Mc extends Ac{constructor(e,t){super(e,"in",t),this.keys=Fc("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Uc extends Ac{constructor(e,t){super(e,"not-in",t),this.keys=Fc("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Fc(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>la.fromName(e.referenceValue)))}class Vc extends Ac{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return dc(t)&&oc(t.arrayValue,this.value)}}class jc extends Ac{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&oc(this.value.arrayValue,t)}}class Bc extends Ac{constructor(e,t){super(e,"not-in",t)}matches(e){if(oc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!oc(this.value.arrayValue,t)}}class qc extends Ac{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!dc(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>oc(this.value.arrayValue,e)))}}
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
 */class $c{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ce=null}}function zc(e,t=null,n=[],r=[],i=null,s=null,o=null){return new $c(e,t,n,r,i,s,o)}function Kc(e){const t=$o(e);if(null===t.ce){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>Oc(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),Ra(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>uc(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>uc(e))).join(",")),t.ce=e}return t.ce}function Hc(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Sc(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Pc(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Ic(e.startAt,t.startAt)&&Ic(e.endAt,t.endAt)}function Gc(e){return la.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
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
class Wc{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function Qc(e,t,n,r,i,s,o,a){return new Wc(e,t,n,r,i,s,o,a)}function Jc(e){return new Wc(e)}function Xc(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Yc(e){return null!==e.collectionGroup}function Zc(e){const t=$o(e);if(null===t.le){t.le=[];const e=new Set;for(const n of t.explicitOrderBy)t.le.push(n),e.add(n.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc",r=function(e){let t=new $a(ha.comparator);return e.filters.forEach((e=>{e.getFlattenedFilters().forEach((e=>{e.isInequality()&&(t=t.add(e.field))}))})),t}(t);r.forEach((r=>{e.has(r.canonicalString())||r.isKeyField()||t.le.push(new Tc(r,n))})),e.has(ha.keyField().canonicalString())||t.le.push(new Tc(ha.keyField(),n))}return t.le}function eu(e){const t=$o(e);return t.he||(t.he=tu(t,Zc(e))),t.he}function tu(e,t){if("F"===e.limitType)return zc(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map((e=>{const t="desc"===e.dir?"asc":"desc";return new Tc(e.field,t)}));const n=e.endAt?new bc(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new bc(e.startAt.position,e.startAt.inclusive):null;return zc(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function nu(e,t,n){return new Wc(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function ru(e,t){return Hc(eu(e),eu(t))&&e.limitType===t.limitType}function iu(e){return`${Kc(eu(e))}|lt:${e.limitType}`}function su(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>Lc(e))).join(", ")}]`),Ra(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>uc(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>uc(e))).join(",")),`Target(${t})`}(eu(e))}; limitType=${e.limitType})`}function ou(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):la.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of Zc(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=Ec(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,Zc(e),t))&&!(e.endAt&&!function(e,t,n){const r=Ec(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,Zc(e),t))}(e,t)}function au(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function cu(e){return(t,n)=>{let r=!1;for(const i of Zc(e)){const e=uu(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function uu(e,t,n){const r=e.field.isKeyField()?la.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?ac(r,i):Bo()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Bo()}}
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
 */class hu{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,r]of n)if(this.equalsFn(t,e))return r}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Fa(this.inner,((t,n)=>{for(const[t,r]of n)e(t,r)}))}isEmpty(){return Va(this.inner)}size(){return this.innerSize}}
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
 */const lu=new ja(la.comparator);function du(){return lu}const fu=new ja(la.comparator);function pu(...e){let t=fu;for(const n of e)t=t.insert(n.key,n);return t}function gu(e){let t=fu;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function mu(){return vu()}function yu(){return vu()}function vu(){return new hu((e=>e.toString()),((e,t)=>e.isEqual(t)))}const wu=new ja(la.comparator),_u=new $a(la.comparator);function bu(...e){let t=_u;for(const n of e)t=t.add(n);return t}const Eu=new $a(ra);function Iu(){return Eu}
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
 */function Tu(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Oa(t)?"-0":t}}function Su(e){return{integerValue:""+e}}function Cu(e,t){return Pa(t)?Su(t):Tu(e,t)}
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
 */class Au{constructor(){this._=void 0}}function ku(e,t,n){return e instanceof Ru?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&Ya(t)&&(t=Za(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof Ou?Pu(e,t):e instanceof Lu?xu(e,t):function(e,t){const n=Du(e,t),r=Uu(n)+Uu(e.Ie);return lc(n)&&lc(e.Ie)?Su(r):Tu(e.serializer,r)}(e,t)}function Nu(e,t,n){return e instanceof Ou?Pu(e,t):e instanceof Lu?xu(e,t):n}function Du(e,t){return e instanceof Mu?function(e){return lc(e)||function(e){return!!e&&"doubleValue"in e}(e)}(t)?t:{integerValue:0}:null}class Ru extends Au{}class Ou extends Au{constructor(e){super(),this.elements=e}}function Pu(e,t){const n=Fu(t);for(const t of e.elements)n.some((e=>sc(e,t)))||n.push(t);return{arrayValue:{values:n}}}class Lu extends Au{constructor(e){super(),this.elements=e}}function xu(e,t){let n=Fu(t);for(const t of e.elements)n=n.filter((e=>!sc(e,t)));return{arrayValue:{values:n}}}class Mu extends Au{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function Uu(e){return Ja(e.integerValue||e.doubleValue)}function Fu(e){return dc(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
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
 */class Vu{constructor(e,t){this.version=e,this.transformResults=t}}class ju{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ju}static exists(e){return new ju(void 0,e)}static updateTime(e){return new ju(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bu(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class qu{}function $u(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Zu(e.key,ju.none()):new Wu(e.key,e.data,ju.none());{const n=e.data,r=vc.empty();let i=new $a(ha.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new Qu(e.key,r,new Ka(i.toArray()),ju.none())}}function zu(e,t,n){e instanceof Wu?function(e,t,n){const r=e.value.clone(),i=Xu(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Qu?function(e,t,n){if(!Bu(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Xu(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(Ju(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function Ku(e,t,n,r){return e instanceof Wu?function(e,t,n,r){if(!Bu(e.precondition,t))return n;const i=e.value.clone(),s=Yu(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof Qu?function(e,t,n,r){if(!Bu(e.precondition,t))return n;const i=Yu(e.fieldTransforms,r,t),s=t.data;return s.setAll(Ju(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return Bu(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function Hu(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=Du(r.transform,e||null);null!=i&&(null===n&&(n=vc.empty()),n.set(r.field,i))}return n||null}function Gu(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&ia(e,t,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof Ou&&t instanceof Ou||e instanceof Lu&&t instanceof Lu?ia(e.elements,t.elements,sc):e instanceof Mu&&t instanceof Mu?sc(e.Ie,t.Ie):e instanceof Ru&&t instanceof Ru}(e.transform,t.transform)}(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Wu extends qu{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Qu extends qu{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ju(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function Xu(e,t,n){const r=new Map;qo(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,Nu(o,a,n[i]))}return r}function Yu(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,ku(e,s,t))}return r}class Zu extends qu{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class eh extends qu{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
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
 */class th{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const r=this.mutations[t];r.key.isEqual(e.key)&&zu(r,e,n[t])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Ku(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Ku(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=yu();return this.mutations.forEach((r=>{const i=e.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;const a=$u(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(oa.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),bu())}isEqual(e){return this.batchId===e.batchId&&ia(this.mutations,e.mutations,((e,t)=>Gu(e,t)))&&ia(this.baseMutations,e.baseMutations,((e,t)=>Gu(e,t)))}}class nh{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){qo(e.mutations.length===n.length);let r=wu;const i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new nh(e,t,n,r)}}
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
 */class rh{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
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
class ih{constructor(e,t){this.count=e,this.unchangedNames=t}}
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
 */var sh,oh;function ah(e){switch(e){default:return Bo();case zo.CANCELLED:case zo.UNKNOWN:case zo.DEADLINE_EXCEEDED:case zo.RESOURCE_EXHAUSTED:case zo.INTERNAL:case zo.UNAVAILABLE:case zo.UNAUTHENTICATED:return!1;case zo.INVALID_ARGUMENT:case zo.NOT_FOUND:case zo.ALREADY_EXISTS:case zo.PERMISSION_DENIED:case zo.FAILED_PRECONDITION:case zo.ABORTED:case zo.OUT_OF_RANGE:case zo.UNIMPLEMENTED:case zo.DATA_LOSS:return!0}}function ch(e){if(void 0===e)return Fo("GRPC error has no .code"),zo.UNKNOWN;switch(e){case sh.OK:return zo.OK;case sh.CANCELLED:return zo.CANCELLED;case sh.UNKNOWN:return zo.UNKNOWN;case sh.DEADLINE_EXCEEDED:return zo.DEADLINE_EXCEEDED;case sh.RESOURCE_EXHAUSTED:return zo.RESOURCE_EXHAUSTED;case sh.INTERNAL:return zo.INTERNAL;case sh.UNAVAILABLE:return zo.UNAVAILABLE;case sh.UNAUTHENTICATED:return zo.UNAUTHENTICATED;case sh.INVALID_ARGUMENT:return zo.INVALID_ARGUMENT;case sh.NOT_FOUND:return zo.NOT_FOUND;case sh.ALREADY_EXISTS:return zo.ALREADY_EXISTS;case sh.PERMISSION_DENIED:return zo.PERMISSION_DENIED;case sh.FAILED_PRECONDITION:return zo.FAILED_PRECONDITION;case sh.ABORTED:return zo.ABORTED;case sh.OUT_OF_RANGE:return zo.OUT_OF_RANGE;case sh.UNIMPLEMENTED:return zo.UNIMPLEMENTED;case sh.DATA_LOSS:return zo.DATA_LOSS;default:return Bo()}}(oh=sh||(sh={}))[oh.OK=0]="OK",oh[oh.CANCELLED=1]="CANCELLED",oh[oh.UNKNOWN=2]="UNKNOWN",oh[oh.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oh[oh.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oh[oh.NOT_FOUND=5]="NOT_FOUND",oh[oh.ALREADY_EXISTS=6]="ALREADY_EXISTS",oh[oh.PERMISSION_DENIED=7]="PERMISSION_DENIED",oh[oh.UNAUTHENTICATED=16]="UNAUTHENTICATED",oh[oh.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oh[oh.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oh[oh.ABORTED=10]="ABORTED",oh[oh.OUT_OF_RANGE=11]="OUT_OF_RANGE",oh[oh.UNIMPLEMENTED=12]="UNIMPLEMENTED",oh[oh.INTERNAL=13]="INTERNAL",oh[oh.UNAVAILABLE=14]="UNAVAILABLE",oh[oh.DATA_LOSS=15]="DATA_LOSS";
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
let uh=null;
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
 */function hh(){return new TextEncoder}
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
 */const lh=new Ro([4294967295,4294967295],0);function dh(e){const t=hh().encode(e),n=new Do;return n.update(t),new Uint8Array(n.digest())}function fh(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Ro([n,r],0),new Ro([i,s],0)]}class ph{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new gh(`Invalid padding: ${t}`);if(n<0)throw new gh(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new gh(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new gh(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ee=Ro.fromNumber(this.Te)}de(e,t,n){let r=e.add(t.multiply(Ro.fromNumber(n)));return 1===r.compare(lh)&&(r=new Ro([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Ee).toNumber()}Ae(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Te)return!1;const t=dh(e),[n,r]=fh(t);for(let e=0;e<this.hashCount;e++){const t=this.de(n,r,e);if(!this.Ae(t))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),s=new ph(i,r,t);return n.forEach((e=>s.insert(e))),s}insert(e){if(0===this.Te)return;const t=dh(e),[n,r]=fh(t);for(let e=0;e<this.hashCount;e++){const t=this.de(n,r,e);this.Re(t)}}Re(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class gh extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
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
 */class mh{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,yh.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new mh(oa.min(),r,new ja(ra),du(),bu())}}class yh{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new yh(n,t,bu(),bu(),bu())}}
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
 */class vh{constructor(e,t,n,r){this.Ve=e,this.removedTargetIds=t,this.key=n,this.me=r}}class wh{constructor(e,t){this.targetId=e,this.fe=t}}class _h{constructor(e,t,n=Ga.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class bh{constructor(){this.ge=0,this.pe=Th(),this.ye=Ga.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return 0!==this.ge}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=bu(),t=bu(),n=bu();return this.pe.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Bo()}})),new yh(this.ye,this.we,e,t,n)}Fe(){this.Se=!1,this.pe=Th()}Me(e,t){this.Se=!0,this.pe=this.pe.insert(e,t)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,qo(this.ge>=0)}Le(){this.Se=!0,this.we=!0}}class Eh{constructor(e){this.Be=e,this.ke=new Map,this.qe=du(),this.Qe=Ih(),this.Ke=new ja(ra)}$e(e){for(const t of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(t,e.me):this.We(t,e.key,e.me);for(const t of e.removedTargetIds)this.We(t,e.key,e.me)}Ge(e){this.forEachTarget(e,(t=>{const n=this.ze(t);switch(e.state){case 0:this.je(t)&&n.Ce(e.resumeToken);break;case 1:n.Ne(),n.be||n.Fe(),n.Ce(e.resumeToken);break;case 2:n.Ne(),n.be||this.removeTarget(t);break;case 3:this.je(t)&&(n.Le(),n.Ce(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),n.Ce(e.resumeToken));break;default:Bo()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ke.forEach(((e,n)=>{this.je(n)&&t(n)}))}Je(e){const t=e.targetId,n=e.fe.count,r=this.Ye(t);if(r){const i=r.target;if(Gc(i))if(0===n){const e=new la(i.path);this.We(t,e,_c.newNoDocument(e,oa.min()))}else qo(1===n);else{const r=this.Ze(t);if(r!==n){const n=this.Xe(e),i=n?this.et(n,e,r):1;if(0!==i){this.He(t);const e=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,e)}null==uh||uh.tt(function(e,t,n,r,i){var s,o,a,c,u,h;const l={localCacheCount:e,existenceFilterCount:t.count,databaseId:n.database,projectId:n.projectId},d=t.unchangedNames;return d&&(l.bloomFilter={applied:0===i,hashCount:null!==(s=null==d?void 0:d.hashCount)&&void 0!==s?s:0,bitmapLength:null!==(c=null===(a=null===(o=null==d?void 0:d.bits)||void 0===o?void 0:o.bitmap)||void 0===a?void 0:a.length)&&void 0!==c?c:0,padding:null!==(h=null===(u=null==d?void 0:d.bits)||void 0===u?void 0:u.padding)&&void 0!==h?h:0,mightContain:e=>{var t;return null!==(t=null==r?void 0:r.mightContain(e))&&void 0!==t&&t}}),l}
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
 */(r,e.fe,this.Be.nt(),n,i))}}}}Xe(e){const t=e.fe.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=t;let s,o;try{s=Xa(n).toUint8Array()}catch(e){if(e instanceof Ha)return Vo("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{o=new ph(s,r,i)}catch(e){return Vo(e instanceof gh?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===o.Te?null:o}et(e,t,n){return t.fe.count===n-this.rt(e,t.targetId)?0:2}rt(e,t){const n=this.Be.getRemoteKeysForTarget(t);let r=0;return n.forEach((n=>{const i=this.Be.nt(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.mightContain(s)||(this.We(t,n,null),r++)})),r}it(e){const t=new Map;this.ke.forEach(((n,r)=>{const i=this.Ye(r);if(i){if(n.current&&Gc(i.target)){const t=new la(i.target.path);null!==this.qe.get(t)||this.st(r,t)||this.We(r,t,_c.newNoDocument(t,e))}n.De&&(t.set(r,n.ve()),n.Fe())}}));let n=bu();this.Qe.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.Ye(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.qe.forEach(((t,n)=>n.setReadTime(e)));const r=new mh(e,t,this.Ke,this.qe,n);return this.qe=du(),this.Qe=Ih(),this.Ke=new ja(ra),r}Ue(e,t){if(!this.je(e))return;const n=this.st(e,t.key)?2:0;this.ze(e).Me(t.key,n),this.qe=this.qe.insert(t.key,t),this.Qe=this.Qe.insert(t.key,this.ot(t.key).add(e))}We(e,t,n){if(!this.je(e))return;const r=this.ze(e);this.st(e,t)?r.Me(t,1):r.xe(t),this.Qe=this.Qe.insert(t,this.ot(t).delete(e)),n&&(this.qe=this.qe.insert(t,n))}removeTarget(e){this.ke.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let t=this.ke.get(e);return t||(t=new bh,this.ke.set(e,t)),t}ot(e){let t=this.Qe.get(e);return t||(t=new $a(ra),this.Qe=this.Qe.insert(e,t)),t}je(e){const t=null!==this.Ye(e);return t||Uo("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.ke.get(e);return t&&t.be?null:this.Be._t(e)}He(e){this.ke.set(e,new bh),this.Be.getRemoteKeysForTarget(e).forEach((t=>{this.We(e,t,null)}))}st(e,t){return this.Be.getRemoteKeysForTarget(e).has(t)}}function Ih(){return new ja(la.comparator)}function Th(){return new ja(la.comparator)}const Sh={asc:"ASCENDING",desc:"DESCENDING"},Ch={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ah={and:"AND",or:"OR"};class kh{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Nh(e,t){return e.useProto3Json||Ra(t)?t:{value:t}}function Dh(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Rh(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Oh(e,t){return Dh(e,t.toTimestamp())}function Ph(e){return qo(!!e),oa.fromTimestamp(function(e){const t=Qa(e);return new sa(t.seconds,t.nanos)}(e))}function Lh(e,t){return xh(e,t).canonicalString()}function xh(e,t){const n=function(e){return new ca(["projects",e.projectId,"databases",e.database])}(e).child("documents");return void 0===t?n:n.child(t)}function Mh(e){const t=ca.fromString(e);return qo(nl(t)),t}function Uh(e,t){return Lh(e.databaseId,t.path)}function Fh(e,t){const n=Mh(t);if(n.get(1)!==e.databaseId.projectId)throw new Ko(zo.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Ko(zo.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new la(qh(n))}function Vh(e,t){return Lh(e.databaseId,t)}function jh(e){const t=Mh(e);return 4===t.length?ca.emptyPath():qh(t)}function Bh(e){return new ca(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function qh(e){return qo(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function $h(e,t,n){return{name:Uh(e,t),fields:n.value.mapValue.fields}}function zh(e,t){let n;if(t instanceof Wu)n={update:$h(e,t.key,t.value)};else if(t instanceof Zu)n={delete:Uh(e,t.key)};else if(t instanceof Qu)n={update:$h(e,t.key,t.data),updateMask:tl(t.fieldMask)};else{if(!(t instanceof eh))return Bo();n={verify:Uh(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Ru)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Ou)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Lu)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Mu)return{fieldPath:t.field.canonicalString(),increment:n.Ie};throw Bo()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:Oh(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:Bo()}(e,t.precondition)),n}function Kh(e,t){return{documents:[Vh(e,t.path)]}}function Hh(e,t){const n={structuredQuery:{}},r=t.path;let i;null!==t.collectionGroup?(i=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Vh(e,i);const s=function(e){if(0!==e.length)return el(kc.create(e,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const o=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:Yh(e.field),direction:Qh(e.dir)}}(e)))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Nh(e,t.limit);return null!==a&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt=function(e){return{before:e.inclusive,values:e.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),{ut:n,parent:i}}function Gh(e){let t=jh(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){qo(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=Wh(e);return t instanceof kc&&Dc(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=function(e){return e.map((e=>function(e){return new Tc(Zh(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e)))}(n.orderBy));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Ra(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new bc(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new bc(n,t)}(n.endAt)),Qc(t,i,o,s,a,"F",c,u)}function Wh(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Zh(e.unaryFilter.field);return Ac.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Zh(e.unaryFilter.field);return Ac.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Zh(e.unaryFilter.field);return Ac.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Zh(e.unaryFilter.field);return Ac.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Bo()}}(e):void 0!==e.fieldFilter?function(e){return Ac.create(Zh(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Bo()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return kc.create(e.compositeFilter.filters.map((e=>Wh(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return Bo()}}(e.compositeFilter.op))}(e):Bo()}function Qh(e){return Sh[e]}function Jh(e){return Ch[e]}function Xh(e){return Ah[e]}function Yh(e){return{fieldPath:e.canonicalString()}}function Zh(e){return ha.fromServerFormat(e.fieldPath)}function el(e){return e instanceof Ac?function(e){if("=="===e.op){if(pc(e.value))return{unaryFilter:{field:Yh(e.field),op:"IS_NAN"}};if(fc(e.value))return{unaryFilter:{field:Yh(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(pc(e.value))return{unaryFilter:{field:Yh(e.field),op:"IS_NOT_NAN"}};if(fc(e.value))return{unaryFilter:{field:Yh(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Yh(e.field),op:Jh(e.op),value:e.value}}}(e):e instanceof kc?function(e){const t=e.getFilters().map((e=>el(e)));return 1===t.length?t[0]:{compositeFilter:{op:Xh(e.op),filters:t}}}(e):Bo()}function tl(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function nl(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
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
 */class rl{constructor(e,t,n,r,i=oa.min(),s=oa.min(),o=Ga.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new rl(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new rl(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new rl(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new rl(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
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
 */class il{constructor(e){this.ct=e}}function sl(e){const t=Gh({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?nu(t,t.limit,"L"):t}
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
class ol{constructor(){}Pt(e,t){this.It(e,t),t.Tt()}It(e,t){if("nullValue"in e)this.Et(t,5);else if("booleanValue"in e)this.Et(t,10),t.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(t,15),t.dt(Ja(e.integerValue));else if("doubleValue"in e){const n=Ja(e.doubleValue);isNaN(n)?this.Et(t,13):(this.Et(t,15),Oa(n)?t.dt(0):t.dt(n))}else if("timestampValue"in e){const n=e.timestampValue;this.Et(t,20),"string"==typeof n?t.At(n):(t.At(`${n.seconds||""}`),t.dt(n.nanos||0))}else if("stringValue"in e)this.Rt(e.stringValue,t),this.Vt(t);else if("bytesValue"in e)this.Et(t,30),t.ft(Xa(e.bytesValue)),this.Vt(t);else if("referenceValue"in e)this.gt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.Et(t,45),t.dt(n.latitude||0),t.dt(n.longitude||0)}else"mapValue"in e?yc(e)?this.Et(t,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,t),this.Vt(t)):"arrayValue"in e?(this.wt(e.arrayValue,t),this.Vt(t)):Bo()}Rt(e,t){this.Et(t,25),this.St(e,t)}St(e,t){t.At(e)}yt(e,t){const n=e.fields||{};this.Et(t,55);for(const e of Object.keys(n))this.Rt(e,t),this.It(n[e],t)}wt(e,t){const n=e.values||[];this.Et(t,50);for(const e of n)this.It(e,t)}gt(e,t){this.Et(t,37),la.fromName(e).path.forEach((e=>{this.Et(t,60),this.St(e,t)}))}Et(e,t){e.dt(t)}Vt(e){e.dt(2)}}ol.bt=new ol;
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
class al{constructor(){this._n=new cl}addToCollectionParentIndex(e,t){return this._n.add(t),_a.resolve()}getCollectionParents(e,t){return _a.resolve(this._n.getEntries(t))}addFieldIndex(e,t){return _a.resolve()}deleteFieldIndex(e,t){return _a.resolve()}deleteAllFieldIndexes(e){return _a.resolve()}createTargetIndexes(e,t){return _a.resolve()}getDocumentsMatchingTarget(e,t){return _a.resolve(null)}getIndexType(e,t){return _a.resolve(0)}getFieldIndexes(e,t){return _a.resolve([])}getNextCollectionGroupToUpdate(e){return _a.resolve(null)}getMinOffset(e,t){return _a.resolve(ga.min())}getMinOffsetFromCollectionGroup(e,t){return _a.resolve(ga.min())}updateCollectionGroup(e,t,n){return _a.resolve()}updateIndexEntries(e,t){return _a.resolve()}}class cl{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new $a(ca.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new $a(ca.comparator)).toArray()}}
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
 */new Uint8Array(0);class ul{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new ul(e,ul.DEFAULT_COLLECTION_PERCENTILE,ul.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
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
 */ul.DEFAULT_COLLECTION_PERCENTILE=10,ul.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ul.DEFAULT=new ul(41943040,ul.DEFAULT_COLLECTION_PERCENTILE,ul.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ul.DISABLED=new ul(-1,0,0);
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
class hl{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new hl(0)}static Ln(){return new hl(-1)}}
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
class ll{constructor(){this.changes=new hu((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,_c.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?_a.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
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
class dl{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
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
 */class fl{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&Ku(n.mutation,e,Ka.empty(),sa.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,bu()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=bu()){const r=mu();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=pu();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=mu();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,bu())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=du();const s=vu(),o=vu();return t.forEach(((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof Qu)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),Ku(o.mutation,t,o.mutation.getFieldMask(),sa.now())):s.set(t.key,Ka.empty())})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new dl(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=vu();let r=new ja(((e,t)=>e-t)),i=bu();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||Ka.empty();o=i.applyToLocalView(s,o),n.set(e,o);const a=(r.get(i.batchId)||bu()).add(e);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=yu();c.forEach((e=>{if(!i.has(e)){const r=$u(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return _a.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n,r){return function(e){return la.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Yc(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):_a.resolve(mu());let o=-1,a=i;return s.next((t=>_a.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?_a.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,a,t,bu()))).next((e=>({batchId:o,changes:gu(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new la(t)).next((e=>{let t=pu();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const i=t.collectionGroup;let s=pu();return this.indexManager.getCollectionParents(e,i).next((o=>_a.forEach(o,(o=>{const a=function(e,t){return new Wc(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,o.child(i));return this.getDocumentsMatchingCollectionQuery(e,a,n,r).next((e=>{e.forEach(((e,t)=>{s=s.insert(e,t)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r)))).next((e=>{i.forEach(((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,_c.newInvalidDocument(r)))}));let n=pu();return e.forEach(((e,r)=>{const s=i.get(e);void 0!==s&&Ku(s.mutation,r,Ka.empty(),sa.now()),ou(t,r)&&(n=n.insert(e,r))})),n}))}}
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
 */class pl{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,t){return _a.resolve(this.cr.get(t))}saveBundleMetadata(e,t){return this.cr.set(t.id,function(e){return{id:e.id,version:e.version,createTime:Ph(e.createTime)}}(t)),_a.resolve()}getNamedQuery(e,t){return _a.resolve(this.lr.get(t))}saveNamedQuery(e,t){return this.lr.set(t.name,function(e){return{name:e.name,query:sl(e.bundledQuery),readTime:Ph(e.readTime)}}(t)),_a.resolve()}}
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
 */class gl{constructor(){this.overlays=new ja(la.comparator),this.hr=new Map}getOverlay(e,t){return _a.resolve(this.overlays.get(t))}getOverlays(e,t){const n=mu();return _a.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.ht(e,t,r)})),_a.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.hr.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.hr.delete(n)),_a.resolve()}getOverlaysForCollection(e,t,n){const r=mu(),i=t.length+1,s=new la(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return _a.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new ja(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=mu(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=mu(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((e,t)=>o.set(e,t))),!(o.size()>=r)););return _a.resolve(o)}ht(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.hr.get(r.largestBatchId).delete(n.key);this.hr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new rh(t,n));let i=this.hr.get(t);void 0===i&&(i=bu(),this.hr.set(t,i)),this.hr.set(t,i.add(n.key))}}
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
 */class ml{constructor(){this.Pr=new $a(yl.Ir),this.Tr=new $a(yl.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,t){const n=new yl(e,t);this.Pr=this.Pr.add(n),this.Tr=this.Tr.add(n)}dr(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.Ar(new yl(e,t))}Rr(e,t){e.forEach((e=>this.removeReference(e,t)))}Vr(e){const t=new la(new ca([])),n=new yl(t,e),r=new yl(t,e+1),i=[];return this.Tr.forEachInRange([n,r],(e=>{this.Ar(e),i.push(e.key)})),i}mr(){this.Pr.forEach((e=>this.Ar(e)))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const t=new la(new ca([])),n=new yl(t,e),r=new yl(t,e+1);let i=bu();return this.Tr.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new yl(e,0),n=this.Pr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class yl{constructor(e,t){this.key=e,this.pr=t}static Ir(e,t){return la.comparator(e.key,t.key)||ra(e.pr,t.pr)}static Er(e,t){return ra(e.pr,t.pr)||la.comparator(e.key,t.key)}}
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
 */class vl{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.yr=1,this.wr=new $a(yl.Ir)}checkEmpty(e){return _a.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new th(i,t,n,r);this.mutationQueue.push(s);for(const t of r)this.wr=this.wr.add(new yl(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return _a.resolve(s)}lookupMutationBatch(e,t){return _a.resolve(this.Sr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.br(n),i=r<0?0:r;return _a.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return _a.resolve(0===this.mutationQueue.length?-1:this.yr-1)}getAllMutationBatches(e){return _a.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new yl(t,0),r=new yl(t,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([n,r],(e=>{const t=this.Sr(e.pr);i.push(t)})),_a.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new $a(ra);return t.forEach((e=>{const t=new yl(e,0),r=new yl(e,Number.POSITIVE_INFINITY);this.wr.forEachInRange([t,r],(e=>{n=n.add(e.pr)}))})),_a.resolve(this.Dr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;la.isDocumentKey(i)||(i=i.child(""));const s=new yl(new la(i),0);let o=new $a(ra);return this.wr.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.pr)),!0)}),s),_a.resolve(this.Dr(o))}Dr(e){const t=[];return e.forEach((e=>{const n=this.Sr(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){qo(0===this.Cr(t.batchId,"removed")),this.mutationQueue.shift();let n=this.wr;return _a.forEach(t.mutations,(r=>{const i=new yl(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.wr=n}))}Mn(e){}containsKey(e,t){const n=new yl(t,0),r=this.wr.firstAfterOrEqual(n);return _a.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,_a.resolve()}Cr(e,t){return this.br(e)}br(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Sr(e){const t=this.br(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
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
 */class wl{constructor(e){this.vr=e,this.docs=new ja(la.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.vr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return _a.resolve(n?n.document.mutableCopy():_c.newInvalidDocument(t))}getEntries(e,t){let n=du();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():_c.newInvalidDocument(e))})),_a.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=du();const s=t.path,o=new la(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||ma(pa(o),n)<=0||(r.has(o.key)||ou(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return _a.resolve(i)}getAllFromCollectionGroup(e,t,n,r){Bo()}Fr(e,t){return _a.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new _l(this)}getSize(e){return _a.resolve(this.size)}}class _l extends ll{constructor(e){super(),this.ar=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.ar.addEntry(e,r)):this.ar.removeEntry(n)})),_a.waitFor(t)}getFromCache(e,t){return this.ar.getEntry(e,t)}getAllFromCache(e,t){return this.ar.getEntries(e,t)}}
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
 */class bl{constructor(e){this.persistence=e,this.Mr=new hu((e=>Kc(e)),Hc),this.lastRemoteSnapshotVersion=oa.min(),this.highestTargetId=0,this.Or=0,this.Nr=new ml,this.targetCount=0,this.Lr=hl.Nn()}forEachTarget(e,t){return this.Mr.forEach(((e,n)=>t(n))),_a.resolve()}getLastRemoteSnapshotVersion(e){return _a.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return _a.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),_a.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Or&&(this.Or=t),_a.resolve()}qn(e){this.Mr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Lr=new hl(t),this.highestTargetId=t),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,t){return this.qn(t),this.targetCount+=1,_a.resolve()}updateTargetData(e,t){return this.qn(t),_a.resolve()}removeTargetData(e,t){return this.Mr.delete(t.target),this.Nr.Vr(t.targetId),this.targetCount-=1,_a.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Mr.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Mr.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),_a.waitFor(i).next((()=>r))}getTargetCount(e){return _a.resolve(this.targetCount)}getTargetData(e,t){const n=this.Mr.get(t)||null;return _a.resolve(n)}addMatchingKeys(e,t,n){return this.Nr.dr(t,n),_a.resolve()}removeMatchingKeys(e,t,n){this.Nr.Rr(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),_a.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Nr.Vr(t),_a.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Nr.gr(t);return _a.resolve(n)}containsKey(e,t){return _a.resolve(this.Nr.containsKey(t))}}
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
 */class El{constructor(e,t){this.Br={},this.overlays={},this.kr=new Da(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new bl(this),this.indexManager=new al,this.remoteDocumentCache=function(e){return new wl(e)}((e=>this.referenceDelegate.Kr(e))),this.serializer=new il(t),this.$r=new pl(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new gl,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Br[e.toKey()];return n||(n=new vl(t,this.referenceDelegate),this.Br[e.toKey()]=n),n}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,t,n){Uo("MemoryPersistence","Starting transaction:",e);const r=new Il(this.kr.next());return this.referenceDelegate.Ur(),n(r).next((e=>this.referenceDelegate.Wr(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Gr(e,t){return _a.or(Object.values(this.Br).map((n=>()=>n.containsKey(e,t))))}}class Il extends va{constructor(e){super(),this.currentSequenceNumber=e}}class Tl{constructor(e){this.persistence=e,this.zr=new ml,this.jr=null}static Hr(e){return new Tl(e)}get Jr(){if(this.jr)return this.jr;throw Bo()}addReference(e,t,n){return this.zr.addReference(n,t),this.Jr.delete(n.toString()),_a.resolve()}removeReference(e,t,n){return this.zr.removeReference(n,t),this.Jr.add(n.toString()),_a.resolve()}markPotentiallyOrphaned(e,t){return this.Jr.add(t.toString()),_a.resolve()}removeTarget(e,t){this.zr.Vr(t.targetId).forEach((e=>this.Jr.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Jr.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Ur(){this.jr=new Set}Wr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return _a.forEach(this.Jr,(n=>{const r=la.fromPath(n);return this.Yr(e,r).next((e=>{e||t.removeEntry(r,oa.min())}))})).next((()=>(this.jr=null,t.apply(e))))}updateLimboDocument(e,t){return this.Yr(e,t).next((e=>{e?this.Jr.delete(t.toString()):this.Jr.add(t.toString())}))}Kr(e){return 0}Yr(e,t){return _a.or([()=>_a.resolve(this.zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gr(e,t)])}}
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
class Sl{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.qi=n,this.Qi=r}static Ki(e,t){let n=bu(),r=bu();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new Sl(e,t.fromCache,n,r)}}
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
 */class Cl{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}
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
 */class Al{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=(0,e.nr)()?8:Ea.v((0,e.ZQ)())>0?6:4}initialize(e,t){this.zi=e,this.indexManager=t,this.$i=!0}getDocumentsMatchingQuery(e,t,n,r){const i={result:null};return this.ji(e,t).next((e=>{i.result=e})).next((()=>{if(!i.result)return this.Hi(e,t,r,n).next((e=>{i.result=e}))})).next((()=>{if(i.result)return;const n=new Cl;return this.Ji(e,t,n).next((r=>{if(i.result=r,this.Ui)return this.Yi(e,t,n,r.size)}))})).next((()=>i.result))}Yi(e,t,n,i){return n.documentReadCount<this.Wi?(Mo()<=r.$b.DEBUG&&Uo("QueryEngine","SDK will not create cache indexes for query:",su(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),_a.resolve()):(Mo()<=r.$b.DEBUG&&Uo("QueryEngine","Query:",su(t),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.Gi*i?(Mo()<=r.$b.DEBUG&&Uo("QueryEngine","The SDK decides to create cache indexes for query:",su(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,eu(t))):_a.resolve())}ji(e,t){if(Xc(t))return _a.resolve(null);let n=eu(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=nu(t,null,"F"),n=eu(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=bu(...r);return this.zi.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.Zi(t,r);return this.Xi(t,s,i,n.readTime)?this.ji(e,nu(t,null,"F")):this.es(e,s,t,n)}))))})))))}Hi(e,t,n,i){return Xc(t)||i.isEqual(oa.min())?_a.resolve(null):this.zi.getDocuments(e,n).next((s=>{const o=this.Zi(t,s);return this.Xi(t,o,n,i)?_a.resolve(null):(Mo()<=r.$b.DEBUG&&Uo("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),su(t)),this.es(e,o,t,fa(i,-1)).next((e=>e)))}))}Zi(e,t){let n=new $a(cu(e));return t.forEach(((t,r)=>{ou(e,r)&&(n=n.add(r))})),n}Xi(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ji(e,t,n){return Mo()<=r.$b.DEBUG&&Uo("QueryEngine","Using full collection scan to execute query:",su(t)),this.zi.getDocumentsMatchingQuery(e,t,ga.min(),n)}es(e,t,n,r){return this.zi.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
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
 */class kl{constructor(e,t,n,r){this.persistence=e,this.ts=t,this.serializer=r,this.ns=new ja(ra),this.rs=new hu((e=>Kc(e)),Hc),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(n)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new fl(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.ns)))}}function Nl(e,t,n,r){return new kl(e,t,n,r)}async function Dl(e,t){const n=$o(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n._s(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let o=bu();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({us:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function Rl(e){const t=$o(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Qr.getLastRemoteSnapshotVersion(e)))}function Ol(e,t,n){let r=bu(),i=bu();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=du();return n.forEach(((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(oa.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):Uo("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{cs:r,ls:i}}))}function Pl(e,t){const n=$o(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function Ll(e,t){const n=$o(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Qr.getTargetData(e,t).next((i=>i?(r=i,_a.resolve(r)):n.Qr.allocateTargetId(e).next((i=>(r=new rl(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.Qr.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.ns.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.ns=n.ns.insert(e.targetId,e),n.rs.set(t,e.targetId)),e}))}async function xl(e,t,n){const r=$o(e),i=r.ns.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!Sa(e))throw e;Uo("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.ns=r.ns.remove(t),r.rs.delete(i.target)}function Ml(e,t,n){const r=$o(e);let i=oa.min(),s=bu();return r.persistence.runTransaction("Execute query","readwrite",(e=>function(e,t,n){const r=$o(e),i=r.rs.get(n);return void 0!==i?_a.resolve(r.ns.get(i)):r.Qr.getTargetData(t,n)}(r,e,eu(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.ts.getDocumentsMatchingQuery(e,t,n?i:oa.min(),n?s:bu()))).next((e=>(Ul(r,au(t),e),{documents:e,hs:s})))))}function Ul(e,t,n){let r=e.ss.get(t)||oa.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.ss.set(t,r)}class Fl{constructor(){this.activeTargetIds=Iu()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Vl{constructor(){this.no=new Fl,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,t,n){this.ro[e]=t}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Fl,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
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
 */class jl{io(e){}shutdown(){}}
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
 */class Bl{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){Uo("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){Uo("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */let ql=null;function $l(){return null===ql?ql=268435456+Math.round(2147483648*Math.random()):ql++,"0x"+ql.toString(16)
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
 */}const zl={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
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
 */class Kl{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}
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
 */const Hl="WebChannelConnection";class Gl extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.fo=t+"://"+e.host,this.po=`projects/${n}/databases/${r}`,this.yo="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get wo(){return!1}So(e,t,n,r,i){const s=$l(),o=this.bo(e,t.toUriEncodedString());Uo("RestConnection",`Sending RPC '${e}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(a,r,i),this.Co(e,o,a,n).then((t=>(Uo("RestConnection",`Received RPC '${e}' ${s}: `,t),t)),(t=>{throw Vo("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",n),t}))}vo(e,t,n,r,i,s){return this.So(e,t,n,r,i)}Do(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Lo,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}bo(e,t){const n=zl[e];return`${this.fo}/v1/${t}:${n}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,t,n,r){const i=$l();return new Promise(((s,o)=>{const a=new No;a.setWithCredentials(!0),a.listenOnce(So.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case To.NO_ERROR:const t=a.getResponseJson();Uo(Hl,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case To.TIMEOUT:Uo(Hl,`RPC '${e}' ${i} timed out`),o(new Ko(zo.DEADLINE_EXCEEDED,"Request time out"));break;case To.HTTP_ERROR:const n=a.getStatus();if(Uo(Hl,`RPC '${e}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(zo).indexOf(t)>=0?t:zo.UNKNOWN}(t.status);o(new Ko(e,t.message))}else o(new Ko(zo.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new Ko(zo.UNAVAILABLE,"Connection failed."));break;default:Bo()}}finally{Uo(Hl,`RPC '${e}' ${i} completed.`)}}));const c=JSON.stringify(r);Uo(Hl,`RPC '${e}' ${i} sending request:`,r),a.send(t,"POST",c,n,15)}))}Fo(e,t,n){const r=$l(),i=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=Eo(),o=Io(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Do(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const u=i.join("");Uo(Hl,`Creating RPC '${e}' stream ${r}: ${u}`,a);const h=s.createWebChannel(u,a);let l=!1,d=!1;const f=new Kl({lo:t=>{d?Uo(Hl,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(l||(Uo(Hl,`Opening RPC '${e}' stream ${r} transport.`),h.open(),l=!0),Uo(Hl,`RPC '${e}' stream ${r} sending:`,t),h.send(t))},ho:()=>h.close()}),p=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return p(h,ko.EventType.OPEN,(()=>{d||Uo(Hl,`RPC '${e}' stream ${r} transport opened.`)})),p(h,ko.EventType.CLOSE,(()=>{d||(d=!0,Uo(Hl,`RPC '${e}' stream ${r} transport closed`),f.Vo())})),p(h,ko.EventType.ERROR,(t=>{d||(d=!0,Vo(Hl,`RPC '${e}' stream ${r} transport errored:`,t),f.Vo(new Ko(zo.UNAVAILABLE,"The operation could not be completed")))})),p(h,ko.EventType.MESSAGE,(t=>{var n;if(!d){const i=t.data[0];qo(!!i);const s=i,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){Uo(Hl,`RPC '${e}' stream ${r} received error:`,o);const t=o.status;let n=function(e){const t=sh[e];if(void 0!==t)return ch(t)}(t),i=o.message;void 0===n&&(n=zo.INTERNAL,i="Unknown error status: "+t+" with message "+o.message),d=!0,f.Vo(new Ko(n,i)),h.close()}else Uo(Hl,`RPC '${e}' stream ${r} received:`,i),f.mo(i)}})),p(o,Co.STAT_EVENT,(t=>{t.stat===Ao.PROXY?Uo(Hl,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===Ao.NOPROXY&&Uo(Hl,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{f.Ro()}),0),f}}
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
 */function Wl(){return"undefined"!=typeof document?document:null}
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
 */function Ql(e){return new kh(e,!0)}
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
 */class Jl{constructor(e,t,n=1e3,r=1.5,i=6e4){this.oi=e,this.timerId=t,this.Mo=n,this.xo=r,this.Oo=i,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const t=Math.floor(this.No+this.Qo()),n=Math.max(0,Date.now()-this.Bo),r=Math.max(0,t-n);r>0&&Uo("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.No} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,r,(()=>(this.Bo=Date.now(),e()))),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){null!==this.Lo&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){null!==this.Lo&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}
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
 */class Xl{constructor(e,t,n,r,i,s,o,a){this.oi=e,this.$o=n,this.Uo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new Jl(e,t)}Ho(){return 1===this.state||5===this.state||this.Jo()}Jo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&null===this.Go&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,(()=>this.e_())))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,t){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,4!==e?this.jo.reset():t&&t.code===zo.RESOURCE_EXHAUSTED?(Fo(t.toString()),Fo("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):t&&t.code===zo.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(t)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),t=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Wo===t&&this.o_(e,n)}),(t=>{e((()=>{const e=new Ko(zo.UNKNOWN,"Fetching auth token failed: "+t.message);return this.__(e)}))}))}o_(e,t){const n=this.s_(this.Wo);this.stream=this.a_(e,t),this.stream.Po((()=>{n((()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,(()=>(this.Jo()&&(this.state=3),Promise.resolve()))),this.listener.Po())))})),this.stream.To((e=>{n((()=>this.__(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Yo(){this.state=5,this.jo.qo((async()=>{this.state=0,this.start()}))}__(e){return Uo("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return t=>{this.oi.enqueueAndForget((()=>this.Wo===e?t():(Uo("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Yl extends Xl{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}a_(e,t){return this.connection.Fo("Listen",e,t)}onMessage(e){this.jo.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:Bo()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.useProto3Json?(qo(void 0===t||"string"==typeof t),Ga.fromBase64String(t||"")):(qo(void 0===t||t instanceof Uint8Array),Ga.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?zo.UNKNOWN:ch(e.code);return new Ko(t,e.message||"")}(o);n=new _h(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Fh(e,r.document.name),s=Ph(r.document.updateTime),o=r.document.createTime?Ph(r.document.createTime):oa.min(),a=new vc({mapValue:{fields:r.document.fields}}),c=_c.newFoundDocument(i,s,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];n=new vh(u,h,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Fh(e,r.document),s=r.readTime?Ph(r.readTime):oa.min(),o=_c.newNoDocument(i,s),a=r.removedTargetIds||[];n=new vh([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Fh(e,r.document),s=r.removedTargetIds||[];n=new vh([],s,i,null)}else{if(!("filter"in t))return Bo();{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:i}=e,s=new ih(r,i),o=e.targetId;n=new wh(o,s)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return oa.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?oa.min():t.readTime?Ph(t.readTime):oa.min()}(e);return this.listener.u_(t,n)}c_(e){const t={};t.database=Bh(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=Gc(r)?{documents:Kh(e,r)}:{query:Hh(e,r).ut},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=Rh(e,t.resumeToken);const r=Nh(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(oa.min())>0){n.readTime=Dh(e,t.snapshotVersion.toTimestamp());const r=Nh(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=function(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Bo()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.t_(t)}l_(e){const t={};t.database=Bh(this.serializer),t.removeTarget=e,this.t_(t)}}class Zl extends Xl{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,t){return this.connection.Fo("Write",e,t)}onMessage(e){if(qo(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const t=function(e,t){return e&&e.length>0?(qo(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?Ph(e.updateTime):Ph(t);return n.isEqual(oa.min())&&(n=Ph(t)),new Vu(n,e.transformResults||[])}(e,t)))):[]}(e.writeResults,e.commitTime),n=Ph(e.commitTime);return this.listener.T_(n,t)}return qo(!e.writeResults||0===e.writeResults.length),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=Bh(this.serializer),this.t_(e)}I_(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>zh(this.serializer,e)))};this.t_(t)}}
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
 */class ed extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.A_=!1}R_(){if(this.A_)throw new Ko(zo.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,n,r){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.So(e,xh(t,n),r,i,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===zo.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Ko(zo.UNKNOWN,e.toString())}))}vo(e,t,n,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,o])=>this.connection.vo(e,xh(t,n),r,s,o,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===zo.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Ko(zo.UNKNOWN,e.toString())}))}terminate(){this.A_=!0,this.connection.terminate()}}class td{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){0===this.m_&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve()))))}S_(e){"Online"===this.state?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,"Online"===e&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(Fo(t),this.g_=!1):Uo("OnlineStateTracker",t)}b_(){null!==this.f_&&(this.f_.cancel(),this.f_=null)}}
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
 */class nd{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io((e=>{n.enqueueAndForget((async()=>{ld(this)&&(Uo("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=$o(e);t.v_.add(4),await id(t),t.x_.set("Unknown"),t.v_.delete(4),await rd(t)}(this))}))})),this.x_=new td(n,r)}}async function rd(e){if(ld(e))for(const t of e.F_)await t(!0)}async function id(e){for(const t of e.F_)await t(!1)}function sd(e,t){const n=$o(e);n.C_.has(t.targetId)||(n.C_.set(t.targetId,t),hd(n)?ud(n):Nd(n).Jo()&&ad(n,t))}function od(e,t){const n=$o(e),r=Nd(n);n.C_.delete(t),r.Jo()&&cd(n,t),0===n.C_.size&&(r.Jo()?r.Xo():ld(n)&&n.x_.set("Unknown"))}function ad(e,t){if(e.O_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(oa.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Nd(e).c_(t)}function cd(e,t){e.O_.Oe(t),Nd(e).l_(t)}function ud(e){e.O_=new Eh({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.C_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),Nd(e).start(),e.x_.p_()}function hd(e){return ld(e)&&!Nd(e).Ho()&&e.C_.size>0}function ld(e){return 0===$o(e).v_.size}function dd(e){e.O_=void 0}async function fd(e){e.C_.forEach(((t,n)=>{ad(e,t)}))}async function pd(e,t){dd(e),hd(e)?(e.x_.S_(t),ud(e)):e.x_.set("Unknown")}async function gd(e,t,n){if(e.x_.set("Online"),t instanceof _h&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.C_.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.C_.delete(r),e.O_.removeTarget(r))}(e,t)}catch(n){Uo("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await md(e,n)}else if(t instanceof vh?e.O_.$e(t):t instanceof wh?e.O_.Je(t):e.O_.Ge(t),!n.isEqual(oa.min()))try{const t=await Rl(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.O_.it(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.C_.get(r);i&&e.C_.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const r=e.C_.get(t);if(!r)return;e.C_.set(t,r.withResumeToken(Ga.EMPTY_BYTE_STRING,r.snapshotVersion)),cd(e,t);const i=new rl(r.target,t,n,r.sequenceNumber);ad(e,i)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Uo("RemoteStore","Failed to raise snapshot:",t),await md(e,t)}}async function md(e,t,n){if(!Sa(t))throw t;e.v_.add(1),await id(e),e.x_.set("Offline"),n||(n=()=>Rl(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Uo("RemoteStore","Retrying IndexedDB access"),await n(),e.v_.delete(1),await rd(e)}))}function yd(e,t){return t().catch((n=>md(e,n,t)))}async function vd(e){const t=$o(e),n=Dd(t);let r=t.D_.length>0?t.D_[t.D_.length-1].batchId:-1;for(;wd(t);)try{const e=await Pl(t.localStore,r);if(null===e){0===t.D_.length&&n.Xo();break}r=e.batchId,_d(t,e)}catch(e){await md(t,e)}bd(t)&&Ed(t)}function wd(e){return ld(e)&&e.D_.length<10}function _d(e,t){e.D_.push(t);const n=Dd(e);n.Jo()&&n.P_&&n.I_(t.mutations)}function bd(e){return ld(e)&&!Dd(e).Ho()&&e.D_.length>0}function Ed(e){Dd(e).start()}async function Id(e){Dd(e).d_()}async function Td(e){const t=Dd(e);for(const n of e.D_)t.I_(n.mutations)}async function Sd(e,t,n){const r=e.D_.shift(),i=nh.from(r,t,n);await yd(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await vd(e)}async function Cd(e,t){t&&Dd(e).P_&&await async function(e,t){if(function(e){return ah(e)&&e!==zo.ABORTED}(t.code)){const n=e.D_.shift();Dd(e).Zo(),await yd(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await vd(e)}}(e,t),bd(e)&&Ed(e)}async function Ad(e,t){const n=$o(e);n.asyncQueue.verifyOperationInProgress(),Uo("RemoteStore","RemoteStore received new credentials");const r=ld(n);n.v_.add(3),await id(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.v_.delete(3),await rd(n)}async function kd(e,t){const n=$o(e);t?(n.v_.delete(2),await rd(n)):t||(n.v_.add(2),await id(n),n.x_.set("Unknown"))}function Nd(e){return e.N_||(e.N_=function(e,t,n){const r=$o(e);return r.R_(),new Yl(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
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
 */}(e.datastore,e.asyncQueue,{Po:fd.bind(null,e),To:pd.bind(null,e),u_:gd.bind(null,e)}),e.F_.push((async t=>{t?(e.N_.Zo(),hd(e)?ud(e):e.x_.set("Unknown")):(await e.N_.stop(),dd(e))}))),e.N_}function Dd(e){return e.L_||(e.L_=function(e,t,n){const r=$o(e);return r.R_(),new Zl(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Po:Id.bind(null,e),To:Cd.bind(null,e),E_:Td.bind(null,e),T_:Sd.bind(null,e)}),e.F_.push((async t=>{t?(e.L_.Zo(),await vd(e)):(await e.L_.stop(),e.D_.length>0&&(Uo("RemoteStore",`Stopping write stream with ${e.D_.length} pending writes`),e.D_=[]))}))),e.L_
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
 */}class Rd{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Ho,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new Rd(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Ko(zo.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Od(e,t){if(Fo("AsyncQueue",`${t}: ${e}`),Sa(e))return new Ko(zo.UNAVAILABLE,`${t}: ${e}`);throw e}
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
 */class Pd{constructor(e){this.comparator=e?(t,n)=>e(t,n)||la.comparator(t.key,n.key):(e,t)=>la.comparator(e.key,t.key),this.keyedMap=pu(),this.sortedSet=new ja(this.comparator)}static emptySet(e){return new Pd(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Pd))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Pd;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
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
 */class Ld{constructor(){this.B_=new ja(la.comparator)}track(e){const t=e.doc.key,n=this.B_.get(t);n?0!==e.type&&3===n.type?this.B_=this.B_.insert(t,e):3===e.type&&1!==n.type?this.B_=this.B_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.B_=this.B_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.B_=this.B_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.B_=this.B_.remove(t):1===e.type&&2===n.type?this.B_=this.B_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.B_=this.B_.insert(t,{type:2,doc:e.doc}):Bo():this.B_=this.B_.insert(t,e)}k_(){const e=[];return this.B_.inorderTraversal(((t,n)=>{e.push(n)})),e}}class xd{constructor(e,t,n,r,i,s,o,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,r,i){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new xd(e,t,Pd.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ru(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}
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
 */class Md{constructor(){this.q_=void 0,this.Q_=[]}K_(){return this.Q_.some((e=>e.U_()))}}class Ud{constructor(){this.queries=new hu((e=>iu(e)),ru),this.onlineState="Unknown",this.W_=new Set}}async function Fd(e,t){const n=$o(e);let r=3;const i=t.query;let s=n.queries.get(i);s?!s.K_()&&t.U_()&&(r=2):(s=new Md,r=t.U_()?0:1);try{switch(r){case 0:s.q_=await n.onListen(i,!0);break;case 1:s.q_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(e){const n=Od(e,`Initialization of query '${su(t.query)}' failed`);return void t.onError(n)}n.queries.set(i,s),s.Q_.push(t),t.G_(n.onlineState),s.q_&&t.z_(s.q_)&&qd(n)}async function Vd(e,t){const n=$o(e),r=t.query;let i=3;const s=n.queries.get(r);if(s){const e=s.Q_.indexOf(t);e>=0&&(s.Q_.splice(e,1),0===s.Q_.length?i=t.U_()?0:1:!s.K_()&&t.U_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function jd(e,t){const n=$o(e);let r=!1;for(const e of t){const t=e.query,i=n.queries.get(t);if(i){for(const t of i.Q_)t.z_(e)&&(r=!0);i.q_=e}}r&&qd(n)}function Bd(e,t,n){const r=$o(e),i=r.queries.get(t);if(i)for(const e of i.Q_)e.onError(n);r.queries.delete(t)}function qd(e){e.W_.forEach((e=>{e.next()}))}var $d,zd;(zd=$d||($d={})).j_="default",zd.Cache="cache";class Kd{constructor(e,t,n){this.query=e,this.H_=t,this.J_=!1,this.Y_=null,this.onlineState="Unknown",this.options=n||{}}z_(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new xd(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.J_?this.Z_(e)&&(this.H_.next(e),t=!0):this.X_(e,this.onlineState)&&(this.ea(e),t=!0),this.Y_=e,t}onError(e){this.H_.error(e)}G_(e){this.onlineState=e;let t=!1;return this.Y_&&!this.J_&&this.X_(this.Y_,e)&&(this.ea(this.Y_),t=!0),t}X_(e,t){if(!e.fromCache)return!0;if(!this.U_())return!0;const n="Offline"!==t;return(!this.options.ta||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Z_(e){if(e.docChanges.length>0)return!0;const t=this.Y_&&this.Y_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}ea(e){e=xd.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.J_=!0,this.H_.next(e)}U_(){return this.options.source!==$d.Cache}}
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
class Hd{constructor(e){this.key=e}}class Gd{constructor(e){this.key=e}}class Wd{constructor(e,t){this.query=e,this.ua=t,this.ca=null,this.hasCachedResults=!1,this.current=!1,this.la=bu(),this.mutatedKeys=bu(),this.ha=cu(e),this.Pa=new Pd(this.ha)}get Ia(){return this.ua}Ta(e,t){const n=t?t.Ea:new Ld,r=t?t.Pa:this.Pa;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),h=ou(this.query,t)?t:null,l=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;u&&h?u.data.isEqual(h.data)?l!==d&&(n.track({type:3,doc:h}),f=!0):this.da(u,h)||(n.track({type:2,doc:h}),f=!0,(a&&this.ha(h,a)>0||c&&this.ha(h,c)<0)&&(o=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(h?(s=s.add(h),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Pa:s,Ea:n,Xi:o,mutatedKeys:i}}da(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){const i=this.Pa;this.Pa=e.Pa,this.mutatedKeys=e.mutatedKeys;const s=e.Ea.k_();s.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Bo()}};return n(e)-n(t)}
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
 */(e.type,t.type)||this.ha(e.doc,t.doc))),this.Aa(n),r=null!=r&&r;const o=t&&!r?this.Ra():[],a=0===this.la.size&&this.current&&!r?1:0,c=a!==this.ca;return this.ca=a,0!==s.length||c?{snapshot:new xd(this.query,e.Pa,i,s,e.mutatedKeys,0===a,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),Va:o}:{Va:o}}G_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Pa:this.Pa,Ea:new Ld,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Va:[]}}ma(e){return!this.ua.has(e)&&!!this.Pa.has(e)&&!this.Pa.get(e).hasLocalMutations}Aa(e){e&&(e.addedDocuments.forEach((e=>this.ua=this.ua.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.ua=this.ua.delete(e))),this.current=e.current)}Ra(){if(!this.current)return[];const e=this.la;this.la=bu(),this.Pa.forEach((e=>{this.ma(e.key)&&(this.la=this.la.add(e.key))}));const t=[];return e.forEach((e=>{this.la.has(e)||t.push(new Gd(e))})),this.la.forEach((n=>{e.has(n)||t.push(new Hd(n))})),t}fa(e){this.ua=e.hs,this.la=bu();const t=this.Ta(e.documents);return this.applyChanges(t,!0)}ga(){return xd.fromInitialDocuments(this.query,this.Pa,this.mutatedKeys,0===this.ca,this.hasCachedResults)}}class Qd{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Jd{constructor(e){this.key=e,this.pa=!1}}class Xd{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.ya={},this.wa=new hu((e=>iu(e)),ru),this.Sa=new Map,this.ba=new Set,this.Da=new ja(la.comparator),this.Ca=new Map,this.va=new ml,this.Fa={},this.Ma=new Map,this.xa=hl.Ln(),this.onlineState="Unknown",this.Oa=void 0}get isPrimaryClient(){return!0===this.Oa}}async function Yd(e,t,n=!0){const r=_f(e);let i;const s=r.wa.get(t);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ga()):i=await ef(r,t,n,!0),i}async function Zd(e,t){const n=_f(e);await ef(n,t,!0,!1)}async function ef(e,t,n,r){const i=await Ll(e.localStore,eu(t)),s=i.targetId,o=n?e.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await tf(e,t,s,"current"===o,i.resumeToken)),e.isPrimaryClient&&n&&sd(e.remoteStore,i),a}async function tf(e,t,n,r,i){e.Na=(t,n,r)=>async function(e,t,n,r){let i=t.view.Ta(n);i.Xi&&(i=await Ml(e.localStore,t.query,!1).then((({documents:e})=>t.view.Ta(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=r&&null!=r.targetMismatches.get(t.targetId),a=t.view.applyChanges(i,e.isPrimaryClient,s,o);return pf(e,t.targetId,a.Va),a.snapshot}(e,t,n,r);const s=await Ml(e.localStore,t,!0),o=new Wd(t,s.hs),a=o.Ta(s.documents),c=yh.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=o.applyChanges(a,e.isPrimaryClient,c);pf(e,n,u.Va);const h=new Qd(t,n,o);return e.wa.set(t,h),e.Sa.has(n)?e.Sa.get(n).push(t):e.Sa.set(n,[t]),u.snapshot}async function nf(e,t,n){const r=$o(e),i=r.wa.get(t),s=r.Sa.get(i.targetId);if(s.length>1)return r.Sa.set(i.targetId,s.filter((e=>!ru(e,t)))),void r.wa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await xl(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),n&&od(r.remoteStore,i.targetId),df(r,i.targetId)})).catch(wa)):(df(r,i.targetId),await xl(r.localStore,i.targetId,!0))}async function rf(e,t){const n=$o(e),r=n.wa.get(t),i=n.Sa.get(r.targetId);n.isPrimaryClient&&1===i.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),od(n.remoteStore,r.targetId))}async function sf(e,t){const n=$o(e);try{const e=await function(e,t){const n=$o(e),r=t.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const o=[];t.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Qr.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.Qr.addMatchingKeys(e,s.addedDocuments,a))));let u=c.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(a)?u=u.withResumeToken(Ga.EMPTY_BYTE_STRING,oa.min()).withLastLimboFreeSnapshotVersion(oa.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0}(c,u,s)&&o.push(n.Qr.updateTargetData(e,u))}));let a=du(),c=bu();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(Ol(e,s,t.documentUpdates).next((e=>{a=e.cs,c=e.ls}))),!r.isEqual(oa.min())){const t=n.Qr.getLastRemoteSnapshotVersion(e).next((t=>n.Qr.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return _a.waitFor(o).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.ns=i,e)))}(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.Ca.get(t);r&&(qo(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.pa=!0:e.modifiedDocuments.size>0?qo(r.pa):e.removedDocuments.size>0&&(qo(r.pa),r.pa=!1))})),await yf(n,e,t)}catch(e){await wa(e)}}function of(e,t,n){const r=$o(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.wa.forEach(((n,r)=>{const i=r.view.G_(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=$o(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const e of n.Q_)e.G_(t)&&(r=!0)})),r&&qd(n)}(r.eventManager,t),e.length&&r.ya.u_(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function af(e,t,n){const r=$o(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Ca.get(t),s=i&&i.key;if(s){let e=new ja(la.comparator);e=e.insert(s,_c.newNoDocument(s,oa.min()));const n=bu().add(s),i=new mh(oa.min(),new Map,new ja(ra),e,n);await sf(r,i),r.Da=r.Da.remove(s),r.Ca.delete(t),mf(r)}else await xl(r.localStore,t,!1).then((()=>df(r,t,n))).catch(wa)}async function cf(e,t){const n=$o(e),r=t.batch.batchId;try{const e=await function(e,t){const n=$o(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=_a.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);qo(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=bu();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(n.localStore,t);lf(n,r,null),hf(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await yf(n,e)}catch(e){await wa(e)}}async function uf(e,t,n){const r=$o(e);try{const e=await function(e,t){const n=$o(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(qo(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);lf(r,t,n),hf(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await yf(r,e)}catch(n){await wa(n)}}function hf(e,t){(e.Ma.get(t)||[]).forEach((e=>{e.resolve()})),e.Ma.delete(t)}function lf(e,t,n){const r=$o(e);let i=r.Fa[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.Fa[r.currentUser.toKey()]=i}}function df(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Sa.get(t))e.wa.delete(r),n&&e.ya.La(r,n);e.Sa.delete(t),e.isPrimaryClient&&e.va.Vr(t).forEach((t=>{e.va.containsKey(t)||ff(e,t)}))}function ff(e,t){e.ba.delete(t.path.canonicalString());const n=e.Da.get(t);null!==n&&(od(e.remoteStore,n),e.Da=e.Da.remove(t),e.Ca.delete(n),mf(e))}function pf(e,t,n){for(const r of n)r instanceof Hd?(e.va.addReference(r.key,t),gf(e,r)):r instanceof Gd?(Uo("SyncEngine","Document no longer in limbo: "+r.key),e.va.removeReference(r.key,t),e.va.containsKey(r.key)||ff(e,r.key)):Bo()}function gf(e,t){const n=t.key,r=n.path.canonicalString();e.Da.get(n)||e.ba.has(r)||(Uo("SyncEngine","New document in limbo: "+n),e.ba.add(r),mf(e))}function mf(e){for(;e.ba.size>0&&e.Da.size<e.maxConcurrentLimboResolutions;){const t=e.ba.values().next().value;e.ba.delete(t);const n=new la(ca.fromString(t)),r=e.xa.next();e.Ca.set(r,new Jd(n)),e.Da=e.Da.insert(n,r),sd(e.remoteStore,new rl(eu(Jc(n.path)),r,"TargetPurposeLimboResolution",Da._e))}}async function yf(e,t,n){const r=$o(e),i=[],s=[],o=[];r.wa.isEmpty()||(r.wa.forEach(((e,a)=>{o.push(r.Na(a,t,n).then((e=>{if((e||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){i.push(e);const t=Sl.Ki(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.ya.u_(i),await async function(e,t){const n=$o(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>_a.forEach(t,(t=>_a.forEach(t.qi,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>_a.forEach(t.Qi,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!Sa(e))throw e;Uo("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.ns.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.ns=n.ns.insert(t,i)}}}(r.localStore,s))}async function vf(e,t){const n=$o(e);if(!n.currentUser.isEqual(t)){Uo("SyncEngine","User change. New user:",t.toKey());const e=await Dl(n.localStore,t);n.currentUser=t,function(e,t){e.Ma.forEach((e=>{e.forEach((e=>{e.reject(new Ko(zo.CANCELLED,t))}))})),e.Ma.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await yf(n,e.us)}}function wf(e,t){const n=$o(e),r=n.Ca.get(t);if(r&&r.pa)return bu().add(r.key);{let e=bu();const r=n.Sa.get(t);if(!r)return e;for(const t of r){const r=n.wa.get(t);e=e.unionWith(r.view.Ia)}return e}}function _f(e){const t=$o(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=sf.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=wf.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=af.bind(null,t),t.ya.u_=jd.bind(null,t.eventManager),t.ya.La=Bd.bind(null,t.eventManager),t}function bf(e){const t=$o(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=cf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=uf.bind(null,t),t}class Ef{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ql(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return Nl(this.persistence,new Al,e.initialUser,this.serializer)}createPersistence(e){return new El(Tl.Hr,this.serializer)}createSharedClientState(e){return new Vl}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class If{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>of(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=vf.bind(null,this.syncEngine),await kd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Ud}createDatastore(e){const t=Ql(e.databaseInfo.databaseId),n=function(e){return new Gl(e)}(e.databaseInfo);return function(e,t,n,r){return new ed(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(e,t,n,r,i){return new nd(e,t,n,r,i)}(this.localStore,this.datastore,e.asyncQueue,(e=>of(this.syncEngine,e,0)),Bl.D()?new Bl:new jl)}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new Xd(e,t,n,r,i,s);return o&&(a.Oa=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e;await async function(e){const t=$o(e);Uo("RemoteStore","RemoteStore shutting down."),t.v_.add(5),await id(t),t.M_.shutdown(),t.x_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate()}}
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
class Tf{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.qa(this.observer.next,e)}error(e){this.observer.error?this.qa(this.observer.error,e):Fo("Uncaught Error in snapshot listener:",e.toString())}Qa(){this.muted=!0}qa(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
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
class Sf{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Po.UNAUTHENTICATED,this.clientId=na.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Uo("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(Uo("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Ko(zo.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ho;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Od(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Cf(e,t){e.asyncQueue.verifyOperationInProgress(),Uo("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await Dl(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function Af(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Nf(e);Uo("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener((e=>Ad(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>Ad(t.remoteStore,n))),e._onlineComponents=t}function kf(e){return"FirebaseError"===e.name?e.code===zo.FAILED_PRECONDITION||e.code===zo.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function Nf(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){Uo("FirestoreClient","Using user provided OfflineComponentProvider");try{await Cf(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!kf(n))throw n;Vo("Error using user provided cache. Falling back to memory cache: "+n),await Cf(e,new Ef)}}else Uo("FirestoreClient","Using default OfflineComponentProvider"),await Cf(e,new Ef);return e._offlineComponents}async function Df(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(Uo("FirestoreClient","Using user provided OnlineComponentProvider"),await Af(e,e._uninitializedComponentsProvider._online)):(Uo("FirestoreClient","Using default OnlineComponentProvider"),await Af(e,new If))),e._onlineComponents}function Rf(e){return Df(e).then((e=>e.syncEngine))}async function Of(e){const t=await Df(e),n=t.eventManager;return n.onListen=Yd.bind(null,t.syncEngine),n.onUnlisten=nf.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=Zd.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=rf.bind(null,t.syncEngine),n}function Pf(e,t,n={}){const r=new Ho;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new Tf({next:s=>{t.enqueueAndForget((()=>Vd(e,o)));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new Ko(zo.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new Ko(zo.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new Kd(Jc(n.path),s,{includeMetadataChanges:!0,ta:!0});return Fd(e,o)}(await Of(e),e.asyncQueue,t,n,r))),r.promise}
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
function Lf(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
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
 */}const xf=new Map;
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
 */function Mf(e,t,n){if(!n)throw new Ko(zo.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Uf(e){if(!la.isDocumentKey(e))throw new Ko(zo.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Ff(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":Bo()}function Vf(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Ko(zo.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ff(e);throw new Ko(zo.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
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
class jf{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new Ko(zo.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Ko(zo.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new Ko(zo.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Lf(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new Ko(zo.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new Ko(zo.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new Ko(zo.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
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
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(e,t){return e.timeoutSeconds===t.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Bf{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Ko(zo.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Ko(zo.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jf(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Wo;switch(e.type){case"firstParty":return new Yo(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new Ko(zo.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=xf.get(e);t&&(Uo("ComponentProvider","Removing Datastore"),xf.delete(e),t.terminate())}(this),Promise.resolve()}}
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
class qf{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new qf(this.firestore,e,this._query)}}class $f{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zf(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $f(this.firestore,e,this._key)}}class zf extends qf{constructor(e,t,n){super(e,t,Jc(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $f(this.firestore,null,new la(e))}withConverter(e){return new zf(this.firestore,e,this._path)}}function Kf(t,n,...r){if(t=(0,e.Ku)(t),1===arguments.length&&(n=na.newId()),Mf("doc","path",n),t instanceof Bf){const e=ca.fromString(n,...r);return Uf(e),new $f(t,null,new la(e))}{if(!(t instanceof $f||t instanceof zf))throw new Ko(zo.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const e=t._path.child(ca.fromString(n,...r));return Uf(e),new $f(t.firestore,t instanceof zf?t.converter:null,new la(e))}}
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
class Hf{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new Jl(this,"async_queue_retry"),this.cu=()=>{const e=Wl();e&&Uo("AsyncQueue","Visibility state changed to "+e.visibilityState),this.jo.Ko()};const e=Wl();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.lu(),this.hu(e)}enterRestrictedMode(e){if(!this.iu){this.iu=!0,this.au=e||!1;const t=Wl();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.cu)}}enqueue(e){if(this.lu(),this.iu)return new Promise((()=>{}));const t=new Ho;return this.hu((()=>this.iu&&this.au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.ru.push(e),this.Pu())))}async Pu(){if(0!==this.ru.length){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(e){if(!Sa(e))throw e;Uo("AsyncQueue","Operation failed with retryable error: "+e)}this.ru.length>0&&this.jo.qo((()=>this.Pu()))}}hu(e){const t=this.nu.then((()=>(this._u=!0,e().catch((e=>{this.ou=e,this._u=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
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
 */(e);throw Fo("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this._u=!1,e))))));return this.nu=t,t}enqueueAfterDelay(e,t,n){this.lu(),this.uu.indexOf(e)>-1&&(t=0);const r=Rd.createAndSchedule(this,e,t,n,(e=>this.Iu(e)));return this.su.push(r),r}lu(){this.ou&&Bo()}verifyOperationInProgress(){}async Tu(){let e;do{e=this.nu,await e}while(e!==this.nu)}Eu(e){for(const t of this.su)if(t.timerId===e)return!0;return!1}du(e){return this.Tu().then((()=>{this.su.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.su)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Tu()}))}Au(e){this.uu.push(e)}Iu(e){const t=this.su.indexOf(e);this.su.splice(t,1)}}class Gf extends Bf{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new Hf,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Qf(this),this._firestoreClient.terminate()}}function Wf(e){return e._firestoreClient||Qf(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Qf(e){var t,n,r;const i=e._freezeSettings(),s=function(e,t,n,r){return new tc(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,Lf(r.experimentalLongPollingOptions),r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new Sf(e._authCredentials,e._appCheckCredentials,e._queue,s),(null===(n=i.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}
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
class Jf{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Jf(Ga.fromBase64String(e))}catch(e){throw new Ko(zo.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Jf(Ga.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
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
 */class Xf{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Ko(zo.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ha(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
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
class Yf{constructor(e){this._methodName=e}}
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
 */class Zf{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Ko(zo.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Ko(zo.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ra(this._lat,e._lat)||ra(this._long,e._long)}}
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
 */const ep=/^__.*__$/;class tp{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Qu(e,this.data,this.fieldMask,t,this.fieldTransforms):new Wu(e,this.data,t,this.fieldTransforms)}}function np(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Bo()}}class rp{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Ru(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}mu(e){return new rp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}fu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.mu({path:n,gu:!1});return r.pu(e),r}yu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.mu({path:n,gu:!1});return r.Ru(),r}wu(e){return this.mu({path:void 0,gu:!0})}Su(e){return pp(e,this.settings.methodName,this.settings.bu||!1,this.path,this.settings.Du)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}Ru(){if(this.path)for(let e=0;e<this.path.length;e++)this.pu(this.path.get(e))}pu(e){if(0===e.length)throw this.Su("Document fields must not be empty");if(np(this.Vu)&&ep.test(e))throw this.Su('Document fields cannot begin and end with "__"')}}class ip{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Ql(e)}Cu(e,t,n,r=!1){return new rp({Vu:e,methodName:t,Du:n,path:ha.emptyPath(),gu:!1,bu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function sp(e){const t=e._freezeSettings(),n=Ql(e._databaseId);return new ip(e._databaseId,!!t.ignoreUndefinedProperties,n)}function op(e,t,n,r,i,s={}){const o=e.Cu(s.merge||s.mergeFields?2:0,t,n,i);hp("Data must be an object, but it was:",o,r);const a=cp(r,o);let c,u;if(s.merge)c=new Ka(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=lp(t,r,n);if(!o.contains(i))throw new Ko(zo.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);gp(e,i)||e.push(i)}c=new Ka(e),u=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=o.fieldTransforms;return new tp(new vc(a),c,u)}function ap(t,n){if(up(t=(0,e.Ku)(t)))return hp("Unsupported field value:",n,t),cp(t,n);if(t instanceof Yf)return function(e,t){if(!np(t.Vu))throw t.Su(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Su(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(t,n),null;if(void 0===t&&n.ignoreUndefinedProperties)return null;if(n.path&&n.fieldMask.push(n.path),t instanceof Array){if(n.settings.gu&&4!==n.Vu)throw n.Su("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=ap(i,t.wu(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(t,n)}return function(t,n){if(null===(t=(0,e.Ku)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Cu(n.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const e=sa.fromDate(t);return{timestampValue:Dh(n.serializer,e)}}if(t instanceof sa){const e=new sa(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Dh(n.serializer,e)}}if(t instanceof Zf)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Jf)return{bytesValue:Rh(n.serializer,t._byteString)};if(t instanceof $f){const e=n.databaseId,r=t.firestore._databaseId;if(!r.isEqual(e))throw n.Su(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${e.projectId}/${e.database}`);return{referenceValue:Lh(t.firestore._databaseId||n.databaseId,t._key.path)}}throw n.Su(`Unsupported field value: ${Ff(t)}`)}(t,n)}function cp(e,t){const n={};return Va(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Fa(e,((e,r)=>{const i=ap(r,t.fu(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function up(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof sa||e instanceof Zf||e instanceof Jf||e instanceof $f||e instanceof Yf)}function hp(e,t,n){if(!up(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=Ff(n);throw"an object"===r?t.Su(e+" a custom object"):t.Su(e+" "+r)}}function lp(t,n,r){if((n=(0,e.Ku)(n))instanceof Xf)return n._internalPath;if("string"==typeof n)return fp(t,n);throw pp("Field path arguments must be of type string or ",t,!1,void 0,r)}const dp=new RegExp("[~\\*/\\[\\]]");function fp(e,t,n){if(t.search(dp)>=0)throw pp(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Xf(...t.split("."))._internalPath}catch(r){throw pp(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function pp(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new Ko(zo.INVALID_ARGUMENT,a+e+c)}function gp(e,t){return e.some((e=>e.isEqual(t)))}
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
 */class mp{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new $f(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new yp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(vp("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class yp extends mp{data(){return super.data()}}function vp(e,t){return"string"==typeof t?fp(e,t):t instanceof Xf?t._internalPath:t._delegate._internalPath}
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
 */class wp{convertValue(e,t="none"){switch(ic(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ja(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Xa(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Bo()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Fa(e,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new Zf(Ja(e.latitude),Ja(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Za(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(ec(e));default:return null}}convertTimestamp(e){const t=Qa(e);return new sa(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=ca.fromString(e);qo(nl(n));const r=new nc(n.get(1),n.get(3)),i=new la(n.popFirst(5));return r.isEqual(t)||Fo(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
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
 */function _p(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}
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
class bp{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ep extends mp{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ip(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(vp("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Ip extends Ep{data(e={}){return super.data(e)}}
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
function Tp(e){e=Vf(e,$f);const t=Vf(e.firestore,Gf);return Pf(Wf(t),e._key).then((n=>kp(t,e,n)))}class Sp extends wp{constructor(e){super(),this.firestore=e}convertBytes(e){return new Jf(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new $f(this.firestore,null,t)}}function Cp(e,t,n){e=Vf(e,$f);const r=Vf(e.firestore,Gf),i=_p(e.converter,t,n);return Ap(r,[op(sp(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,ju.none())])}function Ap(e,t){return function(e,t){const n=new Ho;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){const r=bf(e);try{const e=await function(e,t){const n=$o(e),r=sa.now(),i=t.reduce(((e,t)=>e.add(t.key)),bu());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=du(),c=bu();return n.os.getEntries(e,i).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((i=>{s=i;const o=[];for(const e of t){const t=Hu(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new Qu(e.key,t,wc(t.value.mapValue),ju.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)})).next((t=>{o=t;const r=t.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:gu(s)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Fa[e.currentUser.toKey()];r||(r=new ja(ra)),r=r.insert(t,n),e.Fa[e.currentUser.toKey()]=r}(r,e.batchId,n),await yf(r,e.changes),await vd(r.remoteStore)}catch(e){const t=Od(e,"Failed to persist write");n.reject(t)}}(await Rf(e),t,n))),n.promise}(Wf(e),t)}function kp(e,t,n){const r=n.docs.get(t._key),i=new Sp(e);return new Ep(e,i,t._key,r,new bp(n.hasPendingWrites,n.fromCache),t.converter)}
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
 */!function(e,n=!0){!function(e){Lo=e}(t.MF),(0,t.om)(new s.uA("firestore",((e,{instanceIdentifier:t,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new Gf(new Jo(e.getProvider("auth-internal")),new ea(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Ko(zo.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new nc(e.options.projectId,t)}(i,t),i);return r=Object.assign({useFetchStreams:n},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),(0,t.KO)(Oo,"4.5.0",e),(0,t.KO)(Oo,"4.5.0","esm2017")}();var Np=n(6582),Dp=function(e,t,n,r){return new(n||(n=Promise))((function(i,s){function o(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}c((r=r.apply(e,t||[])).next())}))},Rp=function(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;s&&(s=0,a[0]&&(o=0)),o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}};(0,Np.o)();var Op=function(n=(0,t.Sx)()){const r=(0,t.j6)(n,"auth");if(r.isInitialized())return r.getImmediate();const i=
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
function(n,r){const i=(0,t.j6)(n,"auth");if(i.isInitialized()){const t=i.getImmediate(),n=i.getOptions();if((0,e.bD)(n,null!=r?r:{}))return t;l(t,"already-initialized")}return i.initialize({options:r})}(n,{popupRedirectResolver:sn,persistence:[ft,Je,Ye]}),s=(0,e.XA)("authTokenSyncURL");if(s&&s.match(/^\/[^\/].*/)){const t=(o=s,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>un)return;const r=null==t?void 0:t.token;hn!==r&&(hn=r,await fetch(o,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(t,n,r){(0,e.Ku)(t).beforeAuthStateChanged(n,r)}(i,t,(()=>t(i.currentUser))),function(t,n,r,i){(0,e.Ku)(t).onIdTokenChanged(n,r,i)}(i,(e=>t(e)))}var o;const a=(0,e.Tj)("auth");return a&&be(i,`http://${a}`),i}(),Pp=function(n,r){const i="object"==typeof n?n:(0,t.Sx)(),s="string"==typeof n?n:r||"(default)",o=(0,t.j6)(i,"firestore").getImmediate({identifier:s});if(!o._initialized){const t=(0,e.yU)("firestore");t&&function(t,n,r,i={}){var s;const o=(t=Vf(t,Bf))._getSettings(),a=`${n}:${r}`;if("firestore.googleapis.com"!==o.host&&o.host!==a&&Vo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),i.mockUserToken){let n,r;if("string"==typeof i.mockUserToken)n=i.mockUserToken,r=Po.MOCK_USER;else{n=(0,e.Fy)(i.mockUserToken,null===(s=t._app)||void 0===s?void 0:s.options.projectId);const o=i.mockUserToken.sub||i.mockUserToken.user_id;if(!o)throw new Ko(zo.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");r=new Po(o)}t._authCredentials=new Qo(new Go(n,r))}}(o,...t)}return o}();console.info("[loadSidebar.ts]: Loading Sidebar..."),document.querySelector(".p-4").style.display="none",function(t,n,r,i){(0,e.Ku)(t).onAuthStateChanged(n,r,i)}(Op,(function(e){return Dp(void 0,void 0,void 0,(function(){var t,n,r,i,s;return Rp(this,(function(o){return/MSIE \d|Trident.*rv:/.test(navigator.userAgent)||/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)&&(null!==(r=navigator.userAgent.match(/Chrome\/(\d{3})/))&&void 0!==r?r:[])[1]&&parseInt((null!==(i=navigator.userAgent.match(/Chrome\/(\d{3})/))&&void 0!==i?i:[])[1])<107||Number.isNaN(parseInt((null!==(s=navigator.userAgent.match(/Chrome\/(\d{3})/))&&void 0!==s?s:[])[1]))||/MSIE \d|Trident.*rv:/.test(navigator.userAgent)?(window.location.href="/category/infomation/unsupported-browser.html",[2]):null===e?(console.log("[loadSidebar.ts] User is not signed in"),(t=new XMLHttpRequest).open("GET","/auth/panel/sidebar.html",!0),t.onreadystatechange=function(){return Dp(this,void 0,void 0,(function(){var e,n;return Rp(this,(function(r){return 4===t.readyState&&200===t.status&&(e=t.responseText,null!==(n=document.querySelector("#settings-sidebar"))&&(n.innerHTML=e),n.style.pointerEvents="none",n.style.opacity="0.5",console.info("[loadSidebar.ts] Sidebar loaded"),document.querySelector(".p-4").style.display=""),[2]}))}))},t.send(),[2]):((n=new XMLHttpRequest).open("GET","/auth/panel/sidebar.html",!0),n.onreadystatechange=function(){return Dp(this,void 0,void 0,(function(){var t,r,i,s,o;return Rp(this,(function(a){switch(a.label){case 0:return 4!==n.readyState||200!==n.status?[3,2]:(t=n.responseText,null!==(r=document.querySelector("#settings-sidebar"))&&(r.innerHTML=t),console.info("[loadSidebar.ts] Sidebar loaded"),i=document.getElementById("premiumUpgradeUpsell_Text"),s=document.getElementById("premiumUpgradeUpsell_Button"),[4,Tp(Kf(Pp,"patreonlinkstatus",e.uid))]);case 1:if(!(o=a.sent()).exists())return document.querySelector(".p-4").style.display="",[2];switch(o.data().lastChecked+6048e5<Date.now()&&"free"!==o.data().plan&&"owner"!==o.data().plan&&!1===o.data().isStudent&&Cp(Kf(Pp,"patreonlinkstatus",e.uid),{linked:!0,id:null==e?void 0:e.uid,isStudent:!1,isExpired:!0,lastChecked:(new Date).toISOString(),plan:"free"}),o.data().lastChecked+31556952e3<Date.now()&&o.data().isStudent&&Cp(Kf(Pp,"patreonlinkstatus",e.uid),{linked:!0,id:"student-"+(null==e?void 0:e.uid),isStudent:!1,isExpired:!0,lastChecked:(new Date).toISOString(),plan:"free"}),console.log("[loadSidebar.ts] User is signed in","\nUser Plan:",o.data().plan,"\nisStudent (old linked user is undefined): ",o.data().isStudent,"\nisExpired (undefined in not expired): ",o.data().isExpired),o.data().plan){case"owner":i.textContent="おめでとうございます。あなたのアカウントはオーナー権限を持っています。",s.classList.add("is-hidden");break;case"enhanced":i.textContent="おめでとうございます。あなたのEnhancedはアクティブです。",s.classList.add("is-hidden");break;case"premium":i.textContent="おめでとうございます。あなたのプレミアムはアクティブです。",s.innerHTML='<i class="fas fa-money-bill"></i>アップグレード';break;case"standard":i.textContent="おめでとうございます。あなたのStandardはアクティブです。",s.textContent='<i class="fas fa-money-bill"></i>アップグレード'}o.data().isStudent&&(i.textContent="おめでとうございます。あなたのアカウントは学生プランを持っています。(学生の間、無料です)",s.classList.add("is-hidden")),o.data().isExpired&&(i.textContent="あなたのプランを再確認する必要があります。Patreonアカウントを再リンクしてください。再確認するまで、一時的にプレミアムの特典は利用できなくなります。",s.classList.remove("is-hidden"),s.textContent="Patreonアカウントを再リンク",o.data().id.includes("student-")&&(i.innerHTML='あなたが学生であることを再確認する必要があります。再確認するまで、一時的にプレミアムの特典は利用できなくなります。<br>もう学生ではありませんか？<a href="/auth/panel/patreon.html">こちら</a>をクリックしてプレミアムへアップグレードしてください。',s.textContent="学生確認へ",s.href="/student/")),document.querySelector(".p-4").style.display="",a.label=2;case 2:return[2]}}))}))},n.send(),[2])}))}))}))})()})();