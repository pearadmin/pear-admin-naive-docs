# 开始

## 总览

Pear Admin Naive 是一个中后台前端框架，采用最新的Vue3技术栈, 实现一套基本的开发模板。主要组成如下

- Vue3(setup script)，除却很是适合使用Tsx的组件外(如FormItem.tsx)，其它均采用setup script语法的SFC组件开发模式。
- Vite, 基于Vite创建项目，让开发体验也会拥有幸福感: )，如果还不是很熟，可以去看看官方文档
- VueUse, Vue3常见的composable库，提供了很多常用的功能hooks，如果你不使用本项目，但若是是Vue3的技术栈，强烈推荐。
- Naive UI，提供了丰富的Vue3组件，有着其它UI库没有的一些组件(如：大数据表格虚拟滚动等)，以及更少更简单的黑暗模式配置。
- Umi-request，熟悉react的应该知道，一个基于fetch的请求库。所以我们没有采用Axios，而且使用了Fetch，如果实在钟情于Axios，可以自己实现。
- VueRouter4，就是那个熟悉的VueRouter
- Pinia，更适合Vue3的状态管理库
- lodash-es，这个大家伙儿应该都很熟悉了: )
