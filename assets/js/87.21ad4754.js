(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{459:function(s,t,n){"use strict";n.r(t);var e=n(2),a=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("当你想要将你的 Python 应用程序打包成 Windows 安装程序时，Inno Setup 是一个常用的、免费的安装程序制作工具。以下是使用 Inno Setup 的基本步骤：")]),s._v(" "),t("ol",[t("li",[t("p",[t("strong",[s._v("下载和安装 Inno Setup：")])]),s._v(" "),t("ul",[t("li",[s._v("访问 "),t("a",{attrs:{href:"http://www.jrsoftware.org/isinfo.php",target:"_blank",rel:"noopener noreferrer"}},[s._v("Inno Setup 官方网站"),t("OutboundLink")],1),s._v("。")]),s._v(" "),t("li",[s._v("在下载页面中选择适合你系统的版本，并下载安装程序。")]),s._v(" "),t("li",[s._v("安装 Inno Setup，按照安装向导的步骤进行操作。")])])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("创建 Inno Setup 脚本：")])]),s._v(" "),t("ul",[t("li",[t("p",[s._v("在你的应用程序根目录创建一个新的文本文件，将其命名为 "),t("code",[s._v("setup.iss")]),s._v("（你也可以选择其他名字）。")])]),s._v(" "),t("li",[t("p",[s._v("打开 "),t("code",[s._v("setup.iss")]),s._v(" 文件，并编辑添加以下内容（以下只是一个简单的例子，请根据你的实际情况进行调整）：")]),s._v(" "),t("div",{staticClass:"language-pascal line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-pascal"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Setup"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nAppName"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("YourAppName\nAppVersion"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v("\nDefaultDirName"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("{pf}")]),s._v("\\YourAppName\nOutputDir"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Output\nOutputBaseFilename"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("YourAppNameSetup\nCompression"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("lzma\nSolidCompression"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("yes\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Files"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nSource"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(' "dist\\'),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v('"'),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" DestDir"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(' "'),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("{app}")]),s._v('"'),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" Flags"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" recursesubdirs createallsubdirs\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("ul",[t("li",[t("code",[s._v("AppName")]),s._v(": 你的应用程序的名称。")]),s._v(" "),t("li",[t("code",[s._v("AppVersion")]),s._v(": 应用程序的版本号。")]),s._v(" "),t("li",[t("code",[s._v("DefaultDirName")]),s._v(": 安装目录的默认位置。")]),s._v(" "),t("li",[t("code",[s._v("OutputDir")]),s._v(": 生成的安装程序文件的输出目录。")]),s._v(" "),t("li",[t("code",[s._v("OutputBaseFilename")]),s._v(": 生成的安装程序文件的基本名称。")]),s._v(" "),t("li",[t("code",[s._v("Compression")]),s._v(" 和 "),t("code",[s._v("SolidCompression")]),s._v(": 指定压缩设置。")])]),s._v(" "),t("p",[s._v("在 "),t("code",[s._v("[Files]")]),s._v(" 部分中，指定要包含在安装程序中的文件。上述例子假定你使用 PyInstaller，并且生成的可执行文件在 "),t("code",[s._v("dist")]),s._v(" 文件夹中。")])])])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("编译 Inno Setup 脚本：")])]),s._v(" "),t("ul",[t("li",[s._v("打开 Inno Setup 编辑器。")]),s._v(" "),t("li",[s._v("在编辑器中打开你的 "),t("code",[s._v("setup.iss")]),s._v(" 文件。")]),s._v(" "),t("li",[s._v("点击编译按钮。")])])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("生成安装程序：")])]),s._v(" "),t("ul",[t("li",[s._v("编译完成后，你将在指定的 "),t("code",[s._v("OutputDir")]),s._v(" 中找到生成的安装程序文件。")])])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("测试和分发：")])]),s._v(" "),t("ul",[t("li",[s._v("运行生成的安装程序进行测试。")]),s._v(" "),t("li",[s._v("如果一切正常，你可以将生成的安装程序文件分发给其他用户。")])])])]),s._v(" "),t("p",[s._v("这只是 Inno Setup 的基本用法。你可能需要根据你的应用程序的实际需求修改脚本文件。Inno Setup 的文档提供了更详细和高级的配置选项，你可以在 "),t("a",{attrs:{href:"http://www.jrsoftware.org/ishelp/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Inno Setup Documentation"),t("OutboundLink")],1),s._v(" 找到详细的文档。")])])}),[],!1,null,null,null);t.default=a.exports}}]);