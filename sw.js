if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const t=e=>n(e,o),l={module:{uri:o},exports:c,require:t};i[o]=Promise.all(r.map((e=>l[e]||t(e)))).then((e=>(s(...e),c)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-_WwGPFrn.js",revision:null},{url:"assets/index-DRQo3kaA.css",revision:null},{url:"index.html",revision:"c8d9a5d83e100e369bf5c9505b72978f"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"favicon.ico",revision:"35d9fa32784077d3d89bee5e0099055a"},{url:"pwa-64x64.png",revision:"794cea0a3ab86ff808e2669ad687334c"},{url:"pwa-192x192.png",revision:"9a8a427e27a83a2e06a98033bc61b2e8"},{url:"pwa-512x512.png",revision:"9c2dc3c34641017047cbb1ad6f226e51"},{url:"maskable-icon-512x512.png",revision:"7f260552069750ca8e96a252ef7e26c5"},{url:"manifest.webmanifest",revision:"c56597b5562d76b2c922c2db26158b12"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
