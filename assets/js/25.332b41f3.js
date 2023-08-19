(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{433:function(t,a,s){t.exports=s.p+"assets/img/detail.8f79513b.jpg"},502:function(t,a,s){"use strict";s.r(a);var v=s(2),_=Object(v.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"组件介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件介绍"}},[t._v("#")]),t._v(" 组件介绍")]),t._v(" "),a("p",[t._v("商品详情介绍页。包括商品详情展示、图片放大展示、加入购物车操作等。")]),t._v(" "),a("img",{staticStyle:{zoom:"40%"},attrs:{src:s(433)}}),t._v(" "),a("h2",{attrs:{id:"进入离开组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进入离开组件"}},[t._v("#")]),t._v(" 进入离开组件")]),t._v(" "),a("p",[t._v("1、由Search路由组件，路由跳转进入；参数：商品id")]),t._v(" "),a("p",[t._v("2、由AddCartSuccess路由组件，路由跳转进入；参数：商品id")]),t._v(" "),a("p",[t._v("3、跳转进入AddCartSuccess路由组件；参数：商品信息及加入购物车数量。")]),t._v(" "),a("h2",{attrs:{id:"子组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#子组件"}},[t._v("#")]),t._v(" 子组件")]),t._v(" "),a("p",[t._v("Zoom商品图片放大镜组件、ImgList商品图片轮播图组件")]),t._v(" "),a("h2",{attrs:{id:"生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[t._v("#")]),t._v(" 生命周期")]),t._v(" "),a("p",[t._v("1、mounted ()\t调用vuex-actions-getGoodInfo：向服务器发送”获取商品详情数据“的网络请求，如果服务器返回的result正常，则将返回的data保存到state中，以供组件使用。")]),t._v(" "),a("h2",{attrs:{id:"数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据"}},[t._v("#")]),t._v(" 数据")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("名称")]),t._v(" "),a("th",[t._v("数据类型")]),t._v(" "),a("th",[t._v("所属")]),t._v(" "),a("th",[t._v("数据介绍")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("skuNum")]),t._v(" "),a("td",[t._v("数值")]),t._v(" "),a("td",[t._v("data")]),t._v(" "),a("td",[t._v("商品加入购物车数量")])]),t._v(" "),a("tr",[a("td",[t._v("categoryView")]),t._v(" "),a("td",[t._v("对象")]),t._v(" "),a("td",[t._v("computed")]),t._v(" "),a("td",[t._v("组件从仓库state中获取的商品所处分类数据")])]),t._v(" "),a("tr",[a("td",[t._v("skuInfo")]),t._v(" "),a("td",[t._v("对象")]),t._v(" "),a("td",[t._v("computed")]),t._v(" "),a("td",[t._v("组件从仓库state中获取的商品详情数据")])]),t._v(" "),a("tr",[a("td",[t._v("spuSaleAttrList")]),t._v(" "),a("td",[t._v("数组")]),t._v(" "),a("td",[t._v("computed")]),t._v(" "),a("td",[t._v("组件从仓库state中获取的商品加入购物车的属性数据")])]),t._v(" "),a("tr",[a("td",[t._v("skuImageList")]),t._v(" "),a("td",[t._v("数组")]),t._v(" "),a("td",[t._v("computed")]),t._v(" "),a("td",[t._v("从skuInfo中分解出来的图片轮播图数据")])])])]),t._v(" "),a("h2",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),a("p",[t._v("1、获取商品详情数据")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('地址：/api/item/{skuId}   请求方式：get    需要带参数skuId\nexport const reqGetGoodInfo = (skuId) =>\n  requests({ url: `/item/${skuId}`, method: "get" });\n')])])]),a("p",[t._v("2、商品加入购物车")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('将商品加入购物车   地址：/api/cart/addToCart/{skuId}/ {skuNum}  请求方式：post    需要带参数skuId, skuNum\nexport const reqAddOrUpdateCart = (skuId, skuNum) =>\n  requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: "post" });\n')])])]),a("h2",{attrs:{id:"vuex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuex"}},[t._v("#")]),t._v(" vuex")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("vuex-detail：\n1、actions\n1.1、getGoodInfo\n调用API-获取商品详情数据；服务器返回请求成功，则调用mutations-GETGOODINFO\n1.2、addOrUpdateCart\n调用API-商品加入购物车；服务器返回请求成功，则通知组件成功\n\n2、mutations\n2.1、GETGOODINFO\n将服务器返回的商品详情数据保存到state的goodInfo中，以供其他组件调用\n\n3、state\ngoodInfo: {}, \t\t\t// 商品详情数据，对象\n\n4、getters\ncategoryView\t\t\t// 商品详情中的商品所处分类数据，对象\t\nskuInfo\t\t\t\t\t// 商品详情中的商品属性数据，对象\t\nspuSaleAttrList\t\t\t// 商品详情中的商品加入购物车的属性数据，数组\n")])])]),a("h2",{attrs:{id:"methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[t._v("#")]),t._v(" methods")]),t._v(" "),a("p",[t._v("1、addCart()\t加入购物车")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("1、参数：无\n\n2、函数内容：\n2.1、dispatch触发addOrUpdateCart；\n2.2、请求返回成功，则将商品属性数据存入sessionStorage，以供其他组件查看；\n2.3、跳转向加入购物车成功路由组件\n")])])]),a("h2",{attrs:{id:"功能点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#功能点"}},[t._v("#")]),t._v(" 功能点")]),t._v(" "),a("p",[t._v("1、页面数据动态展示")]),t._v(" "),a("p",[t._v("组件在mounted阶段，调用vuex的getGoodInfo；vuex调用获取商品详情数据的API，向服务器发送请求；服务器返回成功则将返回的data保存到state中；本组件的computed获取vuex-state数据，并保存为计算属性；页面在展示时，使用相应的属性即可。")]),t._v(" "),a("p",[t._v("2、加入购物车")]),t._v(" "),a("p",[t._v("用户点击加入购物车按钮，组件将商品id及数量作为参数，调用vuex的addOrUpdateCart；vuex调用获取加入购物车的API，向服务器发送请求；服务器返回成功则将其他组件需要的数据会话存储，路由跳转至加入购物车成功组件。")]),t._v(" "),a("h2",{attrs:{id:"子组件imglist"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#子组件imglist"}},[t._v("#")]),t._v(" 子组件ImgList")]),t._v(" "),a("h3",{attrs:{id:"进入组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进入组件"}},[t._v("#")]),t._v(" 进入组件")]),t._v(" "),a("p",[t._v("作为Detail路由组件的子组件固定展示；参数：父组件传递的数据skuImageList")]),t._v(" "),a("h3",{attrs:{id:"数据-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据-2"}},[t._v("#")]),t._v(" 数据")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("名称")]),t._v(" "),a("th",[t._v("数据类型")]),t._v(" "),a("th",[t._v("所属")]),t._v(" "),a("th",[t._v("数据介绍")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("currendIndex")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td",[t._v("data")]),t._v(" "),a("td",[t._v("要展示的图片索引值")])]),t._v(" "),a("tr",[a("td",[t._v("skuImageList")]),t._v(" "),a("td",[t._v("数组")]),t._v(" "),a("td",[t._v("props")]),t._v(" "),a("td",[t._v("父组件传递过来的商品图片轮播图数据")])])])]),t._v(" "),a("h3",{attrs:{id:"methods-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods-2"}},[t._v("#")]),t._v(" methods")]),t._v(" "),a("p",[t._v("1、changeCurrentIndex(index)\t用户点击商品图片列表中的某一张图片")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("1、参数：index 用户点击的图片的索引值\n\n2、函数内容：\n2.1、将索引值保存到data-currendIndex中\n2.2、触发全局自定义事件getIndex，将索引值传递给兄弟组件Zoom\n")])])]),a("h3",{attrs:{id:"watch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#watch"}},[t._v("#")]),t._v(" watch")]),t._v(" "),a("p",[t._v("1、$skuImageList\t监听图片轮播图数据的变化，以实现轮播图切换")]),t._v(" "),a("h3",{attrs:{id:"功能点-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#功能点-2"}},[t._v("#")]),t._v(" 功能点")]),t._v(" "),a("p",[t._v("1、页面数据动态展示")]),t._v(" "),a("p",[t._v("获取父组件传递的轮播图数据，结合Swiper插件进行轮播图展示。")]),t._v(" "),a("p",[t._v("2、用户点击商品图片列表中的某一张图片")]),t._v(" "),a("p",[t._v("保存用户点击图片的索引值，并传递给兄弟组件Zoom。")]),t._v(" "),a("h2",{attrs:{id:"子组件zoom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#子组件zoom"}},[t._v("#")]),t._v(" 子组件Zoom")]),t._v(" "),a("h3",{attrs:{id:"进入组件-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进入组件-2"}},[t._v("#")]),t._v(" 进入组件")]),t._v(" "),a("p",[t._v("作为Detail路由组件的子组件固定展示；参数：父组件传递的数据skuImageList")]),t._v(" "),a("h3",{attrs:{id:"生命周期-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生命周期-2"}},[t._v("#")]),t._v(" 生命周期")]),t._v(" "),a("p",[t._v("1、mounted ()\t添加全局自定义事件getIndex，获取兄弟组件ImgList中用户选中的图片索引值，赋值给currendIndex。")]),t._v(" "),a("h3",{attrs:{id:"数据-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据-3"}},[t._v("#")]),t._v(" 数据")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("名称")]),t._v(" "),a("th",[t._v("数据类型")]),t._v(" "),a("th",[t._v("所属")]),t._v(" "),a("th",[t._v("数据介绍")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("currendIndex")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td",[t._v("data")]),t._v(" "),a("td",[t._v("要展示的图片索引值")])]),t._v(" "),a("tr",[a("td",[t._v("skuImageList")]),t._v(" "),a("td",[t._v("数组")]),t._v(" "),a("td",[t._v("props")]),t._v(" "),a("td",[t._v("父组件传递过来的商品图片轮播图数据")])]),t._v(" "),a("tr",[a("td",[t._v("imgObj")]),t._v(" "),a("td",[t._v("对象")]),t._v(" "),a("td",[t._v("computed")]),t._v(" "),a("td",[t._v("从skuImageList中分解出来的用户选中的要展示图片数据")])])])]),t._v(" "),a("h3",{attrs:{id:"methods-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods-3"}},[t._v("#")]),t._v(" methods")]),t._v(" "),a("p",[t._v("1、handler()\t鼠标移动，展示商品图片的放大区域。")]),t._v(" "),a("h3",{attrs:{id:"功能点-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#功能点-3"}},[t._v("#")]),t._v(" 功能点")]),t._v(" "),a("p",[t._v("1、页面数据动态展示")]),t._v(" "),a("p",[t._v("添加全局自定义事件getIndex，获取兄弟组件ImgList中用户选中的图片索引值。根据索引值，从商品图片轮播图中找到图片进行展示；")]),t._v(" "),a("p",[t._v("2、鼠标进入图片放大展示")]),t._v(" "),a("p",[t._v("用户鼠标进入商品展示图，在右侧浮现展示图的放大版图片，并随着用户鼠标同步移动。")])])}),[],!1,null,null,null);a.default=_.exports}}]);