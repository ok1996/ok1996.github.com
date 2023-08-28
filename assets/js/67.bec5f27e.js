(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{666:function(s,a,e){"use strict";e.r(a);var n=e(7),t=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),a("p",[s._v("集成SpringBoot Web和接口文档、时间类型的序列化格式转换"),a("br"),s._v("\n定义通用的响应信息主体、全局异常处理器、Jackson工具类")]),s._v(" "),a("h2",{attrs:{id:"引入依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引入依赖"}},[s._v("#")]),s._v(" 引入依赖")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    <dependencies>\n        <dependency>\n            <groupId>cn.iosd</groupId>\n            <artifactId>simple-starter-web</artifactId>\n            <version>Version</version>\n        </dependency>\n    </dependencies>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"配置项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置项"}},[s._v("#")]),s._v(" 配置项")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("simple:\n  ## simple-starter-web\n  openApi:\n    title: 接口文档示例\n    description: 接口文档示例描述\n    version: 1.0.0\n    contact:\n      name: ok1996\n      url: https://ok96.cn\n      email: git@ok96.cn\n  handler:\n    exception:\n      #全局异常处理器 缺省项为true \n      enabled: true\n  jackson:\n    serialize:\n      # 序列化格式转换 缺省项为true \n      enabled: true\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("h2",{attrs:{id:"功能项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#功能项"}},[s._v("#")]),s._v(" 功能项")]),s._v(" "),a("h3",{attrs:{id:"全局异常处理器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局异常处理器"}},[s._v("#")]),s._v(" 全局异常处理器")]),s._v(" "),a("p",[s._v("拦截列表")]),s._v(" "),a("ul",[a("li",[s._v("Exception.class")]),s._v(" "),a("li",[s._v("RuntimeException.class")]),s._v(" "),a("li",[s._v("HttpRequestMethodNotSupportedException.class")])]),s._v(" "),a("h3",{attrs:{id:"序列化格式转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#序列化格式转换"}},[s._v("#")]),s._v(" 序列化格式转换")]),s._v(" "),a("ul",[a("li",[s._v("将LocalTime类型转换为Long")]),s._v(" "),a("li",[s._v("将LocalDate类型转换为Long")]),s._v(" "),a("li",[s._v("将LocalDateTime类型转换为Long")])]),s._v(" "),a("h3",{attrs:{id:"通用响应信息主体"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通用响应信息主体"}},[s._v("#")]),s._v(" 通用响应信息主体")]),s._v(" "),a("p",[s._v("实体类名称：Response 返回格式：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('{\n\t"code": 0,\n\t"msg": "",\n\t"data": {\n\n\t}\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"接口文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接口文档"}},[s._v("#")]),s._v(" 接口文档")]),s._v(" "),a("p",[s._v("依赖：Springdoc+knife4j ui")]),s._v(" "),a("h4",{attrs:{id:"访问路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#访问路径"}},[s._v("#")]),s._v(" 访问路径")]),s._v(" "),a("ul",[a("li",[s._v("host:port/swagger-ui/index.html")]),s._v(" "),a("li",[s._v("host:port/doc.html")])]),s._v(" "),a("h4",{attrs:{id:"关闭swaggerui"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关闭swaggerui"}},[s._v("#")]),s._v(" 关闭SwaggerUi")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("springdoc:\n  swagger-ui:\n    enabled: false\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h4",{attrs:{id:"关闭-v3-api-docs-endpoint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关闭-v3-api-docs-endpoint"}},[s._v("#")]),s._v(" 关闭 /v3/api-docs endpoint")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("springdoc:\n  apiDocs:\n    enabled: false\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h4",{attrs:{id:"springdoc文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#springdoc文档"}},[s._v("#")]),s._v(" SpringDoc文档")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://springdoc.org/v2/#disabling-the-swagger-ui",target:"_blank",rel:"noopener noreferrer"}},[s._v("Springdoc"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=t.exports}}]);