(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d073b86c","chunk-2d0da06c","chunk-2d231030","chunk-2d0e93c2"],{1276:function(e,t,n){"use strict";var i=n("d784"),a=n("44e7"),r=n("825a"),o=n("1d80"),s=n("4840"),c=n("8aa5"),l=n("50c4"),d=n("14c3"),u=n("9263"),m=n("9f7f"),f=m.UNSUPPORTED_Y,p=[].push,h=Math.min,g=4294967295;i("split",2,(function(e,t,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var i=String(o(this)),r=void 0===n?g:n>>>0;if(0===r)return[];if(void 0===e)return[i];if(!a(e))return t.call(i,e,r);var s,c,l,d=[],m=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),f=0,h=new RegExp(e.source,m+"g");while(s=u.call(h,i)){if(c=h.lastIndex,c>f&&(d.push(i.slice(f,s.index)),s.length>1&&s.index<i.length&&p.apply(d,s.slice(1)),l=s[0].length,f=c,d.length>=r))break;h.lastIndex===s.index&&h.lastIndex++}return f===i.length?!l&&h.test("")||d.push(""):d.push(i.slice(f)),d.length>r?d.slice(0,r):d}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var a=o(this),r=void 0==t?void 0:t[e];return void 0!==r?r.call(t,a,n):i.call(String(a),t,n)},function(e,a){var o=n(i,e,this,a,i!==t);if(o.done)return o.value;var u=r(e),m=String(this),p=s(u,RegExp),b=u.unicode,v=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(f?"g":"y"),O=new p(f?"^(?:"+u.source+")":u,v),j=void 0===a?g:a>>>0;if(0===j)return[];if(0===m.length)return null===d(O,m)?[m]:[];var k=0,$=0,y=[];while($<m.length){O.lastIndex=f?0:$;var D,C=d(O,f?m.slice($):m);if(null===C||(D=h(l(O.lastIndex+(f?$:0)),m.length))===k)$=c(m,$,b);else{if(y.push(m.slice(k,$)),y.length===j)return y;for(var I=1;I<=C.length-1;I++)if(y.push(C[I]),y.length===j)return y;$=k=D}}return y.push(m.slice(k)),y}]}),f)},"44e7":function(e,t,n){var i=n("861d"),a=n("c6b6"),r=n("b622"),o=r("match");e.exports=function(e){var t;return i(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==a(e))}},"68c7":function(e,t,n){"use strict";var i=n("fa12"),a=n.n(i);a.a},"6a9d":function(e,t,n){"use strict";n.r(t),n.d(t,"fetchDeptTree",(function(){return a})),n.d(t,"fetchTree",(function(){return r})),n.d(t,"addObj",(function(){return o})),n.d(t,"getdept",(function(){return s})),n.d(t,"delObj",(function(){return c})),n.d(t,"putObj",(function(){return l})),n.d(t,"saveRoledept",(function(){return d})),n.d(t,"getRoledept",(function(){return u}));var i=n("5098");function a(e){return Object(i["request"])("get","/admin/dept/user-tree",e,"Y")}function r(e){return Object(i["request"])("get","/admin/dept/tree",e,"Y")}function o(e){return Object(i["request"])("post","/admin/dept",e)}function s(e){return Object(i["request"])("get","/admin/dept/"+e,{})}function c(e){return Object(i["request"])("delete","/admin/dept/"+e,{})}function l(e){return Object(i["request"])("put","/admin/dept",e)}function d(e){return Object(i["request"])("post","/admin/roledept",e)}function u(e){return Object(i["request"])("get","/admin/roledept/"+e,{})}},"8d55":function(e,t,n){"use strict";n.r(t),n.d(t,"fetchList",(function(){return a})),n.d(t,"deptRoleList",(function(){return r})),n.d(t,"getObj",(function(){return o})),n.d(t,"addObj",(function(){return s})),n.d(t,"putObj",(function(){return c})),n.d(t,"delObj",(function(){return l})),n.d(t,"permissionUpd",(function(){return d})),n.d(t,"fetchRoleTree",(function(){return u}));var i=n("5098");function a(e){return Object(i["request"])("get","/admin/role/page",e,"Y")}function r(){return Object(i["request"])("get","/admin/role/list",{})}function o(e){return Object(i["request"])("get","/admin/role/"+e,{})}function s(e){return Object(i["request"])("post","/admin/role",e)}function c(e){return Object(i["request"])("put","/admin/role",e)}function l(e){return Object(i["request"])("delete","/admin/role/"+e,{})}function d(e,t){return Object(i["request"])("put","/admin/role/menu",{roleId:e,menuIds:t},"Y")}function u(e){return Object(i["request"])("get","/admin/menu/tree/"+e,{})}},a5f6:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"template_content"},[n("div",{staticClass:"content_box"},[n("div",{staticClass:"table_top"},[n("a-button",{staticClass:"btn_right_margin",attrs:{icon:"plus",type:"primary"},on:{click:function(t){return e.showModal("")}}},[e._v(e._s(e.$t("logistics.new")))])],1),n("a-table",{attrs:{columns:e.columns,dataSource:e.data,loading:e.loading,pagination:e.pagination,bordered:"",size:"small"},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"action",fn:function(t,i){return[n("a-button",{staticClass:"btn_margin",attrs:{icon:"edit",type:"primary"},on:{click:function(t){return e.showModal(i)}}},[e._v(e._s(e.$t("logistics.editor")))]),n("a-button",{staticClass:"btn_margin",attrs:{icon:"delete",type:"danger"},on:{click:function(t){return e.deleteRow({record:i})}}},[e._v(e._s(e.$t("logistics.delete")))]),n("a-button",{staticClass:"btn_margin",attrs:{icon:"cluster",type:"link"},on:{click:function(t){return e.menuAuthModal({record:i})}}},[e._v(e._s(e.$t("logistics.MenuPermissions")))]),n("a-button",{staticClass:"btn_margin",attrs:{icon:"cluster",type:"link"},on:{click:function(t){return e.deptAuthModal({record:i})}}},[e._v(e._s(e.$t("logistics.DepartmentPermission")))])]}}])})],1),n("a-modal",{attrs:{title:e.modalTitle,footer:null},model:{value:e.modalVisible,callback:function(t){e.modalVisible=t},expression:"modalVisible"}},[n("a-form",{attrs:{form:e.modalForm},on:{submit:e.modalHandleSubmit}},[n("a-form-item",{attrs:{label:e.$t("unit"),"label-col":{span:5},"wrapper-col":{span:19}}},[n("a-cascader",{directives:[{name:"decorator",rawName:"v-decorator",value:["unitId",{rules:[{required:!0,message:this.$t("selectunit")}]}],expression:"['unitId', { rules: [{ required: true, message: this.$t('selectunit') }] }]"}],attrs:{options:e.deptOptions,fieldNames:e.fieldNames,changeOnSelect:"",placeholder:e.$t("selectunit")}})],1),n("a-form-item",{attrs:{label:e.$t("roleName"),"label-col":{span:5},"wrapper-col":{span:19}}},[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["roleName"],expression:"[\n        'roleName',\n      ]"}],attrs:{placeholder:e.$t("inproleName")}})],1),n("a-form-item",{attrs:{label:e.$t("roleCode"),"label-col":{span:5},"wrapper-col":{span:19}}},[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["roleCode"],expression:"[\n        'roleCode',\n      ]"}],attrs:{placeholder:e.$t("inproleCode")}})],1),n("a-form-item",{attrs:{label:e.$t("roleDesc"),"label-col":{span:5},"wrapper-col":{span:19}}},[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["roleDesc"],expression:"[\n        'roleDesc',\n      ]"}],attrs:{placeholder:e.$t("inproleDesc")}})],1),n("a-form-item",{attrs:{"wrapper-col":{span:19,offset:5}}},[n("a-button",{attrs:{type:"primary","html-type":"submit"}},[e._v(e._s(e.$t("logistics.save")))])],1)],1)],1),n("a-modal",{attrs:{title:e.$t("logistics.MenuPermissions"),footer:null,destroyOnClose:""},model:{value:e.menumodalVisible,callback:function(t){e.menumodalVisible=t},expression:"menumodalVisible"}},[n("a-tree",{attrs:{checkable:"",treeData:e.menuTreeData,defaultCheckedKeys:e.menuDefaultCheckedKeys,replaceFields:e.menuReplaceFields,defaultExpandAll:""},on:{check:this.onMenuCheck}}),n("div",{staticClass:"btn-box"},[n("a-button",{attrs:{type:"primary"},on:{click:e.saveMenu}},[e._v(e._s(e.$t("logistics.save")))])],1)],1),n("a-modal",{attrs:{title:e.$t("logistics.DepartmentPermission"),footer:null,destroyOnClose:""},model:{value:e.deptmodalVisible,callback:function(t){e.deptmodalVisible=t},expression:"deptmodalVisible"}},[n("a-tree",{attrs:{checkable:"",treeData:e.deptTreeData,defaultCheckedKeys:e.deptDefaultCheckedKeys,replaceFields:e.deptReplaceFields,defaultExpandAll:""},on:{check:this.onDeptCheck}}),n("div",{staticClass:"btn-box"},[n("a-button",{attrs:{type:"primary"},on:{click:e.saveDept}},[e._v(e._s(e.$t("logistics.save")))])],1)],1)],1)},a=[],r=(n("b64b"),n("a4d3"),n("4de4"),n("e439"),n("159b"),n("dbb4"),n("ade3")),o=(n("d81d"),n("ac1f"),n("1276"),n("a9e3"),n("a434"),n("d3b7"),n("25f0"),n("8d55")),s=n("6a9d"),c=n("ef70");n("ca00");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(r["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=[{title:"角色名称",dataIndex:"roleName",align:"center"},{title:"角色标识",dataIndex:"roleCode",align:"center"},{title:"角色描述",dataIndex:"roleDesc",align:"center"},{title:"创建时间",dataIndex:"createTime",align:"center"},{title:"操作",key:"action",scopedSlots:{customRender:"action"},align:"center"}],m=[{title:"Character name",dataIndex:"roleName",align:"center"},{title:"Role identification",dataIndex:"roleCode",align:"center"},{title:"Role description",dataIndex:"roleDesc",align:"center"},{title:"Creation time",dataIndex:"createTime",align:"center"},{title:"operation",key:"action",scopedSlots:{customRender:"action"},align:"center"}],f=[{title:"キャラクター名",dataIndex:"roleName",align:"center"},{title:"キャラクター表示",dataIndex:"roleCode",align:"center"},{title:"キャラクター記述",dataIndex:"roleDesc",align:"center"},{title:"創建時期",dataIndex:"createTime",align:"center"},{title:"操作",key:"action",scopedSlots:{customRender:"action"},align:"center"}],p={data:function(){return{username:"",loading:!0,searchPage:{current:1,size:10,username:""},columns:"cn"==localStorage.lang?u:"en"==localStorage.lang?m:f,data:[],pagination:{showQuickJumper:!0,showSizeChanger:!0},modalVisible:!1,modalTitle:this.$t("logistics.add"),modalForm:this.$form.createForm(this,{name:"coordinated"}),parameters:{roleName:"",roleCode:"",unitId:"",roleDesc:""},deptOptions:[],roleList:"",rowData:{},fieldNames:{label:"name",value:"id",children:"children"},menumodalVisible:!1,menuTreeData:[],menuDefaultCheckedKeys:[],menuReplaceFields:{children:"children",title:"name",key:"id"},deptmodalVisible:!1,deptTreeData:[],deptDefaultCheckedKeys:[],deptReplaceFields:{children:"children",title:"name",key:"id"}}},created:function(){this.importFontpack("admin/role/"),this.getList(this.searchPage),this.getDept(),this.GetAllMenu()},beforeUpdate:function(){this.importFontpack("admin/role/")},methods:{getList:function(e){var t=this;Object(o["fetchList"])(e).then((function(e){if(t.loading=!1,0==e.code){t.data=e.data.records;var n=d({},t.pagination);n.current=e.data.current,n.total=e.data.total,t.pagination=n}else t.$message.info(err)})).catch((function(e){t.$message.info(e)}))},getDept:function(){var e=this;Object(s["fetchTree"])().then((function(t){e.loading=!1,0==t.code?(e.deptOptions=t.data,e.deptTreeData=t.data):e.$message.info(err)})).catch((function(t){e.$message.info(t)}))},GetCheckRoledept:function(e){var t=this;Object(s["getRoledept"])(e).then((function(e){0==e.code?(t.deptDefaultCheckedKeys=e.data,t.deptmodalVisible=!0):t.$message.info(err)})).catch((function(e){t.$message.info(e)}))},GetAllMenu:function(){var e=this;Object(c["fetchMenuTree"])().then((function(t){0==t.code?e.menuTreeData=t.data:e.$message.info(err)})).catch((function(t){e.$message.info(t)}))},GetCheckMenu:function(e){var t=this;Object(o["fetchRoleTree"])(e).then((function(e){t.menuDefaultCheckedKeys=e,t.menumodalVisible=!0})).catch((function(e){t.$message.info(e)}))},handleTableChange:function(e,t,n){var i=d({},this.searchPage);i.current=e.current,i.size=e.pageSize,this.loading=!0,this.getList(i)},handleSubmit:function(){var e=d({},this.searchPage);this.loading=!0,this.getList(e)},showModal:function(e){var t=this;if(this.modalVisible=!0,""==e)this.modalTitle=this.$t("logistics.add"),this.modalType="add",this.$nextTick((function(){t.modalForm.setFieldsValue({roleName:"",roleCode:"",unitId:[],roleDesc:""})}));else{this.modalTitle=this.$t("logistics.editor"),this.modalType="edit";Object(s["getdept"])(e.unitId).then((function(n){var i=n.data.unitNo.split("|").map(Number);i.splice(0,1),t.$nextTick((function(){t.modalForm.setFieldsValue({roleName:e.roleName,roleCode:e.roleCode,unitId:i,roleDesc:e.roleDesc}),t.rowData=e}))}))}},deleteRow:function(e){var t=this;Object(o["delObj"])(e.record.roleId).then((function(e){if(t.loading=!1,0==e.code){t.$message.success(t.$t("logistics.deleteSuccess"));var n=d({},t.searchPage);t.loading=!0,t.getList(n)}else t.$message.info(err)})).catch((function(e){t.$message.info(e)}))},modalHandleSubmit:function(e){var t=this;e.preventDefault(),this.modalForm.validateFields((function(e,n){e||"add"!=t.modalType?e||"edit"!=t.modalType||(t.rowData.roleName=n.roleName,t.rowData.roleCode=n.roleCode,t.rowData.unitId=n.unitId[n.unitId.length-1],t.rowData.roleDesc=n.roleDesc,Object(o["putObj"])(t.rowData).then((function(n){if(0==n.code){t.modalVisible=!1,t.$message.success(t.$t("logistics.editSuccess"));var i=d({},t.searchPage);t.loading=!0,t.getList(i)}else t.$message.info(e)})).catch((function(e){t.$message.info(e)}))):(n.unitId=n.unitId[n.unitId.length-1],Object(o["addObj"])(n).then((function(n){if(0==n.code){t.modalVisible=!1,t.$message.success(t.$t("logistics.addSuccess"));var i=d({},t.searchPage);t.loading=!0,t.getList(i)}else t.$message.info(e)})).catch((function(e){t.$message.info(e)})))}))},menuAuthModal:function(e){this.GetCheckMenu(e.record.roleId),this.roleId=e.record.roleId},onMenuCheck:function(e,t){this.menuDefaultCheckedKeys=e},saveMenu:function(){var e=this;Object(o["permissionUpd"])(this.roleId,this.menuDefaultCheckedKeys.toString()).then((function(t){0==t.code?(e.menumodalVisible=!1,e.$message.success(e.$t("logistics.success"))):e.$message.info(err)})).catch((function(t){e.$message.info(t)}))},deptAuthModal:function(e){this.GetCheckRoledept(e.record.roleId),this.roleId=e.record.roleId},onDeptCheck:function(e,t){this.deptDefaultCheckedKeys=e},saveDept:function(){var e=this;Object(s["saveRoledept"])({roleId:this.roleId,deptIds:this.deptDefaultCheckedKeys}).then((function(t){0==t.code?(e.deptmodalVisible=!1,e.$message.success(e.$t("logistics.success"))):e.$message.info(err)})).catch((function(t){e.$message.info(t)}))}}},h=p,g=(n("68c7"),n("2877")),b=Object(g["a"])(h,i,a,!1,null,null,null);t["default"]=b.exports},ef70:function(e,t,n){"use strict";n.r(t),n.d(t,"GetMenu",(function(){return a})),n.d(t,"fetchMenuTree",(function(){return r})),n.d(t,"addObj",(function(){return o})),n.d(t,"getObj",(function(){return s})),n.d(t,"delObj",(function(){return c})),n.d(t,"putObj",(function(){return l}));var i=n("5098");function a(){return Object(i["request"])("get","/admin/menu",{})}function r(e){return Object(i["request"])("get","/admin/menu/tree",e,"Y")}function o(e){return Object(i["request"])("post","/admin/menu",e)}function s(e){return Object(i["request"])("get","/admin/menu/"+e,{})}function c(e){return Object(i["request"])("delete","/admin/menu/"+e,{})}function l(e){return Object(i["request"])("put","/admin/menu",e)}},fa12:function(e,t,n){}}]);