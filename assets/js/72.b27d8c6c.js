(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{672:function(s,e,a){"use strict";a.r(e);var r=a(7),n=Object(r.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),e("p",[s._v("用于模板引擎应用，使用配置参数简化 资源路径映射到指定的处理器，将常用的配置项默认封装。")]),s._v(" "),e("h2",{attrs:{id:"引入依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#引入依赖"}},[s._v("#")]),s._v(" 引入依赖")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    <dependencies>\n        <dependency>\n            <groupId>cn.iosd</groupId>\n            <artifactId>simple-starter-freemarker</artifactId>\n            <version>Version</version>\n        </dependency>\n    </dependencies>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("h2",{attrs:{id:"配置项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置项"}},[s._v("#")]),s._v(" 配置项")]),s._v(" "),e("p",[s._v("Freemarker基础配置项示例：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("spring:\n  application:\n    name: simple-demo-freemarker\n  freemarker:\n    allow-request-override: false\n    cache: true\n    charset: UTF-8\n    check-template-location: true\n    content-type: text/html\n    expose-request-attributes: false\n    expose-session-attributes: false\n    expose-spring-macro-helpers: false\n    settings:\n      number_format: 0.##\n    suffix: .ftl\n    template-loader-path: classpath:/templates/\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br")])]),e("p",[s._v("simple配置：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("simple:\n  freemarker:\n    resourceVoList:\n      # resourceHandler：访问的前缀 resourceLocations：真实路径\n      - resourceHandler:  /Users/**\n        resourceLocations:  file:/Users/\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h2",{attrs:{id:"功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#功能"}},[s._v("#")]),s._v(" 功能")]),s._v(" "),e("h3",{attrs:{id:"格式化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#格式化"}},[s._v("#")]),s._v(" 格式化")]),s._v(" "),e("p",[s._v("类：FreemarkerConfig"),e("br"),s._v("\n默认设置Freemarker模板引擎的格式化选项，使用“#”号作为数字格式的分隔符")]),s._v(" "),e("h3",{attrs:{id:"配置项-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置项-2"}},[s._v("#")]),s._v(" 配置项")]),s._v(" "),e("p",[s._v("类：HttpConverterConfig"),e("br"),s._v("\n从配置文件读取，将指定的资源路径映射到指定的处理器上"),e("br"),s._v("\n访问地址前缀->真实路径"),e("br"),s._v("\n配置文件例：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("      - resourceHandler:  /ok/**\n        resourceLocations:  classpath:/plugin/ok/\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("则页面访问")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("http://127.0.0.1/ok/xxx.js\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("将获取本工程目录classpath资源下，/plugin/ok/xxx.js文件")]),s._v(" "),e("h3",{attrs:{id:"自定义freemarker视图"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义freemarker视图"}},[s._v("#")]),s._v(" 自定义Freemarker视图")]),s._v(" "),e("p",[s._v("类：MyFreemarkerView   CustomFreemarker\nMyFreemarkerView中添加base路径辅助方法，获取访问地址再返回页面，便于静态资源地址使用"),e("br"),s._v("\n例：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<script src="${base}/xxx/xxx.js"><\/script>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);