(this.webpackJsonpapi=this.webpackJsonpapi||[]).push([[0],{15:function(e,c,t){},23:function(e,c,t){},30:function(e,c,t){"use strict";t.r(c);var s=t(1),n=t.n(s),i=t(17),a=t.n(i),j=(t(23),t(15),t(3)),r=t(0),l=function(){return Object(r.jsx)("nav",{className:"navbar",children:Object(r.jsxs)("ul",{children:[Object(r.jsxs)("li",{children:[Object(r.jsx)(j.c,{exact:!0,to:"/",children:"characters"})," "]}),Object(r.jsx)("li",{children:Object(r.jsx)(j.c,{exact:!0,to:"/locations/",children:"locations"})}),Object(r.jsx)("li",{children:Object(r.jsx)(j.c,{exact:!0,to:"/episodes/",children:"episodes"})})]})})},d=function(){return Object(r.jsx)("footer",{className:"footer",children:Object(r.jsx)("div",{children:Object(r.jsxs)("p",{children:["Humbly developed by ",Object(r.jsx)("a",{href:"https://github.com/Norton794",children:"Norton dos Santos"})," using the ",Object(r.jsx)("a",{href:"https://rickandmortyapi.com/",children:"Rick and Morty API"})]})})})},o=t(2);function b(e){var c=e.episode&&e.episode[0],t=Object(s.useState)([]),n=Object(o.a)(t,2),i=n[0],a=n[1];return Object(s.useEffect)((function(){return fetch(c).then((function(e){return e.json()})).then((function(e){a(e)})),function(){a([])}}),[c]),Object(r.jsxs)("div",{className:"fE",children:[Object(r.jsx)("span",{children:"First seen in:"}),Object(r.jsxs)("p",{children:[" ",Object(r.jsx)(j.b,{to:"episode/".concat(i.id),children:i.name})]})]})}function h(){var e="https://rickandmortyapi.com/api/character",c=Object(s.useState)(e),t=Object(o.a)(c,2),n=t[0],i=t[1],a=Object(s.useState)([]),l=Object(o.a)(a,2),d=l[0],h=l[1],O=Object(s.useState)({}),x=Object(o.a)(O,2),p=x[0],u=x[1],f=Object(s.useState)(1),m=Object(o.a)(f,2),v=m[0],N=m[1];Object(s.useEffect)((function(){fetch(n).then((function(e){return e.json()})).then((function(e){h(e.results),u(e.info)}))}),[n]);return Object(r.jsxs)("div",{className:"all",id:"all",children:[Object(r.jsx)("div",{className:"cards",children:d.map((function(e,c){return Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("img",{src:e.image,alt:""}),Object(r.jsx)(j.b,{to:"/character/"+e.id,children:Object(r.jsx)("div",{className:"card-text",children:Object(r.jsxs)("h3",{children:[" ",e.name," "]})})}),Object(r.jsxs)("div",{className:"sub-tittle",children:[e.status," - ",e.species]}),Object(r.jsxs)("div",{className:"location",children:[Object(r.jsx)("span",{children:"Last Known Location:"}),Object(r.jsxs)("p",{children:[" ",Object(r.jsx)(j.b,{to:"/location/".concat(e.location.url.substring(41)),children:e.location.name})]})]}),Object(r.jsx)(b,{episode:e.episode})]},c)}))}),Object(r.jsxs)("div",{className:"pagination",children:[Object(r.jsx)("a",{href:"#all",onClick:function(){i(e),N(1)},children:"\xab"}),Object(r.jsx)("a",{href:"#all",style:{display:p.prev?"block":"none"},onClick:function(){i(p.prev),N(v-1)},children:v-1}),Object(r.jsx)("a",{href:"#all",className:"active",children:v}),Object(r.jsx)("a",{href:"#all",style:{display:p.next?"block":"none"},onClick:function(){i(p.next),N(v+1)},children:v+1}),Object(r.jsx)("a",{href:"#all",onClick:function(){var c=e+"/?page="+p.pages;i(c),N(p.pages)},children:"\xbb"})]})]})}function O(){var e="https://rickandmortyapi.com/api/episode",c=Object(s.useState)(e),t=Object(o.a)(c,2),n=t[0],i=t[1],a=Object(s.useState)([]),l=Object(o.a)(a,2),d=l[0],b=l[1],h=Object(s.useState)({}),O=Object(o.a)(h,2),x=O[0],p=O[1],u=Object(s.useState)(1),f=Object(o.a)(u,2),m=f[0],v=f[1];Object(s.useEffect)((function(){fetch(n).then((function(e){return e.json()})).then((function(e){b(e.results),p(e.info)}))}),[n]);return Object(r.jsxs)("div",{className:"all",children:[Object(r.jsx)("div",{className:"episodes",children:d.map((function(e,c){return Object(r.jsxs)("div",{className:"eps",children:[Object(r.jsx)(j.b,{to:"/episode/".concat(e.id),children:Object(r.jsx)("div",{className:"card-textx",children:Object(r.jsxs)("h3",{children:[e.name," "]})})}),Object(r.jsxs)("div",{className:"ep",children:[Object(r.jsx)("span",{children:"Episode: "}),Object(r.jsx)("p",{children:e.episode})]}),Object(r.jsxs)("div",{className:"ep",children:[Object(r.jsx)("span",{children:"Aired in: "}),Object(r.jsx)("p",{children:e.air_date})]})]},c)}))}),Object(r.jsxs)("div",{className:"pagination",children:[Object(r.jsx)("a",{href:"#all",onClick:function(){i(e),v(1)},children:"\xab"}),Object(r.jsx)("a",{href:"#all",style:{display:x.prev?"block":"none"},onClick:function(){i(x.prev),v(m-1)},children:m-1}),Object(r.jsx)("a",{href:"#all",className:"active",children:m}),Object(r.jsx)("a",{href:"#all",style:{display:x.next?"block":"none"},onClick:function(){i(x.next),v(m+1)},children:m+1}),Object(r.jsx)("a",{href:"#all",onClick:function(){var c=e+"/?page="+x.pages;i(c),v(x.pages)},children:"\xbb"})]})]})}function x(){var e="https://rickandmortyapi.com/api/location",c=Object(s.useState)(e),t=Object(o.a)(c,2),n=t[0],i=t[1],a=Object(s.useState)([]),l=Object(o.a)(a,2),d=l[0],b=l[1],h=Object(s.useState)({}),O=Object(o.a)(h,2),x=O[0],p=O[1],u=Object(s.useState)(1),f=Object(o.a)(u,2),m=f[0],v=f[1];Object(s.useEffect)((function(){fetch(n).then((function(e){return e.json()})).then((function(e){b(e.results),p(e.info)}))}),[n]);return Object(r.jsxs)("div",{className:"all",children:[Object(r.jsx)("div",{className:"locations",children:d.map((function(e,c){return Object(r.jsxs)("div",{className:"loc",children:[Object(r.jsx)(j.b,{to:"/location/".concat(e.id),children:Object(r.jsx)("div",{className:"card-textx",children:Object(r.jsx)("h3",{children:e.name})})}),Object(r.jsxs)("div",{className:"loc-type",children:[Object(r.jsx)("span",{children:"Type: "}),Object(r.jsx)("p",{children:e.type})]}),Object(r.jsxs)("div",{className:"loc-type",children:[Object(r.jsx)("span",{children:"Dimension: "}),Object(r.jsx)("p",{children:e.dimension})]})]},c)}))}),Object(r.jsxs)("div",{className:"pagination",children:[Object(r.jsx)("a",{href:"#all",onClick:function(){i(e),v(1)},children:"\xab"}),Object(r.jsx)("a",{href:"#all",style:{display:x.prev?"block":"none"},onClick:function(){i(x.prev),v(m-1)},children:m-1}),Object(r.jsx)("a",{href:"#all",className:"active",children:m}),Object(r.jsx)("a",{href:"#all",style:{display:x.next?"block":"none"},onClick:function(){i(x.next),v(m+1)},children:m+1}),Object(r.jsx)("a",{href:"#all",onClick:function(){var c=e+"/?page="+x.pages;i(c),v(x.pages)},children:"\xbb"})]})]})}var p=t(4);function u(e){var c=e.url,t=Object(s.useState)([]),n=Object(o.a)(t,2),i=n[0],a=n[1];return Object(s.useEffect)((function(){fetch(c).then((function(e){return e.json()})).then((function(e){a(e)}))})),Object(r.jsxs)("div",{className:"eps",children:[Object(r.jsx)(j.b,{to:"/episode/".concat(i.id),children:Object(r.jsx)("div",{className:"card-textx",children:Object(r.jsxs)("h3",{children:[i.name," "]})})}),Object(r.jsxs)("div",{className:"ep",children:[Object(r.jsx)("span",{children:"Episode: "}),Object(r.jsx)("p",{children:i.episode})]}),Object(r.jsxs)("div",{className:"ep",children:[Object(r.jsx)("span",{children:"Aired in: "}),Object(r.jsx)("p",{children:i.air_date})]})]})}var f=function(){var e="https://rickandmortyapi.com/api/character/"+Object(p.f)().id,c=Object(s.useState)([]),t=Object(o.a)(c,2),n=t[0],i=t[1];return Object(s.useEffect)((function(){fetch(e).then((function(e){return e.json()})).then((function(e){i(e)}))})),Object(r.jsx)("div",{className:"all",children:Object(r.jsxs)("div",{className:"profile",children:[Object(r.jsx)("div",{className:"profile-image",children:Object(r.jsx)("img",{src:n.image,alt:n.name})}),Object(r.jsx)("div",{className:"profile-name",children:Object(r.jsx)("h3",{children:n.name})}),Object(r.jsxs)("div",{className:"profile-status",children:[n.status," - ",n.species]}),Object(r.jsxs)("div",{className:"profile-gender",children:[Object(r.jsx)("span",{children:"Gender:"}),Object(r.jsx)("p",{children:n.gender})]}),Object(r.jsxs)("div",{className:"profile-origin",children:[Object(r.jsx)("span",{children:"Origin: "}),Object(r.jsxs)("p",{children:[" ",Object(r.jsx)(j.b,{to:"/location/".concat(n.origin&&n.origin.url.substring(41)),children:n.origin&&n.origin.name})]})]}),Object(r.jsxs)("div",{className:"profile-location",children:[Object(r.jsx)("span",{children:"Location: "}),Object(r.jsx)("p",{children:Object(r.jsx)(j.b,{to:"/location/".concat(n.location&&n.location.url.substring(41)),children:n.location&&n.location.name})})]}),Object(r.jsx)("p",{className:"where",children:Object(r.jsx)("h3",{children:"Episodes where it appeared:"})}),Object(r.jsx)("div",{className:"episodes",children:n.episode&&n.episode.map((function(e,c){return Object(r.jsx)(u,{url:e},c)}))})]})})};function m(e){var c=e.url,t=Object(s.useState)([]),n=Object(o.a)(t,2),i=n[0],a=n[1];return Object(s.useEffect)((function(){fetch(c).then((function(e){return e.json()})).then((function(e){a(e)}))})),Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("img",{src:i.image,alt:""}),Object(r.jsx)("div",{className:"card-text",children:Object(r.jsx)(j.b,{to:"/character/".concat(i.id),children:Object(r.jsxs)("h3",{children:[" ",i.name," "]})})}),Object(r.jsxs)("div",{className:"sub-tittle",children:[i.status," - ",i.species]}),Object(r.jsxs)("div",{className:"location",children:[Object(r.jsx)("span",{children:"Last Known Location:"}),Object(r.jsxs)("p",{children:[" ",Object(r.jsx)("a",{href:i.location&&i.location.url,children:i.location&&i.location.name})]})]}),Object(r.jsx)(b,{episode:i.episode})]})}function v(){var e="https://rickandmortyapi.com/api/location/"+Object(p.f)().id,c=Object(s.useState)([]),t=Object(o.a)(c,2),n=t[0],i=t[1];return Object(s.useEffect)((function(){fetch(e).then((function(e){return e.json()})).then((function(e){i(e)}))})),Object(r.jsxs)("div",{className:"all",children:[Object(r.jsx)("h2",{children:n.name}),Object(r.jsx)("div",{className:"cards",children:n.residents&&n.residents.map((function(e,c){return Object(r.jsx)(m,{url:e},c)}))})]})}function N(){var e="https://rickandmortyapi.com/api/episode/"+Object(p.f)().id,c=Object(s.useState)([]),t=Object(o.a)(c,2),n=t[0],i=t[1];return Object(s.useEffect)((function(){fetch(e).then((function(e){return e.json()})).then((function(e){i(e)}))})),Object(r.jsxs)("div",{className:"all",children:[Object(r.jsx)("h2",{children:n.name}),Object(r.jsxs)("div",{className:"ep",children:[Object(r.jsx)("span",{children:"Episode: "}),Object(r.jsx)("p",{children:n.episode})]}),Object(r.jsxs)("div",{className:"ep",children:[Object(r.jsx)("span",{children:"Aired in: "}),Object(r.jsx)("p",{children:n.air_date})]}),Object(r.jsx)("p",{className:"where",children:Object(r.jsx)("h3",{children:"CHARACTERS in the EPISODE:"})}),Object(r.jsx)("div",{className:"cards",children:n.characters&&n.characters.map((function(e,c){return Object(r.jsx)(m,{url:e},c)}))})]})}var g=function(){return Object(r.jsxs)(j.a,{children:[Object(r.jsx)(l,{}),Object(r.jsx)("h1",{className:"title",id:"title",children:"Consuming the Rick and Morty API"}),Object(r.jsxs)(p.c,{children:[Object(r.jsx)(p.a,{path:"/character/:id",children:Object(r.jsx)(f,{})}),Object(r.jsx)(p.a,{path:"/location/:id",children:Object(r.jsx)(v,{})}),Object(r.jsx)(p.a,{path:"/episode/:id",children:Object(r.jsx)(N,{})}),Object(r.jsx)(p.a,{path:"/locations",children:Object(r.jsx)(x,{})}),Object(r.jsx)(p.a,{path:"/episodes",children:Object(r.jsx)(O,{})}),Object(r.jsx)(p.a,{path:"/",children:Object(r.jsx)(h,{})})]}),Object(r.jsx)(d,{})]})};a.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(g,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.05d4fab2.chunk.js.map