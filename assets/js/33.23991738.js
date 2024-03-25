(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{255:function(s,a,e){s.exports=e.p+"assets/img/simple-base-dict-2023-5-1-0.830eeea8.png"},683:function(s,a,e){"use strict";e.r(a);var n=e(7),t=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),a("p",[s._v("可作用于字典服务及数据管理")]),s._v(" "),a("p",[s._v("模块")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("simple-base-dict-api 字典翻译服务-客户端：   \n    若只引入客户端需要启动服务端并(配置服务端调用地址 或 开启服务自动发现)  \n\t主要功能：用于实现翻译逻辑调用\nsimple-base-dict-service 字典翻译服务-服务端：  \n    可直接引入依赖，作为客户端也作为服务端  \n\t主要功能：数据表结构将自动创建、开放基础调用接口 \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"依赖关系及代码分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#依赖关系及代码分析"}},[s._v("#")]),s._v(" 依赖关系及代码分析")]),s._v(" "),a("p",[a("img",{attrs:{src:e(255),alt:"依赖关系及代码分析"}})]),s._v(" "),a("h2",{attrs:{id:"拆分客户端及服务端使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拆分客户端及服务端使用"}},[s._v("#")]),s._v(" 拆分客户端及服务端使用")]),s._v(" "),a("h3",{attrs:{id:"启动服务端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动服务端"}},[s._v("#")]),s._v(" 启动服务端")]),s._v(" "),a("p",[s._v("下载代码")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("git clone https://github.com/ok1996/ok-system-simple.git\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("增加启动BaseDictServiceApplication的vm配置--无需连接Nacos")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("-Dspring.datasource.dynamic.datasource.master.url=jdbc:mysql://127.0.0.1:3306/simple_demo?useUnicode=true&characterEncoding=utf8&zeroDateTimeBehavior=convertToNull&useSSL=true&serverTimezone=GMT%2B8\n-Dspring.datasource.dynamic.datasource.master.username=\n-Dspring.datasource.dynamic.datasource.master.password=\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("若要连接Nacos则再增加配置")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("-Dspring.cloud.nacos.server-addr=http://127.0.0.1:8848\n-Dspring.cloud.nacos.username=\n-Dspring.cloud.nacos.password=\n-Dspring.cloud.nacos.discovery.enabled=true\n-Dspring.cloud.nacos.discovery.namespace=\n-Dspring.cloud.nacos.config.enabled=true\n-Dspring.cloud.nacos.config.namespace=\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"引入客户端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引入客户端"}},[s._v("#")]),s._v(" 引入客户端")]),s._v(" "),a("h4",{attrs:{id:"引入依赖-方式1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引入依赖-方式1"}},[s._v("#")]),s._v(" 引入依赖-方式1")]),s._v(" "),a("p",[s._v("所需工程使用仅需引入客户端依赖")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    <dependencies>\n        <dependency>\n            <groupId>cn.iosd</groupId>\n            <artifactId>simple-base-dict-api</artifactId>\n            <version>Version</version>\n        </dependency>\n    </dependencies>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h4",{attrs:{id:"引入依赖-方式2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引入依赖-方式2"}},[s._v("#")]),s._v(" 引入依赖-方式2")]),s._v(" "),a("p",[s._v("所需工程使用，引入服务端依赖，并通过配置文件关闭服务端功能，仅使用客户端功能"),a("br"),s._v("\n便于灵活切换启用本身作为服务端")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    <dependencies>\n        <dependency>\n            <groupId>cn.iosd</groupId>\n            <artifactId>simple-base-dict-service</artifactId>\n            <version>Version</version>\n        </dependency>\n    </dependencies>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("配置项-关闭服务端功能")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("simple:\n  scan:\n    ## 关闭service依赖中service服务端，仅使用service依赖中的api客户端\n    service:\n      enabled: false\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h4",{attrs:{id:"配置项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置项"}},[s._v("#")]),s._v(" 配置项")]),s._v(" "),a("p",[s._v("若要连接Nacos则再增加vm配置")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("-Dspring.cloud.nacos.server-addr=http://127.0.0.1:8848\n-Dspring.cloud.nacos.username=\n-Dspring.cloud.nacos.password=\n-Dspring.cloud.nacos.discovery.enabled=true\n-Dspring.cloud.nacos.discovery.namespace=\n-Dspring.cloud.nacos.config.enabled=true\n-Dspring.cloud.nacos.config.namespace=\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("情况1：若工程 或 服务端 没有启用服务发现，则需要在客户端中配置调用服务端的调用地址")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("simple:\n  feign:\n    base:\n      ## simple-base-dict-api\n      param:\n        # 未开启注册中心需要指定调用地址\n        url: http://localhost:9030\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("情况2：若工程 和 服务端 均启用服务发现，则在客户端中配置调用服务端的调用地址为空即可")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("simple:\n  feign:\n    base:\n      dict:\n        # 未开启注册中心需要指定调用地址\n        url: \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h4",{attrs:{id:"使用字典翻译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用字典翻译"}},[s._v("#")]),s._v(" 使用字典翻译")]),s._v(" "),a("h5",{attrs:{id:"步骤1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤1"}},[s._v("#")]),s._v(" 步骤1")]),s._v(" "),a("p",[s._v("实体类增加注解 @DictField"),a("br"),s._v("\n若实体类内还有嵌套实体类需要翻译则使用 @DictEntity\n如：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('@Data\npublic class PersonRemoteVo {\n    @Schema(description = "姓名")\n    private String name;\n\n    @Schema(description = "性别")\n    @DictField(dictionaryParams = "sex", relatedField = "sexText")\n    private Integer sex;\n    \n    private String sexText;\n    \n    @DictEntity\n    private PersonVo personVo;\n}\n\n@Data\npublic class PersonVo {\n    @Schema(description = "姓名")\n    private String name;\n\n    @Schema(description = "性别-默认实现类的json文件调用字典")\n    @DictField(dictionaryParams = "leader", dictImplBeanName = "localDictServiceImpl", relatedField = "leaderText")\n    private Integer leader;\n\n    private String leaderText;\n}\n\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br")])]),a("h5",{attrs:{id:"步骤2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤2"}},[s._v("#")]),s._v(" 步骤2")]),s._v(" "),a("p",[s._v("在方法上增加注解 @Dict"),a("br"),s._v("\n标注该方法调用后返回是翻译后的数据")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    @Dict\n    public PersonRemoteVo getPersonRemoteVo() {\n        return PersonRemoteVo.builder().name("吴小").idCard(1).hideIdentity(1).build();\n    }\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"融合客户端和服务端使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#融合客户端和服务端使用"}},[s._v("#")]),s._v(" 融合客户端和服务端使用")]),s._v(" "),a("p",[s._v("直接引入service依赖即包含客户端和服务端功能")]),s._v(" "),a("h4",{attrs:{id:"引入依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引入依赖"}},[s._v("#")]),s._v(" 引入依赖")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    <dependencies>\n        <dependency>\n            <groupId>cn.iosd</groupId>\n            <artifactId>simple-base-dict-service</artifactId>\n            <version>Version</version>\n        </dependency>\n    </dependencies>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h4",{attrs:{id:"查看服务端接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看服务端接口"}},[s._v("#")]),s._v(" 查看服务端接口")]),s._v(" "),a("p",[s._v("例：可访问接口地址查看 http://127.0.0.1:9030/doc.html")])])}),[],!1,null,null,null);a.default=t.exports}}]);