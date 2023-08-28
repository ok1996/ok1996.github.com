(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{658:function(e,s,a){"use strict";a.r(s);var t=a(7),n=Object(t.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[e._v("#")]),e._v(" 简介")]),e._v(" "),s("p",[e._v("提供注解简化使用：字典翻译"),s("br"),e._v("\n字典服务提供本地文件json使用（默认）、提供接口调用使用、扩展自定义实现使用"),s("br"),e._v("\n服务类返回参数支持单体字段、列表、实体嵌套")]),e._v(" "),s("h2",{attrs:{id:"引入依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引入依赖"}},[e._v("#")]),e._v(" 引入依赖")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("    <dependencies>\n        <dependency>\n            <groupId>cn.iosd</groupId>\n            <artifactId>simple-starter-dict</artifactId>\n            <version>Version</version>\n        </dependency>\n    </dependencies>\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br")])]),s("h2",{attrs:{id:"配置项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置项"}},[e._v("#")]),e._v(" 配置项")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("simple:\n  dict:\n    ##字典 缺省项为true\n    enabled: true\n    ## 指定字典实现类 缺省项为：localDictServiceImpl 从本地文件读取字典项列表实现类\n    dictImplBeanName: localDictServiceImpl\n    ## 调用远程接口获取字典项列表实现类请求接口地址前缀（若为空则注解填写需要完整接口路径）\n    remoteBaseUrl: http://127.0.0.1:11120\n    ## localDictServiceImpl实现类的本地字典文件目录，默认/dict.json。注：resource资源下\n    resourceDictFileDir: /dict.json\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br")])]),s("h2",{attrs:{id:"功能项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#功能项"}},[e._v("#")]),e._v(" 功能项")]),e._v(" "),s("h3",{attrs:{id:"本地文件json字典翻译"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本地文件json字典翻译"}},[e._v("#")]),e._v(" 本地文件json字典翻译")]),e._v(" "),s("h4",{attrs:{id:"文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件"}},[e._v("#")]),e._v(" 文件")]),e._v(" "),s("p",[e._v("resources/dict.json")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('{"leader":[{"value":"1","label":"领导"},{"value":"2","label":"苦工"}],"sex":[{"value":"1","label":"女"},{"value":"2","label":"男"}]}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h4",{attrs:{id:"示例1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例1"}},[e._v("#")]),e._v(" 示例1")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('    @Schema(description = "性别-默认实现类的json文件调用字典")\n    @DictField(dictionaryParams = "sex", dictImplBeanName = "localDictServiceImpl", relatedField = "sexText")\n    private Integer sex;\n\n    private String sexText;\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("h4",{attrs:{id:"示例2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例2"}},[e._v("#")]),e._v(" 示例2")]),e._v(" "),s("p",[e._v("配置文件：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("simple:\n  dict:\n    dictImplBeanName: localDictServiceImpl\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("使用：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('    @Schema(description = "性别-默认实现类的json文件调用字典")\n    @DictField(dictionaryParams = "sex", relatedField = "sexText")\n    private Integer sex;\n\n    private String sexText;\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("h3",{attrs:{id:"远程接口字典翻译"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#远程接口字典翻译"}},[e._v("#")]),e._v(" 远程接口字典翻译")]),e._v(" "),s("h4",{attrs:{id:"示例1-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例1-2"}},[e._v("#")]),e._v(" 示例1")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('    @Schema(description = "隐藏身份-默认远程调用接口实现类字典")\n    @DictField(dictionaryParams = "http://127.0.0.1:11120/dict/remote/hideIdentity", dictImplBeanName = "remoteDictServiceImpl", relatedField = "hideIdentityText")\n    private Integer hideIdentity;\n\n    private String hideIdentityText;\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("h4",{attrs:{id:"示例2-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例2-2"}},[e._v("#")]),e._v(" 示例2")]),e._v(" "),s("p",[e._v("配置文件：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("simple:\n  dict:\n    dictImplBeanName: remoteDictServiceImpl\n    remoteBaseUrl: http://127.0.0.1:11120\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[e._v("使用：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('    @Schema(description = "隐藏身份-默认远程调用接口实现类字典")\n    @DictField(dictionaryParams = "/dict/remote/hideIdentity", relatedField = "hideIdentityText")\n    private Integer hideIdentity;\n    \n    private String hideIdentityText;\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("h3",{attrs:{id:"自定义实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义实现"}},[e._v("#")]),e._v(" 自定义实现")]),e._v(" "),s("h4",{attrs:{id:"示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[e._v("#")]),e._v(" 示例")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('    @Schema(description = "身份标识-自定义远程调用接口实现类字典")\n    @DictField(dictionaryParams = "idCard", dictImplBeanName = "customDictServiceImpl", relatedField = "idCardText")\n    private Integer idCard;\n\n    private String idCardText;\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("h4",{attrs:{id:"自定义实现类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义实现类"}},[e._v("#")]),e._v(" 自定义实现类")]),e._v(" "),s("p",[e._v("示例代码：customDictServiceImpl 需继承DictService")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('@Service\npublic class CustomDictServiceImpl implements DictService {\n\n    private RestTemplate restTemplate = new RestTemplate();\n\n    @Override\n    public List<DictItem> getDictItemList(String dictionaryParams) {\n        String path = "http://127.0.0.1:11120/dict/custom/" + dictionaryParams;\n        ResponseEntity<Response<List<DictItem>>> responseEntity = restTemplate.exchange(path, HttpMethod.GET, null, new ParameterizedTypeReference<Response<List<DictItem>>>() {\n        });\n        return responseEntity.getBody().getData();\n    }\n}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);