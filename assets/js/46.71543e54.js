(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{633:function(t,a,e){"use strict";e.r(a);var s=e(4),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"编程规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编程规范"}},[t._v("#")]),t._v(" 编程规范")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#flag"}},[t._v("Flag")])]),e("li",[e("a",{attrs:{href:"#命名规范"}},[t._v("命名规范")])]),e("li",[e("a",{attrs:{href:"#gnu风格版本规则"}},[t._v("GNU风格版本规则")])]),e("li",[e("a",{attrs:{href:"#commit提交规范"}},[t._v("Commit提交规范")])]),e("li",[e("a",{attrs:{href:"#switch"}},[t._v("switch")])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"flag"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flag"}},[t._v("#")]),t._v(" Flag")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/Wei-Xia/most-frequent-technology-english-words",target:"_blank",rel:"noopener noreferrer"}},[t._v("程序员工作中常见的英语词汇"),e("OutboundLink")],1)])]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/reactive-streams",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/reactive-streams"),e("OutboundLink")],1),t._v(" "),e("ul",[e("li",[t._v("反应式（具有非阻塞背压的异步数据流）编程规范，已集成到Java9 API中Flow类")])])]),t._v(" "),e("li",[t._v("异步编程的反应式扩展 "),e("a",{attrs:{href:"https://github.com/ReactiveX",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/ReactiveX"),e("OutboundLink")],1)])]),t._v(" "),e("p",[e("strong",[t._v("boolean")])]),t._v(" "),e("blockquote",[e("p",[t._v("bool表示布尔型变量，bai也du就是逻辑型变量的定义符，zhi以英国数学家、布尔代数的奠基人乔dao治·布尔（George Boole）命名。")])]),t._v(" "),e("blockquote",[e("p",[t._v("布尔型变量bool的取值只有false和true，0为false，非0为true。（例如-1和1都是true）")])]),t._v(" "),e("blockquote",[e("p",[e("a",{attrs:{href:"https://github.com/json-schema-org",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSON Schema"),e("OutboundLink")],1),t._v(" 实际上就是一个JSON文件，文件内容是对JSON数据的结构及内容的约束，\n就像是xml文件的xsd文件对xml的验证。")])]),t._v(" "),e("h2",{attrs:{id:"命名规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命名规范"}},[t._v("#")]),t._v(" 命名规范")]),t._v(" "),e("ul",[e("li",[t._v("驼峰式命名法介绍：驼峰式命名法由小(大)写字母开始，后续每个单词首字母都大写。\n"),e("ul",[e("li",[t._v("Pascal Case （大驼峰）式命名法：首字母大写。")]),t._v(" "),e("li",[t._v("Camel Case （小驼峰）式命名法：首字母小写。")])])])]),t._v(" "),e("ul",[e("li",[t._v("项目名：全部小写，可使用"),e("code",[t._v("-")]),t._v("或"),e("code",[t._v("_")]),t._v("连接符以分割单词，且不能有空格、中文和其他特殊字符")]),t._v(" "),e("li",[t._v("包名：全部小写，单词不需分割，且不能有空格、中文和其他特殊字符")]),t._v(" "),e("li",[t._v("常量：全部大写，可使用"),e("code",[t._v("_")]),t._v("连接符以分割单词")]),t._v(" "),e("li",[t._v("变量：小驼峰式命名法，前缀应当是名词。尽量在变量名字中体现所属类型，如：length、count表示数字类型；name、title表示字符串类型")]),t._v(" "),e("li",[t._v("函数：小驼峰式命名法，前缀应当为动词。")])]),t._v(" "),e("ul",[e("li",[t._v("代码中的命名均不能以下划线或美元符号开始，也不能以下划线或美元符号结束。")]),t._v(" "),e("li",[t._v("代码中的命名严禁使用拼音与英文混合的方式，更不允许直接使用中文的方式。注意，即使纯拼音命名方式也要避免采用。")]),t._v(" "),e("li",[t._v("类名使用UpperCamelCase风格，但以下情形例外：DO / BO / DTO / VO / AO / PO等。")]),t._v(" "),e("li",[t._v("方法名、参数名、成员变量、局部变量都统一使用lowerCamelCase风格，必须遵从驼峰形式。")]),t._v(" "),e("li",[t._v("常量命名全部大写，单词间用下划线隔开，力求语义表达完整清楚，不要嫌名字长。")]),t._v(" "),e("li",[t._v("抽象类命名使用Abstract或Base开头。")]),t._v(" "),e("li",[t._v("异常类命名使用Exception结尾。")]),t._v(" "),e("li",[t._v("测试类命名以它要测试的类名开始，以Test结尾。")]),t._v(" "),e("li",[t._v("类型与中括号紧挨相连来定义数组。")]),t._v(" "),e("li",[t._v("POJO类中布尔类型的变量，都不要加is前缀，否则部分框架解析会引起序列化错误。")]),t._v(" "),e("li",[t._v("包名统一使用小写，点分隔符之间有且仅有一个自然语义的英语单词。包名统一使用单数形式，但是类名如果有复数含义，类名可以使用复数形式。")]),t._v(" "),e("li",[t._v("杜绝完全不规范的缩写，避免望文不知义。")]),t._v(" "),e("li",[t._v("最好逐一声明每个变量而不是写在一行。")]),t._v(" "),e("li",[t._v("Java的变量声明尽量靠近变量第一次使用的地方。")])]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.cnblogs.com/polk6/p/4660195.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript 开发规范"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.cnblogs.com/caixueliang/p/7469638.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java开发相关命名规范"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/alibaba/p3c/blob/master/%E9%98%BF%E9%87%8C%E5%B7%B4%E5%B7%B4Java%E5%BC%80%E5%8F%91%E6%89%8B%E5%86%8C%EF%BC%88%E5%8D%8E%E5%B1%B1%E7%89%88%EF%BC%89.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("阿里巴巴Java开发手册（华山版）：编程规约.命名风格"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"gnu风格版本规则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gnu风格版本规则"}},[t._v("#")]),t._v(" GNU风格版本规则")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://semver.org/lang/zh-CN",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://semver.org/lang/zh-CN"),e("OutboundLink")],1)])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("MAJOR.MINOR.PATCH")]),t._v("即： "),e("code",[t._v("主版本号.次版本号.修正版本号")])]),t._v(" "),e("li",[e("code",[t._v("Major.Minor.Revision")]),t._v("即： "),e("code",[t._v("主版本号.次版本号.修正版本号")])])]),t._v(" "),e("ol",[e("li",[e("p",[e("code",[t._v("Major")]),t._v(" 主版本号：表示当前APR的主版本号，它的变化通常意味着APR的巨大的变化，比如体系结构的重新设计、API的重新设计、\n重大的重构、重大的"),e("code",[t._v("feature")]),t._v("改动、重大的不兼容性的变化等等，而且这种变化通常会导致APR版本的向前不兼容。")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("Minor")]),t._v(" 次版本号：发布较大的新"),e("code",[t._v("feature")]),t._v("功能，或者较大的重构或者模块变化，或者出现不兼容性改动，会增加子版本号；\n子版本的发布会伴随着完整的"),e("code",[t._v("change log")]),t._v("，算是一个较大的版本发布，有仪式感")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("Revision")]),t._v("/"),e("code",[t._v("PATCH")]),t._v(" 修正版本号：往往是"),e("code",[t._v("bug fix")]),t._v("，或者增加较小的"),e("code",[t._v("feature")]),t._v("，较小的功能改进或者模块变化，\n在保证完整向后兼容的前提下，会增加修正版本号")])]),t._v(" "),e("li",[e("p",[t._v("当主版本号增加时，子版本号及修正版本号置"),e("code",[t._v("0")])])]),t._v(" "),e("li",[e("p",[t._v("当子版本号增加时，修正版本号置"),e("code",[t._v("0")])])])]),t._v(" "),e("p",[e("strong",[t._v("按照测试过程标识")])]),t._v(" "),e("ol",[e("li",[e("code",[t._v("Alpha")]),t._v("版：预览版或内部测试版，一般不向外部发布，会有很多Bug。")]),t._v(" "),e("li",[e("code",[t._v("Beta")]),t._v("版：公测版。")]),t._v(" "),e("li",[e("code",[t._v("RC")]),t._v("版："),e("code",[t._v("Release Candidate")]),t._v("候选版本。也叫做"),e("code",[t._v("Gamma")]),t._v("版本。")])]),t._v(" "),e("h2",{attrs:{id:"commit提交规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#commit提交规范"}},[t._v("#")]),t._v(" Commit提交规范")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://docs.github.com/en/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword",target:"_blank",rel:"noopener noreferrer"}},[t._v("linking-a-pull-request-to-an-issue-using-a-keyword"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines",target:"_blank",rel:"noopener noreferrer"}},[t._v("angular.js-git-commit-guidelines"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y",target:"_blank",rel:"noopener noreferrer"}},[t._v("AngularJS Git Commit Message Conventions"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.jianshu.com/p/6eafeb9b1edb",target:"_blank",rel:"noopener noreferrer"}},[t._v("关于git提交规范"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/woai3c/Front-end-articles/blob/master/git%20commit%20style.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("git commit 提交规范"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/commitizen",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/commitizen"),e("OutboundLink")],1)])]),t._v(" "),e("ul",[e("li",[t._v("bugfix/fix/fixed: 表示修复 bug")]),t._v(" "),e("li",[t._v("feature: 表示增加新功能")]),t._v(" "),e("li",[t._v("add: 表示增加类、文件、代码块等")]),t._v(" "),e("li",[t._v("delete/del: 表示删除类、文件、代码块等")]),t._v(" "),e("li",[t._v("update: 表示对代码块、功能的更新")]),t._v(" "),e("li",[t._v("refactor: 表示对代码块、功能重构（即不是新增功能，也不是修改bug的代码变动）")]),t._v(" "),e("li",[t._v("arch: 表示输出中间版本，用于测试等")]),t._v(" "),e("li",[t._v("release to v1.0.0: 表示打包输出的版本号")]),t._v(" "),e("li",[t._v("test：增加测试")]),t._v(" "),e("li",[t._v("chore：构建过程或辅助工具的变动")])]),t._v(" "),e("ul",[e("li",[t._v("mod 修改")]),t._v(" "),e("li",[t._v("changed ( 完成的任务 )")]),t._v(" "),e("li",[t._v("rem:移除（Remove,移除功能）")]),t._v(" "),e("li",[t._v("feat：新功能（feature）")]),t._v(" "),e("li",[t._v("docs：文档（documentation）")]),t._v(" "),e("li",[t._v("style：格式（不影响代码运行的变动）")])]),t._v(" "),e("h2",{attrs:{id:"switch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#switch"}},[t._v("#")]),t._v(" switch")]),t._v(" "),e("ul",[e("li",[t._v("在Python中没有"),e("code",[t._v("switch")]),t._v("语法")]),t._v(" "),e("li",[t._v("JavaScript的"),e("code",[t._v("switch")]),t._v("语法跟Java一样")]),t._v(" "),e("li",[t._v("在Java中")])]),t._v(" "),e("blockquote",[e("p",[t._v("如果"),e("code",[t._v("default")]),t._v("不是"),e("code",[t._v("switch")]),t._v("代码块中最后一个"),e("code",[t._v("case")]),t._v("，请记得用"),e("code",[t._v("break;")]),t._v("结束默认"),e("code",[t._v("case")]),t._v("。")])]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("toLowerCase")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注意：此处如果条件满足但没有添加break，则代码会继续执行，")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 会无条件执行后面的语句，直到遇到break")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//break;")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// fall thorugh")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"b"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"b"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果default写在最前面，会先执行，")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 但是如果没有写break;还是会无条件执行后面的语句")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"default"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("ul",[e("li",[t._v("在Go中")])]),t._v(" "),e("ol",[e("li",[t._v("左花括号"),e("code",[t._v("{")]),t._v("必须与"),e("code",[t._v("switch")]),t._v("处于同一行；")]),t._v(" "),e("li",[t._v("条件表达式不限制为常量或者整数；")]),t._v(" "),e("li",[t._v("单个"),e("code",[t._v("case")]),t._v("中，可以出现多个结果选项，以"),e("code",[t._v(",")]),t._v("分割；")]),t._v(" "),e("li",[t._v("与C语言等规则相反，Go语言不需要用"),e("code",[t._v("break")]),t._v("来明确退出一个"),e("code",[t._v("case")]),t._v("；")]),t._v(" "),e("li",[t._v("只有在"),e("code",[t._v("case")]),t._v("中明确添加"),e("code",[t._v("fallthrough")]),t._v("关键字，才会继续执行紧跟的下一个"),e("code",[t._v("case")]),t._v("；")]),t._v(" "),e("li",[t._v("可以不设定"),e("code",[t._v("switch")]),t._v("之后的条件表达式，在此种情况下，整个"),e("code",[t._v("switch")]),t._v("结构与多个"),e("code",[t._v("if...else...")]),t._v("的逻辑作用等同。")])]),t._v(" "),e("div",{staticClass:"language-go extra-class"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" strings"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ToLower")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    fmt"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"b"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    fmt"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"b"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    fmt"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"default"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);