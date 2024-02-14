"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9198],{5164:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=t(7624),r=t(2172);const a={title:"Infer on Open Source Android Apps",author:"Dulma Churchill"},i=void 0,s={permalink:"/blog/2015/05/22/Infer-on-open-source-android-apps",source:"@site/blog/2015-05-22-Infer-on-open-source-android-apps.md",title:"Infer on Open Source Android Apps",description:"We ran Infer on a few open source Android apps with the aim of finding some bugs",date:"2015-05-22T00:00:00.000Z",formattedDate:"May 22, 2015",tags:[],readingTime:.63,hasTruncateMarker:!1,authors:[{name:"Dulma Churchill"}],frontMatter:{title:"Infer on Open Source Android Apps",author:"Dulma Churchill"},unlisted:!1,prevItem:{title:"Collaboration with Spotify",permalink:"/blog/2016/03/17/collaboration-with-spotify"}},d={authorsImageUrls:[void 0]},c=[];function l(e){const n={a:"a",p:"p",...(0,r.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"We ran Infer on a few open source Android apps with the aim of finding some bugs\nand getting them fixed. Some of those reports got indeed fixed."}),"\n",(0,o.jsxs)(n.p,{children:["One of the apps analyzed was the search engine\n",(0,o.jsx)(n.a,{href:"https://github.com/duckduckgo/android",children:"DuckDuckGo"}),". We found that many database\ncursors were not closed. Soon after we reported the issue, a developer\n",(0,o.jsx)(n.a,{href:"https://github.com/duckduckgo/android/commit/2c2d79f990dde0e44cdbecb1925b73c63bf9141d",children:"fixed it"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["We also analyzed the popular email client ",(0,o.jsx)(n.a,{href:"https://github.com/k9mail/k-9",children:"k-9"}),".\nWe found a file not closed leak and reported it. Interestingly, a developer\n",(0,o.jsx)(n.a,{href:"https://github.com/k9mail/k-9/commit/d538278be62687758c956af62ee47c53637d67d8",children:"fixed it"}),"\nby not writing some logging info to the file at all. So Infer helped them to\nsimplify their code."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://github.com/siacs/Conversations",children:"Conversations"})," is an open source\nXMPP/Jabber client for Android smart phones. We analyzed it as well and found a\nfile not closed leak, which was also\n",(0,o.jsx)(n.a,{href:"https://github.com/Flowdalic/MemorizingTrustManager/commit/190c57a9a8385f4726c817924b123438af6adc2f",children:"fixed"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},2172:(e,n,t)=>{t.d(n,{I:()=>s,M:()=>i});var o=t(1504);const r={},a=o.createContext(r);function i(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);