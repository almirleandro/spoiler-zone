(this["webpackJsonpspoiler-zone"]=this["webpackJsonpspoiler-zone"]||[]).push([[0],{34:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var s=c(1),i=c(2),r=c.n(i),n=c(26),a=c.n(n),o=(c(34),c(5)),l=c(9);function j(){var e=r.a.useState({width:"0"}),t=Object(o.a)(e,2),c=t[0],i=t[1],n=function(){return i({width:"0"})};return Object(s.jsxs)("nav",{className:"Navbar",children:[Object(s.jsx)("div",{className:"leftSide",children:Object(s.jsx)(l.b,{exact:!0,to:"/",onClick:n,children:"Spoiler Zone"})}),Object(s.jsxs)("div",{className:"rightSide",children:[Object(s.jsx)(l.b,{to:"/catalogo",children:"Cat\xe1logo de filmes"}),Object(s.jsx)(l.b,{to:"/sobre",children:"Sobre o site"})]}),Object(s.jsxs)("div",{id:"mySidenav",className:"sidenav",style:c,children:[Object(s.jsx)("button",{className:"closebtn",onClick:n,children:"\xd7"}),Object(s.jsx)(l.b,{to:"/catalogo",onClick:n,children:"Cat\xe1logo de filmes"}),Object(s.jsx)(l.b,{to:"/sobre",onClick:n,children:"Sobre o site"})]}),Object(s.jsx)("i",{className:"fas fa-bars fa-2x",onClick:function(){return i({width:"250px"})}})]})}var A=c(4);function b(){var e=Object(A.f)(),t=Object(i.useState)(""),c=Object(o.a)(t,2),r=c[0],n=c[1];return Object(s.jsx)("div",{className:"HeroSection",children:Object(s.jsx)("div",{className:"hero-image",children:Object(s.jsxs)("div",{className:"hero-text",children:[Object(s.jsx)("p",{children:"A VIDA \xc9 MUITO CURTA"}),Object(s.jsx)("p",{children:"PARA ESPERAR O FINAL"}),Object(s.jsx)("p",{children:"DO FILME"}),Object(s.jsx)("form",{onSubmit:function(t){t.preventDefault(),e.push("search/".concat(r))},children:Object(s.jsx)("input",{placeholder:"Pesquise um filme",value:r,onChange:function(e){return n(e.target.value)},autoFocus:!0})})]})})})}function d(){return Object(s.jsx)("footer",{children:Object(s.jsx)("p",{children:"Almir Leandro \xa9 2021"})})}var h=c.p+"static/media/inception-spinning.e5e59a80.png",m=c.p+"static/media/TMDB-logo.bf7f470b.svg";function u(){return Object(s.jsxs)("main",{className:"About",children:[Object(s.jsxs)("div",{className:"leftSide",children:[Object(s.jsx)("h1",{children:"SOBRE O SITE"}),Object(s.jsx)("p",{children:"Neste site voc\xea encontra informa\xe7\xf5es sobre o enredo dos filmes enviados pelos pr\xf3prios usu\xe1rios."}),Object(s.jsx)("br",{}),Object(s.jsx)("p",{children:"Essa ideia surgiu da necessidade tanto de nos prepararmos para o que est\xe1 por vir na trama quanto de consultarmos informa\xe7\xf5es sobre filmes que j\xe1 assistimos a tanto tempo que j\xe1 esquecemos. Evite unhas ro\xeddas e l\xe1bios mordidos de tens\xe3o por n\xe3o ter resolvido ainda o mist\xe9rio do filme."}),Object(s.jsx)("br",{}),Object(s.jsxs)("p",{children:["Para quem tem pavor de spoilers, ",Object(s.jsx)("a",{href:"https://www.universityofcalifornia.edu/news/spoiler-alert-spoilers-make-you-enjoy-stories-more",target:"_blank",rel:"noreferrer",children:"pesquisas e estudos"})," tem indicado que saber alguns spoilers antes de ver um filme tornam ele ainda mais prazeroso. Fa\xe7a um teste! Leia os spoilers de algum filme e depois assista."]}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("p",{id:"attribution",children:"Todos os posters, sinopses e informa\xe7\xf5es t\xe9cnicas dos filmes neste site utilizam o banco de dados do The Movie Databse como fonte."}),Object(s.jsx)("br",{}),Object(s.jsx)("img",{id:"TMDBLogo",src:m,alt:"The Movie Database Logo"})]}),Object(s.jsx)("div",{className:"rightSide",children:Object(s.jsx)("img",{src:h,alt:"Spoiler de Inception"})})]})}var C=c(25);c(45);C.a.initializeApp({apiKey:"AIzaSyCK9kyzWbX0DkL3lSaYysc6QIFy5QrR2xw",authDomain:"moviespoilersdb.firebaseapp.com",projectId:"moviespoilersdb",storageBucket:"moviespoilersdb.appspot.com",messagingSenderId:"430921595614",appId:"1:430921595614:web:afe11c5fe403a076e4e04f"});var p=C.a;function v(){var e=Object(i.useState)([]),t=Object(o.a)(e,2),c=t[0],r=t[1],n=p.firestore().collection("moviespoilersdb");function a(e,t){return e.filter((function(e){return e.titulo.slice(0,1)===t})).map((function(e){return Object(s.jsx)("p",{className:"movieLink",children:Object(s.jsxs)(l.b,{to:"filme/".concat(e.id),children:[e.titulo," (",e.ano,")"]})},e.id)}))}return Object(i.useEffect)((function(){n.onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(e.data())})),r(t)}))}),[]),Object(s.jsxs)("main",{className:"Catalogo",children:[Object(s.jsx)("h1",{children:"CAT\xc1LOGO DE FILMES"}),c[0]?Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{className:"letterDiv",children:"#"}),function(e){for(var t=[],c=function(c){var s=e.filter((function(e){return e.titulo.slice(0,1)===c.toString()}));void 0!==s[0]&&s.forEach((function(e){return t.push(e)}))},i=0;i<10;i++)c(i);var r=e.filter((function(e){return"."===e.titulo.slice(0,1)||"("===e.titulo.slice(0,1)||"#"===e.titulo.slice(0,1)||"."===e.titulo.slice(0,1)||"+"===e.titulo.slice(0,1)||"-"===e.titulo.slice(0,1)||"."===e.titulo.slice(0,1)||"&"===e.titulo.slice(0,1)||"@"===e.titulo.slice(0,1)||"$"===e.titulo.slice(0,1)}));return void 0!==r[0]&&r.forEach((function(e){return t.push(e)})),t.map((function(e){return Object(s.jsx)("p",{className:"movieLink",children:Object(s.jsxs)(l.b,{to:"filme/".concat(e.id),children:[e.titulo," (",e.ano,")"]})},e.id)}))}(c),Object(s.jsx)("p",{className:"letterDiv",children:"A"}),a(c,"A"),Object(s.jsx)("p",{className:"letterDiv",children:"B"}),a(c,"B"),Object(s.jsx)("p",{className:"letterDiv",children:"C"}),a(c,"C"),Object(s.jsx)("p",{className:"letterDiv",children:"D"}),a(c,"D"),Object(s.jsx)("p",{className:"letterDiv",children:"E"}),a(c,"E"),Object(s.jsx)("p",{className:"letterDiv",children:"F"}),a(c,"F"),Object(s.jsx)("p",{className:"letterDiv",children:"G"}),a(c,"G"),Object(s.jsx)("p",{className:"letterDiv",children:"H"}),a(c,"H"),Object(s.jsx)("p",{className:"letterDiv",children:"I"}),a(c,"I"),Object(s.jsx)("p",{className:"letterDiv",children:"J"}),a(c,"J"),Object(s.jsx)("p",{className:"letterDiv",children:"K"}),a(c,"K"),Object(s.jsx)("p",{className:"letterDiv",children:"L"}),a(c,"L"),Object(s.jsx)("p",{className:"letterDiv",children:"M"}),a(c,"M"),Object(s.jsx)("p",{className:"letterDiv",children:"N"}),a(c,"N"),Object(s.jsx)("p",{className:"letterDiv",children:"O"}),a(c,"O"),Object(s.jsx)("p",{className:"letterDiv",children:"P"}),a(c,"P"),Object(s.jsx)("p",{className:"letterDiv",children:"Q"}),a(c,"Q"),Object(s.jsx)("p",{className:"letterDiv",children:"R"}),a(c,"R"),Object(s.jsx)("p",{className:"letterDiv",children:"S"}),a(c,"S"),Object(s.jsx)("p",{className:"letterDiv",children:"T"}),a(c,"T"),Object(s.jsx)("p",{className:"letterDiv",children:"U"}),a(c,"U"),Object(s.jsx)("p",{className:"letterDiv",children:"V"}),a(c,"V"),Object(s.jsx)("p",{className:"letterDiv",children:"W"}),a(c,"W"),Object(s.jsx)("p",{className:"letterDiv",children:"X"}),a(c,"X"),Object(s.jsx)("p",{className:"letterDiv",children:"Y"}),a(c,"Y"),Object(s.jsx)("p",{className:"letterDiv",children:"Z"}),a(c,"Z")]}):Object(s.jsx)("p",{className:"letterDiv",children:"Carregando filmes..."})]})}var O=c(14),x=c.n(O),g=c(18);function f(e){var t=Object(i.useState)(""),c=Object(o.a)(t,2),r=c[0],n=c[1],a=Object(i.useState)(""),l=Object(o.a)(a,2),j=l[0],A=l[1],b=Object(i.useState)(),d=Object(o.a)(b,2),h=d[0],m=d[1],u=Object(i.useState)({}),C=Object(o.a)(u,2),v=C[0],O=C[1],x=p.firestore().collection("spoilersforanalysis");return Object(i.useEffect)((function(){n(""),A(""),x.onSnapshot((function(t){var c=[];t.forEach((function(e){c.push(e.data())}));var s=c.filter((function(t){return t.id===e.filmeID}));void 0===s[0]?m(!1):(O(s[0]),m(!0))}))}),[e.filmeID]),Object(s.jsxs)("div",{className:"AddSpoiler",children:[Object(s.jsxs)("p",{id:"SendSpoilerTitle",children:["J\xe1 assistiu esse filme? Envie",e.haveSpoilers?" mais":null," alguns spoilers!"]}),Object(s.jsxs)("form",{onSubmit:function(t){return function(t){t.preventDefault();var c={id:e.filmeID,titulo:e.movieTitle,ano:e.movieYear,newInfo:[{spoilers:j,usuario:r}]};if(h){var s=v;s.newInfo.push(c.newInfo[0]),x.doc(e.filmeID).update(s).catch((function(e){console.log(e)}))}else x.doc(e.filmeID).set(c).catch((function(e){console.log(e)}));n(""),A(""),alert("Obrigado por contribuir para o desenvolvimento do site!")}(t)},children:[Object(s.jsxs)("p",{id:"movieName",children:["Filme: ",e.movieTitle," ",e.movieYear?"(".concat(e.movieYear,")"):null]}),Object(s.jsx)("input",{placeholder:"Seu nome",value:r,onChange:function(e){return n(e.target.value)}}),Object(s.jsx)("br",{}),Object(s.jsx)("textarea",{placeholder:"Escreva os spoilers aqui",value:j,onChange:function(e){return A(e.target.value)},required:!0}),Object(s.jsx)("br",{}),Object(s.jsx)("p",{id:"sendSpoilerMsg",children:"* Ao enviar dados para o site, tanto o seu nome quanto os spoilers enviados ficar\xe3o vis\xedveis ao p\xfablico. Os spoilers ser\xe3o analisados e estar\xe3o sujeitos a altera\xe7\xe3o antes de serem publicados. Obrigado por sua contribui\xe7\xe3o!"}),Object(s.jsx)("button",{children:"Enviar"})]})]})}function w(){var e=Object(i.useState)(),t=Object(o.a)(e,2),c=t[0],r=t[1],n=Object(i.useState)(),a=Object(o.a)(n,2),l=a[0],j=a[1],b=Object(i.useState)(),d=Object(o.a)(b,2),h=d[0],m=d[1],u=Object(i.useState)([]),C=Object(o.a)(u,2),v=C[0],O=C[1],w=Object(A.h)().id,I=p.firestore().collection("moviespoilersdb"),Y=function(){var e=Object(g.a)(x.a.mark((function e(){var t,c,s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.themoviedb.org/3/movie/".concat(w,"?api_key=53d1ed1dbd54c7022b78b3f3b8a42342&language=pt-BR"),e.prev=1,e.next=4,fetch(t);case 4:return c=e.sent,e.next=7,c.json();case 7:s=e.sent,r(s),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(g.a)(x.a.mark((function e(){var t,c,s,i,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.themoviedb.org/3/movie/".concat(w,"/credits?api_key=53d1ed1dbd54c7022b78b3f3b8a42342&language=en-US"),e.prev=1,e.next=4,fetch(t);case 4:return c=e.sent,e.next=7,c.json();case 7:s=e.sent,i=s.crew.filter((function(e){return"Director"===e.job})),r=i.map((function(e,t){return i.length>1&&t+1===i.length?"e "+e.name:t+1===i.length-1?e.name+" ":t+1<i.length?e.name+", ":e.name})),j(r),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(g.a)(x.a.mark((function e(){var t,c,s,i,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.themoviedb.org/3/movie/".concat(w,"/watch/providers?api_key=53d1ed1dbd54c7022b78b3f3b8a42342"),e.prev=1,e.next=4,fetch(t);case 4:return c=e.sent,e.next=7,c.json();case 7:s=e.sent,i=s.results.BR.flatrate,r=i.map((function(e,t){return i.length>1&&t+1===i.length?"e "+e.provider_name:t+1===i.length-1?e.provider_name+" ":t+1<i.length?e.provider_name+", ":e.provider_name})),m(r),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(){return e.apply(this,arguments)}}();Object(i.useEffect)((function(){Y(),J(),E(),I.onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(e.data())}));var c=t.filter((function(e){return e.id===w}));void 0===c[0]?O([]):O(c[0].spoilers)}))}),[w]);var G=v.map((function(e){return Object(s.jsx)("li",{children:e.text},e.key)}));return Object(s.jsxs)("main",{className:"Filme",children:[c?Object(s.jsxs)("div",{className:"movieHeader",children:[Object(s.jsx)("img",{src:c.poster_path?"https://image.tmdb.org/t/p/w342"+c.poster_path:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVYAAAIBCAYAAAASzJdRAAAAAXNSR0IArs4c6QAAAAlwSFlzAAAOxAAADsQBlSsOGwAADQhJREFUeJzt3VtTk+fbxuGbsExYJgZELFII2I1+/8/iMExn2s503OgAOlWKBfXdcKx9/ypkcYbnSXIce8rqmiH5Tbjy3Mnc6enpxwJATKPqAQCmjbAChAkrQJiwAoQJK0CYsAKECStAmLAChAkrQJiwAoQJK0CYsAKECStAmLAChAkrQJiwAoQJK0CYsAKECStAmLAChAkrQJiwAoQJK0CYsAKECStAmLAChAkrQJiwAoQJK0CYsAKECStAmLAChAkrQJiwAoQJK0CYsAKECStAmLAChAkrQJiwAoQJK0CYsAKECStAmLAChAkrQJiwAoQJK0CYsAKECStAmLAChAkrQJiwAoQJK0CYsAKECStAmLAChAkrQJiwAoQJK0CYsAKECStAmLAChAkrQJiwAoQJK0CYsAKECStAmLAChAkrQJiwAoQJK0CYsAKECStAmLAChAkrQJiwAoQJK0CYsAKECStAmLAChAkrQJiwAoQJK0CYsAKECStAmLAChAkrQJiwAoQJK0CYsAKECStAmLAChAkrQJiwAoQJK0CYsAKECStAmLAChAkrQJiwAoQJK0CYsAKECStAmLAChAkrQJiwAoQJK0CYsAKECStAmLAChAkrQJiwAoQJK0CYsAKECStAmLAChAkrQJiwAoQJK0CYsAKECStAmLAChAkrQJiwAoQJK0CYsAKECStAmLAChAkrQJiwAoQJK0CYsAKECStAmLAChAkrQJiwAoQJK0CYsAKECStAmLAChAkrQJiwAoQJK0CYsAKECStAmLAChAkrQJiwAoQJK0CYsAKECStAmLAChAkrQJiwAoQJK0CYsAKECStAmLAChAkrQJiwAoQJK0CYsAKECStAmLAChAkrQJiwAoQJK0CYsAKECStAmLAChAkrQJiwAoQJK0CYsAKECStAmLAChAkrQJiwAoQJK0CYsAKECStAmLAChAkrQJiwAoQJK0CYsAKECStA2ELVAzC6V69elYuLi3J9fV1ub2/Lzc1N1SMxgIWFhbKwsFCWl5dLu90u7Xa7NBoe80yyudPT049VD8Hgbm5uysuXL8v5+Xn58OFD1eMQ1ul0ypMnT8rKykrVozAEj1gn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1VW5vLwsb9++LX///Xe5vb2tejSG0Gg0SqvVKq1Wq7Tb7bK2tlb1SIxAWCfc5zsjUB92rABhwgoQJqwAYcIKECasAGHCChAmrABhwgoQJqwAYcIKECasAGHCChAmrABhwgoQJqwAYcIKECasAGHCChAmrABhwgoQJqwAYcIKECasAGHCChAmrABhwgoQJqwAYcIKECasAGHCChAmrABhwgoQJqwAYcIKECasAGHCChAmrABhwgoQJqwAYcIKECasAGHCChAmrABhwgoQJqwAYcIKECasAGHCChAmrABhwgoQJqwAYcIKECasAGHCChAmrABhwgoQJqwAYcIKECasAGHCChAmrABhwgoQJqwAYcIKECasAGHCChAmrABhwgoQJqwAYcIKECasAGHCChAmrABhwgoQJqwAYcIKECasAGHCChAmrABhwgoQJqwAYcIKECasAGHCChAmrABhwgoQJqwAYcIKECasAGHCChAmrABhwgoQJqwAYcIKECasAGHCChAmrABhwgoQJqwAYcIKECasAGHCChAmrABhwgoQJqwAYcIKECasAGHCChAmrABhwgoQJqwAYcIKECasAGHCChAmrABhwgoQJqwAYcIKECasAGHCChAmrABhwgoQJqwAYcIKECasAGHCChAmrABhwgoQJqwAYcIKECasAGHCChAmrABhwgoQJqwAYcIKECasAGHCChAmrABhwgoQJqwAYcIKECasAGHCChAmrABhwgoQJqwAYcIKECasAGHCChAmrABhwgoQJqwAYcIKECasAGHCChAmrABhwgoQJqwAYcIKECasAGHCChAmrABhwgoQJqwAYcIKECasAGHCChAmrABhwgoQJqwAYcIKECasAGHCChAmrABhwgoQJqwAYcIKECasAGHCChAmrABhwgoQJqwAYcIKECasAGHCChAmrABh/wf+2xc8O3sQBQAABHFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0n77u/JyBpZD0nVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkJz8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0nYWRvYmU6bnM6bWV0YS8nPgo8cmRmOlJERiB4bWxuczpyZGY9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMnPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6QXR0cmliPSdodHRwOi8vbnMuYXR0cmlidXRpb24uY29tL2Fkcy8xLjAvJz4KICA8QXR0cmliOkFkcz4KICAgPHJkZjpTZXE+CiAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9J1Jlc291cmNlJz4KICAgICA8QXR0cmliOkNyZWF0ZWQ+MjAyMS0wMS0wNDwvQXR0cmliOkNyZWF0ZWQ+CiAgICAgPEF0dHJpYjpFeHRJZD4xZmQ1NzljZS1hYTMxLTQ5MTgtYmFhZC0yYjgwOTliM2IxNTI8L0F0dHJpYjpFeHRJZD4KICAgICA8QXR0cmliOkZiSWQ+NTI1MjY1OTE0MTc5NTgwPC9BdHRyaWI6RmJJZD4KICAgICA8QXR0cmliOlRvdWNoVHlwZT4yPC9BdHRyaWI6VG91Y2hUeXBlPgogICAgPC9yZGY6bGk+CiAgIDwvcmRmOlNlcT4KICA8L0F0dHJpYjpBZHM+CiA8L3JkZjpEZXNjcmlwdGlvbj4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOmRjPSdodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyc+CiAgPGRjOnRpdGxlPgogICA8cmRmOkFsdD4KICAgIDxyZGY6bGkgeG1sOmxhbmc9J3gtZGVmYXVsdCc+bm8taW1hZ2UzNDI8L3JkZjpsaT4KICAgPC9yZGY6QWx0PgogIDwvZGM6dGl0bGU+CiA8L3JkZjpEZXNjcmlwdGlvbj4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOnBkZj0naHR0cDovL25zLmFkb2JlLmNvbS9wZGYvMS4zLyc+CiAgPHBkZjpBdXRob3I+bDM0bmRyMC41MC5tNHJxdTM1PC9wZGY6QXV0aG9yPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczp4bXA9J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8nPgogIDx4bXA6Q3JlYXRvclRvb2w+Q2FudmE8L3htcDpDcmVhdG9yVG9vbD4KIDwvcmRmOkRlc2NyaXB0aW9uPgo8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSdyJz8+zW5hmQAAAABJRU5ErkJggg==",alt:c.title}),Object(s.jsxs)("div",{className:"movieDescription",children:[Object(s.jsxs)("h1",{children:[c.title," (",c.release_date.slice(0,4),")"]}),c.tagline?Object(s.jsx)("p",{id:"tagline",children:Object(s.jsxs)("em",{children:['"',c.tagline,'"']})}):null,Object(s.jsxs)("p",{children:[Object(s.jsx)("b",{children:"T\xedtulo original:"})," ",c.original_title]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("b",{children:"Dire\xe7\xe3o:"})," ",l]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("b",{children:"Sinopse:"})," ",c.overview?c.overview:"N\xe3o dispon\xedvel"]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("b",{children:"Dispon\xedvel para streaming no Brasil em:"})," ",h||"N\xe3o dispon\xedvel"]})]})]}):null,Object(s.jsx)("div",{className:"spoilerDivision",children:"Spoilers a seguir"}),Object(s.jsx)("div",{className:"spoilers",children:G[0]?G:Object(s.jsxs)("p",{children:["Esse filme ainda n\xe3o tem spoilers adicionados. Consulte o ",Object(s.jsx)("a",{href:"#/catalogo",children:"Cat\xe1logo de Filmes"})," para acessar os filmes que j\xe1 cont\xeam spoilers."]})}),Object(s.jsx)(f,{haveSpoilers:!!G[0],filmeID:w,movieTitle:c?c.title:null,movieYear:c?c.release_date.slice(0,4):null})]})}function I(){var e=Object(A.f)(),t=Object(i.useState)({}),c=Object(o.a)(t,2),r=c[0],n=c[1],a=Object(i.useState)([]),l=Object(o.a)(a,2),j=l[0],b=l[1],d=Object(i.useState)(1),h=Object(o.a)(d,2),m=h[0],u=h[1],C=Object(A.h)().query,p=function(){var e=Object(g.a)(x.a.mark((function e(){var t,c,s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.themoviedb.org/3/search/movie?api_key=53d1ed1dbd54c7022b78b3f3b8a42342&language=pt-BR&query=".concat(C,"&page=").concat(m,"&include_adult=false"),e.prev=1,e.next=4,fetch(t);case 4:return c=e.sent,e.next=7,c.json();case 7:s=e.sent,n(s),b(s.results),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.error(e.t0);case 15:window.scrollTo(0,0);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}();Object(i.useEffect)((function(){p()}),[C,m]);var v=j.map((function(t){return Object(s.jsxs)("div",{className:"movieBlock",children:[Object(s.jsx)("div",{className:"imgDiv",children:Object(s.jsx)("img",{src:t.poster_path?"https://image.tmdb.org/t/p/w185"+t.poster_path:"data:image/png;base64,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aVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49J++7vycgaWQ9J1c1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCc/Pgo8eDp4bXBtZXRhIHhtbG5zOng9J2Fkb2JlOm5zOm1ldGEvJz4KPHJkZjpSREYgeG1sbnM6cmRmPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjJz4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOkF0dHJpYj0naHR0cDovL25zLmF0dHJpYnV0aW9uLmNvbS9hZHMvMS4wLyc+CiAgPEF0dHJpYjpBZHM+CiAgIDxyZGY6U2VxPgogICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSdSZXNvdXJjZSc+CiAgICAgPEF0dHJpYjpDcmVhdGVkPjIwMjEtMDEtMDQ8L0F0dHJpYjpDcmVhdGVkPgogICAgIDxBdHRyaWI6RXh0SWQ+NTljNDc2M2YtYjI4NC00MDg0LWI2OTMtZjNmMGIzNTI1NjAzPC9BdHRyaWI6RXh0SWQ+CiAgICAgPEF0dHJpYjpGYklkPjUyNTI2NTkxNDE3OTU4MDwvQXR0cmliOkZiSWQ+CiAgICAgPEF0dHJpYjpUb3VjaFR5cGU+MjwvQXR0cmliOlRvdWNoVHlwZT4KICAgIDwvcmRmOmxpPgogICA8L3JkZjpTZXE+CiAgPC9BdHRyaWI6QWRzPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpkYz0naHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8nPgogIDxkYzp0aXRsZT4KICAgPHJkZjpBbHQ+CiAgICA8cmRmOmxpIHhtbDpsYW5nPSd4LWRlZmF1bHQnPk5vIGltYWdlPC9yZGY6bGk+CiAgIDwvcmRmOkFsdD4KICA8L2RjOnRpdGxlPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpwZGY9J2h0dHA6Ly9ucy5hZG9iZS5jb20vcGRmLzEuMy8nPgogIDxwZGY6QXV0aG9yPmwzNG5kcjAuNTAubTRycXUzNTwvcGRmOkF1dGhvcj4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6eG1wPSdodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvJz4KICA8eG1wOkNyZWF0b3JUb29sPkNhbnZhPC94bXA6Q3JlYXRvclRvb2w+CiA8L3JkZjpEZXNjcmlwdGlvbj4KPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KPD94cGFja2V0IGVuZD0ncic/Pns3OUkAAAAASUVORK5CYII=",alt:t.title,onClick:function(){return e.push("/filme/"+t.id)},style:{cursor:"pointer"}})}),Object(s.jsxs)("div",{className:"rightSide",children:[Object(s.jsx)("h1",{onClick:function(){return e.push("/filme/"+t.id)},style:{cursor:"pointer"},children:t.title}),Object(s.jsxs)("p",{className:"originalTitle",children:[Object(s.jsx)("b",{children:"T\xedtulo original: "}),t.original_title]}),t.release_date?Object(s.jsxs)("p",{children:[Object(s.jsx)("b",{children:"Ano de lan\xe7amento: "}),t.release_date.slice(0,4)]}):null]})]},t.id)})),O=Object(s.jsxs)("div",{className:"noResults",children:[Object(s.jsx)("h1",{children:"Nenhum filme encontrado"}),Object(s.jsx)("p",{id:"noResultsText",children:"Verifique a escrita na pesquisa e tente novamente"})]});return Object(s.jsxs)("div",{className:"Search",children:[Object(s.jsx)("main",{className:"movieGrid",children:void 0===r.page?Object(s.jsx)("h1",{children:"Carregando filmes..."}):0===r.total_pages?O:v}),Object(s.jsx)("br",{}),void 0===r.page||0===r.total_pages?null:Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"btnFlex",children:[Object(s.jsx)("button",{onClick:function(){return u(m-1)},style:1===r.page?{display:"none"}:null,children:"P\xe1gina anterior"}),Object(s.jsx)("button",{onClick:function(){return u(m+1)},style:r.page===r.total_pages?{display:"none"}:null,children:"Pr\xf3xima p\xe1gina"})]}),Object(s.jsx)("br",{}),Object(s.jsx)("p",{id:"pageCount",children:"P\xe1gina "+r.page+" de "+r.total_pages})]})]})}function Y(){var e=Object(A.g)().pathname;return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}function J(){return Object(s.jsxs)(l.a,{basename:"/",children:[Object(s.jsx)(Y,{}),Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)(A.c,{children:[Object(s.jsxs)(A.a,{path:"/",exact:!0,children:[Object(s.jsx)(j,{}),Object(s.jsx)(b,{}),Object(s.jsx)(d,{})]}),Object(s.jsxs)(A.a,{path:"/catalogo",children:[Object(s.jsx)(j,{}),Object(s.jsx)(v,{}),Object(s.jsx)(d,{})]}),Object(s.jsxs)(A.a,{path:"/sobre",children:[Object(s.jsx)(j,{}),Object(s.jsx)(u,{}),Object(s.jsx)(d,{})]}),Object(s.jsxs)(A.a,{path:"/filme/:id",children:[Object(s.jsx)(j,{}),Object(s.jsx)(w,{}),Object(s.jsx)(d,{})]}),Object(s.jsxs)(A.a,{path:"/search/:query",children:[Object(s.jsx)(j,{}),Object(s.jsx)(I,{}),Object(s.jsx)(d,{})]})]})})]})}a.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(J,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.b206e4ec.chunk.js.map