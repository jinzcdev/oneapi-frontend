"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[211],{68426:function(z,g,a){a.r(g);var T=a(97857),o=a.n(T),P=a(15009),i=a.n(P),O=a(99289),p=a.n(O),c=a(5574),v=a.n(c),u=a(67294),y=a(17252),l=a(11774),M=a(3708),d=a(45360),D=a(85893),f=function(){var m=(0,u.useState)([]),b=v()(m,2),h=b[0],R=b[1],j=(0,u.useState)(!0),U=v()(j,2),I=U[0],S=U[1],E=function(){var n=p()(i()().mark(function _(){var t,e;return i()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,(0,M.Jb)();case 2:if(t=s.sent,s.prev=3,!(t.code===200&&t.data)){s.next=7;break}return e=t.data.map(function(C){return{type:C.name,value:C.totalNum}}),s.abrupt("return",e);case 7:s.next=12;break;case 9:s.prev=9,s.t0=s.catch(3),d.ZP.error("\u8BF7\u6C42\u5931\u8D25\uFF01");case 12:return s.abrupt("return",void 0);case 13:case"end":return s.stop()}},_,null,[[3,9]])}));return function(){return n.apply(this,arguments)}}();(0,u.useEffect)(function(){E().then(function(n){R(n!=null?n:[]),S(!1)})},[]);var r={appendPadding:10,data:h,angleField:"value",colorField:"type",radius:.75,label:{type:"spider",labelHeight:28,content:`{name}
{percentage}`},interactions:[{type:"element-selected"},{type:"element-active"}]};return(0,D.jsx)(l._z,{title:"\u63A5\u53E3\u8C03\u7528\u7EDF\u8BA1",loading:I,children:(0,D.jsx)(y.Z,o()({},r))})};g.default=f},3708:function(z,g,a){a.d(g,{Jb:function(){return U},KK:function(){return b},nd:function(){return v}});var T=a(15009),o=a.n(T),P=a(97857),i=a.n(P),O=a(99289),p=a.n(O),c=a(35312);function v(r,n){return u.apply(this,arguments)}function u(){return u=p()(o()().mark(function r(n,_){return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.request)("/api/userInterfaceInfo/add",i()({method:"POST",headers:{"Content-Type":"application/json"},data:n},_||{})));case 1:case"end":return e.stop()}},r)})),u.apply(this,arguments)}function y(r,n){return l.apply(this,arguments)}function l(){return l=_asyncToGenerator(_regeneratorRuntime().mark(function r(n,_){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("/api/userInterfaceInfo/delete",_objectSpread({method:"POST",headers:{"Content-Type":"application/json"},data:n},_||{})));case 1:case"end":return e.stop()}},r)})),l.apply(this,arguments)}function M(r,n){return d.apply(this,arguments)}function d(){return d=_asyncToGenerator(_regeneratorRuntime().mark(function r(n,_){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("/api/userInterfaceInfo/get",_objectSpread({method:"GET",params:_objectSpread({},n)},_||{})));case 1:case"end":return e.stop()}},r)})),d.apply(this,arguments)}function D(r,n){return f.apply(this,arguments)}function f(){return f=_asyncToGenerator(_regeneratorRuntime().mark(function r(n,_){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("/api/userInterfaceInfo/list",_objectSpread({method:"GET",params:_objectSpread({},n)},_||{})));case 1:case"end":return e.stop()}},r)})),f.apply(this,arguments)}function B(r,n){return m.apply(this,arguments)}function m(){return m=_asyncToGenerator(_regeneratorRuntime().mark(function r(n,_){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("/api/userInterfaceInfo/list/page",_objectSpread({method:"GET",params:_objectSpread({},n)},_||{})));case 1:case"end":return e.stop()}},r)})),m.apply(this,arguments)}function b(r,n){return h.apply(this,arguments)}function h(){return h=p()(o()().mark(function r(n,_){return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.request)("/api/userInterfaceInfo/recharge",i()({method:"POST",headers:{"Content-Type":"application/json"},data:n},_||{})));case 1:case"end":return e.stop()}},r)})),h.apply(this,arguments)}function R(r){return j.apply(this,arguments)}function j(){return j=_asyncToGenerator(_regeneratorRuntime().mark(function r(n){return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("/api/userInterfaceInfo/selfInterfaceData",_objectSpread({method:"GET"},n||{})));case 1:case"end":return t.stop()}},r)})),j.apply(this,arguments)}function U(r){return I.apply(this,arguments)}function I(){return I=p()(o()().mark(function r(n){return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,c.request)("/api/userInterfaceInfo/statistics",i()({method:"GET"},n||{})));case 1:case"end":return t.stop()}},r)})),I.apply(this,arguments)}function S(r,n){return E.apply(this,arguments)}function E(){return E=_asyncToGenerator(_regeneratorRuntime().mark(function r(n,_){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("/api/userInterfaceInfo/update",_objectSpread({method:"POST",headers:{"Content-Type":"application/json"},data:n},_||{})));case 1:case"end":return e.stop()}},r)})),E.apply(this,arguments)}}}]);