(this.webpackJsonptest_intern=this.webpackJsonptest_intern||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),s=n.n(a),r=n(15),i=n.n(r),o=(n(24),n.p,n(25),n(18)),l=n(3),u=n(16),d=n.n(u),j=n(17),b=n.n(j);var h=function(e){return e.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,")},f=(n(44),s.a.memo((function(e){var t,n=e.country,a=e.index,s=e.onTop;return console.log(n.updated),Object(c.jsxs)("div",{className:"nation ".concat(s?"onTop":""),children:[Object(c.jsxs)("div",{className:"inforNation",children:[s?"":Object(c.jsx)("p",{className:"index",children:a}),Object(c.jsx)("img",{className:"flagNation",width:"60",height:"40",src:n.countryInfo.flag,alt:"Flag "+n.country}),Object(c.jsxs)("div",{className:"nameContainer",children:[Object(c.jsx)("label",{className:"nameNation",children:n.country}),Object(c.jsx)("label",{className:"lastUpdate",children:(t=n.updated,b()(t).fromNow())})]})]}),Object(c.jsx)("div",{className:"caseNation",children:h(n.cases)})]})}))),O=n.p+"static/media/search.7576ac8c.png";n(45);function m(e,t,n){var c=e[t];e[t]=e[n],e[n]=c}function v(e,t,n){var c;return e.length>1&&(t<(c=function(e,t,n){for(var c=e[Math.floor((n+t)/2)].cases,a=t,s=n;a<=s;){for(;e[a].cases<c;)a++;for(;e[s].cases>c;)s--;a<=s&&(m(e,a,s),a++,s--)}return a}(e,t,n))-1&&v(e,t,c-1),c<n&&v(e,c,n)),e}function g(){var e=Object(a.useState)(!0),t=Object(l.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)(null),i=Object(l.a)(r,2),u=i[0],j=i[1],b=Object(a.useState)(null),m=Object(l.a)(b,2),g=m[0],x=m[1],N=Object(a.useState)(null),p=Object(l.a)(N,2),S=p[0],y=p[1],C=Object(a.useState)([]),w=Object(l.a)(C,2),E=w[0],F=w[1],I=Object(a.useState)(""),T=Object(l.a)(I,2),L=T[0],M=T[1];Object(a.useEffect)((function(){setInterval((function(){d.a.get("https://disease.sh/v3/covid-19/countries").then((function(e){var t=Object(o.a)(e.data),n=v(t,0,t.length-1).reverse();F(n);var c=e.data.reduce((function(e,t){return e+t.cases}),0),a=e.data.reduce((function(e,t){return e+t.deaths}),0),s=e.data.reduce((function(e,t){return e+t.recovered}),0);y(s),x(a),j(c)}),0).then((function(){console.log("done loading",E),s(!1)})),console.log("featching")}),18e4)}),[]);var R=Object(a.useMemo)((function(){return Object(c.jsx)(c.Fragment,{children:E.length>0&&E.filter((function(e){return e.country.toLowerCase().includes(L.toLowerCase())})).slice(0,9).map((function(e,t){return Object(c.jsx)(f,{country:e,index:t+1},e.country)}))})}),[E,L]);return n?Object(c.jsx)("div",{children:"loading"}):Object(c.jsxs)("div",{className:"main",children:[Object(c.jsxs)("div",{className:"infor",children:[Object(c.jsx)("div",{className:"totalCase",children:u&&h(u)}),Object(c.jsxs)("div",{className:"deathsAndRecover",children:[Object(c.jsxs)("div",{className:"deaths",children:[g&&h(g),Object(c.jsx)("label",{className:"label",children:"DEATHS"})]}),Object(c.jsxs)("div",{className:"recovered",children:[" ",S&&h(S)," ",Object(c.jsx)("label",{className:"label",children:"RECOVERIES"})]})]})]}),Object(c.jsxs)("div",{className:"inputContainer",children:[Object(c.jsx)("img",{className:"image",width:"20",height:"20",src:O,alt:"search"}),Object(c.jsx)("input",{onChange:function(e){M(e.target.value)},className:"input",placeholder:"Search 667 regions..."})]}),Object(c.jsxs)("div",{className:"listNation",children:[Object(c.jsx)(f,{country:E.find((function(e){return"VietNam"===e.country||"VN"===e.countryInfo.iso2})),onTop:!0}),R]})]})}var x=function(){return Object(c.jsx)(g,{})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root")),N()}},[[46,1,2]]]);
//# sourceMappingURL=main.c8f6c47f.chunk.js.map