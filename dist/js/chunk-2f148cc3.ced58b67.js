(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f148cc3","chunk-44da0e60","chunk-725b0d58","chunk-2fd90859","chunk-0929fc95","chunk-fd7ef6c0","chunk-2dc82485","chunk-4be05242","chunk-affa690c","chunk-2d0af502"],{"0e90":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"min-title"},[t._v("常规工作信息")]),a("a-descriptions",{attrs:{title:""}},[a("a-descriptions-item",{attrs:{label:"设备状态"}},[a("a-badge",{attrs:{status:"success"}}),t._v("正常 ")],1)],1),a("div",{staticClass:"min-title"},[t._v("工作参数 "),t.visible?t._e():a("div",{staticClass:"float-right font-size-xs",staticStyle:{"font-weight":"500"}},[a("a",{attrs:{href:"#"},on:{click:function(e){t.visible=!0}}},[a("i",{staticClass:"iconfont icon-fabushangjia"}),t._v("下发指令")])])]),a("a-table",{attrs:{columns:t.columns,pagination:!1,dataSource:t.dataSource},scopedSlots:t._u([{key:"defalutVal",fn:function(e){return t.visible?a("span",{},[t._v("温度 "),a("a-input-number",{attrs:{min:1,max:10},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}}),t._v(" °C")],1):a("span",{},[t._v("温度"+t._s(e)+"°C")])}}],null,!0)}),t.visible?a("div",{staticClass:"mg-top-md"},[a("a-button",{staticClass:"mg-right-sm",attrs:{type:"primary"},on:{click:t.sumitHandle}},[t._v("确认")]),a("a-button",{on:{click:function(e){t.visible=!1}}},[t._v("取消")])],1):t._e()],1)},n=[],s=[{title:"测量值",dataIndex:"testVal"},{title:"设定值",dataIndex:"defalutVal",scopedSlots:{customRender:"defalutVal"}}],o=[{testVal:"温度28°C",defalutVal:29}],r={data:function(){return{columns:s,dataSource:o,visible:!1}},methods:{sumitHandle:function(t){this.visible=!1}}},c=r,l=a("2877"),d=Object(l["a"])(c,i,n,!1,null,null,null);e["default"]=d.exports},1123:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"luke"},[a("div",{staticClass:"luke-left"},[a("div"),a("div"),a("div"),a("div")]),a("div",{staticClass:"luke-right"},[a("div",[t._v("0°C")]),a("div",[t._v("10°C")]),a("div",[t._v("20°C")]),a("div",[t._v("30°C")]),a("div",[t._v("40°C")])])])}],s={},o=s,r=(a("f433"),a("2877")),c=Object(r["a"])(o,i,n,!1,null,"2bce2671",null);e["default"]=c.exports},"1fbe":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ature-page page-padding-md"},[a("div",{staticClass:"ature-left",style:{width:t.atureLeftWidth+"px"}},[a("a-card",{staticStyle:{height:"90vh",background:"rgba(24, 30, 49, 0.8)",border:"none"}},[t.isCaret?a("j-tree"):t._e()],1),a("div",{staticClass:"ature-caret",on:{click:t.changeIsCaret}},[t.isCaret?a("a-icon",{attrs:{type:"caret-left"}}):a("a-icon",{attrs:{type:"caret-right"}})],1)],1),a("div",{staticClass:"ature-right"},[a("div",[a("a-breadcrumb",{staticStyle:{color:"#fff"}},[a("a-breadcrumb-item",[t._v("Home")]),a("a-breadcrumb-item",[t._v("An Application")])],1)],1),a("div",{staticClass:"luke-view"},[a("luke-view")],1),a("div",{staticClass:"alarm-alert"},[a("j-alert")],1),a("div",{staticClass:"figure"},[a("j-pic-item")],1),a("div",{staticClass:"search-input"},[a("a-input-search",{staticStyle:{width:"230px"},attrs:{placeholder:"输入设备/传感器名称查找",size:"small"}})],1),a("div",{staticClass:"jump-span"},[a("span",[t._v("返回")]),a("span",{on:{click:t.pushgo}},[t._v("前进")])])]),a("JDetailTabDraw",{ref:"JDetailTabDraw"})],1)},n=[],s=a("9082"),o=a("effc"),r=a("8c0f"),c=a("1123"),l=a("de65"),d={name:"temperature",components:{jTree:s["default"],jAlert:o["default"],jPicItem:r["default"],JDetailTabDraw:l["default"],lukeView:c["default"]},data:function(){return{isCaret:!0,atureLeftWidth:240,minHeight:window.innerHeight-64-122}},methods:{changeIsCaret:function(){if(this.isCaret=!this.isCaret,this.isCaret)return this.atureLeftWidth=240;this.atureLeftWidth=0},pushgo:function(){this.$refs.JDetailTabDraw.open()}}},m=d,u=(a("d2a3"),a("2877")),f=Object(u["a"])(m,i,n,!1,null,"6cb9de62",null);e["default"]=f.exports},"2dd0":function(t,e,a){},3505:function(t,e,a){},"3eeb":function(t,e,a){},"58fe":function(t,e,a){"use strict";var i=a("3505"),n=a.n(i);n.a},"61e3":function(t,e,a){},"6a2e":function(t,e,a){"use strict";var i=a("2dd0"),n=a.n(i);n.a},"7a9f":function(t,e,a){"use strict";var i=a("d049"),n=a.n(i);n.a},"88dc":function(t,e,a){},"8c0f":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"j-picItem font-size-xs"},[a("div",{staticClass:"pdg-bom-xs",staticStyle:{"border-bottom":"1px solid #13151E",color:"#5B606D"}},[t._v("图例")]),a("div",{staticClass:"figure-down"},[a("div",{staticStyle:{"text-align":"left"}},[a("div",[a("a-badge",{attrs:{status:"success"}}),t._v("正常运行 ")],1),a("div",[a("a-badge",{attrs:{status:"default"}}),t._v("关闭 ")],1),a("div",[a("a-badge",{attrs:{status:"error"}}),t._v("故障报警 ")],1)]),a("div",[a("div",[a("a-icon",{attrs:{type:"control"}})],1),a("div",[t._v("温控器")])])])])},n=[],s={data:function(){return{stateList:[{type:"primary",text:"正常",icon:""},{type:"info",text:"故障",icon:""},{type:"error",text:"警报",icon:""},{type:"close",text:"关闭",icon:""}],jeptList:[{text:"温控器",icon:""}]}},props:{stateList:{type:Array,default:function(){return[]}},jeptList:{type:Array,default:function(){return[]}}},watch:{},methods:{}},o=s,r=(a("a355"),a("2877")),c=Object(r["a"])(o,i,n,!1,null,"66a12d3a",null);e["default"]=c.exports},9082:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"j-tree"},[a("a-input-search",{staticStyle:{"margin-bottom":"8px"},attrs:{size:"small",placeholder:"按区域名称查询"},on:{change:t.onChange}}),a("a-tree",{attrs:{"expanded-keys":t.expandedKeys,autoExpandParent:t.autoExpandParent,defaultExpandAll:!0,showLine:t.iShowLine,"tree-data":t.gData},on:{expand:t.onExpand},scopedSlots:t._u([{key:"custom",fn:function(e){return[a("span",[t._v(t._s(e.title))]),a("span",{staticClass:"color-nim"},[t._v("0")])]}}])})],1)},n=[],s=[{title:"翠宫饭店",key:"0",children:[{title:"二层",key:"1",scopedSlots:{title:"custom"},children:[{title:"东区",key:"1-1",scopedSlots:{title:"custom"}},{title:"南区",key:"1-2"},{title:"西区",key:"1-3"},{title:"北区",key:"1-4"}]},{title:"三层",key:"2"},{title:"四层",key:"3"},{title:"五层",key:"4"},{title:"六层",key:"5"},{title:"七层",key:"6"},{title:"八层",key:"7"},{title:"九层",key:"8"},{title:"十层",key:"9"},{title:"十一层",key:"10"},{title:"十二层",key:"11"},{title:"十三层",key:"12"},{title:"十四层",key:"13"},{title:"十五层",key:"14"}]}],o={name:"jTree",data:function(){return{expandedKeys:["0","1"],searchValue:"",autoExpandParent:!0,gData:s}},props:{iShowLine:{type:Boolean,default:!1}},methods:{onExpand:function(t){this.expandedKeys=t,this.autoExpandParent=!1},onChange:function(){}}},r=o,c=(a("6a2e"),a("58fe"),a("2877")),l=Object(c["a"])(r,i,n,!1,null,"745b60b1",null);e["default"]=l.exports},"924a":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"mg-bom-sm"},[a("a-select",{staticStyle:{width:"120px"},attrs:{"default-value":"lucy"}},[a("a-select-option",{attrs:{value:"jack"}},[t._v(" 启动 ")]),a("a-select-option",{attrs:{value:"lucy"}},[t._v(" 停止 ")])],1)],1),a("a-table",{attrs:{scroll:t.setScroll,columns:t.columns,dataSource:t.dataSource},scopedSlots:t._u([{key:"action",fn:function(e,i){return a("div",{},[0===i.status?a("span",{staticStyle:{color:"red"}},[t._v("停止")]):a("span",{staticStyle:{color:"#409EFD"}},[t._v("启动")])])}}])})],1)},n=[],s=[{title:"时间",dataIndex:"time",key:"time"},{title:"启动/停止",dataIndex:"ting",key:"address",scopedSlots:{customRender:"action"}}],o=[{key:1,name:"John",age:32,time:"New",status:1,description:"My name is John"},{key:2,name:"Jim",age:42,time:"London",status:0,description:"My name is Jim"},{key:2,name:"Jim",age:42,time:"London",description:"My name is Jim"},{key:2,name:"Jim",age:42,time:"London",description:"My name is Jim"},{key:2,name:"Jim",age:42,time:"London",description:"My name is Jim"},{key:2,name:"Jim",age:42,time:"London",description:"My name is Jim"},{key:2,name:"Jim",age:42,time:"London",description:"My name is Jim"},{key:2,name:"Jim",age:42,time:"London",description:"My name is Jim"},{key:2,name:"Jim",age:42,time:"London",description:"My name is Jim"},{key:2,name:"Jim",age:42,time:"London",description:"My name is Jim"},{key:2,name:"Jim",age:42,time:"London",description:"My name is Jim"}],r={data:function(){return{dataSource:o,columns:s}},computed:{setScroll:function(){if(this.columns.length>1)return{x:0,y:300}}},methods:{}},c=r,l=(a("e827"),a("2877")),d=Object(l["a"])(c,i,n,!1,null,"abd19d52",null);e["default"]=d.exports},9966:function(t,e,a){},"9d8f":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"min-title"},[t._v("实时视频")]),a("div",{staticClass:"video-content"}),a("div",{staticClass:"min-title"},[t._v("历史录像")]),a("div",[a("a-row",{staticClass:"mg-bom-sm"},[a("a-col",[a("a-select",{staticStyle:{width:"160px"},attrs:{"default-value":"lucy"}},[a("a-select-option",{attrs:{value:"jack"}},[t._v(" 录像开始时间 ")]),a("a-select-option",{attrs:{value:"lucy"}},[t._v(" 录像结束时间 ")])],1)],1)],1),a("a-row",{staticClass:"mg-bom-sm",attrs:{span:24}},[a("a-col",{attrs:{span:12}},[a("a-range-picker")],1),a("a-col",{attrs:{span:8}},[a("a-button",{staticClass:"mg-left-sm mg-right-sm",attrs:{type:"primary"}},[t._v("查询")]),a("a-button",[t._v("重置")])],1)],1)],1),a("a-table",{attrs:{scroll:t.setSolScroll,columns:t.columns,dataSource:t.dataSource},scopedSlots:t._u([{key:"action",fn:function(e){return a("a",{attrs:{href:"javascript:;"}},[t._v("回放")])}}])}),a("div",{staticClass:"min-title"},[t._v("历史告警记录")]),a("div",[a("a-row",{staticClass:"mg-bom-sm"},[a("a-col",[t._v(" 画面截取时间: ")])],1),a("a-row",{staticClass:"mg-bom-sm",attrs:{span:24}},[a("a-col",{attrs:{span:12}},[a("a-range-picker")],1),a("a-col",{attrs:{span:8}},[a("a-button",{staticClass:"mg-left-sm mg-right-sm",attrs:{type:"primary"}},[t._v("查询")]),a("a-button",[t._v("重置")])],1)],1)],1),a("a-table",{attrs:{scroll:t.setSolScroll,columns:t.solColumns,dataSource:t.dataSource},scopedSlots:t._u([{key:"action",fn:function(e){return a("a",{attrs:{href:"javascript:;"}},[t._v("查看")])}}])})],1)},n=[],s=[{title:"录像开始时间",dataIndex:"name",key:"name"},{title:"录像结束时间",dataIndex:"age",key:"age"},{title:"操作",dataIndex:"time",key:"address",scopedSlots:{customRender:"action"}}],o=[{title:"画面抓取时间",dataIndex:"name",key:"name"},{title:"操作",dataIndex:"time",key:"address",scopedSlots:{customRender:"action"}}],r=[{key:1,name:"John",age:32,time:"New",description:"My name is John"},{key:2,name:"Jim",age:42,time:"London",description:"My name is Jim"},{key:2,name:"Jim",age:42,time:"London",description:"My name is Jim"},{key:2,name:"Jim",age:42,time:"London",description:"My name is Jim"},{key:2,name:"Jim",age:42,time:"London",description:"My name is Jim"},{key:2,name:"Jim",age:42,time:"London",description:"My name is Jim"},{key:2,name:"Jim",age:42,time:"London",description:"My name is Jim"},{key:2,name:"Jim",age:42,time:"London",description:"My name is Jim"},{key:2,name:"Jim",age:42,time:"London",description:"My name is Jim"},{key:2,name:"Jim",age:42,time:"London",description:"My name is Jim"},{key:2,name:"Jim",age:42,time:"London",description:"My name is Jim"}],c={data:function(){return{dataSource:r,columns:s,solColumns:o}},computed:{setSolScroll:function(){if(this.solColumns.length>0)return{x:0,y:300}}},methods:{}},l=c,d=(a("b6f1"),a("2877")),m=Object(d["a"])(l,i,n,!1,null,"01f84edc",null);e["default"]=m.exports},a355:function(t,e,a){"use strict";var i=a("61e3"),n=a.n(i);n.a},afe1:function(t,e,a){},b6f1:function(t,e,a){"use strict";var i=a("3eeb"),n=a.n(i);n.a},b853:function(t,e,a){"use strict";var i=a("afe1"),n=a.n(i);n.a},c187:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"min-title"},[t._v("实时告警")]),a("div",{staticClass:"table-tips"},[a("a-icon",{staticClass:"mg-right-sm",staticStyle:{color:"#409EFD"},attrs:{type:"info-circle"}}),t._v("共"),a("span",{staticStyle:{color:"#2877FF",margin:"0 4px"}},[t._v("4")]),t._v("条实时告警 ")],1),a("a-table",{attrs:{scroll:t.setScroll,columns:t.columns,dataSource:t.dataSource},scopedSlots:t._u([{key:"action",fn:function(e){return a("a",{attrs:{href:"javascript:;"}},[t._v("Delete")])}},{key:"expandedRowRender",fn:function(e){return a("div",{staticStyle:{margin:"0"}},[a("p",[t._v("告警代码："+t._s(e.description))]),a("p",[t._v("告警描述："+t._s(e.description))])])}}])}),a("div",{staticClass:"min-title"},[t._v("历史告警记录")]),a("a-table",{attrs:{scroll:t.setSolScroll,columns:t.solColumns,dataSource:t.dataSource}})],1)},n=[],s=[{title:"告警等级",dataIndex:"name",key:"name"},{title:"告警类型",dataIndex:"age",key:"age"},{title:"触发时间",dataIndex:"time",key:"address"}],o=[{title:"告警等级",dataIndex:"name",key:"name"},{title:"告警类型",dataIndex:"age",key:"age"},{title:"触发时间",dataIndex:"time",key:"address"},{title:"触发时间",dataIndex:"time",key:"address"},{title:"触发时间",dataIndex:"time",key:"address"},{title:"触发时间",dataIndex:"time",key:"address"},{title:"触发时间",dataIndex:"time",key:"address"},{title:"触发时间",dataIndex:"time",key:"address"}],r=[{key:1,name:"John",age:32,time:"New",description:"My name is John"},{key:2,name:"Jim",age:42,time:"London",description:"My name is Jim"},{key:2,name:"Jim",age:42,time:"London",description:"My name is Jim"},{key:2,name:"Jim",age:42,time:"London",description:"My name is Jim"},{key:2,name:"Jim",age:42,time:"London",description:"My name is Jim"},{key:2,name:"Jim",age:42,time:"London",description:"My name is Jim"},{key:2,name:"Jim",age:42,time:"London",description:"My name is Jim"},{key:2,name:"Jim",age:42,time:"London",description:"My name is Jim"},{key:2,name:"Jim",age:42,time:"London",description:"My name is Jim"},{key:2,name:"Jim",age:42,time:"London",description:"My name is Jim"},{key:2,name:"Jim",age:42,time:"London",description:"My name is Jim"}],c={data:function(){return{dataSource:r,columns:s,solColumns:o}},computed:{setSolScroll:function(){if(this.solColumns.length>4)return{x:700,y:300}},setScroll:function(){if(this.columns.length>2)return{x:0,y:300}}},methods:{}},l=c,d=(a("b853"),a("2877")),m=Object(d["a"])(l,i,n,!1,null,"73db89b2",null);e["default"]=m.exports},d049:function(t,e,a){},d2a3:function(t,e,a){"use strict";var i=a("88dc"),n=a.n(i);n.a},de65:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-drawer",{attrs:{title:t.title,placement:"right",closable:!1,width:"600",visible:t.visible},on:{close:function(e){t.visible=!1}}},[a("div",{staticClass:"min-title"},[t._v("基本信息")]),a("a-descriptions",{attrs:{title:""}},[a("a-descriptions-item",{attrs:{label:"设备名称"}},[t._v(" 温控器0111 ")]),a("a-descriptions-item",{attrs:{label:"设备类型"}},[t._v(" 温控器 ")]),a("a-descriptions-item",{attrs:{label:"所在位置"}},[t._v(" 一层北区 ")])],1),a("a-tabs",{attrs:{"default-active-key":"1"},on:{change:t.callback}},[a("a-tab-pane",{key:"1",attrs:{tab:"实时工作信息"}},[a("JTabsPane1")],1),a("a-tab-pane",{key:"2",attrs:{tab:"告警信息","force-render":""}},[a("JTabsPane2")],1),a("a-tab-pane",{key:"3",attrs:{tab:"启停记录"}},[a("JTabsPane3")],1),a("a-tab-pane",{key:"4",attrs:{tab:"视频录像"}},[a("JTabsPane4")],1)],1)],1)],1)},n=[],s=a("0e90"),o=a("c187"),r=a("924a"),c=a("9d8f"),l={components:{JTabsPane1:s["default"],JTabsPane2:o["default"],JTabsPane3:r["default"],JTabsPane4:c["default"]},data:function(){return{title:"温控器001",visible:!1}},methods:{open:function(){this.visible=!0}}},d=l,m=a("2877"),u=Object(m["a"])(d,i,n,!1,null,"5506de8f",null);e["default"]=u.exports},e827:function(t,e,a){"use strict";var i=a("f484"),n=a.n(i);n.a},effc:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"j-alert"},t._l(18,(function(e){return a("div",[a("a-row",{staticClass:"alert-row mg-bom-xs padding-xs",attrs:{gutter:24}},[a("a-col",{attrs:{span:1}},[a("a-badge",{attrs:{status:"error"}})],1),a("a-col",{attrs:{span:19}},[t._v("一层东区-【温控器001】：电压过低！")]),a("a-col",{attrs:{span:2}},[a("a-icon",{attrs:{type:"arrow-right"}})],1)],1)],1)})),0)},n=[],s={name:"jAlert",data:function(){return{}},methods:{}},o=s,r=(a("7a9f"),a("2877")),c=Object(r["a"])(o,i,n,!1,null,"4f56732a",null);e["default"]=c.exports},f433:function(t,e,a){"use strict";var i=a("9966"),n=a.n(i);n.a},f484:function(t,e,a){}}]);