(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0deef296"],{2498:function(t,a,e){"use strict";var n=e("5a68"),o=e.n(n);o.a},"5a68":function(t,a,e){},9498:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{class:t.advanced?"search":null},[e("a-form",{attrs:{layout:"horizontal"}},[e("div",{class:t.advanced?null:"fold"},[e("a-row",[e("a-col",{attrs:{md:8,sm:24}},[e("a-form-item",{attrs:{label:"摄像头名称",labelCol:{span:5},wrapperCol:{span:18,offset:1}}},[e("a-input-number",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入模式名称"}})],1)],1),e("a-col",{attrs:{md:8,sm:24}},[e("a-form-item",{attrs:{label:"楼层",labelCol:{span:5},wrapperCol:{span:18,offset:1}}},[e("a-select",{staticStyle:{width:"120px"},attrs:{"default-value":"全部"},on:{change:t.handleChange}},[e("a-select-option",{attrs:{value:"jack"}},[t._v(" Jack ")])],1)],1)],1),e("a-col",{attrs:{md:8,sm:24}},[e("a-form-item",{attrs:{label:"",labelCol:{span:5},wrapperCol:{span:18,offset:1}}},[e("a-select",{staticStyle:{width:"120px"},attrs:{"default-value":"区域"},on:{change:t.handleChange}},[e("a-select-option",{attrs:{value:"jack"}},[t._v(" Jack ")])],1)],1)],1)],1),e("a-row",[e("a-col",{attrs:{md:10,sm:24}},[e("a-form-item",{attrs:{label:"画面抓取时间",labelCol:{span:5},wrapperCol:{span:18,offset:1}}},[e("a-range-picker")],1)],1)],1)],1),e("span",{staticStyle:{float:"right","margin-top":"3px"}},[e("a-button",{attrs:{type:"primary"}},[t._v("查询")]),e("a-button",{staticStyle:{"margin-left":"8px"}},[t._v("重置")]),e("a",{staticStyle:{"margin-left":"8px"},on:{click:t.toggleAdvanced}},[t._v(" "+t._s(t.advanced?"收起":"展开")+" "),e("a-icon",{attrs:{type:t.advanced?"up":"down"}})],1)],1)])],1),e("standard-table",{attrs:{columns:t.columns,dataSource:t.dataSource,selectedRows:t.selectedRows,pagination:t.ipagination},on:{"update:selectedRows":function(a){t.selectedRows=a},"update:selected-rows":function(a){t.selectedRows=a},clear:t.onClear,change:t.handleTableChange,selectedRowChange:t.onSelectChange},scopedSlots:t._u([{key:"action",fn:function(a){a.text;var n=a.record;return e("div",{},[e("a-button",{attrs:{type:"link"},on:{click:function(a){return t.seeOrEdit(n)}}},[t._v("查看")])],1)}}])})],1)},o=[],s=(e("b64b"),e("d81d"),e("159b"),e("3521")),c=e("f693"),l=[{title:"序号",dataIndex:"no"},{title:"摄像头名称",dataIndex:"name"},{title:"楼层",dataIndex:"createBy",scopedSlots:{customRender:"createBy"}},{title:"区域",dataIndex:"updatedAt"},{title:"画面抓取时间",dataIndex:"status"},{title:"操作",width:180,scopedSlots:{customRender:"action"}}],i={name:"temperature",components:{StandardTable:s["default"]},data:function(){return{advanced:!1,selectedRows:[],query:{name:"",type:"",pageNo:1,pageSize:10},ipagination:{current:1,pageSize:10,pageSizeOptions:["10","20","30"],showTotal:function(t,a){return a[0]+"-"+a[1]+" 共"+t+"条"},showQuickJumper:!0,showSizeChanger:!0,total:0},columns:l,dataSource:[]}},created:function(){this.initData()},methods:{onSelectChange:function(){},handleChange:function(){},toggleAdvanced:function(){this.advanced=!this.advanced},onClear:function(){},handleTableChange:function(t,a,e){Object.keys(e).length>0&&(this.isorter.column=e.field,this.isorter.order="ascend"==e.order?"asc":"desc"),Object.keys(a).map((function(t){var e=t,n=[];a[e].forEach((function(t,a){n.push(t)}))})),this.ipagination=t,this.query.pageNo=t.current,this.query.pageSize=t.pageSize,this.initData()},seeOrEdit:function(t){this.$refs.automaticModal.showModal(t)},initData:function(){var t=this;Object(c["getAutomaticList"])(this.query).then((function(a){0===a.code?(t.dataSource=a.data.records||[],t.ipagination.total=a.data.total,console.log(t.dataSource)):t.$message.error(a.msg)}))}}},r=i,d=(e("2498"),e("2877")),u=Object(d["a"])(r,n,o,!1,null,"caf6b610",null);a["default"]=u.exports},"9f61":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"bg-color page-padding-md mg-top-xs"},[e("a-tabs",{attrs:{"default-active-key":"1"},on:{change:t.callback}},[e("a-tab-pane",{key:"1",attrs:{tab:"历史录像"}},[e("historicalVideoTab")],1),e("a-tab-pane",{key:"2",attrs:{tab:"历史画面","force-render":""}},[e("historicalImgTab")],1)],1)],1)},o=[],s=e("9498"),c=e("496a"),l={components:{historicalImgTab:s["default"],historicalVideoTab:c["default"]},data:function(){return{}},mounted:{callback:function(){}}},i=l,r=e("2877"),d=Object(r["a"])(i,n,o,!1,null,null,null);a["default"]=d.exports}}]);