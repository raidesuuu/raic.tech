(()=>{"use strict";var e={6743:(e,t,n)=>{n.d(t,{$L:()=>x,$g:()=>k,A4:()=>d,Am:()=>K,As:()=>L,Cv:()=>F,FA:()=>D,Fy:()=>b,Hk:()=>r,I9:()=>H,Im:()=>j,K3:()=>a,KA:()=>l,Ku:()=>te,OE:()=>ee,T9:()=>y,Tj:()=>m,Uj:()=>h,XA:()=>v,ZQ:()=>E,bD:()=>z,cY:()=>w,dI:()=>X,eX:()=>R,g:()=>P,gR:()=>V,gz:()=>G,hp:()=>W,jZ:()=>I,kH:()=>B,kj:()=>Z,lT:()=>S,lV:()=>C,nr:()=>A,qc:()=>U,sr:()=>T,tD:()=>Q,u:()=>u,vA:()=>s,yU:()=>_,yw:()=>q,zW:()=>N});
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
const i={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},s=function(e,t){if(!e)throw r(t)},r=function(e){return new Error("Firebase Database ("+i.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},o=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296==(64512&s)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++i)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},a={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const s=e[t],r=t+1<e.length,o=r?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,l=s>>2,h=(3&s)<<4|o>>4;let u=(15&o)<<2|c>>6,d=63&c;a||(d=64,r||(u=64)),i.push(n[l],n[h],n[u],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(o(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const s=e[n++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=e[n++];t[i++]=String.fromCharCode((31&s)<<6|63&r)}else if(s>239&&s<365){const r=((7&s)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(r>>10)),t[i++]=String.fromCharCode(56320+(1023&r))}else{const r=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const s=n[e.charAt(t++)],r=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==s||null==r||null==o||null==a)throw new c;const l=s<<2|r>>4;if(i.push(l),64!==o){const e=r<<4&240|o>>2;if(i.push(e),64!==a){const e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
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
 */class c extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const l=function(e){const t=o(e);return a.encodeByteArray(t,!0)},h=function(e){return l(e).replace(/\./g,"")},u=function(e){try{return a.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
function d(e){return f(void 0,e)}function f(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=f(e[n],t[n]));return e}
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
const p=()=>
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n.g)return n.g;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,g=()=>{try{return p()||(()=>{if("undefined"==typeof process||void 0===process.env)return;const e=process.env.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&u(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},m=e=>{var t,n;return null===(n=null===(t=g())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},_=e=>{const t=m(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},y=()=>{var e;return null===(e=g())||void 0===e?void 0:e.config},v=e=>{var t;return null===(t=g())||void 0===t?void 0:t[`_${e}`]};
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
class w{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
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
 */function b(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[h(JSON.stringify({alg:"none",type:"JWT"})),h(JSON.stringify(r)),""].join(".")}
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
 */function E(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function I(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(E())}function T(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function C(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function S(){const e=E();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function k(){return!0===i.NODE_CLIENT||!0===i.NODE_ADMIN}function A(){return!function(){var e;const t=null===(e=g())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(e){return!1}}()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function N(){try{return"object"==typeof indexedDB}catch(e){return!1}}function R(){return new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var e;t((null===(e=s.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}class P extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,P.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,D.prototype.create)}}class D{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],r=s?function(e,t){return e.replace(O,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(s,n):"Error",o=`${this.serviceName}: ${r} (${i}).`;return new P(i,o,n)}}const O=/\{\$([^}]+)}/g;
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
 */function x(e){return JSON.parse(e)}function L(e){return JSON.stringify(e)}
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
 */const M=function(e){let t={},n={},i={},s="";try{const r=e.split(".");t=x(u(r[0])||""),n=x(u(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:i,signature:s}},F=function(e){const t=M(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},U=function(e){const t=M(e).claims;return"object"==typeof t&&!0===t.admin};
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
function V(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function q(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function j(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function B(e,t,n){const i={};for(const s in e)Object.prototype.hasOwnProperty.call(e,s)&&(i[s]=t.call(n,e[s],s,e));return i}function z(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const s of n){if(!i.includes(s))return!1;const n=e[s],r=t[s];if($(n)&&$(r)){if(!z(n,r))return!1}else if(n!==r)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function $(e){return null!==e&&"object"==typeof e}
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
function K(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function H(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function W(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */class G{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let i=0;i<16;i++)n[i]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let i,s,r=this.chain_[0],o=this.chain_[1],a=this.chain_[2],c=this.chain_[3],l=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(i=c^o&(a^c),s=1518500249):(i=o^a^c,s=1859775393):e<60?(i=o&a|c&(o|a),s=2400959708):(i=o^a^c,s=3395469782);const t=(r<<5|r>>>27)+i+l+s+n[e]&4294967295;l=c,c=a,a=4294967295&(o<<30|o>>>2),o=r,r=t}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const s=this.buf_;let r=this.inbuf_;for(;i<t;){if(0===r)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(s[r]=e.charCodeAt(i),++r,++i,r===this.blockSize){this.compress_(s),r=0;break}}else for(;i<t;)if(s[r]=e[i],++r,++i,r===this.blockSize){this.compress_(s),r=0;break}}this.inbuf_=r,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[t]>>i&255,++n;return e}}function Q(e,t){const n=new Y(e,t);return n.subscribe.bind(n)}class Y{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=J),void 0===i.error&&(i.error=J),void 0===i.complete&&(i.complete=J);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),s}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function J(){}
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
 */function X(e,t){return`${e} failed: ${t} argument `}
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
const Z=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);if(r>=55296&&r<=56319){const t=r-55296;i++,s(i<e.length,"Surrogate pair missing trail surrogate.");r=65536+(t<<10)+(e.charCodeAt(i)-56320)}r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):r<65536?(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},ee=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
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
function te(e){return e&&e._delegate?e._delegate:e}},6582:(e,t,n)=>{n.d(t,{o:()=>s});var i=n(1990);function s(){"10.249.176.251"!=window.location.hostname&&setInterval((function(){}),1);var e={apiKey:(0,String.fromCharCode)(65,73,122,97,83,121,68,68,95,65,83,90,45,83,104,110,103,89,80,116,117,109,114,86,75,77,51,89,72,54,55,114,69,73,54,98,98,82,99),authDomain:"auth.raic.tech",projectId:"e-mediator-401323",storageBucket:"e-mediator-401323.appspot.com",messagingSenderId:"237760903684"};void 0!==e?((0,i.Wp)(e),console.log("[firebase.ts] Initialized Firebase App (Type: InitApp)")):console.error("[firebase.ts] Firebase Config is not defined")}
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
(0,i.KO)("firebase","10.9.0","app")},1990:(e,t,n)=>{n.d(t,{MF:()=>F,j6:()=>O,om:()=>D,Sx:()=>V,Wp:()=>U,KO:()=>q});var i=n(5125),s=n(3424),r=n(6743);const o=(e,t)=>t.some((t=>e instanceof t));let a,c;const l=new WeakMap,h=new WeakMap,u=new WeakMap,d=new WeakMap,f=new WeakMap;let p={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return h.get(e);if("objectStoreNames"===t)return e.objectStoreNames||u.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function g(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(y(this),t),_(l.get(this))}:function(...t){return _(e.apply(y(this),t))}:function(t,...n){const i=e.call(y(this),t,...n);return u.set(i,t.sort?t.sort():[t]),_(i)}}function m(e){return"function"==typeof e?g(e):(e instanceof IDBTransaction&&function(e){if(h.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",r),e.removeEventListener("abort",r)},s=()=>{t(),i()},r=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",r),e.addEventListener("abort",r)}));h.set(e,t)}(e),o(e,a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,p):e)}function _(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",r)},s=()=>{t(_(e.result)),i()},r=()=>{n(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",r)}));return t.then((t=>{t instanceof IDBCursor&&l.set(t,e)})).catch((()=>{})),f.set(t,e),t}(e);if(d.has(e))return d.get(e);const t=m(e);return t!==e&&(d.set(e,t),f.set(t,e)),t}const y=e=>f.get(e);const v=["get","getKey","getAll","getAllKeys","count"],w=["put","add","delete","clear"],b=new Map;function E(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(b.get(t))return b.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,s=w.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!s&&!v.includes(n))return;const r=async function(e,...t){const r=this.transaction(e,s?"readwrite":"readonly");let o=r.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),s&&r.done]))[0]};return b.set(t,r),r}p=(e=>({...e,get:(t,n,i)=>E(t,n)||e.get(t,n,i),has:(t,n)=>!!E(t,n)||e.has(t,n)}))(p);
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
class I{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const T="@firebase/app",C="0.9.29",S=new s.Vy("@firebase/app"),k="[DEFAULT]",A={[T]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},N=new Map,R=new Map;function P(e,t){try{e.container.addComponent(t)}catch(n){S.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function D(e){const t=e.name;if(R.has(t))return S.debug(`There were multiple attempts to register component ${t}.`),!1;R.set(t,e);for(const t of N.values())P(t,e);return!0}function O(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
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
const x={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},L=new r.FA("app","Firebase",x);
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
class M{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new i.uA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw L.create("app-deleted",{appName:this._name})}}
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
 */const F="10.9.0";function U(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const s=Object.assign({name:k,automaticDataCollectionEnabled:!1},t),o=s.name;if("string"!=typeof o||!o)throw L.create("bad-app-name",{appName:String(o)});if(n||(n=(0,r.T9)()),!n)throw L.create("no-options");const a=N.get(o);if(a){if((0,r.bD)(n,a.options)&&(0,r.bD)(s,a.config))return a;throw L.create("duplicate-app",{appName:o})}const c=new i.h1(o);for(const e of R.values())c.addComponent(e);const l=new M(n,s,c);return N.set(o,l),l}function V(e=k){const t=N.get(e);if(!t&&e===k&&(0,r.T9)())return U();if(!t)throw L.create("no-app",{appName:e});return t}function q(e,t,n){var s;let r=null!==(s=A[e])&&void 0!==s?s:e;n&&(r+=`-${n}`);const o=r.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${r}" with version "${t}":`];return o&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void S.warn(e.join(" "))}D(new i.uA(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}
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
const j="firebase-heartbeat-database",B=1,z="firebase-heartbeat-store";let $=null;function K(){return $||($=function(e,t,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(e,t),a=_(o);return i&&o.addEventListener("upgradeneeded",(e=>{i(_(o.result),e.oldVersion,e.newVersion,_(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{r&&e.addEventListener("close",(()=>r())),s&&e.addEventListener("versionchange",(e=>s(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}(j,B,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(z)}catch(e){console.warn(e)}}}).catch((e=>{throw L.create("idb-open",{originalErrorMessage:e.message})}))),$}async function H(e,t){try{const n=(await K()).transaction(z,"readwrite"),i=n.objectStore(z);await i.put(t,W(e)),await n.done}catch(e){if(e instanceof r.g)S.warn(e.message);else{const t=L.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});S.warn(t.message)}}}function W(e){return`${e.name}!${e.options.appId}`}
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
 */class G{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Y(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e,t;const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Q();if((null!=(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||(this._heartbeatsCache=await this._heartbeatsCachePromise,null!=(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))&&this._heartbeatsCache.lastSentHeartbeatDate!==i&&!this._heartbeatsCache.heartbeats.some((e=>e.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=Q(),{heartbeatsToSend:n,unsentEntries:i}=function(e,t=1024){const n=[];let i=e.slice();for(const s of e){const e=n.find((e=>e.agent===s.agent));if(e){if(e.dates.push(s.date),J(n)>t){e.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),J(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),s=(0,r.Uj)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Q(){return(new Date).toISOString().substring(0,10)}class Y{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,r.zW)()&&(0,r.eX)().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await K()).transaction(z),n=await t.objectStore(z).get(W(e));return await t.done,n}catch(e){if(e instanceof r.g)S.warn(e.message);else{const t=L.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});S.warn(t.message)}}}(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return H(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return H(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function J(e){return(0,r.Uj)(JSON.stringify({version:2,heartbeats:e})).length}
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
 */var X;X="",D(new i.uA("platform-logger",(e=>new I(e)),"PRIVATE")),D(new i.uA("heartbeat",(e=>new G(e)),"PRIVATE")),q(T,C,X),q(T,C,"esm2017"),q("fire-js","")},5125:(e,t,n)=>{n.d(t,{h1:()=>a,uA:()=>s});var i=n(6743);class s{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
 */const r="[DEFAULT]";
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
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new i.cY;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:r})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=r){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=r){return this.instances.has(e)}getOptions(e=r){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),s=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,i===r?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e=r){return this.component?this.component.multipleInstances?e:r:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class a{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},3424:(e,t,n)=>{n.d(t,{$b:()=>s,Vy:()=>l});
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
const i=[];var s;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(s||(s={}));const r={debug:s.DEBUG,verbose:s.VERBOSE,info:s.INFO,warn:s.WARN,error:s.ERROR,silent:s.SILENT},o=s.INFO,a={[s.DEBUG]:"log",[s.VERBOSE]:"log",[s.INFO]:"info",[s.WARN]:"warn",[s.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),s=a[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${i}]  ${e.name}:`,...n)};class l{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in s))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?r[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,s.DEBUG,...e),this._logHandler(this,s.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,s.VERBOSE,...e),this._logHandler(this,s.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,s.INFO,...e),this._logHandler(this,s.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,s.WARN,...e),this._logHandler(this,s.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,s.ERROR,...e),this._logHandler(this,s.ERROR,...e)}}}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var r=t[i]={exports:{}};return e[i](r,r.exports,n),r.exports}n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(1990),t=n(5125),i=n(6743),s=n(3424);const r="@firebase/database",o="1.0.3";
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
let a="";function c(e){a=e}
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
 */class l{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),(0,i.As)(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:(0,i.$L)(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
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
 */class h{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return(0,i.gR)(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
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
 */const u=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new l(t)}}catch(e){}return new h},d=u("localStorage"),f=u("sessionStorage"),p=new s.Vy("@firebase/database"),g=function(){let e=1;return function(){return e++}}(),m=function(e){const t=(0,i.kj)(e),n=new i.gz;n.update(t);const s=n.digest();return i.K3.encodeByteArray(s)},_=function(...e){let t="";for(let n=0;n<e.length;n++){const s=e[n];Array.isArray(s)||s&&"object"==typeof s&&"number"==typeof s.length?t+=_.apply(null,s):t+="object"==typeof s?(0,i.As)(s):s,t+=" "}return t};let y=null,v=!0;const w=function(e,t){(0,i.vA)(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(p.logLevel=s.$b.VERBOSE,y=p.log.bind(p),t&&f.set("logging_enabled",!0)):"function"==typeof e?y=e:(y=null,f.remove("logging_enabled"))},b=function(...e){if(!0===v&&(v=!1,null===y&&!0===f.get("logging_enabled")&&w(!0)),y){const t=_.apply(null,e);y(t)}},E=function(e){return function(...t){b(e,...t)}},I=function(...e){const t="FIREBASE INTERNAL ERROR: "+_(...e);p.error(t)},T=function(...e){const t=`FIREBASE FATAL ERROR: ${_(...e)}`;throw p.error(t),new Error(t)},C=function(...e){const t="FIREBASE WARNING: "+_(...e);p.warn(t)},S=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},k="[MIN_NAME]",A="[MAX_NAME]",N=function(e,t){if(e===t)return 0;if(e===k||t===A)return-1;if(t===k||e===A)return 1;{const n=F(e),i=F(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},R=function(e,t){return e===t?0:e<t?-1:1},P=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+(0,i.As)(t))},D=function(e){if("object"!=typeof e||null===e)return(0,i.As)(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let s=0;s<t.length;s++)0!==s&&(n+=","),n+=(0,i.As)(t[s]),n+=":",n+=D(e[t[s]]);return n+="}",n},O=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let s=0;s<n;s+=t)s+t>n?i.push(e.substring(s,n)):i.push(e.substring(s,s+t));return i};function x(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const L=function(e){(0,i.vA)(!S(e),"Invalid JSON number");const t=1023;let n,s,r,o,a;0===e?(s=0,r=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(o=Math.min(Math.floor(Math.log(e)/Math.LN2),t),s=o+t,r=Math.round(e*Math.pow(2,52-o)-Math.pow(2,52))):(s=0,r=Math.round(e/Math.pow(2,-1074))));const c=[];for(a=52;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);for(a=11;a;a-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(n?1:0),c.reverse();const l=c.join("");let h="";for(a=0;a<64;a+=8){let e=parseInt(l.substr(a,8),2).toString(16);1===e.length&&(e="0"+e),h+=e}return h.toLowerCase()};const M=new RegExp("^-?(0*)\\d{1,10}$"),F=function(e){if(M.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},U=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw C("Exception was thrown by user callback.",t),e}),Math.floor(0))}},V=function(e,t){const n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};
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
class q{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){C(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
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
 */class j{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(b("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',C(e)}}class B{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}B.OWNER="owner";
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
const z="5",$=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,K="ac",H="websocket",W="long_polling";
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
class G{constructor(e,t,n,i,s=!1,r="",o=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=r,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=d.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&d.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Q(e,t,n){let s;if((0,i.vA)("string"==typeof t,"typeof type must == string"),(0,i.vA)("object"==typeof n,"typeof params must == object"),t===H)s=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==W)throw new Error("Unknown connection type: "+t);s=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const r=[];return x(n,((e,t)=>{r.push(e+"="+t)})),s+r.join("&")}
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
 */class Y{constructor(){this.counters_={}}incrementCounter(e,t=1){(0,i.gR)(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return(0,i.A4)(this.counters_)}}
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
 */const J={},X={};function Z(e){const t=e.toString();return J[t]||(J[t]=new Y),J[t]}
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
class ee{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&U((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
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
 */const te="start";class ne{constructor(e,t,n,i,s,r,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.transportSessionId=r,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=E(e),this.stats_=Z(t),this.urlFn=e=>(this.appCheckToken&&(e[K]=this.appCheckToken),Q(t,W,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ee(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if((0,i.$g)()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new ie(((...e)=>{const[t,n,i,s,r]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===te)this.id=n,this.password=i;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={};e[te]="t",e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v=z,this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e[K]=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&$.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ne.forceAllow_=!0}static forceDisallow(){ne.forceDisallow_=!0}static isAvailable(){return!(0,i.$g)()&&(!!ne.forceAllow_||!(ne.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=(0,i.As)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=(0,i.KA)(t),s=O(n,1840);for(let e=0;e<s.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if((0,i.$g)())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=(0,i.As)(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class ie{constructor(e,t,n,s){if(this.onDisconnect=n,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,(0,i.$g)())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=g(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=ie.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(e){b("frame writing exception"),e.stack&&b(e.stack),b(e)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||b("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+i+"="+e.seg+"&ts"+i+"="+e.ts+"&d"+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(i),n()}))}addTag(e,t){(0,i.$g)()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{b("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}}
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
 */let se=null;"undefined"!=typeof MozWebSocket?se=MozWebSocket:"undefined"!=typeof WebSocket&&(se=WebSocket);class re{constructor(e,t,n,i,s,r,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=E(this.connId),this.stats_=Z(t),this.connURL=re.connectionURL_(t,r,o,i,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,s,r){const o={};return o.v=z,!(0,i.$g)()&&"undefined"!=typeof location&&location.hostname&&$.test(location.hostname)&&(o.r="f"),t&&(o.s=t),n&&(o.ls=n),s&&(o[K]=s),r&&(o.p=r),Q(e,H,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,d.set("previous_websocket_failure",!0);try{let e;if((0,i.$g)()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/${z}/${a}/${process.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n=process.env,i=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;i&&(e.proxy={origin:i})}this.mySock=new se(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){re.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==se&&!re.forceDisallow_}static previouslyFailed(){return d.isInMemoryStorage||!0===d.get("previous_websocket_failure")}markConnectionHealthy(){d.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=(0,i.$L)(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if((0,i.vA)(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=(0,i.As)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=O(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}re.responsesRequiredToBeHealthy=2,re.healthyTimeout=3e4;
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
class oe{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ne,re]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=re&&re.isAvailable();let n=t&&!re.previouslyFailed();if(e.webSocketOnly&&(t||C("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[re];else{const e=this.transports_=[];for(const t of oe.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);oe.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}oe.globalTransportInitialized_=!1;class ae{constructor(e,t,n,i,s,r,o,a,c,l){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=r,this.onReady_=o,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=E("c:"+this.id+":"),this.transportManager_=new oe(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=V((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=P("t",e),n=P("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=P("t",e),n=P("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=P("t",e);if("d"in e){const n=e.d;if("h"===t){const e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?I("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):I("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),z!==n&&C("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),V((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):V((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(d.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
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
 */class ce{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
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
 */class le{constructor(e){this.allowedEvents_=e,this.listeners_={},(0,i.vA)(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let e=0;e<i.length;e++)if(i[e].callback===t&&(!n||n===i[e].context))return void i.splice(e,1)}validateEventType_(e){(0,i.vA)(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
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
 */class he extends le{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||(0,i.jZ)()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new he}getInitialEvent(e){return(0,i.vA)("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
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
 */const ue=32,de=768;class fe{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function pe(){return new fe("")}function ge(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function me(e){return e.pieces_.length-e.pieceNum_}function _e(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new fe(e.pieces_,t)}function ye(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function ve(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function we(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new fe(t,0)}function be(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof fe)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new fe(n,0)}function Ee(e){return e.pieceNum_>=e.pieces_.length}function Ie(e,t){const n=ge(e),i=ge(t);if(null===n)return t;if(n===i)return Ie(_e(e),_e(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Te(e,t){if(me(e)!==me(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function Ce(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(me(e)>me(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class Se{constructor(e,t){this.errorPrefix_=t,this.parts_=ve(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=(0,i.OE)(this.parts_[e]);ke(this)}}function ke(e){if(e.byteLength_>de)throw new Error(e.errorPrefix_+"has a key path longer than "+de+" bytes ("+e.byteLength_+").");if(e.parts_.length>ue)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ue+") or object contains a cycle "+Ae(e))}function Ae(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
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
 */class Ne extends le{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new Ne}getInitialEvent(e){return(0,i.vA)("visible"===e,"Unknown event type: "+e),[this.visible_]}}
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
 */const Re=1e3;class Pe extends ce{constructor(e,t,n,s,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Pe.nextPersistentConnectionId_++,this.log_=E("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Re,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!(0,i.$g)())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ne.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&he.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_((0,i.As)(r)),(0,i.vA)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[s]=n)}get(e){this.initConnection_();const t=new i.cY,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),t.promise}listen(e,t,n,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),(0,i.vA)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),(0,i.vA)(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:n};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const s={p:n};e.tag&&(s.q=t._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest("q",s,(s=>{const r=s.d,o=s.s;Pe.warnOnListenWarnings_(r,t);(this.listens.get(n)&&this.listens.get(n).get(i))===e&&(this.log_("listen response",s),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,r))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&(0,i.gR)(e,"w")){const n=(0,i.yw)(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();C(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||(0,i.qc)(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=(0,i.Cv)(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+s),(0,i.vA)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,s)&&this.connected_&&this.sendUnlisten_(n,s,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const s={p:e};i&&(s.q=n,s.t=i),this.sendRequest("n",s)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const s={p:t,d:n};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,(e=>{i&&setTimeout((()=>{i(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,s){this.initConnection_();const r={p:t,d:n};void 0!==s&&(r.h=s),this.outstandingPuts_.push({action:e,request:r,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+(0,i.As)(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):I("Unrecognized action received from server: "+(0,i.As)(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){(0,i.vA)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Re,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Re,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=Re),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Pe.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,n())},l=function(e){(0,i.vA)(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:c,sendRequest:l};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[i,c]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?b("getToken() completed but was canceled"):(b("getToken() completed. Creating connection."),this.authToken_=i&&i.accessToken,this.appCheckToken_=c&&c.token,a=new ae(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{C(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),r))}catch(e){this.log_("Failed to get token: "+e),o||(this.repoInfo_.nodeAdmin&&C(e),c())}}}interrupt(e){b("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){b("Resuming connection for reason: "+e),delete this.interruptReasons_[e],(0,i.Im)(this.interruptReasons_)&&(this.reconnectDelay_=Re,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>D(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new fe(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){b("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){b("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";(0,i.$g)()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+a.replace(/\./g,"-")]=1,(0,i.jZ)()?e["framework.cordova"]=1:(0,i.lV)()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=he.getInstance().currentlyOnline();return(0,i.Im)(this.interruptReasons_)&&e}}Pe.nextPersistentConnectionId_=0,Pe.nextConnectionId_=0;
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
class De{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new De(e,t)}}
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
 */class Oe{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new De(k,e),i=new De(k,t);return 0!==this.compare(n,i)}minPost(){return De.MIN}}
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
 */let xe;class Le extends Oe{static get __EMPTY_NODE(){return xe}static set __EMPTY_NODE(e){xe=e}compare(e,t){return N(e.name,t.name)}isDefinedOn(e){throw(0,i.Hk)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return De.MIN}maxPost(){return new De(A,xe)}makePost(e,t){return(0,i.vA)("string"==typeof e,"KeyIndex indexValue must always be a string."),new De(e,xe)}toString(){return".key"}}const Me=new Le;
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
 */class Fe{constructor(e,t,n,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,i&&(r*=-1),r<0)e=this.isReverse_?e.left:e.right;else{if(0===r){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ue{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=null!=n?n:Ue.RED,this.left=null!=i?i:Ve.EMPTY_NODE,this.right=null!=s?s:Ve.EMPTY_NODE}copy(e,t,n,i,s){return new Ue(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===s?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ve.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Ve.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ue.RED=!0,Ue.BLACK=!1;class Ve{constructor(e,t=Ve.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Ve(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Ue.BLACK,null,null))}remove(e){return new Ve(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ue.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Fe(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Fe(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Fe(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Fe(this.root_,null,this.comparator_,!0,e)}}
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
function qe(e,t){return N(e.name,t.name)}function je(e,t){return N(e,t)}
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
 */let Be;Ve.EMPTY_NODE=new class{copy(e,t,n,i,s){return this}insert(e,t,n){return new Ue(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const ze=function(e){return"number"==typeof e?"number:"+L(e):"string:"+e},$e=function(e){if(e.isLeafNode()){const t=e.val();(0,i.vA)("string"==typeof t||"number"==typeof t||"object"==typeof t&&(0,i.gR)(t,".sv"),"Priority must be a string or number.")}else(0,i.vA)(e===Be||e.isEmpty(),"priority of unexpected type.");(0,i.vA)(e===Be||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
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
let Ke,He,We;class Ge{constructor(e,t=Ge.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,(0,i.vA)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),$e(this.priorityNode_)}static set __childrenNodeConstructor(e){Ke=e}static get __childrenNodeConstructor(){return Ke}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ge(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:Ge.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ee(e)?this:".priority"===ge(e)?this.priorityNode_:Ge.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:Ge.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=ge(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:((0,i.vA)(".priority"!==n||1===me(e),".priority must be the last token in a path"),this.updateImmediateChild(n,Ge.__childrenNodeConstructor.EMPTY_NODE.updateChild(_e(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ze(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?L(this.value_):this.value_,this.lazyHash_=m(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ge.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ge.__childrenNodeConstructor?-1:((0,i.vA)(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,s=Ge.VALUE_TYPE_ORDER.indexOf(t),r=Ge.VALUE_TYPE_ORDER.indexOf(n);return(0,i.vA)(s>=0,"Unknown leaf type: "+t),(0,i.vA)(r>=0,"Unknown leaf type: "+n),s===r?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}Ge.VALUE_TYPE_ORDER=["object","boolean","number","string"];const Qe=new class extends Oe{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),s=n.compareTo(i);return 0===s?N(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return De.MIN}maxPost(){return new De(A,new Ge("[PRIORITY-POST]",We))}makePost(e,t){const n=He(e);return new De(t,new Ge("[PRIORITY-POST]",n))}toString(){return".priority"}},Ye=Math.log(2);
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
 */class Je{constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/Ye,10)),this.current_=this.count-1;const n=(i=this.count,parseInt(Array(i+1).join("1"),2));var i;this.bits_=e+1&n}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Xe=function(e,t,n,i){e.sort(t);const s=function(t,i){const r=i-t;let o,a;if(0===r)return null;if(1===r)return o=e[t],a=n?n(o):o,new Ue(a,o.node,Ue.BLACK,null,null);{const c=parseInt(r/2,10)+t,l=s(t,c),h=s(c+1,i);return o=e[c],a=n?n(o):o,new Ue(a,o.node,Ue.BLACK,l,h)}},r=function(t){let i=null,r=null,o=e.length;const a=function(t,i){const r=o-t,a=o;o-=t;const l=s(r+1,a),h=e[r],u=n?n(h):h;c(new Ue(u,h.node,i,null,l))},c=function(e){i?(i.left=e,i=e):(r=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,Ue.BLACK):(a(i,Ue.BLACK),a(i,Ue.RED))}return r}(new Je(e.length));return new Ve(i||t,r)};
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
 */let Ze;const et={};class tt{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return(0,i.vA)(et&&Qe,"ChildrenNode.ts has not been loaded"),Ze=Ze||new tt({".priority":et},{".priority":Qe}),Ze}get(e){const t=(0,i.yw)(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Ve?t:null}hasIndex(e){return(0,i.gR)(this.indexSet_,e.toString())}addIndex(e,t){(0,i.vA)(e!==Me,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let s=!1;const r=t.getIterator(De.Wrap);let o,a=r.getNext();for(;a;)s=s||e.isDefinedOn(a.node),n.push(a),a=r.getNext();o=s?Xe(n,e.getCompare()):et;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const h=Object.assign({},this.indexes_);return h[c]=o,new tt(h,l)}addToIndexes(e,t){const n=(0,i.kH)(this.indexes_,((n,s)=>{const r=(0,i.yw)(this.indexSet_,s);if((0,i.vA)(r,"Missing index implementation for "+s),n===et){if(r.isDefinedOn(e.node)){const n=[],i=t.getIterator(De.Wrap);let s=i.getNext();for(;s;)s.name!==e.name&&n.push(s),s=i.getNext();return n.push(e),Xe(n,r.getCompare())}return et}{const i=t.get(e.name);let s=n;return i&&(s=s.remove(new De(e.name,i))),s.insert(e,e.node)}}));return new tt(n,this.indexSet_)}removeFromIndexes(e,t){const n=(0,i.kH)(this.indexes_,(n=>{if(n===et)return n;{const i=t.get(e.name);return i?n.remove(new De(e.name,i)):n}}));return new tt(n,this.indexSet_)}}
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
 */let nt;class it{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&$e(this.priorityNode_),this.children_.isEmpty()&&(0,i.vA)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return nt||(nt=new it(new Ve(je),null,tt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||nt}updatePriority(e){return this.children_.isEmpty()?this:new it(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?nt:t}}getChild(e){const t=ge(e);return null===t?this:this.getImmediateChild(t).getChild(_e(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if((0,i.vA)(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new De(e,t);let i,s;t.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(n,this.children_));const r=i.isEmpty()?nt:this.priorityNode_;return new it(i,r,s)}}updateChild(e,t){const n=ge(e);if(null===n)return t;{(0,i.vA)(".priority"!==ge(e)||1===me(e),".priority must be the last token in a path");const s=this.getImmediateChild(n).updateChild(_e(e),t);return this.updateImmediateChild(n,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,s=!0;if(this.forEachChild(Qe,((r,o)=>{t[r]=o.val(e),n++,s&&it.INTEGER_REGEXP_.test(r)?i=Math.max(i,Number(r)):s=!1})),!e&&s&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+ze(this.getPriority().val())+":"),this.forEachChild(Qe,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":m(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new De(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new De(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new De(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,De.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)<0;)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,De.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===st?-1:0}withIndex(e){if(e===Me||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new it(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Me||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(Qe),n=t.getIterator(Qe);let i=e.getNext(),s=n.getNext();for(;i&&s;){if(i.name!==s.name||!i.node.equals(s.node))return!1;i=e.getNext(),s=n.getNext()}return null===i&&null===s}return!1}return!1}}resolveIndex_(e){return e===Me?null:this.indexMap_.get(e.toString())}}it.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const st=new class extends it{constructor(){super(new Ve(je),it.EMPTY_NODE,tt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return it.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties(De,{MIN:{value:new De(k,it.EMPTY_NODE)},MAX:{value:new De(A,st)}}),Le.__EMPTY_NODE=it.EMPTY_NODE,Ge.__childrenNodeConstructor=it,Be=st,function(e){We=e}(st);
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
const rt=!0;function ot(e,t=null){if(null===e)return it.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),(0,i.vA)(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new Ge(e,ot(t))}if(e instanceof Array||!rt){let n=it.EMPTY_NODE;return x(e,((t,s)=>{if((0,i.gR)(e,t)&&"."!==t.substring(0,1)){const e=ot(s);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(ot(t))}{const n=[];let i=!1;if(x(e,((e,t)=>{if("."!==e.substring(0,1)){const s=ot(t);s.isEmpty()||(i=i||!s.getPriority().isEmpty(),n.push(new De(e,s)))}})),0===n.length)return it.EMPTY_NODE;const s=Xe(n,qe,(e=>e.name),je);if(i){const e=Xe(n,Qe.getCompare());return new it(s,ot(t),new tt({".priority":e},{".priority":Qe}))}return new it(s,ot(t),tt.Default)}}!function(e){He=e}(ot);
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
class at extends Oe{constructor(e){super(),this.indexPath_=e,(0,i.vA)(!Ee(e)&&".priority"!==ge(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),s=n.compareTo(i);return 0===s?N(e.name,t.name):s}makePost(e,t){const n=ot(e),i=it.EMPTY_NODE.updateChild(this.indexPath_,n);return new De(t,i)}maxPost(){const e=it.EMPTY_NODE.updateChild(this.indexPath_,st);return new De(A,e)}toString(){return ve(this.indexPath_,0).join("/")}}
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
 */const ct=new class extends Oe{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?N(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return De.MIN}maxPost(){return De.MAX}makePost(e,t){const n=ot(e);return new De(t,n)}toString(){return".value"}};
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
 */function lt(e){return{type:"value",snapshotNode:e}}function ht(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function ut(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function dt(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
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
class ft{constructor(e){this.index_=e}updateChild(e,t,n,s,r,o){(0,i.vA)(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(n.getChild(s))&&a.isEmpty()===n.isEmpty()?e:(null!=o&&(n.isEmpty()?e.hasChild(t)?o.trackChildChange(ut(t,a)):(0,i.vA)(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ht(t,n)):o.trackChildChange(dt(t,n,a))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(Qe,((e,i)=>{t.hasChild(e)||n.trackChildChange(ut(e,i))})),t.isLeafNode()||t.forEachChild(Qe,((t,i)=>{if(e.hasChild(t)){const s=e.getImmediateChild(t);s.equals(i)||n.trackChildChange(dt(t,i,s))}else n.trackChildChange(ht(t,i))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?it.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
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
 */class pt{constructor(e){this.indexedFilter_=new ft(e.getIndex()),this.index_=e.getIndex(),this.startPost_=pt.getStartPost_(e),this.endPost_=pt.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,i,s,r){return this.matches(new De(t,n))||(n=it.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,s,r)}updateFullNode(e,t,n){t.isLeafNode()&&(t=it.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(it.EMPTY_NODE);const s=this;return t.forEachChild(Qe,((e,t)=>{s.matches(new De(e,t))||(i=i.updateImmediateChild(e,it.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
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
 */class gt{constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{const t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{const t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new pt(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,i,s,r){return this.rangedFilter_.matches(new De(t,n))||(n=it.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,s,r):this.fullLimitUpdateChild_(e,t,n,s,r)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=it.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=it.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();if(this.withinDirectionalStart(t)){if(!this.withinDirectionalEnd(t))break;i=i.updateImmediateChild(t.name,t.node),n++}}}else{let e;i=t.withIndex(this.index_),i=i.updatePriority(it.EMPTY_NODE),e=this.reverse_?i.getReverseIterator(this.index_):i.getIterator(this.index_);let n=0;for(;e.hasNext();){const t=e.getNext();n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t)?n++:i=i.updateImmediateChild(t.name,it.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,s,r){let o;if(this.reverse_){const e=this.index_.getCompare();o=(t,n)=>e(n,t)}else o=this.index_.getCompare();const a=e;(0,i.vA)(a.numChildren()===this.limit_,"");const c=new De(t,n),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(c);if(a.hasChild(t)){const e=a.getImmediateChild(t);let i=s.getChildAfterChild(this.index_,l,this.reverse_);for(;null!=i&&(i.name===t||a.hasChild(i.name));)i=s.getChildAfterChild(this.index_,i,this.reverse_);const u=null==i?1:o(i,c);if(h&&!n.isEmpty()&&u>=0)return null!=r&&r.trackChildChange(dt(t,n,e)),a.updateImmediateChild(t,n);{null!=r&&r.trackChildChange(ut(t,e));const n=a.updateImmediateChild(t,it.EMPTY_NODE);return null!=i&&this.rangedFilter_.matches(i)?(null!=r&&r.trackChildChange(ht(i.name,i.node)),n.updateImmediateChild(i.name,i.node)):n}}return n.isEmpty()?e:h&&o(l,c)>=0?(null!=r&&(r.trackChildChange(ut(l.name,l.node)),r.trackChildChange(ht(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(l.name,it.EMPTY_NODE)):e}}
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
 */class mt{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Qe}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return(0,i.vA)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(0,i.vA)(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:k}hasEnd(){return this.endSet_}getIndexEndValue(){return(0,i.vA)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(0,i.vA)(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:A}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return(0,i.vA)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Qe}copy(){const e=new mt;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function _t(e){const t={};if(e.isDefault())return t;let n;if(e.index_===Qe?n="$priority":e.index_===ct?n="$value":e.index_===Me?n="$key":((0,i.vA)(e.index_ instanceof at,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=(0,i.As)(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=(0,i.As)(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+(0,i.As)(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=(0,i.As)(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+(0,i.As)(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function yt(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==Qe&&(t.i=e.index_.toString()),t}
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
 */class vt extends ce{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=E("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:((0,i.vA)(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=vt.getListenId_(e,n),a={};this.listens_[o]=a;const c=_t(e._queryParams);this.restRequest_(r+".json",c,((e,t)=>{let c=t;if(404===e&&(c=null,e=null),null===e&&this.onDataUpdate_(r,c,!1,n),(0,i.yw)(this.listens_,o)===a){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",s(t,null)}}))}unlisten(e,t){const n=vt.getListenId_(e,t);delete this.listens_[n]}get(e){const t=_t(e._queryParams),n=e._path.toString(),s=new i.cY;return this.restRequest_(n+".json",t,((e,t)=>{let i=t;404===e&&(i=null,e=null),null===e?(this.onDataUpdate_(n,i,!1,null),s.resolve(i)):s.reject(new Error(i))})),s.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+(0,i.Am)(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let e=null;if(a.status>=200&&a.status<300){try{e=(0,i.$L)(a.responseText)}catch(e){C("Failed to parse JSON response for "+o+": "+a.responseText)}n(null,e)}else 401!==a.status&&404!==a.status&&C("Got unsuccessful REST response for "+o+" Status: "+a.status),n(a.status);n=null}},a.open("GET",o,!0),a.send()}))}}
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
 */class wt{constructor(){this.rootNode_=it.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
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
 */function bt(){return{value:null,children:new Map}}function Et(e,t,n){if(Ee(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=ge(t);e.children.has(i)||e.children.set(i,bt());Et(e.children.get(i),t=_e(t),n)}}function It(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
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
 */(e,((e,i)=>{It(i,new fe(t.toString()+"/"+e),n)}))}class Tt{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&x(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
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
 */class Ct{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Tt(e);const n=1e4+2e4*Math.random();V(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;x(e,((e,s)=>{s>0&&(0,i.gR)(this.statsToReport_,e)&&(t[e]=s,n=!0)})),n&&this.server_.reportStats(t),V(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}
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
 */var St;function kt(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
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
 */!function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"}(St||(St={}));class At{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=St.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(e){if(Ee(this.path)){if(null!=this.affectedTree.value)return(0,i.vA)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new fe(e));return new At(pe(),t,this.revert)}}return(0,i.vA)(ge(this.path)===e,"operationForChild called for unrelated child."),new At(_e(this.path),this.affectedTree,this.revert)}}
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
 */class Nt{constructor(e,t){this.source=e,this.path=t,this.type=St.LISTEN_COMPLETE}operationForChild(e){return Ee(this.path)?new Nt(this.source,pe()):new Nt(this.source,_e(this.path))}}
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
 */class Rt{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=St.OVERWRITE}operationForChild(e){return Ee(this.path)?new Rt(this.source,pe(),this.snap.getImmediateChild(e)):new Rt(this.source,_e(this.path),this.snap)}}
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
 */class Pt{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=St.MERGE}operationForChild(e){if(Ee(this.path)){const t=this.children.subtree(new fe(e));return t.isEmpty()?null:t.value?new Rt(this.source,pe(),t.value):new Pt(this.source,pe(),t)}return(0,i.vA)(ge(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Pt(this.source,_e(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
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
 */class Dt{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ee(e))return this.isFullyInitialized()&&!this.filtered_;const t=ge(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
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
 */class Ot{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function xt(e,t,n,s,r,o){const a=s.filter((e=>e.type===n));a.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw(0,i.Hk)("Should only compare child_ events.");const s=new De(t.childName,t.snapshotNode),r=new De(n.childName,n.snapshotNode);return e.index_.compare(s,r)}
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
 */(e,t,n))),a.forEach((n=>{const i=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,o);r.forEach((s=>{s.respondsTo(n.type)&&t.push(s.createEvent(i,e.query_))}))}))}function Lt(e,t){return{eventCache:e,serverCache:t}}function Mt(e,t,n,i){return Lt(new Dt(t,n,i),e.serverCache)}function Ft(e,t,n,i){return Lt(e.eventCache,new Dt(t,n,i))}function Ut(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Vt(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
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
 */let qt;class jt{constructor(e,t=(()=>(qt||(qt=new Ve(R)),qt))()){this.value=e,this.children=t}static fromObject(e){let t=new jt(null);return x(e,((e,n)=>{t=t.set(new fe(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:pe(),value:this.value};if(Ee(e))return null;{const n=ge(e),i=this.children.get(n);if(null!==i){const s=i.findRootMostMatchingPathAndValue(_e(e),t);if(null!=s){return{path:be(new fe(n),s.path),value:s.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(Ee(e))return this;{const t=ge(e),n=this.children.get(t);return null!==n?n.subtree(_e(e)):new jt(null)}}set(e,t){if(Ee(e))return new jt(t,this.children);{const n=ge(e),i=(this.children.get(n)||new jt(null)).set(_e(e),t),s=this.children.insert(n,i);return new jt(this.value,s)}}remove(e){if(Ee(e))return this.children.isEmpty()?new jt(null):new jt(null,this.children);{const t=ge(e),n=this.children.get(t);if(n){const i=n.remove(_e(e));let s;return s=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&s.isEmpty()?new jt(null):new jt(this.value,s)}return this}}get(e){if(Ee(e))return this.value;{const t=ge(e),n=this.children.get(t);return n?n.get(_e(e)):null}}setTree(e,t){if(Ee(e))return t;{const n=ge(e),i=(this.children.get(n)||new jt(null)).setTree(_e(e),t);let s;return s=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new jt(this.value,s)}}fold(e){return this.fold_(pe(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,s)=>{n[i]=s.fold_(be(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,pe(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(Ee(e))return null;{const i=ge(e),s=this.children.get(i);return s?s.findOnPath_(_e(e),be(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,pe(),t)}foreachOnPath_(e,t,n){if(Ee(e))return this;{this.value&&n(t,this.value);const i=ge(e),s=this.children.get(i);return s?s.foreachOnPath_(_e(e),be(t,i),n):new jt(null)}}foreach(e){this.foreach_(pe(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(be(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
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
 */class Bt{constructor(e){this.writeTree_=e}static empty(){return new Bt(new jt(null))}}function zt(e,t,n){if(Ee(t))return new Bt(new jt(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const s=i.path;let r=i.value;const o=Ie(s,t);return r=r.updateChild(o,n),new Bt(e.writeTree_.set(s,r))}{const i=new jt(n),s=e.writeTree_.setTree(t,i);return new Bt(s)}}}function $t(e,t,n){let i=e;return x(n,((e,n)=>{i=zt(i,be(t,e),n)})),i}function Kt(e,t){if(Ee(t))return Bt.empty();{const n=e.writeTree_.setTree(t,new jt(null));return new Bt(n)}}function Ht(e,t){return null!=Wt(e,t)}function Wt(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(Ie(n.path,t)):null}function Gt(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(Qe,((e,n)=>{t.push(new De(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new De(e,n.value))})),t}function Qt(e,t){if(Ee(t))return e;{const n=Wt(e,t);return new Bt(null!=n?new jt(n):e.writeTree_.subtree(t))}}function Yt(e){return e.writeTree_.isEmpty()}function Jt(e,t){return Xt(pe(),e.writeTree_,t)}function Xt(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let s=null;return t.children.inorderTraversal(((t,r)=>{".priority"===t?((0,i.vA)(null!==r.value,"Priority writes must always be leaf nodes"),s=r.value):n=Xt(be(e,t),r,n)})),n.getChild(e).isEmpty()||null===s||(n=n.updateChild(be(e,".priority"),s)),n}}
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
 */function Zt(e,t){return fn(t,e)}function en(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));(0,i.vA)(n>=0,"removeWrite called with nonexistent writeId.");const s=e.allWrites[n];e.allWrites.splice(n,1);let r=s.visible,o=!1,a=e.allWrites.length-1;for(;r&&a>=0;){const t=e.allWrites[a];t.visible&&(a>=n&&tn(t,s.path)?r=!1:Ce(s.path,t.path)&&(o=!0)),a--}if(r){if(o)return function(e){e.visibleWrites=sn(e.allWrites,nn,pe()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(s.snap)e.visibleWrites=Kt(e.visibleWrites,s.path);else{x(s.children,(t=>{e.visibleWrites=Kt(e.visibleWrites,be(s.path,t))}))}return!0}return!1}function tn(e,t){if(e.snap)return Ce(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Ce(be(e.path,n),t))return!0;return!1}function nn(e){return e.visible}function sn(e,t,n){let s=Bt.empty();for(let r=0;r<e.length;++r){const o=e[r];if(t(o)){const e=o.path;let t;if(o.snap)Ce(n,e)?(t=Ie(n,e),s=zt(s,t,o.snap)):Ce(e,n)&&(t=Ie(e,n),s=zt(s,pe(),o.snap.getChild(t)));else{if(!o.children)throw(0,i.Hk)("WriteRecord should have .snap or .children");if(Ce(n,e))t=Ie(n,e),s=$t(s,t,o.children);else if(Ce(e,n))if(t=Ie(e,n),Ee(t))s=$t(s,pe(),o.children);else{const e=(0,i.yw)(o.children,ge(t));if(e){const n=e.getChild(_e(t));s=zt(s,pe(),n)}}}}}return s}function rn(e,t,n,i,s){if(i||s){const r=Qt(e.visibleWrites,t);if(!s&&Yt(r))return n;if(s||null!=n||Ht(r,pe())){const r=function(e){return(e.visible||s)&&(!i||!~i.indexOf(e.writeId))&&(Ce(e.path,t)||Ce(t,e.path))};return Jt(sn(e.allWrites,r,t),n||it.EMPTY_NODE)}return null}{const i=Wt(e.visibleWrites,t);if(null!=i)return i;{const i=Qt(e.visibleWrites,t);if(Yt(i))return n;if(null!=n||Ht(i,pe())){return Jt(i,n||it.EMPTY_NODE)}return null}}}function on(e,t,n,i){return rn(e.writeTree,e.treePath,t,n,i)}function an(e,t){return function(e,t,n){let i=it.EMPTY_NODE;const s=Wt(e.visibleWrites,t);if(s)return s.isLeafNode()||s.forEachChild(Qe,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const s=Qt(e.visibleWrites,t);return n.forEachChild(Qe,((e,t)=>{const n=Jt(Qt(s,new fe(e)),t);i=i.updateImmediateChild(e,n)})),Gt(s).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}return Gt(Qt(e.visibleWrites,t)).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}(e.writeTree,e.treePath,t)}function cn(e,t,n,s){return function(e,t,n,s,r){(0,i.vA)(s||r,"Either existingEventSnap or existingServerSnap must exist");const o=be(t,n);if(Ht(e.visibleWrites,o))return null;{const t=Qt(e.visibleWrites,o);return Yt(t)?r.getChild(n):Jt(t,r.getChild(n))}}(e.writeTree,e.treePath,t,n,s)}function ln(e,t){return function(e,t){return Wt(e.visibleWrites,t)}(e.writeTree,be(e.treePath,t))}function hn(e,t,n,i,s,r){return function(e,t,n,i,s,r,o){let a;const c=Qt(e.visibleWrites,t),l=Wt(c,pe());if(null!=l)a=l;else{if(null==n)return[];a=Jt(c,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let c=n.getNext();for(;c&&e.length<s;)0!==t(c,i)&&e.push(c),c=n.getNext();return e}}(e.writeTree,e.treePath,t,n,i,s,r)}function un(e,t,n){return function(e,t,n,i){const s=be(t,n),r=Wt(e.visibleWrites,s);if(null!=r)return r;if(i.isCompleteForChild(n))return Jt(Qt(e.visibleWrites,s),i.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function dn(e,t){return fn(be(e.treePath,t),e.writeTree)}function fn(e,t){return{treePath:e,writeTree:t}}
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
 */class pn{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;(0,i.vA)("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),(0,i.vA)(".priority"!==n,"Only non-priority child changes can be tracked.");const s=this.changeMap.get(n);if(s){const r=s.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(n,dt(n,e.snapshotNode,s.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(n,ut(n,s.oldSnap));else if("child_changed"===t&&"child_added"===r)this.changeMap.set(n,ht(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==r)throw(0,i.Hk)("Illegal combination of changes: "+e+" occurred after "+s);this.changeMap.set(n,dt(n,e.snapshotNode,s.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
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
 */const gn=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class mn{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Dt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return un(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Vt(this.viewCache_),s=hn(this.writes_,i,t,1,n,e);return 0===s.length?null:s[0]}}
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
 */function _n(e,t,n,s,r){const o=new pn;let a,c;if(n.type===St.OVERWRITE){const l=n;l.source.fromUser?a=wn(e,t,l.path,l.snap,s,r,o):((0,i.vA)(l.source.fromServer,"Unknown source."),c=l.source.tagged||t.serverCache.isFiltered()&&!Ee(l.path),a=vn(e,t,l.path,l.snap,s,r,c,o))}else if(n.type===St.MERGE){const l=n;l.source.fromUser?a=function(e,t,n,i,s,r,o){let a=t;return i.foreach(((i,c)=>{const l=be(n,i);bn(t,ge(l))&&(a=wn(e,a,l,c,s,r,o))})),i.foreach(((i,c)=>{const l=be(n,i);bn(t,ge(l))||(a=wn(e,a,l,c,s,r,o))})),a}(e,t,l.path,l.children,s,r,o):((0,i.vA)(l.source.fromServer,"Unknown source."),c=l.source.tagged||t.serverCache.isFiltered(),a=In(e,t,l.path,l.children,s,r,c,o))}else if(n.type===St.ACK_USER_WRITE){const c=n;a=c.revert?function(e,t,n,s,r,o){let a;if(null!=ln(s,n))return t;{const c=new mn(s,t,r),l=t.eventCache.getNode();let h;if(Ee(n)||".priority"===ge(n)){let n;if(t.serverCache.isFullyInitialized())n=on(s,Vt(t));else{const e=t.serverCache.getNode();(0,i.vA)(e instanceof it,"serverChildren would be complete if leaf node"),n=an(s,e)}h=e.filter.updateFullNode(l,n,o)}else{const i=ge(n);let r=un(s,i,t.serverCache);null==r&&t.serverCache.isCompleteForChild(i)&&(r=l.getImmediateChild(i)),h=null!=r?e.filter.updateChild(l,i,r,_e(n),c,o):t.eventCache.getNode().hasChild(i)?e.filter.updateChild(l,i,it.EMPTY_NODE,_e(n),c,o):l,h.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=on(s,Vt(t)),a.isLeafNode()&&(h=e.filter.updateFullNode(h,a,o)))}return a=t.serverCache.isFullyInitialized()||null!=ln(s,pe()),Mt(t,h,a,e.filter.filtersNodes())}}
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
 */(e,t,c.path,s,r,o):function(e,t,n,i,s,r,o){if(null!=ln(s,n))return t;const a=t.serverCache.isFiltered(),c=t.serverCache;if(null!=i.value){if(Ee(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return vn(e,t,n,c.getNode().getChild(n),s,r,a,o);if(Ee(n)){let i=new jt(null);return c.getNode().forEachChild(Me,((e,t)=>{i=i.set(new fe(e),t)})),In(e,t,n,i,s,r,a,o)}return t}{let l=new jt(null);return i.foreach(((e,t)=>{const i=be(n,e);c.isCompleteForPath(i)&&(l=l.set(e,c.getNode().getChild(i)))})),In(e,t,n,l,s,r,a,o)}}(e,t,c.path,c.affectedTree,s,r,o)}else{if(n.type!==St.LISTEN_COMPLETE)throw(0,i.Hk)("Unknown operation type: "+n.type);a=function(e,t,n,i,s){const r=t.serverCache,o=Ft(t,r.getNode(),r.isFullyInitialized()||Ee(n),r.isFiltered());return yn(e,o,n,i,gn,s)}(e,t,n.path,s,o)}const l=o.getChanges();return function(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Ut(e);(n.length>0||!e.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(lt(Ut(t)))}}(t,a,l),{viewCache:a,changes:l}}function yn(e,t,n,s,r,o){const a=t.eventCache;if(null!=ln(s,n))return t;{let c,l;if(Ee(n))if((0,i.vA)(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=Vt(t),i=an(s,n instanceof it?n:it.EMPTY_NODE);c=e.filter.updateFullNode(t.eventCache.getNode(),i,o)}else{const n=on(s,Vt(t));c=e.filter.updateFullNode(t.eventCache.getNode(),n,o)}else{const h=ge(n);if(".priority"===h){(0,i.vA)(1===me(n),"Can't have a priority with additional path components");const r=a.getNode();l=t.serverCache.getNode();const o=cn(s,n,r,l);c=null!=o?e.filter.updatePriority(r,o):a.getNode()}else{const i=_e(n);let u;if(a.isCompleteForChild(h)){l=t.serverCache.getNode();const e=cn(s,n,a.getNode(),l);u=null!=e?a.getNode().getImmediateChild(h).updateChild(i,e):a.getNode().getImmediateChild(h)}else u=un(s,h,t.serverCache);c=null!=u?e.filter.updateChild(a.getNode(),h,u,i,r,o):a.getNode()}}return Mt(t,c,a.isFullyInitialized()||Ee(n),e.filter.filtersNodes())}}function vn(e,t,n,i,s,r,o,a){const c=t.serverCache;let l;const h=o?e.filter:e.filter.getIndexedFilter();if(Ee(n))l=h.updateFullNode(c.getNode(),i,null);else if(h.filtersNodes()&&!c.isFiltered()){const e=c.getNode().updateChild(n,i);l=h.updateFullNode(c.getNode(),e,null)}else{const e=ge(n);if(!c.isCompleteForPath(n)&&me(n)>1)return t;const s=_e(n),r=c.getNode().getImmediateChild(e).updateChild(s,i);l=".priority"===e?h.updatePriority(c.getNode(),r):h.updateChild(c.getNode(),e,r,s,gn,null)}const u=Ft(t,l,c.isFullyInitialized()||Ee(n),h.filtersNodes());return yn(e,u,n,s,new mn(s,u,r),a)}function wn(e,t,n,i,s,r,o){const a=t.eventCache;let c,l;const h=new mn(s,t,r);if(Ee(n))l=e.filter.updateFullNode(t.eventCache.getNode(),i,o),c=Mt(t,l,!0,e.filter.filtersNodes());else{const s=ge(n);if(".priority"===s)l=e.filter.updatePriority(t.eventCache.getNode(),i),c=Mt(t,l,a.isFullyInitialized(),a.isFiltered());else{const r=_e(n),l=a.getNode().getImmediateChild(s);let u;if(Ee(r))u=i;else{const e=h.getCompleteChild(s);u=null!=e?".priority"===ye(r)&&e.getChild(we(r)).isEmpty()?e:e.updateChild(r,i):it.EMPTY_NODE}if(l.equals(u))c=t;else{c=Mt(t,e.filter.updateChild(a.getNode(),s,u,r,h,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return c}function bn(e,t){return e.eventCache.isCompleteForChild(t)}function En(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function In(e,t,n,i,s,r,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let c,l=t;c=Ee(n)?i:new jt(null).setTree(n,i);const h=t.serverCache.getNode();return c.children.inorderTraversal(((n,i)=>{if(h.hasChild(n)){const c=En(0,t.serverCache.getNode().getImmediateChild(n),i);l=vn(e,l,new fe(n),c,s,r,o,a)}})),c.children.inorderTraversal(((n,i)=>{const c=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!h.hasChild(n)&&!c){const c=En(0,t.serverCache.getNode().getImmediateChild(n),i);l=vn(e,l,new fe(n),c,s,r,o,a)}})),l}class Tn{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new ft(n.getIndex()),s=(r=n).loadsAllData()?new ft(r.getIndex()):r.hasLimit()?new gt(r):new pt(r);var r;this.processor_=function(e){return{filter:e}}(s);const o=t.serverCache,a=t.eventCache,c=i.updateFullNode(it.EMPTY_NODE,o.getNode(),null),l=s.updateFullNode(it.EMPTY_NODE,a.getNode(),null),h=new Dt(c,o.isFullyInitialized(),i.filtersNodes()),u=new Dt(l,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Lt(u,h),this.eventGenerator_=new Ot(this.query_)}get query(){return this.query_}}function Cn(e,t){const n=Vt(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Ee(t)&&!n.getImmediateChild(ge(t)).isEmpty())?n.getChild(t):null}function Sn(e){return 0===e.eventRegistrations_.length}function kn(e,t,n){const s=[];if(n){(0,i.vA)(null==t,"A cancel should cancel all event registrations.");const r=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,r);t&&s.push(t)}))}if(t){let n=[];for(let i=0;i<e.eventRegistrations_.length;++i){const s=e.eventRegistrations_[i];if(s.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(i+1));break}}else n.push(s)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return s}function An(e,t,n,s){t.type===St.MERGE&&null!==t.source.queryId&&((0,i.vA)(Vt(e.viewCache_),"We should always have a full cache before handling merges"),(0,i.vA)(Ut(e.viewCache_),"Missing event cache, even though we have a server cache"));const r=e.viewCache_,o=_n(e.processor_,r,t,n,s);var a,c;return a=e.processor_,c=o.viewCache,(0,i.vA)(c.eventCache.getNode().isIndexed(a.filter.getIndex()),"Event snap not indexed"),(0,i.vA)(c.serverCache.getNode().isIndexed(a.filter.getIndex()),"Server snap not indexed"),(0,i.vA)(o.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=o.viewCache,Nn(e,o.changes,o.viewCache.eventCache.getNode(),null)}function Nn(e,t,n,i){const s=i?[i]:e.eventRegistrations_;return function(e,t,n,i){const s=[],r=[];return t.forEach((t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&r.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),xt(e,s,"child_removed",t,i,n),xt(e,s,"child_added",t,i,n),xt(e,s,"child_moved",r,i,n),xt(e,s,"child_changed",t,i,n),xt(e,s,"value",t,i,n),s}(e.eventGenerator_,t,n,s)}
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
 */let Rn,Pn;class Dn{constructor(){this.views=new Map}}function On(e,t,n,s){const r=t.source.queryId;if(null!==r){const o=e.views.get(r);return(0,i.vA)(null!=o,"SyncTree gave us an op for an invalid query."),An(o,t,n,s)}{let i=[];for(const r of e.views.values())i=i.concat(An(r,t,n,s));return i}}function xn(e,t,n,i,s){const r=t._queryIdentifier,o=e.views.get(r);if(!o){let e=on(n,s?i:null),r=!1;e?r=!0:i instanceof it?(e=an(n,i),r=!1):(e=it.EMPTY_NODE,r=!1);const o=Lt(new Dt(e,r,!1),new Dt(i,s,!1));return new Tn(t,o)}return o}function Ln(e,t,n,i,s,r){const o=xn(e,t,i,s,r);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){const n=e.viewCache_.eventCache,i=[];n.getNode().isLeafNode()||n.getNode().forEachChild(Qe,((e,t)=>{i.push(ht(e,t))}));return n.isFullyInitialized()&&i.push(lt(n.getNode())),Nn(e,i,n.getNode(),t)}(o,n)}function Mn(e,t,n,s){const r=t._queryIdentifier,o=[];let a=[];const c=jn(e);if("default"===r)for(const[t,i]of e.views.entries())a=a.concat(kn(i,n,s)),Sn(i)&&(e.views.delete(t),i.query._queryParams.loadsAllData()||o.push(i.query));else{const t=e.views.get(r);t&&(a=a.concat(kn(t,n,s)),Sn(t)&&(e.views.delete(r),t.query._queryParams.loadsAllData()||o.push(t.query)))}return c&&!jn(e)&&o.push(new((0,i.vA)(Rn,"Reference.ts has not been loaded"),Rn)(t._repo,t._path)),{removed:o,events:a}}function Fn(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Un(e,t){let n=null;for(const i of e.views.values())n=n||Cn(i,t);return n}function Vn(e,t){if(t._queryParams.loadsAllData())return Bn(e);{const n=t._queryIdentifier;return e.views.get(n)}}function qn(e,t){return null!=Vn(e,t)}function jn(e){return null!=Bn(e)}function Bn(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
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
 */let zn=1;class $n{constructor(e){this.listenProvider_=e,this.syncPointTree_=new jt(null),this.pendingWriteTree_={visibleWrites:Bt.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Kn(e,t,n,s,r){return function(e,t,n,s,r){(0,i.vA)(s>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),e.allWrites.push({path:t,snap:n,writeId:s,visible:r}),r&&(e.visibleWrites=zt(e.visibleWrites,t,n)),e.lastWriteId=s}(e.pendingWriteTree_,t,n,s,r),r?Zn(e,new Rt({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function Hn(e,t,n=!1){const i=function(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if(en(e.pendingWriteTree_,t)){let t=new jt(null);return null!=i.snap?t=t.set(pe(),!0):x(i.children,(e=>{t=t.set(new fe(e),!0)})),Zn(e,new At(i.path,t,n))}return[]}function Wn(e,t,n){return Zn(e,new Rt({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function Gn(e,t,n,i,s=!1){const r=t._path,o=e.syncPointTree_.get(r);let a=[];if(o&&("default"===t._queryIdentifier||qn(o,t))){const c=Mn(o,t,n,i);0===o.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(r));const l=c.removed;if(a=c.events,!s){const n=-1!==l.findIndex((e=>e._queryParams.loadsAllData())),s=e.syncPointTree_.findOnPath(r,((e,t)=>jn(t)));if(n&&!s){const t=e.syncPointTree_.subtree(r);if(!t.isEmpty()){const n=function(e){return e.fold(((e,t,n)=>{if(t&&jn(t)){return[Bn(t)]}{let e=[];return t&&(e=Fn(t)),x(n,((t,n)=>{e=e.concat(n)})),e}}))}(t);for(let t=0;t<n.length;++t){const i=n[t],s=i.query,r=ni(e,i);e.listenProvider_.startListening(ci(s),ii(e,s),r.hashFn,r.onComplete)}}}if(!s&&l.length>0&&!i)if(n){const n=null;e.listenProvider_.stopListening(ci(t),n)}else l.forEach((t=>{const n=e.queryToTagMap.get(si(t));e.listenProvider_.stopListening(ci(t),n)}))}!function(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const t=si(i),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,l)}return a}function Qn(e,t,n,i){const s=ri(e,i);if(null!=s){const i=oi(s),r=i.path,o=i.queryId,a=Ie(r,t);return ai(e,r,new Rt(kt(o),a,n))}return[]}function Yn(e,t,n,s=!1){const r=t._path;let o=null,a=!1;e.syncPointTree_.foreachOnPath(r,((e,t)=>{const n=Ie(e,r);o=o||Un(t,n),a=a||jn(t)}));let c,l=e.syncPointTree_.get(r);if(l?(a=a||jn(l),o=o||Un(l,pe())):(l=new Dn,e.syncPointTree_=e.syncPointTree_.set(r,l)),null!=o)c=!0;else{c=!1,o=it.EMPTY_NODE;e.syncPointTree_.subtree(r).foreachChild(((e,t)=>{const n=Un(t,pe());n&&(o=o.updateImmediateChild(e,n))}))}const h=qn(l,t);if(!h&&!t._queryParams.loadsAllData()){const n=si(t);(0,i.vA)(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const s=zn++;e.queryToTagMap.set(n,s),e.tagToQueryMap.set(s,n)}let u=Ln(l,t,n,Zt(e.pendingWriteTree_,r),o,c);if(!h&&!a&&!s){const n=Vn(l,t);u=u.concat(function(e,t,n){const s=t._path,r=ii(e,t),o=ni(e,n),a=e.listenProvider_.startListening(ci(t),r,o.hashFn,o.onComplete),c=e.syncPointTree_.subtree(s);if(r)(0,i.vA)(!jn(c.value),"If we're adding a query, it shouldn't be shadowed");else{const t=c.fold(((e,t,n)=>{if(!Ee(e)&&t&&jn(t))return[Bn(t).query];{let e=[];return t&&(e=e.concat(Fn(t).map((e=>e.query)))),x(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const i=t[n];e.listenProvider_.stopListening(ci(i),ii(e,i))}}return a}
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
 */(e,t,n))}return u}function Jn(e,t,n){const i=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=Un(n,Ie(e,t));if(i)return i}));return rn(i,t,s,n,!0)}function Xn(e,t){const n=t._path;let i=null;e.syncPointTree_.foreachOnPath(n,((e,t)=>{const s=Ie(e,n);i=i||Un(t,s)}));let s=e.syncPointTree_.get(n);s?i=i||Un(s,pe()):(s=new Dn,e.syncPointTree_=e.syncPointTree_.set(n,s));const r=null!=i,o=r?new Dt(i,!0,!1):null;return function(e){return Ut(e.viewCache_)}(xn(s,t,Zt(e.pendingWriteTree_,t._path),r?o.getNode():it.EMPTY_NODE,r))}function Zn(e,t){return ei(t,e.syncPointTree_,null,Zt(e.pendingWriteTree_,pe()))}function ei(e,t,n,i){if(Ee(e.path))return ti(e,t,n,i);{const s=t.get(pe());null==n&&null!=s&&(n=Un(s,pe()));let r=[];const o=ge(e.path),a=e.operationForChild(o),c=t.children.get(o);if(c&&a){const e=n?n.getImmediateChild(o):null,t=dn(i,o);r=r.concat(ei(a,c,e,t))}return s&&(r=r.concat(On(s,e,i,n))),r}}function ti(e,t,n,i){const s=t.get(pe());null==n&&null!=s&&(n=Un(s,pe()));let r=[];return t.children.inorderTraversal(((t,s)=>{const o=n?n.getImmediateChild(t):null,a=dn(i,t),c=e.operationForChild(t);c&&(r=r.concat(ti(c,s,o,a)))})),s&&(r=r.concat(On(s,e,i,n))),r}function ni(e,t){const n=t.query,i=ii(e,n);return{hashFn:()=>{const e=function(e){return e.viewCache_.serverCache.getNode()}(t)||it.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return i?function(e,t,n){const i=ri(e,n);if(i){const n=oi(i),s=n.path,r=n.queryId,o=Ie(s,t);return ai(e,s,new Nt(kt(r),o))}return[]}(e,n._path,i):function(e,t){return Zn(e,new Nt({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);{const i=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}(t,n);return Gn(e,n,null,i)}}}}function ii(e,t){const n=si(t);return e.queryToTagMap.get(n)}function si(e){return e._path.toString()+"$"+e._queryIdentifier}function ri(e,t){return e.tagToQueryMap.get(t)}function oi(e){const t=e.indexOf("$");return(0,i.vA)(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new fe(e.substr(0,t))}}function ai(e,t,n){const s=e.syncPointTree_.get(t);(0,i.vA)(s,"Missing sync point for query tag that we're tracking");return On(s,n,Zt(e.pendingWriteTree_,t),null)}function ci(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new((0,i.vA)(Pn,"Reference.ts has not been loaded"),Pn)(e._repo,e._path):e}class li{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new li(t)}node(){return this.node_}}class hi{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=be(this.path_,e);return new hi(this.syncTree_,t)}node(){return Jn(this.syncTree_,this.path_)}}const ui=function(e){return(e=e||{}).timestamp=e.timestamp||(new Date).getTime(),e},di=function(e,t,n){return e&&"object"==typeof e?((0,i.vA)(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?fi(e[".sv"],t,n):"object"==typeof e[".sv"]?pi(e[".sv"],t):void(0,i.vA)(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},fi=function(e,t,n){if("timestamp"===e)return n.timestamp;(0,i.vA)(!1,"Unexpected server value: "+e)},pi=function(e,t,n){e.hasOwnProperty("increment")||(0,i.vA)(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const s=e.increment;"number"!=typeof s&&(0,i.vA)(!1,"Unexpected increment value: "+s);const r=t.node();if((0,i.vA)(null!=r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return s;const o=r.getValue();return"number"!=typeof o?s:o+s},gi=function(e,t,n,i){return _i(t,new hi(n,e),i)},mi=function(e,t,n){return _i(e,new li(t),n)};function _i(e,t,n){const i=e.getPriority().val(),s=di(i,t.getImmediateChild(".priority"),n);let r;if(e.isLeafNode()){const i=e,r=di(i.getValue(),t,n);return r!==i.getValue()||s!==i.getPriority().val()?new Ge(r,ot(s)):e}{const i=e;return r=i,s!==i.getPriority().val()&&(r=r.updatePriority(new Ge(s))),i.forEachChild(Qe,((e,i)=>{const s=_i(i,t.getImmediateChild(e),n);s!==i&&(r=r.updateImmediateChild(e,s))})),r}}
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
 */class yi{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function vi(e,t){let n=t instanceof fe?t:new fe(t),s=e,r=ge(n);for(;null!==r;){const e=(0,i.yw)(s.node.children,r)||{children:{},childCount:0};s=new yi(r,s,e),n=_e(n),r=ge(n)}return s}function wi(e){return e.node.value}function bi(e,t){e.node.value=t,Si(e)}function Ei(e){return e.node.childCount>0}function Ii(e,t){x(e.node.children,((n,i)=>{t(new yi(n,e,i))}))}function Ti(e,t,n,i){n&&!i&&t(e),Ii(e,(e=>{Ti(e,t,!0,i)})),n&&i&&t(e)}function Ci(e){return new fe(null===e.parent?e.name:Ci(e.parent)+"/"+e.name)}function Si(e){null!==e.parent&&function(e,t,n){const s=function(e){return void 0===wi(e)&&!Ei(e)}(n),r=(0,i.gR)(e.node.children,t);s&&r?(delete e.node.children[t],e.node.childCount--,Si(e)):s||r||(e.node.children[t]=n.node,e.node.childCount++,Si(e))}
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
 */(e.parent,e.name,e)}const ki=/[\[\].#$\/\u0000-\u001F\u007F]/,Ai=/[\[\].#$\u0000-\u001F\u007F]/,Ni=10485760,Ri=function(e){return"string"==typeof e&&0!==e.length&&!ki.test(e)},Pi=function(e){return"string"==typeof e&&0!==e.length&&!Ai.test(e)},Di=function(e,t,n,s){s&&void 0===t||Oi((0,i.dI)(e,"value"),t,n)},Oi=function(e,t,n){const s=n instanceof fe?new Se(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Ae(s));if("function"==typeof t)throw new Error(e+"contains a function "+Ae(s)+" with contents = "+t.toString());if(S(t))throw new Error(e+"contains "+t.toString()+" "+Ae(s));if("string"==typeof t&&t.length>Ni/3&&(0,i.OE)(t)>Ni)throw new Error(e+"contains a string greater than "+Ni+" utf8 bytes "+Ae(s)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,r=!1;if(x(t,((t,o)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!Ri(t)))throw new Error(e+" contains an invalid key ("+t+") "+Ae(s)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');!function(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=(0,i.OE)(t),ke(e)}(s,t),Oi(e,o,s),function(e){const t=e.parts_.pop();e.byteLength_-=(0,i.OE)(t),e.parts_.length>0&&(e.byteLength_-=1)}(s)})),n&&r)throw new Error(e+' contains ".value" child '+Ae(s)+" in addition to actual children.")}},xi=function(e,t,n,s){if(!(s&&void 0===n||Pi(n)))throw new Error((0,i.dI)(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Li=function(e,t,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),xi(e,t,n,i)},Mi=function(e,t){if(".info"===ge(t))throw new Error(e+" failed = Can't modify data under /.info/")},Fi=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!Ri(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Pi(e)}(n))throw new Error((0,i.dI)(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
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
class Ui{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Vi(e,t){let n=null;for(let i=0;i<t.length;i++){const s=t[i],r=s.getPath();null===n||Te(r,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:r}),n.events.push(s)}n&&e.eventLists_.push(n)}function qi(e,t,n){Vi(e,n),Bi(e,(e=>Te(e,t)))}function ji(e,t,n){Vi(e,n),Bi(e,(e=>Ce(e,t)||Ce(t,e)))}function Bi(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const s=e.eventLists_[i];if(s){t(s.path)?(zi(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function zi(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();y&&b("event: "+n.toString()),U(i)}}}
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
 */const $i="repo_interrupt",Ki=25;class Hi{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Ui,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=bt(),this.transactionQueueTree_=new yi,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Wi(e,t,n){if(e.stats_=Z(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new vt(e.repoInfo_,((t,n,i,s)=>{Yi(e,t,n,i,s)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>Ji(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{(0,i.As)(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new Pe(e.repoInfo_,t,((t,n,i,s)=>{Yi(e,t,n,i,s)}),(t=>{Ji(e,t)}),(t=>{!function(e,t){x(t,((t,n)=>{Xi(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return X[n]||(X[n]=t()),X[n]}(e.repoInfo_,(()=>new Ct(e.stats_,e.server_))),e.infoData_=new wt,e.infoSyncTree_=new $n({startListening:(t,n,i,s)=>{let r=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(r=Wn(e.infoSyncTree_,t._path,o),setTimeout((()=>{s("ok")}),0)),r},stopListening:()=>{}}),Xi(e,"connected",!1),e.serverSyncTree_=new $n({startListening:(t,n,i,s)=>(e.server_.listen(t,i,n,((n,i)=>{const r=s(n,i);ji(e.eventQueue_,t._path,r)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function Gi(e){const t=e.infoData_.getNode(new fe(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function Qi(e){return ui({timestamp:Gi(e)})}function Yi(e,t,n,s,r){e.dataUpdateCount++;const o=new fe(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let a=[];if(r)if(s){const t=(0,i.kH)(n,(e=>ot(e)));a=function(e,t,n,i){const s=ri(e,i);if(s){const i=oi(s),r=i.path,o=i.queryId,a=Ie(r,t),c=jt.fromObject(n);return ai(e,r,new Pt(kt(o),a,c))}return[]}(e.serverSyncTree_,o,t,r)}else{const t=ot(n);a=Qn(e.serverSyncTree_,o,t,r)}else if(s){const t=(0,i.kH)(n,(e=>ot(e)));a=function(e,t,n){const i=jt.fromObject(n);return Zn(e,new Pt({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,i))}(e.serverSyncTree_,o,t)}else{const t=ot(n);a=Wn(e.serverSyncTree_,o,t)}let c=o;a.length>0&&(c=as(e,o)),ji(e.eventQueue_,c,a)}function Ji(e,t){Xi(e,"connected",t),!1===t&&function(e){is(e,"onDisconnectEvents");const t=Qi(e),n=bt();It(e.onDisconnect_,pe(),((i,s)=>{const r=gi(i,s,e.serverSyncTree_,t);Et(n,i,r)}));let i=[];It(n,pe(),((t,n)=>{i=i.concat(Wn(e.serverSyncTree_,t,n));const s=ds(e,t);as(e,s)})),e.onDisconnect_=bt(),ji(e.eventQueue_,pe(),i)}(e)}function Xi(e,t,n){const i=new fe("/.info/"+t),s=ot(n);e.infoData_.updateSnapshot(i,s);const r=Wn(e.infoSyncTree_,i,s);ji(e.eventQueue_,i,r)}function Zi(e){return e.nextWriteId_++}function es(e,t,n,i,s){is(e,"set",{path:t.toString(),value:n,priority:i});const r=Qi(e),o=ot(n,i),a=Jn(e.serverSyncTree_,t),c=mi(o,a,r),l=Zi(e),h=Kn(e.serverSyncTree_,t,c,l,!0);Vi(e.eventQueue_,h),e.server_.put(t.toString(),o.val(!0),((n,i)=>{const r="ok"===n;r||C("set at "+t+" failed: "+n);const o=Hn(e.serverSyncTree_,l,!r);ji(e.eventQueue_,t,o),ss(e,s,n,i)}));const u=ds(e,t);as(e,u),ji(e.eventQueue_,u,[])}function ts(e,t,n){let i;i=".info"===ge(t._path)?Gn(e.infoSyncTree_,t,n):Gn(e.serverSyncTree_,t,n),qi(e.eventQueue_,t._path,i)}function ns(e){e.persistentConnection_&&e.persistentConnection_.interrupt($i)}function is(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),b(n,...t)}function ss(e,t,n,i){t&&U((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let s=e;i&&(s+=": "+i);const r=new Error(s);r.code=e,t(r)}}))}function rs(e,t,n){return Jn(e.serverSyncTree_,t,n)||it.EMPTY_NODE}function os(e,t=e.transactionQueueTree_){if(t||us(e,t),wi(t)){const n=ls(e,t);(0,i.vA)(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const s=n.map((e=>e.currentWriteId)),r=rs(e,t,s);let o=r;const a=r.hash();for(let e=0;e<n.length;e++){const s=n[e];(0,i.vA)(0===s.status,"tryToSendTransactionQueue_: items in queue should all be run."),s.status=1,s.retryCount++;const r=Ie(t,s.path);o=o.updateChild(r,s.currentOutputSnapshotRaw)}const c=o.val(!0),l=t;e.server_.put(l.toString(),c,(i=>{is(e,"transaction put response",{path:l.toString(),status:i});let s=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,s=s.concat(Hn(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();us(e,vi(e.transactionQueueTree_,t)),os(e,e.transactionQueueTree_),ji(e.eventQueue_,t,s);for(let e=0;e<i.length;e++)U(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{C("transaction at "+l.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}as(e,t)}}),a)}(e,Ci(t),n)}else Ei(t)&&Ii(t,(t=>{os(e,t)}))}function as(e,t){const n=cs(e,t),s=Ci(n);return function(e,t,n){if(0===t.length)return;const s=[];let r=[];const o=t.filter((e=>0===e.status)),a=o.map((e=>e.currentWriteId));for(let o=0;o<t.length;o++){const l=t[o],h=Ie(n,l.path);let u,d=!1;if((0,i.vA)(null!==h,"rerunTransactionsUnderNode_: relativePath should not be null."),4===l.status)d=!0,u=l.abortReason,r=r.concat(Hn(e.serverSyncTree_,l.currentWriteId,!0));else if(0===l.status)if(l.retryCount>=Ki)d=!0,u="maxretry",r=r.concat(Hn(e.serverSyncTree_,l.currentWriteId,!0));else{const n=rs(e,l.path,a);l.currentInputSnapshot=n;const s=t[o].update(n.val());if(void 0!==s){Oi("transaction failed: Data returned ",s,l.path);let t=ot(s);"object"==typeof s&&null!=s&&(0,i.gR)(s,".priority")||(t=t.updatePriority(n.getPriority()));const o=l.currentWriteId,c=Qi(e),h=mi(t,n,c);l.currentOutputSnapshotRaw=t,l.currentOutputSnapshotResolved=h,l.currentWriteId=Zi(e),a.splice(a.indexOf(o),1),r=r.concat(Kn(e.serverSyncTree_,l.path,h,l.currentWriteId,l.applyLocally)),r=r.concat(Hn(e.serverSyncTree_,o,!0))}else d=!0,u="nodata",r=r.concat(Hn(e.serverSyncTree_,l.currentWriteId,!0))}ji(e.eventQueue_,n,r),r=[],d&&(t[o].status=2,c=t[o].unwatcher,setTimeout(c,Math.floor(0)),t[o].onComplete&&("nodata"===u?s.push((()=>t[o].onComplete(null,!1,t[o].currentInputSnapshot))):s.push((()=>t[o].onComplete(new Error(u),!1,null)))))}var c;us(e,e.transactionQueueTree_);for(let e=0;e<s.length;e++)U(s[e]);os(e,e.transactionQueueTree_)}(e,ls(e,n),s),s}function cs(e,t){let n,i=e.transactionQueueTree_;for(n=ge(t);null!==n&&void 0===wi(i);)i=vi(i,n),n=ge(t=_e(t));return i}function ls(e,t){const n=[];return hs(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function hs(e,t,n){const i=wi(t);if(i)for(let e=0;e<i.length;e++)n.push(i[e]);Ii(t,(t=>{hs(e,t,n)}))}function us(e,t){const n=wi(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,bi(t,n.length>0?n:void 0)}Ii(t,(t=>{us(e,t)}))}function ds(e,t){const n=Ci(cs(e,t)),i=vi(e.transactionQueueTree_,t);return function(e,t,n){let i=n?e:e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}}(i,(t=>{fs(e,t)})),fs(e,i),Ti(i,(t=>{fs(e,t)})),n}function fs(e,t){const n=wi(t);if(n){const s=[];let r=[],o=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?((0,i.vA)(o===t-1,"All SENT items should be at beginning of queue."),o=t,n[t].status=3,n[t].abortReason="set"):((0,i.vA)(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),r=r.concat(Hn(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&s.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===o?bi(t,void 0):n.length=o+1,ji(e.eventQueue_,Ci(t),r);for(let e=0;e<s.length;e++)U(s[e])}}
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
 */const ps=function(e,t){const n=gs(e),i=n.namespace;"firebase.com"===n.domain&&T(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||T("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&C("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const s="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new G(n.host,n.secure,i,s,t,"",i!==n.subdomain),path:new fe(n.pathString)}},gs=function(e){let t="",n="",i="",s="",r="",o=!0,a="https",c=443;if("string"==typeof e){let l=e.indexOf("//");l>=0&&(a=e.substring(0,l-1),e=e.substring(l+2));let h=e.indexOf("/");-1===h&&(h=e.length);let u=e.indexOf("?");-1===u&&(u=e.length),t=e.substring(0,Math.min(h,u)),h<u&&(s=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let i=n[e];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(h,u)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):C(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,u)));l=t.indexOf(":"),l>=0?(o="https"===a||"wss"===a,c=parseInt(t.substring(l+1),10)):l=t.length;const f=t.slice(0,l);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),r=i}"ns"in d&&(r=d.ns)}return{host:t,port:c,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}},ms="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";!function(){let e=0;const t=[]}();
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
class _s{constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+(0,i.As)(this.snapshot.exportVal())}}class ys{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
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
 */class vs{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return(0,i.vA)(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
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
class ws{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return Ee(this._path)?null:ye(this._path)}get ref(){return new bs(this._repo,this._path)}get _queryIdentifier(){const e=yt(this._queryParams),t=D(e);return"{}"===t?"default":t}get _queryObject(){return yt(this._queryParams)}isEqual(e){if(!((e=(0,i.Ku)(e))instanceof ws))return!1;const t=this._repo===e._repo,n=Te(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&n&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}class bs extends ws{constructor(e,t){super(e,t,new mt,!1)}get parent(){const e=we(this._path);return null===e?null:new bs(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}class Es{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new fe(e),n=Ts(this.ref,e);return new Es(this._node.getChild(t),n,Qe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,((t,n)=>e(new Es(n,Ts(this.ref,t),Qe))))}hasChild(e){const t=new fe(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Is(e,t){return(e=(0,i.Ku)(e))._checkNotDeleted("ref"),void 0!==t?Ts(e._root,t):e._root}function Ts(e,t){return null===ge((e=(0,i.Ku)(e))._path)?Li("child","path",t,!1):xi("child","path",t,!1),new bs(e._repo,be(e._path,t))}function Cs(e,t){e=(0,i.Ku)(e),Mi("set",e._path),Di("set",t,e._path,!1);const n=new i.cY;return es(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}function Ss(e){e=(0,i.Ku)(e);const t=new vs((()=>{})),n=new ks(t);return function(e,t,n){const s=Xn(e.serverSyncTree_,t);return null!=s?Promise.resolve(s):e.server_.get(t).then((i=>{const s=ot(i).withIndex(t._queryParams.getIndex());let r;if(Yn(e.serverSyncTree_,t,n,!0),t._queryParams.loadsAllData())r=Wn(e.serverSyncTree_,t._path,s);else{const n=ii(e.serverSyncTree_,t);r=Qn(e.serverSyncTree_,t._path,s,n)}return ji(e.eventQueue_,t._path,r),Gn(e.serverSyncTree_,t,n,null,!0),s}),(n=>(is(e,"get for query "+(0,i.As)(t)+" failed: "+n),Promise.reject(new Error(n)))))}(e._repo,e,n).then((t=>new Es(t,new bs(e._repo,e._path),e._queryParams.getIndex())))}class ks{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new _s("value",this,new Es(e.snapshotNode,new bs(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new ys(this,e,t):null}matches(e){return e instanceof ks&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class As{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new ys(this,e,t):null}createEvent(e,t){(0,i.vA)(null!=e.childName,"Child events should have a childName.");const n=Ts(new bs(t._repo,t._path),e.childName),s=t._queryParams.getIndex();return new _s(e.type,this,new Es(e.snapshotNode,n,s),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof As&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function Ns(e,t,n,i,s){let r;if("object"==typeof i&&(r=void 0,s=i),"function"==typeof i&&(r=i),s&&s.onlyOnce){const t=n,i=(n,i)=>{ts(e._repo,e,a),t(n,i)};i.userCallback=n.userCallback,i.context=n.context,n=i}const o=new vs(n,r||void 0),a="value"===t?new ks(o):new As(t,o);return function(e,t,n){let i;i=".info"===ge(t._path)?Yn(e.infoSyncTree_,t,n):Yn(e.serverSyncTree_,t,n),qi(e.eventQueue_,t._path,i)}(e._repo,e,a),()=>ts(e._repo,e,a)}!function(e){(0,i.vA)(!Rn,"__referenceConstructor has already been defined"),Rn=e}(bs),function(e){(0,i.vA)(!Pn,"__referenceConstructor has already been defined"),Pn=e}(bs);
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
const Rs="FIREBASE_DATABASE_EMULATOR_HOST",Ps={};let Ds=!1;function Os(e,t,n,i,s){let r=i||e.options.databaseURL;void 0===r&&(e.options.projectId||T("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),b("Using default host for project ",e.options.projectId),r=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,c=ps(r,s),l=c.repoInfo;"undefined"!=typeof process&&process.env&&(a=process.env[Rs]),a?(o=!0,r=`http://${a}?ns=${l.namespace}`,c=ps(r,s),l=c.repoInfo):o=!c.repoInfo.secure;const h=s&&o?new B(B.OWNER):new j(e.name,e.options,t);Fi("Invalid Firebase Database URL",c),Ee(c.path)||T("Database URL must point to the root of a Firebase Database (not including a child path).");const u=function(e,t,n,i){let s=Ps[t.name];s||(s={},Ps[t.name]=s);let r=s[e.toURLString()];r&&T("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return r=new Hi(e,Ds,n,i),s[e.toURLString()]=r,r}(l,e,h,new q(e.name,n));return new xs(u,e)}class xs{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Wi(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new bs(this._repo,pe())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=Ps[t];n&&n[e.key]===e||T(`Database ${t}(${e.repoInfo_}) has already been deleted.`),ns(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&T("Cannot call "+e+" on a deleted database.")}}Pe.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Pe.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};
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
var Ls;
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
 */c(e.MF),(0,e.om)(new t.uA("database",((e,{instanceIdentifier:t})=>Os(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),(0,e.KO)(r,o,Ls),(0,e.KO)(r,o,"esm2017");var Ms,Fs="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},Us={},Vs=Vs||{},qs=Fs||self;function js(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function Bs(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var zs="closure_uid_"+(1e9*Math.random()>>>0),$s=0;function Ks(e,t,n){return e.call.apply(e.bind,arguments)}function Hs(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function Ws(e,t,n){return(Ws=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ks:Hs).apply(null,arguments)}function Gs(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function Qs(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(e,n,i){for(var s=Array(arguments.length-2),r=2;r<arguments.length;r++)s[r-2]=arguments[r];return t.prototype[n].apply(e,s)}}function Ys(){this.s=this.s,this.o=this.o}Ys.prototype.s=!1,Ys.prototype.sa=function(){var e;!this.s&&(this.s=!0,this.N(),0)&&(e=this,Object.prototype.hasOwnProperty.call(e,zs)&&e[zs]||(e[zs]=++$s))},Ys.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Js=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Xs(e){const t=e.length;if(0<t){const n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function Zs(e,t){for(let t=1;t<arguments.length;t++){const n=arguments[t];if(js(n)){const t=e.length||0,i=n.length||0;e.length=t+i;for(let s=0;s<i;s++)e[t+s]=n[s]}else e.push(n)}}function er(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}er.prototype.h=function(){this.defaultPrevented=!0};var tr=function(){if(!qs.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const e=()=>{};qs.addEventListener("test",e,t),qs.removeEventListener("test",e,t)}catch(e){}return e}();function nr(e){return/^[\s\xa0]*$/.test(e)}function ir(){var e=qs.navigator;return e&&(e=e.userAgent)?e:""}function sr(e){return-1!=ir().indexOf(e)}function rr(e){return rr[" "](e),e}rr[" "]=function(){};var or,ar,cr,lr=sr("Opera"),hr=sr("Trident")||sr("MSIE"),ur=sr("Edge"),dr=ur||hr,fr=sr("Gecko")&&!(-1!=ir().toLowerCase().indexOf("webkit")&&!sr("Edge"))&&!(sr("Trident")||sr("MSIE"))&&!sr("Edge"),pr=-1!=ir().toLowerCase().indexOf("webkit")&&!sr("Edge");function gr(){var e=qs.document;return e?e.documentMode:void 0}e:{var mr="",_r=(ar=ir(),fr?/rv:([^\);]+)(\)|;)/.exec(ar):ur?/Edge\/([\d\.]+)/.exec(ar):hr?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(ar):pr?/WebKit\/(\S+)/.exec(ar):lr?/(?:Version)[ \/]?(\S+)/.exec(ar):void 0);if(_r&&(mr=_r?_r[1]:""),hr){var yr=gr();if(null!=yr&&yr>parseFloat(mr)){or=String(yr);break e}}or=mr}if(qs.document&&hr){var vr=gr();cr=vr||(parseInt(or,10)||void 0)}else cr=void 0;var wr=cr;function br(e,t){if(er.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(fr){e:{try{rr(t.nodeName);var s=!0;break e}catch(e){}s=!1}s||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:Er[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&br.$.h.call(this)}}Qs(br,er);var Er={2:"touch",3:"pen",4:"mouse"};br.prototype.h=function(){br.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Ir="closure_listenable_"+(1e6*Math.random()|0),Tr=0;function Cr(e,t,n,i,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.la=s,this.key=++Tr,this.fa=this.ia=!1}function Sr(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function kr(e,t,n){for(const i in e)t.call(n,e[i],i,e)}function Ar(e){const t={};for(const n in e)t[n]=e[n];return t}const Nr="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Rr(e,t){let n,i;for(let t=1;t<arguments.length;t++){for(n in i=arguments[t],i)e[n]=i[n];for(let t=0;t<Nr.length;t++)n=Nr[t],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}function Pr(e){this.src=e,this.g={},this.h=0}function Dr(e,t){var n=t.type;if(n in e.g){var i,s=e.g[n],r=Js(s,t);(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Sr(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function Or(e,t,n,i){for(var s=0;s<e.length;++s){var r=e[s];if(!r.fa&&r.listener==t&&r.capture==!!n&&r.la==i)return s}return-1}Pr.prototype.add=function(e,t,n,i,s){var r=e.toString();(e=this.g[r])||(e=this.g[r]=[],this.h++);var o=Or(e,t,i,s);return-1<o?(t=e[o],n||(t.ia=!1)):((t=new Cr(t,this.src,r,!!i,s)).ia=n,e.push(t)),t};var xr="closure_lm_"+(1e6*Math.random()|0),Lr={};function Mr(e,t,n,i,s){if(i&&i.once)return Ur(e,t,n,i,s);if(Array.isArray(t)){for(var r=0;r<t.length;r++)Mr(e,t[r],n,i,s);return null}return n=Kr(n),e&&e[Ir]?e.O(t,n,Bs(i)?!!i.capture:!!i,s):Fr(e,t,n,!1,i,s)}function Fr(e,t,n,i,s,r){if(!t)throw Error("Invalid event type");var o=Bs(s)?!!s.capture:!!s,a=zr(e);if(a||(e[xr]=a=new Pr(e)),(n=a.add(t,n,i,o,r)).proxy)return n;if(i=function(){function e(n){return t.call(e.src,e.listener,n)}const t=Br;return e}(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)tr||(s=o),void 0===s&&(s=!1),e.addEventListener(t.toString(),i,s);else if(e.attachEvent)e.attachEvent(jr(t.toString()),i);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(i)}return n}function Ur(e,t,n,i,s){if(Array.isArray(t)){for(var r=0;r<t.length;r++)Ur(e,t[r],n,i,s);return null}return n=Kr(n),e&&e[Ir]?e.P(t,n,Bs(i)?!!i.capture:!!i,s):Fr(e,t,n,!0,i,s)}function Vr(e,t,n,i,s){if(Array.isArray(t))for(var r=0;r<t.length;r++)Vr(e,t[r],n,i,s);else i=Bs(i)?!!i.capture:!!i,n=Kr(n),e&&e[Ir]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=Or(r=e.g[t],n,i,s))&&(Sr(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete e.g[t],e.h--)))):e&&(e=zr(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Or(t,n,i,s)),(n=-1<e?t[e]:null)&&qr(n))}function qr(e){if("number"!=typeof e&&e&&!e.fa){var t=e.src;if(t&&t[Ir])Dr(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(jr(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=zr(t))?(Dr(n,e),0==n.h&&(n.src=null,t[xr]=null)):Sr(e)}}}function jr(e){return e in Lr?Lr[e]:Lr[e]="on"+e}function Br(e,t){if(e.fa)e=!0;else{t=new br(t,this);var n=e.listener,i=e.la||e.src;e.ia&&qr(e),e=n.call(i,t)}return e}function zr(e){return(e=e[xr])instanceof Pr?e:null}var $r="__closure_events_fn_"+(1e9*Math.random()>>>0);function Kr(e){return"function"==typeof e?e:(e[$r]||(e[$r]=function(t){return e.handleEvent(t)}),e[$r])}function Hr(){Ys.call(this),this.i=new Pr(this),this.S=this,this.J=null}function Wr(e,t){var n,i=e.J;if(i)for(n=[];i;i=i.J)n.push(i);if(e=e.S,i=t.type||t,"string"==typeof t)t=new er(t,e);else if(t instanceof er)t.target=t.target||e;else{var s=t;Rr(t=new er(i,e),s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];s=Gr(o,i,!0,t)&&s}if(s=Gr(o=t.g=e,i,!0,t)&&s,s=Gr(o,i,!1,t)&&s,n)for(r=0;r<n.length;r++)s=Gr(o=t.g=n[r],i,!1,t)&&s}function Gr(e,t,n,i){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var s=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Dr(e.i,o),s=!1!==a.call(c,i)&&s}}return s&&!i.defaultPrevented}Qs(Hr,Ys),Hr.prototype[Ir]=!0,Hr.prototype.removeEventListener=function(e,t,n,i){Vr(this,e,t,n,i)},Hr.prototype.N=function(){if(Hr.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)Sr(n[i]);delete t.g[e],t.h--}}this.J=null},Hr.prototype.O=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)},Hr.prototype.P=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};var Qr=qs.JSON.stringify;function Yr(){var e=io;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var Jr=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Xr),(e=>e.reset()));class Xr{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Zr(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function eo(e){qs.setTimeout((()=>{throw e}),0)}let to,no=!1,io=new class{constructor(){this.h=this.g=null}add(e,t){const n=Jr.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},so=()=>{const e=qs.Promise.resolve(void 0);to=()=>{e.then(ro)}};var ro=()=>{for(var e;e=Yr();){try{e.h.call(e.g)}catch(e){eo(e)}var t=Jr;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}no=!1};function oo(e,t){Hr.call(this),this.h=e||1,this.g=t||qs,this.j=Ws(this.qb,this),this.l=Date.now()}function ao(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function co(e,t,n){if("function"==typeof e)n&&(e=Ws(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=Ws(e.handleEvent,e)}return 2147483647<Number(t)?-1:qs.setTimeout(e,t||0)}function lo(e){e.g=co((()=>{e.g=null,e.i&&(e.i=!1,lo(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}Qs(oo,Hr),(Ms=oo.prototype).ga=!1,Ms.T=null,Ms.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Wr(this,"tick"),this.ga&&(ao(this),this.start()))}},Ms.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Ms.N=function(){oo.$.N.call(this),ao(this),delete this.g};class ho extends Ys{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:lo(this)}N(){super.N(),this.g&&(qs.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function uo(e){Ys.call(this),this.h=e,this.g={}}Qs(uo,Ys);var fo=[];function po(e,t,n,i){Array.isArray(n)||(n&&(fo[0]=n.toString()),n=fo);for(var s=0;s<n.length;s++){var r=Mr(t,n[s],i||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function go(e){kr(e.g,(function(e,t){this.g.hasOwnProperty(t)&&qr(e)}),e),e.g={}}function mo(){this.g=!0}function _o(e,t,n,i){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<s.length;o++)s[o]=""}}}return Qr(n)}catch(e){return t}}(e,n)+(i?" "+i:"")}))}uo.prototype.N=function(){uo.$.N.call(this),go(this)},uo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},mo.prototype.Ea=function(){this.g=!1},mo.prototype.info=function(){};var yo={},vo=null;function wo(){return vo=vo||new Hr}function bo(e){er.call(this,yo.Ta,e)}function Eo(e){const t=wo();Wr(t,new bo(t))}function Io(e,t){er.call(this,yo.STAT_EVENT,e),this.stat=t}function To(e){const t=wo();Wr(t,new Io(t,e))}function Co(e,t){er.call(this,yo.Ua,e),this.size=t}function So(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return qs.setTimeout((function(){e()}),t)}yo.Ta="serverreachability",Qs(bo,er),yo.STAT_EVENT="statevent",Qs(Io,er),yo.Ua="timingevent",Qs(Co,er);var ko={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Ao={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function No(){}function Ro(e){return e.h||(e.h=e.i())}function Po(){}No.prototype.h=null;var Do,Oo={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function xo(){er.call(this,"d")}function Lo(){er.call(this,"c")}function Mo(){}function Fo(e,t,n,i){this.l=e,this.j=t,this.m=n,this.W=i||1,this.U=new uo(this),this.P=Vo,e=dr?125:void 0,this.V=new oo(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Uo}function Uo(){this.i=null,this.g="",this.h=!1}Qs(xo,er),Qs(Lo,er),Qs(Mo,No),Mo.prototype.g=function(){return new XMLHttpRequest},Mo.prototype.i=function(){return{}},Do=new Mo;var Vo=45e3,qo={},jo={};function Bo(e,t,n){e.L=1,e.A=aa(na(t)),e.u=n,e.S=!0,zo(e,null)}function zo(e,t){e.G=Date.now(),Wo(e),e.B=na(e.A);var n=e.B,i=e.W;Array.isArray(i)||(i=[String(i)]),wa(n.i,"t",i),e.o=0,n=e.l.J,e.h=new Uo,e.g=wc(e.l,n?t:null,!e.u),0<e.O&&(e.M=new ho(Ws(e.Pa,e,e.g),e.O)),po(e.U,e.g,"readystatechange",e.nb),t=e.I?Ar(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),Eo(),function(e,t,n,i,s,r){e.info((function(){if(e.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var h=l[0];l=l[1];var u=h.split("_");o=2<=u.length&&"type"==u[1]?o+(h+"=")+l+"&":o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.v,e.B,e.m,e.W,e.u)}function $o(e){return!!e.g&&("GET"==e.v&&2!=e.L&&e.l.Ha)}function Ko(e,t,n){let i,s=!0;for(;!e.J&&e.o<n.length;){if(i=Ho(e,n),i==jo){4==t&&(e.s=4,To(14),s=!1),_o(e.j,e.m,null,"[Incomplete Response]");break}if(i==qo){e.s=4,To(15),_o(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}_o(e.j,e.m,i,null),Xo(e,i)}$o(e)&&0!=e.o&&(e.h.g=e.h.g.slice(e.o),e.o=0),4!=t||0!=n.length||e.h.h||(e.s=1,To(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.ba&&(e.ba=!0,(t=e.l).g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),dc(t),t.M=!0,To(11))):(_o(e.j,e.m,n,"[Invalid Chunked Response]"),Jo(e),Yo(e))}function Ho(e,t){var n=e.o,i=t.indexOf("\n",n);return-1==i?jo:(n=Number(t.substring(n,i)),isNaN(n)?qo:(i+=1)+n>t.length?jo:(t=t.slice(i,i+n),e.o=i+n,t))}function Wo(e){e.Y=Date.now()+e.P,Go(e,e.P)}function Go(e,t){if(null!=e.C)throw Error("WatchDog timer not null");e.C=So(Ws(e.lb,e),t)}function Qo(e){e.C&&(qs.clearTimeout(e.C),e.C=null)}function Yo(e){0==e.l.H||e.J||gc(e.l,e)}function Jo(e){Qo(e);var t=e.M;t&&"function"==typeof t.sa&&t.sa(),e.M=null,ao(e.V),go(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Xo(e,t){try{var n=e.l;if(0!=n.H&&(n.g==e||ka(n.i,e)))if(!e.K&&ka(n.i,e)&&3==n.H){try{var i=n.Ja.g.parse(t)}catch(e){i=null}if(Array.isArray(i)&&3==i.length){var s=i;if(0==s[0]){e:if(!n.u){if(n.g){if(!(n.g.G+3e3<e.G))break e;pc(n),sc(n)}uc(n),To(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&0==n.A&&!n.v&&(n.v=So(Ws(n.ib,n),6e3));if(1>=Sa(n.i)&&n.oa){try{n.oa()}catch(e){}n.oa=void 0}}else _c(n,11)}else if((e.K||n.g==e)&&pc(n),!nr(t))for(s=n.Ja.g.parse(t),t=0;t<s.length;t++){let l=s[t];if(n.V=l[0],l=l[1],2==n.H)if("c"==l[0]){n.K=l[1],n.pa=l[2];const t=l[3];null!=t&&(n.ra=t,n.l.info("VER="+n.ra));const s=l[4];null!=s&&(n.Ga=s,n.l.info("SVER="+n.Ga));const h=l[5];null!=h&&"number"==typeof h&&0<h&&(i=1.5*h,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const u=e.g;if(u){const e=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var r=i.i;r.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(r.j=r.l,r.g=new Set,r.h&&(Aa(r,r.h),r.h=null))}if(i.F){const e=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(i.Da=e,oa(i.I,i.F,e))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms"));var o=e;if((i=n).wa=vc(i,i.J?i.pa:null,i.Y),o.K){Na(i.i,o);var a=o,c=i.L;c&&a.setTimeout(c),a.C&&(Qo(a),Wo(a)),i.g=o}else hc(i);0<n.j.length&&oc(n)}else"stop"!=l[0]&&"close"!=l[0]||_c(n,7);else 3==n.H&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?_c(n,7):ic(n):"noop"!=l[0]&&n.h&&n.h.Aa(l),n.A=0)}Eo()}catch(e){}}function Zo(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(js(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(js(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const i in e)t[n++]=i;return t}}}(e),i=function(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(js(e)){for(var t=[],n=e.length,i=0;i<n;i++)t.push(e[i]);return t}for(i in t=[],n=0,e)t[n++]=e[i];return t}(e),s=i.length,r=0;r<s;r++)t.call(void 0,i[r],n&&n[r],e)}(Ms=Fo.prototype).setTimeout=function(e){this.P=e},Ms.nb=function(e){e=e.target;const t=this.M;t&&3==Ja(e)?t.l():this.Pa(e)},Ms.Pa=function(e){try{if(e==this.g)e:{const h=Ja(this.g);var t=this.g.Ia();this.g.da();if(!(3>h)&&(3!=h||dr||this.g&&(this.h.h||this.g.ja()||Xa(this.g)))){this.J||4!=h||7==t||Eo(),Qo(this);var n=this.g.da();this.ca=n;t:if($o(this)){var i=Xa(this.g);e="";var s=i.length,r=4==Ja(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Jo(this),Yo(this);var o="";break t}this.h.i=new qs.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:r&&t==s-1});i.length=0,this.h.g+=e,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,function(e,t,n,i,s,r,o){e.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+t+"\n"+n+"\n"+r+" "+o}))}(this.j,this.v,this.B,this.m,this.W,h,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!nr(a)){var l=a;break t}}l=null}if(!(n=l)){this.i=!1,this.s=3,To(12),Jo(this),Yo(this);break e}_o(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Xo(this,n)}this.S?(Ko(this,h,o),dr&&this.i&&3==h&&(po(this.U,this.V,"tick",this.mb),this.V.start())):(_o(this.j,this.m,o,null),Xo(this,o)),4==h&&Jo(this),this.i&&!this.J&&(4==h?gc(this.l,this):(this.i=!1,Wo(this)))}else(function(e){const t={};e=(e.g&&2<=Ja(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let i=0;i<e.length;i++){if(nr(e[i]))continue;var n=Zr(e[i]);const s=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const r=t[s]||[];t[s]=r,r.push(n)}!function(e,t){for(const n in e)t.call(void 0,e[n],n,e)}(t,(function(e){return e.join(", ")}))})(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.s=3,To(12)):(this.s=0,To(13)),Jo(this),Yo(this)}}}catch(e){}},Ms.mb=function(){if(this.g){var e=Ja(this.g),t=this.g.ja();this.o<t.length&&(Qo(this),Ko(this,e,t),this.i&&4!=e&&Wo(this))}},Ms.cancel=function(){this.J=!0,Jo(this)},Ms.lb=function(){this.C=null;const e=Date.now();0<=e-this.Y?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.B),2!=this.L&&(Eo(),To(17)),Jo(this),this.s=2,Yo(this)):Go(this,this.Y-e)};var ea=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ta(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof ta){this.h=e.h,ia(this,e.j),this.s=e.s,this.g=e.g,sa(this,e.m),this.l=e.l;var t=e.i,n=new ma;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),ra(this,n),this.o=e.o}else e&&(t=String(e).match(ea))?(this.h=!1,ia(this,t[1]||"",!0),this.s=ca(t[2]||""),this.g=ca(t[3]||"",!0),sa(this,t[4]),this.l=ca(t[5]||"",!0),ra(this,t[6]||"",!0),this.o=ca(t[7]||"")):(this.h=!1,this.i=new ma(null,this.h))}function na(e){return new ta(e)}function ia(e,t,n){e.j=n?ca(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function sa(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function ra(e,t,n){t instanceof ma?(e.i=t,function(e,t){t&&!e.j&&(_a(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(ya(this,t),wa(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=la(t,pa)),e.i=new ma(t,e.h))}function oa(e,t,n){e.i.set(t,n)}function aa(e){return oa(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ca(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function la(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,ha),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function ha(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}ta.prototype.toString=function(){var e=[],t=this.j;t&&e.push(la(t,ua,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(la(t,ua,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(la(n,"/"==n.charAt(0)?fa:da,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",la(n,ga)),e.join("")};var ua=/[#\/\?@]/g,da=/[#\?:]/g,fa=/[#\?]/g,pa=/[#\?@]/g,ga=/#/g;function ma(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function _a(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),s=null;if(0<=i){var r=e[n].substring(0,i);s=e[n].substring(i+1)}else r=e[n];t(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function ya(e,t){_a(e),t=ba(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function va(e,t){return _a(e),t=ba(e,t),e.g.has(t)}function wa(e,t,n){ya(e,t),0<n.length&&(e.i=null,e.g.set(ba(e,t),Xs(n)),e.h+=n.length)}function ba(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(Ms=ma.prototype).add=function(e,t){_a(this),this.i=null,e=ba(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},Ms.forEach=function(e,t){_a(this),this.g.forEach((function(n,i){n.forEach((function(n){e.call(t,n,i,this)}),this)}),this)},Ms.ta=function(){_a(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let i=0;i<t.length;i++){const s=e[i];for(let e=0;e<s.length;e++)n.push(t[i])}return n},Ms.Z=function(e){_a(this);let t=[];if("string"==typeof e)va(this,e)&&(t=t.concat(this.g.get(ba(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},Ms.set=function(e,t){return _a(this),this.i=null,va(this,e=ba(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},Ms.get=function(e,t){return e&&0<(e=this.Z(e)).length?String(e[0]):t},Ms.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var i=t[n];const r=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var s=r;""!==o[i]&&(s+="="+encodeURIComponent(String(o[i]))),e.push(s)}}return this.i=e.join("&")};var Ea=class{constructor(e,t){this.g=e,this.map=t}};function Ia(e){this.l=e||Ta,qs.PerformanceNavigationTiming?e=0<(e=qs.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(qs.g&&qs.g.Ka&&qs.g.Ka()&&qs.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ta=10;function Ca(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Sa(e){return e.h?1:e.g?e.g.size:0}function ka(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Aa(e,t){e.g?e.g.add(t):e.h=t}function Na(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Ra(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Xs(e.i)}Ia.prototype.cancel=function(){if(this.i=Ra(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var Pa=class{stringify(e){return qs.JSON.stringify(e,void 0)}parse(e){return qs.JSON.parse(e,void 0)}};function Da(){this.g=new Pa}function Oa(e,t,n){const i=n||"";try{Zo(e,(function(e,n){let s=e;Bs(e)&&(s=Qr(e)),t.push(i+n+"="+encodeURIComponent(s))}))}catch(e){throw t.push(i+"type="+encodeURIComponent("_badmap")),e}}function xa(e,t,n,i,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(i)}catch(e){}}function La(e){this.l=e.ec||null,this.j=e.ob||!1}function Ma(e,t){Hr.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Fa,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Qs(La,No),La.prototype.g=function(){return new Ma(this.l,this.j)},La.prototype.i=function(e){return function(){return e}}({}),Qs(Ma,Hr);var Fa=0;function Ua(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function Va(e){e.readyState=4,e.l=null,e.j=null,e.A=null,qa(e)}function qa(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(Ms=Ma.prototype).open=function(e,t){if(this.readyState!=Fa)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,qa(this)},Ms.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||qs).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},Ms.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Va(this)),this.readyState=Fa},Ms.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,qa(this)),this.g&&(this.readyState=3,qa(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==qs.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ua(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))},Ms.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Va(this):qa(this),3==this.readyState&&Ua(this)}},Ms.Za=function(e){this.g&&(this.response=this.responseText=e,Va(this))},Ms.Ya=function(e){this.g&&(this.response=e,Va(this))},Ms.ka=function(){this.g&&Va(this)},Ms.setRequestHeader=function(e,t){this.v.append(e,t)},Ms.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},Ms.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Ma.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var ja=qs.JSON.parse;function Ba(e){Hr.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=za,this.L=this.M=!1}Qs(Ba,Hr);var za="",$a=/^https?$/i,Ka=["POST","PUT"];function Ha(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Wa(e),Qa(e)}function Wa(e){e.F||(e.F=!0,Wr(e,"complete"),Wr(e,"error"))}function Ga(e){if(e.h&&void 0!==Vs&&(!e.C[1]||4!=Ja(e)||2!=e.da()))if(e.v&&4==Ja(e))co(e.La,0,e);else if(Wr(e,"readystatechange"),4==Ja(e)){e.h=!1;try{const o=e.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var i;if(i=0===o){var s=String(e.I).match(ea)[1]||null;!s&&qs.self&&qs.self.location&&(s=qs.self.location.protocol.slice(0,-1)),i=!$a.test(s?s.toLowerCase():"")}n=i}if(n)Wr(e,"complete"),Wr(e,"success");else{e.m=6;try{var r=2<Ja(e)?e.g.statusText:""}catch(e){r=""}e.j=r+" ["+e.da()+"]",Wa(e)}}finally{Qa(e)}}}function Qa(e,t){if(e.g){Ya(e);const n=e.g,i=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||Wr(e,"ready");try{n.onreadystatechange=i}catch(e){}}}function Ya(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(qs.clearTimeout(e.A),e.A=null)}function Ja(e){return e.g?e.g.readyState:0}function Xa(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case za:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Za(e){let t="";return kr(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function ec(e,t,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=Za(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):oa(e,t,n))}function tc(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function nc(e){this.Ga=0,this.j=[],this.l=new mo,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=tc("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=tc("baseRetryDelayMs",5e3,e),this.hb=tc("retryDelaySeedMs",1e4,e),this.eb=tc("forwardChannelMaxRetries",2,e),this.xa=tc("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Ia(e&&e.concurrentRequestLimit),this.Ja=new Da,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function ic(e){if(rc(e),3==e.H){var t=e.W++,n=na(e.I);if(oa(n,"SID",e.K),oa(n,"RID",t),oa(n,"TYPE","terminate"),cc(e,n),(t=new Fo(e,e.l,t)).L=2,t.A=aa(na(n)),n=!1,qs.navigator&&qs.navigator.sendBeacon)try{n=qs.navigator.sendBeacon(t.A.toString(),"")}catch(e){}!n&&qs.Image&&((new Image).src=t.A,n=!0),n||(t.g=wc(t.l,null),t.g.ha(t.A)),t.G=Date.now(),Wo(t)}yc(e)}function sc(e){e.g&&(dc(e),e.g.cancel(),e.g=null)}function rc(e){sc(e),e.u&&(qs.clearTimeout(e.u),e.u=null),pc(e),e.i.cancel(),e.m&&("number"==typeof e.m&&qs.clearTimeout(e.m),e.m=null)}function oc(e){if(!Ca(e.i)&&!e.m){e.m=!0;var t=e.Na;to||so(),no||(to(),no=!0),io.add(t,e),e.C=0}}function ac(e,t){var n;n=t?t.m:e.W++;const i=na(e.I);oa(i,"SID",e.K),oa(i,"RID",n),oa(i,"AID",e.V),cc(e,i),e.o&&e.s&&ec(i,e.o,e.s),n=new Fo(e,e.l,n,e.C+1),null===e.o&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=lc(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Aa(e.i,n),Bo(n,i,t)}function cc(e,t){e.na&&kr(e.na,(function(e,n){oa(t,n,e)})),e.h&&Zo({},(function(e,n){oa(t,n,e)}))}function lc(e,t,n){n=Math.min(e.j.length,n);var i=e.h?Ws(e.h.Va,e.h,e):null;e:{var s=e.j;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=s[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let r=!0;for(let o=0;o<n;o++){let n=s[o].g;const a=s[o].map;if(n-=t,0>n)t=Math.max(0,s[o].g-100),r=!1;else try{Oa(a,e,"req"+n+"_")}catch(e){i&&i(a)}}if(r){i=e.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,i}function hc(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;to||so(),no||(to(),no=!0),io.add(t,e),e.A=0}}function uc(e){return!(e.g||e.u||3<=e.A)&&(e.ba++,e.u=So(Ws(e.Ma,e),mc(e,e.A)),e.A++,!0)}function dc(e){null!=e.B&&(qs.clearTimeout(e.B),e.B=null)}function fc(e){e.g=new Fo(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=na(e.wa);oa(t,"RID","rpc"),oa(t,"SID",e.K),oa(t,"AID",e.V),oa(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&oa(t,"TO",e.qa),oa(t,"TYPE","xmlhttp"),cc(e,t),e.o&&e.s&&ec(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=aa(na(t)),n.u=null,n.S=!0,zo(n,e)}function pc(e){null!=e.v&&(qs.clearTimeout(e.v),e.v=null)}function gc(e,t){var n=null;if(e.g==t){pc(e),dc(e),e.g=null;var i=2}else{if(!ka(e.i,t))return;n=t.F,Na(e.i,t),i=1}if(0!=e.H)if(t.i)if(1==i){n=t.u?t.u.length:0,t=Date.now()-t.G;var s=e.C;Wr(i=wo(),new Co(i,n)),oc(e)}else hc(e);else if(3==(s=t.s)||0==s&&0<t.ca||!(1==i&&function(e,t){return!(Sa(e.i)>=e.i.j-(e.m?1:0)||(e.m?(e.j=t.F.concat(e.j),0):1==e.H||2==e.H||e.C>=(e.cb?0:e.eb)||(e.m=So(Ws(e.Na,e,t),mc(e,e.C)),e.C++,0)))}(e,t)||2==i&&uc(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:_c(e,5);break;case 4:_c(e,10);break;case 3:_c(e,6);break;default:_c(e,2)}}function mc(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function _c(e,t){if(e.l.info("Error code "+t),2==t){var n=null;e.h&&(n=null);var i=Ws(e.pb,e);n||(n=new ta("//www.google.com/images/cleardot.gif"),qs.location&&"http"==qs.location.protocol||ia(n,"https"),aa(n)),function(e,t){const n=new mo;if(qs.Image){const i=new Image;i.onload=Gs(xa,n,i,"TestLoadImage: loaded",!0,t),i.onerror=Gs(xa,n,i,"TestLoadImage: error",!1,t),i.onabort=Gs(xa,n,i,"TestLoadImage: abort",!1,t),i.ontimeout=Gs(xa,n,i,"TestLoadImage: timeout",!1,t),qs.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=e}else t(!1)}(n.toString(),i)}else To(2);e.H=0,e.h&&e.h.za(t),yc(e),rc(e)}function yc(e){if(e.H=0,e.ma=[],e.h){const t=Ra(e.i);0==t.length&&0==e.j.length||(Zs(e.ma,t),Zs(e.ma,e.j),e.i.i.length=0,Xs(e.j),e.j.length=0),e.h.ya()}}function vc(e,t,n){var i=n instanceof ta?na(n):new ta(n);if(""!=i.g)t&&(i.g=t+"."+i.g),sa(i,i.m);else{var s=qs.location;i=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var r=new ta(null);i&&ia(r,i),t&&(r.g=t),s&&sa(r,s),n&&(r.l=n),i=r}return n=e.F,t=e.Da,n&&t&&oa(i,n,t),oa(i,"VER",e.ra),cc(e,i),i}function wc(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=e.Ha&&!e.va?new Ba(new La({ob:n})):new Ba(e.va)).Oa(e.J),t}function bc(){}function Ec(){if(hr&&!(10<=Number(wr)))throw Error("Environmental error: no available transport.")}function Ic(e,t){Hr.call(this),this.g=new nc(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!nr(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!nr(t)&&(this.g.F=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new Sc(this)}function Tc(e){xo.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Cc(){Lo.call(this),this.status=1}function Sc(e){this.g=e}function kc(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function Ac(e,t,n){n||(n=0);var i=Array(16);if("string"==typeof t)for(var s=0;16>s;++s)i[s]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(s=0;16>s;++s)i[s]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],s=e.g[2];var r=e.g[3],o=t+(r^n&(s^r))+i[0]+3614090360&4294967295;o=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=n+(o<<7&4294967295|o>>>25))+((o=r+(s^t&(n^s))+i[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^r&(t^n))+i[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^s&(r^t))+i[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=t+(r^n&(s^r))+i[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=r+(s^t&(n^s))+i[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^r&(t^n))+i[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^s&(r^t))+i[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=t+(r^n&(s^r))+i[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=r+(s^t&(n^s))+i[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^r&(t^n))+i[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^s&(r^t))+i[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=t+(r^n&(s^r))+i[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=r+(s^t&(n^s))+i[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^r&(t^n))+i[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^s&(r^t))+i[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^r&(n^s))+i[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=r+(n^s&(t^n))+i[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=s+(t^n&(r^t))+i[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(r^t&(s^r))+i[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=t+(s^r&(n^s))+i[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=r+(n^s&(t^n))+i[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=s+(t^n&(r^t))+i[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(r^t&(s^r))+i[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=t+(s^r&(n^s))+i[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=r+(n^s&(t^n))+i[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=s+(t^n&(r^t))+i[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(r^t&(s^r))+i[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=t+(s^r&(n^s))+i[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=r+(n^s&(t^n))+i[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=s+(t^n&(r^t))+i[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(r^t&(s^r))+i[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=t+(n^s^r)+i[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=r+(t^n^s)+i[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=s+(r^t^n)+i[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^r^t)+i[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^s^r)+i[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=r+(t^n^s)+i[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=s+(r^t^n)+i[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^r^t)+i[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^s^r)+i[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=r+(t^n^s)+i[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=s+(r^t^n)+i[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^r^t)+i[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^s^r)+i[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=r+(t^n^s)+i[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=s+(r^t^n)+i[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^r^t)+i[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=t+(s^(n|~r))+i[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=r+(n^(t|~s))+i[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=s+(t^(r|~n))+i[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(r^(s|~t))+i[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=t+(s^(n|~r))+i[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=r+(n^(t|~s))+i[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=s+(t^(r|~n))+i[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(r^(s|~t))+i[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=t+(s^(n|~r))+i[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=r+(n^(t|~s))+i[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=s+(t^(r|~n))+i[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(r^(s|~t))+i[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((r=(t=n+((o=t+(s^(n|~r))+i[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=r+(n^(t|~s))+i[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((s=r+((o=s+(t^(r|~n))+i[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~t))+i[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+r&4294967295}function Nc(e,t){this.h=t;for(var n=[],i=!0,s=e.length-1;0<=s;s--){var r=0|e[s];i&&r==t||(n[s]=r,i=!1)}this.g=n}(Ms=Ba.prototype).Oa=function(e){this.M=e},Ms.ha=function(e,t,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Do.g(),this.C=this.u?Ro(this.u):Ro(Do),this.g.onreadystatechange=Ws(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(e){return void Ha(this,e)}if(e=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else{if("function"!=typeof i.keys||"function"!=typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const e of i.keys())n.set(e,i.get(e))}i=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),s=qs.FormData&&e instanceof qs.FormData,!(0<=Js(Ka,t))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[e,t]of n)this.g.setRequestHeader(e,t);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Ya(this),0<this.B&&((this.L=function(e){return hr&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ws(this.ua,this)):this.A=co(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){Ha(this,e)}},Ms.ua=function(){void 0!==Vs&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Wr(this,"timeout"),this.abort(8))},Ms.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Wr(this,"complete"),Wr(this,"abort"),Qa(this))},Ms.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Qa(this,!0)),Ba.$.N.call(this)},Ms.La=function(){this.s||(this.G||this.v||this.l?Ga(this):this.kb())},Ms.kb=function(){Ga(this)},Ms.isActive=function(){return!!this.g},Ms.da=function(){try{return 2<Ja(this)?this.g.status:-1}catch(e){return-1}},Ms.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},Ms.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),ja(t)}},Ms.Ia=function(){return this.m},Ms.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(Ms=nc.prototype).ra=8,Ms.H=1,Ms.Na=function(e){if(this.m)if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const s=new Fo(this,this.l,e);let r=this.s;if(this.U&&(r?(r=Ar(r),Rr(r,this.U)):r=this.U),null!==this.o||this.O||(s.I=r,r=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){var i=this.j[n];if(void 0===(i="__data__"in i.map&&"string"==typeof(i=i.map.__data__)?i.length:void 0))break;if(4096<(t+=i)){t=n;break e}if(4096===t||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=lc(this,s,t),oa(n=na(this.I),"RID",e),oa(n,"CVER",22),this.F&&oa(n,"X-HTTP-Session-Id",this.F),cc(this,n),r&&(this.O?t="headers="+encodeURIComponent(String(Za(r)))+"&"+t:this.o&&ec(n,this.o,r)),Aa(this.i,s),this.bb&&oa(n,"TYPE","init"),this.P?(oa(n,"$req",t),oa(n,"SID","null"),s.aa=!0,Bo(s,n,null)):Bo(s,n,t),this.H=2}}else 3==this.H&&(e?ac(this,e):0==this.j.length||Ca(this.i)||ac(this))},Ms.Ma=function(){if(this.u=null,fc(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=So(Ws(this.jb,this),e)}},Ms.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,To(10),sc(this),fc(this))},Ms.ib=function(){null!=this.v&&(this.v=null,sc(this),uc(this),To(19))},Ms.pb=function(e){e?(this.l.info("Successfully pinged google.com"),To(2)):(this.l.info("Failed to ping google.com"),To(1))},Ms.isActive=function(){return!!this.h&&this.h.isActive(this)},(Ms=bc.prototype).Ba=function(){},Ms.Aa=function(){},Ms.za=function(){},Ms.ya=function(){},Ms.isActive=function(){return!0},Ms.Va=function(){},Ec.prototype.g=function(e,t){return new Ic(e,t)},Qs(Ic,Hr),Ic.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;To(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=vc(e,null,e.Y),oc(e)},Ic.prototype.close=function(){ic(this.g)},Ic.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=Qr(e),e=n);t.j.push(new Ea(t.fb++,e)),3==t.H&&oc(t)},Ic.prototype.N=function(){this.g.h=null,delete this.j,ic(this.g),delete this.g,Ic.$.N.call(this)},Qs(Tc,xo),Qs(Cc,Lo),Qs(Sc,bc),Sc.prototype.Ba=function(){Wr(this.g,"a")},Sc.prototype.Aa=function(e){Wr(this.g,new Tc(e))},Sc.prototype.za=function(e){Wr(this.g,new Cc)},Sc.prototype.ya=function(){Wr(this.g,"b")},Qs(kc,(function(){this.blockSize=-1})),kc.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},kc.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,i=this.m,s=this.h,r=0;r<t;){if(0==s)for(;r<=n;)Ac(this,e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[s++]=e.charCodeAt(r++),s==this.blockSize){Ac(this,i),s=0;break}}else for(;r<t;)if(i[s++]=e[r++],s==this.blockSize){Ac(this,i),s=0;break}}this.h=s,this.i+=t},kc.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var i=0;32>i;i+=8)e[n++]=this.g[t]>>>i&255;return e};var Rc={};function Pc(e){return-128<=e&&128>e?function(e,t){var n=Rc;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}(e,(function(e){return new Nc([0|e],0>e?-1:0)})):new Nc([0|e],0>e?-1:0)}function Dc(e){if(isNaN(e)||!isFinite(e))return xc;if(0>e)return Vc(Dc(-e));for(var t=[],n=1,i=0;e>=n;i++)t[i]=e/n|0,n*=Oc;return new Nc(t,0)}var Oc=4294967296,xc=Pc(0),Lc=Pc(1),Mc=Pc(16777216);function Fc(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function Uc(e){return-1==e.h}function Vc(e){for(var t=e.g.length,n=[],i=0;i<t;i++)n[i]=~e.g[i];return new Nc(n,~e.h).add(Lc)}function qc(e,t){return e.add(Vc(t))}function jc(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Bc(e,t){this.g=e,this.h=t}function zc(e,t){if(Fc(t))throw Error("division by zero");if(Fc(e))return new Bc(xc,xc);if(Uc(e))return t=zc(Vc(e),t),new Bc(Vc(t.g),Vc(t.h));if(Uc(t))return t=zc(e,Vc(t)),new Bc(Vc(t.g),t.h);if(30<e.g.length){if(Uc(e)||Uc(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Lc,i=t;0>=i.X(e);)n=$c(n),i=$c(i);var s=Kc(n,1),r=Kc(i,1);for(i=Kc(i,2),n=Kc(n,2);!Fc(i);){var o=r.add(i);0>=o.X(e)&&(s=s.add(n),r=o),i=Kc(i,1),n=Kc(n,1)}return t=qc(e,s.R(t)),new Bc(s,t)}for(s=xc;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),i=48>=(i=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,i-48),o=(r=Dc(n)).R(t);Uc(o)||0<o.X(e);)o=(r=Dc(n-=i)).R(t);Fc(r)&&(r=Lc),s=s.add(r),e=qc(e,o)}return new Bc(s,e)}function $c(e){for(var t=e.g.length+1,n=[],i=0;i<t;i++)n[i]=e.D(i)<<1|e.D(i-1)>>>31;return new Nc(n,e.h)}function Kc(e,t){var n=t>>5;t%=32;for(var i=e.g.length-n,s=[],r=0;r<i;r++)s[r]=0<t?e.D(r+n)>>>t|e.D(r+n+1)<<32-t:e.D(r+n);return new Nc(s,e.h)}(Ms=Nc.prototype).ea=function(){if(Uc(this))return-Vc(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var i=this.D(n);e+=(0<=i?i:Oc+i)*t,t*=Oc}return e},Ms.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(Fc(this))return"0";if(Uc(this))return"-"+Vc(this).toString(e);for(var t=Dc(Math.pow(e,6)),n=this,i="";;){var s=zc(n,t).g,r=((0<(n=qc(n,s.R(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(Fc(n=s))return r+i;for(;6>r.length;)r="0"+r;i=r+i}},Ms.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},Ms.X=function(e){return Uc(e=qc(this,e))?-1:Fc(e)?0:1},Ms.abs=function(){return Uc(this)?Vc(this):this},Ms.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0,s=0;s<=t;s++){var r=i+(65535&this.D(s))+(65535&e.D(s)),o=(r>>>16)+(this.D(s)>>>16)+(e.D(s)>>>16);i=o>>>16,r&=65535,o&=65535,n[s]=o<<16|r}return new Nc(n,-2147483648&n[n.length-1]?-1:0)},Ms.R=function(e){if(Fc(this)||Fc(e))return xc;if(Uc(this))return Uc(e)?Vc(this).R(Vc(e)):Vc(Vc(this).R(e));if(Uc(e))return Vc(this.R(Vc(e)));if(0>this.X(Mc)&&0>e.X(Mc))return Dc(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],i=0;i<2*t;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<e.g.length;s++){var r=this.D(i)>>>16,o=65535&this.D(i),a=e.D(s)>>>16,c=65535&e.D(s);n[2*i+2*s]+=o*c,jc(n,2*i+2*s),n[2*i+2*s+1]+=r*c,jc(n,2*i+2*s+1),n[2*i+2*s+1]+=o*a,jc(n,2*i+2*s+1),n[2*i+2*s+2]+=r*a,jc(n,2*i+2*s+2)}for(i=0;i<t;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=t;i<2*t;i++)n[i]=0;return new Nc(n,0)},Ms.gb=function(e){return zc(this,e).h},Ms.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)&e.D(i);return new Nc(n,this.h&e.h)},Ms.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)|e.D(i);return new Nc(n,this.h|e.h)},Ms.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)^e.D(i);return new Nc(n,this.h^e.h)},Ec.prototype.createWebChannel=Ec.prototype.g,Ic.prototype.send=Ic.prototype.u,Ic.prototype.open=Ic.prototype.m,Ic.prototype.close=Ic.prototype.close,ko.NO_ERROR=0,ko.TIMEOUT=8,ko.HTTP_ERROR=6,Ao.COMPLETE="complete",Po.EventType=Oo,Oo.OPEN="a",Oo.CLOSE="b",Oo.ERROR="c",Oo.MESSAGE="d",Hr.prototype.listen=Hr.prototype.O,Ba.prototype.listenOnce=Ba.prototype.P,Ba.prototype.getLastError=Ba.prototype.Sa,Ba.prototype.getLastErrorCode=Ba.prototype.Ia,Ba.prototype.getStatus=Ba.prototype.da,Ba.prototype.getResponseJson=Ba.prototype.Wa,Ba.prototype.getResponseText=Ba.prototype.ja,Ba.prototype.send=Ba.prototype.ha,Ba.prototype.setWithCredentials=Ba.prototype.Oa,kc.prototype.digest=kc.prototype.l,kc.prototype.reset=kc.prototype.reset,kc.prototype.update=kc.prototype.j,Nc.prototype.add=Nc.prototype.add,Nc.prototype.multiply=Nc.prototype.R,Nc.prototype.modulo=Nc.prototype.gb,Nc.prototype.compare=Nc.prototype.X,Nc.prototype.toNumber=Nc.prototype.ea,Nc.prototype.toString=Nc.prototype.toString,Nc.prototype.getBits=Nc.prototype.D,Nc.fromNumber=Dc,Nc.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return Vc(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var i=Dc(Math.pow(n,8)),s=xc,r=0;r<t.length;r+=8){var o=Math.min(8,t.length-r),a=parseInt(t.substring(r,r+o),n);8>o?(o=Dc(Math.pow(n,o)),s=s.R(o).add(Dc(a))):s=(s=s.R(i)).add(Dc(a))}return s};var Hc=Us.createWebChannelTransport=function(){return new Ec},Wc=Us.getStatEventTarget=function(){return wo()},Gc=Us.ErrorCode=ko,Qc=Us.EventType=Ao,Yc=Us.Event=yo,Jc=Us.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Xc=(Us.FetchXmlHttpFactory=La,Us.WebChannel=Po),Zc=Us.XhrIo=Ba,el=Us.Md5=kc,tl=Us.Integer=Nc;const nl="@firebase/firestore";
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
 */class il{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}il.UNAUTHENTICATED=new il(null),il.GOOGLE_CREDENTIALS=new il("google-credentials-uid"),il.FIRST_PARTY=new il("first-party-uid"),il.MOCK_USER=new il("mock-user");
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
let sl="10.9.0";
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
 */const rl=new s.Vy("@firebase/firestore");function ol(){return rl.logLevel}function al(e,...t){if(rl.logLevel<=s.$b.DEBUG){const n=t.map(hl);rl.debug(`Firestore (${sl}): ${e}`,...n)}}function cl(e,...t){if(rl.logLevel<=s.$b.ERROR){const n=t.map(hl);rl.error(`Firestore (${sl}): ${e}`,...n)}}function ll(e,...t){if(rl.logLevel<=s.$b.WARN){const n=t.map(hl);rl.warn(`Firestore (${sl}): ${e}`,...n)}}function hl(e){if("string"==typeof e)return e;try{
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
 */function ul(e="Unexpected state"){const t=`FIRESTORE (${sl}) INTERNAL ASSERTION FAILED: `+e;throw cl(t),new Error(t)}function dl(e,t){e||ul()}function fl(e,t){return e}
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
 */const pl={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class gl extends i.g{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class ml{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
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
 */class _l{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class yl{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(il.UNAUTHENTICATED)))}shutdown(){}}class vl{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class wl{constructor(e){this.t=e,this.currentUser=il.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const i=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let s=new ml;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ml,e.enqueueRetryable((()=>i(this.currentUser)))};const r=()=>{const t=s;e.enqueueRetryable((async()=>{await t.promise,await i(this.currentUser)}))},o=e=>{al("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(al("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ml)}}),0),r()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(al("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(dl("string"==typeof t.accessToken),new _l(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return dl(null===e||"string"==typeof e),new il(e)}}class bl{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=il.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class El{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new bl(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable((()=>t(il.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Il{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Tl{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const n=e=>{null!=e.error&&al("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.R;return this.R=e.token,al("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const i=e=>{al("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit((e=>i(e))),setTimeout((()=>{if(!this.appCheck){const e=this.A.getImmediate({optional:!0});e?i(e):al("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(dl("string"==typeof e.token),this.R=e.token,new Il(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
function Cl(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
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
 */class Sl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(256/62);let n="";for(;n.length<20;){const i=Cl(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<t&&(n+=e.charAt(i[s]%62))}return n}}function kl(e,t){return e<t?-1:e>t?1:0}function Al(e,t,n){return e.length===t.length&&e.every(((e,i)=>n(e,t[i])))}
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
class Nl{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new gl(pl.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new gl(pl.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new gl(pl.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new gl(pl.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Nl.fromMillis(Date.now())}static fromDate(e){return Nl.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new Nl(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?kl(this.nanoseconds,e.nanoseconds):kl(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class Rl{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Rl(e)}static min(){return new Rl(new Nl(0,0))}static max(){return new Rl(new Nl(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */class Pl{constructor(e,t,n){void 0===t?t=0:t>e.length&&ul(),void 0===n?n=e.length-t:n>e.length-t&&ul(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Pl.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Pl?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const n=e.get(i),s=t.get(i);if(n<s)return-1;if(n>s)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Dl extends Pl{construct(e,t,n){return new Dl(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new gl(pl.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Dl(t)}static emptyPath(){return new Dl([])}}const Ol=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class xl extends Pl{construct(e,t,n){return new xl(e,t,n)}static isValidIdentifier(e){return Ol.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xl.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new xl(["__name__"])}static fromServerFormat(e){const t=[];let n="",i=0;const s=()=>{if(0===n.length)throw new gl(pl.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let r=!1;for(;i<e.length;){const t=e[i];if("\\"===t){if(i+1===e.length)throw new gl(pl.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[i+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new gl(pl.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,i+=2}else"`"===t?(r=!r,i++):"."!==t||r?(n+=t,i++):(s(),i++)}if(s(),r)throw new gl(pl.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new xl(t)}static emptyPath(){return new xl([])}}
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
 */class Ll{constructor(e){this.path=e}static fromPath(e){return new Ll(Dl.fromString(e))}static fromName(e){return new Ll(Dl.fromString(e).popFirst(5))}static empty(){return new Ll(Dl.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Dl.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Dl.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ll(new Dl(e.slice()))}}
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
 */class Ml{constructor(e,t,n,i){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=i}}Ml.UNKNOWN_ID=-1;function Fl(e,t){const n=e.toTimestamp().seconds,i=e.toTimestamp().nanoseconds+1,s=Rl.fromTimestamp(1e9===i?new Nl(n+1,0):new Nl(n,i));return new Vl(s,Ll.empty(),t)}function Ul(e){return new Vl(e.readTime,e.key,-1)}class Vl{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Vl(Rl.min(),Ll.empty(),-1)}static max(){return new Vl(Rl.max(),Ll.empty(),-1)}}function ql(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=Ll.comparator(e.documentKey,t.documentKey),0!==n?n:kl(e.largestBatchId,t.largestBatchId)
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
 */)}const jl="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Bl{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
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
 */async function zl(e){if(e.code!==pl.FAILED_PRECONDITION||e.message!==jl)throw e;al("LocalStore","Unexpectedly lost primary lease")}
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
 */class $l{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ul(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new $l(((n,i)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,i)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof $l?t:$l.resolve(t)}catch(e){return $l.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):$l.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):$l.reject(t)}static resolve(e){return new $l(((t,n)=>{t(e)}))}static reject(e){return new $l(((t,n)=>{n(e)}))}static waitFor(e){return new $l(((t,n)=>{let i=0,s=0,r=!1;e.forEach((e=>{++i,e.next((()=>{++s,r&&s===i&&t()}),(e=>n(e)))})),r=!0,s===i&&t()}))}static or(e){let t=$l.resolve(!1);for(const n of e)t=t.next((e=>e?$l.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,i)=>{n.push(t.call(this,e,i))})),this.waitFor(n)}static mapArray(e,t){return new $l(((n,i)=>{const s=e.length,r=new Array(s);let o=0;for(let a=0;a<s;a++){const c=a;t(e[c]).next((e=>{r[c]=e,++o,o===s&&n(r)}),(e=>i(e)))}}))}static doWhile(e,t){return new $l(((n,i)=>{const s=()=>{!0===e()?t().next((()=>{s()}),i):n()};s()}))}}
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
 */class Kl{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new ml,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new Gl(e,t.error)):this.V.resolve()},this.transaction.onerror=t=>{const n=Zl(t.target.error);this.V.reject(new Gl(e,n))}}static open(e,t,n,i){try{return new Kl(t,e.transaction(i,n))}catch(e){throw new Gl(t,e)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(al("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Yl(t)}}class Hl{constructor(e,t,n){this.name=e,this.version=t,this.p=n,12.2===Hl.S((0,i.ZQ)())&&cl("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return al("SimpleDb","Removing database:",e),Jl(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!(0,i.zW)())return!1;if(Hl.C())return!0;const e=(0,i.ZQ)(),t=Hl.S(e),n=0<t&&t<10,s=Hl.v(e),r=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||r)}static C(){var e;return"undefined"!=typeof process&&"YES"===(null===(e=process.__PRIVATE_env)||void 0===e?void 0:e.F)}static M(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static v(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async O(e){return this.db||(al("SimpleDb","Opening database:",this.name),this.db=await new Promise(((t,n)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=e=>{const n=e.target.result;t(n)},i.onblocked=()=>{n(new Gl(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=t=>{const i=t.target.error;"VersionError"===i.name?n(new gl(pl.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===i.name?n(new gl(pl.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+i)):n(new Gl(e,i))},i.onupgradeneeded=e=>{al("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.p.N(t,i.transaction,e.oldVersion,this.version).next((()=>{al("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.L&&(this.db.onversionchange=e=>this.L(e)),this.db}B(e){this.L=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,i){const s="readonly"===t;let r=0;for(;;){++r;try{this.db=await this.O(e);const t=Kl.open(this.db,e,s?"readonly":"readwrite",n),r=i(t).next((e=>(t.g(),e))).catch((e=>(t.abort(e),$l.reject(e)))).toPromise();return r.catch((()=>{})),await t.m,r}catch(e){const t=e,n="FirebaseError"!==t.name&&r<3;if(al("SimpleDb","Transaction failed with error:",t.message,"Retrying:",n),this.close(),!n)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Wl{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return Jl(this.k.delete())}}class Gl extends gl{constructor(e,t){super(pl.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Ql(e){return"IndexedDbTransactionError"===e.name}class Yl{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(al("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(al("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Jl(n)}add(e){return al("SimpleDb","ADD",this.store.name,e,e),Jl(this.store.add(e))}get(e){return Jl(this.store.get(e)).next((t=>(void 0===t&&(t=null),al("SimpleDb","GET",this.store.name,e,t),t)))}delete(e){return al("SimpleDb","DELETE",this.store.name,e),Jl(this.store.delete(e))}count(){return al("SimpleDb","COUNT",this.store.name),Jl(this.store.count())}W(e,t){const n=this.options(e,t),i=n.index?this.store.index(n.index):this.store;if("function"==typeof i.getAll){const e=i.getAll(n.range);return new $l(((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}}))}{const e=this.cursor(n),t=[];return this.G(e,((e,n)=>{t.push(n)})).next((()=>t))}}j(e,t){const n=this.store.getAll(e,null===t?void 0:t);return new $l(((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}}))}H(e,t){al("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.J=!1;const i=this.cursor(n);return this.G(i,((e,t,n)=>n.delete()))}Y(e,t){let n;t?n=e:(n={},t=e);const i=this.cursor(n);return this.G(i,t)}Z(e){const t=this.cursor({});return new $l(((n,i)=>{t.onerror=e=>{const t=Zl(e.target.error);i(t)},t.onsuccess=t=>{const i=t.target.result;i?e(i.primaryKey,i.value).next((e=>{e?i.continue():n()})):n()}}))}G(e,t){const n=[];return new $l(((i,s)=>{e.onerror=e=>{s(e.target.error)},e.onsuccess=e=>{const s=e.target.result;if(!s)return void i();const r=new Wl(s),o=t(s.primaryKey,s.value,r);if(o instanceof $l){const e=o.catch((e=>(r.done(),$l.reject(e))));n.push(e)}r.isDone?i():null===r.$?s.continue():s.continue(r.$)}})).next((()=>$l.waitFor(n)))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.J?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Jl(e){return new $l(((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=Zl(e.target.error);n(t)}}))}let Xl=!1;function Zl(e){const t=Hl.S((0,i.ZQ)());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new gl("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Xl||(Xl=!0,setTimeout((()=>{throw e}),0)),e}}return e}
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
class eh{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.se(e),this.oe=e=>t.writeSequenceNumber(e))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}function th(e){return null==e}function nh(e){return 0===e&&1/e==-1/0}function ih(e){return"number"==typeof e&&Number.isInteger(e)&&!nh(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
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
 */eh._e=-1;const sh=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],rh=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],oh=rh;
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
function ah(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function ch(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function lh(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
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
 */class hh{constructor(e,t){this.comparator=e,this.root=t||dh.EMPTY}insert(e,t){return new hh(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,dh.BLACK,null,null))}remove(e){return new hh(this.comparator,this.root.remove(e,this.comparator).copy(null,null,dh.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(0===i)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new uh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new uh(this.root,e,this.comparator,!1)}getReverseIterator(){return new uh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new uh(this.root,e,this.comparator,!0)}}class uh{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(0===s){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class dh{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=null!=n?n:dh.RED,this.left=null!=i?i:dh.EMPTY,this.right=null!=s?s:dh.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,s){return new dh(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===s?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return dh.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===t(e,i.key)){if(i.right.isEmpty())return dh.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,dh.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,dh.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ul();if(this.right.isRed())throw ul();const e=this.left.check();if(e!==this.right.check())throw ul();return e+(this.isRed()?0:1)}}dh.EMPTY=null,dh.RED=!0,dh.BLACK=!1,dh.EMPTY=new class{constructor(){this.size=0}get key(){throw ul()}get value(){throw ul()}get color(){throw ul()}get left(){throw ul()}get right(){throw ul()}copy(e,t,n,i,s){return this}insert(e,t,n){return new dh(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class fh{constructor(e){this.comparator=e,this.data=new hh(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ph(this.data.getIterator())}getIteratorFrom(e){return new ph(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof fh))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(0!==this.comparator(e,i))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new fh(this.comparator);return t.data=e,t}}class ph{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
class gh{constructor(e){this.fields=e,e.sort(xl.comparator)}static empty(){return new gh([])}unionWith(e){let t=new fh(xl.comparator);for(const e of this.fields)t=t.add(e);for(const n of e)t=t.add(n);return new gh(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Al(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
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
 */class mh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
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
class _h{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new mh("Invalid base64 string: "+e):e}}(e);return new _h(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new _h(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return kl(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_h.EMPTY_BYTE_STRING=new _h("");const yh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vh(e){if(dl(!!e),"string"==typeof e){let t=0;const n=yh.exec(e);if(dl(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:wh(e.seconds),nanos:wh(e.nanos)}}function wh(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function bh(e){return"string"==typeof e?_h.fromBase64String(e):_h.fromUint8Array(e)}
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
 */function Eh(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Ih(e){const t=e.mapValue.fields.__previous_value__;return Eh(t)?Ih(t):t}function Th(e){const t=vh(e.mapValue.fields.__local_write_time__.timestampValue);return new Nl(t.seconds,t.nanos)}
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
 */class Ch{constructor(e,t,n,i,s,r,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class Sh{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Sh("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Sh&&e.projectId===this.projectId&&e.database===this.database}}
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
 */const kh={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ah(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Eh(e)?4:jh(e)?9007199254740991:10:ul()}function Nh(e,t){if(e===t)return!0;const n=Ah(e);if(n!==Ah(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Th(e).isEqual(Th(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=vh(e.timestampValue),i=vh(t.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return bh(e.bytesValue).isEqual(bh(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return wh(e.geoPointValue.latitude)===wh(t.geoPointValue.latitude)&&wh(e.geoPointValue.longitude)===wh(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return wh(e.integerValue)===wh(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=wh(e.doubleValue),i=wh(t.doubleValue);return n===i?nh(n)===nh(i):isNaN(n)&&isNaN(i)}return!1}(e,t);case 9:return Al(e.arrayValue.values||[],t.arrayValue.values||[],Nh);case 10:return function(e,t){const n=e.mapValue.fields||{},i=t.mapValue.fields||{};if(ah(n)!==ah(i))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===i[e]||!Nh(n[e],i[e])))return!1;return!0}(e,t);default:return ul()}}function Rh(e,t){return void 0!==(e.values||[]).find((e=>Nh(e,t)))}function Ph(e,t){if(e===t)return 0;const n=Ah(e),i=Ah(t);if(n!==i)return kl(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return kl(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=wh(e.integerValue||e.doubleValue),i=wh(t.integerValue||t.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(e,t);case 3:return Dh(e.timestampValue,t.timestampValue);case 4:return Dh(Th(e),Th(t));case 5:return kl(e.stringValue,t.stringValue);case 6:return function(e,t){const n=bh(e),i=bh(t);return n.compareTo(i)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),i=t.split("/");for(let e=0;e<n.length&&e<i.length;e++){const t=kl(n[e],i[e]);if(0!==t)return t}return kl(n.length,i.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=kl(wh(e.latitude),wh(t.latitude));return 0!==n?n:kl(wh(e.longitude),wh(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],i=t.values||[];for(let e=0;e<n.length&&e<i.length;++e){const t=Ph(n[e],i[e]);if(t)return t}return kl(n.length,i.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===kh.mapValue&&t===kh.mapValue)return 0;if(e===kh.mapValue)return 1;if(t===kh.mapValue)return-1;const n=e.fields||{},i=Object.keys(n),s=t.fields||{},r=Object.keys(s);i.sort(),r.sort();for(let e=0;e<i.length&&e<r.length;++e){const t=kl(i[e],r[e]);if(0!==t)return t;const o=Ph(n[i[e]],s[r[e]]);if(0!==o)return o}return kl(i.length,r.length)}(e.mapValue,t.mapValue);default:throw ul()}}function Dh(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return kl(e,t);const n=vh(e),i=vh(t),s=kl(n.seconds,i.seconds);return 0!==s?s:kl(n.nanos,i.nanos)}function Oh(e){return xh(e)}function xh(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=vh(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(e){return bh(e).toBase64()}(e.bytesValue):"referenceValue"in e?function(e){return Ll.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0;for(const i of e.values||[])n?n=!1:t+=",",t+=xh(i);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",i=!0;for(const s of t)i?i=!1:n+=",",n+=`${s}:${xh(e.fields[s])}`;return n+"}"}(e.mapValue):ul()}function Lh(e){return!!e&&"integerValue"in e}function Mh(e){return!!e&&"arrayValue"in e}function Fh(e){return!!e&&"nullValue"in e}function Uh(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Vh(e){return!!e&&"mapValue"in e}function qh(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return ch(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=qh(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=qh(e.arrayValue.values[n]);return t}return Object.assign({},e)}function jh(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
class Bh{constructor(e){this.value=e}static empty(){return new Bh({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Vh(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=qh(t)}setAll(e){let t=xl.emptyPath(),n={},i=[];e.forEach(((e,s)=>{if(!t.isImmediateParentOf(s)){const e=this.getFieldsMap(t);this.applyChanges(e,n,i),n={},i=[],t=s.popLast()}e?n[s.lastSegment()]=qh(e):i.push(s.lastSegment())}));const s=this.getFieldsMap(t);this.applyChanges(s,n,i)}delete(e){const t=this.field(e.popLast());Vh(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Nh(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];Vh(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){ch(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new Bh(qh(this.value))}}function zh(e){const t=[];return ch(e.fields,((e,n)=>{const i=new xl([e]);if(Vh(n)){const e=zh(n.mapValue).fields;if(0===e.length)t.push(i);else for(const n of e)t.push(i.child(n))}else t.push(i)})),new gh(t)
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
 */}class $h{constructor(e,t,n,i,s,r,o){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=s,this.data=r,this.documentState=o}static newInvalidDocument(e){return new $h(e,0,Rl.min(),Rl.min(),Rl.min(),Bh.empty(),0)}static newFoundDocument(e,t,n,i){return new $h(e,1,t,Rl.min(),n,i,0)}static newNoDocument(e,t){return new $h(e,2,t,Rl.min(),Rl.min(),Bh.empty(),0)}static newUnknownDocument(e,t){return new $h(e,3,t,Rl.min(),Rl.min(),Bh.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Rl.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Bh.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Bh.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Rl.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof $h&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new $h(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class Kh{constructor(e,t){this.position=e,this.inclusive=t}}function Hh(e,t,n){let i=0;for(let s=0;s<e.position.length;s++){const r=t[s],o=e.position[s];if(i=r.field.isKeyField()?Ll.comparator(Ll.fromName(o.referenceValue),n.key):Ph(o,n.data.field(r.field)),"desc"===r.dir&&(i*=-1),0!==i)break}return i}function Wh(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Nh(e.position[n],t.position[n]))return!1;return!0}
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
 */class Gh{constructor(e,t="asc"){this.field=e,this.dir=t}}function Qh(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
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
 */class Yh{}class Jh extends Yh{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new ru(e,t,n):"array-contains"===t?new lu(e,n):"in"===t?new hu(e,n):"not-in"===t?new uu(e,n):"array-contains-any"===t?new du(e,n):new Jh(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new ou(e,n):new au(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(Ph(t,this.value)):null!==t&&Ah(this.value)===Ah(t)&&this.matchesComparison(Ph(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return ul()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Xh extends Yh{constructor(e,t){super(),this.filters=e,this.op=t,this.ue=null}static create(e,t){return new Xh(e,t)}matches(e){return Zh(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ue||(this.ue=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Zh(e){return"and"===e.op}function eu(e){return tu(e)&&Zh(e)}function tu(e){for(const t of e.filters)if(t instanceof Xh)return!1;return!0}function nu(e){if(e instanceof Jh)return e.field.canonicalString()+e.op.toString()+Oh(e.value);if(eu(e))return e.filters.map((e=>nu(e))).join(",");{const t=e.filters.map((e=>nu(e))).join(",");return`${e.op}(${t})`}}function iu(e,t){return e instanceof Jh?function(e,t){return t instanceof Jh&&e.op===t.op&&e.field.isEqual(t.field)&&Nh(e.value,t.value)}(e,t):e instanceof Xh?function(e,t){return t instanceof Xh&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,i)=>e&&iu(n,t.filters[i])),!0)}(e,t):void ul()}function su(e){return e instanceof Jh?function(e){return`${e.field.canonicalString()} ${e.op} ${Oh(e.value)}`}(e):e instanceof Xh?function(e){return e.op.toString()+" {"+e.getFilters().map(su).join(" ,")+"}"}(e):"Filter"}class ru extends Jh{constructor(e,t,n){super(e,t,n),this.key=Ll.fromName(n.referenceValue)}matches(e){const t=Ll.comparator(e.key,this.key);return this.matchesComparison(t)}}class ou extends Jh{constructor(e,t){super(e,"in",t),this.keys=cu("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class au extends Jh{constructor(e,t){super(e,"not-in",t),this.keys=cu("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function cu(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>Ll.fromName(e.referenceValue)))}class lu extends Jh{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Mh(t)&&Rh(t.arrayValue,this.value)}}class hu extends Jh{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Rh(this.value.arrayValue,t)}}class uu extends Jh{constructor(e,t){super(e,"not-in",t)}matches(e){if(Rh(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Rh(this.value.arrayValue,t)}}class du extends Jh{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Mh(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Rh(this.value.arrayValue,e)))}}
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
 */class fu{constructor(e,t=null,n=[],i=[],s=null,r=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=r,this.endAt=o,this.ce=null}}function pu(e,t=null,n=[],i=[],s=null,r=null,o=null){return new fu(e,t,n,i,s,r,o)}function gu(e){const t=fl(e);if(null===t.ce){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>nu(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),th(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>Oh(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>Oh(e))).join(",")),t.ce=e}return t.ce}function mu(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Qh(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!iu(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Wh(e.startAt,t.startAt)&&Wh(e.endAt,t.endAt)}function _u(e){return Ll.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
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
class yu{constructor(e,t=null,n=[],i=[],s=null,r="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=r,this.startAt=o,this.endAt=a,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function vu(e,t,n,i,s,r,o,a){return new yu(e,t,n,i,s,r,o,a)}function wu(e){return new yu(e)}function bu(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Eu(e){return null!==e.collectionGroup}function Iu(e){const t=fl(e);if(null===t.le){t.le=[];const e=new Set;for(const n of t.explicitOrderBy)t.le.push(n),e.add(n.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc",i=function(e){let t=new fh(xl.comparator);return e.filters.forEach((e=>{e.getFlattenedFilters().forEach((e=>{e.isInequality()&&(t=t.add(e.field))}))})),t}(t);i.forEach((i=>{e.has(i.canonicalString())||i.isKeyField()||t.le.push(new Gh(i,n))})),e.has(xl.keyField().canonicalString())||t.le.push(new Gh(xl.keyField(),n))}return t.le}function Tu(e){const t=fl(e);return t.he||(t.he=Cu(t,Iu(e))),t.he}function Cu(e,t){if("F"===e.limitType)return pu(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map((e=>{const t="desc"===e.dir?"asc":"desc";return new Gh(e.field,t)}));const n=e.endAt?new Kh(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Kh(e.startAt.position,e.startAt.inclusive):null;return pu(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}}function Su(e,t,n){return new yu(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function ku(e,t){return mu(Tu(e),Tu(t))&&e.limitType===t.limitType}function Au(e){return`${gu(Tu(e))}|lt:${e.limitType}`}function Nu(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>su(e))).join(", ")}]`),th(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Oh(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Oh(e))).join(",")),`Target(${t})`}(Tu(e))}; limitType=${e.limitType})`}function Ru(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Ll.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of Iu(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const i=Hh(e,t,n);return e.inclusive?i<=0:i<0}(e.startAt,Iu(e),t))&&!(e.endAt&&!function(e,t,n){const i=Hh(e,t,n);return e.inclusive?i>=0:i>0}(e.endAt,Iu(e),t))}(e,t)}function Pu(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Du(e){return(t,n)=>{let i=!1;for(const s of Iu(e)){const e=Ou(s,t,n);if(0!==e)return e;i=i||s.field.isKeyField()}return 0}}function Ou(e,t,n){const i=e.field.isKeyField()?Ll.comparator(t.key,n.key):function(e,t,n){const i=t.data.field(e),s=n.data.field(e);return null!==i&&null!==s?Ph(i,s):ul()}(e.field,t,n);switch(e.dir){case"asc":return i;case"desc":return-1*i;default:return ul()}}
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
 */class xu{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,i]of n)if(this.equalsFn(t,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(void 0===i)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],e))return void(i[n]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return 1===n.length?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ch(this.inner,((t,n)=>{for(const[t,i]of n)e(t,i)}))}isEmpty(){return lh(this.inner)}size(){return this.innerSize}}
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
 */const Lu=new hh(Ll.comparator);function Mu(){return Lu}const Fu=new hh(Ll.comparator);function Uu(...e){let t=Fu;for(const n of e)t=t.insert(n.key,n);return t}function Vu(e){let t=Fu;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function qu(){return Bu()}function ju(){return Bu()}function Bu(){return new xu((e=>e.toString()),((e,t)=>e.isEqual(t)))}const zu=new hh(Ll.comparator),$u=new fh(Ll.comparator);function Ku(...e){let t=$u;for(const n of e)t=t.add(n);return t}const Hu=new fh(kl);function Wu(){return Hu}
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
 */function Gu(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:nh(t)?"-0":t}}function Qu(e){return{integerValue:""+e}}function Yu(e,t){return ih(t)?Qu(t):Gu(e,t)}
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
 */class Ju{constructor(){this._=void 0}}function Xu(e,t,n){return e instanceof td?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&Eh(t)&&(t=Ih(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof nd?id(e,t):e instanceof sd?rd(e,t):function(e,t){const n=ed(e,t),i=ad(n)+ad(e.Ie);return Lh(n)&&Lh(e.Ie)?Qu(i):Gu(e.serializer,i)}(e,t)}function Zu(e,t,n){return e instanceof nd?id(e,t):e instanceof sd?rd(e,t):n}function ed(e,t){return e instanceof od?function(e){return Lh(e)||function(e){return!!e&&"doubleValue"in e}(e)}(t)?t:{integerValue:0}:null}class td extends Ju{}class nd extends Ju{constructor(e){super(),this.elements=e}}function id(e,t){const n=cd(t);for(const t of e.elements)n.some((e=>Nh(e,t)))||n.push(t);return{arrayValue:{values:n}}}class sd extends Ju{constructor(e){super(),this.elements=e}}function rd(e,t){let n=cd(t);for(const t of e.elements)n=n.filter((e=>!Nh(e,t)));return{arrayValue:{values:n}}}class od extends Ju{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function ad(e){return wh(e.integerValue||e.doubleValue)}function cd(e){return Mh(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
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
 */class ld{constructor(e,t){this.version=e,this.transformResults=t}}class hd{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new hd}static exists(e){return new hd(void 0,e)}static updateTime(e){return new hd(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ud(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class dd{}function fd(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Id(e.key,hd.none()):new yd(e.key,e.data,hd.none());{const n=e.data,i=Bh.empty();let s=new fh(xl.comparator);for(let e of t.fields)if(!s.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?i.delete(e):i.set(e,t),s=s.add(e)}return new vd(e.key,i,new gh(s.toArray()),hd.none())}}function pd(e,t,n){e instanceof yd?function(e,t,n){const i=e.value.clone(),s=bd(e.fieldTransforms,t,n.transformResults);i.setAll(s),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):e instanceof vd?function(e,t,n){if(!ud(e.precondition,t))return void t.convertToUnknownDocument(n.version);const i=bd(e.fieldTransforms,t,n.transformResults),s=t.data;s.setAll(wd(e)),s.setAll(i),t.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function gd(e,t,n,i){return e instanceof yd?function(e,t,n,i){if(!ud(e.precondition,t))return n;const s=e.value.clone(),r=Ed(e.fieldTransforms,i,t);return s.setAll(r),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null}(e,t,n,i):e instanceof vd?function(e,t,n,i){if(!ud(e.precondition,t))return n;const s=Ed(e.fieldTransforms,i,t),r=t.data;return r.setAll(wd(e)),r.setAll(s),t.convertToFoundDocument(t.version,r).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,i):function(e,t,n){return ud(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function md(e,t){let n=null;for(const i of e.fieldTransforms){const e=t.data.field(i.field),s=ed(i.transform,e||null);null!=s&&(null===n&&(n=Bh.empty()),n.set(i.field,s))}return n||null}function _d(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&Al(e,t,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof nd&&t instanceof nd||e instanceof sd&&t instanceof sd?Al(e.elements,t.elements,Nh):e instanceof od&&t instanceof od?Nh(e.Ie,t.Ie):e instanceof td&&t instanceof td}(e.transform,t.transform)}(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class yd extends dd{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class vd extends dd{constructor(e,t,n,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function wd(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=e.data.field(n);t.set(n,i)}})),t}function bd(e,t,n){const i=new Map;dl(e.length===n.length);for(let s=0;s<n.length;s++){const r=e[s],o=r.transform,a=t.data.field(r.field);i.set(r.field,Zu(o,a,n[s]))}return i}function Ed(e,t,n){const i=new Map;for(const s of e){const e=s.transform,r=n.data.field(s.field);i.set(s.field,Xu(e,r,t))}return i}class Id extends dd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Td extends dd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
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
 */class Cd{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const i=this.mutations[t];i.key.isEqual(e.key)&&pd(i,e,n[t])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=gd(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=gd(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=ju();return this.mutations.forEach((i=>{const s=e.get(i.key),r=s.overlayedDocument;let o=this.applyToLocalView(r,s.mutatedFields);o=t.has(i.key)?null:o;const a=fd(r,o);null!==a&&n.set(i.key,a),r.isValidDocument()||r.convertToNoDocument(Rl.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ku())}isEqual(e){return this.batchId===e.batchId&&Al(this.mutations,e.mutations,((e,t)=>_d(e,t)))&&Al(this.baseMutations,e.baseMutations,((e,t)=>_d(e,t)))}}class Sd{constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}static from(e,t,n){dl(e.mutations.length===n.length);let i=zu;const s=e.mutations;for(let e=0;e<s.length;e++)i=i.insert(s[e].key,n[e].version);return new Sd(e,t,n,i)}}
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
 */class kd{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
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
class Ad{constructor(e,t){this.count=e,this.unchangedNames=t}}
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
 */var Nd,Rd;function Pd(e){switch(e){default:return ul();case pl.CANCELLED:case pl.UNKNOWN:case pl.DEADLINE_EXCEEDED:case pl.RESOURCE_EXHAUSTED:case pl.INTERNAL:case pl.UNAVAILABLE:case pl.UNAUTHENTICATED:return!1;case pl.INVALID_ARGUMENT:case pl.NOT_FOUND:case pl.ALREADY_EXISTS:case pl.PERMISSION_DENIED:case pl.FAILED_PRECONDITION:case pl.ABORTED:case pl.OUT_OF_RANGE:case pl.UNIMPLEMENTED:case pl.DATA_LOSS:return!0}}function Dd(e){if(void 0===e)return cl("GRPC error has no .code"),pl.UNKNOWN;switch(e){case Nd.OK:return pl.OK;case Nd.CANCELLED:return pl.CANCELLED;case Nd.UNKNOWN:return pl.UNKNOWN;case Nd.DEADLINE_EXCEEDED:return pl.DEADLINE_EXCEEDED;case Nd.RESOURCE_EXHAUSTED:return pl.RESOURCE_EXHAUSTED;case Nd.INTERNAL:return pl.INTERNAL;case Nd.UNAVAILABLE:return pl.UNAVAILABLE;case Nd.UNAUTHENTICATED:return pl.UNAUTHENTICATED;case Nd.INVALID_ARGUMENT:return pl.INVALID_ARGUMENT;case Nd.NOT_FOUND:return pl.NOT_FOUND;case Nd.ALREADY_EXISTS:return pl.ALREADY_EXISTS;case Nd.PERMISSION_DENIED:return pl.PERMISSION_DENIED;case Nd.FAILED_PRECONDITION:return pl.FAILED_PRECONDITION;case Nd.ABORTED:return pl.ABORTED;case Nd.OUT_OF_RANGE:return pl.OUT_OF_RANGE;case Nd.UNIMPLEMENTED:return pl.UNIMPLEMENTED;case Nd.DATA_LOSS:return pl.DATA_LOSS;default:return ul()}}(Rd=Nd||(Nd={}))[Rd.OK=0]="OK",Rd[Rd.CANCELLED=1]="CANCELLED",Rd[Rd.UNKNOWN=2]="UNKNOWN",Rd[Rd.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Rd[Rd.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Rd[Rd.NOT_FOUND=5]="NOT_FOUND",Rd[Rd.ALREADY_EXISTS=6]="ALREADY_EXISTS",Rd[Rd.PERMISSION_DENIED=7]="PERMISSION_DENIED",Rd[Rd.UNAUTHENTICATED=16]="UNAUTHENTICATED",Rd[Rd.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Rd[Rd.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Rd[Rd.ABORTED=10]="ABORTED",Rd[Rd.OUT_OF_RANGE=11]="OUT_OF_RANGE",Rd[Rd.UNIMPLEMENTED=12]="UNIMPLEMENTED",Rd[Rd.INTERNAL=13]="INTERNAL",Rd[Rd.UNAVAILABLE=14]="UNAVAILABLE",Rd[Rd.DATA_LOSS=15]="DATA_LOSS";
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
let Od=null;
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
 */function xd(){return new TextEncoder}
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
 */const Ld=new tl([4294967295,4294967295],0);function Md(e){const t=xd().encode(e),n=new el;return n.update(t),new Uint8Array(n.digest())}function Fd(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),i=t.getUint32(4,!0),s=t.getUint32(8,!0),r=t.getUint32(12,!0);return[new tl([n,i],0),new tl([s,r],0)]}class Ud{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Vd(`Invalid padding: ${t}`);if(n<0)throw new Vd(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new Vd(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new Vd(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ee=tl.fromNumber(this.Te)}de(e,t,n){let i=e.add(t.multiply(tl.fromNumber(n)));return 1===i.compare(Ld)&&(i=new tl([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Te)return!1;const t=Md(e),[n,i]=Fd(t);for(let e=0;e<this.hashCount;e++){const t=this.de(n,i,e);if(!this.Ae(t))return!1}return!0}static create(e,t,n){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),r=new Ud(s,i,t);return n.forEach((e=>r.insert(e))),r}insert(e){if(0===this.Te)return;const t=Md(e),[n,i]=Fd(t);for(let e=0;e<this.hashCount;e++){const t=this.de(n,i,e);this.Re(t)}}Re(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Vd extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
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
 */class qd{constructor(e,t,n,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const i=new Map;return i.set(e,jd.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new qd(Rl.min(),i,new hh(kl),Mu(),Ku())}}class jd{constructor(e,t,n,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new jd(n,t,Ku(),Ku(),Ku())}}
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
 */class Bd{constructor(e,t,n,i){this.Ve=e,this.removedTargetIds=t,this.key=n,this.me=i}}class zd{constructor(e,t){this.targetId=e,this.fe=t}}class $d{constructor(e,t,n=_h.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class Kd{constructor(){this.ge=0,this.pe=Gd(),this.ye=_h.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return 0!==this.ge}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=Ku(),t=Ku(),n=Ku();return this.pe.forEach(((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:ul()}})),new jd(this.ye,this.we,e,t,n)}Fe(){this.Se=!1,this.pe=Gd()}Me(e,t){this.Se=!0,this.pe=this.pe.insert(e,t)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,dl(this.ge>=0)}Le(){this.Se=!0,this.we=!0}}class Hd{constructor(e){this.Be=e,this.ke=new Map,this.qe=Mu(),this.Qe=Wd(),this.Ke=new hh(kl)}$e(e){for(const t of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(t,e.me):this.We(t,e.key,e.me);for(const t of e.removedTargetIds)this.We(t,e.key,e.me)}Ge(e){this.forEachTarget(e,(t=>{const n=this.ze(t);switch(e.state){case 0:this.je(t)&&n.Ce(e.resumeToken);break;case 1:n.Ne(),n.be||n.Fe(),n.Ce(e.resumeToken);break;case 2:n.Ne(),n.be||this.removeTarget(t);break;case 3:this.je(t)&&(n.Le(),n.Ce(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),n.Ce(e.resumeToken));break;default:ul()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ke.forEach(((e,n)=>{this.je(n)&&t(n)}))}Je(e){const t=e.targetId,n=e.fe.count,i=this.Ye(t);if(i){const s=i.target;if(_u(s))if(0===n){const e=new Ll(s.path);this.We(t,e,$h.newNoDocument(e,Rl.min()))}else dl(1===n);else{const i=this.Ze(t);if(i!==n){const n=this.Xe(e),s=n?this.et(n,e,i):1;if(0!==s){this.He(t);const e=2===s?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,e)}null==Od||Od.tt(function(e,t,n,i,s){var r,o,a,c,l,h;const u={localCacheCount:e,existenceFilterCount:t.count,databaseId:n.database,projectId:n.projectId},d=t.unchangedNames;return d&&(u.bloomFilter={applied:0===s,hashCount:null!==(r=null==d?void 0:d.hashCount)&&void 0!==r?r:0,bitmapLength:null!==(c=null===(a=null===(o=null==d?void 0:d.bits)||void 0===o?void 0:o.bitmap)||void 0===a?void 0:a.length)&&void 0!==c?c:0,padding:null!==(h=null===(l=null==d?void 0:d.bits)||void 0===l?void 0:l.padding)&&void 0!==h?h:0,mightContain:e=>{var t;return null!==(t=null==i?void 0:i.mightContain(e))&&void 0!==t&&t}}),u}
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
 */(i,e.fe,this.Be.nt(),n,s))}}}}Xe(e){const t=e.fe.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:s=0}=t;let r,o;try{r=bh(n).toUint8Array()}catch(e){if(e instanceof mh)return ll("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{o=new Ud(r,i,s)}catch(e){return ll(e instanceof Vd?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===o.Te?null:o}et(e,t,n){return t.fe.count===n-this.rt(e,t.targetId)?0:2}rt(e,t){const n=this.Be.getRemoteKeysForTarget(t);let i=0;return n.forEach((n=>{const s=this.Be.nt(),r=`projects/${s.projectId}/databases/${s.database}/documents/${n.path.canonicalString()}`;e.mightContain(r)||(this.We(t,n,null),i++)})),i}it(e){const t=new Map;this.ke.forEach(((n,i)=>{const s=this.Ye(i);if(s){if(n.current&&_u(s.target)){const t=new Ll(s.target.path);null!==this.qe.get(t)||this.st(i,t)||this.We(i,t,$h.newNoDocument(t,e))}n.De&&(t.set(i,n.ve()),n.Fe())}}));let n=Ku();this.Qe.forEach(((e,t)=>{let i=!0;t.forEachWhile((e=>{const t=this.Ye(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(i=!1,!1)})),i&&(n=n.add(e))})),this.qe.forEach(((t,n)=>n.setReadTime(e)));const i=new qd(e,t,this.Ke,this.qe,n);return this.qe=Mu(),this.Qe=Wd(),this.Ke=new hh(kl),i}Ue(e,t){if(!this.je(e))return;const n=this.st(e,t.key)?2:0;this.ze(e).Me(t.key,n),this.qe=this.qe.insert(t.key,t),this.Qe=this.Qe.insert(t.key,this.ot(t.key).add(e))}We(e,t,n){if(!this.je(e))return;const i=this.ze(e);this.st(e,t)?i.Me(t,1):i.xe(t),this.Qe=this.Qe.insert(t,this.ot(t).delete(e)),n&&(this.qe=this.qe.insert(t,n))}removeTarget(e){this.ke.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let t=this.ke.get(e);return t||(t=new Kd,this.ke.set(e,t)),t}ot(e){let t=this.Qe.get(e);return t||(t=new fh(kl),this.Qe=this.Qe.insert(e,t)),t}je(e){const t=null!==this.Ye(e);return t||al("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.ke.get(e);return t&&t.be?null:this.Be._t(e)}He(e){this.ke.set(e,new Kd),this.Be.getRemoteKeysForTarget(e).forEach((t=>{this.We(e,t,null)}))}st(e,t){return this.Be.getRemoteKeysForTarget(e).has(t)}}function Wd(){return new hh(Ll.comparator)}function Gd(){return new hh(Ll.comparator)}const Qd={asc:"ASCENDING",desc:"DESCENDING"},Yd={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Jd={and:"AND",or:"OR"};class Xd{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Zd(e,t){return e.useProto3Json||th(t)?t:{value:t}}function ef(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function tf(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function nf(e,t){return ef(e,t.toTimestamp())}function sf(e){return dl(!!e),Rl.fromTimestamp(function(e){const t=vh(e);return new Nl(t.seconds,t.nanos)}(e))}function rf(e,t){return of(e,t).canonicalString()}function of(e,t){const n=function(e){return new Dl(["projects",e.projectId,"databases",e.database])}(e).child("documents");return void 0===t?n:n.child(t)}function af(e){const t=Dl.fromString(e);return dl(kf(t)),t}function cf(e,t){return rf(e.databaseId,t.path)}function lf(e,t){const n=af(t);if(n.get(1)!==e.databaseId.projectId)throw new gl(pl.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new gl(pl.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Ll(ff(n))}function hf(e,t){return rf(e.databaseId,t)}function uf(e){const t=af(e);return 4===t.length?Dl.emptyPath():ff(t)}function df(e){return new Dl(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function ff(e){return dl(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function pf(e,t,n){return{name:cf(e,t),fields:n.value.mapValue.fields}}function gf(e,t){let n;if(t instanceof yd)n={update:pf(e,t.key,t.value)};else if(t instanceof Id)n={delete:cf(e,t.key)};else if(t instanceof vd)n={update:pf(e,t.key,t.data),updateMask:Sf(t.fieldMask)};else{if(!(t instanceof Td))return ul();n={verify:cf(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof td)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof nd)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof sd)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof od)return{fieldPath:t.field.canonicalString(),increment:n.Ie};throw ul()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:nf(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:ul()}(e,t.precondition)),n}function mf(e,t){return{documents:[hf(e,t.path)]}}function _f(e,t){const n={structuredQuery:{}},i=t.path;let s;null!==t.collectionGroup?(s=i,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=i.popLast(),n.structuredQuery.from=[{collectionId:i.lastSegment()}]),n.parent=hf(e,s);const r=function(e){if(0!==e.length)return Cf(Xh.create(e,"and"))}(t.filters);r&&(n.structuredQuery.where=r);const o=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:If(e.field),direction:wf(e.dir)}}(e)))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Zd(e,t.limit);return null!==a&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt=function(e){return{before:e.inclusive,values:e.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),{ut:n,parent:s}}function yf(e){let t=uf(e.parent);const n=e.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){dl(1===i);const e=n.from[0];e.allDescendants?s=e.collectionId:t=t.child(e.collectionId)}let r=[];n.where&&(r=function(e){const t=vf(e);return t instanceof Xh&&eu(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=function(e){return e.map((e=>function(e){return new Gh(Tf(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e)))}(n.orderBy));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,th(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new Kh(n,t)}(n.startAt));let l=null;return n.endAt&&(l=function(e){const t=!e.before,n=e.values||[];return new Kh(n,t)}(n.endAt)),vu(t,s,o,r,a,"F",c,l)}function vf(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Tf(e.unaryFilter.field);return Jh.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Tf(e.unaryFilter.field);return Jh.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Tf(e.unaryFilter.field);return Jh.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Tf(e.unaryFilter.field);return Jh.create(s,"!=",{nullValue:"NULL_VALUE"});default:return ul()}}(e):void 0!==e.fieldFilter?function(e){return Jh.create(Tf(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ul()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return Xh.create(e.compositeFilter.filters.map((e=>vf(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return ul()}}(e.compositeFilter.op))}(e):ul()}function wf(e){return Qd[e]}function bf(e){return Yd[e]}function Ef(e){return Jd[e]}function If(e){return{fieldPath:e.canonicalString()}}function Tf(e){return xl.fromServerFormat(e.fieldPath)}function Cf(e){return e instanceof Jh?function(e){if("=="===e.op){if(Uh(e.value))return{unaryFilter:{field:If(e.field),op:"IS_NAN"}};if(Fh(e.value))return{unaryFilter:{field:If(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Uh(e.value))return{unaryFilter:{field:If(e.field),op:"IS_NOT_NAN"}};if(Fh(e.value))return{unaryFilter:{field:If(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:If(e.field),op:bf(e.op),value:e.value}}}(e):e instanceof Xh?function(e){const t=e.getFilters().map((e=>Cf(e)));return 1===t.length?t[0]:{compositeFilter:{op:Ef(e.op),filters:t}}}(e):ul()}function Sf(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function kf(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
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
 */class Af{constructor(e,t,n,i,s=Rl.min(),r=Rl.min(),o=_h.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new Af(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Af(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Af(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Af(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
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
 */class Nf{constructor(e){this.ct=e}}function Rf(e){const t=yf({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Su(t,t.limit,"L"):t}
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
class Pf{constructor(){}Pt(e,t){this.It(e,t),t.Tt()}It(e,t){if("nullValue"in e)this.Et(t,5);else if("booleanValue"in e)this.Et(t,10),t.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(t,15),t.dt(wh(e.integerValue));else if("doubleValue"in e){const n=wh(e.doubleValue);isNaN(n)?this.Et(t,13):(this.Et(t,15),nh(n)?t.dt(0):t.dt(n))}else if("timestampValue"in e){const n=e.timestampValue;this.Et(t,20),"string"==typeof n?t.At(n):(t.At(`${n.seconds||""}`),t.dt(n.nanos||0))}else if("stringValue"in e)this.Rt(e.stringValue,t),this.Vt(t);else if("bytesValue"in e)this.Et(t,30),t.ft(bh(e.bytesValue)),this.Vt(t);else if("referenceValue"in e)this.gt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.Et(t,45),t.dt(n.latitude||0),t.dt(n.longitude||0)}else"mapValue"in e?jh(e)?this.Et(t,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,t),this.Vt(t)):"arrayValue"in e?(this.wt(e.arrayValue,t),this.Vt(t)):ul()}Rt(e,t){this.Et(t,25),this.St(e,t)}St(e,t){t.At(e)}yt(e,t){const n=e.fields||{};this.Et(t,55);for(const e of Object.keys(n))this.Rt(e,t),this.It(n[e],t)}wt(e,t){const n=e.values||[];this.Et(t,50);for(const e of n)this.It(e,t)}gt(e,t){this.Et(t,37),Ll.fromName(e).path.forEach((e=>{this.Et(t,60),this.St(e,t)}))}Et(e,t){e.dt(t)}Vt(e){e.dt(2)}}Pf.bt=new Pf;
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
class Df{constructor(){this._n=new Of}addToCollectionParentIndex(e,t){return this._n.add(t),$l.resolve()}getCollectionParents(e,t){return $l.resolve(this._n.getEntries(t))}addFieldIndex(e,t){return $l.resolve()}deleteFieldIndex(e,t){return $l.resolve()}deleteAllFieldIndexes(e){return $l.resolve()}createTargetIndexes(e,t){return $l.resolve()}getDocumentsMatchingTarget(e,t){return $l.resolve(null)}getIndexType(e,t){return $l.resolve(0)}getFieldIndexes(e,t){return $l.resolve([])}getNextCollectionGroupToUpdate(e){return $l.resolve(null)}getMinOffset(e,t){return $l.resolve(Vl.min())}getMinOffsetFromCollectionGroup(e,t){return $l.resolve(Vl.min())}updateCollectionGroup(e,t,n){return $l.resolve()}updateIndexEntries(e,t){return $l.resolve()}}class Of{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new fh(Dl.comparator),s=!i.has(n);return this.index[t]=i.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new fh(Dl.comparator)).toArray()}}
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
 */new Uint8Array(0);class xf{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new xf(e,xf.DEFAULT_COLLECTION_PERCENTILE,xf.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
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
 */xf.DEFAULT_COLLECTION_PERCENTILE=10,xf.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,xf.DEFAULT=new xf(41943040,xf.DEFAULT_COLLECTION_PERCENTILE,xf.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),xf.DISABLED=new xf(-1,0,0);
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
class Lf{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Lf(0)}static Ln(){return new Lf(-1)}}
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
class Mf{constructor(){this.changes=new xu((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,$h.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?$l.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
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
class Ff{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
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
 */class Uf{constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(n=i,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&gd(n.mutation,e,gh.empty(),Nl.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,Ku()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=Ku()){const i=qu();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,n).next((e=>{let t=Uu();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=qu();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,Ku())))}populateOverlays(e,t,n){const i=[];return n.forEach((e=>{t.has(e)||i.push(e)})),this.documentOverlayCache.getOverlays(e,i).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,i){let s=Mu();const r=Bu(),o=Bu();return t.forEach(((e,t)=>{const o=n.get(t.key);i.has(t.key)&&(void 0===o||o.mutation instanceof vd)?s=s.insert(t.key,t):void 0!==o?(r.set(t.key,o.mutation.getFieldMask()),gd(o.mutation,t,o.mutation.getFieldMask(),Nl.now())):r.set(t.key,gh.empty())})),this.recalculateAndSaveOverlays(e,s).next((e=>(e.forEach(((e,t)=>r.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new Ff(t,null!==(n=r.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=Bu();let i=new hh(((e,t)=>e-t)),s=Ku();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const s of e)s.keys().forEach((e=>{const r=t.get(e);if(null===r)return;let o=n.get(e)||gh.empty();o=s.applyToLocalView(r,o),n.set(e,o);const a=(i.get(s.batchId)||Ku()).add(e);i=i.insert(s.batchId,a)}))})).next((()=>{const r=[],o=i.getReverseIterator();for(;o.hasNext();){const i=o.getNext(),a=i.key,c=i.value,l=ju();c.forEach((e=>{if(!s.has(e)){const i=fd(t.get(e),n.get(e));null!==i&&l.set(e,i),s=s.add(e)}})),r.push(this.documentOverlayCache.saveOverlays(e,a,l))}return $l.waitFor(r)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n,i){return function(e){return Ll.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Eu(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,i):this.getDocumentsMatchingCollectionQuery(e,t,n,i)}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next((s=>{const r=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-s.size):$l.resolve(qu());let o=-1,a=s;return r.next((t=>$l.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(t)?$l.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,s))).next((()=>this.computeViews(e,a,t,Ku()))).next((e=>({batchId:o,changes:Vu(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Ll(t)).next((e=>{let t=Uu();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,i){const s=t.collectionGroup;let r=Uu();return this.indexManager.getCollectionParents(e,s).next((o=>$l.forEach(o,(o=>{const a=function(e,t){return new yu(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,o.child(s));return this.getDocumentsMatchingCollectionQuery(e,a,n,i).next((e=>{e.forEach(((e,t)=>{r=r.insert(e,t)}))}))})).next((()=>r))))}getDocumentsMatchingCollectionQuery(e,t,n,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((r=>(s=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,s,i)))).next((e=>{s.forEach(((t,n)=>{const i=n.getKey();null===e.get(i)&&(e=e.insert(i,$h.newInvalidDocument(i)))}));let n=Uu();return e.forEach(((e,i)=>{const r=s.get(e);void 0!==r&&gd(r.mutation,i,gh.empty(),Nl.now()),Ru(t,i)&&(n=n.insert(e,i))})),n}))}}
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
 */class Vf{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,t){return $l.resolve(this.cr.get(t))}saveBundleMetadata(e,t){return this.cr.set(t.id,function(e){return{id:e.id,version:e.version,createTime:sf(e.createTime)}}(t)),$l.resolve()}getNamedQuery(e,t){return $l.resolve(this.lr.get(t))}saveNamedQuery(e,t){return this.lr.set(t.name,function(e){return{name:e.name,query:Rf(e.bundledQuery),readTime:sf(e.readTime)}}(t)),$l.resolve()}}
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
 */class qf{constructor(){this.overlays=new hh(Ll.comparator),this.hr=new Map}getOverlay(e,t){return $l.resolve(this.overlays.get(t))}getOverlays(e,t){const n=qu();return $l.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,i)=>{this.ht(e,t,i)})),$l.resolve()}removeOverlaysForBatchId(e,t,n){const i=this.hr.get(n);return void 0!==i&&(i.forEach((e=>this.overlays=this.overlays.remove(e))),this.hr.delete(n)),$l.resolve()}getOverlaysForCollection(e,t,n){const i=qu(),s=t.length+1,r=new Ll(t.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const e=o.getNext().value,r=e.getKey();if(!t.isPrefixOf(r.path))break;r.path.length===s&&e.largestBatchId>n&&i.set(e.getKey(),e)}return $l.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let s=new hh(((e,t)=>e-t));const r=this.overlays.getIterator();for(;r.hasNext();){const e=r.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=s.get(e.largestBatchId);null===t&&(t=qu(),s=s.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=qu(),a=s.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((e,t)=>o.set(e,t))),!(o.size()>=i)););return $l.resolve(o)}ht(e,t,n){const i=this.overlays.get(n.key);if(null!==i){const e=this.hr.get(i.largestBatchId).delete(n.key);this.hr.set(i.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new kd(t,n));let s=this.hr.get(t);void 0===s&&(s=Ku(),this.hr.set(t,s)),this.hr.set(t,s.add(n.key))}}
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
 */class jf{constructor(){this.Pr=new fh(Bf.Ir),this.Tr=new fh(Bf.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,t){const n=new Bf(e,t);this.Pr=this.Pr.add(n),this.Tr=this.Tr.add(n)}dr(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.Ar(new Bf(e,t))}Rr(e,t){e.forEach((e=>this.removeReference(e,t)))}Vr(e){const t=new Ll(new Dl([])),n=new Bf(t,e),i=new Bf(t,e+1),s=[];return this.Tr.forEachInRange([n,i],(e=>{this.Ar(e),s.push(e.key)})),s}mr(){this.Pr.forEach((e=>this.Ar(e)))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const t=new Ll(new Dl([])),n=new Bf(t,e),i=new Bf(t,e+1);let s=Ku();return this.Tr.forEachInRange([n,i],(e=>{s=s.add(e.key)})),s}containsKey(e){const t=new Bf(e,0),n=this.Pr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Bf{constructor(e,t){this.key=e,this.pr=t}static Ir(e,t){return Ll.comparator(e.key,t.key)||kl(e.pr,t.pr)}static Er(e,t){return kl(e.pr,t.pr)||Ll.comparator(e.key,t.key)}}
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
 */class zf{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.yr=1,this.wr=new fh(Bf.Ir)}checkEmpty(e){return $l.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new Cd(s,t,n,i);this.mutationQueue.push(r);for(const t of i)this.wr=this.wr.add(new Bf(t.key,s)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return $l.resolve(r)}lookupMutationBatch(e,t){return $l.resolve(this.Sr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.br(n),s=i<0?0:i;return $l.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return $l.resolve(0===this.mutationQueue.length?-1:this.yr-1)}getAllMutationBatches(e){return $l.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Bf(t,0),i=new Bf(t,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([n,i],(e=>{const t=this.Sr(e.pr);s.push(t)})),$l.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new fh(kl);return t.forEach((e=>{const t=new Bf(e,0),i=new Bf(e,Number.POSITIVE_INFINITY);this.wr.forEachInRange([t,i],(e=>{n=n.add(e.pr)}))})),$l.resolve(this.Dr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let s=n;Ll.isDocumentKey(s)||(s=s.child(""));const r=new Bf(new Ll(s),0);let o=new fh(kl);return this.wr.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===i&&(o=o.add(e.pr)),!0)}),r),$l.resolve(this.Dr(o))}Dr(e){const t=[];return e.forEach((e=>{const n=this.Sr(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){dl(0===this.Cr(t.batchId,"removed")),this.mutationQueue.shift();let n=this.wr;return $l.forEach(t.mutations,(i=>{const s=new Bf(i.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.wr=n}))}Mn(e){}containsKey(e,t){const n=new Bf(t,0),i=this.wr.firstAfterOrEqual(n);return $l.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,$l.resolve()}Cr(e,t){return this.br(e)}br(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Sr(e){const t=this.br(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
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
 */class $f{constructor(e){this.vr=e,this.docs=new hh(Ll.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,i=this.docs.get(n),s=i?i.size:0,r=this.vr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:r}),this.size+=r-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return $l.resolve(n?n.document.mutableCopy():$h.newInvalidDocument(t))}getEntries(e,t){let n=Mu();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():$h.newInvalidDocument(e))})),$l.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let s=Mu();const r=t.path,o=new Ll(r.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!r.isPrefixOf(e.path))break;e.path.length>r.length+1||ql(Ul(o),n)<=0||(i.has(o.key)||Ru(t,o))&&(s=s.insert(o.key,o.mutableCopy()))}return $l.resolve(s)}getAllFromCollectionGroup(e,t,n,i){ul()}Fr(e,t){return $l.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Kf(this)}getSize(e){return $l.resolve(this.size)}}class Kf extends Mf{constructor(e){super(),this.ar=e}applyChanges(e){const t=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?t.push(this.ar.addEntry(e,i)):this.ar.removeEntry(n)})),$l.waitFor(t)}getFromCache(e,t){return this.ar.getEntry(e,t)}getAllFromCache(e,t){return this.ar.getEntries(e,t)}}
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
 */class Hf{constructor(e){this.persistence=e,this.Mr=new xu((e=>gu(e)),mu),this.lastRemoteSnapshotVersion=Rl.min(),this.highestTargetId=0,this.Or=0,this.Nr=new jf,this.targetCount=0,this.Lr=Lf.Nn()}forEachTarget(e,t){return this.Mr.forEach(((e,n)=>t(n))),$l.resolve()}getLastRemoteSnapshotVersion(e){return $l.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $l.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),$l.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Or&&(this.Or=t),$l.resolve()}qn(e){this.Mr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Lr=new Lf(t),this.highestTargetId=t),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,t){return this.qn(t),this.targetCount+=1,$l.resolve()}updateTargetData(e,t){return this.qn(t),$l.resolve()}removeTargetData(e,t){return this.Mr.delete(t.target),this.Nr.Vr(t.targetId),this.targetCount-=1,$l.resolve()}removeTargets(e,t,n){let i=0;const s=[];return this.Mr.forEach(((r,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Mr.delete(r),s.push(this.removeMatchingKeysForTargetId(e,o.targetId)),i++)})),$l.waitFor(s).next((()=>i))}getTargetCount(e){return $l.resolve(this.targetCount)}getTargetData(e,t){const n=this.Mr.get(t)||null;return $l.resolve(n)}addMatchingKeys(e,t,n){return this.Nr.dr(t,n),$l.resolve()}removeMatchingKeys(e,t,n){this.Nr.Rr(t,n);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach((t=>{s.push(i.markPotentiallyOrphaned(e,t))})),$l.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Nr.Vr(t),$l.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Nr.gr(t);return $l.resolve(n)}containsKey(e,t){return $l.resolve(this.Nr.containsKey(t))}}
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
 */class Wf{constructor(e,t){this.Br={},this.overlays={},this.kr=new eh(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new Hf(this),this.indexManager=new Df,this.remoteDocumentCache=function(e){return new $f(e)}((e=>this.referenceDelegate.Kr(e))),this.serializer=new Nf(t),this.$r=new Vf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new qf,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Br[e.toKey()];return n||(n=new zf(t,this.referenceDelegate),this.Br[e.toKey()]=n),n}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,t,n){al("MemoryPersistence","Starting transaction:",e);const i=new Gf(this.kr.next());return this.referenceDelegate.Ur(),n(i).next((e=>this.referenceDelegate.Wr(i).next((()=>e)))).toPromise().then((e=>(i.raiseOnCommittedEvent(),e)))}Gr(e,t){return $l.or(Object.values(this.Br).map((n=>()=>n.containsKey(e,t))))}}class Gf extends Bl{constructor(e){super(),this.currentSequenceNumber=e}}class Qf{constructor(e){this.persistence=e,this.zr=new jf,this.jr=null}static Hr(e){return new Qf(e)}get Jr(){if(this.jr)return this.jr;throw ul()}addReference(e,t,n){return this.zr.addReference(n,t),this.Jr.delete(n.toString()),$l.resolve()}removeReference(e,t,n){return this.zr.removeReference(n,t),this.Jr.add(n.toString()),$l.resolve()}markPotentiallyOrphaned(e,t){return this.Jr.add(t.toString()),$l.resolve()}removeTarget(e,t){this.zr.Vr(t.targetId).forEach((e=>this.Jr.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Jr.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Ur(){this.jr=new Set}Wr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $l.forEach(this.Jr,(n=>{const i=Ll.fromPath(n);return this.Yr(e,i).next((e=>{e||t.removeEntry(i,Rl.min())}))})).next((()=>(this.jr=null,t.apply(e))))}updateLimboDocument(e,t){return this.Yr(e,t).next((e=>{e?this.Jr.delete(t.toString()):this.Jr.add(t.toString())}))}Kr(e){return 0}Yr(e,t){return $l.or([()=>$l.resolve(this.zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gr(e,t)])}}
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
class Yf{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.qi=n,this.Qi=i}static Ki(e,t){let n=Ku(),i=Ku();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:i=i.add(e.doc.key)}return new Yf(e,t.fromCache,n,i)}}
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
 */class Jf{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}
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
 */class Xf{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=(0,i.nr)()?8:Hl.v((0,i.ZQ)())>0?6:4}initialize(e,t){this.zi=e,this.indexManager=t,this.$i=!0}getDocumentsMatchingQuery(e,t,n,i){const s={result:null};return this.ji(e,t).next((e=>{s.result=e})).next((()=>{if(!s.result)return this.Hi(e,t,i,n).next((e=>{s.result=e}))})).next((()=>{if(s.result)return;const n=new Jf;return this.Ji(e,t,n).next((i=>{if(s.result=i,this.Ui)return this.Yi(e,t,n,i.size)}))})).next((()=>s.result))}Yi(e,t,n,i){return n.documentReadCount<this.Wi?(ol()<=s.$b.DEBUG&&al("QueryEngine","SDK will not create cache indexes for query:",Nu(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),$l.resolve()):(ol()<=s.$b.DEBUG&&al("QueryEngine","Query:",Nu(t),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.Gi*i?(ol()<=s.$b.DEBUG&&al("QueryEngine","The SDK decides to create cache indexes for query:",Nu(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Tu(t))):$l.resolve())}ji(e,t){if(bu(t))return $l.resolve(null);let n=Tu(t);return this.indexManager.getIndexType(e,n).next((i=>0===i?null:(null!==t.limit&&1===i&&(t=Su(t,null,"F"),n=Tu(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((i=>{const s=Ku(...i);return this.zi.getDocuments(e,s).next((i=>this.indexManager.getMinOffset(e,n).next((n=>{const r=this.Zi(t,i);return this.Xi(t,r,s,n.readTime)?this.ji(e,Su(t,null,"F")):this.es(e,r,t,n)}))))})))))}Hi(e,t,n,i){return bu(t)||i.isEqual(Rl.min())?$l.resolve(null):this.zi.getDocuments(e,n).next((r=>{const o=this.Zi(t,r);return this.Xi(t,o,n,i)?$l.resolve(null):(ol()<=s.$b.DEBUG&&al("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Nu(t)),this.es(e,o,t,Fl(i,-1)).next((e=>e)))}))}Zi(e,t){let n=new fh(Du(e));return t.forEach(((t,i)=>{Ru(e,i)&&(n=n.add(i))})),n}Xi(e,t,n,i){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const s="F"===e.limitType?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,t,n){return ol()<=s.$b.DEBUG&&al("QueryEngine","Using full collection scan to execute query:",Nu(t)),this.zi.getDocumentsMatchingQuery(e,t,Vl.min(),n)}es(e,t,n,i){return this.zi.getDocumentsMatchingQuery(e,n,i).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
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
 */class Zf{constructor(e,t,n,i){this.persistence=e,this.ts=t,this.serializer=i,this.ns=new hh(kl),this.rs=new xu((e=>gu(e)),mu),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(n)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Uf(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.ns)))}}function ep(e,t,n,i){return new Zf(e,t,n,i)}async function tp(e,t){const n=fl(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let i;return n.mutationQueue.getAllMutationBatches(e).next((s=>(i=s,n._s(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const s=[],r=[];let o=Ku();for(const e of i){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){r.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({us:e,removedBatchIds:s,addedBatchIds:r})))}))}))}function np(e){const t=fl(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Qr.getLastRemoteSnapshotVersion(e)))}function ip(e,t,n){let i=Ku(),s=Ku();return n.forEach((e=>i=i.add(e))),t.getEntries(e,i).next((e=>{let i=Mu();return n.forEach(((n,r)=>{const o=e.get(n);r.isFoundDocument()!==o.isFoundDocument()&&(s=s.add(n)),r.isNoDocument()&&r.version.isEqual(Rl.min())?(t.removeEntry(n,r.readTime),i=i.insert(n,r)):!o.isValidDocument()||r.version.compareTo(o.version)>0||0===r.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(r),i=i.insert(n,r)):al("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",r.version)})),{cs:i,ls:s}}))}function sp(e,t){const n=fl(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function rp(e,t){const n=fl(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let i;return n.Qr.getTargetData(e,t).next((s=>s?(i=s,$l.resolve(i)):n.Qr.allocateTargetId(e).next((s=>(i=new Af(t,s,"TargetPurposeListen",e.currentSequenceNumber),n.Qr.addTargetData(e,i).next((()=>i)))))))})).then((e=>{const i=n.ns.get(e.targetId);return(null===i||e.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(e.targetId,e),n.rs.set(t,e.targetId)),e}))}async function op(e,t,n){const i=fl(e),s=i.ns.get(t),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,(e=>i.persistence.referenceDelegate.removeTarget(e,s)))}catch(e){if(!Ql(e))throw e;al("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}i.ns=i.ns.remove(t),i.rs.delete(s.target)}function ap(e,t,n){const i=fl(e);let s=Rl.min(),r=Ku();return i.persistence.runTransaction("Execute query","readwrite",(e=>function(e,t,n){const i=fl(e),s=i.rs.get(n);return void 0!==s?$l.resolve(i.ns.get(s)):i.Qr.getTargetData(t,n)}(i,e,Tu(t)).next((t=>{if(t)return s=t.lastLimboFreeSnapshotVersion,i.Qr.getMatchingKeysForTargetId(e,t.targetId).next((e=>{r=e}))})).next((()=>i.ts.getDocumentsMatchingQuery(e,t,n?s:Rl.min(),n?r:Ku()))).next((e=>(cp(i,Pu(t),e),{documents:e,hs:r})))))}function cp(e,t,n){let i=e.ss.get(t)||Rl.min();n.forEach(((e,t)=>{t.readTime.compareTo(i)>0&&(i=t.readTime)})),e.ss.set(t,i)}class lp{constructor(){this.activeTargetIds=Wu()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class hp{constructor(){this.no=new lp,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,t,n){this.ro[e]=t}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new lp,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
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
 */class up{io(e){}shutdown(){}}
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
 */class dp{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){al("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){al("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */let fp=null;function pp(){return null===fp?fp=268435456+Math.round(2147483648*Math.random()):fp++,"0x"+fp.toString(16)
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
 */}const gp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
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
 */class mp{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}
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
 */const _p="WebChannelConnection";class yp extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.fo=t+"://"+e.host,this.po=`projects/${n}/databases/${i}`,this.yo="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${i}`}get wo(){return!1}So(e,t,n,i,s){const r=pp(),o=this.bo(e,t.toUriEncodedString());al("RestConnection",`Sending RPC '${e}' ${r}:`,o,n);const a={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(a,i,s),this.Co(e,o,a,n).then((t=>(al("RestConnection",`Received RPC '${e}' ${r}: `,t),t)),(t=>{throw ll("RestConnection",`RPC '${e}' ${r} failed with error: `,t,"url: ",o,"request:",n),t}))}vo(e,t,n,i,s,r){return this.So(e,t,n,i,s)}Do(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+sl,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}bo(e,t){const n=gp[e];return`${this.fo}/v1/${t}:${n}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,t,n,i){const s=pp();return new Promise(((r,o)=>{const a=new Zc;a.setWithCredentials(!0),a.listenOnce(Qc.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case Gc.NO_ERROR:const t=a.getResponseJson();al(_p,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(t)),r(t);break;case Gc.TIMEOUT:al(_p,`RPC '${e}' ${s} timed out`),o(new gl(pl.DEADLINE_EXCEEDED,"Request time out"));break;case Gc.HTTP_ERROR:const n=a.getStatus();if(al(_p,`RPC '${e}' ${s} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(pl).indexOf(t)>=0?t:pl.UNKNOWN}(t.status);o(new gl(e,t.message))}else o(new gl(pl.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new gl(pl.UNAVAILABLE,"Connection failed."));break;default:ul()}}finally{al(_p,`RPC '${e}' ${s} completed.`)}}));const c=JSON.stringify(i);al(_p,`RPC '${e}' ${s} sending request:`,i),a.send(t,"POST",c,n,15)}))}Fo(e,t,n){const i=pp(),s=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=Hc(),o=Wc(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Do(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const l=s.join("");al(_p,`Creating RPC '${e}' stream ${i}: ${l}`,a);const h=r.createWebChannel(l,a);let u=!1,d=!1;const f=new mp({lo:t=>{d?al(_p,`Not sending because RPC '${e}' stream ${i} is closed:`,t):(u||(al(_p,`Opening RPC '${e}' stream ${i} transport.`),h.open(),u=!0),al(_p,`RPC '${e}' stream ${i} sending:`,t),h.send(t))},ho:()=>h.close()}),p=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return p(h,Xc.EventType.OPEN,(()=>{d||al(_p,`RPC '${e}' stream ${i} transport opened.`)})),p(h,Xc.EventType.CLOSE,(()=>{d||(d=!0,al(_p,`RPC '${e}' stream ${i} transport closed`),f.Vo())})),p(h,Xc.EventType.ERROR,(t=>{d||(d=!0,ll(_p,`RPC '${e}' stream ${i} transport errored:`,t),f.Vo(new gl(pl.UNAVAILABLE,"The operation could not be completed")))})),p(h,Xc.EventType.MESSAGE,(t=>{var n;if(!d){const s=t.data[0];dl(!!s);const r=s,o=r.error||(null===(n=r[0])||void 0===n?void 0:n.error);if(o){al(_p,`RPC '${e}' stream ${i} received error:`,o);const t=o.status;let n=function(e){const t=Nd[e];if(void 0!==t)return Dd(t)}(t),s=o.message;void 0===n&&(n=pl.INTERNAL,s="Unknown error status: "+t+" with message "+o.message),d=!0,f.Vo(new gl(n,s)),h.close()}else al(_p,`RPC '${e}' stream ${i} received:`,s),f.mo(s)}})),p(o,Yc.STAT_EVENT,(t=>{t.stat===Jc.PROXY?al(_p,`RPC '${e}' stream ${i} detected buffering proxy`):t.stat===Jc.NOPROXY&&al(_p,`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{f.Ro()}),0),f}}
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
 */function vp(){return"undefined"!=typeof document?document:null}
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
 */function wp(e){return new Xd(e,!0)}
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
 */class bp{constructor(e,t,n=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=t,this.Mo=n,this.xo=i,this.Oo=s,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const t=Math.floor(this.No+this.Qo()),n=Math.max(0,Date.now()-this.Bo),i=Math.max(0,t-n);i>0&&al("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,i,(()=>(this.Bo=Date.now(),e()))),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){null!==this.Lo&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){null!==this.Lo&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}
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
 */class Ep{constructor(e,t,n,i,s,r,o,a){this.oi=e,this.$o=n,this.Uo=i,this.connection=s,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new bp(e,t)}Ho(){return 1===this.state||5===this.state||this.Jo()}Jo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&null===this.Go&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,(()=>this.e_())))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,t){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,4!==e?this.jo.reset():t&&t.code===pl.RESOURCE_EXHAUSTED?(cl(t.toString()),cl("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):t&&t.code===pl.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(t)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),t=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Wo===t&&this.o_(e,n)}),(t=>{e((()=>{const e=new gl(pl.UNKNOWN,"Fetching auth token failed: "+t.message);return this.__(e)}))}))}o_(e,t){const n=this.s_(this.Wo);this.stream=this.a_(e,t),this.stream.Po((()=>{n((()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,(()=>(this.Jo()&&(this.state=3),Promise.resolve()))),this.listener.Po())))})),this.stream.To((e=>{n((()=>this.__(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Yo(){this.state=5,this.jo.qo((async()=>{this.state=0,this.start()}))}__(e){return al("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return t=>{this.oi.enqueueAndForget((()=>this.Wo===e?t():(al("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Ip extends Ep{constructor(e,t,n,i,s,r){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,r),this.serializer=s}a_(e,t){return this.connection.Fo("Listen",e,t)}onMessage(e){this.jo.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const i=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:ul()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],r=function(e,t){return e.useProto3Json?(dl(void 0===t||"string"==typeof t),_h.fromBase64String(t||"")):(dl(void 0===t||t instanceof Uint8Array),_h.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?pl.UNKNOWN:Dd(e.code);return new gl(t,e.message||"")}(o);n=new $d(i,s,r,a||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const s=lf(e,i.document.name),r=sf(i.document.updateTime),o=i.document.createTime?sf(i.document.createTime):Rl.min(),a=new Bh({mapValue:{fields:i.document.fields}}),c=$h.newFoundDocument(s,r,o,a),l=i.targetIds||[],h=i.removedTargetIds||[];n=new Bd(l,h,c.key,c)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const s=lf(e,i.document),r=i.readTime?sf(i.readTime):Rl.min(),o=$h.newNoDocument(s,r),a=i.removedTargetIds||[];n=new Bd([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const s=lf(e,i.document),r=i.removedTargetIds||[];n=new Bd([],r,s,null)}else{if(!("filter"in t))return ul();{t.filter;const e=t.filter;e.targetId;const{count:i=0,unchangedNames:s}=e,r=new Ad(i,s),o=e.targetId;n=new zd(o,r)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return Rl.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?Rl.min():t.readTime?sf(t.readTime):Rl.min()}(e);return this.listener.u_(t,n)}c_(e){const t={};t.database=df(this.serializer),t.addTarget=function(e,t){let n;const i=t.target;if(n=_u(i)?{documents:mf(e,i)}:{query:_f(e,i).ut},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=tf(e,t.resumeToken);const i=Zd(e,t.expectedCount);null!==i&&(n.expectedCount=i)}else if(t.snapshotVersion.compareTo(Rl.min())>0){n.readTime=ef(e,t.snapshotVersion.toTimestamp());const i=Zd(e,t.expectedCount);null!==i&&(n.expectedCount=i)}return n}(this.serializer,e);const n=function(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ul()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.t_(t)}l_(e){const t={};t.database=df(this.serializer),t.removeTarget=e,this.t_(t)}}class Tp extends Ep{constructor(e,t,n,i,s,r){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,r),this.serializer=s,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,t){return this.connection.Fo("Write",e,t)}onMessage(e){if(dl(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const t=function(e,t){return e&&e.length>0?(dl(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?sf(e.updateTime):sf(t);return n.isEqual(Rl.min())&&(n=sf(t)),new ld(n,e.transformResults||[])}(e,t)))):[]}(e.writeResults,e.commitTime),n=sf(e.commitTime);return this.listener.T_(n,t)}return dl(!e.writeResults||0===e.writeResults.length),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=df(this.serializer),this.t_(e)}I_(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>gf(this.serializer,e)))};this.t_(t)}}
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
 */class Cp extends class{}{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new gl(pl.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,n,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,r])=>this.connection.So(e,of(t,n),i,s,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===pl.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new gl(pl.UNKNOWN,e.toString())}))}vo(e,t,n,i,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,o])=>this.connection.vo(e,of(t,n),i,r,o,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===pl.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new gl(pl.UNKNOWN,e.toString())}))}terminate(){this.A_=!0,this.connection.terminate()}}class Sp{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){0===this.m_&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve()))))}S_(e){"Online"===this.state?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,"Online"===e&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(cl(t),this.g_=!1):al("OnlineStateTracker",t)}b_(){null!==this.f_&&(this.f_.cancel(),this.f_=null)}}
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
 */class kp{constructor(e,t,n,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=s,this.M_.io((e=>{n.enqueueAndForget((async()=>{Mp(this)&&(al("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=fl(e);t.v_.add(4),await Np(t),t.x_.set("Unknown"),t.v_.delete(4),await Ap(t)}(this))}))})),this.x_=new Sp(n,i)}}async function Ap(e){if(Mp(e))for(const t of e.F_)await t(!0)}async function Np(e){for(const t of e.F_)await t(!1)}function Rp(e,t){const n=fl(e);n.C_.has(t.targetId)||(n.C_.set(t.targetId,t),Lp(n)?xp(n):eg(n).Jo()&&Dp(n,t))}function Pp(e,t){const n=fl(e),i=eg(n);n.C_.delete(t),i.Jo()&&Op(n,t),0===n.C_.size&&(i.Jo()?i.Xo():Mp(n)&&n.x_.set("Unknown"))}function Dp(e,t){if(e.O_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Rl.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}eg(e).c_(t)}function Op(e,t){e.O_.Oe(t),eg(e).l_(t)}function xp(e){e.O_=new Hd({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.C_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),eg(e).start(),e.x_.p_()}function Lp(e){return Mp(e)&&!eg(e).Ho()&&e.C_.size>0}function Mp(e){return 0===fl(e).v_.size}function Fp(e){e.O_=void 0}async function Up(e){e.C_.forEach(((t,n)=>{Dp(e,t)}))}async function Vp(e,t){Fp(e),Lp(e)?(e.x_.S_(t),xp(e)):e.x_.set("Unknown")}async function qp(e,t,n){if(e.x_.set("Online"),t instanceof $d&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const i of t.targetIds)e.C_.has(i)&&(await e.remoteSyncer.rejectListen(i,n),e.C_.delete(i),e.O_.removeTarget(i))}(e,t)}catch(n){al("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await jp(e,n)}else if(t instanceof Bd?e.O_.$e(t):t instanceof zd?e.O_.Je(t):e.O_.Ge(t),!n.isEqual(Rl.min()))try{const t=await np(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.O_.it(t);return n.targetChanges.forEach(((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const s=e.C_.get(i);s&&e.C_.set(i,s.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const i=e.C_.get(t);if(!i)return;e.C_.set(t,i.withResumeToken(_h.EMPTY_BYTE_STRING,i.snapshotVersion)),Op(e,t);const s=new Af(i.target,t,n,i.sequenceNumber);Dp(e,s)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){al("RemoteStore","Failed to raise snapshot:",t),await jp(e,t)}}async function jp(e,t,n){if(!Ql(t))throw t;e.v_.add(1),await Np(e),e.x_.set("Offline"),n||(n=()=>np(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{al("RemoteStore","Retrying IndexedDB access"),await n(),e.v_.delete(1),await Ap(e)}))}function Bp(e,t){return t().catch((n=>jp(e,n,t)))}async function zp(e){const t=fl(e),n=tg(t);let i=t.D_.length>0?t.D_[t.D_.length-1].batchId:-1;for(;$p(t);)try{const e=await sp(t.localStore,i);if(null===e){0===t.D_.length&&n.Xo();break}i=e.batchId,Kp(t,e)}catch(e){await jp(t,e)}Hp(t)&&Wp(t)}function $p(e){return Mp(e)&&e.D_.length<10}function Kp(e,t){e.D_.push(t);const n=tg(e);n.Jo()&&n.P_&&n.I_(t.mutations)}function Hp(e){return Mp(e)&&!tg(e).Ho()&&e.D_.length>0}function Wp(e){tg(e).start()}async function Gp(e){tg(e).d_()}async function Qp(e){const t=tg(e);for(const n of e.D_)t.I_(n.mutations)}async function Yp(e,t,n){const i=e.D_.shift(),s=Sd.from(i,t,n);await Bp(e,(()=>e.remoteSyncer.applySuccessfulWrite(s))),await zp(e)}async function Jp(e,t){t&&tg(e).P_&&await async function(e,t){if(function(e){return Pd(e)&&e!==pl.ABORTED}(t.code)){const n=e.D_.shift();tg(e).Zo(),await Bp(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await zp(e)}}(e,t),Hp(e)&&Wp(e)}async function Xp(e,t){const n=fl(e);n.asyncQueue.verifyOperationInProgress(),al("RemoteStore","RemoteStore received new credentials");const i=Mp(n);n.v_.add(3),await Np(n),i&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.v_.delete(3),await Ap(n)}async function Zp(e,t){const n=fl(e);t?(n.v_.delete(2),await Ap(n)):t||(n.v_.add(2),await Np(n),n.x_.set("Unknown"))}function eg(e){return e.N_||(e.N_=function(e,t,n){const i=fl(e);return i.R_(),new Ip(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)
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
 */}(e.datastore,e.asyncQueue,{Po:Up.bind(null,e),To:Vp.bind(null,e),u_:qp.bind(null,e)}),e.F_.push((async t=>{t?(e.N_.Zo(),Lp(e)?xp(e):e.x_.set("Unknown")):(await e.N_.stop(),Fp(e))}))),e.N_}function tg(e){return e.L_||(e.L_=function(e,t,n){const i=fl(e);return i.R_(),new Tp(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)}(e.datastore,e.asyncQueue,{Po:Gp.bind(null,e),To:Jp.bind(null,e),E_:Qp.bind(null,e),T_:Yp.bind(null,e)}),e.F_.push((async t=>{t?(e.L_.Zo(),await zp(e)):(await e.L_.stop(),e.D_.length>0&&(al("RemoteStore",`Stopping write stream with ${e.D_.length} pending writes`),e.D_=[]))}))),e.L_
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
 */}class ng{constructor(e,t,n,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new ml,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,i,s){const r=Date.now()+n,o=new ng(e,t,r,i,s);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new gl(pl.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ig(e,t){if(cl("AsyncQueue",`${t}: ${e}`),Ql(e))return new gl(pl.UNAVAILABLE,`${t}: ${e}`);throw e}
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
 */class sg{constructor(e){this.comparator=e?(t,n)=>e(t,n)||Ll.comparator(t.key,n.key):(e,t)=>Ll.comparator(e.key,t.key),this.keyedMap=Uu(),this.sortedSet=new hh(this.comparator)}static emptySet(e){return new sg(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof sg))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(!e.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new sg;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
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
 */class rg{constructor(){this.B_=new hh(Ll.comparator)}track(e){const t=e.doc.key,n=this.B_.get(t);n?0!==e.type&&3===n.type?this.B_=this.B_.insert(t,e):3===e.type&&1!==n.type?this.B_=this.B_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.B_=this.B_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.B_=this.B_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.B_=this.B_.remove(t):1===e.type&&2===n.type?this.B_=this.B_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.B_=this.B_.insert(t,{type:2,doc:e.doc}):ul():this.B_=this.B_.insert(t,e)}k_(){const e=[];return this.B_.inorderTraversal(((t,n)=>{e.push(n)})),e}}class og{constructor(e,t,n,i,s,r,o,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=s,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,i,s){const r=[];return t.forEach((e=>{r.push({type:0,doc:e})})),new og(e,t,sg.emptySet(t),r,n,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ku(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}
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
 */class ag{constructor(){this.q_=void 0,this.Q_=[]}K_(){return this.Q_.some((e=>e.U_()))}}class cg{constructor(){this.queries=new xu((e=>Au(e)),ku),this.onlineState="Unknown",this.W_=new Set}}async function lg(e,t){const n=fl(e);let i=3;const s=t.query;let r=n.queries.get(s);r?!r.K_()&&t.U_()&&(i=2):(r=new ag,i=t.U_()?0:1);try{switch(i){case 0:r.q_=await n.onListen(s,!0);break;case 1:r.q_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(e){const n=ig(e,`Initialization of query '${Nu(t.query)}' failed`);return void t.onError(n)}n.queries.set(s,r),r.Q_.push(t),t.G_(n.onlineState),r.q_&&t.z_(r.q_)&&fg(n)}async function hg(e,t){const n=fl(e),i=t.query;let s=3;const r=n.queries.get(i);if(r){const e=r.Q_.indexOf(t);e>=0&&(r.Q_.splice(e,1),0===r.Q_.length?s=t.U_()?0:1:!r.K_()&&t.U_()&&(s=2))}switch(s){case 0:return n.queries.delete(i),n.onUnlisten(i,!0);case 1:return n.queries.delete(i),n.onUnlisten(i,!1);case 2:return n.onLastRemoteStoreUnlisten(i);default:return}}function ug(e,t){const n=fl(e);let i=!1;for(const e of t){const t=e.query,s=n.queries.get(t);if(s){for(const t of s.Q_)t.z_(e)&&(i=!0);s.q_=e}}i&&fg(n)}function dg(e,t,n){const i=fl(e),s=i.queries.get(t);if(s)for(const e of s.Q_)e.onError(n);i.queries.delete(t)}function fg(e){e.W_.forEach((e=>{e.next()}))}var pg,gg;(gg=pg||(pg={})).j_="default",gg.Cache="cache";class mg{constructor(e,t,n){this.query=e,this.H_=t,this.J_=!1,this.Y_=null,this.onlineState="Unknown",this.options=n||{}}z_(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new og(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.J_?this.Z_(e)&&(this.H_.next(e),t=!0):this.X_(e,this.onlineState)&&(this.ea(e),t=!0),this.Y_=e,t}onError(e){this.H_.error(e)}G_(e){this.onlineState=e;let t=!1;return this.Y_&&!this.J_&&this.X_(this.Y_,e)&&(this.ea(this.Y_),t=!0),t}X_(e,t){if(!e.fromCache)return!0;if(!this.U_())return!0;const n="Offline"!==t;return(!this.options.ta||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Z_(e){if(e.docChanges.length>0)return!0;const t=this.Y_&&this.Y_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}ea(e){e=og.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.J_=!0,this.H_.next(e)}U_(){return this.options.source!==pg.Cache}}
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
class _g{constructor(e){this.key=e}}class yg{constructor(e){this.key=e}}class vg{constructor(e,t){this.query=e,this.ua=t,this.ca=null,this.hasCachedResults=!1,this.current=!1,this.la=Ku(),this.mutatedKeys=Ku(),this.ha=Du(e),this.Pa=new sg(this.ha)}get Ia(){return this.ua}Ta(e,t){const n=t?t.Ea:new rg,i=t?t.Pa:this.Pa;let s=t?t.mutatedKeys:this.mutatedKeys,r=i,o=!1;const a="F"===this.query.limitType&&i.size===this.query.limit?i.last():null,c="L"===this.query.limitType&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((e,t)=>{const l=i.get(e),h=Ru(this.query,t)?t:null,u=!!l&&this.mutatedKeys.has(l.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;l&&h?l.data.isEqual(h.data)?u!==d&&(n.track({type:3,doc:h}),f=!0):this.da(l,h)||(n.track({type:2,doc:h}),f=!0,(a&&this.ha(h,a)>0||c&&this.ha(h,c)<0)&&(o=!0)):!l&&h?(n.track({type:0,doc:h}),f=!0):l&&!h&&(n.track({type:1,doc:l}),f=!0,(a||c)&&(o=!0)),f&&(h?(r=r.add(h),s=d?s.add(e):s.delete(e)):(r=r.delete(e),s=s.delete(e)))})),null!==this.query.limit)for(;r.size>this.query.limit;){const e="F"===this.query.limitType?r.last():r.first();r=r.delete(e.key),s=s.delete(e.key),n.track({type:1,doc:e})}return{Pa:r,Ea:n,Xi:o,mutatedKeys:s}}da(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,i){const s=this.Pa;this.Pa=e.Pa,this.mutatedKeys=e.mutatedKeys;const r=e.Ea.k_();r.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ul()}};return n(e)-n(t)}
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
 */(e.type,t.type)||this.ha(e.doc,t.doc))),this.Aa(n),i=null!=i&&i;const o=t&&!i?this.Ra():[],a=0===this.la.size&&this.current&&!i?1:0,c=a!==this.ca;return this.ca=a,0!==r.length||c?{snapshot:new og(this.query,e.Pa,s,r,e.mutatedKeys,0===a,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),Va:o}:{Va:o}}G_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Pa:this.Pa,Ea:new rg,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Va:[]}}ma(e){return!this.ua.has(e)&&!!this.Pa.has(e)&&!this.Pa.get(e).hasLocalMutations}Aa(e){e&&(e.addedDocuments.forEach((e=>this.ua=this.ua.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.ua=this.ua.delete(e))),this.current=e.current)}Ra(){if(!this.current)return[];const e=this.la;this.la=Ku(),this.Pa.forEach((e=>{this.ma(e.key)&&(this.la=this.la.add(e.key))}));const t=[];return e.forEach((e=>{this.la.has(e)||t.push(new yg(e))})),this.la.forEach((n=>{e.has(n)||t.push(new _g(n))})),t}fa(e){this.ua=e.hs,this.la=Ku();const t=this.Ta(e.documents);return this.applyChanges(t,!0)}ga(){return og.fromInitialDocuments(this.query,this.Pa,this.mutatedKeys,0===this.ca,this.hasCachedResults)}}class wg{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class bg{constructor(e){this.key=e,this.pa=!1}}class Eg{constructor(e,t,n,i,s,r){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=r,this.ya={},this.wa=new xu((e=>Au(e)),ku),this.Sa=new Map,this.ba=new Set,this.Da=new hh(Ll.comparator),this.Ca=new Map,this.va=new jf,this.Fa={},this.Ma=new Map,this.xa=Lf.Ln(),this.onlineState="Unknown",this.Oa=void 0}get isPrimaryClient(){return!0===this.Oa}}async function Ig(e,t,n=!0){const i=$g(e);let s;const r=i.wa.get(t);return r?(i.sharedClientState.addLocalQueryTarget(r.targetId),s=r.view.ga()):s=await Cg(i,t,n,!0),s}async function Tg(e,t){const n=$g(e);await Cg(n,t,!0,!1)}async function Cg(e,t,n,i){const s=await rp(e.localStore,Tu(t)),r=s.targetId,o=n?e.sharedClientState.addLocalQueryTarget(r):"not-current";let a;return i&&(a=await Sg(e,t,r,"current"===o,s.resumeToken)),e.isPrimaryClient&&n&&Rp(e.remoteStore,s),a}async function Sg(e,t,n,i,s){e.Na=(t,n,i)=>async function(e,t,n,i){let s=t.view.Ta(n);s.Xi&&(s=await ap(e.localStore,t.query,!1).then((({documents:e})=>t.view.Ta(e,s))));const r=i&&i.targetChanges.get(t.targetId),o=i&&null!=i.targetMismatches.get(t.targetId),a=t.view.applyChanges(s,e.isPrimaryClient,r,o);return Ug(e,t.targetId,a.Va),a.snapshot}(e,t,n,i);const r=await ap(e.localStore,t,!0),o=new vg(t,r.hs),a=o.Ta(r.documents),c=jd.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==e.onlineState,s),l=o.applyChanges(a,e.isPrimaryClient,c);Ug(e,n,l.Va);const h=new wg(t,n,o);return e.wa.set(t,h),e.Sa.has(n)?e.Sa.get(n).push(t):e.Sa.set(n,[t]),l.snapshot}async function kg(e,t,n){const i=fl(e),s=i.wa.get(t),r=i.Sa.get(s.targetId);if(r.length>1)return i.Sa.set(s.targetId,r.filter((e=>!ku(e,t)))),void i.wa.delete(t);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await op(i.localStore,s.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(s.targetId),n&&Pp(i.remoteStore,s.targetId),Mg(i,s.targetId)})).catch(zl)):(Mg(i,s.targetId),await op(i.localStore,s.targetId,!0))}async function Ag(e,t){const n=fl(e),i=n.wa.get(t),s=n.Sa.get(i.targetId);n.isPrimaryClient&&1===s.length&&(n.sharedClientState.removeLocalQueryTarget(i.targetId),Pp(n.remoteStore,i.targetId))}async function Ng(e,t){const n=fl(e);try{const e=await function(e,t){const n=fl(e),i=t.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const r=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const o=[];t.targetChanges.forEach(((r,a)=>{const c=s.get(a);if(!c)return;o.push(n.Qr.removeMatchingKeys(e,r.removedDocuments,a).next((()=>n.Qr.addMatchingKeys(e,r.addedDocuments,a))));let l=c.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(a)?l=l.withResumeToken(_h.EMPTY_BYTE_STRING,Rl.min()).withLastLimboFreeSnapshotVersion(Rl.min()):r.resumeToken.approximateByteSize()>0&&(l=l.withResumeToken(r.resumeToken,i)),s=s.insert(a,l),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0}(c,l,r)&&o.push(n.Qr.updateTargetData(e,l))}));let a=Mu(),c=Ku();if(t.documentUpdates.forEach((i=>{t.resolvedLimboDocuments.has(i)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,i))})),o.push(ip(e,r,t.documentUpdates).next((e=>{a=e.cs,c=e.ls}))),!i.isEqual(Rl.min())){const t=n.Qr.getLastRemoteSnapshotVersion(e).next((t=>n.Qr.setTargetsMetadata(e,e.currentSequenceNumber,i)));o.push(t)}return $l.waitFor(o).next((()=>r.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.ns=s,e)))}(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const i=n.Ca.get(t);i&&(dl(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?i.pa=!0:e.modifiedDocuments.size>0?dl(i.pa):e.removedDocuments.size>0&&(dl(i.pa),i.pa=!1))})),await jg(n,e,t)}catch(e){await zl(e)}}function Rg(e,t,n){const i=fl(e);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const e=[];i.wa.forEach(((n,i)=>{const s=i.view.G_(t);s.snapshot&&e.push(s.snapshot)})),function(e,t){const n=fl(e);n.onlineState=t;let i=!1;n.queries.forEach(((e,n)=>{for(const e of n.Q_)e.G_(t)&&(i=!0)})),i&&fg(n)}(i.eventManager,t),e.length&&i.ya.u_(e),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function Pg(e,t,n){const i=fl(e);i.sharedClientState.updateQueryState(t,"rejected",n);const s=i.Ca.get(t),r=s&&s.key;if(r){let e=new hh(Ll.comparator);e=e.insert(r,$h.newNoDocument(r,Rl.min()));const n=Ku().add(r),s=new qd(Rl.min(),new Map,new hh(kl),e,n);await Ng(i,s),i.Da=i.Da.remove(r),i.Ca.delete(t),qg(i)}else await op(i.localStore,t,!1).then((()=>Mg(i,t,n))).catch(zl)}async function Dg(e,t){const n=fl(e),i=t.batch.batchId;try{const e=await function(e,t){const n=fl(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const i=t.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(e,t,n,i){const s=n.batch,r=s.keys();let o=$l.resolve();return r.forEach((e=>{o=o.next((()=>i.getEntry(t,e))).next((t=>{const r=n.docVersions.get(e);dl(null!==r),t.version.compareTo(r)<0&&(s.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),i.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,s)))}(n,e,t,s).next((()=>s.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,i,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Ku();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,i)))}))}(n.localStore,t);Lg(n,i,null),xg(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await jg(n,e)}catch(e){await zl(e)}}async function Og(e,t,n){const i=fl(e);try{const e=await function(e,t){const n=fl(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let i;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(dl(null!==t),i=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,i,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,i))).next((()=>n.localDocuments.getDocuments(e,i)))}))}(i.localStore,t);Lg(i,t,n),xg(i,t),i.sharedClientState.updateMutationState(t,"rejected",n),await jg(i,e)}catch(n){await zl(n)}}function xg(e,t){(e.Ma.get(t)||[]).forEach((e=>{e.resolve()})),e.Ma.delete(t)}function Lg(e,t,n){const i=fl(e);let s=i.Fa[i.currentUser.toKey()];if(s){const e=s.get(t);e&&(n?e.reject(n):e.resolve(),s=s.remove(t)),i.Fa[i.currentUser.toKey()]=s}}function Mg(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const i of e.Sa.get(t))e.wa.delete(i),n&&e.ya.La(i,n);e.Sa.delete(t),e.isPrimaryClient&&e.va.Vr(t).forEach((t=>{e.va.containsKey(t)||Fg(e,t)}))}function Fg(e,t){e.ba.delete(t.path.canonicalString());const n=e.Da.get(t);null!==n&&(Pp(e.remoteStore,n),e.Da=e.Da.remove(t),e.Ca.delete(n),qg(e))}function Ug(e,t,n){for(const i of n)i instanceof _g?(e.va.addReference(i.key,t),Vg(e,i)):i instanceof yg?(al("SyncEngine","Document no longer in limbo: "+i.key),e.va.removeReference(i.key,t),e.va.containsKey(i.key)||Fg(e,i.key)):ul()}function Vg(e,t){const n=t.key,i=n.path.canonicalString();e.Da.get(n)||e.ba.has(i)||(al("SyncEngine","New document in limbo: "+n),e.ba.add(i),qg(e))}function qg(e){for(;e.ba.size>0&&e.Da.size<e.maxConcurrentLimboResolutions;){const t=e.ba.values().next().value;e.ba.delete(t);const n=new Ll(Dl.fromString(t)),i=e.xa.next();e.Ca.set(i,new bg(n)),e.Da=e.Da.insert(n,i),Rp(e.remoteStore,new Af(Tu(wu(n.path)),i,"TargetPurposeLimboResolution",eh._e))}}async function jg(e,t,n){const i=fl(e),s=[],r=[],o=[];i.wa.isEmpty()||(i.wa.forEach(((e,a)=>{o.push(i.Na(a,t,n).then((e=>{if((e||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){s.push(e);const t=Yf.Ki(a.targetId,e);r.push(t)}})))})),await Promise.all(o),i.ya.u_(s),await async function(e,t){const n=fl(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>$l.forEach(t,(t=>$l.forEach(t.qi,(i=>n.persistence.referenceDelegate.addReference(e,t.targetId,i))).next((()=>$l.forEach(t.Qi,(i=>n.persistence.referenceDelegate.removeReference(e,t.targetId,i)))))))))}catch(e){if(!Ql(e))throw e;al("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.ns.get(t),i=e.snapshotVersion,s=e.withLastLimboFreeSnapshotVersion(i);n.ns=n.ns.insert(t,s)}}}(i.localStore,r))}async function Bg(e,t){const n=fl(e);if(!n.currentUser.isEqual(t)){al("SyncEngine","User change. New user:",t.toKey());const e=await tp(n.localStore,t);n.currentUser=t,function(e,t){e.Ma.forEach((e=>{e.forEach((e=>{e.reject(new gl(pl.CANCELLED,t))}))})),e.Ma.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await jg(n,e.us)}}function zg(e,t){const n=fl(e),i=n.Ca.get(t);if(i&&i.pa)return Ku().add(i.key);{let e=Ku();const i=n.Sa.get(t);if(!i)return e;for(const t of i){const i=n.wa.get(t);e=e.unionWith(i.view.Ia)}return e}}function $g(e){const t=fl(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Ng.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=zg.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Pg.bind(null,t),t.ya.u_=ug.bind(null,t.eventManager),t.ya.La=dg.bind(null,t.eventManager),t}function Kg(e){const t=fl(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Dg.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Og.bind(null,t),t}class Hg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=wp(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return ep(this.persistence,new Xf,e.initialUser,this.serializer)}createPersistence(e){return new Wf(Qf.Hr,this.serializer)}createSharedClientState(e){return new hp}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Wg{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Rg(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Bg.bind(null,this.syncEngine),await Zp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new cg}createDatastore(e){const t=wp(e.databaseInfo.databaseId),n=function(e){return new yp(e)}(e.databaseInfo);return function(e,t,n,i){return new Cp(e,t,n,i)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(e,t,n,i,s){return new kp(e,t,n,i,s)}(this.localStore,this.datastore,e.asyncQueue,(e=>Rg(this.syncEngine,e,0)),dp.D()?new dp:new up)}createSyncEngine(e,t){return function(e,t,n,i,s,r,o){const a=new Eg(e,t,n,i,s,r);return o&&(a.Oa=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e;await async function(e){const t=fl(e);al("RemoteStore","RemoteStore shutting down."),t.v_.add(5),await Np(t),t.M_.shutdown(),t.x_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate()}}
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
class Gg{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.qa(this.observer.next,e)}error(e){this.observer.error?this.qa(this.observer.error,e):cl("Uncaught Error in snapshot listener:",e.toString())}Qa(){this.muted=!0}qa(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
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
class Qg{constructor(e,t,n,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=il.UNAUTHENTICATED,this.clientId=Sl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{al("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(al("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new gl(pl.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ml;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=ig(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Yg(e,t){e.asyncQueue.verifyOperationInProgress(),al("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let i=n.initialUser;e.setCredentialChangeListener((async e=>{i.isEqual(e)||(await tp(t.localStore,e),i=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function Jg(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Zg(e);al("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener((e=>Xp(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>Xp(t.remoteStore,n))),e._onlineComponents=t}function Xg(e){return"FirebaseError"===e.name?e.code===pl.FAILED_PRECONDITION||e.code===pl.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function Zg(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){al("FirestoreClient","Using user provided OfflineComponentProvider");try{await Yg(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Xg(n))throw n;ll("Error using user provided cache. Falling back to memory cache: "+n),await Yg(e,new Hg)}}else al("FirestoreClient","Using default OfflineComponentProvider"),await Yg(e,new Hg);return e._offlineComponents}async function em(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(al("FirestoreClient","Using user provided OnlineComponentProvider"),await Jg(e,e._uninitializedComponentsProvider._online)):(al("FirestoreClient","Using default OnlineComponentProvider"),await Jg(e,new Wg))),e._onlineComponents}function tm(e){return em(e).then((e=>e.syncEngine))}async function nm(e){const t=await em(e),n=t.eventManager;return n.onListen=Ig.bind(null,t.syncEngine),n.onUnlisten=kg.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=Tg.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=Ag.bind(null,t.syncEngine),n}function im(e,t,n={}){const i=new ml;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,i,s){const r=new Gg({next:r=>{t.enqueueAndForget((()=>hg(e,o)));const a=r.docs.has(n);!a&&r.fromCache?s.reject(new gl(pl.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&r.fromCache&&i&&"server"===i.source?s.reject(new gl(pl.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(r)},error:e=>s.reject(e)}),o=new mg(wu(n.path),r,{includeMetadataChanges:!0,ta:!0});return lg(e,o)}(await nm(e),e.asyncQueue,t,n,i))),i.promise}function sm(e,t,n={}){const i=new ml;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,i,s){const r=new Gg({next:n=>{t.enqueueAndForget((()=>hg(e,o))),n.fromCache&&"server"===i.source?s.reject(new gl(pl.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:e=>s.reject(e)}),o=new mg(n,r,{includeMetadataChanges:!0,ta:!0});return lg(e,o)}(await nm(e),e.asyncQueue,t,n,i))),i.promise}
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
function rm(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
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
 */}const om=new Map;
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
 */function am(e,t,n){if(!n)throw new gl(pl.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function cm(e){if(!Ll.isDocumentKey(e))throw new gl(pl.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function lm(e){if(Ll.isDocumentKey(e))throw new gl(pl.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function hm(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":ul()}function um(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new gl(pl.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=hm(e);throw new gl(pl.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
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
class dm{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new gl(pl.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new gl(pl.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,i){if(!0===t&&!0===i)throw new gl(pl.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=rm(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new gl(pl.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new gl(pl.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new gl(pl.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
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
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(e,t){return e.timeoutSeconds===t.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class fm{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new dm({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new gl(pl.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new gl(pl.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new dm(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new yl;switch(e.type){case"firstParty":return new El(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new gl(pl.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=om.get(e);t&&(al("ComponentProvider","Removing Datastore"),om.delete(e),t.terminate())}(this),Promise.resolve()}}
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
class pm{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new pm(this.firestore,e,this._query)}}class gm{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mm(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new gm(this.firestore,e,this._key)}}class mm extends pm{constructor(e,t,n){super(e,t,wu(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new gm(this.firestore,null,new Ll(e))}withConverter(e){return new mm(this.firestore,e,this._path)}}function _m(e,t,...n){if(e=(0,i.Ku)(e),am("collection","path",t),e instanceof fm){const i=Dl.fromString(t,...n);return lm(i),new mm(e,null,i)}{if(!(e instanceof gm||e instanceof mm))throw new gl(pl.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(Dl.fromString(t,...n));return lm(i),new mm(e.firestore,null,i)}}function ym(e,t,...n){if(e=(0,i.Ku)(e),1===arguments.length&&(t=Sl.newId()),am("doc","path",t),e instanceof fm){const i=Dl.fromString(t,...n);return cm(i),new gm(e,null,new Ll(i))}{if(!(e instanceof gm||e instanceof mm))throw new gl(pl.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(Dl.fromString(t,...n));return cm(i),new gm(e.firestore,e instanceof mm?e.converter:null,new Ll(i))}}
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
class vm{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new bp(this,"async_queue_retry"),this.cu=()=>{const e=vp();e&&al("AsyncQueue","Visibility state changed to "+e.visibilityState),this.jo.Ko()};const e=vp();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.lu(),this.hu(e)}enterRestrictedMode(e){if(!this.iu){this.iu=!0,this.au=e||!1;const t=vp();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.cu)}}enqueue(e){if(this.lu(),this.iu)return new Promise((()=>{}));const t=new ml;return this.hu((()=>this.iu&&this.au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.ru.push(e),this.Pu())))}async Pu(){if(0!==this.ru.length){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(e){if(!Ql(e))throw e;al("AsyncQueue","Operation failed with retryable error: "+e)}this.ru.length>0&&this.jo.qo((()=>this.Pu()))}}hu(e){const t=this.nu.then((()=>(this._u=!0,e().catch((e=>{this.ou=e,this._u=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
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
 */(e);throw cl("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this._u=!1,e))))));return this.nu=t,t}enqueueAfterDelay(e,t,n){this.lu(),this.uu.indexOf(e)>-1&&(t=0);const i=ng.createAndSchedule(this,e,t,n,(e=>this.Iu(e)));return this.su.push(i),i}lu(){this.ou&&ul()}verifyOperationInProgress(){}async Tu(){let e;do{e=this.nu,await e}while(e!==this.nu)}Eu(e){for(const t of this.su)if(t.timerId===e)return!0;return!1}du(e){return this.Tu().then((()=>{this.su.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.su)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Tu()}))}Au(e){this.uu.push(e)}Iu(e){const t=this.su.indexOf(e);this.su.splice(t,1)}}class wm extends fm{constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=new vm,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Em(this),this._firestoreClient.terminate()}}function bm(e){return e._firestoreClient||Em(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Em(e){var t,n,i;const s=e._freezeSettings(),r=function(e,t,n,i){return new Ch(e,t,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,rm(i.experimentalLongPollingOptions),i.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,s);e._firestoreClient=new Qg(e._authCredentials,e._appCheckCredentials,e._queue,r),(null===(n=s.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(i=s.localCache)||void 0===i?void 0:i._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}
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
class Im{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Im(_h.fromBase64String(e))}catch(e){throw new gl(pl.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Im(_h.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
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
 */class Tm{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new gl(pl.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new xl(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
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
class Cm{constructor(e){this._methodName=e}}
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
 */class Sm{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new gl(pl.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new gl(pl.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return kl(this._lat,e._lat)||kl(this._long,e._long)}}
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
 */const km=/^__.*__$/;class Am{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new vd(e,this.data,this.fieldMask,t,this.fieldTransforms):new yd(e,this.data,t,this.fieldTransforms)}}function Nm(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ul()}}class Rm{constructor(e,t,n,i,s,r){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=i,void 0===s&&this.Ru(),this.fieldTransforms=s||[],this.fieldMask=r||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}mu(e){return new Rm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}fu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.mu({path:n,gu:!1});return i.pu(e),i}yu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.mu({path:n,gu:!1});return i.Ru(),i}wu(e){return this.mu({path:void 0,gu:!0})}Su(e){return jm(e,this.settings.methodName,this.settings.bu||!1,this.path,this.settings.Du)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}Ru(){if(this.path)for(let e=0;e<this.path.length;e++)this.pu(this.path.get(e))}pu(e){if(0===e.length)throw this.Su("Document fields must not be empty");if(Nm(this.Vu)&&km.test(e))throw this.Su('Document fields cannot begin and end with "__"')}}class Pm{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||wp(e)}Cu(e,t,n,i=!1){return new Rm({Vu:e,methodName:t,Du:n,path:xl.emptyPath(),gu:!1,bu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Dm(e){const t=e._freezeSettings(),n=wp(e._databaseId);return new Pm(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Om(e,t,n,i,s,r={}){const o=e.Cu(r.merge||r.mergeFields?2:0,t,n,s);Fm("Data must be an object, but it was:",o,i);const a=Lm(i,o);let c,l;if(r.merge)c=new gh(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const e=[];for(const i of r.mergeFields){const s=Um(t,i,n);if(!o.contains(s))throw new gl(pl.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);Bm(e,s)||e.push(s)}c=new gh(e),l=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,l=o.fieldTransforms;return new Am(new Bh(a),c,l)}function xm(e,t){if(Mm(e=(0,i.Ku)(e)))return Fm("Unsupported field value:",t,e),Lm(e,t);if(e instanceof Cm)return function(e,t){if(!Nm(t.Vu))throw t.Su(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Su(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.gu&&4!==t.Vu)throw t.Su("Nested arrays are not supported");return function(e,t){const n=[];let i=0;for(const s of e){let e=xm(s,t.wu(i));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),i++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,i.Ku)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Yu(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Nl.fromDate(e);return{timestampValue:ef(t.serializer,n)}}if(e instanceof Nl){const n=new Nl(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:ef(t.serializer,n)}}if(e instanceof Sm)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Im)return{bytesValue:tf(t.serializer,e._byteString)};if(e instanceof gm){const n=t.databaseId,i=e.firestore._databaseId;if(!i.isEqual(n))throw t.Su(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:rf(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.Su(`Unsupported field value: ${hm(e)}`)}(e,t)}function Lm(e,t){const n={};return lh(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ch(e,((e,i)=>{const s=xm(i,t.fu(e));null!=s&&(n[e]=s)})),{mapValue:{fields:n}}}function Mm(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Nl||e instanceof Sm||e instanceof Im||e instanceof gm||e instanceof Cm)}function Fm(e,t,n){if(!Mm(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const i=hm(n);throw"an object"===i?t.Su(e+" a custom object"):t.Su(e+" "+i)}}function Um(e,t,n){if((t=(0,i.Ku)(t))instanceof Tm)return t._internalPath;if("string"==typeof t)return qm(e,t);throw jm("Field path arguments must be of type string or ",e,!1,void 0,n)}const Vm=new RegExp("[~\\*/\\[\\]]");function qm(e,t,n){if(t.search(Vm)>=0)throw jm(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Tm(...t.split("."))._internalPath}catch(i){throw jm(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function jm(e,t,n,i,s){const r=i&&!i.isEmpty(),o=void 0!==s;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${i}`),o&&(c+=` in document ${s}`),c+=")"),new gl(pl.INVALID_ARGUMENT,a+e+c)}function Bm(e,t){return e.some((e=>e.isEqual(t)))}
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
 */class zm{constructor(e,t,n,i,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new gm(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new $m(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Km("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class $m extends zm{data(){return super.data()}}function Km(e,t){return"string"==typeof t?qm(e,t):t instanceof Tm?t._internalPath:t._delegate._internalPath}
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
 */function Hm(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new gl(pl.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Wm{convertValue(e,t="none"){switch(Ah(e)){case 0:return null;case 1:return e.booleanValue;case 2:return wh(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(bh(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw ul()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return ch(e,((e,i)=>{n[e]=this.convertValue(i,t)})),n}convertGeoPoint(e){return new Sm(wh(e.latitude),wh(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Ih(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Th(e));default:return null}}convertTimestamp(e){const t=vh(e);return new Nl(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Dl.fromString(e);dl(kf(n));const i=new Sh(n.get(1),n.get(3)),s=new Ll(n.popFirst(5));return i.isEqual(t)||cl(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}
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
 */function Gm(e,t,n){let i;return i=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,i}
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
class Qm{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ym extends zm{constructor(e,t,n,i,s,r){super(e,t,n,i,r),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Jm(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Km("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Jm extends Ym{data(e={}){return super.data(e)}}class Xm{constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Qm(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new Jm(this._firestore,this._userDataWriter,n.key,n,new Qm(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new gl(pl.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const i=new Jm(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Qm(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:i,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const i=new Jm(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Qm(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let s=-1,r=-1;return 0!==t.type&&(s=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),r=n.indexOf(t.doc.key)),{type:Zm(t.type),doc:i,oldIndex:s,newIndex:r}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Zm(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ul()}}
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
function e_(e){e=um(e,gm);const t=um(e.firestore,wm);return im(bm(t),e._key).then((n=>o_(t,e,n)))}class t_ extends Wm{constructor(e){super(),this.firestore=e}convertBytes(e){return new Im(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new gm(this.firestore,null,t)}}function n_(e){e=um(e,pm);const t=um(e.firestore,wm),n=bm(t),i=new t_(t);return Hm(e._query),sm(n,e._query).then((n=>new Xm(t,i,e,n)))}function i_(e,t,n){e=um(e,gm);const i=um(e.firestore,wm),s=Gm(e.converter,t,n);return r_(i,[Om(Dm(i),"setDoc",e._key,s,null!==e.converter,n).toMutation(e._key,hd.none())])}function s_(e,t){const n=um(e.firestore,wm),i=ym(e),s=Gm(e.converter,t);return r_(n,[Om(Dm(e.firestore),"addDoc",i._key,s,null!==e.converter,{}).toMutation(i._key,hd.exists(!1))]).then((()=>i))}function r_(e,t){return function(e,t){const n=new ml;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){const i=Kg(e);try{const e=await function(e,t){const n=fl(e),i=Nl.now(),s=t.reduce(((e,t)=>e.add(t.key)),Ku());let r,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=Mu(),c=Ku();return n.os.getEntries(e,s).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((s=>{r=s;const o=[];for(const e of t){const t=md(e,r.get(e.key).overlayedDocument);null!=t&&o.push(new vd(e.key,t,zh(t.value.mapValue),hd.exists(!0)))}return n.mutationQueue.addMutationBatch(e,i,o,t)})).next((t=>{o=t;const i=t.applyToLocalDocumentSet(r,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,i)}))})).then((()=>({batchId:o.batchId,changes:Vu(r)})))}(i.localStore,t);i.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let i=e.Fa[e.currentUser.toKey()];i||(i=new hh(kl)),i=i.insert(t,n),e.Fa[e.currentUser.toKey()]=i}(i,e.batchId,n),await jg(i,e.changes),await zp(i.remoteStore)}catch(e){const t=ig(e,"Failed to persist write");n.reject(t)}}(await tm(e),t,n))),n.promise}(bm(e),t)}function o_(e,t,n){const i=n.docs.get(t._key),s=new t_(e);return new Ym(e,s,t._key,i,new Qm(n.hasPendingWrites,n.fromCache),t.converter)}
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
 */!function(n,i=!0){!function(e){sl=e}(e.MF),(0,e.om)(new t.uA("firestore",((e,{instanceIdentifier:t,options:n})=>{const s=e.getProvider("app").getImmediate(),r=new wm(new wl(e.getProvider("auth-internal")),new Tl(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new gl(pl.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Sh(e.options.projectId,t)}(s,t),s);return n=Object.assign({useFetchStreams:i},n),r._setSettings(n),r}),"PUBLIC").setMultipleInstances(!0)),(0,e.KO)(nl,"4.5.0",n),(0,e.KO)(nl,"4.5.0","esm2017")}();function a_(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(n[i[s]]=e[i[s]])}return n}Object.create;Object.create;"function"==typeof SuppressedError&&SuppressedError;function c_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l_=c_,h_=new i.FA("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),u_=new s.Vy("@firebase/auth");function d_(t,...n){u_.logLevel<=s.$b.ERROR&&u_.error(`Auth (${e.MF}): ${t}`,...n)}
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
 */function f_(e,...t){throw m_(e,...t)}function p_(e,...t){return m_(e,...t)}function g_(e,t,n){const s=Object.assign(Object.assign({},l_()),{[t]:n});return new i.FA("auth","Firebase",s).create(t,{appName:e.name})}function m_(e,...t){if("string"!=typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return h_.create(e,...t)}function __(e,t,...n){if(!e)throw m_(t,...n)}function y_(e){const t="INTERNAL ASSERTION FAILED: "+e;throw d_(t),new Error(t)}function v_(e,t){e||y_(t)}
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
 */function w_(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function b_(){return"http:"===E_()||"https:"===E_()}function E_(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
class I_{constructor(e,t){this.shortDelay=e,this.longDelay=t,v_(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,i.jZ)()||(0,i.lV)()}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(b_()||(0,i.sr)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
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
 */function T_(e,t){v_(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class C_{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void y_("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void y_("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void y_("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const S_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},k_=new I_(3e4,6e4);
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
 */function A_(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function N_(e,t,n,s,r={}){return R_(e,r,(async()=>{let r={},o={};s&&("GET"===t?o=s:r={body:JSON.stringify(s)});const a=(0,i.Am)(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),C_.fetch()(D_(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},r))}))}async function R_(e,t,n){e._canInitEmulator=!1;const s=Object.assign(Object.assign({},S_),t);try{const t=new x_(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const r=await i.json();if("needConfirmation"in r)throw L_(e,"account-exists-with-different-credential",r);if(i.ok&&!("errorMessage"in r))return r;{const t=i.ok?r.errorMessage:r.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw L_(e,"credential-already-in-use",r);if("EMAIL_EXISTS"===n)throw L_(e,"email-already-in-use",r);if("USER_DISABLED"===n)throw L_(e,"user-disabled",r);const a=s[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw g_(e,a,o);f_(e,a)}}catch(t){if(t instanceof i.g)throw t;f_(e,"network-request-failed",{message:String(t)})}}async function P_(e,t,n,i,s={}){const r=await N_(e,t,n,i,s);return"mfaPendingCredential"in r&&f_(e,"multi-factor-auth-required",{_serverResponse:r}),r}function D_(e,t,n,i){const s=`${t}${n}?${i}`;return e.config.emulator?T_(e.config,s):`${e.config.apiScheme}://${s}`}function O_(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class x_{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(p_(this.auth,"network-request-failed"))),k_.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function L_(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=p_(e,t,i);return s.customData._tokenResponse=n,s}
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
 */function M_(e){return void 0!==e&&void 0!==e.enterprise}class F_{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return O_(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}}
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
 */async function U_(e,t){return N_(e,"GET","/v2/recaptchaConfig",A_(e,t))}
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
function V_(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
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
 */function q_(e){return 1e3*Number(e)}function j_(e){const[t,n,s]=e.split(".");if(void 0===t||void 0===n||void 0===s)return d_("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,i.u)(n);return e?JSON.parse(e):(d_("Failed to decode base64 JWT payload"),null)}catch(e){return d_("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
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
async function B_(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof i.g&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class z_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
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
 */class $_{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=V_(this.lastLoginAt),this.creationTime=V_(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function K_(e){var t;const n=e.auth,i=await e.getIdToken(),s=await B_(e,async function(e,t){return N_(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:i}));__(null==s?void 0:s.users.length,n,"internal-error");const r=s.users[0];e._notifyReloadListener(r);const o=(null===(t=r.providerUserInfo)||void 0===t?void 0:t.length)?r.providerUserInfo.map((e=>{var{providerId:t}=e,n=a_(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=e.providerData,l=o,[...c.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var c,l;const h=e.isAnonymous,u=!(e.email&&r.passwordHash||(null==a?void 0:a.length)),d=!!h&&u,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new $_(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
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
class H_{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){__(e.idToken,"internal-error"),__(void 0!==e.idToken,"internal-error"),__(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=j_(e);return __(t,"internal-error"),__(void 0!==t.exp,"internal-error"),__(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return __(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:s,expiresIn:r}=
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
 */await async function(e,t){const n=await R_(e,{},(async()=>{const n=(0,i.Am)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:r}=e.config,o=D_(e,s,"/v1/token",`key=${r}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",C_.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,s,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:s}=t,r=new H_;return n&&(__("string"==typeof n,"internal-error",{appName:e}),r.refreshToken=n),i&&(__("string"==typeof i,"internal-error",{appName:e}),r.accessToken=i),s&&(__("number"==typeof s,"internal-error",{appName:e}),r.expirationTime=s),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new H_,this.toJSON())}_performRefresh(){return y_("not implemented")}}
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
 */function W_(e,t){__("string"==typeof e||void 0===e,"internal-error",{appName:t})}class G_{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,s=a_(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new z_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new $_(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await B_(this,this.stsTokenManager.getToken(this.auth,e));return __(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=(0,i.Ku)(e),s=await n.getIdToken(t),r=j_(s);__(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const o="object"==typeof r.firebase?r.firebase:void 0,a=null==o?void 0:o.sign_in_provider;return{claims:r,token:s,authTime:V_(q_(r.auth_time)),issuedAtTime:V_(q_(r.iat)),expirationTime:V_(q_(r.exp)),signInProvider:a||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=(0,i.Ku)(e);await K_(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(__(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new G_(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){__(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await K_(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await B_(this,async function(e,t){return N_(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,s,r,o,a,c,l;const h=null!==(n=t.displayName)&&void 0!==n?n:void 0,u=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(s=t.phoneNumber)&&void 0!==s?s:void 0,f=null!==(r=t.photoURL)&&void 0!==r?r:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,_=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:y,emailVerified:v,isAnonymous:w,providerData:b,stsTokenManager:E}=t;__(y&&E,e,"internal-error");const I=H_.fromJSON(this.name,E);__("string"==typeof y,e,"internal-error"),W_(h,e.name),W_(u,e.name),__("boolean"==typeof v,e,"internal-error"),__("boolean"==typeof w,e,"internal-error"),W_(d,e.name),W_(f,e.name),W_(p,e.name),W_(g,e.name),W_(m,e.name),W_(_,e.name);const T=new G_({uid:y,auth:e,email:u,emailVerified:v,displayName:h,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:I,createdAt:m,lastLoginAt:_});return b&&Array.isArray(b)&&(T.providerData=b.map((e=>Object.assign({},e)))),g&&(T._redirectEventId=g),T}static async _fromIdTokenResponse(e,t,n=!1){const i=new H_;i.updateFromServerResponse(t);const s=new G_({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await K_(s),s}}
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
 */const Q_=new Map;function Y_(e){v_(e instanceof Function,"Expected a class definition");let t=Q_.get(e);return t?(v_(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Q_.set(e,t),t)}
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
 */class J_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}J_.type="NONE";const X_=J_;
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
 */function Z_(e,t,n){return`firebase:${e}:${t}:${n}`}class ey{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=Z_(this.userKey,i.apiKey,s),this.fullPersistenceKey=Z_("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?G_._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ey(Y_(X_),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let s=i[0]||Y_(X_);const r=Z_(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(r);if(t){const i=G_._fromJSON(e,t);n!==s&&(o=i),s=n;break}}catch(e){}const a=i.filter((e=>e._shouldAllowMigration));return s._shouldAllowMigration&&a.length?(s=a[0],o&&await s._set(r,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==s)try{await e._remove(r)}catch(e){}}))),new ey(s,e,n)):new ey(s,e,n)}}
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
 */function ty(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ry(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ny(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ay(t))return"Blackberry";if(cy(t))return"Webos";if(iy(t))return"Safari";if((t.includes("chrome/")||sy(t))&&!t.includes("edge/"))return"Chrome";if(oy(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function ny(e=(0,i.ZQ)()){return/firefox\//i.test(e)}function iy(e=(0,i.ZQ)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function sy(e=(0,i.ZQ)()){return/crios\//i.test(e)}function ry(e=(0,i.ZQ)()){return/iemobile/i.test(e)}function oy(e=(0,i.ZQ)()){return/android/i.test(e)}function ay(e=(0,i.ZQ)()){return/blackberry/i.test(e)}function cy(e=(0,i.ZQ)()){return/webos/i.test(e)}function ly(e=(0,i.ZQ)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function hy(e=(0,i.ZQ)()){return ly(e)||oy(e)||cy(e)||ay(e)||/windows phone/i.test(e)||ry(e)}
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
function uy(t,n=[]){let s;switch(t){case"Browser":s=ty((0,i.ZQ)());break;case"Worker":s=`${ty((0,i.ZQ)())}-${t}`;break;default:s=t}const r=n.length?n.join(","):"FirebaseCore-web";return`${s}/JsCore/${e.MF}/${r}`}
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
 */class dy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,i)=>{try{n(e(t))}catch(e){i(e)}}));n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}
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
 */class fy{constructor(e){var t,n,i,s;const r=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=r.minPasswordLength)&&void 0!==t?t:6,r.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=r.maxPasswordLength),void 0!==r.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=r.containsLowercaseCharacter),void 0!==r.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=r.containsUppercaseCharacter),void 0!==r.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=r.containsNumericCharacter),void 0!==r.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=r.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(i=null===(n=e.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==i?i:"",this.forceUpgradeOnSignin=null!==(s=e.forceUpgradeOnSignin)&&void 0!==s&&s,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,i,s,r,o;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=null===(t=a.meetsMinPasswordLength)||void 0===t||t),a.isValid&&(a.isValid=null===(n=a.meetsMaxPasswordLength)||void 0===n||n),a.isValid&&(a.isValid=null===(i=a.containsLowercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(s=a.containsUppercaseLetter)||void 0===s||s),a.isValid&&(a.isValid=null===(r=a.containsNumericCharacter)||void 0===r||r),a.isValid&&(a.isValid=null===(o=a.containsNonAlphanumericCharacter)||void 0===o||o),a}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}
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
 */class py{constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new my(this),this.idTokenSubscription=new my(this),this.beforeStateQueue=new dy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=h_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Y_(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await ey.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null==i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==r||!(null==o?void 0:o.user)||(i=o.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(e){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return __(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await K_(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,i.Ku)(e):null;return t&&__(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&__(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Y_(e))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await async function(e,t={}){return N_(e,"GET","/v2/passwordPolicy",A_(e,t))}
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
 */(this),t=new fy(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i.FA("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise(((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged((()=>{n(),e()}),t)}}))}async revokeAccessToken(e){if(this.currentUser){const t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await async function(e,t){return N_(e,"POST","/v2/accounts:revokeToken",A_(e,t))}(this,t)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Y_(e)||this._popupRedirectResolver;__(t,this,"argument-error"),this.redirectPersistenceManager=await ey.create(this,[Y_(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const s="function"==typeof t?t:t.next.bind(t);let r=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(__(o,this,"internal-error"),o.then((()=>{r||s(this.currentUser)})),"function"==typeof t){const s=e.addObserver(t,n,i);return()=>{r=!0,s()}}{const n=e.addObserver(t);return()=>{r=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return __(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=uy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var t;const n=await(null===(t=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getToken());return(null==n?void 0:n.error)&&function(t,...n){u_.logLevel<=s.$b.WARN&&u_.warn(`Auth (${e.MF}): ${t}`,...n)}(`Error while retrieving App Check token: ${n.error}`),null==n?void 0:n.token}}function gy(e){return(0,i.Ku)(e)}class my{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.tD)((e=>this.observer=e))}get next(){return __(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
 */let _y={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function yy(e){return _y.loadJS(e)}function vy(e){return`__${e}${Math.floor(1e6*Math.random())}`}class wy{constructor(e){this.type="recaptcha-enterprise",this.auth=gy(e)}async verify(e="verify",t=!1){function n(t,n,i){const s=window.grecaptcha;M_(s)?s.enterprise.ready((()=>{s.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n("NO_RECAPTCHA")}))})):i(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,i)=>{(async function(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{U_(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((i=>{if(void 0!==i.recaptchaKey){const n=new F_(i);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))})(this.auth).then((s=>{if(!t&&M_(window.grecaptcha))n(s,e,i);else{if("undefined"==typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));let t=_y.recaptchaEnterpriseScript;0!==t.length&&(t+=s),yy(t).then((()=>{n(s,e,i)})).catch((e=>{i(e)}))}})).catch((e=>{i(e)}))}))}}async function by(e,t,n,i=!1){const s=new wy(e);let r;try{r=await s.verify(n)}catch(e){r=await s.verify(n,!0)}const o=Object.assign({},t);return i?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Ey(e,t,n,i){var s;if(null===(s=e._getRecaptchaConfig())||void 0===s?void 0:s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await by(e,t,n,"getOobCode"===n);return i(e,s)}return i(e,t).catch((async s=>{if("auth/missing-recaptcha-token"===s.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await by(e,t,n,"getOobCode"===n);return i(e,s)}return Promise.reject(s)}))}function Iy(e,t,n){const i=gy(e);__(i._canInitEmulator,i,"emulator-config-failed"),__(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const s=!!(null==n?void 0:n.disableWarnings),r=Ty(t),{host:o,port:a}=function(e){const t=Ty(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const e=s[1];return{host:e,port:Cy(i.substr(e.length+1))}}{const[e,t]=i.split(":");return{host:e,port:Cy(t)}}}(t),c=null===a?"":`:${a}`;i.config.emulator={url:`${r}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */()}function Ty(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Cy(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Sy{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return y_("not implemented")}_getIdTokenResponse(e){return y_("not implemented")}_linkToIdToken(e,t){return y_("not implemented")}_getReauthenticationResolver(e){return y_("not implemented")}}
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
 */async function ky(e,t){return N_(e,"POST","/v1/accounts:signUp",t)}
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
async function Ay(e,t){return P_(e,"POST","/v1/accounts:signInWithPassword",A_(e,t))}
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
class Ny extends Sy{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Ny(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ny(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Ey(e,{returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signInWithPassword",Ay);case"emailLink":
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
return async function(e,t){return P_(e,"POST","/v1/accounts:signInWithEmailLink",A_(e,t))}(e,{email:this._email,oobCode:this._password});default:f_(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ey(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ky);case"emailLink":return async function(e,t){return P_(e,"POST","/v1/accounts:signInWithEmailLink",A_(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:f_(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
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
 */async function Ry(e,t){return P_(e,"POST","/v1/accounts:signInWithIdp",A_(e,t))}
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
 */class Py extends Sy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Py(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f_("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,s=a_(t,["providerId","signInMethod"]);if(!n||!i)return null;const r=new Py(n,i);return r.idToken=s.idToken||void 0,r.accessToken=s.accessToken||void 0,r.secret=s.secret,r.nonce=s.nonce,r.pendingToken=s.pendingToken||null,r}_getIdTokenResponse(e){return Ry(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ry(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ry(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,i.Am)(t)}return e}}
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
 */const Dy={USER_NOT_FOUND:"user-not-found"};
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
class Oy extends Sy{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Oy({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Oy({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return P_(e,"POST","/v1/accounts:signInWithPhoneNumber",A_(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await P_(e,"POST","/v1/accounts:signInWithPhoneNumber",A_(e,t));if(n.temporaryProof)throw L_(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return P_(e,"POST","/v1/accounts:signInWithPhoneNumber",A_(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Dy)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:s}=e;return n||t||i||s?new Oy({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:s}):null}}
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
 */class xy{constructor(e){var t,n,s,r,o,a;const c=(0,i.I9)((0,i.hp)(e)),l=null!==(t=c.apiKey)&&void 0!==t?t:null,h=null!==(n=c.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(s=c.mode)&&void 0!==s?s:null);__(l&&h&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=h,this.continueUrl=null!==(r=c.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(o=c.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(a=c.tenantId)&&void 0!==a?a:null}static parseLink(e){const t=function(e){const t=(0,i.I9)((0,i.hp)(e)).link,n=t?(0,i.I9)((0,i.hp)(t)).deep_link_id:null,s=(0,i.I9)((0,i.hp)(e)).deep_link_id;return(s?(0,i.I9)((0,i.hp)(s)).link:null)||s||n||t||e}(e);try{return new xy(t)}catch(e){return null}}}
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
class Ly{constructor(){this.providerId=Ly.PROVIDER_ID}static credential(e,t){return Ny._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=xy.parseLink(t);return __(n,"argument-error"),Ny._fromEmailAndCode(e,n.code,n.tenantId)}}Ly.PROVIDER_ID="password",Ly.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Ly.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class My{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
 */class Fy extends My{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
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
class Uy extends Fy{constructor(){super("facebook.com")}static credential(e){return Py._fromParams({providerId:Uy.PROVIDER_ID,signInMethod:Uy.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Uy.credentialFromTaggedObject(e)}static credentialFromError(e){return Uy.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Uy.credential(e.oauthAccessToken)}catch(e){return null}}}Uy.FACEBOOK_SIGN_IN_METHOD="facebook.com",Uy.PROVIDER_ID="facebook.com";
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
class Vy extends Fy{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Py._fromParams({providerId:Vy.PROVIDER_ID,signInMethod:Vy.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Vy.credentialFromTaggedObject(e)}static credentialFromError(e){return Vy.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Vy.credential(t,n)}catch(e){return null}}}Vy.GOOGLE_SIGN_IN_METHOD="google.com",Vy.PROVIDER_ID="google.com";
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
class qy extends Fy{constructor(){super("github.com")}static credential(e){return Py._fromParams({providerId:qy.PROVIDER_ID,signInMethod:qy.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qy.credentialFromTaggedObject(e)}static credentialFromError(e){return qy.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return qy.credential(e.oauthAccessToken)}catch(e){return null}}}qy.GITHUB_SIGN_IN_METHOD="github.com",qy.PROVIDER_ID="github.com";
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
class jy extends Fy{constructor(){super("twitter.com")}static credential(e,t){return Py._fromParams({providerId:jy.PROVIDER_ID,signInMethod:jy.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return jy.credentialFromTaggedObject(e)}static credentialFromError(e){return jy.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return jy.credential(t,n)}catch(e){return null}}}jy.TWITTER_SIGN_IN_METHOD="twitter.com",jy.PROVIDER_ID="twitter.com";
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
class By{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const s=await G_._fromIdTokenResponse(e,n,i),r=zy(n);return new By({user:s,providerId:r,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=zy(n);return new By({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function zy(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
class $y extends i.g{constructor(e,t,n,i){var s;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,$y.prototype),this.customData={appName:e.name,tenantId:null!==(s=e.tenantId)&&void 0!==s?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new $y(e,t,n,i)}}function Ky(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw $y._fromErrorAndOperation(e,n,t,i);throw n}))}
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
 */async function Hy(e,t,n=!1){const i=await B_(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return By._forOperation(e,"link",i)}
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
async function Wy(e,t,n=!1){const{auth:i}=e,s="reauthenticate";try{const r=await B_(e,Ky(i,s,t,e),n);__(r.idToken,i,"internal-error");const o=j_(r.idToken);__(o,i,"internal-error");const{sub:a}=o;return __(e.uid===a,i,"user-mismatch"),By._forOperation(e,s,r)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&f_(i,"user-mismatch"),e}}
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
 */async function Gy(e,t,n=!1){const i="signIn",s=await Ky(e,i,t),r=await By._fromIdTokenResponse(e,i,s);return n||await e._updateCurrentUser(r.user),r}new WeakMap;const Qy="__sak";
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
 */class Yy{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Qy,"1"),this.storage.removeItem(Qy),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
 */class Jy extends Yy{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=(0,i.ZQ)();return iy(e)||ly(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=hy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const s=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);(0,i.lT)()&&10===document.documentMode&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,10):s()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Jy.type="LOCAL";const Xy=Jy;
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
 */class Zy extends Yy{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Zy.type="SESSION";const ev=Zy;
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
class tv{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new tv(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:s}=t.data,r=this.handlersMap[i];if(!(null==r?void 0:r.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(r).map((async e=>e(t.origin,s))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function nv(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
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
 */tv.receivers=[];class iv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,r;return new Promise(((o,a)=>{const c=nv("",20);i.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);r={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),s=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),o(t.data.response);break;default:clearTimeout(l),clearTimeout(s),a(new Error("invalid_response"))}}},this.handlers.add(r),i.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])})).finally((()=>{r&&this.removeMessageHandler(r)}))}}
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
 */function sv(){return window}
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
function rv(){return void 0!==sv().WorkerGlobalScope&&"function"==typeof sv().importScripts}
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
const ov="firebaseLocalStorageDb",av="firebaseLocalStorage",cv="fbase_key";class lv{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function hv(e,t){return e.transaction([av],t?"readwrite":"readonly").objectStore(av)}function uv(){const e=indexedDB.open(ov,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(av,{keyPath:cv})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(av)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(ov);return new lv(e).toPromise()}(),t(await uv()))}))}))}async function dv(e,t,n){const i=hv(e,!0).put({[cv]:t,value:n});return new lv(i).toPromise()}function fv(e,t){const n=hv(e,!0).delete(t);return new lv(n).toPromise()}class pv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await uv()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=tv._getInstance(rv()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new iv(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&function(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await uv();return await dv(e,Qy,"1"),await fv(e,Qy),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>dv(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=hv(e,!1).get(t),i=await new lv(n).toPromise();return void 0===i?null:i.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>fv(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=hv(e,!1).getAll();return new lv(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:i,value:s}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}pv.type="LOCAL";const gv=pv;
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
vy("rcb"),new I_(3e4,6e4);
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
const mv="recaptcha";async function _v(e,t,n){var i;const s=await n.verify();try{let r;if(__("string"==typeof s,e,"argument-error"),__(n.type===mv,e,"argument-error"),r="string"==typeof t?{phoneNumber:t}:t,"session"in r){const t=r.session;if("phoneNumber"in r){__("enroll"===t.type,e,"internal-error");const n=
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
 */await function(e,t){return N_(e,"POST","/v2/accounts/mfaEnrollment:start",A_(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,recaptchaToken:s}});return n.phoneSessionInfo.sessionInfo}{__("signin"===t.type,e,"internal-error");const n=(null===(i=r.multiFactorHint)||void 0===i?void 0:i.uid)||r.multiFactorUid;__(n,e,"missing-multi-factor-info");const o=await function(e,t){return N_(e,"POST","/v2/accounts/mfaSignIn:start",A_(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:s}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return N_(e,"POST","/v1/accounts:sendVerificationCode",A_(e,t))}(e,{phoneNumber:r.phoneNumber,recaptchaToken:s});return t}}finally{n._reset()}}
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
class yv{constructor(e){this.providerId=yv.PROVIDER_ID,this.auth=gy(e)}verifyPhoneNumber(e,t){return _v(this.auth,e,(0,i.Ku)(t))}static credential(e,t){return Oy._fromVerification(e,t)}static credentialFromResult(e){const t=e;return yv.credentialFromTaggedObject(t)}static credentialFromError(e){return yv.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Oy._fromTokenResponse(t,n):null}}
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
function vv(e,t){return t?Y_(t):(__(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */yv.PROVIDER_ID="phone",yv.PHONE_SIGN_IN_METHOD="phone";class wv extends Sy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ry(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ry(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ry(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function bv(e){return Gy(e.auth,new wv(e),e.bypassAuthState)}function Ev(e){const{auth:t,user:n}=e;return __(n,t,"internal-error"),Wy(n,new wv(e),e.bypassAuthState)}async function Iv(e){const{auth:t,user:n}=e;return __(n,t,"internal-error"),Hy(n,new wv(e),e.bypassAuthState)}
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
 */class Tv{constructor(e,t,n,i,s=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:s,error:r,type:o}=e;if(r)return void this.reject(r);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bv;case"linkViaPopup":case"linkViaRedirect":return Iv;case"reauthViaPopup":case"reauthViaRedirect":return Ev;default:f_(this.auth,"internal-error")}}resolve(e){v_(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){v_(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const Cv=new I_(2e3,1e4);class Sv extends Tv{constructor(e,t,n,i,s){super(e,t,i,s),this.provider=n,this.authWindow=null,this.pollId=null,Sv.currentPopupAction&&Sv.currentPopupAction.cancel(),Sv.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return __(e,this.auth,"internal-error"),e}async onExecution(){v_(1===this.filter.length,"Popup operations only handle one event");const e=nv();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(p_(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p_(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Sv.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(p_(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,Cv.get())};e()}}Sv.currentPopupAction=null;
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
const kv="pendingRedirect",Av=new Map;class Nv extends Tv{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Av.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=Dv(t),i=Pv(e);if(!await i._isAvailable())return!1;const s="true"===await i._get(n);return await i._remove(n),s}(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Av.set(this.auth._key(),e)}return this.bypassAuthState||Av.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Rv(e,t){Av.set(e._key(),t)}function Pv(e){return Y_(e._redirectPersistence)}function Dv(e){return Z_(kv,e.config.apiKey,e.name)}
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
 */async function Ov(e,t,n=!1){const i=gy(e),s=vv(i,t),r=new Nv(i,s,n),o=await r.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}class xv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Mv(e);default:return!1}}
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Mv(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(p_(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Lv(e))}saveEventToCache(e){this.cachedEventUids.add(Lv(e)),this.lastProcessedEventTime=Date.now()}}function Lv(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Mv({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
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
const Fv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Uv=/^https?/;async function Vv(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return N_(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(qv(e))return}catch(e){}f_(e,"unauthorized-domain")}function qv(e){const t=w_(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return""===s.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&s.hostname===i}if(!Uv.test(n))return!1;if(Fv.test(e))return i===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}
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
 */const jv=new I_(3e4,6e4);function Bv(){const e=sv().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}function zv(e){return new Promise(((t,n)=>{var i,s,r;function o(){Bv(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Bv(),n(p_(e,"network-request-failed"))},timeout:jv.get()})}if(null===(s=null===(i=sv().gapi)||void 0===i?void 0:i.iframes)||void 0===s?void 0:s.Iframe)t(gapi.iframes.getContext());else{if(!(null===(r=sv().gapi)||void 0===r?void 0:r.load)){const t=vy("iframefcb");return sv()[t]=()=>{gapi.load?o():n(p_(e,"network-request-failed"))},yy(`${_y.gapiScript}?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw $v=null,e}))}let $v=null;
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
const Kv=new I_(5e3,15e3),Hv="__/auth/iframe",Wv="emulator/auth/iframe",Gv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Qv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Yv(t){const n=t.config;__(n.authDomain,t,"auth-domain-config-required");const s=n.emulator?T_(n,Wv):`https://${t.config.authDomain}/${Hv}`,r={apiKey:n.apiKey,appName:t.name,v:e.MF},o=Qv.get(t.config.apiHost);o&&(r.eid=o);const a=t._getFrameworks();return a.length&&(r.fw=a.join(",")),`${s}?${(0,i.Am)(r).slice(1)}`}async function Jv(e){const t=await function(e){return $v=$v||zv(e),$v}(e),n=sv().gapi;return __(n,e,"internal-error"),t.open({where:document.body,url:Yv(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Gv,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const s=p_(e,"network-request-failed"),r=sv().setTimeout((()=>{i(s)}),Kv.get());function o(){sv().clearTimeout(r),n(t)}t.ping(o).then(o,(()=>{i(s)}))}))))}
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
 */const Xv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Zv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function ew(e,t,n,s=500,r=600){const o=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const l=Object.assign(Object.assign({},Xv),{width:s.toString(),height:r.toString(),top:o,left:a}),h=(0,i.ZQ)().toLowerCase();n&&(c=sy(h)?"_blank":n),ny(h)&&(t=t||"http://localhost",l.scrollbars="yes");const u=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=(0,i.ZQ)()){var t;return ly(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(h)&&"_self"!==c)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
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
 */(t||"",c),new Zv(null);const d=window.open(t||"",c,u);__(d,e,"popup-blocked");try{d.focus()}catch(e){}return new Zv(d)}const tw="__/auth/handler",nw="emulator/auth/handler",iw=encodeURIComponent("fac");async function sw(t,n,s,r,o,a){__(t.config.authDomain,t,"auth-domain-config-required"),__(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:s,redirectUrl:r,v:e.MF,eventId:o};if(n instanceof My){n.setDefaultLanguage(t.languageCode),c.providerId=n.providerId||"",(0,i.Im)(n.getCustomParameters())||(c.customParameters=JSON.stringify(n.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(n instanceof Fy){const e=n.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}t.tenantId&&(c.tid=t.tenantId);const l=c;for(const e of Object.keys(l))void 0===l[e]&&delete l[e];const h=await t._getAppCheckToken(),u=h?`#${iw}=${encodeURIComponent(h)}`:"";return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${tw}`;return T_(e,nw)}
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
 */(t)}?${(0,i.Am)(l).slice(1)}${u}`}const rw="webStorageSupport";const ow=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ev,this._completeRedirectFn=Ov,this._overrideRedirectResult=Rv}async _openPopup(e,t,n,i){var s;v_(null===(s=this.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()");return ew(e,await sw(e,t,n,w_(),i),nv())}async _openRedirect(e,t,n,i){await this._originValidation(e);return function(e){sv().location.href=e}(await sw(e,t,n,w_(),i)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(v_(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Jv(e),n=new xv(e);return t.register("authEvent",(t=>{__(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(rw,{type:rw},(n=>{var i;const s=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i[rw];void 0!==s&&t(!!s),f_(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Vv(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return hy()||iy()||ly()}};var aw="@firebase/auth",cw="1.6.2";
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
class lw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){__(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
const hw=(0,i.XA)("authIdTokenMaxAge")||300;let uw=null;var dw;!function(e){_y=e}({loadJS:e=>new Promise(((t,n)=>{const i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=p_("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",function(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}().appendChild(i)})),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),dw="Browser",(0,e.om)(new t.uA("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:r,authDomain:o}=n.options;__(r&&!r.includes(":"),"invalid-api-key",{appName:n.name});const a={apiKey:r,authDomain:o,clientPlatform:dw,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:uy(dw)},c=new py(n,i,s,a);return function(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Y_);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(c,t),c}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),(0,e.om)(new t.uA("auth-internal",(e=>(e=>new lw(e))(gy(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,e.KO)(aw,cw,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(dw)),(0,e.KO)(aw,cw,"esm2017");var fw,pw,gw=n(6582),mw=function(e,t,n,i){return new(n||(n=Promise))((function(s,r){function o(e){try{c(i.next(e))}catch(e){r(e)}}function a(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}c((i=i.apply(e,t||[])).next())}))},_w=function(e,t){var n,i,s,r,o={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return r={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;r&&(r=0,a[0]&&(o=0)),o;)try{if(n=1,i&&(s=2&a[0]?i.return:a[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,a[1])).done)return s;switch(i=0,s&&(a=[2&a[0],s.value]),a[0]){case 0:case 1:s=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,i=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(s=o.trys,(s=s.length>0&&s[s.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!s||a[1]>s[0]&&a[1]<s[3])){o.label=a[1];break}if(6===a[0]&&o.label<s[1]){o.label=s[1],s=a;break}if(s&&o.label<s[2]){o.label=s[2],o.ops.push(a);break}s[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],i=0}finally{n=s=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}};(0,gw.o)();var yw=document.getElementById("app-content"),vw=document.getElementById("app-send-message"),ww=document.getElementById("app-timeline"),bw=document.getElementById("app-message-alert"),Ew=document.getElementById("searchResultNotFoundContainer"),Iw="free",Tw=0,Cw=!1,Sw=function(t=(0,e.Sx)()){const n=(0,e.j6)(t,"auth");if(n.isInitialized())return n.getImmediate();const s=
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
function(t,n){const s=(0,e.j6)(t,"auth");if(s.isInitialized()){const e=s.getImmediate(),t=s.getOptions();if((0,i.bD)(t,null!=n?n:{}))return e;f_(e,"already-initialized")}return s.initialize({options:n})}(t,{popupRedirectResolver:ow,persistence:[gv,Xy,ev]}),r=(0,i.XA)("authTokenSyncURL");if(r&&r.match(/^\/[^\/].*/)){const e=(o=r,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>hw)return;const i=null==t?void 0:t.token;uw!==i&&(uw=i,await fetch(o,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});!function(e,t,n){(0,i.Ku)(e).beforeAuthStateChanged(t,n)}(s,e,(()=>e(s.currentUser))),function(e,t,n,s){(0,i.Ku)(e).onIdTokenChanged(t,n,s)}(s,(t=>e(t)))}var o;const a=(0,i.Tj)("auth");return a&&Iy(s,`http://${a}`),s}(),kw=function(t=(0,e.Sx)(),n){const s=(0,e.j6)(t,"database").getImmediate({identifier:n});if(!s._instanceStarted){const e=(0,i.yU)("database");e&&function(e,t,n,s={}){e=(0,i.Ku)(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&T("Cannot call useEmulator() after instance has already been initialized.");const r=e._repoInternal;let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&T('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new B(B.OWNER);else if(s.mockUserToken){const t="string"==typeof s.mockUserToken?s.mockUserToken:(0,i.Fy)(s.mockUserToken,e.app.options.projectId);o=new B(t)}!function(e,t,n,i){e.repoInfo_=new G(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),i&&(e.authTokenProvider_=i)}(r,t,n,o)}(s,...e)}return s}(),Aw=function(t,n){const s="object"==typeof t?t:(0,e.Sx)(),r="string"==typeof t?t:n||"(default)",o=(0,e.j6)(s,"firestore").getImmediate({identifier:r});if(!o._initialized){const e=(0,i.yU)("firestore");e&&function(e,t,n,s={}){var r;const o=(e=um(e,fm))._getSettings(),a=`${t}:${n}`;if("firestore.googleapis.com"!==o.host&&o.host!==a&&ll("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),s.mockUserToken){let t,n;if("string"==typeof s.mockUserToken)t=s.mockUserToken,n=il.MOCK_USER;else{t=(0,i.Fy)(s.mockUserToken,null===(r=e._app)||void 0===r?void 0:r.options.projectId);const o=s.mockUserToken.sub||s.mockUserToken.user_id;if(!o)throw new gl(pl.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new il(o)}e._authCredentials=new vl(new _l(t,n))}}(o,...e)}return o}();null===window.localStorage.getItem("raichat-settings-available")&&(window.localStorage.setItem("raichat-settings-available","true"),window.localStorage.setItem("raichat-markdown","true"),window.localStorage.setItem("raichat-ngwords",JSON.stringify(["死ね"]))),void 0===window.localStorage.getItem("raichat-hide-checkmark")&&window.localStorage.setItem("raichat-hide-checkmark","false");var Nw=window.localStorage.getItem("raichat-markdown"),Rw=window.localStorage.getItem("raichat-hide-checkmark");function Pw(e){return"free"!=e.paid&&"false"===e.checkmarkState}function Dw(e,t){var n=document.getElementById("app-message-dialog"),i=document.getElementById("app-message-dialog-content"),s=document.getElementById("app-message-dialog-title"),r=document.getElementById("app-message-dialog-description");null!==n&&null!==i&&null!==s&&null!==r&&(i.classList.add("is-active"),s.innerHTML=e,r.innerHTML=t,n.showModal())}setTimeout((function(){Tw=0}),15e3),yw.style.display="none",null===(fw=document.querySelector("body"))||void 0===fw||fw.addEventListener("click",(function(e){return mw(this,void 0,void 0,(function(){var t,n,i,s,r,o,a,c,l,h,u=this;return _w(this,(function(d){switch(d.label){case 0:if(e.target instanceof HTMLAnchorElement){if("raic.tech"==e.target.hostname||"10.249.176.251"==e.target.hostname||"www.patreon.com"==e.target.hostname||"javascript:void(0)"===e.target.href||""===e.target.href)return[2];if(e.preventDefault(),e.target.href.includes("javascript:"))return e.target.href.includes("javascript:void(0)")||alert("悪意のあるリンクを開こうとしました。このリンクは、UpLauncherのサイト外です。\nWebは便利ですが、危険なリンクもあります。"),[2];confirm("リンクを開きますか？このリンクは、UpLauncherのサイト外です。\nWebは便利ですが、このリンクは危険な可能性もあります。(新しいタブで開きます)")&&window.open(e.target.href,"_blank")}return"owner"!=Iw?[3,2]:e.target instanceof HTMLElement&&e.target.classList.contains("ban")&&(t=null===(a=null===(o=null===(r=e.target.parentElement)||void 0===r?void 0:r.parentElement)||void 0===o?void 0:o.parentElement)||void 0===a?void 0:a.getAttribute("data-userId"))&&confirm("このユーザーをBANしますか？")?[4,s_(_m(Aw,"raichat-user-status"+t),{banned:!0})]:[3,2];case 1:d.sent(),d.label=2;case 2:return e.target instanceof HTMLElement&&(e.target.classList.contains("favorite")&&(n=null===(h=null===(l=null===(c=e.target.parentElement)||void 0===c?void 0:c.parentElement)||void 0===l?void 0:l.parentElement)||void 0===h?void 0:h.getAttribute("data-messageId")))?(i=Is(kw),s=document.getElementsByTagName("body")[0].dataset.user,[4,e_(ym(Aw,"raichat-message-status",n,s||"null","data")).then((function(t){return mw(u,void 0,void 0,(function(){var r=this;return _w(this,(function(o){if(t.exists()){if(t.data().isFavorited)return Dw("いいね","このメッセージを既にいいねしています。"),[2]}else Ss(Ts(i,"messages/"+n)).then((function(t){return mw(r,void 0,void 0,(function(){var i,r,o,a;return _w(this,(function(c){switch(c.label){case 0:return Cs(Is(kw,"messages/"+n),{username:t.val().username,paid:t.val().paid,uid:t.val().uid,id:t.val().id,time:t.val().time,message:t.val().message,favorite:t.val().favorite?t.val().favorite+1:1}),e.target instanceof HTMLElement&&(i=null===(a=null===(o=null===(r=e.target.parentElement)||void 0===r?void 0:r.parentElement)||void 0===o?void 0:o.parentElement)||void 0===a?void 0:a.querySelector(".favoriteText"))&&(i.textContent=t.val().favorite?t.val().favorite+1:1),[4,i_(ym(Aw,"raichat-message-status",n,s||"null","data"),{isFavorited:!0})];case 1:return c.sent(),[2]}}))}))}));return[2]}))}))}))]):[3,4];case 3:d.sent(),d.label=4;case 4:return e.target instanceof HTMLElement&&(e.target.classList.contains("verified")?Dw("認証されたユーザー",'<i class="fas fa-check color-blue"></i>このユーザーはStandard以上のプランを購入しているため、認証されています。'):e.target.classList.contains("owner")?Dw("認証されたユーザー",'<i class="fas fa-screwdriver-wrench color-gold"></i>このユーザーはオーナー権限を持っているため、認証されています。'):e.target.classList.contains("student")&&Dw("認証されたユーザー",'<i class="fas fa-user color-green"></i>このユーザーは学生のため、認証されています。')),[2]}}))}))})),function(e,t,n,s){(0,i.Ku)(e).onAuthStateChanged(t,n,s)}(Sw,(function(e){return mw(void 0,void 0,void 0,(function(){var t,n,i;return _w(this,(function(s){switch(s.label){case 0:return null===e?(window.location.href="/auth/signin.html",[2]):null===ww?(console.log("[NullCheck]: #timeline is null"),[2]):(document.getElementsByTagName("body")[0].dataset.user=e.uid,[4,e_(ym(Aw,"patreonlinkstatus",e.uid))]);case 1:return(t=s.sent()).exists()&&(Iw=t.data().plan,Cw=t.data().isStudent),[4,e_(ym(Aw,"raichat-user-status",e.uid))];case 2:return!1!==(n=s.sent()).exists()?[3,4]:[4,i_(ym(Aw,"raichat-user-status",null==e?void 0:e.uid),{banned:!1})];case 3:return s.sent(),[3,6];case 4:return[4,i_(ym(Aw,"raichat-user-status",null==e?void 0:e.uid),{username:e.displayName,checkmarkState:Rw,paid:Iw,isStudent:Cw,banned:n.data().banned})];case 5:s.sent(),1==n.data().banned&&(window.location.href="/chat/app/banned.html"),s.label=6;case 6:return i=Is(kw,"messages/"),vw.addEventListener("click",(function(){!function(e,t){mw(this,void 0,void 0,(function(){var n,i;return _w(this,(function(s){switch(s.label){case 0:return n=["死ね","殺す","殺害","アホ","バカ","カス","ころす","しね","あほ","アダルト","エロ","セックス","sex","fuck","マン凸","チン凸","pornhub.com","xvideos.com"],null===t||null===bw?[2]:""===e?(bw.classList.remove("is-hidden"),bw.textContent="メッセージを入力してください",[2]):[4,n_(_m(Aw,"raichat-user-status"+t.uid))];case 1:return s.sent().forEach((function(e){1==e.data().banned&&(window.location.href="/chat/app/banned.html")})),e.length>100?(bw.classList.remove("is-hidden"),bw.textContent="メッセージは100文字以内で入力してください",[2]):n.some((function(t){return e.includes(t)}))?(bw.classList.remove("is-hidden"),bw.textContent="NGワードが含まれています","owner"==Iw?[3,3]:[4,s_(_m(Aw,"raichat-user-status"+(null==t?void 0:t.uid)),{banned:!0})]):[3,5];case 2:return s.sent(),window.location.reload(),[3,4];case 3:bw.textContent="NGワードが含まれていますが、オーナー権限がアクティブなためBANされません。",s.label=4;case 4:return[2];case 5:return Tw>=3?(bw.classList.remove("is-hidden"),bw.textContent="連続でメッセージを送信することはできません",[2]):(i=Date.now(),Cs(Is(kw,"messages/"+i+"-"+t.uid),{username:t.displayName,paid:Rw?"free":Cw?"student":Iw,uid:t.uid,id:i+"-"+t.uid,time:(new Date).toLocaleString(),message:e,favorite:0}).then((function(){Tw++})),[2])}}))}))}(document.getElementById("app-message").value,e)})),0,function(e,t,n,i){Ns(e,"child_added",t,n,i)}(i,(function(t){return mw(void 0,void 0,void 0,(function(){var n,i,s,r,o,a;return _w(this,(function(c){switch(c.label){case 0:return n=t.val(),(i=document.createElement("li")).setAttribute("data-messageId",n.id||"undefined"),i.setAttribute("data-userId",n.uid||"undefined"),i.classList.add((null==e?void 0:e.displayName)===n.username?"sent":"receive"),s=document.createElement("span"),r=(r=(r=(r=(r=(r=(r=n.message).replace(/&/g,"&amp;")).replace(/"/g,"&quot;")).replace(/'/g,"&#x27;")).replace(/</g,"&lt;")).replace(/>/g,"&gt;")).replace(/\n/g,"<br>"),"true"===Nw&&(r=function(e){var t=/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;return e.includes("[url]")||e.includes("img")?e:e.replace(t,"<i class='fa fa-globe'>&nbsp;</i><a target='_blank' href='$1'>$1</a>")}(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=r.replace(/\[b\]/g,"<b>")).replace(/\[\/b\]/g,"</b>")).replace(/\[i\]/g,"<i>")).replace(/\[\/i\]/g,"</i>")).replace(/\[u\]/g,"<u>")).replace(/\[\/u\]/g,"</u>")).replace(/\[s\]/g,"<s>")).replace(/\[\/s\]/g,"</s>")).replace(/\[icon\]/g,'<i class="fas fa-')).replace(/\[\/icon\]/g,'"></i>')),r=(r=r.replace(/\[url\]/g,'<a href="')).replace(/\[\/url\]/g,'"><i style="color: white;" class="fa fa-globe">&nbsp;</i>URL</a>'),"free"!=n.paid&&(r=(r=(r=(r=r.replace(/\[img\]/g,'<br><img src="')).replace(/\[\/img\]/g,'" onload="this.width=500;this.onload=null;">')).replace(/\[color=#([0-9a-fA-F]{6})\]/g,'<span style="color: #$1 !important">')).replace(/\[\/color\]/g,"</span>"))),[4,e_(ym(Aw,"raichat-user-status",n.uid))];case 1:if(!0===(o=c.sent()).exists()){if(a=o.data(),1==o.data().banned)return i.remove(),yw.style.display="",[2];i.classList.add(Pw(a)?"owner"==a.paid?"owner":a.isStudent?"student":"verified":"free"),s.innerHTML="<span>".concat(a.username," ").concat(Pw(a)?"owner"==a.paid?'<i class="fas fa-screwdriver-wrench owner color-gold"></i>':a.isStudent?'<i class="fas fa-user student color-green"></i>':'<i class="fas fa-check verified color-blue"></i>':"","(").concat(n.time,")").concat("owner"==Iw?'&nbsp;<i class="far fa-hammer ban color-gold"></i>&nbsp;':"",' <i class="far fa-heart favorite color-red"></i>&nbsp; <span class="favoriteText">').concat(n.favorite,"</span>: ").concat(r,"</span>")}return i.appendChild(s),ww.insertBefore(i,ww.firstChild),yw.style.display="",[2]}}))}))})),[2]}}))}))})),null===(pw=document.getElementById("searchInput"))||void 0===pw||pw.addEventListener("keyup",(function(){var e,t,n,i=this.value.toLowerCase(),s=null===(e=document.getElementById("app-timeline"))||void 0===e?void 0:e.getElementsByTagName("li");if(null!=s){var r=i.includes(" [premium]"),o=i.includes(" [student]");r&&(i=i.replace(" [premium]","")),o&&(i=i.replace(" [student]",""));for(var a=0;a<s.length;a++){if(null===s[a])return;null==Ew||Ew.classList.add("is-hidden");var c=null===(n=null===(t=s[a])||void 0===t?void 0:t.textContent)||void 0===n?void 0:n.toLowerCase();null==c||c.replace(/\&lt;/g,""),null==c||c.replace(/\&gt;/g,""),c&&c.indexOf(i)>-1?r?s[a].classList.contains("verified")||s[a].classList.contains("owner")?s[a].style.display="":s[a].style.display="none":o?s[a].classList.contains("student")?s[a].style.display="":s[a].style.display="none":(s[a].style.display="",null==Ew||Ew.classList.add("is-hidden")):(s[a].style.display="none",null==Ew||Ew.classList.remove("is-hidden"))}}}))})()})();