exports.ids=[3],exports.modules={20:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return o}));var n=r(3),s=r(2),c=r(0);function u(e){var t=e.users;return t?Object(c.jsx)("div",{children:Object(c.jsx)("ul",{children:t.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(s.Link,{to:"/users/".concat(e.id),children:e.username})},e.id)}))})}):null}var i=r(15),j=r(9),b=r(16),a=Object(i.connect)((function(e){return{users:e.users.users}}),{getUsers:j.c})((function(e){var t=e.users,r=e.getUsers;return Object(n.useEffect)((function(){t||r()}),[r,t]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(u,{users:t}),Object(c.jsx)(b.a,{resolve:r})]})}));function d(e){var t=e.user,r=t.email,n=t.name,s=t.username;return Object(c.jsxs)("div",{children:[Object(c.jsxs)("h2",{children:[s,"(",n,")"]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("b",{children:"e-mail:"})," ",r]})]})}var O=function(e){var t=e.id,r=Object(i.useSelector)((function(e){return e.users.user})),s=Object(i.useDispatch)();return Object(b.c)((function(){return s(Object(j.b)(t))})),Object(n.useEffect)((function(){r&&r.id===parseInt(t,10)||s(Object(j.b)(t))}),[s,t,r]),r?Object(c.jsx)(d,{user:r}):null};function o(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(a,{}),Object(c.jsx)(s.Route,{path:"/users/:id",render:function(e){var t=e.match;return Object(c.jsx)(O,{id:t.params.id})}})]})}}};