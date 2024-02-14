"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1728],{9036:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var r=i(7624),o=i(2172);const s={title:"Infer | Need help?",id:"support"},t=void 0,l={id:"support",title:"Infer | Need help?",description:"Need help?",source:"@site/docs/support.md",sourceDirName:".",slug:"/support",permalink:"/docs/next/support",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Infer | Need help?",id:"support"}},a={},d=[{value:"Need help?",id:"need-help",level:2},{value:"GitHub issues",id:"github-issues",level:3},{value:"Updates",id:"updates",level:3},{value:"IRC",id:"irc",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Infer cannot analyze my CocoaPods project",id:"infer-cannot-analyze-my-cocoapods-project",level:3},{value:"<code>infer [options] -- &lt;build command&gt;</code> fails during a linking step",id:"infer-options----build-command-fails-during-a-linking-step",level:3},{value:"I get a compilation error involving PCH files when running Infer",id:"i-get-a-compilation-error-involving-pch-files-when-running-infer",level:3},{value:"Infer reports a &quot;Too many open files&quot; error",id:"infer-reports-a-too-many-open-files-error",level:3},{value:"I get a lint error when running Infer with gradle",id:"i-get-a-lint-error-when-running-infer-with-gradle",level:3},{value:"Running <code>infer [options] -- &lt;build command&gt;</code> fails with some other error",id:"running-infer-options----build-command-fails-with-some-other-error",level:3},{value:"I get errors compiling Infer",id:"i-get-errors-compiling-infer",level:3},{value:"My problem is not listed here",id:"my-problem-is-not-listed-here",level:3},{value:"FAQ",id:"faq",level:2},{value:"How do I suppress Infer warnings on a class or method?",id:"how-do-i-suppress-infer-warnings-on-a-class-or-method",level:3},{value:"Is Infer supported for Windows?",id:"is-infer-supported-for-windows",level:3},{value:"How does Infer compare to the Clang Static Analyzer?",id:"how-does-infer-compare-to-the-clang-static-analyzer",level:3},{value:"How does Infer compare to Android linters and Findbugs?",id:"how-does-infer-compare-to-android-linters-and-findbugs",level:3}];function c(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"need-help",children:"Need help?"}),"\n",(0,r.jsx)(n.p,{children:"Do not hesitate to ask questions using the following channels, or to submit pull\nrequest!"}),"\n",(0,r.jsx)(n.h3,{id:"github-issues",children:"GitHub issues"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.a,{href:"https://github.com/facebook/Infer/issues",children:"GitHub issues"})," page is a good\nplace to ask questions, find answers, and report issues."]}),"\n",(0,r.jsxs)(n.p,{children:["Please include as many details as possible when submitting a GitHub issue. If\nyou are able to run Infer, please include the contents of\n",(0,r.jsx)(n.code,{children:"infer-out/toplevel.log"})," in your report. If not, please include at least your\noperating system and the version of Infer that you are using."]}),"\n",(0,r.jsx)(n.h3,{id:"updates",children:"Updates"}),"\n",(0,r.jsxs)(n.p,{children:["Keep up to date with the latest Infer news on our\n",(0,r.jsx)(n.a,{href:"https://www.facebook.com/inferstaticanalyzer/",children:"Facebook page"})," and our\n",(0,r.jsx)(n.a,{href:"https://twitter.com/fbinfer",children:"Twitter account"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"irc",children:"IRC"}),"\n",(0,r.jsxs)(n.p,{children:["Our IRC channel is ",(0,r.jsx)(n.a,{href:"irc://irc.libera.chat/infer",children:(0,r.jsx)(n.code,{children:"#infer"})})," on ",(0,r.jsx)(n.a,{href:"https://libera.chat/",children:"Libera Chat"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,r.jsx)(n.h3,{id:"infer-cannot-analyze-my-cocoapods-project",children:"Infer cannot analyze my CocoaPods project"}),"\n",(0,r.jsx)(n.p,{children:"In the presence of CocoaPods, you should use xcworkspace and not xcodeproj in\nthe compilation command that you supply to Infer. Here is an example you can\nadapt to your project:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"infer run -- xcodebuild -workspace HelloWorld.xcworkspace -scheme HelloWorld\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"infer-options----build-command-fails-during-a-linking-step",children:[(0,r.jsx)(n.code,{children:"infer [options] -- <build command>"})," fails during a linking step"]}),"\n",(0,r.jsxs)(n.p,{children:["The linker will sometimes not work if files have been compiled using a different\ncompiler, such as the one Infer uses ",(0,r.jsx)(n.a,{href:"/docs/next/infer-workflow",children:"under the hood"})," to\nanalyze your files."]}),"\n",(0,r.jsxs)(n.p,{children:["A workaround consists in setting the ",(0,r.jsx)(n.code,{children:"LD"})," environment variable to a dummy\nlinker, for instance:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"LD=/bin/true infer [options] -- <build command>\n"})}),"\n",(0,r.jsx)(n.h3,{id:"i-get-a-compilation-error-involving-pch-files-when-running-infer",children:"I get a compilation error involving PCH files when running Infer"}),"\n",(0,r.jsxs)(n.p,{children:["For instance,\n",(0,r.jsx)(n.code,{children:"error: PCH file uses an older PCH format that is no longer supported"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["This is a ",(0,r.jsx)(n.a,{href:"https://github.com/facebook/infer/issues/96",children:"known issue"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Please run Infer with the following environment variable setting:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"GCC_PRECOMPILE_PREFIX_HEADER=NO\n"})}),"\n",(0,r.jsx)(n.h3,{id:"infer-reports-a-too-many-open-files-error",children:'Infer reports a "Too many open files" error'}),"\n",(0,r.jsx)(n.p,{children:"The maximum number of files a program can simultaneously hold open is a bit low\non MacOs. You can increase the limit by running these commands for example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sysctl -w kern.maxfiles=20480\nsysctl -w kern.maxfilesperproc=22480\nulimit -S -n 2048\n"})}),"\n",(0,r.jsx)(n.p,{children:"Note that the settings will be reset at the next reboot."}),"\n",(0,r.jsxs)(n.p,{children:["See also ",(0,r.jsx)(n.a,{href:"https://github.com/facebook/infer/issues/22",children:"this GitHub issue"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"i-get-a-lint-error-when-running-infer-with-gradle",children:"I get a lint error when running Infer with gradle"}),"\n",(0,r.jsx)(n.p,{children:"You need to manually disable linters to run Infer. For instance"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"infer run -- gradle build -x lint\n"})}),"\n",(0,r.jsxs)(n.p,{children:["See also ",(0,r.jsx)(n.a,{href:"https://github.com/facebook/infer/issues/58",children:"this GitHub issue"}),"."]}),"\n",(0,r.jsxs)(n.h3,{id:"running-infer-options----build-command-fails-with-some-other-error",children:["Running ",(0,r.jsx)(n.code,{children:"infer [options] -- <build command>"})," fails with some other error"]}),"\n",(0,r.jsx)(n.p,{children:"Please make sure that:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"<build command>"})," runs successfully on its own."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"infer"})," is in your ",(0,r.jsx)(n.code,{children:"$PATH"})," (try ",(0,r.jsx)(n.code,{children:"which infer"}),", it should show where ",(0,r.jsx)(n.code,{children:"infer"})," is\nlocated)"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"i-get-errors-compiling-infer",children:"I get errors compiling Infer"}),"\n",(0,r.jsxs)(n.p,{children:["Make sure the dependencies are up to date. They may change as we\nupdate Infer itself. See the ",(0,r.jsx)(n.a,{href:"https://github.com/facebook/infer/blob/main/INSTALL.md",children:"installation\ndocument"}),"\nfor an up-to-date list of dependencies and how to get them."]}),"\n",(0,r.jsx)(n.h3,{id:"my-problem-is-not-listed-here",children:"My problem is not listed here"}),"\n",(0,r.jsxs)(n.p,{children:["Do not hesitate to ",(0,r.jsx)(n.a,{href:"support#need-help?",children:"contact us"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"faq",children:"FAQ"}),"\n",(0,r.jsx)(n.p,{children:"Here are some frequently asked questions. More to come."}),"\n",(0,r.jsx)(n.h3,{id:"how-do-i-suppress-infer-warnings-on-a-class-or-method",children:"How do I suppress Infer warnings on a class or method?"}),"\n",(0,r.jsxs)(n.p,{children:["In Java code, you can do this ",(0,r.jsx)(n.em,{children:"for some error types"})," by annotating\nyour class or method with ",(0,r.jsx)(n.code,{children:'@SuppressLint("<ISSUE_TYPE>")'}),", for example\n",(0,r.jsx)(n.code,{children:'@SuppressLint("NULL_DEREFERENCE")'}),". However, not all checkers honor\nthis annotation."]}),"\n",(0,r.jsx)(n.h3,{id:"is-infer-supported-for-windows",children:"Is Infer supported for Windows?"}),"\n",(0,r.jsx)(n.p,{children:"Infer is not supported on Windows at the moment. You may try installing Infer on\na Linux virtual machine if your project can be compiled on Linux."}),"\n",(0,r.jsx)(n.h3,{id:"how-does-infer-compare-to-the-clang-static-analyzer",children:"How does Infer compare to the Clang Static Analyzer?"}),"\n",(0,r.jsx)(n.p,{children:"Infer and Clang Static Analyzer (CSA) will typically find different\nkinds of issues on the same project. One thing that sets Infer apart\nfrom other static analysis tools is its ability to reason and find\nissues across multiple files. But CSA will find many kinds of issues\nthat Infer doesn't find: we send big respect to CSA! Really, these\ntools complement one another and it makes sense to use both."}),"\n",(0,r.jsx)(n.h3,{id:"how-does-infer-compare-to-android-linters-and-findbugs",children:"How does Infer compare to Android linters and Findbugs?"}),"\n",(0,r.jsx)(n.p,{children:"Infer finds deeper infer-procedural bugs sometimes spanning multiple files.\nLinters, in contrast, typically implement simple syntactic checks that are local\nwithin one procedure. But they are valuable and Infer doesn't try to duplicate\nwhat they are good at. At Facebook we run both Infer and a collection of Android\nlinters. Findbugs can be useful too; it is more akin to linters."})]})}function h(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},2172:(e,n,i)=>{i.d(n,{I:()=>l,M:()=>t});var r=i(1504);const o={},s=r.createContext(o);function t(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);