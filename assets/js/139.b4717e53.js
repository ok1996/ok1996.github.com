(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{755:function(s,e,a){"use strict";a.r(e);var n=a(7),t=Object(n.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),e("p",[s._v("提供 注解简化使用：分布式锁、分布式幂等"),e("br"),s._v("\n提供 分布式加锁、解锁等服务类"),e("br"),s._v("\n提供 常用的对象缓存的常用操作服务类"),e("br"),s._v("\n提供 CacheManager并配置Cacheable注解常用配置及自定义CacheName对应配置")]),s._v(" "),e("p",[s._v("分布式幂等：1：若干时间内防重复提交功能 2：业务逻辑执行期间内防重复提交功能")]),s._v(" "),e("h2",{attrs:{id:"分布式幂等和锁的主要区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分布式幂等和锁的主要区别"}},[s._v("#")]),s._v(" 分布式幂等和锁的主要区别")]),s._v(" "),e("table",[e("thead",[e("tr",[e("th",[s._v("-")]),s._v(" "),e("th",[s._v("锁")]),s._v(" "),e("th",[s._v("分布式幂等")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("目的")]),s._v(" "),e("td",[s._v("保护资源完整性，防止多线程导致数据竞争")]),s._v(" "),e("td",[s._v("用于保证操作的一致性，防止重复请求影响系统状态")])]),s._v(" "),e("tr",[e("td",[s._v("领域")]),s._v(" "),e("td",[s._v("同步机制，用于控制对共享资源的并发访问")]),s._v(" "),e("td",[s._v("分布式系统设计理念，用于处理分布式系统中的重复请求")])])])]),s._v(" "),e("h2",{attrs:{id:"引入依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#引入依赖"}},[s._v("#")]),s._v(" 引入依赖")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    <dependencies>\n        <dependency>\n            <groupId>cn.iosd</groupId>\n            <artifactId>simple-starter-redisson</artifactId>\n            <version>Version</version>\n        </dependency>\n    </dependencies>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("h2",{attrs:{id:"配置项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置项"}},[s._v("#")]),s._v(" 配置项")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("simple:\n  redisson:\n    #分布式锁 缺省项为false\n    enabled: true\n    type: standalone\n    address: 127.0.0.1\n    password: password\n    database: 0\n    #Cacheable注解自定义配置\n    cacheable:\n      #缺省项为false,优先级小于simple.redisson.enabled\n      enabled: true\n      config:\n        #自定义cacheName及过期时间\n        cacheExpiresAfterFiveMinutes:\n          ttl: 300000\n          maxIdleTime: 300000\n        cacheExpiresAfterTenSecond:\n          ttl: 10000\n          maxIdleTime: 10000\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br")])]),e("h2",{attrs:{id:"功能项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#功能项"}},[s._v("#")]),s._v(" 功能项")]),s._v(" "),e("h3",{attrs:{id:"注解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注解"}},[s._v("#")]),s._v(" 注解")]),s._v(" "),e("h4",{attrs:{id:"分布式幂等"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分布式幂等"}},[s._v("#")]),s._v(" 分布式幂等")]),s._v(" "),e("p",[s._v("注解： @DistributedIdempotent\n使用示例：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('@DistributedIdempotent\n@DistributedIdempotent(value = "#keyName", message = "请求重复！")\n@DistributedIdempotent(value = "\'demo:singIn4:\' + #keyName", message = "请求重复！")\n@DistributedIdempotent(value = "#keyName", message = "请求重复！", expireTime = 5, executionFinishedUnlock = false)\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("各字段说明：")]),s._v(" "),e("ul",[e("li",[s._v("value：锁的名字,支持el表达式")]),s._v(" "),e("li",[s._v("message：获取锁失败后的提示信息")]),s._v(" "),e("li",[s._v("acquireTimeout：获取锁的最长等待时间 默认0")]),s._v(" "),e("li",[s._v("expireTime：获取后持有锁的最长时间 默认10")]),s._v(" "),e("li",[s._v("unit：时间单位 默认秒")]),s._v(" "),e("li",[s._v("executionFinishedUnlock：是否在业务执行结束后解锁,默认true")])]),s._v(" "),e("h4",{attrs:{id:"分布式锁"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分布式锁"}},[s._v("#")]),s._v(" 分布式锁")]),s._v(" "),e("p",[s._v("注解： @DistributedLock\n使用示例：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('@DistributedLock(value = "demo-redisson:decrement", leaseTime = 105)\n@DistributedLock(value = "demo-redisson:decrementException", leaseTime = 105)\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("各字段说明：")]),s._v(" "),e("ul",[e("li",[s._v("value：锁的名字")]),s._v(" "),e("li",[s._v("leaseTime：锁的有效时间 默认10秒")])]),s._v(" "),e("h3",{attrs:{id:"服务类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务类"}},[s._v("#")]),s._v(" 服务类")]),s._v(" "),e("h4",{attrs:{id:"分布式锁服务类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分布式锁服务类"}},[s._v("#")]),s._v(" 分布式锁服务类")]),s._v(" "),e("p",[s._v("注入使用")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    @Autowired(required = false)\n    private RedissonLockService redissonLockService;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("加锁操作")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    /**\n     * 加锁操作 （设置锁的有效时间）\n     *\n     * @param lockName  锁名称\n     * @param leaseTime 锁有效时间-秒\n     */\n     redissonLockService.lock(lockName, leaseTime);\n\n    /**\n     * 加锁操作(tryLock锁，有等待时间）\n     *\n     * @param lockName  锁名称\n     * @param leaseTime 锁有效时间\n     * @param waitTime  等待时间\n     */\n     redissonLockService.tryLock(lockName, leaseTime, waitTime)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br")])]),e("p",[s._v("解锁操作")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    /**\n     * 解锁\n     *\n     * @param lockName 锁名称\n     */\n     redissonLockService.unlock(lockName);\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h4",{attrs:{id:"缓存服务类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#缓存服务类"}},[s._v("#")]),s._v(" 缓存服务类")]),s._v(" "),e("p",[s._v("注入使用")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    @Autowired(required = false)\n    private RedissonCacheService redissonCacheService;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("常用示例代码")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('  @Operation(summary = "Object-获取")\n    @GetMapping("/object/{key}")\n    public Response<PersonVo> getObject(@PathVariable String key) {\n        return Response.ok(redissonCacheService.getObject(key));\n    }\n\n    @Operation(summary = "Object-保存")\n    @PostMapping("/object/{key}")\n    public Response<?> setObject(@PathVariable String key, @RequestBody PersonVo value) {\n        redissonCacheService.setObject(key, value);\n        return Response.ok();\n    }\n\n    @Operation(summary = "List-获取")\n    @GetMapping("/list/{key}")\n    public Response<List<PersonVo>> getList(@PathVariable String key) {\n        return Response.ok(redissonCacheService.getList(key));\n    }\n\n    @Operation(summary = "List-保存")\n    @PostMapping("/list/{key}")\n    public Response<?> setList(@PathVariable String key, @RequestBody List<PersonVo> value) {\n        redissonCacheService.setList(key, value);\n        return Response.ok();\n    }\n\n    @Operation(summary = "Map-获取")\n    @GetMapping("/map/{key}")\n    public Response<Map<String, PersonVo>> getMap(@PathVariable String key) {\n        return Response.ok(redissonCacheService.getMap(key));\n    }\n\n    @Operation(summary = "Map-保存")\n    @PostMapping("/map/{key}")\n    public Response<?> setMap(@PathVariable String key, @RequestBody PersonVo value) {\n        Map save = new HashMap(2);\n        save.put(key, value);\n        redissonCacheService.setMap(key, save);\n        return Response.ok();\n    }\n\n    @Operation(summary = "删除")\n    @DeleteMapping("/{key}")\n    public Response<?> delete(@PathVariable("key") String key) {\n        redissonCacheService.delete(key);\n        return Response.ok();\n    }\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br")])]),e("h3",{attrs:{id:"获取redisson客户端"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#获取redisson客户端"}},[s._v("#")]),s._v(" 获取Redisson客户端")]),s._v(" "),e("p",[s._v("注入")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    @Autowired(required = false)\n    private RedissonManager redissonManager;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("获取客户端")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    redissonManager.getRedisson()\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"redisson连接类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redisson连接类型"}},[s._v("#")]),s._v(" redisson连接类型")]),s._v(" "),e("p",[s._v("支持：standalone、sentinel、cluster、masterSlave")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("simple:\n  redisson:\n    #缺省项为false\n    enabled: true\n    type: standalone\n    address: 127.0.0.1:6379\n    password: password\n    database: 0\n\n  ## 哨兵配置\n  ##  address:  ** 格式为: sentinel.conf配置里的sentinel别名,sentinel1节点的服务IP和端口，sentinel2节点的服务IP和端口，sentinel3节点的服务IP和端口\n  ##  如sentinel.conf里配置为sentinel monitor my-sentinel-name 127.0.0.1 6379 2,那么这里就配置my-sentinel-name\n  #\n  #  address:  my-sentinel-name,127.0.0.1:26379,127.0.0.1:26389,127.0.0.1:26399\n  #  type:  sentinel\n  #  password: password\n  #  database: 0\n\n  ## 集群方式\n  ## cluster方式至少6个节点(3主3从，3主做sharding，3从用来保证主宕机后可以高可用)\n  #\n  #  address:  127.0.0.1:6379,127.0.0.1:6380,127.0.0.1:6381,127.0.0.1:6382,127.0.0.1:6383,127.0.0.1:6384\n  #  type:  cluster\n  #  password: password\n\n  ## 主从方式\n  ## 地址格式为**主节点,子节点,子节点**\n  ## 如主节点:127.0.0.1:6379，从节点127.0.0.1:6380，127.0.0.1:6381\n  #\n  #  address:  127.0.0.1:6379,127.0.0.1:6380,127.0.0.1:6381\n  #  type:  masterSlave\n  #  password: password\n  #  database: 0\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br")])]),e("h3",{attrs:{id:"使用注解cacheable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用注解cacheable"}},[s._v("#")]),s._v(" 使用注解Cacheable")]),s._v(" "),e("p",[s._v("已提供的cacheName及对应过期时间配置")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("cacheExpiresAfterTenMinutes:缓存时间10分钟\ncacheExpiresAfterOneHour:缓存时间60分钟\ncacheNeverExpires:未设置缓存失效时间\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("可在配置文件中设置自定义cacheName及对应过期时间配置"),e("br"),s._v("\n如下自定义cacheExpiresAfterFiveMinutes：缓存时间5分钟"),e("br"),s._v("\n自定义cacheExpiresAfterTenSecond：缓存时间10秒"),e("br"),s._v("\n例：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("simple:\n  redisson:\n    #缺省项为false\n    enabled: true\n    type: standalone\n    address: 127.0.0.1:6379\n    password: password\n    database: 0\n    #Cacheable注解自定义配置\n    cacheable:\n      #缺省项为false,优先级小于simple.redisson.enabled\n      enabled: true\n      config:\n        #自定义cacheName及过期时间\n        cacheExpiresAfterFiveMinutes:\n          ttl: 300000\n          maxIdleTime: 300000\n        cacheExpiresAfterTenSecond:\n          ttl: 10000\n          maxIdleTime: 10000\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br")])]),e("p",[s._v("在服务层中使用示例：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('    @Cacheable(key = "#keyName + \'FiveMinutes\'", cacheNames = "cacheExpiresAfterFiveMinutes", condition = "#keyName.length()>2")\n    public String annotateTestCacheNameFiveMinutes(String keyName) {\n        log.info("cacheExpiresAfterFiveMinutes:{}", keyName);\n        return keyName;\n    }\n\n    @Cacheable(key = "#keyName + \'TenSecond\'", cacheNames = "cacheExpiresAfterTenSecond", condition = "#keyName.length()>2")\n    public String annotateTestCacheNameTenSecond(String keyName) {\n        log.info("cacheExpiresAfterTenSecond:{}", keyName);\n        return keyName;\n    }\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])])])}),[],!1,null,null,null);e.default=t.exports}}]);