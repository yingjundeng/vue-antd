(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b2d8933e"],{"0eaf":function(t,e,i){},"498a":function(t,e,i){"use strict";var n=i("23e7"),o=i("58a8").trim,r=i("c8d2");n({target:"String",proto:!0,forced:r("trim")},{trim:function(){return o(this)}})},a847:function(t,e,i){"use strict";var n=i("0eaf"),o=i.n(n);o.a},c8d2:function(t,e,i){var n=i("d039"),o=i("5899"),r="​᠎";t.exports=function(t){return n((function(){return!!o[t]()||r[t]()!=r||o[t].name!==t}))}},f9f0:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper",staticClass:"wrapper"},[i("div",{class:[null===t.oWebControl?"videoNull":""],staticStyle:{left:"109px",top:"133px"},attrs:{id:t.setting.id},domProps:{innerHTML:t._s(null===t.oWebControl?t.playText:"")}})])},o=[],r=(i("498a"),{props:{setting:{type:Object,default:function(){}},sysParams:{type:Object,default:function(){}},list:{type:Array,default:function(){return[]}}},data:function(){return{videoWidth:document.documentElement.clientWidth-200,videoHeight:document.documentElement.clientHeight-90,layout:"2x2",left:"",top:"160",initCount:0,playMode:0,playText:"启动中...",cameraIndexCode:"",oWebControl:null,href:"static/HIKVideo/VideoWebPlugin.exe",screenWidth:document.documentElement.clientWidth,screenHeight:document.documentElement.clientHeight}},created:function(){this.createdVideo()},mounted:function(){},methods:{createdVideo:function(){var t=this;this.initPlugin(this.setting.id,(function(){t.multiPreviewVideo()}))},resizewindow:function(t,e){t=t<1423?1423:t,e=e<754?754:e,window.resizeTo(t,e)},destroyWnd:function(){this.oWebControl?(this.oWebControl.JS_HideWnd(),this.oWebControl.JS_DestroyWnd({funcName:"destroyeWnd"}).then((function(t){console.log(t)}))):console.log("没有实例")},init:function(t){var e=this;this.getPubKey((function(){var i=e.sysParams.appkey,n=e.setEncrypt(e.sysParams.secret),o=e.sysParams.ip,r=e.playMode,s=e.sysParams.port,d="D:\\SnapDir",c="D:\\VideoDir",a=e.layout,h=1,u="secret",l=1,f=1,W="0,16,256,257,258,259,260,512,513,514,515,516,517,768,769";e.oWebControl.JS_RequestInterface({funcName:"init",argument:JSON.stringify({appkey:i,secret:n,ip:o,playMode:r,port:s,snapDir:d,videoDir:c,layout:a,enableHTTPS:h,encryptedFields:u,showToolbar:l,showSmart:f,buttonIDs:W})}).then((function(i){e.oWebControl.JS_Resize(e.videoWidth,e.videoHeight),t&&t()}))}))},initPlugin:function(t,e){var i=this,n=this;n.oWebControl=new WebControl({szPluginContainer:t,iServicePortStart:15900,iServicePortEnd:15909,szClassId:"23BF3B0A-2C56-4D97-9C03-0CB103AA8F11",cbConnectSuccess:function(){n.oWebControl.JS_StartService("window",{dllPath:"./VideoPluginConnect.dll"}).then((function(){n.oWebControl.JS_SetWindowControlCallback({cbIntegrationCallBack:n.cbIntegrationCallBack}),n.oWebControl.JS_CreateWnd(t,n.videoWidth,n.videoHeight).then((function(){n.init(e)}))}),(function(){}))},cbConnectError:function(){n.oWebControl=null,n.playText="插件未启动，正在尝试启动，请稍候...",WebControl.JS_WakeUp("VideoWebPlugin://"),n.initCount++,n.initCount<3?setTimeout((function(){n.initPlugin()}),3e3):n.playText="插件启动失败，请检查插件是否安装！<a href=".concat(i.href,' type="primary" download="视频插件.exe" style=\'color:#4194fc\'>下载地址</a>')},cbConnectClose:function(t){n.oWebControl=null}})},handleClose:function(){this.oWebControl&&(this.oWebControl.JS_RequestInterface({funcName:"stopAllPreview"}),this.oWebControl.JS_HideWnd(),this.oWebControl.JS_Disconnect().then((function(){}),(function(){})),this.oWebControl=null)},cbIntegrationCallBack:function(t){},previewVideo:function(){var t=this.cameraIndexCode,e=0,i=1,n=0,o=-1;this.oWebControl.JS_RequestInterface({funcName:"startPreview",argument:JSON.stringify({cameraIndexCode:t.trim(),streamMode:e,transMode:i,gpuMode:n,wndId:o})})},multiPreviewVideo:function(){this.oWebControl.JS_RequestInterface({funcName:"startMultiPreviewByCameraIndexCode",argument:JSON.stringify({list:this.list})}).then((function(t){0===t.errorCode&&console.log("预览成功")}))},getPubKey:function(t){var e=this;this.oWebControl.JS_RequestInterface({funcName:"getRSAPubKey",argument:JSON.stringify({keyLength:1024})}).then((function(i){i.responseMsg.data&&(e.pubKey=i.responseMsg.data,t())}))},setEncrypt:function(t){var e=new JSEncrypt;return e.setPublicKey(this.pubKey),e.encrypt(t)},setWndCover:function(){var t=$(window).width(),e=$(window).height(),i=$("#"+this.setting.id).get(0).getBoundingClientRect(),n=i.left<0?Math.abs(i.left):0,o=i.top<0?Math.abs(i.top):0,r=i.right-t>0?Math.round(i.right-t):0,s=i.bottom-e>0?Math.round(i.bottom-e):0;n=n>this.videoWidth?this.videoWidth:n,o=o>this.videoHeight?this.videoHeight:o,r=r>this.videoWidth?this.videoWidth:r,s=s>this.videoHeight?this.videoHeight:s,this.oWebControl.JS_RepairPartWindow(0,0,this.videoWidth+1,this.videoHeight),0!=n&&this.oWebControl.JS_CuttingPartWindow(0,0,n,this.videoHeight),0!=o&&this.oWebControl.JS_CuttingPartWindow(0,0,this.videoWidth+1,o),0!=r&&this.oWebControl.JS_CuttingPartWindow(this.videoWidth-r,0,r,this.videoHeight),0!=s&&this.oWebControl.JS_CuttingPartWindow(0,this.videoHeight-s,this.videoWidth,s)}},destroyed:function(){this.destroyWnd()},watch:{screenWidth:function(t,e){this.videoWidth=document.documentElement.clientWidth-450,this.videoHeight=document.documentElement.clientHeight-200,this.oWebControl.JS_Resize(this.videoWidth,this.videoHeight),this.resizewindow(t,this.screenHeight),this.setWndCover()},screenHeight:function(t,e){this.videoWidth=document.documentElement.clientWidth-450,this.videoHeight=document.documentElement.clientHeight-200,this.oWebControl.JS_Resize(this.videoWidth,this.videoHeight),this.resizewindow(this.screenWidth,t),this.setWndCover()}}}),s=r,d=(i("a847"),i("2877")),c=Object(d["a"])(s,n,o,!1,null,"badcfd60",null);e["default"]=c.exports}}]);