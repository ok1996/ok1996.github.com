(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{602:function(s,a,n){s.exports=n.p+"assets/img/simple-base-param-2023-5-0-0.06902494.png"},663:function(s,a,n){"use strict";n.r(a);var e=n(7),t=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),a("p",[s._v("可作用于系统基础配置参数")]),s._v(" "),a("p",[s._v("模块")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("simple-base-param-api 参数配置服务-客户端：   \n    若只引入客户端需要启动服务端并(配置服务端调用地址 或 开启服务自动发现)  \n\t主要功能：启动自动初始化配置值到数据库中、可选覆盖数据\nsimple-base-param-service 参数配置服务-服务端：  \n    可直接引入依赖，作为客户端也作为服务端  \n\t主要功能：数据表结构将自动创建、开放基础调用接口 \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"依赖关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#依赖关系"}},[s._v("#")]),s._v(" 依赖关系")]),s._v(" "),a("p",[a("img",{attrs:{src:n(602),alt:"依赖关系图"}})]),s._v(" "),a("h2",{attrs:{id:"拆分客户端及服务端使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拆分客户端及服务端使用"}},[s._v("#")]),s._v(" 拆分客户端及服务端使用")]),s._v(" "),a("h3",{attrs:{id:"启动服务端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动服务端"}},[s._v("#")]),s._v(" 启动服务端")]),s._v(" "),a("p",[s._v("下载代码")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("git clone https://github.com/ok1996/ok-system-simple.git\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("增加启动ParamServiceApplication的vm配置--无需连接Nacos")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("-Dspring.datasource.dynamic.datasource.master.url=jdbc:mysql://127.0.0.1:3306/simple_demo?useUnicode=true&characterEncoding=utf8&zeroDateTimeBehavior=convertToNull&useSSL=true&serverTimezone=GMT%2B8\n-Dspring.datasource.dynamic.datasource.master.username=\n-Dspring.datasource.dynamic.datasource.master.password=\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("若要连接Nacos则再增加配置")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("-Dspring.cloud.nacos.server-addr=http://127.0.0.1:8848\n-Dspring.cloud.nacos.username=\n-Dspring.cloud.nacos.password=\n-Dspring.cloud.nacos.discovery.enabled=true\n-Dspring.cloud.nacos.discovery.namespace=\n-Dspring.cloud.nacos.config.enabled=true\n-Dspring.cloud.nacos.config.namespace=\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"引入客户端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引入客户端"}},[s._v("#")]),s._v(" 引入客户端")]),s._v(" "),a("h4",{attrs:{id:"引入依赖-方式1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引入依赖-方式1"}},[s._v("#")]),s._v(" 引入依赖-方式1")]),s._v(" "),a("p",[s._v("所需工程使用仅需引入客户端依赖")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    <dependencies>\n        <dependency>\n            <groupId>cn.iosd</groupId>\n            <artifactId>simple-base-param-api</artifactId>\n            <version>Version</version>\n        </dependency>\n    </dependencies>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h4",{attrs:{id:"引入依赖-方式2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引入依赖-方式2"}},[s._v("#")]),s._v(" 引入依赖-方式2")]),s._v(" "),a("p",[s._v("所需工程使用，引入服务端依赖，并通过配置文件关闭服务端功能，仅使用客户端功能"),a("br"),s._v("\n便于灵活切换启用本身作为服务端")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    <dependencies>\n        <dependency>\n            <groupId>cn.iosd</groupId>\n            <artifactId>simple-base-param-service</artifactId>\n            <version>Version</version>\n        </dependency>\n    </dependencies>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("配置项-关闭服务端功能")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("simple:\n  scan:\n    ## 关闭service依赖中service服务端，仅使用service依赖中的api客户端\n    service:\n      enabled: false\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h4",{attrs:{id:"配置项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置项"}},[s._v("#")]),s._v(" 配置项")]),s._v(" "),a("p",[s._v("若要连接Nacos则再增加vm配置")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("-Dspring.cloud.nacos.server-addr=http://127.0.0.1:8848\n-Dspring.cloud.nacos.username=\n-Dspring.cloud.nacos.password=\n-Dspring.cloud.nacos.discovery.enabled=true\n-Dspring.cloud.nacos.discovery.namespace=\n-Dspring.cloud.nacos.config.enabled=true\n-Dspring.cloud.nacos.config.namespace=\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("情况1：若工程 或 服务端 没有启用服务发现，则需要在客户端中配置调用服务端的调用地址")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("simple:\n  feign:\n    base:\n      ## simple-base-param-api\n      param:\n        # 未开启注册中心需要指定调用地址\n        url: http://localhost:9010\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("情况2：若工程 和 服务端 均启用服务发现，则在客户端中配置调用服务端的调用地址为空即可")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("simple:\n  feign:\n    base:\n      param:\n        # 未开启注册中心需要指定调用地址\n        url: \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h4",{attrs:{id:"存储数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#存储数据"}},[s._v("#")]),s._v(" 存储数据")]),s._v(" "),a("p",[s._v("启动自动初始化数据"),a("br"),s._v("\n实现对象ParamInit")]),s._v(" "),a("p",[s._v("示例：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('\n/**\n * 初始化数据\n * <p>\n * 创建ParamInit对象，提供一些常量和方法实现\n *\n * @author ok1996\n */\n@Component\npublic class DemoTestParamInit {\n    /**\n     * 一班参数key\n     */\n    public static final String STUDENT_KEY_ONE = "student-key-test-one";\n\n    /**\n     * 二班参数key\n     */\n    public static final String STUDENT_KEY_TWO = "student-key-test-two";\n\n    @Bean\n    public ParamInit studentTestOneParamInit() {\n        ParamInit paramInit = new ParamInit(STUDENT_KEY_ONE, "一班同学列表", false, List.of("模块分类1", "分类1-1"));\n        paramInit.setCodeValues(List.of(\n                new CodeValue<Boolean>().setCode(ParamInitUtil.OPEN_SIMULATION_CODE).setValue(true),\n                new CodeValue<ClassmateVo>().setCode(ParamInitUtil.CONTENT_DATA_CODE)\n                        .setValue(ClassmateVo.builder().personList(List.of(\n                                        ClassmateVo.Person.builder().age(12).name("小库").build(),\n                                        ClassmateVo.Person.builder().age(14).name("小明").build()))\n                                .build())\n        ));\n        return paramInit;\n    }\n\n    @Bean\n    public ParamInit studentTestTwoParamInit() {\n        ParamInit paramInit = new ParamInit(STUDENT_KEY_TWO, "二班同学列表", false, List.of("模块分类1", "分类1-2"));\n        paramInit.setCodeValues(List.of(\n                new CodeValue<Boolean>().setCode(ParamInitUtil.OPEN_SIMULATION_CODE).setValue(true),\n                new CodeValue<ClassmateVo>().setCode(ParamInitUtil.CONTENT_DATA_CODE)\n                        .setValue(ClassmateVo.builder().personList(List.of(\n                                        ClassmateVo.Person.builder().age(14).name("小雪").build(),\n                                        ClassmateVo.Person.builder().age(15).name("小楚").build()))\n                                .build())\n        ));\n        return paramInit;\n    }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br")])]),a("h4",{attrs:{id:"获取数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取数据"}},[s._v("#")]),s._v(" 获取数据")]),s._v(" "),a("p",[s._v("示例-获取key-test数据：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    @Autowired(required = false)\n    private IBaseParamService baseParamService;\n    \n    /**\n     * 获取同学列表信息\n     *\n     * @return 返回同学列表信息的ClassmateVo对象\n     */\n    public ClassmateVo classmateList() {\n        if (baseParamService == null) {\n            return null;\n        }\n        // 从基础参数服务中获取基础参数码值对象的列表\n        List<CodeValue<?>> simulation = baseParamService.selectCodeValueVoParamByKey(DemoTestParamInit.STUDENT_KEY_ONE);\n        // 判断是否开启模拟数据\n        if (!ParamInitUtil.getBooleanValueByCodeDefaultFalse(simulation, ParamInitUtil.OPEN_SIMULATION_CODE)) {\n            log.info("获取其他来源途径的数据");\n            return null;\n        }\n        // 获取存储的模拟数据，并将其转换为对应的实体类\n        Optional<CodeValue<?>> contentData = ParamInitUtil.getCodeValueByCode(simulation, ParamInitUtil.CONTENT_DATA_CODE);\n        if (contentData.isPresent()) {\n            return ParamInitUtil.readValue(contentData.get(), ClassmateVo.class);\n        }\n        log.error("模拟数据不存在,key:{}", DemoTestParamInit.STUDENT_KEY_ONE);\n        return null;\n    }\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br")])]),a("h4",{attrs:{id:"工具类-paraminitutil"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工具类-paraminitutil"}},[s._v("#")]),s._v(" 工具类 ParamInitUtil")]),s._v(" "),a("p",[s._v("各方法查看源码均提供注释说明")]),s._v(" "),a("h2",{attrs:{id:"融合客户端和服务端使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#融合客户端和服务端使用"}},[s._v("#")]),s._v(" 融合客户端和服务端使用")]),s._v(" "),a("p",[s._v("直接引入service依赖即包含客户端和服务端功能")]),s._v(" "),a("h4",{attrs:{id:"引入依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引入依赖"}},[s._v("#")]),s._v(" 引入依赖")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    <dependencies>\n        <dependency>\n            <groupId>cn.iosd</groupId>\n            <artifactId>simple-base-param-service</artifactId>\n            <version>Version</version>\n        </dependency>\n    </dependencies>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h4",{attrs:{id:"查看服务端接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看服务端接口"}},[s._v("#")]),s._v(" 查看服务端接口")]),s._v(" "),a("p",[s._v("可访问接口地址查看 http://127.0.0.1:9010/doc.html")])])}),[],!1,null,null,null);a.default=t.exports}}]);