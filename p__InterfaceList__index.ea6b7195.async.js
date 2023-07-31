"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[447],{31602:function(X,M,r){r.r(M);var B=r(15009),t=r.n(B),w=r(99289),c=r.n(w),A=r(5574),d=r.n(A),f=r(33302),z=r(3708),T=r(11774),W=r(6499),I=r(35312),S=r(45360),j=r(71577),$=r(97183),E=r(33076),x=r(84321),m=r(67294),g=r(85893),P={textAlign:"center",height:"64px",paddingInline:"30%",lineHeight:"64px",color:"#fff",background:"#fcfcfc"},V={minHeight:120,lineHeight:"120px"},O=function(){var U=(0,m.useState)(!1),G=d()(U,2),y=G[0],s=G[1],_=(0,m.useState)([]),o=d()(_,2),i=o[0],e=o[1],a=(0,m.useState)(0),u=d()(a,2),p=u[0],n=u[1],Q=(0,m.useRef)(),q=(0,I.useModel)("@@initialState"),k=q.initialState,Z=function(){var L=c()(t()().mark(function b(){var v,K,C,D,h=arguments;return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return v=h.length>0&&h[0]!==void 0?h[0]:"",K=h.length>1&&h[1]!==void 0?h[1]:1,C=h.length>2&&h[2]!==void 0?h[2]:10,s(!0),l.prev=4,D={current:K,pageSize:C},v&&Object.assign(D,{name:v,description:v}),l.next=9,(0,f.YV)(D).then(function(R){var Y,H,N,J;e((Y=R==null||(H=R.data)===null||H===void 0?void 0:H.records)!==null&&Y!==void 0?Y:[]),n((N=R==null||(J=R.data)===null||J===void 0?void 0:J.total)!==null&&N!==void 0?N:0)});case 9:l.next=14;break;case 11:l.prev=11,l.t0=l.catch(4),S.ZP.error("\u8BF7\u6C42\u5931\u8D25\uFF0C"+l.t0.message);case 14:s(!1);case 15:case"end":return l.stop()}},b,null,[[4,11]])}));return function(){return L.apply(this,arguments)}}(),ee=[{title:"ID",dataIndex:"id",valueType:"index",align:"center"},{title:"\u63A5\u53E3\u540D\u79F0",dataIndex:"name",valueType:"text",align:"center"},{title:"\u63CF\u8FF0",dataIndex:"description",valueType:"textarea",align:"center"},{title:"\u8BF7\u6C42\u65B9\u6CD5",dataIndex:"method",valueType:"text",align:"center"},{title:"\u72B6\u6001",dataIndex:"status",hideInForm:!0,valueEnum:{0:{text:"\u5173\u95ED",status:"Default"},1:{text:"\u5F00\u542F",status:"Processing"}},align:"center"},{title:"\u53D1\u5E03\u65F6\u95F4",dataIndex:"createTime",valueType:"dateTime",align:"center"},{title:"\u64CD\u4F5C",dataIndex:"option",valueType:"option",render:function(b,v){return v.isOwnerByCurrentUser?(0,g.jsx)(j.ZP,{type:"primary",onClick:function(){I.history.push("/interface-info/".concat(v.id))},children:"\u5728\u7EBF\u8C03\u7528"},"onlineUse"):(0,g.jsx)(j.ZP,{onClick:c()(t()().mark(function K(){var C,D,h;return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return D=k==null||(C=k.currentUser)===null||C===void 0?void 0:C.id,D||S.ZP.success("\u8BF7\u91CD\u65B0\u767B\u5F55"),l.next=4,(0,z.nd)({interfaceInfoId:v.id,userId:D});case 4:if(h=l.sent,h.code!==200){l.next=11;break}return S.ZP.success("\u7533\u8BF7\u6210\u529F"),l.next=9,Z();case 9:l.next=12;break;case 11:S.ZP.error(h.message);case 12:case"end":return l.stop()}},K)})),children:"\u5F00\u901A\u63A5\u53E3"},"applyInterface")}}];(0,m.useEffect)(function(){Z()},[]);var ne=function(b){Z(b)};return(0,g.jsx)(T._z,{children:(0,g.jsxs)($.Z,{children:[(0,g.jsx)(x.h4,{style:P,children:(0,g.jsx)(E.Z,{size:"large",placeholder:"\u8BF7\u8F93\u5165\u63A5\u53E3\u540D\u79F0\u6216\u63CF\u8FF0",onSearch:ne,enterButton:!0})}),(0,g.jsx)(x.VY,{style:V,children:(0,g.jsx)(W.Z,{rowKey:"id",toolBarRender:!1,columns:ee,dataSource:i,loading:y,actionRef:Q,pagination:{showTotal:function(b){return"\u603B\u6570\uFF1A"+b},total:p,pageSize:10,onChange:function(b,v){Z("",b,v)}},search:!1})})]})})};M.default=O},33302:function(X,M,r){r.d(M,{GE:function(){return F},Lu:function(){return g},P6:function(){return G},T5:function(){return S},T7:function(){return o},XG:function(){return W},Y4:function(){return z},YV:function(){return V},sx:function(){return s},x4:function(){return $}});var B=r(15009),t=r.n(B),w=r(97857),c=r.n(w),A=r(99289),d=r.n(A),f=r(35312);function z(e,a){return T.apply(this,arguments)}function T(){return T=d()(t()().mark(function e(a,u){return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,f.request)("/api/interfaceInfo/add",c()({method:"POST",headers:{"Content-Type":"application/json"},data:a},u||{})));case 1:case"end":return n.stop()}},e)})),T.apply(this,arguments)}function W(e,a){return I.apply(this,arguments)}function I(){return I=d()(t()().mark(function e(a,u){return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,f.request)("/api/interfaceInfo/delete",c()({method:"POST",headers:{"Content-Type":"application/json"},data:a},u||{})));case 1:case"end":return n.stop()}},e)})),I.apply(this,arguments)}function S(e,a){return j.apply(this,arguments)}function j(){return j=d()(t()().mark(function e(a,u){return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,f.request)("/api/interfaceInfo/disable",c()({method:"POST",headers:{"Content-Type":"application/json"},data:a},u||{})));case 1:case"end":return n.stop()}},e)})),j.apply(this,arguments)}function $(e,a){return E.apply(this,arguments)}function E(){return E=d()(t()().mark(function e(a,u){return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,f.request)("/api/interfaceInfo/get/vo",c()({method:"GET",params:c()({},a)},u||{})));case 1:case"end":return n.stop()}},e)})),E.apply(this,arguments)}function x(e){return m.apply(this,arguments)}function m(){return m=_asyncToGenerator(_regeneratorRuntime().mark(function e(a){return _regeneratorRuntime().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",request("/api/interfaceInfo/interfaceNameList",_objectSpread({method:"GET"},a||{})));case 1:case"end":return p.stop()}},e)})),m.apply(this,arguments)}function g(e,a){return P.apply(this,arguments)}function P(){return P=d()(t()().mark(function e(a,u){return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,f.request)("/api/interfaceInfo/invoke",c()({method:"POST",headers:{"Content-Type":"application/json"},data:a},u||{})));case 1:case"end":return n.stop()}},e)})),P.apply(this,arguments)}function V(e,a){return O.apply(this,arguments)}function O(){return O=d()(t()().mark(function e(a,u){return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,f.request)("/api/interfaceInfo/list/page/vo",c()({method:"POST",headers:{"Content-Type":"application/json"},data:a},u||{})));case 1:case"end":return n.stop()}},e)})),O.apply(this,arguments)}function F(e){return U.apply(this,arguments)}function U(){return U=d()(t()().mark(function e(a){return t()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",(0,f.request)("/api/interfaceInfo/list/vo",c()({method:"GET"},a||{})));case 1:case"end":return p.stop()}},e)})),U.apply(this,arguments)}function G(e,a){return y.apply(this,arguments)}function y(){return y=d()(t()().mark(function e(a,u){return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,f.request)("/api/interfaceInfo/my/list/page/vo",c()({method:"POST",headers:{"Content-Type":"application/json"},data:a},u||{})));case 1:case"end":return n.stop()}},e)})),y.apply(this,arguments)}function s(e,a){return _.apply(this,arguments)}function _(){return _=d()(t()().mark(function e(a,u){return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,f.request)("/api/interfaceInfo/publish",c()({method:"POST",headers:{"Content-Type":"application/json"},data:a},u||{})));case 1:case"end":return n.stop()}},e)})),_.apply(this,arguments)}function o(e,a){return i.apply(this,arguments)}function i(){return i=d()(t()().mark(function e(a,u){return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,f.request)("/api/interfaceInfo/update",c()({method:"POST",headers:{"Content-Type":"application/json"},data:a},u||{})));case 1:case"end":return n.stop()}},e)})),i.apply(this,arguments)}},3708:function(X,M,r){r.d(M,{Jb:function(){return F},KK:function(){return g},nd:function(){return z}});var B=r(15009),t=r.n(B),w=r(97857),c=r.n(w),A=r(99289),d=r.n(A),f=r(35312);function z(s,_){return T.apply(this,arguments)}function T(){return T=d()(t()().mark(function s(_,o){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,f.request)("/api/userInterfaceInfo/add",c()({method:"POST",headers:{"Content-Type":"application/json"},data:_},o||{})));case 1:case"end":return e.stop()}},s)})),T.apply(this,arguments)}function W(s,_){return I.apply(this,arguments)}function I(){return I=_asyncToGenerator(_regeneratorRuntime().mark(function s(_,o){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("/api/userInterfaceInfo/delete",_objectSpread({method:"POST",headers:{"Content-Type":"application/json"},data:_},o||{})));case 1:case"end":return e.stop()}},s)})),I.apply(this,arguments)}function S(s,_){return j.apply(this,arguments)}function j(){return j=_asyncToGenerator(_regeneratorRuntime().mark(function s(_,o){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("/api/userInterfaceInfo/get",_objectSpread({method:"GET",params:_objectSpread({},_)},o||{})));case 1:case"end":return e.stop()}},s)})),j.apply(this,arguments)}function $(s,_){return E.apply(this,arguments)}function E(){return E=_asyncToGenerator(_regeneratorRuntime().mark(function s(_,o){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("/api/userInterfaceInfo/list",_objectSpread({method:"GET",params:_objectSpread({},_)},o||{})));case 1:case"end":return e.stop()}},s)})),E.apply(this,arguments)}function x(s,_){return m.apply(this,arguments)}function m(){return m=_asyncToGenerator(_regeneratorRuntime().mark(function s(_,o){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("/api/userInterfaceInfo/list/page",_objectSpread({method:"GET",params:_objectSpread({},_)},o||{})));case 1:case"end":return e.stop()}},s)})),m.apply(this,arguments)}function g(s,_){return P.apply(this,arguments)}function P(){return P=d()(t()().mark(function s(_,o){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,f.request)("/api/userInterfaceInfo/recharge",c()({method:"POST",headers:{"Content-Type":"application/json"},data:_},o||{})));case 1:case"end":return e.stop()}},s)})),P.apply(this,arguments)}function V(s){return O.apply(this,arguments)}function O(){return O=_asyncToGenerator(_regeneratorRuntime().mark(function s(_){return _regeneratorRuntime().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",request("/api/userInterfaceInfo/selfInterfaceData",_objectSpread({method:"GET"},_||{})));case 1:case"end":return i.stop()}},s)})),O.apply(this,arguments)}function F(s){return U.apply(this,arguments)}function U(){return U=d()(t()().mark(function s(_){return t()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,f.request)("/api/userInterfaceInfo/statistics",c()({method:"GET"},_||{})));case 1:case"end":return i.stop()}},s)})),U.apply(this,arguments)}function G(s,_){return y.apply(this,arguments)}function y(){return y=_asyncToGenerator(_regeneratorRuntime().mark(function s(_,o){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("/api/userInterfaceInfo/update",_objectSpread({method:"POST",headers:{"Content-Type":"application/json"},data:_},o||{})));case 1:case"end":return e.stop()}},s)})),y.apply(this,arguments)}}}]);
