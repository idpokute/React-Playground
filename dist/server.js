!function(e){var r={};function t(n){if(r[n])return r[n].exports;var c=r[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,t),c.l=!0,c.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var c in e)t.d(n,c,function(r){return e[r]}.bind(null,c));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="/",t(t.s=13)}([function(e,r){e.exports=require("react/jsx-runtime")},function(e,r){e.exports=require("react")},function(e,r){e.exports=require("react-router-dom")},function(e,r,t){e.exports=t(12)},function(e,r){e.exports=require("redux")},function(e,r){e.exports=require("react-redux")},function(e,r){e.exports=require("react-dom/server")},function(e,r){e.exports=require("express")},function(e,r){e.exports=require("path")},function(e,r){e.exports=require("axios")},function(e,r){e.exports=require("fs")},function(e,r){e.exports=require("redux-thunk")},function(e,r){e.exports=require("regenerator-runtime")},function(e,r,t){"use strict";t.r(r);var n=t(3),c=t.n(n);function o(e,r,t,n,c,o,s){try{var u=e[o](s),i=u.value}catch(e){return void t(e)}u.done?r(i):Promise.resolve(i).then(n,c)}function s(e){return function(){var r=this,t=arguments;return new Promise((function(n,c){var s=e.apply(r,t);function u(e){o(s,n,c,u,i,"next",e)}function i(e){o(s,n,c,u,i,"throw",e)}u(void 0)}))}}var u=t(1),i=t(6),a=t.n(i),l=t(7),p=t.n(l),d=t(2),f=t(0);function j(){return Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:Object(f.jsx)(d.Link,{to:"/red",children:"Red"})}),Object(f.jsx)("li",{children:Object(f.jsx)(d.Link,{to:"/blue",children:"Blue"})}),Object(f.jsx)("li",{children:Object(f.jsx)(d.Link,{to:"/users",children:"Users"})})]})}function b(){return Object(f.jsx)("div",{className:"Red",children:"Red"})}function x(){return Object(f.jsx)(b,{})}function O(){return Object(f.jsx)("div",{className:"Blue",children:"Blue"})}function v(){return Object(f.jsx)(O,{})}function h(e){var r=e.users;return r?Object(f.jsx)("div",{children:Object(f.jsx)("ul",{children:r.map((function(e){return Object(f.jsx)("li",{children:Object(f.jsx)(d.Link,{to:"/users/".concat(e.id),children:e.username})},e.id)}))})}):null}var m=t(5);function y(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function g(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function S(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?g(Object(t),!0).forEach((function(r){y(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var E=t(9),P=t.n(E),_=function(e){return{type:"users/GET_USERS_FAILURE",error:!0,payload:e}},w={users:null,user:null,loading:{users:!1,user:!1},error:{users:null,user:null}};var R=Object(u.createContext)(null),U=R,k=function(e){var r=e.resolve,t=Object(u.useContext)(R);return t?(t.done||t.promises.push(Promise.resolve(r())),null):null};console.log("done preloadcontext.js");var T=Object(m.connect)((function(e){return{users:e.users.users}}),{getUsers:function(){return function(){var e=s(c.a.mark((function e(r){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r({type:"users/GET_USERS_PENDING"}),e.next=4,P.a.get("https://jsonplaceholder.typicode.com/users");case 4:t=e.sent,r({type:"users/GET_USERS_SUCCESS",payload:t}),e.next=12;break;case 8:throw e.prev=8,e.t0=e.catch(0),r(_(e.t0)),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}()}})((function(e){var r=e.users,t=e.getUsers;return Object(u.useEffect)((function(){r||t()}),[t,r]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(h,{users:r}),Object(f.jsx)(k,{resolve:t})]})}));function q(){return Object(f.jsx)(T,{})}var D=function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(j,{}),Object(f.jsx)("hr",{}),Object(f.jsx)(d.Route,{path:"/red",component:x}),Object(f.jsx)(d.Route,{path:"/blue",component:v}),Object(f.jsx)(d.Route,{path:"/users",component:q})]})},C=t(8),G=t.n(C),N=t(10),L=t.n(N),A=t(4),M=t(11),F=t.n(M),I=Object(A.combineReducers)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"users/GET_USERS_PENDING":return S(S({},e),{},{loading:S(S({},e.loading),{},{users:!0})});case"users/GET_USERS_SUCCESS":return S(S({},e),{},{loading:S(S({},e.loading),{},{users:!1}),users:r.payload.data});case"users/GET_USERS_FAILURE":return S(S({},e),{},{loading:S(S({},e.loading),{},{users:!1}),error:S(S({},e.error),{},{users:r.payload})});default:return e}}}),B=JSON.parse(L.a.readFileSync(G.a.resolve("./build/asset-manifest.json"),"utf8")),J=Object.keys(B.files).filter((function(e){return/chunk\.js$/.exec(e)})).map((function(e){return'<script src="'.concat(B.files[e],'"><\/script>')})).join("");function Y(e,r){return'\n    <!DOCTYPE html>\n    <html lang="en">\n    <head>\n        <meta charset="UTF-8">\n        <meta http-equiv="X-UA-Compatible" content="IE=edge">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n        <title>React App</title>\n        <link href="'.concat(B.files["main.css"],'" rel="stylesheet" />\n    </head>\n    <body>\n        <noscript>You need to enable js to run this app</noscript>\n        <div id="root">\n            ').concat(e,"\n        </div>\n        ").concat(r,'\n\n        <script src="').concat(B.files["runtime-main.js"],'"><\/script>\n        ').concat(J,'\n        <script src="').concat(B.files["main.js"],'"><\/script>\n    </body>\n    </html>\n    ')}var X=p()(),$=function(){var e=s(c.a.mark((function e(r,t,n){var o,s,u,i,l,p,j;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={},s=Object(A.createStore)(I,Object(A.applyMiddleware)(F.a)),u={done:!1,promises:[]},i=Object(f.jsx)(U.Provider,{value:u,children:Object(f.jsx)(m.Provider,{store:s,children:Object(f.jsx)(d.StaticRouter,{location:r.url,context:o,children:Object(f.jsx)(D,{})})})}),a.a.renderToStaticMarkup(i),e.prev=5,e.next=8,Promise.all(u.promises);case 8:e.next=13;break;case 10:return e.prev=10,e.t0=e.catch(5),e.abrupt("return",t.status(500));case 13:u.done=!0,l=a.a.renderToString(i),p=JSON.stringify(s.getState()).replace(/</g,"\\u003c"),j="<script>__PRELOADED_STATE__ = ".concat(p,"<\/script>"),t.send(Y(l,j));case 18:case"end":return e.stop()}}),e,null,[[5,10]])})));return function(r,t,n){return e.apply(this,arguments)}}(),z=p.a.static(G.a.resolve("./build"),{index:!1});X.use(z),X.use($),X.listen(5e3,(function(){console.log("Running on http://localhost:5000")}))}]);