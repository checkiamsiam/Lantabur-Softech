if(!self.define){let e,s={};const n=(n,t)=>(n=new URL(n+".js",t).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(t,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const l=e=>n(e,i),r={module:{uri:i},exports:c,require:l};s[i]=Promise.all(t.map((e=>r[e]||l(e)))).then((e=>(a(...e),c)))}}define(["./workbox-9b4d2a02"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"981baf8ceebba6f0a3e3af7ffe8f8b66"},{url:"/_next/static/Af9Ue0H8BlFjXQwnq4xyl/_buildManifest.js",revision:"d7af164afef0e5b53876e60fab863dba"},{url:"/_next/static/Af9Ue0H8BlFjXQwnq4xyl/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/254-6946775b9d000b8b.js",revision:"Af9Ue0H8BlFjXQwnq4xyl"},{url:"/_next/static/chunks/265-40feed67b1790282.js",revision:"Af9Ue0H8BlFjXQwnq4xyl"},{url:"/_next/static/chunks/30-5b97517e7df8c311.js",revision:"Af9Ue0H8BlFjXQwnq4xyl"},{url:"/_next/static/chunks/749-214fff46391872b3.js",revision:"Af9Ue0H8BlFjXQwnq4xyl"},{url:"/_next/static/chunks/864-b5c3e4ac2f474f0a.js",revision:"Af9Ue0H8BlFjXQwnq4xyl"},{url:"/_next/static/chunks/app/(layout)/layout-2aa7413094151f97.js",revision:"Af9Ue0H8BlFjXQwnq4xyl"},{url:"/_next/static/chunks/app/(layout)/login/page-50e5032e44931bf8.js",revision:"Af9Ue0H8BlFjXQwnq4xyl"},{url:"/_next/static/chunks/app/(layout)/privet/page-5174c2bc2d1a7166.js",revision:"Af9Ue0H8BlFjXQwnq4xyl"},{url:"/_next/static/chunks/app/layout-05edebc8f74bab80.js",revision:"Af9Ue0H8BlFjXQwnq4xyl"},{url:"/_next/static/chunks/app/not-found-4ceeb6ee22002214.js",revision:"Af9Ue0H8BlFjXQwnq4xyl"},{url:"/_next/static/chunks/app/page-9d8ef6c3e48875ff.js",revision:"Af9Ue0H8BlFjXQwnq4xyl"},{url:"/_next/static/chunks/fd9d1056-f2977c99ed3d1035.js",revision:"Af9Ue0H8BlFjXQwnq4xyl"},{url:"/_next/static/chunks/framework-43665103d101a22d.js",revision:"Af9Ue0H8BlFjXQwnq4xyl"},{url:"/_next/static/chunks/main-app-4ed1afe795a2f67c.js",revision:"Af9Ue0H8BlFjXQwnq4xyl"},{url:"/_next/static/chunks/main-dd593277e936a295.js",revision:"Af9Ue0H8BlFjXQwnq4xyl"},{url:"/_next/static/chunks/pages/_app-6ca4a4ec31e39f3d.js",revision:"Af9Ue0H8BlFjXQwnq4xyl"},{url:"/_next/static/chunks/pages/_error-9de0d1f4f4d1fcb4.js",revision:"Af9Ue0H8BlFjXQwnq4xyl"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-8ccc6abead43a99b.js",revision:"Af9Ue0H8BlFjXQwnq4xyl"},{url:"/_next/static/css/f04b2633adc281d1.css",revision:"f04b2633adc281d1"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
