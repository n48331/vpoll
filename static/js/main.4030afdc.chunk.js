(this.webpackJsonpvpoll=this.webpackJsonpvpoll||[]).push([[0],{141:function(e,t,a){},145:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(31),l=a.n(s),r=(a(96),a(29)),o=a.n(r),i=a(38),d=a(10),j=a(32),b=a.n(j),u=a(157),p=a(87),O=a(155),h=a(156),x=a(147),g=a(148),m=a(59),v=a.n(m),f=a(149),k=a(60),y=a.n(k),w=(a(85),a(1)),N=function(e){var t=Object(n.useState)(""),a=Object(d.a)(t,2),c=a[0],s=a[1],l=function(e){var t=e.target.id;b.a.patch("voters-details/".concat(t,"/"),{polled:e.target.checked})};return Object(w.jsx)("div",{children:Object(w.jsxs)("div",{className:"row",children:[Object(w.jsx)("style",{children:"body { background-color: \t#76def6; }"}),Object(w.jsxs)("div",{className:"col-md-12",children:[Object(w.jsx)(u.a,{className:"mb-3",material:!0,children:Object(w.jsx)(p.a,{className:"btn-dark p-2 mr2","aria-label":"Default","aria-describedby":"inputGroup-sizing-default",placeholder:"search here....",value:c,onChange:function(e){s(e.target.value)}})}),Object(w.jsx)(O.a,{style:{color:"red"},children:e.notList?e.notList.filter((function(e){return(e.name+e.house+e.sl).toUpperCase().indexOf(c.toUpperCase())>-1})).map((function(t){return Object(w.jsx)(h.a,{children:Object(w.jsxs)(O.a.Item,{eventKey:t.id,children:[Object(w.jsx)(h.a.Header,{style:{background:t.polled?"#3eaca8":"#f67280"},children:Object(w.jsxs)(O.a.Header,{style:{textDecorationLine:t.polled?"line-through":"",color:t.polled?"#000000":"#ec1c4b"},children:[Object(w.jsx)("span",{style:{background:t.polled?"#2f9395":"#ec1c4b"},className:"btn-dark p-2",children:t.sl}),Object(w.jsxs)("b",{children:[" ",Object(w.jsxs)("span",{className:"text-uppercase",children:["\xa0 \xa0 ",t.name]})," "]}),Object(w.jsxs)("span",{children:[": ",t.house]})]})}),e.loggedNopoll?Object(w.jsxs)(O.a.Body,{children:["Polled:",Object(w.jsx)(y.a,{id:String(t.id),checked:t.polled,onChange:l})]}):Object(w.jsx)("div",{})]})})})):Object(w.jsxs)(x.a,{variant:"primary",disabled:!0,children:[Object(w.jsx)(g.a,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"}),"Loading..."]})})]}),Object(w.jsx)(v.a,{showOnScrollUp:!0,showAt:100,speed:1500,easing:"easeInOutQuint",children:Object(w.jsx)(f.a,{})})]})})},C=a(18),S=a(88),L=a(9);C.e.register(C.d,C.i,C.b,C.n,C.o,C.g);var I={responsive:!0,plugins:{legend:{position:"top"},title:{display:!0,text:"Polling status"}}};function P(e){var t=Object(L.f)(),a={labels:["Status"],datasets:[{label:"Polled",data:[e.polled],backgroundColor:"rgba(53, 162, 235, 0.5)"},{label:"Not Polled",data:[e.allCount-e.polled],backgroundColor:"rgba(255, 99, 132, 0.5)"}]};return Object(w.jsxs)("div",{children:[Object(w.jsx)(S.a,{options:I,data:a}),Object(w.jsxs)(h.a,{children:[Object(w.jsx)(h.a.Header,{children:"Remaining to be Polled"}),Object(w.jsxs)(h.a.Body,{children:[Object(w.jsx)(h.a.Title,{children:e.allCount-e.polled}),Object(w.jsx)(x.a,{onClick:function(){t("/vpoll/notpolled")},variant:"primary",children:"View"})]})]})]})}var H=a(150),U=function(e){var t=Object(n.useState)(""),a=Object(d.a)(t,2),c=a[0],s=a[1],l=function(e){var t=e.target.id;b.a.patch("voters-details/".concat(t,"/"),{polled:e.target.checked})};return Object(w.jsx)("div",{children:Object(w.jsxs)("div",{className:"row",children:[Object(w.jsx)("style",{children:"body { background-color: #76def6; }"}),Object(w.jsxs)("div",{className:"col-md-12",children:[Object(w.jsx)(H.a,{variant:"custom",animated:!0,now:e.polled,label:e.polled,max:e.allCountHome,style:{background:"#ec1c4b"}}),Object(w.jsx)(u.a,{className:"mb-3",material:!0,children:Object(w.jsx)(p.a,{className:"btn-dark p-2 mr2","aria-label":"Default","aria-describedby":"inputGroup-sizing-default",placeholder:"search here....",value:c,onChange:function(e){s(e.target.value)}})}),Object(w.jsx)(O.a,{style:{color:"red"},children:e.list?e.list.filter((function(e){return(e.name+e.house+e.sl).toUpperCase().indexOf(c.toUpperCase())>-1})).map((function(t){return Object(w.jsx)(h.a,{children:Object(w.jsxs)(O.a.Item,{eventKey:t.id,children:[Object(w.jsx)(h.a.Header,{style:{background:t.polled?"#3eaca8":"#f67280"},children:Object(w.jsxs)(O.a.Header,{style:{textDecorationLine:t.polled?"line-through":"",color:t.polled?"#000000":"#ec1c4b"},children:[Object(w.jsx)("span",{style:{background:t.polled?"#2f9395":"#ec1c4b"},className:"btn-dark p-2",children:t.sl}),Object(w.jsxs)("b",{children:[" ",Object(w.jsxs)("span",{className:"text-uppercase",children:["\xa0 \xa0 ",t.name]})," "]}),Object(w.jsxs)("span",{children:[": ",t.house]})]})}),e.loggedHome?Object(w.jsxs)(O.a.Body,{children:["Polled:",Object(w.jsx)(y.a,{id:String(t.id),checked:t.polled,onChange:l})]}):Object(w.jsx)("div",{})]})})})):Object(w.jsxs)(x.a,{variant:"primary",disabled:!0,children:[Object(w.jsx)(g.a,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"}),"Loading..."]})})]}),Object(w.jsx)(v.a,{showOnScrollUp:!0,showAt:100,speed:1500,easing:"easeInOutQuint",children:Object(w.jsx)(f.a,{})})]})})},B=(a(141),a(154)),D=a(89);function F(e){var t=Object(n.useState)(""),a=Object(d.a)(t,2),c=a[0],s=a[1],l=Object(n.useState)(""),r=Object(d.a)(l,2),j=r[0],u=r[1],p=Object(L.f)();function O(){return(O=Object(i.a)(o.a.mark((function t(a){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n={username:c,password:j},t.next=4,b.a.post("/vpolllogin/",n).then((function(t){localStorage.setItem("token",t.data.token),p("/vpoll/home"),e.setLogged()})).catch((function(e){console.log(e)}));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(w.jsx)("div",{children:Object(w.jsxs)(B.a,{onSubmit:function(e){return O.apply(this,arguments)},children:[Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(D.a,{controlId:"floatingInput",label:"Username",className:"mb-3",children:Object(w.jsx)(B.a.Control,{type:"text",placeholder:"name",onChange:function(e){s(e.target.value)}})}),Object(w.jsx)(D.a,{controlId:"floatingPassword",label:"Password",children:Object(w.jsx)(B.a.Control,{type:"password",placeholder:"Password",onChange:function(e){u(e.target.value)}})})]}),Object(w.jsx)("br",{}),Object(w.jsx)(x.a,{variant:"primary",type:"submit",children:"Submit"})]})})}var z=a(152),E=a(151),T=a(153),A=a(34);var G=function(e){var t=function(){var t=Object(i.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:localStorage.removeItem("token"),e.setLogged();case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(w.jsx)(z.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",sticky:"top",className:"uvs-bottom",children:Object(w.jsxs)(E.a,{children:[Object(w.jsx)(A.b,{className:"nav-link",to:"/home",children:Object(w.jsx)(z.a.Brand,{children:" V-POLL"})}),Object(w.jsx)(z.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(w.jsx)(z.a.Collapse,{id:"responsive-navbar-nav",children:Object(w.jsxs)(T.a,{className:"me-auto",children:[Object(w.jsx)(A.b,{className:"nav-link",to:"/home",children:"Home"}),Object(w.jsx)(A.b,{className:"nav-link",to:"/notpolled",children:"Not Polled"}),Object(w.jsx)(A.b,{className:"nav-link",to:"/stats",children:"Stats"}),e.logged?Object(w.jsx)(A.b,{className:"nav-link",to:"/login",onClick:t,children:"logout"}):Object(w.jsx)(A.b,{className:"nav-link",to:"/login",children:"login"})]})})]})})};b.a.defaults.baseURL="https://vpollapi.pythonanywhere.com/api/";var J=function(){var e=Object(n.useState)(),t=Object(d.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(),l=Object(d.a)(s,2),r=l[0],j=l[1],u=Object(n.useState)(0),p=Object(d.a)(u,2),O=p[0],h=p[1],x=Object(n.useState)(0),g=Object(d.a)(x,2),m=g[0],v=g[1],f=Object(n.useState)(),k=Object(d.a)(f,2),y=k[0],C=k[1],S=Object(n.useState)(),I=Object(d.a)(S,2),H=I[0],B=I[1];return Object(n.useEffect)((function(){Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=setInterval((function(){b.a.get("voters-list/").then((function(e){var t=e.data;C(t);var a=t.filter((function(e){return!0===e.polled})),n=t.filter((function(e){return!1===e.polled}));h(a.length),v(e.data.length),B(n)})).catch((function(e){console.log("Error")}))}),5e3),e.abrupt("return",(function(){return clearInterval(t)}));case 2:case"end":return e.stop()}}),e)})))()}),[]),Object(n.useEffect)((function(){Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c(localStorage.getItem("token")),j(!!a);case 2:case"end":return e.stop()}}),e)})))()})),Object(w.jsx)("div",{className:"container-fluid",children:Object(w.jsxs)(A.a,{children:[Object(w.jsx)(G,{logged:r,setLogged:j}),Object(w.jsxs)(L.c,{children:[Object(w.jsx)(L.a,{}),Object(w.jsx)(L.a,{path:"/vpoll/",element:Object(w.jsx)(F,{})}),Object(w.jsx)(L.a,{path:"/vpoll/home",element:Object(w.jsx)(U,{token:a,list:y,polled:O,allCountHome:m,loggedHome:r})}),Object(w.jsx)(L.a,{path:"/vpoll/notpolled",element:Object(w.jsx)(N,{notList:H,loggedNopoll:r})}),Object(w.jsx)(L.a,{exact:!0,path:"/vpoll/stats",element:Object(w.jsx)(P,{polled:O,allCount:m})}),Object(w.jsx)(L.a,{exact:!0,path:"/vpoll/login",element:Object(w.jsx)(F,{setLogged:j})})]})]})})},K=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,158)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,l=t.getTTFB;a(e),n(e),c(e),s(e),l(e)}))};l.a.render(Object(w.jsx)(c.a.StrictMode,{children:Object(w.jsx)(J,{})}),document.getElementById("root")),K()},96:function(e,t,a){}},[[145,1,2]]]);
//# sourceMappingURL=main.4030afdc.chunk.js.map