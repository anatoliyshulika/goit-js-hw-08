(()=>{"use strict";var e,r,n,t,o,a,i,c={258:(e,r,n)=>{n(950);var t=n(486),o={email:"",message:""},a=function(e){return document.querySelector(e)},i=document.querySelector(".feedback-form");i.addEventListener("input",t.throttle((function(e){"email"===e.target.name&&""!==e.target.value&&(o.email=e.target.value),"message"===e.target.name&&""!==e.target.value&&(o.message=e.target.value),localStorage.setItem("feedback-form-state",JSON.stringify(o))}),500)),i.addEventListener("submit",(function(e){if(e.preventDefault(),localStorage.getItem("feedback-form-state")){var r=JSON.parse(localStorage.getItem("feedback-form-state"));console.log(r),localStorage.removeItem("feedback-form-state"),a('[name="email"]').value="",a('[name="message"]').textContent=""}})),window.addEventListener("load",(function(){if(localStorage.getItem("feedback-form-state")){var e=JSON.parse(localStorage.getItem("feedback-form-state")),r=e.email,n=e.message;o.email=r,o.message=n,""!==r&&(a('[name="email"]').value=r),""!==n&&(a('[name="message"]').textContent=n)}}))},950:(e,r,n)=>{var t=n(783)(e.id,{locals:!1});e.hot.dispose(t),e.hot.accept(void 0,t)}},d={};function l(e){var r=d[e];if(void 0!==r){if(void 0!==r.error)throw r.error;return r.exports}var n=d[e]={id:e,loaded:!1,exports:{}};try{var t={id:e,module:n,factory:c[e],require:l};l.i.forEach((function(e){e(t)})),n=t.module,t.factory.call(n.exports,n,n.exports,t.require)}catch(e){throw n.error=e,e}return n.loaded=!0,n.exports}l.m=c,l.c=d,l.i=[],e=[],l.O=(r,n,t,o)=>{if(!n){var a=1/0;for(s=0;s<e.length;s++){for(var[n,t,o]=e[s],i=!0,c=0;c<n.length;c++)(!1&o||a>=o)&&Object.keys(l.O).every((e=>l.O[e](n[c])))?n.splice(c--,1):(i=!1,o<a&&(a=o));if(i){e.splice(s--,1);var d=t();void 0!==d&&(r=d)}}return r}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[n,t,o]},l.hu=e=>e+"."+l.h()+".hot-update.js",l.miniCssF=e=>{},l.hmrF=()=>"03-feedback."+l.h()+".hot-update.json",l.h=()=>"3cd8ed681b7c78303386",l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r={},l.l=(e,n,t,o)=>{if(r[e])r[e].push(n);else{var a,i;if(void 0!==t)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var s=c[d];if(s.getAttribute("src")==e){a=s;break}}a||(i=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,l.nc&&a.setAttribute("nonce",l.nc),a.src=e),r[e]=[n];var u=(n,t)=>{a.onerror=a.onload=null,clearTimeout(f);var o=r[e];if(delete r[e],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(t))),n)return n(t)},f=setTimeout(u.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=u.bind(null,a.onerror),a.onload=u.bind(null,a.onload),i&&document.head.appendChild(a)}},l.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e,r,n,t={},o=l.c,a=[],i=[],c="idle",d=0,s=[];function u(e){c=e;for(var r=[],n=0;n<i.length;n++)r[n]=i[n].call(null,e);return Promise.all(r)}function f(){0==--d&&u("ready").then((function(){if(0===d){var e=s;s=[];for(var r=0;r<e.length;r++)e[r]()}}))}function p(e){if("idle"!==c)throw new Error("check() is only allowed in idle status");return u("check").then(l.hmrM).then((function(n){return n?u("prepare").then((function(){var t=[];return r=[],Promise.all(Object.keys(l.hmrC).reduce((function(e,o){return l.hmrC[o](n.c,n.r,n.m,e,r,t),e}),[])).then((function(){return r=function(){return e?m(e):u("ready").then((function(){return t}))},0===d?r():new Promise((function(e){s.push((function(){e(r())}))}));var r}))})):u(v()?"ready":"idle").then((function(){return null}))}))}function h(e){return"ready"!==c?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status (state: "+c+")")})):m(e)}function m(e){e=e||{},v();var t=r.map((function(r){return r(e)}));r=void 0;var o=t.map((function(e){return e.error})).filter(Boolean);if(o.length>0)return u("abort").then((function(){throw o[0]}));var a=u("dispose");t.forEach((function(e){e.dispose&&e.dispose()}));var i,c=u("apply"),d=function(e){i||(i=e)},l=[];return t.forEach((function(e){if(e.apply){var r=e.apply(d);if(r)for(var n=0;n<r.length;n++)l.push(r[n])}})),Promise.all([a,c]).then((function(){return i?u("fail").then((function(){throw i})):n?m(e).then((function(e){return l.forEach((function(r){e.indexOf(r)<0&&e.push(r)})),e})):u("idle").then((function(){return l}))}))}function v(){if(n)return r||(r=[]),Object.keys(l.hmrI).forEach((function(e){n.forEach((function(n){l.hmrI[e](n,r)}))})),n=void 0,!0}l.hmrD=t,l.i.push((function(s){var m,v,g,y,b=s.module,E=function(r,n){var t=o[n];if(!t)return r;var i=function(i){if(t.hot.active){if(o[i]){var c=o[i].parents;-1===c.indexOf(n)&&c.push(n)}else a=[n],e=i;-1===t.children.indexOf(i)&&t.children.push(i)}else console.warn("[HMR] unexpected require("+i+") from disposed module "+n),a=[];return r(i)},l=function(e){return{configurable:!0,enumerable:!0,get:function(){return r[e]},set:function(n){r[e]=n}}};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&"e"!==s&&Object.defineProperty(i,s,l(s));return i.e=function(e){return function(e){switch(c){case"ready":u("prepare");case"prepare":return d++,e.then(f,f),e;default:return e}}(r.e(e))},i}(s.require,s.id);b.hot=(m=s.id,v=b,y={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:g=e!==m,_requireSelf:function(){a=v.parents.slice(),e=g?void 0:m,l(m)},active:!0,accept:function(e,r,n){if(void 0===e)y._selfAccepted=!0;else if("function"==typeof e)y._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var t=0;t<e.length;t++)y._acceptedDependencies[e[t]]=r||function(){},y._acceptedErrorHandlers[e[t]]=n;else y._acceptedDependencies[e]=r||function(){},y._acceptedErrorHandlers[e]=n},decline:function(e){if(void 0===e)y._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var r=0;r<e.length;r++)y._declinedDependencies[e[r]]=!0;else y._declinedDependencies[e]=!0},dispose:function(e){y._disposeHandlers.push(e)},addDisposeHandler:function(e){y._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=y._disposeHandlers.indexOf(e);r>=0&&y._disposeHandlers.splice(r,1)},invalidate:function(){switch(this._selfInvalidated=!0,c){case"idle":r=[],Object.keys(l.hmrI).forEach((function(e){l.hmrI[e](m,r)})),u("ready");break;case"ready":Object.keys(l.hmrI).forEach((function(e){l.hmrI[e](m,r)}));break;case"prepare":case"check":case"dispose":case"apply":(n=n||[]).push(m)}},check:p,apply:h,status:function(e){if(!e)return c;i.push(e)},addStatusHandler:function(e){i.push(e)},removeStatusHandler:function(e){var r=i.indexOf(e);r>=0&&i.splice(r,1)},data:t[m]},e=void 0,y),b.parents=a,b.children=[],a=[],s.require=E})),l.hmrC={},l.hmrI={}})(),(()=>{var e;l.g.importScripts&&(e=l.g.location+"");var r=l.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var n=r.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),l.p=e})(),n=(e,r,n,t)=>{var o=document.createElement("link");return o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=a=>{if(o.onerror=o.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),c=a&&a.target&&a.target.href||r,d=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=i,d.request=c,o.parentNode.removeChild(o),t(d)}},o.href=r,document.head.appendChild(o),o},t=(e,r)=>{for(var n=document.getElementsByTagName("link"),t=0;t<n.length;t++){var o=(i=n[t]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===r))return i}var a=document.getElementsByTagName("style");for(t=0;t<a.length;t++){var i;if((o=(i=a[t]).getAttribute("data-href"))===e||o===r)return i}},o=[],a=[],i=e=>({dispose:()=>{for(var e=0;e<o.length;e++){var r=o[e];r.parentNode&&r.parentNode.removeChild(r)}o.length=0},apply:()=>{for(var e=0;e<a.length;e++)a[e].rel="stylesheet";a.length=0}}),l.hmrC.miniCss=(e,r,c,d,s,u)=>{s.push(i),e.forEach((e=>{var r=l.miniCssF(e),i=l.p+r,c=t(r,i);c&&d.push(new Promise(((r,t)=>{var d=n(e,i,(()=>{d.as="style",d.rel="preload",r()}),t);o.push(c),a.push(d)})))}))},(()=>{var e,r,n,t,o,a=l.hmrS_jsonp=l.hmrS_jsonp||{977:0},i={};function c(r,n){return e=n,new Promise(((e,n)=>{i[r]=e;var t=l.p+l.hu(r),o=new Error;l.l(t,(e=>{if(i[r]){i[r]=void 0;var t=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;o.message="Loading hot update chunk "+r+" failed.\n("+t+": "+a+")",o.name="ChunkLoadError",o.type=t,o.request=a,n(o)}}))}))}function d(e){function i(e){for(var r=[e],n={},t=r.map((function(e){return{chain:[e],id:e}}));t.length>0;){var o=t.pop(),a=o.id,i=o.chain,d=l.c[a];if(d&&(!d.hot._selfAccepted||d.hot._selfInvalidated)){if(d.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:a};if(d.hot._main)return{type:"unaccepted",chain:i,moduleId:a};for(var s=0;s<d.parents.length;s++){var u=d.parents[s],f=l.c[u];if(f){if(f.hot._declinedDependencies[a])return{type:"declined",chain:i.concat([u]),moduleId:a,parentId:u};-1===r.indexOf(u)&&(f.hot._acceptedDependencies[a]?(n[u]||(n[u]=[]),c(n[u],[a])):(delete n[u],r.push(u),t.push({chain:i.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:r,outdatedDependencies:n}}function c(e,r){for(var n=0;n<r.length;n++){var t=r[n];-1===e.indexOf(t)&&e.push(t)}}l.f&&delete l.f.jsonpHmr,r=void 0;var d={},s=[],u={},f=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var p in n)if(l.o(n,p)){var h,m=n[p],v=!1,g=!1,y=!1,b="";switch((h=m?i(p):{type:"disposed",moduleId:p}).chain&&(b="\nUpdate propagation: "+h.chain.join(" -> ")),h.type){case"self-declined":e.onDeclined&&e.onDeclined(h),e.ignoreDeclined||(v=new Error("Aborted because of self decline: "+h.moduleId+b));break;case"declined":e.onDeclined&&e.onDeclined(h),e.ignoreDeclined||(v=new Error("Aborted because of declined dependency: "+h.moduleId+" in "+h.parentId+b));break;case"unaccepted":e.onUnaccepted&&e.onUnaccepted(h),e.ignoreUnaccepted||(v=new Error("Aborted because "+p+" is not accepted"+b));break;case"accepted":e.onAccepted&&e.onAccepted(h),g=!0;break;case"disposed":e.onDisposed&&e.onDisposed(h),y=!0;break;default:throw new Error("Unexception type "+h.type)}if(v)return{error:v};if(g)for(p in u[p]=m,c(s,h.outdatedModules),h.outdatedDependencies)l.o(h.outdatedDependencies,p)&&(d[p]||(d[p]=[]),c(d[p],h.outdatedDependencies[p]));y&&(c(s,[h.moduleId]),u[p]=f)}n=void 0;for(var E,w=[],_=0;_<s.length;_++){var I=s[_],k=l.c[I];k&&(k.hot._selfAccepted||k.hot._main)&&u[I]!==f&&!k.hot._selfInvalidated&&w.push({module:I,require:k.hot._requireSelf,errorHandler:k.hot._selfAccepted})}return{dispose:function(){var e;t.forEach((function(e){delete a[e]})),t=void 0;for(var r,n=s.slice();n.length>0;){var o=n.pop(),i=l.c[o];if(i){var c={},u=i.hot._disposeHandlers;for(_=0;_<u.length;_++)u[_].call(null,c);for(l.hmrD[o]=c,i.hot.active=!1,delete l.c[o],delete d[o],_=0;_<i.children.length;_++){var f=l.c[i.children[_]];f&&(e=f.parents.indexOf(o))>=0&&f.parents.splice(e,1)}}}for(var p in d)if(l.o(d,p)&&(i=l.c[p]))for(E=d[p],_=0;_<E.length;_++)r=E[_],(e=i.children.indexOf(r))>=0&&i.children.splice(e,1)},apply:function(r){for(var n in u)l.o(u,n)&&(l.m[n]=u[n]);for(var t=0;t<o.length;t++)o[t](l);for(var a in d)if(l.o(d,a)){var i=l.c[a];if(i){E=d[a];for(var c=[],f=[],p=[],h=0;h<E.length;h++){var m=E[h],v=i.hot._acceptedDependencies[m],g=i.hot._acceptedErrorHandlers[m];if(v){if(-1!==c.indexOf(v))continue;c.push(v),f.push(g),p.push(m)}}for(var y=0;y<c.length;y++)try{c[y].call(null,E)}catch(n){if("function"==typeof f[y])try{f[y](n,{moduleId:a,dependencyId:p[y]})}catch(t){e.onErrored&&e.onErrored({type:"accept-error-handler-errored",moduleId:a,dependencyId:p[y],error:t,originalError:n}),e.ignoreErrored||(r(t),r(n))}else e.onErrored&&e.onErrored({type:"accept-errored",moduleId:a,dependencyId:p[y],error:n}),e.ignoreErrored||r(n)}}}for(var b=0;b<w.length;b++){var _=w[b],I=_.module;try{_.require(I)}catch(n){if("function"==typeof _.errorHandler)try{_.errorHandler(n,{moduleId:I,module:l.c[I]})}catch(t){e.onErrored&&e.onErrored({type:"self-accept-error-handler-errored",moduleId:I,error:t,originalError:n}),e.ignoreErrored||(r(t),r(n))}else e.onErrored&&e.onErrored({type:"self-accept-errored",moduleId:I,error:n}),e.ignoreErrored||r(n)}}return s}}}self.webpackHotUpdate=(r,t,a)=>{for(var c in t)l.o(t,c)&&(n[c]=t[c],e&&e.push(c));a&&o.push(a),i[r]&&(i[r](),i[r]=void 0)},l.hmrI.jsonp=function(e,r){n||(n={},o=[],t=[],r.push(d)),l.o(n,e)||(n[e]=l.m[e])},l.hmrC.jsonp=function(e,i,s,u,f,p){f.push(d),r={},t=i,n=s.reduce((function(e,r){return e[r]=!1,e}),{}),o=[],e.forEach((function(e){l.o(a,e)&&void 0!==a[e]?(u.push(c(e,p)),r[e]=!0):r[e]=!1})),l.f&&(l.f.jsonpHmr=function(e,n){r&&l.o(r,e)&&!r[e]&&(n.push(c(e)),r[e]=!0)})},l.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(l.p+l.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))},l.O.j=e=>0===a[e];var s=(e,r)=>{var n,t,[o,i,c]=r,d=0;if(o.some((e=>0!==a[e]))){for(n in i)l.o(i,n)&&(l.m[n]=i[n]);if(c)var s=c(l)}for(e&&e(r);d<o.length;d++)t=o[d],l.o(a,t)&&a[t]&&a[t][0](),a[t]=0;return l.O(s)},u=self.webpackChunk=self.webpackChunk||[];u.forEach(s.bind(null,0)),u.push=s.bind(null,u.push.bind(u))})();var s=l.O(void 0,[376],(()=>l(258)));s=l.O(s)})();
//# sourceMappingURL=03-feedback.395df65927093be3ed1e.js.map