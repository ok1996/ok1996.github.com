(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{682:function(e,s,a){"use strict";a.r(s);var n=a(7),t=Object(n.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[e._v("#")]),e._v(" 简介")]),e._v(" "),s("p",[e._v("提供常用及通用的工具类")]),e._v(" "),s("h3",{attrs:{id:"将列表转换为树形结构工具类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#将列表转换为树形结构工具类"}},[e._v("#")]),e._v(" 将列表转换为树形结构工具类")]),e._v(" "),s("h4",{attrs:{id:"treelistutils"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#treelistutils"}},[e._v("#")]),e._v(" TreeListUtils")]),e._v(" "),s("p",[e._v("将原始列表转换为树形结构")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('    /**\n     * 调用转换树型结构测试方法\n     *\n     * @param list 原始数据\n\t * @return 树形结构数据\n     */\n    private List<Demo> performConversionTest(List<Demo> list) {\n        String childrenFieldName = "children";\n        Predicate<Integer> isRootPredicate = parentId -> parentId == null || -1 == parentId;\n        return TreeListUtils.convert(list, childrenFieldName, isRootPredicate,  Demo::getId, Demo::getPid);\n    }\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br")])]),s("p",[e._v("将原始列表转换为树形结构-并将关联对象添加进去树形结构")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('    /**\n     * 调用转换树型结构测试方法-并将关联对象添加进去树形结构\n     *\n     * @param list 原始数据\n\t * @return 树形结构数据\n     */\n    private List<Demo> performConversionTest(List<Demo> list) {\n\t    Map<Integer, Data> idData = new HashMap<>();\n        idData.put(0, new Data(0, "ce0"));\n        idData.put(1, new Data(1, "ce1"));\n        idData.put(10, new Data(10, "ce10"));\n        idData.put(20, new Data(20, "ce20"));\n\t\t\n        String childrenFieldName = "children";\n        Predicate<Integer> isRootPredicate = parentId -> parentId == null || parentId == -1;\n        String dataFieldName = "data";\n\t\t\n        return TreeListUtils.convert(list, childrenFieldName, isRootPredicate, Demo::getId, Demo::getPid, idData, dataFieldName, Demo::getId);\n    }\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br")])]),s("h3",{attrs:{id:"唯一主键工厂及默认实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#唯一主键工厂及默认实现"}},[e._v("#")]),e._v(" 唯一主键工厂及默认实现")]),e._v(" "),s("h4",{attrs:{id:"idfactory"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#idfactory"}},[e._v("#")]),e._v(" IdFactory")]),e._v(" "),s("p",[e._v("默认的 IdGenerate 实现类 获取主键")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('    @Test\n    public void testGenerate() {\n        Long generatedId = IdFactory.generate();\n        log.info("IdFactory.generate():{}", generatedId);\n        assertNotNull(generatedId);\n\n        String generatedIdStr = IdFactory.generateStr();\n        log.info("IdFactory.generateStr():{}", generatedIdStr);\n        assertNotNull(generatedIdStr);\n    }\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br")])]),s("p",[e._v("自定义实现IdGenerate，初始化工厂使用; 完成后清除自定义实现，重新调用默认实现"),s("br"),e._v("\n注：在IdFactory.initialize前若已经使用初始化工厂应先清除IdFactory.clear()")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('public class IdGenerateCustomImpl implements IdGenerate {\n    @Override\n    public Long generate() {\n        return 1L;\n    }\n\n    @Override\n    public String generateStr() {\n        return "test";\n    }\n}\n\n    @Test\n    public void testGenerateCustomImpl() {\n        Supplier<IdGenerate> impl = IdGenerateCustomImpl::new;\n        IdFactory.initialize(impl);\n        assertEquals(IdFactory.generateStr(), "test");\n        assertEquals(IdFactory.generate(), 1L);\n\n        IdFactory.clear();\n        testGenerate();\n    }\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);