(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{248:function(e,s,a){e.exports=a.p+"assets/img/grpc.e682d220.png"},685:function(e,s,a){"use strict";a.r(s);var n=a(7),t=Object(n.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[e._v("#")]),e._v(" 简介")]),e._v(" "),s("p",[e._v("提供注解简化使用：Grpc客户端、 Grpc服务端")]),e._v(" "),s("h2",{attrs:{id:"引入依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引入依赖"}},[e._v("#")]),e._v(" 引入依赖")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("    <dependencies>\n        <dependency>\n            <groupId>cn.iosd</groupId>\n            <artifactId>simple-starter-grpc</artifactId>\n            <version>Version</version>\n        </dependency>\n    </dependencies>\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br")])]),s("h2",{attrs:{id:"配置项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置项"}},[e._v("#")]),e._v(" 配置项")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("simple:\n  ## simple-starter-grpc\n  grpc:\n    client:\n      #Grpc客户端 缺省项为false \n      enabled: true\n      #设置Grpc调用超时时间 缺省项为5000毫秒\n      timeout: 5000\n      channel:\n        local-grpc-server:\n          address: '127.0.0.1:12030'\n    server:\n      #Grpc服务端 缺省项为false \n      enabled: true\n      port: 12030\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br")])]),s("h2",{attrs:{id:"概念图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概念图"}},[e._v("#")]),e._v(" 概念图")]),e._v(" "),s("p",[s("img",{attrs:{src:a(248),alt:"概念图"}})]),e._v(" "),s("h2",{attrs:{id:"介绍及使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍及使用"}},[e._v("#")]),e._v(" 介绍及使用")]),e._v(" "),s("p",[e._v("由helloworld.proto生成以下文件")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("文件名称")]),e._v(" "),s("th",[e._v("介绍")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("HelloReply")]),e._v(" "),s("td",[e._v("包含了 HelloReply 消息的定义，消息包含一个名为 message 的字符串字段。")])]),e._v(" "),s("tr",[s("td",[e._v("HelloReplyOrBuilder")]),e._v(" "),s("td",[e._v("用于构建 HelloReply 消息，提供了 message 字段的 getter 和 setter 方法。")])]),e._v(" "),s("tr",[s("td",[e._v("HelloRequest")]),e._v(" "),s("td",[e._v("包含了 HelloRequest 消息的定义，消息包含一个名为 name 的字符串字段。")])]),e._v(" "),s("tr",[s("td",[e._v("HelloRequestOrBuilder")]),e._v(" "),s("td",[e._v("用于构建 HelloRequest 消息，提供了 name 字段的 getter 和 setter 方法。")])]),e._v(" "),s("tr",[s("td",[e._v("HelloWorldProto")]),e._v(" "),s("td",[e._v("包含了 Simple 服务和其中的方法 SayHello 的定义，可以在客户端和服务器端使用。")])]),e._v(" "),s("tr",[s("td",[e._v("SimpleGrpc")]),e._v(" "),s("td",[e._v("包含了客户端和服务器端用于实现 Simple 服务的方法，包括 SayHello 方法的实现。通过 gRPC 调用远程服务的接口。")])])])]),e._v(" "),s("h3",{attrs:{id:"grpc服务端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grpc服务端"}},[e._v("#")]),e._v(" Grpc服务端")]),e._v(" "),s("h4",{attrs:{id:"基础使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础使用"}},[e._v("#")]),e._v(" 基础使用")]),e._v(" "),s("p",[e._v("通过继承 SimpleGrpc.SimpleImplBase 类并重写 SayHello 方法来实现服务器端的 Simple 服务。"),s("br"),e._v("\n同时，你需要在当前类上添加 @GrpcService 注解来表明这是一个 gRPC 服务端。客户端可以通过 gRPC 调用 SayHello 方法来与该服务端进行通信。")]),e._v(" "),s("p",[e._v("示例：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('@GrpcService\npublic class GrpcHelloService extends SimpleGrpc.SimpleImplBase {\n    @Override\n    public void sayHello(HelloRequest req, StreamObserver<HelloReply> responseObserver) {\n        HelloReply reply = HelloReply.newBuilder().setMessage("GrpcHelloService Hello ==> " + req.getName()).build();\n        responseObserver.onNext(reply);\n        responseObserver.onCompleted();\n    }\n}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br")])]),s("h4",{attrs:{id:"增加请求头获取"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#增加请求头获取"}},[e._v("#")]),e._v(" 增加请求头获取")]),e._v(" "),s("p",[e._v("实现ServiceCallStartHeaders接口，统一拦截获取请求头并返回校验结果")]),e._v(" "),s("p",[e._v("示例：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('@Component\npublic class GrpcServiceCallStartHeaders implements ServiceCallStartHeaders {\n    @Override\n    public Status verifyHeaders(Metadata headers) {\n        String value = headers.get(Metadata.Key.of("token", Metadata.ASCII_STRING_MARSHALLER));\n        if (StringUtils.isEmpty(value)) {\n            return Status.UNAUTHENTICATED.withDescription("请求头参数token值为空");\n        }\n        return Status.OK;\n    }\n}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br")])]),s("h3",{attrs:{id:"grpc客户端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grpc客户端"}},[e._v("#")]),e._v(" Grpc客户端")]),e._v(" "),s("h4",{attrs:{id:"基础使用-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础使用-2"}},[e._v("#")]),e._v(" 基础使用")]),e._v(" "),s("p",[e._v("在你的服务层类中使用 SimpleGrpc.SimpleBlockingStub 类，该类用于调用 gRPC 服务的方法。"),s("br"),e._v('\n同时，你需要在当前类上添加 @GrpcClient(value = "grpc-server-hello") 注解来表明这是一个 gRPC 客户端'),s("br"),e._v("\nvalue 值为 simple.grpc.client.channel.{value}.address 配置项的名称。"),s("br"),e._v("\n这样，你就可以通过注入的 Stub 对象发起调用并与远程服务通信。")]),e._v(" "),s("p",[e._v("示例：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('@Service\npublic class GrpcDemoClientService {\n    @GrpcClient(value = "grpc-server-hello")\n    private SimpleGrpc.SimpleBlockingStub simpleStub;\n\n    public String sendHelloMessage(final String name) {\n        final HelloReply response = this.simpleStub.sayHello(HelloRequest.newBuilder().setName(name).build());\n        return response.getMessage();\n    }\n}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br")])]),s("h4",{attrs:{id:"增加单独设置调用超时时间"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#增加单独设置调用超时时间"}},[e._v("#")]),e._v(" 增加单独设置调用超时时间")]),e._v(" "),s("p",[e._v("timeout 值为 设置Grpc调用超时时间-单位毫秒，默认5000毫秒 等同于配置文件配置项 simple.grpc.client.timeout 但优先级较高")]),e._v(" "),s("p",[e._v("示例：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('@Service\npublic class GrpcDemoClientService {\n    @GrpcClient(value = "grpc-server-hello", timeout = 10000)\n    private SimpleGrpc.SimpleBlockingStub simpleStub;\n\n    public String sendHelloMessage(final String name) {\n        final HelloReply response = this.simpleStub.sayHello(HelloRequest.newBuilder().setName(name).build());\n        return response.getMessage();\n    }\n}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br")])]),s("h4",{attrs:{id:"增加请求头参数设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#增加请求头参数设置"}},[e._v("#")]),e._v(" 增加请求头参数设置")]),e._v(" "),s("h5",{attrs:{id:"只有一个请求头参数设置时"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#只有一个请求头参数设置时"}},[e._v("#")]),e._v(" 只有一个请求头参数设置时")]),e._v(" "),s("p",[e._v("实现ClientCallStartHeaders接口，统一设置请求头参数值，所有请求将都会进入此方法")]),e._v(" "),s("p",[e._v("示例-实现类：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('@Component\npublic class GrpcClientCallStartHeaders implements ClientCallStartHeaders {\n    @Override\n    public Map<String, String> headers() {\n        return Collections.singletonMap("token", "ces1");\n    }\n}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br")])]),s("p",[e._v("注解无需指定实现类名称：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('    @GrpcClient(value = "grpc-server-hello")\n    private SimpleGrpc.SimpleBlockingStub simpleStub;\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("h5",{attrs:{id:"有多个请求头参数设置时"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#有多个请求头参数设置时"}},[e._v("#")]),e._v(" 有多个请求头参数设置时")]),e._v(" "),s("p",[e._v("实现ClientCallStartHeaders接口，设置请求头参数值，注解需指定实现类名称才进入对应方法。")]),e._v(" "),s("p",[e._v("示例-实现类：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('@Component\npublic class GrpcClientCallStartHeaders implements ClientCallStartHeaders {\n    @Override\n    public Map<String, String> headers() {\n        return Collections.singletonMap("token", "ces1");\n    }\n}\n\n@Component\npublic class GrpcSencondClientCallStartHeaders implements ClientCallStartHeaders {\n    @Override\n    public Map<String, String> headers() {\n        return Collections.singletonMap("token", "ces2");\n    }\n}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br")])]),s("p",[e._v("注解指定实现类名称，注 多个请求头拦截时需要增加注解值 headerBeanName ：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('    @GrpcClient(value = "grpc-server-hello",headerBeanName = "grpcSecondClientCallStartHeaders")\n    private SimpleGrpc.SimpleBlockingStub simpleStub;\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);