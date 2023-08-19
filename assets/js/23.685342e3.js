(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{431:function(t,s,a){t.exports=a.p+"assets/img/home.69189e06.jpg"},500:function(t,s,a){"use strict";a.r(s);var r=a(2),e=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"组件介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件介绍"}},[t._v("#")]),t._v(" 组件介绍")]),t._v(" "),s("p",[t._v("商城首页。包括全部商品分类、主要banner轮播、商品分类介绍、底部商城信息等。")]),t._v(" "),s("p",[s("img",{attrs:{src:a(431),alt:""}})]),t._v(" "),s("h2",{attrs:{id:"进入离开组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进入离开组件"}},[t._v("#")]),t._v(" 进入离开组件")]),t._v(" "),s("p",[t._v("1、当用户刚由外部访问进入网站项目时，重定向路由跳转至到Home组件；")]),t._v(" "),s("p",[t._v("2、由Header静态组件，路由跳转进入，无参数。")]),t._v(" "),s("h2",{attrs:{id:"子组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#子组件"}},[t._v("#")]),t._v(" 子组件")]),t._v(" "),s("p",[t._v("TypeNav三级导航分类静态组件，ListContainer静态组件，Floor静态组件")]),t._v(" "),s("h2",{attrs:{id:"生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[t._v("#")]),t._v(" 生命周期")]),t._v(" "),s("p",[t._v("1、mounted ()\t调用vuex-actions-getFloorList：向服务器发送”获取商品楼层floor数据“的网络请求，如果服务器返回的result正常，则将返回的data保存到state中，以供组件使用。")]),t._v(" "),s("h2",{attrs:{id:"数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据"}},[t._v("#")]),t._v(" 数据")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("名称")]),t._v(" "),s("th",[t._v("数据类型")]),t._v(" "),s("th",[t._v("所属")]),t._v(" "),s("th",[t._v("数据介绍")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("floorList")]),t._v(" "),s("td",[t._v("数组")]),t._v(" "),s("td",[t._v("computed")]),t._v(" "),s("td",[t._v("组件从vuex中获取到的服务器返回的floor数据")])])])]),t._v(" "),s("h2",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),s("p",[t._v("1、获取floor数据")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('地址：/api/floor   请求方式：get    无参数\nexport const reqGetFloorList = () =>\n  mockRequests({ url: "/floor", method: "get" });\n')])])]),s("h2",{attrs:{id:"vuex"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuex"}},[t._v("#")]),t._v(" vuex")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("vuex-home：\n1、actions\n1.1、getBannerList\n调用API-获取轮播图banner数据；服务器返回请求成功，则调用mutations-BANNERLIST\n1.2、getFloorList\n调用API-获取商品楼层floor数据；服务器返回请求成功，则调用mutations-FLOORLIST\n \n2、mutations\n2.1、BANNERLIST\n将服务器返回的轮播图banner数据保存到state的bannerList中，以供其他组件调用\n2.1、FLOORLIST\n将服务器返回的商品楼层floor数据保存到state的floorList中，以供其他组件调用\n\n3、state\nbannerList: [], \t\t// 轮播图banner数据，数组\nfloorList: [], \t\t\t// 商品楼层floor数据，数组\n")])])]),s("h2",{attrs:{id:"功能点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#功能点"}},[t._v("#")]),t._v(" 功能点")]),t._v(" "),s("p",[t._v("1、页面数据动态展示")]),t._v(" "),s("p",[t._v("组件在mounted阶段，调用vuex的getFloorList；vuex调用获取商品楼层floor数据的API，向服务器发送请求；服务器返回成功则将返回的data保存到state中；本组件的computed获取vuex-state数据，并保存为计算属性；并将数据传递给Floor子组件。")]),t._v(" "),s("h2",{attrs:{id:"子组件listcontainer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#子组件listcontainer"}},[t._v("#")]),t._v(" 子组件ListContainer")]),t._v(" "),s("h3",{attrs:{id:"进入组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进入组件"}},[t._v("#")]),t._v(" 进入组件")]),t._v(" "),s("p",[t._v("作为Home路由组件的子组件固定展示")]),t._v(" "),s("h3",{attrs:{id:"生命周期-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生命周期-2"}},[t._v("#")]),t._v(" 生命周期")]),t._v(" "),s("p",[t._v("mounted ()\t调用vuex-actions-getBannerList：向服务器发送”获取轮播图banner数据“的网络请求，如果服务器返回的result正常，则将返回的data保存到state中，以供组件使用。")]),t._v(" "),s("h3",{attrs:{id:"数据-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据-2"}},[t._v("#")]),t._v(" 数据")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("名称")]),t._v(" "),s("th",[t._v("数据类型")]),t._v(" "),s("th",[t._v("所属")]),t._v(" "),s("th",[t._v("数据介绍")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("bannerList")]),t._v(" "),s("td",[t._v("数组")]),t._v(" "),s("td",[t._v("computed")]),t._v(" "),s("td",[t._v("组件从vuex中获取到的服务器返回的banner数据")])])])]),t._v(" "),s("h3",{attrs:{id:"api-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api-2"}},[t._v("#")]),t._v(" API")]),t._v(" "),s("p",[t._v("1、获取banner数据")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('地址：api/banner   请求方式：get    无参数\nexport const reqGetBannerList = () =>\n  mockRequests({ url: "/banner", method: "get" });\n')])])]),s("h3",{attrs:{id:"功能点-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#功能点-2"}},[t._v("#")]),t._v(" 功能点")]),t._v(" "),s("p",[t._v("1、页面数据动态展示")]),t._v(" "),s("p",[t._v("组件在mounted阶段，调用vuex的getBannerList；vuex调用获取轮播图banner数据的API，向服务器发送请求；服务器返回成功则将返回的data保存到state中；本组件的computed获取vuex-state数据，并保存为计算属性；页面在展示时，使用相应的属性即可。")]),t._v(" "),s("h2",{attrs:{id:"子组件floor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#子组件floor"}},[t._v("#")]),t._v(" 子组件Floor")]),t._v(" "),s("h3",{attrs:{id:"进入组件-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进入组件-2"}},[t._v("#")]),t._v(" 进入组件")]),t._v(" "),s("p",[t._v("作为Home路由组件的子组件固定展示；参数：父组件Home传递过来的floorList。")]),t._v(" "),s("h3",{attrs:{id:"数据-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据-3"}},[t._v("#")]),t._v(" 数据")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("名称")]),t._v(" "),s("th",[t._v("数据类型")]),t._v(" "),s("th",[t._v("所属")]),t._v(" "),s("th",[t._v("数据介绍")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("list")]),t._v(" "),s("td",[t._v("对象")]),t._v(" "),s("td",[t._v("props")]),t._v(" "),s("td",[t._v("从父组件Home传递过来的商品楼层floorList数据")])])])]),t._v(" "),s("h3",{attrs:{id:"功能点-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#功能点-3"}},[t._v("#")]),t._v(" 功能点")]),t._v(" "),s("p",[t._v("1、页面数据动态展示")]),t._v(" "),s("p",[t._v("组件接收由父组件Home传递过来的floorList，并保存为props；页面在展示时，使用相应的属性即可。")]),t._v(" "),s("h2",{attrs:{id:"轮播图-swiper插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#轮播图-swiper插件"}},[t._v("#")]),t._v(" 轮播图 Swiper插件")]),t._v(" "),s("p",[t._v("Swiper是一个实现轮播图的js插件，将其定义为全局组件。")]),t._v(" "),s("h3",{attrs:{id:"组件定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件定义"}},[t._v("#")]),t._v(" 组件定义")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("、下载插件；\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("、components文件夹下，创建Carousel文件夹，里面创建index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue文件；\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("、index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue文件中引入Swiper包；\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Swiper "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'swiper'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 引入Swiper的js包")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 还需在main.js里引入Swiper插件样式")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("、添加html\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("template"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"swiper-container"')]),t._v("\n       id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"floor1Swiper"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"swiper-wrapper"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"swiper-slide"')]),t._v("\n           v"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"(carousel) in list"')]),t._v("\n           "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"carousel.id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("img "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("src"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"carousel.imgUrl"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" 如果需要分页器 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"swiper-pagination"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" 如果需要导航按钮 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"swiper-button-prev"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"swiper-button-next"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("template"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("、初始化Swiper实例\n"),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("watch")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此处也可以写在mounted里，因为组件本身没有发送请求数据行为，数据是由父组件传递过来的，和组件本身的DOM更新没有关系")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("immediate")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此处要加这句是，这个数据是父组件传过来的，后面再没有变化过，所以watch监听不到变化，里面的语句没执行，所以轮播图不起作用。加上这句表示，数据立即监听，不论数据有无发生变化。")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("bannerList")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("   \n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("handler")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$nextTick")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Swiper")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.swiper-container'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("loop")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 循环模式选项")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果需要分页器")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("pagination")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("el")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.swiper-pagination'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("clickable")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果需要前进后退按钮")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("navigation")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("nextEl")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.swiper-button-next'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("prevEl")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.swiper-button-prev'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v("、main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js注册全局组件CarouselA\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" CarouselA "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./components/Carousel"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("component")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CarouselA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" CarouselA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"使用组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用组件"}},[t._v("#")]),t._v(" 使用组件")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[t._v("Floor.vue：\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("floorBanner"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("CarouselA")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":list")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v("list.carouselList")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n// 使用自定义组件CarouselA时，需要向其传入轮播图数据，数据格式为：\n[\n\t{\n\t\tid:'',\n\t\timgUrl:'',\n\t},\n\t{\n\t\tid:'',\n\t\timgUrl:'',\n\t}\n\t,...\n]\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);