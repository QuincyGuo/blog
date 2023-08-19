(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{458:function(t,a,e){t.exports=e.p+"assets/img/skuManagement.9f7ec868.png"},459:function(t,a,e){t.exports=e.p+"assets/img/skuManagement-checkSku.88ece0f2.png"},519:function(t,a,e){"use strict";e.r(a);var s=e(2),n=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"静态组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态组件"}},[t._v("#")]),t._v(" 静态组件")]),t._v(" "),a("img",{attrs:{src:e(458)}}),t._v(" "),a("img",{attrs:{src:e(459)}}),t._v(" "),a("h3",{attrs:{id:"layout-布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#layout-布局"}},[t._v("#")]),t._v(" Layout 布局")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<div>\n    <el-row :gutter="20">\n        <el-col :span="5">名称</el-col>\n        <el-col :span="16">{{skuInfo.skuName}}</el-col>\n    </el-row>\n    <el-row>\n        <el-col :span="5">平台属性</el-col>\n        <el-col :span="16">\n            <el-tag type="success" style="margin-right:10px"\n                    v-for="attr in skuInfo.skuAttrValueList"\n                    :key="attr.id"> {{attr.attrName}}-{{attr.valueName}} </el-tag>\n        </el-col>\n    </el-row>\n</div>\n// el-row是一行，横向占据父空间的一行，高度由里面的子元素决定；gutter是各列的间隔\n// el-col是行里面的列，:span属性是表明该列占据所在行的比例，24为总数，占据x/24；\n// el-col里是每列里面的具体元素内容。\n')])])]),a("h3",{attrs:{id:"el-tabs-标签页"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#el-tabs-标签页"}},[t._v("#")]),t._v(" el-tabs 标签页")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<el-tabs v-model="activeName" @tab-click="handleClick" class="tab">\n    <el-tab-pane name="first">\n    \t<span slot="label" class="fontClass">\n    \t\t<i class="el-icon-date">销售额\n    \t</span>\n    </el-tab-pane>\n    <el-tab-pane name="second" label="访问量">访问量</el-tab-pane>\n</el-tabs>\n\ndata () {\n\treturn {\n      \tactiveName: \'first\',\t\t// 标题tab的选中名称\n    }\n},\nhandleClick (tab, event) {\n...\n},\n// data里需定义一个activeName，其数值与tab-pane的name属性对应，还要有一个初始值。\n// handleClick是切换标签页时的触发方法，tab参数是一个vue实例，其上有属性label、name等标识切换后的标签页属性。\n\n// 标签页有两种写法：\n// 写法一：tab-pane里定义一个span，就可以自定义标签页名称（给其加图标、图片等）\n// 写法二：正常只用tab-pane定义名称。\n')])])]),a("h2",{attrs:{id:"组件介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件介绍"}},[t._v("#")]),t._v(" 组件介绍")]),t._v(" "),a("p",[t._v("实现对sku实例的查看、上架、下架、删除等操作。")]),t._v(" "),a("h2",{attrs:{id:"进入离开组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进入离开组件"}},[t._v("#")]),t._v(" 进入离开组件")]),t._v(" "),a("p",[t._v("切换页面左侧的侧边栏，实现对路由的切换。")]),t._v(" "),a("h2",{attrs:{id:"子组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#子组件"}},[t._v("#")]),t._v(" 子组件")]),t._v(" "),a("p",[t._v("HintButton\t对el-button的封装，实现自定义组件-按钮。")]),t._v(" "),a("h2",{attrs:{id:"数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据"}},[t._v("#")]),t._v(" 数据")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("名称")]),t._v(" "),a("th",[t._v("数据类型")]),t._v(" "),a("th",[t._v("所属")]),t._v(" "),a("th",[t._v("数据介绍")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("skuInfo")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td",[t._v("data")]),t._v(" "),a("td",[t._v("待查看的sku实例数据")])]),t._v(" "),a("tr",[a("td",[t._v("allSkuList")]),t._v(" "),a("td",[t._v("Array")]),t._v(" "),a("td",[t._v("data")]),t._v(" "),a("td",[t._v("全部的SKU实例数据")])]),t._v(" "),a("tr",[a("td",[t._v("currentPage")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td",[t._v("data")]),t._v(" "),a("td",[t._v("spu展示列表-当前页")])]),t._v(" "),a("tr",[a("td",[t._v("pageDataCountNow")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td",[t._v("data")]),t._v(" "),a("td",[t._v("spu展示列表-每页展示的数据个数")])]),t._v(" "),a("tr",[a("td",[t._v("total")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td",[t._v("data")]),t._v(" "),a("td",[t._v("spu展示列表-所有的数据个数")])]),t._v(" "),a("tr",[a("td",[t._v("drawer")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("data")]),t._v(" "),a("td",[t._v("抽屉组件的显示/隐藏")])])])]),t._v(" "),a("h2",{attrs:{id:"生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[t._v("#")]),t._v(" 生命周期")]),t._v(" "),a("p",[t._v("1、mounted ()")]),t._v(" "),a("p",[t._v("调用getSkuList方法；组件向服务器发送”获取全部sku实例“的网络请求，如果服务器返回的result正常，则将返回的数据保存到组件的data中，以供后续使用。")]),t._v(" "),a("h2",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),a("p",[t._v("1、获取某一页sku列表")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('// 路径：/admin/product/list/{page}/{limit}\t请求方式：get\t参数：page 当前页码\tlimit 每页数据个数\nexport const reqAllSkuList = (page, limit) =>\n  request({ url: `/admin/product/list/${page}/${limit}`, method: "get" });\n')])])]),a("p",[t._v("2、上架sku")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('// 路径：/admin/product/onsale/{skuId}\t\t请求方式：get\t参数：skuId\nexport const reqSale = (skuId) =>\n  request({ url: `/admin/product/onSale/${skuId}`, method: "get" });\n')])])]),a("p",[t._v("3、下架sku")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('// 路径：/admin/product/cancelsale/{skuId}\t\t请求方式：get\t参数：skuId\nexport const reqCancelSale = (skuId) =>\n  request({ url: `/admin/product/cancelSale/${skuId}`, method: "get" });\n')])])]),a("p",[t._v("4、通过skuId获取sku详情数据")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('// 路径：/admin/product/getSkuById/{skuId}\t\t请求方式：get\t参数：skuId\nexport const reqGetSkuById = (skuId) =>\n  request({ url: `/admin/product/getSkuById/${skuId}`, method: "get" });\n')])])]),a("h2",{attrs:{id:"methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[t._v("#")]),t._v(" methods")]),t._v(" "),a("p",[t._v("1、getSkuList ()\t获取某一页sku实例数据")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("1、参数：无\n\n2、函数内容： \n2.1、调用API-获取某一页SKU实例，等待服务器返回结果；如果返回结果成功，将返回的数据保存到data中；\n2.2、失败则提示失败原因。\n")])])]),a("p",[t._v("2、getSkuInfo (row)\t查看sku实例详情")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("1、参数：row 待查看的sku实例相关数据\n\n2、函数内容： \n2.1、调用API-通过skuId获取sku详情数据，等待服务器返回结果；如果返回结果成功，将返回的数据保存到data中；\n2.2、显示drawer组件，在其上面显示sku实例详情数据。\n")])])]),a("p",[t._v("3、sale (row)\t将sku实例上架")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("1、参数：row 待上架的sku实例相关数据\n\n2、函数内容： \n2.1、调用API-上架sku，等待服务器返回结果；如果返回结果成功，将返回的数据保存到data中；\n2.2、弹出消息框提示上架成功。\n")])])]),a("p",[t._v("4、cancelSale(row)\t将sku实例下架")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("1、参数：row 待下架的sku实例相关数据\n\n2、函数内容： \n2.1、调用API-下架sku，等待服务器返回结果；如果返回结果成功，将返回的数据保存到data中；\n2.2、弹出消息框提示下架成功。\n")])])]),a("p",[t._v("5、handlerCurrentChange (page)\t切换页码")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("1、参数：page 切换后新的页码\n\n2、函数内容：\n2.1、将切换页码后新的页码page赋值给data:currentPage；\n2.2、调用methods:getSkuList()，获取本页的sku列表数据\n")])])]),a("p",[t._v("6、handleSizeChange(count)\t切换每页列表数据的个数")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("1、参数：count 切换后新的每页数据的个数\n\n2、函数内容：\n2.1、将切换页码后新的每页数据的个数count赋值给data:pageDataCountNow；\n2.2、调用methods:getSkuList()，获取本页的sku列表数据\n")])])]),a("h2",{attrs:{id:"功能点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#功能点"}},[t._v("#")]),t._v(" 功能点")]),t._v(" "),a("p",[t._v("1、页面数据初始化")]),t._v(" "),a("p",[t._v("组件在mounted阶段，调用页面数据初始化函数，函数内调用获取sku列表数据的API，向服务器发送请求；服务器返回成功则将返回的数据保存到组件data中，页面显示时使用相应数据。")]),t._v(" "),a("p",[t._v("用户使用过程中，切换页码、切换每页数据个数等操作，组件获取到当前页码等数据；调用获取sku列表数据的API...（与上面一致）。")]),t._v(" "),a("p",[t._v("2、sku上架/下架")]),t._v(" "),a("p",[t._v("点击某条sku实例的上架/下架按钮，调用sku上/下架API，向服务器发送请求；服务器返回成功则改变data中的上/下架状态数据。")]),t._v(" "),a("p",[t._v("3、查看某条sku实例的详情数据")]),t._v(" "),a("p",[t._v("用户点击查看按钮，调用获取sku实例详情数据的API，向服务器发送请求；服务器返回成功则将返回的数据保存到组件data中；将drawer组件切换为显示状态，页面显示时使用相应数据。")])])}),[],!1,null,null,null);a.default=n.exports}}]);