System.register(["./index-legacy-b82ae0a1.js","./keyboard-legacy-2e769551.js"],(function(e,t){"use strict";var n,o,i,r,s,a,d,l,c;return{setters:[e=>{n=e.h,o=e.j,i=e.e,r=e.f,s=e.k,a=e.l,d=e.m},e=>{l=e.K,c=e.a}],execute:function(){
/*!
       * (C) Ionic http://ionicframework.com - MIT License
       */
const t=new WeakMap,u=(e,n,o,i=0,r=!1)=>{t.has(e)!==o&&(o?m(e,n,i,r):f(e,n))},m=(e,n,o,i=!1)=>{const r=n.parentNode,s=n.cloneNode(!1);s.classList.add("cloned-input"),s.tabIndex=-1,i&&(s.disabled=!0),r.appendChild(s),t.set(e,s);const a="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",n.style.transform=`translate3d(${a}px,${o}px,0) scale(0)`},f=(e,n)=>{const o=t.get(e);o&&(t.delete(e),o.remove()),e.style.pointerEvents="",n.style.transform=""},v="input, textarea, [no-blur], [contenteditable]",p=(e,t,n,o)=>{const i=e.top,r=e.bottom,s=t.top,a=s+15,d=Math.min(t.bottom,o-n)-50-r,l=a-i,c=Math.round(d<0?-d:l>0?-l:0),u=Math.min(c,i-s),m=Math.abs(u)/.3;return{scrollAmount:u,scrollDuration:Math.min(400,Math.max(150,m)),scrollPadding:n,inputSafeY:4-(i-a)}},y="$ionPaddingTimer",w=(e,t,n)=>{const o=e[y];o&&clearTimeout(o),t>0?e.style.setProperty("--keyboard-offset",`${t}px`):e[y]=setTimeout((()=>{e.style.setProperty("--keyboard-offset","0px"),n&&n()}),120)},h=(e,t,n)=>{e.addEventListener("focusout",(()=>{t&&w(t,0,n)}),{once:!0})};let g=0;const b="data-ionic-skip-scroll-assist",S=e=>{document.activeElement!==e&&(e.setAttribute(b,"true"),e.focus())},E=async(e,t,n,o,i,r,l=!1)=>{if(!n&&!o)return;const c=((e,t,n)=>{var o;const i=null!==(o=e.closest("ion-item,[ion-item]"))&&void 0!==o?o:e;return p(i.getBoundingClientRect(),t.getBoundingClientRect(),n,e.ownerDocument.defaultView.innerHeight)})(e,n||o,i);if(n&&Math.abs(c.scrollAmount)<4)return S(t),void(r&&null!==n&&(w(n,g),h(t,n,(()=>g=0))));if(u(e,t,!0,c.inputSafeY,l),S(t),s((()=>e.click())),r&&n&&(g=c.scrollPadding,w(n,g)),"undefined"!=typeof window){let o;const i=async()=>{void 0!==o&&clearTimeout(o),window.removeEventListener("ionKeyboardDidShow",s),window.removeEventListener("ionKeyboardDidShow",i),n&&await d(n,0,c.scrollAmount,c.scrollDuration),u(e,t,!1,c.inputSafeY),S(t),r&&h(t,n,(()=>g=0))},s=()=>{window.removeEventListener("ionKeyboardDidShow",s),window.addEventListener("ionKeyboardDidShow",i)};if(n){const e=await a(n),r=e.scrollHeight-e.clientHeight;if(c.scrollAmount>r-e.scrollTop)return"password"===t.type?(c.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",s)):window.addEventListener("ionKeyboardDidShow",i),void(o=setTimeout(i,1e3))}i()}};e("startInputShims",(async(e,t)=>{const s=document,a="ios"===t,d="android"===t,m=e.getNumber("keyboardHeight",290),f=e.getBoolean("scrollAssist",!0),p=e.getBoolean("hideCaretOnScroll",a),y=e.getBoolean("inputBlurring",a),w=e.getBoolean("scrollPadding",!0),h=Array.from(s.querySelectorAll("ion-input, ion-textarea")),g=new WeakMap,S=new WeakMap,L=await l.getResizeMode(),D=async e=>{await new Promise((t=>i(e,t)));const t=e.shadowRoot||e,s=t.querySelector("input")||t.querySelector("textarea"),a=r(e),l=a?null:e.closest("ion-footer");if(s){if(a&&p&&!g.has(e)){const t=((e,t,i)=>{if(!i||!t)return()=>{};const r=n=>{var o;(o=t)===o.getRootNode().activeElement&&u(e,t,n)},s=()=>u(e,t,!1),a=()=>r(!0),d=()=>r(!1);return n(i,"ionScrollStart",a),n(i,"ionScrollEnd",d),t.addEventListener("blur",s),()=>{o(i,"ionScrollStart",a),o(i,"ionScrollEnd",d),t.removeEventListener("blur",s)}})(e,s,a);g.set(e,t)}if("date"!==s.type&&"datetime-local"!==s.type&&(a||l)&&f&&!S.has(e)){const t=((e,t,n,o,i,r,s,a=!1)=>{const d=r&&(void 0===s||s.mode===c.None),l=async()=>{t.hasAttribute(b)?t.removeAttribute(b):E(e,t,n,o,i,d,a)};return e.addEventListener("focusin",l,!0),()=>{e.removeEventListener("focusin",l,!0)}})(e,s,a,l,m,w,L,d);S.set(e,t)}}};y&&(()=>{let e=!0,t=!1;const o=document,i=()=>{t=!0},r=()=>{e=!0},s=n=>{if(t)return void(t=!1);const i=o.activeElement;if(!i)return;if(i.matches(v))return;const r=n.target;r!==i&&(r.matches(v)||r.closest(v)||(e=!1,setTimeout((()=>{e||i.blur()}),50)))};n(o,"ionScrollStart",i),o.addEventListener("focusin",r,!0),o.addEventListener("touchend",s,!1)})();for(const n of h)D(n);s.addEventListener("ionInputDidLoad",(e=>{D(e.detail)})),s.addEventListener("ionInputDidUnload",(e=>{(e=>{if(p){const t=g.get(e);t&&t(),g.delete(e)}if(f){const t=S.get(e);t&&t(),S.delete(e)}})(e.detail)}))}))}}}));
