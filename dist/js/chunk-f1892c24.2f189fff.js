(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f1892c24","chunk-2d2315b8","chunk-2d0d2f00"],{4307:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-color page-padding-md mg-top-xs alarmTotalpage",style:{height:t.bodyHeight+"px"}},[a("a-card",[a("mothDayTab",{staticClass:"text-right",on:{handleOk:t.mothDayTabOk}}),a("com-echart",{attrs:{divId:"oneChart",width:"100%",height:"230px",text:"报警响应时间（min）",series:t.seriesData}})],1),a("a-card",{staticStyle:{margin:"20px 0"}},[a("mothDayTab",{staticClass:"text-right",on:{handleOk:t.mothDayTabOk}}),a("com-echart",{attrs:{divId:"twoChart",width:"100%",height:"230px",text:"各类型报警数量统计",series:t.seriesData}})],1),a("a-card",[a("div",{staticClass:"text-right"},[a("a-select",{staticStyle:{width:"80px"},attrs:{"default-value":"楼层",size:"small"}},[a("a-select-option",{attrs:{value:"jack"}},[t._v(" Jack ")])],1),a("a-select",{staticStyle:{width:"80px","margin-left":"5px"},attrs:{"default-value":"区域",size:"small"}},[a("a-select-option",{attrs:{value:"jack"}},[t._v(" Jack ")])],1),a("mothDayTab",{staticClass:"text-right mg-top-xs",on:{handleOk:t.mothDayTabOk}})],1),a("com-echart",{attrs:{divId:"threeChart",text:"各区域报警数量统计",width:"100%",height:"230px",series:t.seriData,legend:[]}})],1)],1)},n=[],r=a("efcd"),s=a("5b41"),o={name:"alarmTotal",components:{comEchart:r["default"],mothDayTab:s["default"]},data:function(){return{bodyHeight:window.innerHeight-70,seriesData:[{name:"energent",type:"bar",color:"#922633",data:[15,20,36,10,18,20]},{name:"importent",type:"bar",color:"#FBD437",data:[15,20,36,12,10,20]},{name:"normal",type:"bar",color:"#7FBADB",data:[15,20,36,10,13,20]}],seriData:[{name:"total",type:"bar",color:"#698099",data:[15,20,36,10,18,20]}]}},methods:{mothDayTabOk:function(t){console.log(t)}}},l=o,c=(a("bfce"),a("2877")),d=Object(c["a"])(l,i,n,!1,null,"4664d3c7",null);e["default"]=d.exports},"5b41":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-radio-group",{attrs:{value:t.size,size:"small"},on:{change:t.handleSizeChange}},[a("a-radio-button",{attrs:{value:"month"}},[t._v(" 月 ")]),a("a-radio-button",{attrs:{value:"week"}},[t._v(" 周 ")]),a("a-radio-button",{attrs:{value:"dateDay"}},[t._v(" 日 ")])],1)],1)},n=[],r={data:function(){return{size:"month"}},methods:{handleSizeChange:function(t){this.size=t.target.value,this.$emit("handleOk",t.target.value)}}},s=r,o=a("2877"),l=Object(o["a"])(s,i,n,!1,null,null,null);e["default"]=l.exports},bfce:function(t,e,a){"use strict";var i=a("c749"),n=a.n(i);n.a},c749:function(t,e,a){},efcd:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{width:"100%"}},[a("div",{style:{width:t.width,height:t.height},attrs:{id:t.divId}})])},n=[],r=(a("a9e3"),{name:"",data:function(){return{}},props:{divId:{default:"comEchart",type:String},text:"",width:{default:"600px",type:[String,Number]},height:{default:"200px",type:[String,Number]},legend:{default:function(){return["energent","importent","normal"]},type:Array},xAxis:{default:function(){return["01","03","05","07","09"]},type:Array},series:{default:function(){return[]},type:Array}},mounted:function(){var t=this;setTimeout((function(){t.initEchart()}),100)},methods:{initEchart:function(){var t=this.$echarts.init(document.getElementById(this.divId)),e={title:{text:this.text},tooltip:{},legend:{data:this.legend},xAxis:{data:this.xAxis},yAxis:{},series:this.series};t.setOption(e)}}}),s=r,o=a("2877"),l=Object(o["a"])(s,i,n,!1,null,null,null);e["default"]=l.exports}}]);