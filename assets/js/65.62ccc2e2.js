(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{656:function(a,s,t){"use strict";t.r(s);var e=t(7),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"修改某次的commit的注释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改某次的commit的注释"}},[a._v("#")]),a._v(" 修改某次的commit的注释")]),a._v(" "),s("p",[a._v("例：修改倒数第16次commit的注释")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git rebase -i HEAD~16\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("进入vim后，i进入编辑模式\n将需要修改的那行的单词pick修改为edit,保存退出")]),a._v(" "),s("h2",{attrs:{id:"修改注释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改注释"}},[a._v("#")]),a._v(" 修改注释")]),a._v(" "),s("p",[a._v("执行命令")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git commit --amend\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("i进入编辑模式，然后修改注释，保存退出")]),a._v(" "),s("h2",{attrs:{id:"执行命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行命令"}},[a._v("#")]),a._v(" 执行命令")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git rebase --continue\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"强制推送到远端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#强制推送到远端"}},[a._v("#")]),a._v(" 强制推送到远端")]),a._v(" "),s("p",[a._v("例：分支名称2022.1.x")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git push  -f origin 2022.1.x\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[a._v("#")]),a._v(" 缺点")]),a._v(" "),s("p",[a._v("会将修改注释的提交时间自动修改为当前")])])}),[],!1,null,null,null);s.default=r.exports}}]);