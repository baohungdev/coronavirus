(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{116:function(e,t,a){},211:function(e,t,a){},212:function(e,t,a){},213:function(e,t,a){},215:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(73),o=a.n(c),u=a(6),l=a.n(u),s=a(10),i=a(74),m=a(75),d=a(87),p=a(86),f=a(32),v=a.n(f),h="https://covid19.mathdro.id/api",E=function(){var e=Object(s.a)(l.a.mark((function e(t){var a,n,r,c,o,u,s,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=h,t&&(a="".concat(h,"/countries/").concat(t)),e.prev=2,e.next=5,v.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.deaths,u=r.recovered,s=r.lastUpdate,i={confirmed:c,deaths:o,recovered:u,lastUpdate:s},e.abrupt("return",i);case 15:e.prev=15,e.t0=e.catch(2);case 17:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(s.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("".concat(h,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed,deaths:e.deaths,data:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(s.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("".concat(h,"/countries"));case 3:return t=e.sent,a=t.data.countries,n=a.map((function(e){return e.name})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),y=a(231),w=a(235),x=a(232),j=a(233),C=a(33),N=a.n(C),O=(a(116),function(e){var t=e.data,a=t.confirmed,n=t.deaths,c=t.recovered,o=t.lastUpdate;return a?r.a.createElement("div",{className:"container"},r.a.createElement(y.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(y.a,{item:!0,component:w.a,xs:12,md:3,className:"card confirmed"},r.a.createElement(x.a,null,r.a.createElement(j.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(j.a,null,r.a.createElement(N.a,{start:0,end:a.value,duration:2.5,separator:","})),r.a.createElement(j.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(j.a,{variant:"body2"},"Number of active cases of COVID-19"))),r.a.createElement(y.a,{item:!0,component:w.a,xs:12,md:3,className:"card recovered"},r.a.createElement(x.a,null,r.a.createElement(j.a,{color:"textSecondary",gutterBottom:!0},"Recoveries"),r.a.createElement(j.a,null,r.a.createElement(N.a,{start:0,end:c.value,duration:2.5,separator:","})),r.a.createElement(j.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(j.a,{variant:"body2"},"Number of active Recoveries from COVID-19"))),r.a.createElement(y.a,{item:!0,component:w.a,xs:12,md:3,className:"card deaths"},r.a.createElement(x.a,null,r.a.createElement(j.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(j.a,null,r.a.createElement(N.a,{start:0,end:n.value,duration:2.5,separator:","})),r.a.createElement(j.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(j.a,{variant:"body2"},"Number of active Deaths of COVID-19"))))):"Loading.."}),D=a(31),k=a(45),S=(a(211),function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,u=e.country,i=Object(n.useState)([]),m=Object(D.a)(i,2),d=m[0],p=m[1];Object(n.useEffect)((function(){(function(){var e=Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p,e.next=3,b();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=d.length?r.a.createElement(k.b,{data:{labels:d.map((function(e){return e.data})),datasets:[{data:d.map((function(e){return e.confirmed.total})),label:"Infected",borderColor:"#d7af70",fill:!0},{data:d.map((function(e){return e.deaths.total})),label:"Deaths",borderColor:"#77625C",backgroundColor:"#ac9969",fill:!0}]}}):null,v=a?r.a.createElement(k.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgb(193, 140, 93)","rgb(169, 153, 133)","rgb(98, 144, 200)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(u)}}}):null;return r.a.createElement("div",{className:"container"},u?v:f)}),_=a(236),I=a(234),U=(a(212),function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(D.a)(a,2),o=c[0],u=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,g();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[u]),r.a.createElement("div",{className:"container"},r.a.createElement(_.a,{className:"formControl"},r.a.createElement(I.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))))}),B=a(81),V=a.n(B),A=a(82),R=a.n(A),J=a(83),G=a.n(J),L=(a(213),function(){return r.a.createElement("section",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-between"},r.a.createElement("div",{className:"col-auto"},r.a.createElement("ul",{className:"footer__social-lists"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.facebook.com/dbhungUIT"},r.a.createElement(V.a,{className:"svg_icons"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.instagram.com/hunhjax/"},r.a.createElement(R.a,{className:"svg_icons"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/motcondicontrinh1"},r.a.createElement(G.a,{className:"svg_icons"}))))))))}),M=a(84),P=a.n(M),Q=a(85),T=a.n(Q),W=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(s.a)(l.a.mark((function t(a){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.render=function(){var t=e.state,a=t.data,n=t.country;return r.a.createElement("div",{className:P.a.container},r.a.createElement("img",{className:"image",src:T.a,alt:""}),r.a.createElement(O,{data:a}),r.a.createElement(U,{handleCountryChange:e.handleCountryChange}),r.a.createElement(S,{data:a,country:n}),r.a.createElement(L,null))},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),a}(n.Component);o.a.render(r.a.createElement(W,null),document.getElementById("root"))},84:function(e,t,a){e.exports={container:"App_container__3ybWU",image:"App_image__34Qnp"}},85:function(e,t,a){e.exports=a.p+"static/media/image.d7265326.png"},90:function(e,t,a){e.exports=a(215)}},[[90,1,2]]]);
//# sourceMappingURL=main.0e50f1ef.chunk.js.map