(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3be7f33e","chunk-2d0c9b56"],{"59fb":function(e,t,a){"use strict";a.r(t),a.d(t,"fetchList",(function(){return i})),a.d(t,"addObj",(function(){return n})),a.d(t,"getObj",(function(){return s})),a.d(t,"delObj",(function(){return o})),a.d(t,"putObj",(function(){return l})),a.d(t,"remote",(function(){return c}));var r=a("5098"),i=function(e){return Object(r["request"])("get","/admin/dict/page",e,"Y")},n=function(e){return Object(r["request"])("post","/admin/dict",e)},s=function(e){return Object(r["request"])("get","/admin/dict/"+e,{})},o=function(e){return Object(r["request"])("delete","/admin/dict/"+e.id+"/"+e.type,{})},l=function(e){return Object(r["request"])("put","/admin/dict",e)},c=function(e){return Object(r["request"])("get","/admin/dict/type/"+e,{})}},"61c3":function(e,t,a){},"91c0":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"template_content"},[a("div",{staticClass:"search_box"},[a("a-form",{attrs:{layout:"inline"}},[a("a-form-item",{attrs:{label:e.$t("logistics.search")+"："}},[a("a-input",{attrs:{placeholder:e.$t("type"),allowClear:""},model:{value:e.searchPage.type,callback:function(t){e.$set(e.searchPage,"type",t)},expression:"searchPage.type"}})],1),a("a-form-item",[a("a-button",{attrs:{icon:"search",type:"primary"},on:{click:e.handleSubmit}},[e._v(e._s(e.$t("logistics.search")))])],1)],1)],1),a("div",{staticClass:"content_box"},[a("div",{staticClass:"table_top"},[a("a-button",{staticClass:"btn_right_margin",attrs:{icon:"plus",type:"primary"},on:{click:function(t){return e.showModal("")}}},[e._v(e._s(e.$t("logistics.new")))])],1),a("a-table",{attrs:{columns:e.columns,dataSource:e.data,loading:e.loading,pagination:e.pagination,bordered:"",size:"small"},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"action",fn:function(t,r){return[a("a-button",{staticClass:"btn_margin",attrs:{icon:"edit",type:"primary"},on:{click:function(t){return e.showModal(r)}}},[e._v(e._s(e.$t("logistics.editor")))]),a("a-button",{staticClass:"btn_margin",attrs:{icon:"delete",type:"danger"},on:{click:function(t){return e.deleteRow({record:r})}}},[e._v(e._s(e.$t("logistics.delete")))])]}}])})],1),a("a-modal",{attrs:{title:e.modalTitle,footer:null},model:{value:e.modalVisible,callback:function(t){e.modalVisible=t},expression:"modalVisible"}},[a("a-form",{attrs:{form:e.modalForm},on:{submit:e.modalHandleSubmit}},[a("a-form-item",{attrs:{label:e.$t("value"),"label-col":{span:5},"wrapper-col":{span:19}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["value",{rules:[{required:!0,message:this.$t("inpvalue")}]}],expression:"['value', { rules: [{ required: true, message: this.$t('inpvalue') }] }]"}],attrs:{placeholder:e.$t("inpvalue")}})],1),a("a-form-item",{attrs:{label:e.$t("label"),"label-col":{span:5},"wrapper-col":{span:19}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["label",{rules:[{required:!0,message:this.$t("inplabel")}]}],expression:"['label', { rules: [{ required: true, message: this.$t('inplabel') }] }]"}],attrs:{placeholder:e.$t("inplabel")}})],1),a("a-form-item",{attrs:{label:e.$t("type"),"label-col":{span:5},"wrapper-col":{span:19}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["type",{rules:[{required:!0,message:this.$t("inptype")}]}],expression:"['type', { rules: [{ required: true, message: this.$t('inptype') }] }]"}],attrs:{placeholder:e.$t("inptype")}})],1),a("a-form-item",{attrs:{label:e.$t("description"),"label-col":{span:5},"wrapper-col":{span:19}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["description",{rules:[{required:!0,message:this.$t("inpdescription")}]}],expression:"['description', { rules: [{ required: true, message: this.$t('inpdescription') }] }]"}],attrs:{placeholder:e.$t("inpdescription")}})],1),a("a-form-item",{attrs:{label:e.$t("sort"),"label-col":{span:5},"wrapper-col":{span:19}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{rules:[{required:!0,message:this.$t("inpsort")}]}],expression:"['sort', { rules: [{ required: true, message: this.$t('inpsort') }] }]"}],attrs:{placeholder:e.$t("inpsort")}})],1),a("a-form-item",{attrs:{label:e.$t("remarks"),"label-col":{span:5},"wrapper-col":{span:19}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["remarks"],expression:"[\n        'remarks',\n      ]"}],attrs:{placeholder:e.$t("inpremarks")}})],1),a("a-form-item",{attrs:{"wrapper-col":{span:19,offset:5}}},[a("a-button",{attrs:{type:"primary","html-type":"submit"}},[e._v(e._s(e.$t("logistics.save")))])],1)],1)],1)],1)},i=[],n=(a("b64b"),a("4de4"),a("e439"),a("159b"),a("dbb4"),a("ade3")),s=(a("a4d3"),a("e01a"),a("4e82"),a("59fb")),o=a("ca00");function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){Object(n["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var d=[{title:"数据值",dataIndex:"value",align:"center"},{title:"标签名",dataIndex:"label",align:"center"},{title:"类型",dataIndex:"type",align:"center"},{title:"描述",dataIndex:"description",align:"center"},{title:"排序",dataIndex:"sort",align:"center"},{title:"备注信息",dataIndex:"remarks",align:"center"},{title:"操作",key:"action",scopedSlots:{customRender:"action"},align:"center"}],u=[{title:"data value",dataIndex:"value",align:"center"},{title:"Tag name",dataIndex:"label",align:"center"},{title:"类型",dataIndex:"type",align:"center"},{title:"describe",dataIndex:"description",align:"center"},{title:"sort",dataIndex:"sort",align:"center"},{title:"Note information",dataIndex:"remarks",align:"center"},{title:"operation",key:"action",scopedSlots:{customRender:"action"},align:"center"}],p=[{title:"データ値",dataIndex:"value",align:"center"},{title:"タグ名",dataIndex:"label",align:"center"},{title:"タイプ",dataIndex:"type",align:"center"},{title:"描写",dataIndex:"description",align:"center"},{title:"序列",dataIndex:"sort",align:"center"},{title:"備考情報",dataIndex:"remarks",align:"center"},{title:"操作",key:"action",scopedSlots:{customRender:"action"},align:"center"}],m={data:function(){return{type:"",loading:!0,searchPage:{current:1,size:10},columns:"cn"==localStorage.lang?d:"en"==localStorage.lang?u:p,data:[],pagination:{showQuickJumper:!0,showSizeChanger:!0},modalVisible:!1,modalTitle:this.$t("logistics.add"),modalForm:this.$form.createForm(this,{name:"coordinated"}),parameters:{username:"",password:"",deptId:"",phone:"",role:[],deptName:"",lockFlag:""},deptOptions:[],roleList:"",rowData:{},fieldNames:{label:"name",value:"id",children:"children"}}},created:function(){this.importFontpack("admin/dict/"),this.getList(this.searchPage)},beforeUpdate:function(){this.importFontpack("admin/dict/")},methods:{getList:function(e){var t=this;Object(s["fetchList"])(e).then((function(e){if(t.loading=!1,0==e.code){t.data=e.data.records;var a=c({},t.pagination);a.current=e.data.current,a.total=e.data.total,t.pagination=a}else t.$message.info(err)})).catch((function(e){Object(o["disposereq"])(t,e)}))},handleTableChange:function(e,t,a){var r=c({},this.searchPage);r.current=e.current,r.size=e.pageSize,this.loading=!0,this.getList(r)},handleSubmit:function(){var e=c({},this.searchPage);this.loading=!0,this.getList(e)},showModal:function(e){var t=this;this.modalVisible=!0,""==e?(this.modalTitle=this.$t("logistics.add"),this.modalType="add",this.$nextTick((function(){t.modalForm.setFieldsValue({value:"",label:"",type:"",description:"",sort:"",remarks:""})}))):(this.modalTitle=this.$t("logistics.editor"),this.modalType="edit",this.rowData=e,this.$nextTick((function(){t.modalForm.setFieldsValue({value:e.value,label:e.label,type:e.type,description:e.description,sort:e.sort,remarks:e.remarks})})))},deleteRow:function(e){var t=this;Object(s["delObj"])(e.record).then((function(e){if(t.loading=!1,0==e.code){t.$message.success(t.$t("logistics.deleteSuccess"));var a=c({},t.searchPage);t.loading=!0,t.getList(a)}else t.$message.info(err)})).catch((function(e){Object(o["disposereq"])(t,e)}))},modalHandleSubmit:function(e){var t=this;e.preventDefault(),this.modalForm.validateFields((function(e,a){e||"add"!=t.modalType?e||"edit"!=t.modalType||(t.rowData.id=t.rowData.id,t.rowData.value=a.value,t.rowData.label=a.label,t.rowData.type=a.type,t.rowData.description=a.description,t.rowData.sort=a.sort,t.rowData.remarks=a.remarks,Object(s["putObj"])(t.rowData).then((function(a){if(0==a.code){t.modalVisible=!1,t.$message.success(t.$t("logistics.editSuccess"));var r=c({},t.searchPage);t.loading=!0,t.getList(r)}else t.$message.info(e)})).catch((function(e){t.$message.info(e)}))):Object(s["addObj"])(a).then((function(a){if(0==a.code){t.modalVisible=!1,t.$message.success(t.$t("logistics.addSuccess"));var r=c({},t.searchPage);t.loading=!0,t.getList(r)}else t.$message.info(e)})).catch((function(e){t.$message.info(e)}))}))}}},g=m,b=(a("f83a7"),a("2877")),h=Object(b["a"])(g,r,i,!1,null,null,null);t["default"]=h.exports},f83a7:function(e,t,a){"use strict";var r=a("61c3"),i=a.n(r);i.a}}]);