(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{404:function(i,s,a){"use strict";a.r(s);var v=a(2),r=Object(v.a)({},(function(){var i=this,s=i._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":i.$parent.slotKey}},[s("h2",{attrs:{id:"什么是分布式架构-和微服务架构的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是分布式架构-和微服务架构的区别"}},[i._v("#")]),i._v(" 什么是分布式架构？和微服务架构的区别？")]),i._v(" "),s("ol",[s("li",[i._v("分布式架构：根据业务功能对系统进行拆分，每个业务模块单独作为一个项目进行开发，成为一个服务。")]),i._v(" "),s("li",[i._v("微服务架构其实是一种设计良好的，分布式架构解决方案")])]),i._v(" "),s("h2",{attrs:{id:"微服务架构是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#微服务架构是什么"}},[i._v("#")]),i._v(" 微服务架构是什么？")]),i._v(" "),s("blockquote",[s("p",[i._v("在微服务架构之前普遍使用的是单体架构也就是常说的单体应用，随着应用业务的复杂，单体应用暴露出它的劣势，耦合性高、不利于团队开发、\n代码管理成本高项目沉重等问题，为了应对这种问题于是就有了微服务架构，微服务架构简单来说就是：将单体应用进行服务拆分，通过简单的机制通信\n进行服务管理和配合,有效解决了复杂业务的服务解耦问题，因为拆分出来的各个微服务都可以独立部署和开发，所以也有提高工程协作开发效率等优势。")])]),i._v(" "),s("h2",{attrs:{id:"微服务技术栈大致包含哪些"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#微服务技术栈大致包含哪些"}},[i._v("#")]),i._v(" 微服务技术栈大致包含哪些？")]),i._v(" "),s("p",[i._v("首先微服务的技术栈包含一下的内容")]),i._v(" "),s("ol",[s("li",[i._v("服务集群（单体应用拆分出来的微服务）")]),i._v(" "),s("li",[i._v("注册中心（管理记录微服务的ip、端口、能做的事情）")]),i._v(" "),s("li",[i._v("配置中心（统一管理服务集群的配置，通过热加载的方式通知服务进行配置更新）")]),i._v(" "),s("li",[i._v("服务网关（服务访问控制，校验用户身份和进行负载均衡）")]),i._v(" "),s("li",[i._v("数据库")]),i._v(" "),s("li",[i._v("分布式缓存（热点业务数据）")]),i._v(" "),s("li",[i._v("分布式搜索（进行复杂搜索）")]),i._v(" "),s("li",[i._v("消息队列（异步、解耦、削峰，增加服务吞吐能力，加快服务响应）")]),i._v(" "),s("li",[i._v("分布式日志（统计整个集群的日志，进行分析）")]),i._v(" "),s("li",[i._v("系统监控，链路追踪（监控服务状态，如果出现问题可以直接定位到具体的服务方法和栈信息）")]),i._v(" "),s("li",[i._v("自动化部署Jenkins + docker + kubernetes(k8s) 或者rancher（持续集成（DevOps），通过Jenkins打包编译，docker打包生产镜像，\nkubernetes亦或者rancher容器管理技术进行容器管理）")])]),i._v(" "),s("p",{attrs:{align:"center"}},[s("img",{staticStyle:{cursor:"zoom-in"},attrs:{src:"/images/springcloud/weifuwu.jpg"}})]),i._v(" "),s("h2",{attrs:{id:"微服务架构特征"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#微服务架构特征"}},[i._v("#")]),i._v(" 微服务架构特征")]),i._v(" "),s("ol",[s("li",[i._v("单一职责：微服务拆分的粒度更小，每个服务都对应唯一的业务能力，避免重复业务和职责不清晰")]),i._v(" "),s("li",[i._v("面向服务：每个服务对外暴露业务接口")]),i._v(" "),s("li",[i._v("自治：团队独立、技术独立、数据独立、部署独立")]),i._v(" "),s("li",[i._v("隔离性强：服务调用做好隔离、容错、降级、避免级联问题")])]),i._v(" "),s("h2",{attrs:{id:"springcloud是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#springcloud是什么"}},[i._v("#")]),i._v(" springCloud是什么？")]),i._v(" "),s("blockquote",[s("p",[i._v("SpringCloud 严格来说不是一个具体的框架，而是 Spring 推出的微服务架构规范，也是微服务架构的一套一站式解决方案。")])]),i._v(" "),s("h2",{attrs:{id:"springcloud的组成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#springcloud的组成"}},[i._v("#")]),i._v(" springCloud的组成")]),i._v(" "),s("p",[i._v("springCloud的主要组将是：")]),i._v(" "),s("ol",[s("li",[i._v("服务注册发现：eureka、nacos（可做注册发现和配置统一管理）、consul")]),i._v(" "),s("li",[i._v("统一配置管理：springCloudConfig、nacos")]),i._v(" "),s("li",[i._v("服务远程调用：openFeign（内部集成ribbon实现负载均衡，通过继承实现亦或者通过创建feignApi项目实现统一远程调用）、dubbo")]),i._v(" "),s("li",[i._v("统一网关路由：zuul、springCloudGateway（做请求拦截和统一验证、负载均衡等处理）")]),i._v(" "),s("li",[i._v("服务链路监控：zipkin、sleuth")]),i._v(" "),s("li",[i._v("流控、降级、保护：hystix、sentienl")])]),i._v(" "),s("h2",{attrs:{id:"dubbo、springcloud、springcloudalibaba-区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dubbo、springcloud、springcloudalibaba-区别"}},[i._v("#")]),i._v(" Dubbo、springCloud、springCloudAlibaba 区别")]),i._v(" "),s("ol",[s("li",[i._v("dubbo的核心其实是远程服务调用dubbo协议，并不是一套完善的微服务框架技术")]),i._v(" "),s("li",[i._v("springCloud是一个微服务架构的一站式解决方案它是完善的，与dubbo的区别在于它是完善的，并且远程调用用的是feign")]),i._v(" "),s("li",[i._v("springCloudAlibaba 兼容前面两个微服务架构技术，是阿里基于自身研发的dubbo技术的一个微服务架构解决方案完善，\n但其实springCloudAlibaba算是整个springCloud的一部分")])]),i._v(" "),s("h2",{attrs:{id:"参考链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[i._v("#")]),i._v(" 参考链接")]),i._v(" "),s("ol",[s("li",[i._v("https://www.bilibili.com/video/BV1LQ4y127n4?p=1&vd_source=8974f34780394a2fa0830cc76fadcb3f")])])])}),[],!1,null,null,null);s.default=r.exports}}]);