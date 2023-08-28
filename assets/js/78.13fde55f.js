(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{680:function(s,a,n){"use strict";n.r(a);var e=n(7),t=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),a("p",[s._v("可用于系统基础配置参数项目，启动自动初始化配置值到数据库中、可选覆盖数据、开放基础调用接口"),a("br"),s._v("\n数据表结构将自动创建")]),s._v(" "),a("h2",{attrs:{id:"引入依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引入依赖"}},[s._v("#")]),s._v(" 引入依赖")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    <dependencies>\n        <dependency>\n            <groupId>cn.iosd</groupId>\n            <artifactId>simple-base-param</artifactId>\n            <version>Version</version>\n        </dependency>\n    </dependencies>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"附加依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#附加依赖"}},[s._v("#")]),s._v(" 附加依赖")]),s._v(" "),a("p",[s._v("数据库-例：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("        <dependency>\n            <groupId>cn.iosd</groupId>\n            <artifactId>simple-starter-datasource</artifactId>\n        </dependency>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("springdoc和web-例：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("        <dependency>\n            <groupId>cn.iosd</groupId>\n            <artifactId>simple-starter-web</artifactId>\n        </dependency>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"配置项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置项"}},[s._v("#")]),s._v(" 配置项")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("simple:\n  base:\n    ## simple-base-param\n    param:\n      ##开启参数配置服务 缺省项为true \n      enabled: true\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"功能项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#功能项"}},[s._v("#")]),s._v(" 功能项")]),s._v(" "),a("h3",{attrs:{id:"存储数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#存储数据"}},[s._v("#")]),s._v(" 存储数据")]),s._v(" "),a("p",[s._v("启动自动初始化数据"),a("br"),s._v("\n实现接口类ParamInit")]),s._v(" "),a("p",[s._v("示例：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('/**\n * 初始化key-test数据\n * <p>\n * 实现了ParamInit接口，提供一些常量和方法实现\n *\n * @author ok1996\n */\n@Component\npublic class TestParamInit implements ParamInit {\n    /**\n     * 参数key\n     */\n    public static final String KEY = "key-test";\n    /**\n     * 是否开启模拟数据\n     */\n    public static final String OPEN_SIMULATION_CODE = "openSimulation";\n    /**\n     * 存储数据code\n     */\n    public static final String CONTENT_DATA_CODE = "contentData";\n\n    @Override\n    public String getKey() {\n        return KEY;\n    }\n\n    @Override\n    public List<BaseParamCodeValueVo<?>> getCodeValues() {\n        return CollUtil.newArrayList(\n                // 默认开启模拟数据\n                new BaseParamCodeValueVo<Boolean>().setCode(OPEN_SIMULATION_CODE).setValue(true),\n                // code为contentData，value为一个ClassmateVo对象\n                new BaseParamCodeValueVo<ClassmateVo>().setCode(CONTENT_DATA_CODE)\n                        .setValue(ClassmateVo.builder().personList(CollUtil.newArrayList(\n                                        ClassmateVo.Person.builder().age(12).name("小库").build(),\n                                        ClassmateVo.Person.builder().age(14).name("小明").build()))\n                                .build()\n                        )\n        );\n    }\n\n    @Override\n    public boolean restartOverride() {\n        return false;\n    }\n\n    @Override\n    public String getRemark() {\n        return "同班同学列表";\n    }\n\n    @Override\n    public List<String> getModuleNames() {\n        return CollUtil.newArrayList("模块分类1", "分类1-1");\n    }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br")])]),a("h3",{attrs:{id:"获取数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取数据"}},[s._v("#")]),s._v(" 获取数据")]),s._v(" "),a("p",[s._v("示例-获取key-test数据：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    @Autowired(required = false)\n    private IBaseParamService baseParamService;\n    \n    /**\n     * 获取同学列表信息\n     * @return 返回同学列表信息的ClassmateVo对象\n     * @throws JsonProcessingException JSON解析异常\n     */\n    public ClassmateVo classmateList() throws JsonProcessingException {\n        if (baseParamService != null) {\n            // 从基础参数服务中获取基础参数码值对象的列表\n            List<BaseParamCodeValueVo<?>> simulation = baseParamService.selectCodeValueVoParamByKey(TestParamInit.KEY);\n            // 判断是否开启模拟数据\n            if (ParamInitUtil.getBooleanValueByCodeDefaultFalse(simulation, TestParamInit.OPEN_SIMULATION_CODE)) {\n                // 获取存储的模拟数据，并将其转换为对应的实体类\n                Optional<BaseParamCodeValueVo<?>> contentData = ParamInitUtil.getBaseParamCodeValueVoByCode(simulation, TestParamInit.CONTENT_DATA_CODE);\n                if (contentData.isPresent()) {\n                    return ParamInitUtil.readValue(contentData.get(), ClassmateVo.class);\n                }\n            } else {\n                // TODO: 实现获取其他来源途径的数据的代码\n            }\n        }\n        return null;\n    }\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("h3",{attrs:{id:"工具类-paraminitutil"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工具类-paraminitutil"}},[s._v("#")]),s._v(" 工具类 ParamInitUtil")]),s._v(" "),a("p",[s._v("各方法查看源码均提供注释说明")]),s._v(" "),a("h3",{attrs:{id:"基础参数配置-接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础参数配置-接口"}},[s._v("#")]),s._v(" 基础参数配置 接口")]),s._v(" "),a("ul",[a("li",[s._v("获取详细信息：Get: /param/info")]),s._v(" "),a("li",[s._v("新增：Post: /param")]),s._v(" "),a("li",[s._v("修改：Put：/param")]),s._v(" "),a("li",[s._v("删除：Delete：/param/api/{id}")])])])}),[],!1,null,null,null);a.default=t.exports}}]);