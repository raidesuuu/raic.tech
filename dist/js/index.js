(()=>{"use strict";var n,t=(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});function e(){return window.location.href}function o(){return"0.0.7-beta"}var r=function(n){function e(t){return n.call(this,t)||this}return t(e,n),e}(Error);window.rai={getURL:e,getDomain:function(){return window.location.hostname},getProtocol:function(){return window.location.protocol},getUserId:function(){return window.localStorage.getItem("userId")},getPort:function(){return window.location.port},getPath:function(){return window.location.pathname},getHash:function(){return window.location.hash},getSearch:function(){return window.location.search},getOrigin:function(){return window.location.origin},getHostname:function(){return window.location.hostname},getVersion:o,getCode:function(){try{return window.location.href.split("?")[1].split("=")[1].split("&")[0]}catch(n){return null}},getPaidStatus:function(n){try{return(t=JSON.stringify(n)).includes('"id":"21880338"')?{type:"enhanced",id:n.data.id}:t.includes('"id": "10216194"')?{type:"premium",id:n.data.id}:t.includes('"id": "21880320"')?{type:"standard",id:n.data.id}:(console.log("free",t),{type:"free",id:n.data.id})}catch(e){var t=JSON.stringify(n);return console.log("free",t,e),{type:"free",id:n.data.id}}},moveToPanel:function(){window.location.href="/auth/panel/home.html"},NotLoggedError:r},window.addEventListener("DOMContentLoaded",(function(){console.info("[EventHandler : INFO (index.ts)] DOMContentLoaded event has been fired."),console.info("[EventHandler : INFO (index.ts)] Current Version: 0.0.7-beta"),console.info("[EventHandler : INFO (index.ts)] Page URL:"+e()),window.removeEventListener("DOMContentLoaded",(function(){console.info("[EventHandler : INFO (index.ts)] Removed DOMContentLoaded event listener.")}))}))})();