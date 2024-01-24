(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{761:function(s,e,a){"use strict";a.r(e);var t=a(7),n=Object(t.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),e("p",[s._v("长链接通讯自动装配类，集群使用redis订阅及广播机制，若无redis配置则自动单机化")]),s._v(" "),e("h2",{attrs:{id:"引入依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#引入依赖"}},[s._v("#")]),s._v(" 引入依赖")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    <dependencies>\n        <dependency>\n            <groupId>cn.iosd</groupId>\n            <artifactId>simple-starter-socket</artifactId>\n            <version>Version</version>\n        </dependency>\n    </dependencies>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("h2",{attrs:{id:"配置项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置项"}},[s._v("#")]),s._v(" 配置项")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("simple:\n  ## 若无redisson配置则自动单机化\n  redisson:\n    #分布式锁 缺省项为false\n    enabled: true\n    type: standalone\n    address: 127.0.0.1\n    password: password\n    database: 0\n  ## simple-starter-socket\n  socket:\n    #长链接通讯及集群 缺省项为false\n    enabled: true\n    port: 12010\n    upgradeTimeout: 1000000\n    pingTimeout: 6000000\n    pingInterval: 25000\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br")])]),e("h2",{attrs:{id:"功能项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#功能项"}},[s._v("#")]),s._v(" 功能项")]),s._v(" "),e("h3",{attrs:{id:"权限认证"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#权限认证"}},[s._v("#")]),s._v(" 权限认证")]),s._v(" "),e("p",[s._v("实现AuthorizationListener"),e("br"),s._v("\n示例")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('@Slf4j\n@Configuration\npublic class SocketAuthorization implements AuthorizationListener {\n\n    /**\n     * 连接Url：http://localhost:12010?room=1003&token=1003\n     *\n     * @param data\n     * @return\n     */\n    @Override\n    public boolean isAuthorized(HandshakeData data) {\n        String token = data.getSingleUrlParam("token");\n        String room = data.getSingleUrlParam("room");\n        log.info("socket认证参数: token={}, room={}", token, room);\n        if (StringUtils.isEmpty(token) || StringUtils.isEmpty(room)) {\n            log.error("socket认证失败, 参数不符合要求: token={}, room={}", token, room);\n            return false;\n        }\n        return true;\n    }\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br")])]),e("h3",{attrs:{id:"测试页面"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试页面"}},[s._v("#")]),s._v(" 测试页面")]),s._v(" "),e("p",[s._v("源码路径：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("src/main/resources/static/socketio.html\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("连接示例：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("http://localhost:12010\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("带群聊Room")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("http://localhost:12010?room=101\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("带权限")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("http://localhost:12010?room=101&token=101\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("多群聊Room")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("http://localhost:12010?room=101,102&token=101,102\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("指定微服务")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("http://localhost:12010?applicationName=pure-demo-socket\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"发送消息方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#发送消息方法"}},[s._v("#")]),s._v(" 发送消息方法")]),s._v(" "),e("p",[s._v("注入使用")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    @Autowired\n    private SocketIOServer socketIoServer;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("广播所有连接客户端")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("SocketMessageServer.sendBroadcast\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("仅发送带群聊Room连接的客户端")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("SocketMessageServer.sendRoom\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("发送带指定微服务连接的客户端"),e("br"),s._v("\n（注：会往连接applicationName参数为空的客户端发送msg）"),e("br"),s._v("\n可自动获取微服务名称并发送消息")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("SocketMessageServer.sendService\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"集群示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#集群示例"}},[s._v("#")]),s._v(" 集群示例")]),s._v(" "),e("h4",{attrs:{id:"测试room及token"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试room及token"}},[s._v("#")]),s._v(" 测试room及token")]),s._v(" "),e("p",[s._v("启动 工程1：simple-demo-socket-one 和 工程2：simple-demo-socket-two")]),s._v(" "),e("p",[s._v("页面1连接工程1的socket ：http://localhost:12010?room=1001&token=1001"),e("br"),s._v("\n页面2连接工程2的socket ：http://localhost:12020?room=1002")]),s._v(" "),e("p",[s._v("接口调用工程1 发送消息以下消息，则页面1接收到数据")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("http://localhost:11040/message/room?message=test001&eventName=123&room=1001\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("接口调用工程1 发送消息以下消息，则页面2接收到数据")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("http://localhost:11040/message/room?message=test001&eventName=123&room=1002\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("接口调用工程1 发送消息以下消息，则页面1 页面2接收到数据")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("http://localhost:11040/message/broadcast?message=123\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"测试多群聊room"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试多群聊room"}},[s._v("#")]),s._v(" 测试多群聊Room")]),s._v(" "),e("p",[s._v("启动 工程1：simple-demo-socket-one 和 工程2：simple-demo-socket-two")]),s._v(" "),e("p",[s._v("页面1连接工程1的socket ：http://localhost:12010?room=1001&token=1001"),e("br"),s._v("\n页面2连接工程2的socket ：http://localhost:12020?room=1002,1003")]),s._v(" "),e("p",[s._v("接口调用工程1 发送消息以下消息，则页面1接收到数据")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("http://localhost:11040/message/room?message=test001&eventName=123&room=1001\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("接口调用工程1 发送消息以下消息，则页面2接收到数据")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("http://localhost:11040/message/room?message=test001&eventName=123&room=1002\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("接口调用工程1 发送消息以下消息，则页面2接收到数据")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("http://localhost:11040/message/room?message=test001&eventName=123&room=1003\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("接口调用工程1 发送消息以下消息，则页面1 页面2接收到数据")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("http://localhost:11040/message/broadcast?message=123\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"测试带指定微服务连接的客户端"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试带指定微服务连接的客户端"}},[s._v("#")]),s._v(" 测试带指定微服务连接的客户端")]),s._v(" "),e("p",[s._v("启动 工程1：simple-demo-socket-one 和 工程2：simple-demo-socket-two")]),s._v(" "),e("p",[s._v("页面1连接工程1的socket ：http://localhost:12010?room=1001&token=1001&applicationName=simple-demo-socket-two"),e("br"),s._v("\n页面2连接工程2的socket ：http://localhost:12020?applicationName=simple-demo-socket-one")]),s._v(" "),e("p",[s._v("接口调用工程1 发送消息以下消息，则页面2接收到数据")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("http://localhost:11040/message/service?message=23\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("接口调用工程2 发送消息以下消息，则页面1接收到数据")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("http://localhost:11050/message/service?message=2131\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);