(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{446:function(a,s,t){"use strict";t.r(s);var r=t(2),n=Object(r.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("blockquote",[s("p",[a._v("首先得讲讲，为什么已经有这么多博客写这个maven 安装本地jar包我还要写，主要是我发现网上得大部分教程博客都是不全的，容易遇到让人懵逼的事情，我的博客虽然我不保证我的你肯定百分百没问题，但是保你99%还是可以的吧？有问题就去找那个1%")])]),a._v(" "),s("h2",{attrs:{id:"_1-注意事项-安装前要明白"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-注意事项-安装前要明白"}},[a._v("#")]),a._v(" 1. 注意事项（安装前要明白）")]),a._v(" "),s("p",[a._v("使用常规的安装方式也就是我下面讲的安装方式，安装到本地的jar包，pom文件是没有东西的，也就是说jar需要的依赖是没有的，如果直接使用需要对应项目本身提供，否则就需要解压jar包找到pom文件，将里面的内容粘贴到本地仓库里面对应jar包的pom文件里面")]),a._v(" "),s("h2",{attrs:{id:"_2-示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-示例"}},[a._v("#")]),a._v(" 2. 示例")]),a._v(" "),s("p",[a._v("需要安装的jar包就在当前目录，否正需指定全路径，-Dfile：可以用绝对路径，比如D:\\jar\\commons-lang3-3.9.jar")]),a._v(" "),s("p",[a._v("DgroupId、DartifactId、Dversion：这几个就按照依赖写的配置就好")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("dependency"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("groupId"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("org.apache.commons"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/groupId"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("artifactId"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("commons-lang"),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("3")]),a._v("<")]),a._v("/artifactId"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("version"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v("."),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("9")]),a._v("<")]),a._v("/version"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/dependency"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("mvn install:install-file "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-Dfile=commons-lang3-3.9.jar"')]),a._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-DgroupId=org.apache.commons"')]),a._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-DartifactId=commons-lang3"')]),a._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-Dversion=3.9"')]),a._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-Dpackaging=jar"')]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("h2",{attrs:{id:"_3-实际应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-实际应用"}},[a._v("#")]),a._v(" 3. 实际应用")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("mvn install:install-file "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-Dfile=commons-lang3-3.9.jar"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-DgroupId=org.apache.commons"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-DartifactId=commons-lang3"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-Dversion=3.9"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-Dpackaging=jar"')]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"_4-加压jar包找到pom文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-加压jar包找到pom文件"}},[a._v("#")]),a._v(" 4. 加压jar包找到pom文件")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/db306e6ccd864d1e91a0a84ea35e41d6.png",alt:"在这里插入图片描述"}})]),a._v(" "),s("h2",{attrs:{id:"_5-找到安装jar包的仓库路径-找到对应pom文件内容复制粘贴过去"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-找到安装jar包的仓库路径-找到对应pom文件内容复制粘贴过去"}},[a._v("#")]),a._v(" 5. 找到安装jar包的仓库路径，找到对应pom文件内容复制粘贴过去")]),a._v(" "),s("p",[a._v("这个很简单，执行第三点命令安装jar包的时候会打印出来直接去到对应目录，即可看到pom文件。打开文件将对应pom文件内容复制粘贴过去进去就可以了\n"),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/9a08f8372d584c859408e6ed8f1676cf.jpeg",alt:"在这里插入图片描述"}})])])}),[],!1,null,null,null);s.default=n.exports}}]);