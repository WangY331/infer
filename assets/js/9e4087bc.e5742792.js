"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7028],{6140:(e,r,a)=>{a.r(r),a.d(r,{default:()=>o});a(1504);var s=a(867),t=a(4357),i=a(5008),c=a(7468),n=a(6448),l=a(7624);function h(e){let{year:r,posts:a}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.c,{as:"h3",id:r,children:r}),(0,l.jsx)("ul",{children:a.map((e=>(0,l.jsx)("li",{children:(0,l.jsxs)(s.c,{to:e.metadata.permalink,children:[e.metadata.formattedDate," - ",e.metadata.title]})},e.metadata.date)))})]})}function d(e){let{years:r}=e;return(0,l.jsx)("section",{className:"margin-vert--lg",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:r.map(((e,r)=>(0,l.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,l.jsx)(h,{...e})},r)))})})})}function o(e){let{archive:r}=e;const a=(0,t.G)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),s=(0,t.G)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),h=function(e){const r=e.reduce(((e,r)=>{var a;const s=r.metadata.date.split("-")[0],t=null!=(a=e.get(s))?a:[];return e.set(s,[r,...t])}),new Map);return Array.from(r,(e=>{let[r,a]=e;return{year:r,posts:a}}))}(r.blogPosts);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.U7,{title:a,description:s}),(0,l.jsxs)(c.c,{children:[(0,l.jsx)("header",{className:"hero hero--primary",children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)(n.c,{as:"h1",className:"hero__title",children:a}),(0,l.jsx)("p",{className:"hero__subtitle",children:s})]})}),(0,l.jsx)("main",{children:h.length>0&&(0,l.jsx)(d,{years:h})})]})]})}}}]);