(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e){e.exports={d:["false","Caravan-NA 1","16:21","Red","White","false","Otter-BA 2","35:37","Grey","White","false","Otter-MB 3","05:01","Blue","White","false","Skyvan-XX 1","10:10","Green","White","0","10/11/18 1:05 PM UTC","0","1","4","4","4","5","15","16","18","12","10/11/18 2:38:32 PM UTC","69.4","74","70","0","21","0","14","0","0"]}},18:function(e,t,n){e.exports=n(44)},23:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){e.exports=n.p+"static/media/logo-Atlanta.6efc7cc9.svg"},28:function(e,t,n){e.exports=n.p+"static/media/logo-Clewiston.52c0aa6b.svg"},29:function(e,t,n){e.exports=n.p+"static/media/logo-Dallas.4fd27631.svg"},30:function(e,t,n){e.exports=n.p+"static/media/logo-Houston.fb8b5690.svg"},31:function(e,t,n){e.exports=n.p+"static/media/logo-SanMarcos.75b1bdea.svg"},44:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(8),l=n.n(r),i=(n(23),n(15)),s=n(9),c=n(10),d=n(14),m=n(11),u=n(17),g=(n(25),n(12)),h=n(16),v=n(1),f=n.n(v),E=function(e){var t,n,a,o,r,l,i,s,c,d,m,u,g,v,E,w,y,k,p,x,b,W,S,_,C,N,D,F,I,M,T,U,O,j,A=Object(h.a)(e);t=A[0],n=A[1],a=A[2],o=A[3],r=A[4],l=A[5],i=A[6],s=A[7],c=A[8],d=A[9],m=A[10],u=A[11],g=A[12],v=A[13],E=A[14],w=A[15],y=A[16],k=A[17],p=A[18],x=A[19],b=A[20],A[21],W=A[22],S=A[23],A[24],A[25],A[26],A[27],_=A[28],C=A[29],N=A[30],A[31],D=A[32],F=A[33],A[34],I=A[35],A[36],M=A[37],T=A[38],U=A[39],O=A[40],j=A[41],A.slice(42);var L=b,z={direction:Math.floor(W),speed:Math.floor(S),high_5min:Math.floor(_),high_10min:Math.floor(C),high_20min:Math.floor(N)},B={temp:F,heatindex:I,windDirString:M};return{locationId:"Houston",timers:[{enabled:"true"===t.toLowerCase(),load:n,time:a,slots:T,backgroundColor:o,foregroundColor:r},{enabled:"true"===l.toLowerCase(),load:i,time:s,slots:U,backgroundColor:c,foregroundColor:d},{enabled:"true"===m.toLowerCase(),load:u,time:g,slots:O,backgroundColor:v,foregroundColor:E},{enabled:"true"===w.toLowerCase(),load:y,time:k,slots:j,backgroundColor:p,foregroundColor:x}].filter(function(e){return!0===e.enabled}),winds:z,weather:B,loadsFlownToday:Number(L),lastUpdate:f()(D),prevWindDirections:[]}},w=function(e){var t=e.load,a=e.time,r=e.slots,l=e.backgroundColor,i=e.foregroundColor,s=e.timerCount,c=e.locationId,d=n(6)("./logo-".concat(c,".svg"));return o.a.createElement("div",{className:"Timer",style:{backgroundImage:"url(".concat(d,")"),backgroundColor:l,color:i,height:"".concat((80-1.25*s)/s,"vh")}},o.a.createElement("div",{className:"header"},o.a.createElement("div",{className:"title"},t),o.a.createElement("div",{className:"slots"},"Slots Remaining: ",r)),o.a.createElement("div",{className:"time",style:{fontSize:"".concat((50-s)/s,"vh")}},a))},y=function(e){var t=e.locationId,a=n(6)("./logo-".concat(t,".svg"));return o.a.createElement("div",{className:"BigLogo",style:{backgroundImage:"url(".concat(a,")")}})},k=function(e){var t=e.timers,n=e.locationId;return o.a.createElement("div",{className:"Timers"},t.length>0?t.map(function(e,a){return o.a.createElement(w,{key:a,load:e.load,time:e.time,slots:e.slots,timerCount:t.length,backgroundColor:e.backgroundColor,foregroundColor:e.foregroundColor,locationId:n})}):o.a.createElement(y,{locationId:n}))},p=function(e){var t=e.direction,n=e.index,a=e.current,r=void 0!==a&&a?"rgba(0, 255, 0, 1)":"rgba(255, 255, 0, 0.1)";return o.a.createElement("g",{id:"g_dir"},o.a.createElement("path",{d:"m64.49988,34.63094l4.9576,-32.42097l4.95763,32.42097l-2.47869,0l0,32.57588l-4.95763,0l0,-32.57588l-2.4789,0l-0.00002,0l0.00001,0z",fill:r,transform:"rotate(".concat(t,", 67, 67)"),id:"dir-".concat(n)}))},x=function(e){var t=e.winds,n=e.prevWindDirections,a="white",r="black";return t.speed>=30?(a="white",r="red"):t.speed>=22&&(a="yellow"),o.a.createElement("div",{className:"Compass"},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",id:"svg_compass",viewBox:"0,0,135,135",className:"svg-content"},o.a.createElement("g",null,o.a.createElement("title",null,"Skydive Wind Compass"),o.a.createElement("g",{id:"g11"},o.a.createElement("circle",{cx:"67",cy:"67",r:"65",stroke:"blue",strokeWidth:"2",fill:"black",id:"svg_1"}),o.a.createElement("line",{x1:"21",y1:"21",x2:"26",y2:"26",stroke:"blue",strokeWidth:"3",id:"svg_nw"}),o.a.createElement("line",{x1:"21",y1:"113",x2:"26",y2:"108",stroke:"blue",strokeWidth:"3",id:"svg_sw"}),o.a.createElement("line",{x1:"113",y1:"113",x2:"108",y2:"108",stroke:"blue",strokeWidth:"3",id:"svg_se"}),o.a.createElement("line",{x1:"112",y1:"21",x2:"107",y2:"26",stroke:"blue",strokeWidth:"3",id:"svg_ne"}),o.a.createElement("line",{x1:"8",y1:"42",x2:"11",y2:"44",stroke:"blue",strokeWidth:"2",id:"svg_wnw"}),o.a.createElement("line",{x1:"43",y1:"7",x2:"45",y2:"11",stroke:"blue",strokeWidth:"2",id:"svg_nnw"}),o.a.createElement("line",{x1:"7",y1:"92",x2:"10",y2:"90",stroke:"blue",strokeWidth:"2",id:"svg_wsw"}),o.a.createElement("line",{x1:"91",y1:"7",x2:"89",y2:"11",stroke:"blue",strokeWidth:"2",id:"svg_nne"}),o.a.createElement("line",{x1:"42",y1:"126",x2:"44",y2:"123",stroke:"blue",strokeWidth:"2",id:"svg_ssw"}),o.a.createElement("line",{x1:"126",y1:"42",x2:"123",y2:"44",stroke:"blue",strokeWidth:"2",id:"svg_ene"}),o.a.createElement("line",{x1:"92",y1:"126",x2:"90",y2:"123",stroke:"blue",strokeWidth:"2",id:"svg_sse"}),o.a.createElement("line",{x1:"126",y1:"92",x2:"123",y2:"90",stroke:"blue",strokeWidth:"2",id:"svg_ese"}),o.a.createElement("line",{x1:"67",y1:"2",x2:"67",y2:"12",stroke:"blue",strokeWidth:"3",id:"svg_n"}),o.a.createElement("line",{x1:"67",y1:"132",x2:"67",y2:"122",stroke:"blue",strokeWidth:"3",id:"svg_s"}),o.a.createElement("line",{x1:"132",y1:"67",x2:"122",y2:"67",stroke:"blue",strokeWidth:"3",id:"svg_e"}),o.a.createElement("line",{x1:"2",y1:"67",x2:"12",y2:"67",stroke:"blue",strokeWidth:"3",id:"svg_w"}),n.map(function(e,t){return o.a.createElement(p,{key:t,direction:e,index:t})}),o.a.createElement(p,{direction:t.direction,current:!0}),o.a.createElement("text",{fontSize:"15",fontFamily:"Sans-serif",x:"62",y:"27",fill:"white",id:"svg_3"},"N"),o.a.createElement("text",{fontSize:"15",fontFamily:"Sans-serif",x:"62",y:"117",fill:"white",id:"svg_5"},"S"),o.a.createElement("text",{fontSize:"15",fontFamily:"Sans-serif",x:"110",y:"72",fill:"white",id:"svg_7"},"E"),o.a.createElement("text",{fontSize:"15",fontFamily:"Sans-serif",x:"14",y:"72",fill:"white",id:"svg_9"},"W"),o.a.createElement("circle",{fill:r,stroke:"#000000",cx:"67",cy:"67",r:"33",id:"svg_cwindbg"}),o.a.createElement("text",{fill:a,stroke:"#FFF",strokeWidth:"0",x:"67",y:"82",id:"svg_cwind",fontSize:"48",fontFamily:"Sans-serif",textAnchor:"middle"},t.speed)))))},b=n(13),W=n.n(b),S=function(e){var t=e.winds,n=e.weather,a=e.loadsFlownToday,r=e.lastUpdate,l=function(e){var t=e%=360;return["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"][Math.round((t<0?e+360:e)/22.5)%16]}(t.direction);return o.a.createElement("div",{className:"Summary"},o.a.createElement("table",null,o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,"Temperature"),o.a.createElement("td",null,n.temp,"\xb0F")),o.a.createElement("tr",null,o.a.createElement("td",null,"Wind Direction"),o.a.createElement("td",null,l," ( ",t.direction," \xb0 )")),o.a.createElement("tr",null,o.a.createElement("td",null,"5 min High"),o.a.createElement("td",null,t.high_5min," mph")),o.a.createElement("tr",null,o.a.createElement("td",null,"10 min High"),o.a.createElement("td",null,t.high_10min," mph")),o.a.createElement("tr",null,o.a.createElement("td",null,"20 min High"),o.a.createElement("td",null,t.high_20min," mph")),o.a.createElement("tr",null,o.a.createElement("td",null,"Loads Flown Today"),o.a.createElement("td",null,a)),o.a.createElement("tr",null,o.a.createElement("td",null,"Last Update"),o.a.createElement("td",null,W()(r,"MM/DD/YY h:mm:ss A"))))))},_=function(e){var t=e.winds,n=e.prevWindDirections,a=e.weather,r=e.loadsFlownToday,l=e.lastUpdate;return o.a.createElement("div",{className:"WeatherSection"},o.a.createElement(x,{winds:t,prevWindDirections:n}),o.a.createElement(S,{weather:a,winds:t,loadsFlownToday:r,lastUpdate:l}))},C=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(d.a)(this,Object(m.a)(t).call(this))).state=E(g.d),e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"fetchDataAndUpdateState",value:function(){var e=this;fetch("https://a0lpb24ek3.execute-api.us-east-1.amazonaws.com/dev/".concat(this.state.locationId),{mode:"cors",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){var n=t;e.setState(function(t){return{timers:n.timers,winds:n.winds,weather:n.weather,loadsFlownToday:n.loadsFlownToday,lastUpdate:n.lastUpdate,prevWindDirections:[n.winds.direction].concat(Object(i.a)(e.state.prevWindDirections)).slice(0,240)}})})}},{key:"componentDidMount",value:function(){var e=this,t=new URL(window.location.href).searchParams;this.setState({locationId:t.get("locationId")||"Houston"}),window.setInterval(function(){return e.fetchDataAndUpdateState()},1e3)}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(k,{timers:this.state.timers,locationId:this.state.locationId}),o.a.createElement(_,this.state))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e,t,n){var a={"./logo-Atlanta.svg":27,"./logo-Clewiston.svg":28,"./logo-Dallas.svg":29,"./logo-Houston.svg":30,"./logo-SanMarcos.svg":31};function o(e){var t=r(e);return n(t)}function r(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}o.keys=function(){return Object.keys(a)},o.resolve=r,e.exports=o,o.id=6}},[[18,2,1]]]);
//# sourceMappingURL=main.c619df92.chunk.js.map