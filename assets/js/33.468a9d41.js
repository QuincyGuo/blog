(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{440:function(t,a,e){t.exports=e.p+"assets/img/center.b61e9790.jpg"},509:function(t,a,e){"use strict";e.r(a);var r=e(2),s=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"组件介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件介绍"}},[t._v("#")]),t._v(" 组件介绍")]),t._v(" "),a("p",[t._v("个人中心页。包括个人订单数据展示等。")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:e(440)}}),t._v(" "),a("h2",{attrs:{id:"进入离开组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进入离开组件"}},[t._v("#")]),t._v(" 进入离开组件")]),t._v(" "),a("p",[t._v("1、由PaySuccess路由组件，路由跳转进入，无参数。")]),t._v(" "),a("p",[t._v("2、由Header静态组件，路由跳转进入，无参数。")]),t._v(" "),a("h2",{attrs:{id:"子组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#子组件"}},[t._v("#")]),t._v(" 子组件")]),t._v(" "),a("p",[t._v("MyOrder路由组件")]),t._v(" "),a("h2",{attrs:{id:"功能点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#功能点"}},[t._v("#")]),t._v(" 功能点")]),t._v(" "),a("p",[t._v("1、提供子路由组件MyOrder的进入及展示区域。")]),t._v(" "),a("h2",{attrs:{id:"子组件myorder"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#子组件myorder"}},[t._v("#")]),t._v(" 子组件MyOrder")]),t._v(" "),a("h3",{attrs:{id:"进入组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进入组件"}},[t._v("#")]),t._v(" 进入组件")]),t._v(" "),a("p",[t._v("当用户由外部访问进入Center路由组件时，重定向路由跳转至到子MyOrder路由组件；")]),t._v(" "),a("h3",{attrs:{id:"生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[t._v("#")]),t._v(" 生命周期")]),t._v(" "),a("p",[t._v("mounted ()\t调用getData方法；组件向服务器发送”获取我的订单“的网络请求，如果服务器返回的result正常，则将返回的data保存到组件的data-myOrder中，以供组件使用。")]),t._v(" "),a("h3",{attrs:{id:"数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据"}},[t._v("#")]),t._v(" 数据")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("名称")]),t._v(" "),a("th",[t._v("数据类型")]),t._v(" "),a("th",[t._v("所属")]),t._v(" "),a("th",[t._v("数据介绍")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("myOrder")]),t._v(" "),a("td",[t._v("object")]),t._v(" "),a("td",[t._v("data")]),t._v(" "),a("td",[t._v("服务器返回的我的订单数据")])]),t._v(" "),a("tr",[a("td",[t._v("page")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td",[t._v("data")]),t._v(" "),a("td",[t._v("当前所在的页码")])]),t._v(" "),a("tr",[a("td",[t._v("limit")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td",[t._v("data")]),t._v(" "),a("td",[t._v("每页展示的订单个数")])])])]),t._v(" "),a("h3",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),a("p",[t._v("1、获取我的订单数据")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('地址：/api/order/auth/{page}/{limit}   请求方式：get    需要带参数page页码 ，limit每页数据量\nexport const reqMyOrderList = (page, limit) =>\n  requests({  url: `/order/auth/${page}/${limit}`, method: "get" });\n')])])]),a("h3",{attrs:{id:"methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[t._v("#")]),t._v(" methods")]),t._v(" "),a("p",[t._v("1、getData()\t获取我的订单数据")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("1、参数：无\n\n2、函数内容：\n2.1、调用API-获取我的订单数据；\n2.2、请求返回成功，获取服务器传回的我的订单数据，将返回数据保存到组件的data-myOrder中，以供组件展示订单数据。\n")])])]),a("p",[t._v("2、getPageNo(page)\t点击切换订单数据的页码")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("1、参数：page 切换后的所在的页码\n\n2、函数内容：\n2.1、更新data-page，调用getData();\n")])])]),a("h3",{attrs:{id:"功能点-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#功能点-2"}},[t._v("#")]),t._v(" 功能点")]),t._v(" "),a("p",[t._v("1、页面数据动态展示")]),t._v(" "),a("p",[t._v("组件在mounted阶段，调用getData方法；组件调用获取我的订单数据的API，向服务器发送请求；服务器返回成功则将返回的data保存到组件的data-myOrder中；页面在展示时，使用相应的属性即可。")]),t._v(" "),a("p",[t._v("2、点击切换订单数据的页码")]),t._v(" "),a("p",[t._v("用户点击更换页码，data-page，调用getData()方法。后面与1一致。")])])}),[],!1,null,null,null);a.default=s.exports}}]);