"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8444],{4496:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>c});var o=r(7624),a=r(2172);const s={id:"infer-workflow",title:"Infer workflow"},i=void 0,t={id:"infer-workflow",title:"Infer workflow",description:"This page documents several ways of running Infer, that you can adapt to your",source:"@site/versioned_docs/version-1.1.0/01-infer-workflow.md",sourceDirName:".",slug:"/infer-workflow",permalink:"/docs/infer-workflow",draft:!1,unlisted:!1,tags:[],version:"1.1.0",sidebarPosition:1,frontMatter:{id:"infer-workflow",title:"Infer workflow"},sidebar:"docs",previous:{title:"Hello, World!",permalink:"/docs/hello-world"},next:{title:"Analyzing apps or projects",permalink:"/docs/analyzing-apps-or-projects"}},l={},c=[{value:"The two phases of an Infer run",id:"the-two-phases-of-an-infer-run",level:2},{value:"1. The capture phase",id:"1-the-capture-phase",level:3},{value:"2. The analysis phase",id:"2-the-analysis-phase",level:3},{value:"Global (default) and differential workflows",id:"global-default-and-differential-workflows",level:2},{value:"Global workflow",id:"global-workflow",level:3},{value:"Differential workflow",id:"differential-workflow",level:3},{value:"Exploring Infer reports",id:"exploring-infer-reports",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"This page documents several ways of running Infer, that you can adapt to your\nown project."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"tl; dr"}),":"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Make sure your project is clean when you first run Infer on it (with\n",(0,o.jsx)(n.code,{children:"make clean"}),", or ",(0,o.jsx)(n.code,{children:"gradle clean"}),", or ...)."]}),"\n",(0,o.jsxs)(n.li,{children:["When running Infer several times in a row, either clean your project as in\nstep 1 in-between Infer runs, or add ",(0,o.jsx)(n.code,{children:"--reactive"})," to the ",(0,o.jsx)(n.code,{children:"infer"})," command."]}),"\n",(0,o.jsxs)(n.li,{children:["These steps are not needed if you are not using an incremental build system,\nfor instance if you are analyzing single files with\n",(0,o.jsx)(n.code,{children:"infer run -- javac Hello.java"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["After a successful Infer run, you can explore Infer's reports in more details\nby running ",(0,o.jsx)(n.code,{children:"infer explore"})," from the same directory."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"the-two-phases-of-an-infer-run",children:"The two phases of an Infer run"}),"\n",(0,o.jsx)(n.p,{children:"Regardless of the input language (Java, Objective-C, or C), there are two main\nphases in an Infer run:"}),"\n",(0,o.jsx)(n.h3,{id:"1-the-capture-phase",children:"1. The capture phase"}),"\n",(0,o.jsx)(n.p,{children:"Compilation commands are captured by Infer to translate the files to be analyzed\ninto Infer's own internal intermediate language."}),"\n",(0,o.jsxs)(n.p,{children:["This translation is similar to compilation, so Infer takes information from the\ncompilation process to perform its own translation. This is why we call infer\nwith a compilation command: ",(0,o.jsx)(n.code,{children:"infer run -- javac File.java"})," or\n",(0,o.jsx)(n.code,{children:"infer run -- clang -c file.c"}),". What happens is that the files get compiled as\nusual, and they also get translated by Infer to be analyzed in the second phase.\nIn particular, if no file gets compiled, also no file will be analyzed."]}),"\n",(0,o.jsxs)(n.p,{children:["Infer stores the intermediate files in the results directory which by default is\ncreated in the folder where the ",(0,o.jsx)(n.code,{children:"infer"})," command is invoked, and is called\n",(0,o.jsx)(n.code,{children:"infer-out/"}),". You can change the name of the results directory with the option\n",(0,o.jsx)(n.code,{children:"-o"}),", e.g."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"infer run -o /tmp/out -- javac Test.java\n"})}),"\n",(0,o.jsxs)(n.p,{children:["You can run just the capture phase using the ",(0,o.jsx)(n.code,{children:"capture"})," subcommand instead of the\n",(0,o.jsx)(n.code,{children:"run"})," subcommand:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"infer capture -- javac Test.java\n"})}),"\n",(0,o.jsx)(n.h3,{id:"2-the-analysis-phase",children:"2. The analysis phase"}),"\n",(0,o.jsxs)(n.p,{children:["In this phase, the files in ",(0,o.jsx)(n.code,{children:"infer-out/"})," are analyzed by Infer. Infer analyzes\neach function and method separately. If Infer encounters an error when analyzing\na method or function, it stops there for that method or function, but will\ncontinue the analysis of other methods and functions. So, a possible workflow\nwould be to run Infer on your code, fix the errors generated, and run it again\nto find possibly more errors or to check that all the errors have been fixed."]}),"\n",(0,o.jsxs)(n.p,{children:["The errors will be displayed in the standard output and also in a file\n",(0,o.jsx)(n.code,{children:"infer-out/report.txt"}),". We filter the bugs and show the ones that are most\nlikely to be real."]}),"\n",(0,o.jsx)(n.h2,{id:"global-default-and-differential-workflows",children:"Global (default) and differential workflows"}),"\n",(0,o.jsxs)(n.p,{children:["By default, running Infer will delete the previous ",(0,o.jsx)(n.code,{children:"infer-out/"})," directory if it\nexists. This leads to a ",(0,o.jsx)(n.em,{children:"default"})," workflow where the entire project is analyzed\nevery time. Passing ",(0,o.jsx)(n.code,{children:"--reactive"})," (or ",(0,o.jsx)(n.code,{children:"-r"}),") to Infer prevents it from deleting\n",(0,o.jsx)(n.code,{children:"infer-out/"}),", leading to a ",(0,o.jsx)(n.em,{children:"differential"})," workflow."]}),"\n",(0,o.jsxs)(n.p,{children:["There are exceptions to this. In particular, you can run only one of the phases\nabove. For instance, ",(0,o.jsx)(n.code,{children:"infer run -- javac Hello.java"})," is equivalent to running\nthese two commands:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"infer capture -- javac Hello.java\ninfer analyze\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Notice that the second command does not erase ",(0,o.jsx)(n.code,{children:"infer-out/"}),", as the files it\nneeds to analyze live there!"]}),"\n",(0,o.jsxs)(n.p,{children:["You can learn more about the subcommands supported by Infer by running\n",(0,o.jsx)(n.code,{children:"infer --help"}),", ",(0,o.jsx)(n.code,{children:"infer capture --help"}),", or more generally\n",(0,o.jsx)(n.code,{children:"infer <subcommand> --help"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Let us highlight when you may need global and differential workflows."}),"\n",(0,o.jsx)(n.h3,{id:"global-workflow",children:"Global workflow"}),"\n",(0,o.jsxs)(n.p,{children:["The global workflow is well suited to running Infer on all the files in a\nproject, e.g., for a Gradle-based project that compiles using the ",(0,o.jsx)(n.code,{children:"gradle build"}),"\ncommand:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"infer run -- gradle build\n"})}),"\n",(0,o.jsxs)(n.p,{children:["In general, running Infer on your project is as simple as running\n",(0,o.jsx)(n.code,{children:"infer run -- <your build command here>"})," where the build command is the one you\nwould normally use to compile your source code."]}),"\n",(0,o.jsxs)(n.p,{children:["To start a fresh analysis and be sure to analyze all the files in your project,\nyou have to clean the build products, for instance with ",(0,o.jsx)(n.code,{children:"make clean"})," for a\nmake-based project, ",(0,o.jsx)(n.code,{children:"gradle clean"})," for Gradle, etc."]}),"\n",(0,o.jsx)(n.h3,{id:"differential-workflow",children:"Differential workflow"}),"\n",(0,o.jsxs)(n.p,{children:["Software projects such as mobile apps use ",(0,o.jsx)(n.em,{children:"incremental"})," build systems, where\ncode evolves as a sequence of code changes. For these projects, it can often\nmake sense to analyze only the current changes in the project, instead of\nanalyzing the whole project every time. It is possible to analyze only what's\nchanged using Infer's ",(0,o.jsx)(n.em,{children:"reactive mode"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Infer should first be run on a ",(0,o.jsx)(n.em,{children:"clean"})," version of the project, to capture all\nthe compilation commands in its capture phase."]}),"\n",(0,o.jsx)(n.p,{children:"For instance, for a project compiled using Gradle,"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"gradle clean\ninfer capture -- gradle build\n"})}),"\n",(0,o.jsx)(n.p,{children:"Note that the above command does not perform an expensive analysis, but captures\nall the compilation commands and stores the results in Infer's internal format."}),"\n",(0,o.jsxs)(n.p,{children:["Next, if you change some files in your project, for instance in response to an\nInfer report, or as part of normal development, you can either clean and\nreanalyze the entire project (as in the ",(0,o.jsx)(n.a,{href:"#Global-workflow",children:"global workflow"}),"\nabove), or else tell Infer that you are interested in the effects of the code\nchange. The second option can be significantly faster, as only a subset of the\nproject needs to be analyzed: the modified files/procedures and their\ndependencies."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"edit some/File.java\n# make some changes to some/File.java\ninfer run --reactive -- gradle build\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Note that you can run Infer with the ",(0,o.jsx)(n.code,{children:"--reactive"})," flag the first time around as\nwell."]}),"\n",(0,o.jsxs)(n.p,{children:["To control the granularity of the changes to be analyzed, it is possible to tell\nInfer to combine several changes into one before the analysis. This is done with\nthe ",(0,o.jsx)(n.code,{children:"--continue"})," option."]}),"\n",(0,o.jsx)(n.p,{children:"For example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"edit some/File1.java\n# make some changes to some/File1.java\ninfer run --reactive -- gradle build\nedit some/File2.java\n# make some changes to some/File2.java\ninfer run --reactive --continue -- gradle build\n"})}),"\n",(0,o.jsxs)(n.p,{children:["After the first invocation, Infer will analyze the results of the first change.\nAfter the second invocation, Infer will analyze the results of both changes. If\nthe ",(0,o.jsx)(n.code,{children:"--continue"})," option were omitted, it would only analyze the results of the\nsecond change."]}),"\n",(0,o.jsx)(n.p,{children:"Finally, it is always possible to perform an analysis of the current changes in\nisolation:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"infer run --reactive --continue -- analyze\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The list of build systems supported by Infer is detailed in the\n",(0,o.jsx)(n.a,{href:"analyzing-apps-or-projects",children:"next section"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"exploring-infer-reports",children:"Exploring Infer reports"}),"\n",(0,o.jsxs)(n.p,{children:["You can get more information about the reports generated by Infer by running\n",(0,o.jsx)(n.code,{children:"infer explore"})," in the same directory. For instance"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"infer run -- gradle build\ninfer explore\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This tool allows you to see error traces leading to each bug reported by Infer,\nwhich can be helpful in tracking down the precise cause of each bug. See the\noutput of ",(0,o.jsx)(n.code,{children:"infer explore --help"})," for more information."]})]})}function h(e={}){const{wrapper:n}={...(0,a.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},2172:(e,n,r)=>{r.d(n,{I:()=>t,M:()=>i});var o=r(1504);const a={},s=o.createContext(a);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);