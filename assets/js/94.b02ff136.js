(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{683:function(s,n,a){"use strict";a.r(n);var e=a(7),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),n("p",[s._v("可作用于系统基础配置参数")]),s._v(" "),n("p",[s._v("模块")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("simple-base-config-api 参数配置服务-客户端：   \n    若只引入客户端需要启动服务端并(配置服务端调用地址 或 开启服务自动发现)  \n\t主要功能：启动自动初始化配置值到数据库中、可选覆盖数据\nsimple-base-config-service 参数配置服务-服务端：  \n    可直接引入依赖，作为客户端也作为服务端  \n\t主要功能：数据表结构将自动创建、开放基础调用接口 \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h2",{attrs:{id:"拆分客户端及服务端使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#拆分客户端及服务端使用"}},[s._v("#")]),s._v(" 拆分客户端及服务端使用")]),s._v(" "),n("h3",{attrs:{id:"启动服务端"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#启动服务端"}},[s._v("#")]),s._v(" 启动服务端")]),s._v(" "),n("p",[s._v("下载代码")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("git clone https://github.com/ok1996/ok-system-simple.git\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("增加启动BaseConfigServiceApplication的vm配置--无需连接Nacos")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("-Dspring.datasource.dynamic.datasource.master.url=jdbc:mysql://127.0.0.1:3306/simple_demo?useUnicode=true&characterEncoding=utf8&zeroDateTimeBehavior=convertToNull&useSSL=true&serverTimezone=GMT%2B8\n-Dspring.datasource.dynamic.datasource.master.username=\n-Dspring.datasource.dynamic.datasource.master.password=\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("若要连接Nacos则再增加配置")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("-Dspring.cloud.nacos.server-addr=http://127.0.0.1:8848\n-Dspring.cloud.nacos.username=\n-Dspring.cloud.nacos.password=\n-Dspring.cloud.nacos.discovery.enabled=true\n-Dspring.cloud.nacos.discovery.namespace=\n-Dspring.cloud.nacos.config.enabled=true\n-Dspring.cloud.nacos.config.namespace=\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h3",{attrs:{id:"引入客户端"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#引入客户端"}},[s._v("#")]),s._v(" 引入客户端")]),s._v(" "),n("h4",{attrs:{id:"引入依赖-方式1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#引入依赖-方式1"}},[s._v("#")]),s._v(" 引入依赖-方式1")]),s._v(" "),n("p",[s._v("所需工程使用仅需引入客户端依赖")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    <dependencies>\n        <dependency>\n            <groupId>cn.iosd</groupId>\n            <artifactId>simple-base-config-api</artifactId>\n            <version>Version</version>\n        </dependency>\n    </dependencies>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h4",{attrs:{id:"引入依赖-方式2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#引入依赖-方式2"}},[s._v("#")]),s._v(" 引入依赖-方式2")]),s._v(" "),n("p",[s._v("所需工程使用，引入服务端依赖，并通过配置文件关闭服务端功能，仅使用客户端功能"),n("br"),s._v("\n便于灵活切换启用本身作为服务端")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    <dependencies>\n        <dependency>\n            <groupId>cn.iosd</groupId>\n            <artifactId>simple-base-config-service</artifactId>\n            <version>Version</version>\n        </dependency>\n    </dependencies>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("配置项-关闭服务端功能")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("simple:\n  scan:\n    ## 关闭service依赖中service服务端，仅使用service依赖中的api客户端\n    service:\n      enabled: false\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h4",{attrs:{id:"配置项"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置项"}},[s._v("#")]),s._v(" 配置项")]),s._v(" "),n("p",[s._v("若要连接Nacos则再增加vm配置")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("-Dspring.cloud.nacos.server-addr=http://127.0.0.1:8848\n-Dspring.cloud.nacos.username=\n-Dspring.cloud.nacos.password=\n-Dspring.cloud.nacos.discovery.enabled=true\n-Dspring.cloud.nacos.discovery.namespace=\n-Dspring.cloud.nacos.config.enabled=true\n-Dspring.cloud.nacos.config.namespace=\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("情况1：若工程 或 服务端 没有启用服务发现，则需要在客户端中配置调用服务端的调用地址")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("simple:\n  feign:\n    base:\n      ## simple-base-config-api\n      config:\n        # 未开启注册中心需要指定调用地址\n        url: http://localhost:9010\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("情况2：若工程 和 服务端 均启用服务发现，则在客户端中配置调用服务端的调用地址为空即可")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("simple:\n  feign:\n    base:\n      config:\n        # 未开启注册中心需要指定调用地址\n        url: \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h4",{attrs:{id:"存储数据"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#存储数据"}},[s._v("#")]),s._v(" 存储数据")]),s._v(" "),n("p",[s._v("启动自动初始化数据")]),s._v(" "),n("p",[s._v("示例：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('/**\n * 初始化数据\n * <p>\n * 创建初始化对象，提供一些常量和方法实现\n *\n * @author ok1996\n */\n@Component\npublic class DemoTestConfigInit {\n    /**\n     * 一班参数key\n     */\n    public static final String STUDENT_KEY_ONE = "student-key-test-one";\n\n    /**\n     * 二班参数key\n     */\n    public static final String STUDENT_KEY_TWO = "student-key-test-two";\n\n    @Bean\n    public ConfigInit studentTestOneInit() {\n        ConfigInit configInit = new ConfigInit(STUDENT_KEY_ONE, "一班同学列表", false, List.of("模块分类1", "分类1-1"));\n        configInit.setCodeValues(List.of(\n                new CodeValue<Boolean>().setCode(ConfigUtils.OPEN_SIMULATION_CODE).setValue(true),\n                new CodeValue<ClassmateVo>().setCode(ConfigUtils.CONTENT_DATA_CODE)\n                        .setValue(ClassmateVo.builder().personList(List.of(\n                                        ClassmateVo.Person.builder().age(12).name("小库").build(),\n                                        ClassmateVo.Person.builder().age(14).name("小明").build()))\n                                .build())\n        ));\n        return configInit;\n    }\n\n    @Bean\n    public ConfigInit studentTestTwoInit() {\n        ConfigInit configInit = new ConfigInit(STUDENT_KEY_TWO, "二班同学列表", false, List.of("模块分类1", "分类1-2"));\n        configInit.setCodeValues(List.of(\n                new CodeValue<Boolean>().setCode(ConfigUtils.OPEN_SIMULATION_CODE).setValue(true),\n                new CodeValue<ClassmateVo>().setCode(ConfigUtils.CONTENT_DATA_CODE)\n                        .setValue(ClassmateVo.builder().personList(List.of(\n                                        ClassmateVo.Person.builder().age(14).name("小雪").build(),\n                                        ClassmateVo.Person.builder().age(15).name("小楚").build()))\n                                .build())\n        ));\n        return configInit;\n    }\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br")])]),n("h4",{attrs:{id:"获取数据"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#获取数据"}},[s._v("#")]),s._v(" 获取数据")]),s._v(" "),n("p",[s._v("示例-获取key-test数据：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('    @Autowired(required = false)\n    private IBaseConfigService configService;\n    \n    /**\n     * 获取同学列表信息\n     *\n     * @return 返回同学列表信息的ClassmateVo对象\n     */\n    public ClassmateVo classmateList() {\n        if (configService == null) {\n            return null;\n        }\n        // 从基础参数服务中获取基础参数码值对象的列表\n        List<CodeValue<?>> simulation = configService.selectListByKey(DemoTestConfigInit.STUDENT_KEY_ONE);\n        // 判断是否开启模拟数据\n        if (!ConfigUtils.findFirstByCode(simulation, ConfigUtils.OPEN_SIMULATION_CODE, false)) {\n            log.info("获取其他来源途径的数据");\n            return null;\n        }\n        // 获取存储的模拟数据，并将其转换为对应的实体类\n        return ConfigUtils.findFirstByCode(simulation, ConfigUtils.CONTENT_DATA_CODE, ClassmateVo.class,null);\n    }\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br")])]),n("h4",{attrs:{id:"工具类-configutils"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#工具类-configutils"}},[s._v("#")]),s._v(" 工具类 ConfigUtils")]),s._v(" "),n("p",[s._v("各方法查看源码均提供注释说明")]),s._v(" "),n("h2",{attrs:{id:"融合客户端和服务端使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#融合客户端和服务端使用"}},[s._v("#")]),s._v(" 融合客户端和服务端使用")]),s._v(" "),n("p",[s._v("直接引入service依赖即包含客户端和服务端功能")]),s._v(" "),n("h4",{attrs:{id:"引入依赖"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#引入依赖"}},[s._v("#")]),s._v(" 引入依赖")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    <dependencies>\n        <dependency>\n            <groupId>cn.iosd</groupId>\n            <artifactId>simple-base-config-service</artifactId>\n            <version>Version</version>\n        </dependency>\n    </dependencies>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h4",{attrs:{id:"查看服务端接口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查看服务端接口"}},[s._v("#")]),s._v(" 查看服务端接口")]),s._v(" "),n("p",[s._v("例：可访问接口地址查看 http://127.0.0.1:9010/doc.html")])])}),[],!1,null,null,null);n.default=t.exports}}]);