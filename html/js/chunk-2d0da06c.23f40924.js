(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0da06c"],{"6a9d":function(e,t,n){"use strict";n.r(t),n.d(t,"fetchDeptTree",(function(){return u})),n.d(t,"fetchTree",(function(){return d})),n.d(t,"addObj",(function(){return c})),n.d(t,"getdept",(function(){return i})),n.d(t,"delObj",(function(){return o})),n.d(t,"putObj",(function(){return p})),n.d(t,"saveRoledept",(function(){return f})),n.d(t,"getRoledept",(function(){return s}));var r=n("5098");function u(e){return Object(r["request"])("get","/admin/dept/user-tree",e,"Y")}function d(e){return Object(r["request"])("get","/admin/dept/tree",e,"Y")}function c(e){return Object(r["request"])("post","/admin/dept",e)}function i(e){return Object(r["request"])("get","/admin/dept/"+e,{})}function o(e){return Object(r["request"])("delete","/admin/dept/"+e,{})}function p(e){return Object(r["request"])("put","/admin/dept",e)}function f(e){return Object(r["request"])("post","/admin/roledept",e)}function s(e){return Object(r["request"])("get","/admin/roledept/"+e,{})}}}]);