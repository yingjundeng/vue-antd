!function(S,$,J){"use strict";var j="px",s="0",d="innerHTML",X="className",n=ht.Default,i=ht.Color,y=ht.Node,D="position",k="top",U="left",K=n.animate,B=n.getInternal(),H="width",s="0",a="none",c="max-height",l="font",M="background",N="border-box",Z="user-select",z="box-sizing",E="overflow",v=n.isTouchable,Y=n.isTouchEvent,B=n.getInternal(),g=i.titleIconBackground,q=n.scrollBarInteractiveSize,t=/msie 9/.test(S.navigator?S.navigator.userAgent.toLowerCase():""),T=null,m=function(){return document},h=function(r){return m().createElement(r)},R=function(){return h("div")},f=function(){var o=R(),P=o.style;return P.msTouchAction=a,P.cursor="default",v&&P.setProperty("-webkit-tap-highlight-color","rgba(0, 0, 0, 0)",T),P.position="absolute",P.left=s,P.top=s,o},u=function(){return h("canvas")},x=function(){return document.body},r=function(A,y,m){A.style.setProperty(y,m,T)},b=function(W,p){W.style.removeProperty(p)},F=function(R,Y,G){n.def(ht.widget[R],Y,G)},A=function(K,U){K.appendChild(U)},I=function(p,T){p.removeChild(T)},C=B.addEventListener;B.removeEventListener,B.addMethod(n,{paletteExpandIcon:{width:16,height:16,comps:[{type:"triangle",rect:[4,4,10,8],background:g,rotation:3.14}]},paletteCollapseIcon:{width:16,height:16,comps:[{type:"triangle",rect:[4,4,10,8],background:g}]},paletteTitleLabelColor:n.labelSelectColor,paletteTitleLabelFont:n.labelFont,paletteContentLabelFont:n.labelFont,paletteContentLabelColor:"#777",paletteContentBackground:"#fff",paletteTitleHeight:n.widgetTitleHeight,paletteTitleBackground:i.titleBackground,paletteTitleHoverBackground:i.titleBackground,paletteSeparatorWidth:1,paletteSeparatorColor:J,paletteItemHoverBorderColor:i.highlight,paletteItemSelectBackground:i.highlight},!0);var P=".palette-item:hover{border: 1px solid "+n.paletteItemHoverBorderColor+" !important}"+" .palette-header:hover{background: "+n.paletteTitleHoverBackground+" !important}",L=document.createElement("style");v||(L.styleSheet?L.styleSheet.cssText=P:L.appendChild(m().createTextNode(P))),m().getElementsByTagName("head")[0].appendChild(L);var O=function(X){var c=this;c.$22h=X,c.addListeners()};n.def(O,$,{ms_listener:1,getView:function(){return this.$22h.getView()},$26h:function(){var k=this;k.$36h&&x().removeChild(k.$36h),k.$23h=k.$24h=k.$25h=k.$35h=k.$36h=T},handle_touchstart:function(j){for(var R,N=this,F=N.$22h,A=j.target,g=F.sm(),b=F.dm(),z="palette-header",c="palette-header-tool",T="palette-item",Z=!1,v=!1,H=!1;A&&(A[X]||"").indexOf(z)<0&&(A[X]||"").indexOf(T)<0;)A=A.parentNode;if(A&&A[X].indexOf(c)>=0?Z=!0:A&&A[X].indexOf(z)>=0?H=!0:A&&A[X].indexOf(T)>=0&&(v=!0),n.isLeftButton(j))if(N.$27h(j))N.$24h=n.getClientPoint(j),N.$25h=F.ty();else if(Z){n.preventDefault(j),R=A.parentNode.$11h;var B=b.getDataById(R),y=B.s("tools")[A.toolIndex];y.action&&y.action.call(F)}else if(H){n.preventDefault(j),R=A.$11h;var B=b.getDataById(R);B.isExpanded()?B.setExpanded(!1):B.setExpanded(!0)}else if(v){R=A.$11h;var O=b.getDataById(R);g.ss(O),F.handleDragAndDrop&&(n.preventDefault(j),O.s("draggable")&&(F.handleDragAndDrop(j,"prepare"),N.$35h=0)),O.s("draggable")||(n.preventDefault(j),N.$24h=n.getClientPoint(j),N.$25h=F.ty())}else n.preventDefault(j),N.$24h=n.getClientPoint(j),N.$25h=F.ty();else N.$26h(j)},handle_mousedown:function(X){this.handle_touchstart(X)},handle_mousewheel:function(R){this.handleScroll(R,R.wheelDelta/40,R.wheelDelta!==R.wheelDeltaX)},handle_DOMMouseScroll:function(O){this.handleScroll(O,-O.detail,1)},handleScroll:function(o,O,P){var R=this.$22h;n.preventDefault(o),P&&R._41o()&&R.ty(R.ty()+20*O)},handle_mouseup:function(J){this.handle_touchend(J)},handle_touchend:function(U){var R=this;R.$37h(U),R.$26h(U)},handleWindowMouseUp:function(M){this.handleWindowTouchEnd(M)},handleWindowTouchEnd:function(k){var i=this;i.$37h(k),i.$26h(k)},$37h:function(N){var U=this,$=U.$22h;2===U.$35h&&(U.$35h=3,$.handleDragAndDrop(N,"end"))},handleWindowMouseMove:function(s){this.handleWindowTouchMove(s)},handleWindowTouchMove:function(z){var x=this,T=x.$22h,s=x.$23h,l=x.$24h,K=x.$25h,U=n.getClientPoint(z),f=T._29I,L=x.$36h;if(1===x.$35h||2===x.$35h){if(x.$35h=2,T.handleDragAndDrop(z,"between"),Y(z)){var k=z.touches[0];z=k?k:z.changedTouches[0]}L.style.left=z.pageX-parseInt(L.width)/2+j,L.style.top=z.pageY-parseInt(L.height)/2+j}else"p"===s?T.ty(K+U.y-l.y):"v"===s&&T.ty(K+(l.y-U.y)/f.height*T._59I)},handle_mousemove:function(H){this.handle_touchmove(H)},handle_touchmove:function(y){if(!n.isDragging()&&n.isLeftButton(y)){var Q=this,z=Q.$22h,w=Q.$27h(y);if(Q.$24h){if(!Q.$23h){if(n.getDistance(n.getClientPoint(y),Q.$24h)<2)return;Q.$23h=w?"v":"p",n.startDragging(Q,y)}}else if(w)z._43o();else if(0===Q.$35h){if(Q.$35h=1,z.handleDragAndDrop(y,"begin"),n.startDragging(Q,y),Y(y)){var o=y.touches[0];y=o?o:y.changedTouches[0]}var X=Q.$36h=new Image,u=z.$10h[z.sm().ld().getId()].querySelector(".image-box"),b=parseInt(u.style.width),v=parseInt(u.style.height);X.draggable=!1,X.src=u.toDataURL(),X.width=b,X.height=v,X.style.position="absolute",X.style.left=y.pageX-b/2+j,X.style.top=y.pageY-v/2+j,x().appendChild(X)}}},$27h:function(H){var h=this.$22h,t=h.getView(),k=t.getBoundingClientRect(),Y=h._29I,O=H.clientX-k.left+t.scrollLeft;return h._41o()&&Y.x+Y.width-O<q}}),ht.widget.Palette=function(g){var y=this,b=y._view=B.createView(null,y);y.$9h={},y.$10h={},y.$4h={},y._29I={x:0,y:0,width:0,height:0},y._59I=0,y.dm(g?g:new ht.DataModel),b[X]="ht-widget-palette",y.$29h=new O(y),r(b,M,n.paletteContentBackground),r(b,E,"auto"),r(b,z,N),r(b,"-moz-"+z,N),r(b,"-webkit-"+Z,a),r(b,"-moz-"+Z,a),r(b,"-ms-"+Z,a),r(b,Z,a),r(b,"position","absolute"),r(b,"overflow","hidden"),A(b,y._79O=f()),C(b,"dragstart",function(l){l.dataTransfer&&(l.dataTransfer.setData("Text","nodeid:"+l.target.$11h),l.dataTransfer.effectAllowed="all",y.$29h.$26h())})},F("Palette",$,{ms_v:1,ms_fire:1,ms_dm:1,ms_sm:1,ms_vs:1,ms_bnb:1,ms_ac:["itemImageWidth","itemImageHeight","itemImagePadding","itemMargin","layout","autoHideScrollBar","scrollBarSize","scrollBarColor"],$30h:0,_itemImagePadding:4,_itemImageWidth:70,_itemImageHeight:50,_itemMargin:10,_layout:"largeicons",_autoHideScrollBar:n.autoHideScrollBar,_scrollBarSize:n.scrollBarSize,_scrollBarColor:n.scrollBarColor,getViewRect:function(){return this._29I},ty:function(z){return z==T?this.getTranslateY():(this.setTranslateY(z),void 0)},setTranslateY:function(h){if(this.$32h==T){var C=this,J=C.$33h(h),g=C.$30h;C.$30h=J,C.fp("translateY",g,J)}},getTranslateY:function(){return this.$30h},setLayout:function(S){var $,N,b=this,n=b._layout;b._layout=S,"smallicons"===S?$=N=20:"iconsonly"===S?$=N=50:($=70,N=50),b.setItemImageWidth($),b.setItemImageHeight(N),b.setItemImagePadding(4),b.fp("layout",n,S)},getDataAt:function(k){for(var D=k.target;D&&D.$11h==T;)D=D.parentNode;return D&&D.$11h!=T?this.getDataModel().getDataById(D.$11h):void 0},$20h:function(){var c=16;return v&&(c*=1.2),c},$19h:function(){return n.paletteTitleHeight},$18h:function(){var k=n.paletteSeparatorWidth,i=n.paletteTitleBackground,h=n.paletteSeparatorColor||n.brighter(i);return k+j+" solid "+h},$17h:function(_){r(_,"cursor","pointer"),r(_,"display","inline-block"),r(_,"margin-right",(v?8:4)+j),r(_,"vertical-align",k)},$1h:function(_){var o=this,c=R(),q=R(),S=h("span");c[X]="palette-header",r(c,D,"relative"),r(c,M,n.paletteTitleBackground),r(c,"color",n.paletteTitleLabelColor),r(c,k,s),r(c,z,N),r(c,"-moz-"+z,N),r(c,"padding","0 5px 0 0"),r(c,"border-top",o.$18h()),r(c,H,"100%"),r(c,"cursor","pointer"),r(c,"white-space","nowrap"),r(c,E,"hidden"),r(c,l,n.paletteTitleLabelFont),r(c,"line-height",o.$19h()+j),c.$11h=_.getId();var a=u(),C=o.$19h(),U=o.$20h();o.$17h(a),B.setCanvas(a,U,C),A(c,a);var T=_.s("tools");if(T)for(var P=0;P<T.length;P++){var I=u();o.$17h(I),B.setCanvas(I,U,C),I[X]="palette-header-tool palette-header-tool"+_.getId()+"-"+P,I.style.position="absolute",I.style.right=(U+10)*P+"px",I.toolIndex=P,A(c,I)}return a[X]="palette-toggle-icon-"+_.getId(),q[X]="palette-content",r(q,"max-height",0+j),r(q,l,n.paletteContentLabelFont),r(q,E,"hidden"),q.$11h=_.getId(),o.$9h[_.getId()]=q,S[d]=_.getName(),r(S,l,n.paletteTitleLabelFont),A(c,a),A(c,S),[c,q]},$2h:function(K){var D=this,o=D._layout,E=t&&K.s("draggable")?h("a"):R(),b=u(),q=R(),g=K.getName()||"",y=K.s("title")||K.getToolTip()||g,Y=D._itemMargin;b[X]="image-box";var Q=D.getItemImageWidth(),L=D.getItemImageHeight();return B.setCanvas(b,Q,L),A(E,b),q[d]=g,q[X]="label-box","iconsonly"!==o&&A(E,q),E[X]="palette-item",r(E,"vertical-align",k),r(E,"cursor","pointer"),r(E,"border-radius",5+j),r(E,"border","1px solid transparent"),r(E,"text-align","center"),r(E,"display","inline-block"),r(E,"margin-left",Y+j),r(E,"margin-top",Y+j),r(E,"color",n.paletteContentLabelColor),"smallicons"===o?(r(b,"vertical-align","middle"),r(E,"margin-left",2+j),r(E,"margin-top",2+j),r(E,"padding",2+j),r(E,"text-align",U),r(q,"display","inline-block"),r(q,"min-width",D.$21h+D._itemMargin+j)):"largeicons"===o&&(r(q,"max-width",Q+j),r(q,"overflow","hidden")),E.$11h=K.getId(),y&&(E.title=y),K.s("draggable")&&!D.handleDragAndDrop&&(t?(E.href="#",r(E,"text-decoration",a)):E.draggable="true"),E},$16h:function(C,e,J,K){var E=B.initContext(C);B.translateAndScale(E,0,0,1),E.clearRect(0,0,J,J);var a=(J-K)/2;n.drawStretchImage(E,n.getImage(e),"fill",0,a,K,K),E.restore()},$15h:function(A){var r=this,g=A.getId(),C=r._view.querySelector(".palette-toggle-icon-"+g),X=A.isExpanded()?n.paletteCollapseIcon:n.paletteExpandIcon;if(C&&X){var U=r.$19h(),T=r.$20h();r.$16h(C,X,U,T)}},_drawToolsIcon:function(Z){var C=this,M=Z.s("tools");if(M)for(var f=0;f<M.length;f++){var I=C._view.querySelector(".palette-header-tool"+Z.getId()+"-"+f),Q=M[f].icon,G=C.$19h(),P=C.$20h();C.$16h(I,Q,G,P)}},$14h:function(P){var y=this,l=P.getId(),G=y.$10h[l].querySelector(".image-box"),X=P.getImage(),r=P.s("image.stretch");if(G&&X){var z=B.initContext(G),h=y.getItemImagePadding();h="smallicons"===y._layout?h/2:h;var u=y.getItemImageWidth()-2*h,Q=y.getItemImageHeight()-2*h;B.translateAndScale(z,0,0,1),z.clearRect(0,0,u,Q),n.drawStretchImage(z,n.getImage(X),r,h,h,u,Q,P,y,y.getBodyColor(P)),z.restore()}},validateImpl:function(){var P,Z,R,b=this,F=b.$9h,q=b._layout,U=b.$10h,H=b.$4h,g=b._view,G=b.dm();if(b.$13h&&(delete b.$13h,H={},G.each(function(k){H[k.getId()]=k})),"smallicons"===q)for(var o in H){var f=H[o];if(f instanceof y){var r=f.getName()||"",u=n.getTextSize(n.paletteContentLabelFont,r).width;b.$21h!=T&&b.$21h>u||(b.$21h=u)}}for(var o in H){R=H[o];var w,x;if(G.contains(R)){if(R instanceof ht.Group){var i,M=b.$1h(R),J=U[R.getId()];J&&(i=J.nextSibling,I(g,i),I(g,J)),Z=G.getSiblings(R).indexOf(R);var X=g.children[2*Z]||b._79O;X&&X.parentNode?(g.insertBefore(M[0],X),g.insertBefore(i||M[1],X)):(g.appendChild(M[0]),g.appendChild(i||M[1])),U[R.getId()]=M[0],P=F[R.getId()]=i||M[1],x=R.$12h;var S=R.s("promptText");x||(R.$12h=h("div"),R.$12h[d]=S||"",x=R.$12h),0===R.getChildren().size()?P.contains(x)||A(P,x):P.contains(x)&&I(P,x)}else if(w=R.getParent()){var t=b.$2h(R),k=U[R.getId()];P=F[w.getId()],k&&I(k.parentNode,k),Z=G.getSiblings(R).indexOf(R);var p=P.children[Z];p?P.insertBefore(t,p):A(P,t),U[R.getId()]=t,b.$14h(R)}}else{var Q=U[R.getId()],l=Q.parentNode;if(R instanceof ht.Group){var Y=Q.nextSibling;I(g,Q),I(g,Y),delete F[R.getId()]}else I(l,Q),0===l.children.length&&(w=G.getDataById(l.$11h),w&&(x=w.$12h,x&&!l.contains(x)&&A(l,x)));delete U[R.getId()]}}b.$4h={};var a=function(){var Q=b._59I,o=0;b.$32h!=T&&(clearInterval(b.$32h),o=0,delete b.$32h),b.$32h=setInterval(function(){b.$31h(),Q===b._59I?(o++,o>=2&&(clearInterval(b.$32h),delete b.$32h)):(o=0,Q=b._59I)},30)};for(var z in F)if(P=F[z],R=G.getDataById(F[z].$11h),b.$15h(R),b._drawToolsIcon(R),R.isExpanded()){if(P.style.maxHeight===0+j){var E=P.scrollHeight+b._itemMargin+j;K(P).duration(200).set(c,E).set("padding-bottom",b._itemMargin+j).end(function(){return function(){a()}}(E))}else P.style.maxHeight=P.scrollHeight+j;P.style.paddingBottom=b._itemMargin+j}else P.style.maxHeight!==0+j&&K(P).duration(200).set(c,s).set("padding-bottom",s).end(function(){return function(){a()}}(P));b.$28h(),b.$31h()},$31h:function(){for(var c=this,s=c._view,K=0,w=s.children,S=0;S<w.length;S++){var B=w[S];B.className&&B.className.indexOf("palette-")>=0&&(K+=B.offsetHeight)}c._59I=K,c.$30h=c.$33h(c.ty());var Y=c.ty();s.scrollTop=-Y,c._29I={x:0,y:-Y,width:s.clientWidth,height:s.clientHeight},r(c._79O,k,-Y+j),c._93I()},$33h:function(O){var X=this,l=X._29I.height-X._59I;return l>O&&(O=l),O>0?0:Math.round(O)},redraw:function(){this.$13h||(this.$13h=1,this.iv())},onPropertyChanged:function(M){["autoHideScrollBar","scrollBarSize","scrollBarColor","translateY"].indexOf(M.property)<0&&this.redraw(),"translateY"===M.property&&(this.iv(),this._43o())},findDataByName:function(D){for(var c=this.dm().getDatas(),z=0;z<c.size();z++){var r=c.get(z);if(r.getName()===D)return r}},setDataModel:function(g){var v=this,r=v._dataModel,a=v._selectionModel;r!==g&&(r&&(r.umm(v.$6h,v),r.umd(v.$8h,v),r.umh(v.$7h,v),a||r.sm().ums(v.$28h,v)),v._dataModel=g,g.mm(v.$6h,v),g.md(v.$8h,v),g.mh(v.$7h,v),a?a._21I(g):g.sm().ms(v.$28h,v),v.sm().setSelectionMode("single"),v.fp("dataModel",r,g))},$6h:function(t){var O=this,e=O._view,c=t.data,F=O.$4h;"add"===t.kind?F[c.getId()]=c:"remove"===t.kind?F[c.getId()]=c:"clear"===t.kind&&(O.$10h={},O.$9h={},O.$4h={},e[d]=""),O.iv()},$7h:function(Z){var V=this,J=Z.data;V.$4h[J.getId()]=J,V.iv()},$8h:function(D){var f=this,P=D.data,u=D.property;"expanded"===u?f.iv():(f.$4h[P.getId()]=P,f.iv())},$28h:function(){var x,R=this,u=R.sm(),c="palette-item",t=u.ld();this.dm().each(function(Z){x=R.$10h[Z.getId()],x&&x[X].indexOf(c)>=0&&(Z===t?r(x,M,n.paletteItemSelectBackground):b(x,M))})}})}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);