(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{633:function(s,a,e){"use strict";e.r(a);var t=e(7),l=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("注：建议先看完文章再操作或在测试环境中自行测试")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("主库192.168.50.56，端口2205，容器名称mysql\n从库192.168.50.64，端口2206，容器名称mysqlread\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"备份数据库sql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#备份数据库sql"}},[s._v("#")]),s._v(" 备份数据库sql")]),s._v(" "),a("p",[s._v("备份你需要的数据库（例：apolloconfigdb apolloportaldb）sql 同时查看偏移量。期间使用mysqldump会很慢")]),s._v(" "),a("p",[s._v("命令")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#进入容器\ndocker exec -it mysql bash\n#备份数据库\nmysqldump -h192.168.50.56 -P2205 -uroot -pim@mysql123 --databases apolloconfigdb apolloportaldb > /home/mysql_db2.sql\n#查看偏移量\ndocker exec -it mysql bash -c 'mysql -uroot -pim@mysql123 -e\"show master status\\G;\"'\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("偏移量显示：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" -----mysql-bin.000007----\n-----154----\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("注：为以防万一，在执行mysqldump命令时查看偏移量1一次，在执行完成mysqldump命令在查看偏移量2一次）")]),s._v(" "),a("h2",{attrs:{id:"从容器里面拷文件到宿主机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从容器里面拷文件到宿主机"}},[s._v("#")]),s._v(" 从容器里面拷文件到宿主机")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" docker cp mysql:/home /data/test\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"传输文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#传输文件"}},[s._v("#")]),s._v(" 传输文件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("cd /data/test\nscp  -P 22  mysql_db2.sql root@192.168.50.64:/data/test/mysql_db2.sql\n64服务器密码\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"新数据库导入sql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新数据库导入sql"}},[s._v("#")]),s._v(" 新数据库导入sql")]),s._v(" "),a("p",[s._v("新数据容器名称为mysqlread")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker cp /data/test mysqlread:/sql\ndocker exec -it mysqlread bash \ncd sql\nmysql -uroot -pim@mysql123 < mysql_db2.sql;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"设置从库同步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置从库同步"}},[s._v("#")]),s._v(" 设置从库同步")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('docker exec -it mysqlread bash -c \'mysql -uroot -pim@mysql123 -e "stop slave;reset slave;CHANGE MASTER TO MASTER_HOST=\\"192.168.50.56\\", MASTER_PORT=2205, MASTER_USER=\\"root\\", MASTER_PASSWORD=\\"im@mysql123\\",MASTER_LOG_FILE=\\"mysql-bin.000007\\",MASTER_LOG_POS=154;start slave;"\'\n（注：偏移量先使用1，然后查看结果是否正常。若异常则使用偏移量2设置）\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"查看结果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看结果"}},[s._v("#")]),s._v(" 查看结果")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" docker exec -it mysqlread bash -c 'mysql -uroot -pim@mysql123 -e\"show slave status\\G\"'\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=l.exports}}]);