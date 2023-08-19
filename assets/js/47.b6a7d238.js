(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{476:function(t,a,e){"use strict";e.r(a);var s=e(2),n=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"创建flex布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建flex布局"}},[t._v("#")]),t._v(" 创建flex布局")]),t._v(" "),a("p",[t._v("flex布局很适合排列一个小容器里（比如一个小div里）的元素排列。")]),t._v(" "),a("p",[t._v("给div这类块状元素设置display:flex，或者给span这类内联元素设置display:inline-flex，flex布局即创建！")]),t._v(" "),a("p",[t._v("是一种一维的布局，一次能处理一行或者一列的单一维度上的元素布局；与之对应的，能同时处理行和列上的布局的二维布局，叫做网格布局。")]),t._v(" "),a("h2",{attrs:{id:"flex容器与flex子项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flex容器与flex子项"}},[t._v("#")]),t._v(" flex容器与flex子项")]),t._v(" "),a("p",[t._v("其中，直接设置display:flex，或者display:inline-flex的元素称为flex容器，里面的子元素称为flex子项（只影响直接子元素，不影响嵌套子元素）。又称弹性盒子与弹性元素。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("flex和inline-flex区别在于：\n\ninline-flex容器为inline特性，因此可以和图片文字一行显示；flex容器保持块状特性，宽度默认100%，不和内联元素一行显示。\n无论作用在flex容器上，还是作用在flex子项，都是控制的flex子项的呈现，只是前者控制的是整体，后者控制的是个体。\n")])])]),a("h2",{attrs:{id:"flex容器上的属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flex容器上的属性"}},[t._v("#")]),t._v(" flex容器上的属性")]),t._v(" "),a("h3",{attrs:{id:"整体布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#整体布局"}},[t._v("#")]),t._v(" 整体布局")]),t._v(" "),a("h4",{attrs:{id:"flex-direction-主轴方向"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flex-direction-主轴方向"}},[t._v("#")]),t._v(" flex-direction  主轴方向")]),t._v(" "),a("p",[t._v("主轴：flex容器的主轴，默认是行排列。")]),t._v(" "),a("p",[t._v("侧轴：与主轴垂直的轴称作侧轴。")]),t._v(" "),a("p",[t._v("起始线和终止线")]),t._v(" "),a("p",[t._v("row、column是决定行 or 列方向；")]),t._v(" "),a("p",[t._v("有无reverse是决定主轴上的起始终止线位置，无就默认起始在左/上，有就起始在右/下。")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v("row：主轴行排列，即水平排列，起始线在左，终止线在右；\nrow-reverse：主轴水平，从右至左；\ncolumn：主轴竖直，从上至下；\ncolumn-reverse：主轴竖直，从下至上；\n")])])]),a("h4",{attrs:{id:"flex-wrap-子元素宽度溢出的换行处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flex-wrap-子元素宽度溢出的换行处理"}},[t._v("#")]),t._v(" flex-wrap  子元素宽度溢出的换行处理")]),t._v(" "),a("p",[t._v("用来控制子项整体，单行显示还是换行显示。如果换行，则侧轴的起始终止线是否切换位置。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("nowrap：默认值，表示单行显示，不换行。于是很容易出现宽度溢出的场景，\nwrap：宽度不足换行显示。\nwrap-reverse：宽度不足换行显示，但是侧轴的起始终止线位置被切换，本应侧轴从上往下，被切换从下往上。\n")])])]),a("h4",{attrs:{id:"flex-flow-布局的flow流动特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flex-flow-布局的flow流动特性"}},[t._v("#")]),t._v(" flex-flow  布局的flow流动特性")]),t._v(" "),a("p",[t._v("其实就是，flex-direction 和 flex-wrap属性写一块。")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-flow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" row-reverse wrap-reverse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*row行排列，有reverse起始终止换位，所以是主轴水平从右往左；\n  wrap换行，有reverse起始终止换位，所以是换行且竖直从下往上*/")]),t._v("\n")])])]),a("h3",{attrs:{id:"子元素在主侧轴的对齐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#子元素在主侧轴的对齐"}},[t._v("#")]),t._v(" 子元素在主侧轴的对齐")]),t._v(" "),a("h4",{attrs:{id:"justify-content-子元素在主轴上的对齐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#justify-content-子元素在主轴上的对齐"}},[t._v("#")]),t._v(" justify-content  子元素在主轴上的对齐")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("justify-content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \nflex-start \t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*默认值，主轴起点对齐；*/")]),t._v("\nflex-end \t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*主轴终点对齐；视觉效果和row-reverse一样*/")]),t._v("\ncenter \t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*居中对齐；*/")]),t._v("\nspace-between \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*两端对齐；最左和最右贴近父元素边框，中间元素两侧留空白*/")]),t._v("\nspace-around \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*环绕对齐；最左最右边缘两侧的空白只有中间空白宽度一半*/")]),t._v("\nspace-evenly\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*平等对齐；所有空白宽度相等*/")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*如果主轴是列排列，则是上下对齐。*/")]),t._v("\n")])])]),a("h4",{attrs:{id:"align-items-子元素在侧轴上的对齐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#align-items-子元素在侧轴上的对齐"}},[t._v("#")]),t._v(" align-items  子元素在侧轴上的对齐")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("align-items")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \nstretch \t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*默认值，子元素侧轴方向被拉伸至填满父容器，但如果被事先设置高度则不拉伸；*/")]),t._v("\nflex-start \t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*侧轴起点对齐；*/")]),t._v("\nflex-end \t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*侧轴终点对齐；视觉效果和column-reverse一样*/")]),t._v("\ncenter \t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*居中对齐；*/")]),t._v("\nbaseline\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*子元素内第一行文字的基线对齐。*/")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*如果侧轴是行排列，则是左右对齐。*/")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("!important")]),t._v("\n原理：flex容器将交叉轴上的多余空间（父容器高度 - 每行最高元素高度的和）按行数平均分给每行，这样每行就有自己的行空间（自身最高元素高度+分配的行多余空间），然后每行在自己的行空间内对齐本行元素。\n对齐的内容包括元素盒子在行空间上的对齐，盒内元素在盒子内的对齐。（不包括子盒元素内的文本，这个要在子盒元素里设置）\n")])])]),a("h4",{attrs:{id:"align-content-多根轴线的对齐方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#align-content-多根轴线的对齐方式"}},[t._v("#")]),t._v(" align-content  多根轴线的对齐方式")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 如果换行且有多行，这多个行在主轴方向上的分布方式 */")]),t._v("\nflex-start：与交叉轴的起点对齐。\nflex-end：与交叉轴的终点对齐。\ncenter：与交叉轴的中点对齐。\nspace-between：与交叉轴两端对齐，轴线之间的间隔平均分布。\nspace-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。\nstretch（默认值）：轴线占满整个交叉轴。\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 只在以下情况：①子项多行且flex容器高度固定 ②子项单行，flex容器高度固定且设置了flex-wrap:wrap; \n高度固定的意思是，在侧轴上有剩余空间*/")]),t._v("\n\n原理：每行自己的行空间就是自身行内最高元素高度，然后flex容器将每行作为一个单位，进行对齐，剩余空间会被当做对齐的空白。\n")])])]),a("h4",{attrs:{id:"align-items-与-align-content的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#align-items-与-align-content的区别"}},[t._v("#")]),t._v(" align-items 与 align-content的区别")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("align-items \t排的是每行在自己行空间内的子元素的对齐（行空间：子元素高度 + 容器侧轴剩余空间按份分给每行的行空间）\nalign-content \t排的是多个行在flex容器内的对齐（行空间：子元素高度）。\n\n当align-content起作用且两个都写时，先排布align-content，再排布align-items。也可以理解为先把剩余空间给行空间对齐时用了，没有多余空间分给行空间本身了（此时，行空间高度等于元素最高高度）。\n")])])]),a("h4",{attrs:{id:"剩余空间的分配优先"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#剩余空间的分配优先"}},[t._v("#")]),t._v(" 剩余空间的分配优先")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("align-content > 子元素的margin auto >  align-items\n")])])]),a("h2",{attrs:{id:"flex子项上的属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flex子项上的属性"}},[t._v("#")]),t._v(" flex子项上的属性")]),t._v(" "),a("h4",{attrs:{id:"order-子元素排序顺序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#order-子元素排序顺序"}},[t._v("#")]),t._v(" order  子元素排序顺序")]),t._v(" "),a("p",[t._v("所有flex子项的默认order属性值是0。可以通过order属性自定义容器内某个子元素的排列顺序。数值越小，排列越靠前。")]),t._v(" "),a("h4",{attrs:{id:"align-self-单独某个子元素的侧轴对齐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#align-self-单独某个子元素的侧轴对齐"}},[t._v("#")]),t._v(" align-self  单独某个子元素的侧轴对齐")]),t._v(" "),a("p",[t._v("align-self属性允许单个子元素有与其他子元素不一样的侧轴对齐方式，可覆盖父容器的align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。")]),t._v(" "),a("p",[t._v("其余的flex，flex-grow，flex-shrink和flex-basis属性，等需要的时候再看。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("所有属性的效果见下面网页。\nhttps://www.zhangxinxu.com/wordpress/2018/10/display-flex-css3-css/\nhttps://www.ruanyifeng.com/blog/2015/07/flex-grammar.html\n")])])]),a("h2",{attrs:{id:"其他flex布局知识点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他flex布局知识点"}},[t._v("#")]),t._v(" 其他flex布局知识点")]),t._v(" "),a("h3",{attrs:{id:"flex的margin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flex的margin"}},[t._v("#")]),t._v(" flex的margin")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("父元素display: flex; \n子元素margin: auto;\n效果是，子元素在父容器内水平竖直两个方向都会居中。\n原理是，剩余空间被同一方向的两边平均分配占据，该元素在行空间上的侧轴对齐会失效。\n\nmargin值为auto时，自动占据元素所处行的的剩余空间。如果有多个marginauto则平分。\n\n如果有其他兄弟元素，则占据的是所处行的行空间的剩余空间，不影响其他行的元素以及本行的行空间在容器上侧轴的对齐。\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("在Flex布局中，flex子元素的设置`float`，`clear`以及`vertical-align`属性都是没有用的。\n\nFlexbox布局最适合应用程序的组件和小规模布局（一维布局），而Grid布局则适用于更大规模的布局（二维布局）。\n\n相比float布局，涉及到各种 BFC、清除浮动的问题，比较麻烦。而flex 是一种现代的布局方式。但是兼容性比较差，很多低版本的浏览器不支持。所以如果网站的用户可能会包含低版本的浏览器用户，则暂时不用flex布局。\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);