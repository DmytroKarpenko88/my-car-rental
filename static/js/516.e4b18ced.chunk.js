"use strict";(self.webpackChunkmy_car_rental=self.webpackChunkmy_car_rental||[]).push([[516],{57:function(e,t,a){a.r(t),a.d(t,{default:function(){return v}});var n=a(165),s=a(861),r=a(439),l=a(510),i=a(942),c=a(413),u=a(791),o=a(441),x=a(184),p={make:"",price:"",mileageMin:"",mileageMax:""},m=function(e){var t=e.allCars,a=e.setFilterCars,n=e.setTotalCars,s=(0,u.useState)(p),l=(0,r.Z)(s,2),m=l[0],d=l[1],h=(0,o.fI)(t),f=(0,o.nx)(t),v=function(e){var t=e.target,a=t.name,n=t.value;d((0,c.Z)((0,c.Z)({},m),{},(0,i.Z)({},a,n)))};return(0,x.jsx)("div",{className:"mx-auto h-[74px]",children:(0,x.jsxs)("form",{className:"flex gap-[18px] text-ls font-medium ",onSubmit:function(e){e.preventDefault();var s=(0,o.ff)(t,m);a(s),n(s.length)},children:[(0,x.jsxs)("div",{className:"",children:[(0,x.jsx)("p",{className:"text-gray-500 text-sl",children:"Car brand"}),(0,x.jsxs)("select",{className:"mt-2 py-[14px] px-[18px] w-56 rounded-[14px]  text-ls truncate",name:"make",id:"make",value:m.make,onChange:v,children:[(0,x.jsx)("option",{value:"",disabled:!0,children:"Enter the text"}),h.map((function(e,t){return(0,x.jsx)("option",{value:e,children:e},t)}))]})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("p",{className:"text-gray-500 text-sl",children:"Price/ 1 hour"}),(0,x.jsxs)("div",{className:"relative",children:[(0,x.jsxs)("select",{className:"mt-2 py-[14px] px-[18px] w-[125px] rounded-[14px]  text-ls truncate",name:"price",id:"price",value:m.price,onChange:v,children:[(0,x.jsx)("option",{value:"",disabled:!0,children:"To $"}),f.map((function(e,t){return(0,x.jsx)("option",{value:e,className:"",children:e},t)}))]}),(0,x.jsx)("span",{className:"absolute top-6 left-3 hidden",children:m.price?"To ".concat(m.price," $"):""})]})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("p",{className:"text-gray-500 text-sl",children:"Car mileage / km"}),(0,x.jsxs)("div",{className:"flex",children:[(0,x.jsxs)("div",{className:"relative mt-2",children:[(0,x.jsx)("label",{className:"absolute top-[14px] left-6",children:"From "}),(0,x.jsx)("input",{className:"w-[168px]  py-[14px] pl-[70px] pr-6 rounded-[14px] truncate",type:"text",name:"mileageMin",maxLength:7,value:(0,o.uf)(m.mileageMin),onChange:v})]}),(0,x.jsxs)("div",{className:"relative mt-2",children:[(0,x.jsx)("label",{className:"absolute top-[14px] left-6",children:"To"}),(0,x.jsx)("input",{className:"w-[168px]  py-[14px] pl-[50px] pr-6 rounded-[14px] truncate",type:"text",name:"mileageMax",maxLength:7,value:(0,o.uf)(m.mileageMax),onChange:v})]})]})]}),(0,x.jsx)("button",{type:"submit",className:"bg-blue-500 mt-auto h-12  rounded-xl px-11 py-[14px] hover:bg-indigo-500 text-white font-semibold text-sm",children:"Search"}),(0,x.jsx)("button",{type:"button",onClick:function(e){d(p),a(t),n(t.length)},className:"bg-blue-500 mt-auto h-12 rounded-xl px-11 py-[14px]  hover:bg-indigo-500 text-white font-semibold text-sm",children:"Reset"})]})})},d=a(243),h=a(686);d.Z.defaults.baseURL="https://6504a775c8869921ae254d5c.mockapi.io";var f=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(){var t,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={},e.prev=1,e.next=4,d.Z.get("/cars",t);case 4:return a=e.sent,e.abrupt("return",a.data);case 8:e.prev=8,e.t0=e.catch(1),h.Notify.failure(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),v=function(e){var t=e.favorites,a=e.toggleFavorite,i=(0,u.useState)([]),c=(0,r.Z)(i,2),o=c[0],p=c[1],d=(0,u.useState)([]),h=(0,r.Z)(d,2),v=h[0],g=h[1],b=(0,u.useState)(8),j=(0,r.Z)(b,2),N=j[0],y=j[1],C=(0,u.useState)(null),Z=(0,r.Z)(C,2),k=Z[0],w=Z[1];(0,u.useEffect)((function(){function e(){return(e=(0,s.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p,e.next=3,f();case 3:e.t1=e.sent,(0,e.t0)(e.t1),w(o.length);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[o.length]),(0,u.useEffect)((function(){g(o)}),[o]);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(m,{allCars:o,setFilterCars:g,setTotalCars:w}),o.length>0&&(0,x.jsx)(l.Hg,{cars:v.slice(0,N),favorites:t,toggleFavorite:a}),N<k&&(0,x.jsx)("button",{className:"ml-auto mr-auto block mb-[150px] text-blue-500 text-base font-medium",onClick:function(){var e=N+8;y(e<=k?e:k)},children:"Load more"})]})}}}]);
//# sourceMappingURL=516.e4b18ced.chunk.js.map