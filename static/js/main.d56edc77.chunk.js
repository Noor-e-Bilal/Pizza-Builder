(this.webpackJsonpNetwing_Pizza_House=this.webpackJsonpNetwing_Pizza_House||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/pizza logo.fbdba6d0.png"},function(e,t,a){e.exports=a.p+"static/media/BaseCheese.204b89ab.png"},function(e,t,a){e.exports=a.p+"static/media/PizzaBase.e87ca321.png"},function(e,t,a){e.exports=a.p+"static/media/Olive.a40a72f1.png"},function(e,t,a){e.exports=a.p+"static/media/Pineapple.a2c5e05b.png"},function(e,t,a){e.exports=a.p+"static/media/Mushroom.4d30186a.png"},function(e,t,a){e.exports=a.p+"static/media/Basil.871c221e.png"},function(e,t,a){e.exports=a.p+"static/media/Tomato.5cada894.png"},,function(e,t,a){e.exports=a.p+"static/media/PizzaMan.22551d46.png"},function(e,t,a){e.exports=a(36)},,,,,function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(14),r=a.n(i),l=(a(30),a(7)),o=a(15),s=a.n(o);function m(){return c.a.createElement("div",{style:{background:"#0D0628",padding:"15px 50px",display:"flex",justifyContent:"space-between",alignItems:"center"}},c.a.createElement("div",{style:{display:"flex",alignItems:"center"}},c.a.createElement("img",{src:s.a,alt:"pizzalogo",height:"40px"}),c.a.createElement("div",{style:{marginLeft:20,fontSize:30,color:"yellow",fontFamily:"Alata,sans-serif"}},"Netwing Pizza Customization")))}var p=a(6),d=a(1),u=a(16),h=a.n(u),g=a(17),E=a.n(g),f=a(18),y=a.n(f),k=a(19),b=a.n(k),v=a(20),x=a.n(v),z=a(21),N=a.n(z),C=a(22),O=a.n(C),w=a(4);function S(e){var t=e.ingredients,a=e.setIngredients,n=Object(d.f)(),i=function(e,n){console.log(localStorage);var c=JSON.parse(JSON.stringify(t));c[n]=e,a(c),localStorage.setItem("ingredients",JSON.stringify(c))};return c.a.createElement("div",{style:{display:"flex"}},c.a.createElement("div",{style:{flex:1,padding:40}},c.a.createElement("div",{style:{maxHeight:500,maxWidth:500,position:"relative"}},c.a.createElement(w.a.div,{initial:{opacity:0},animate:{y:t.basil?100:-100,opacity:t.basil?1:0},transition:{duration:1},className:"ingredients z4"},c.a.createElement("img",{src:N.a,alt:"Pizza Base",height:"100%",width:"100%"})),c.a.createElement(w.a.div,{initial:{opacity:0},animate:{y:t.olive?100:-100,opacity:t.olive?1:0},transition:{duration:1},className:"ingredients z4"},c.a.createElement("img",{src:y.a,alt:"Pizza Base",height:"100%",width:"100%"})),c.a.createElement(w.a.div,{initial:{opacity:0},animate:{y:t.pineapple?100:-100,opacity:t.pineapple?1:0},transition:{duration:1},className:"ingredients z3"},c.a.createElement("img",{src:b.a,alt:"Pizza Base",height:"100%",width:"100%"})),c.a.createElement(w.a.div,{initial:{opacity:0},animate:{y:t.tomato?100:-100,opacity:t.tomato?1:0},transition:{duration:1},className:"ingredients z4"},c.a.createElement("img",{src:O.a,alt:"Tomato",height:"100%",width:"100%"})),c.a.createElement(w.a.div,{initial:{scale:0},animate:{scale:t.cheese?1:0},transition:{duration:.3},className:"cheese z1"},c.a.createElement("img",{src:h.a,alt:"Cheese",height:"100%",width:"100%"})),c.a.createElement(w.a.div,{initial:{opacity:0},animate:{y:t.mushroom?100:-100,opacity:t.mushroom?1:0},transition:{duration:1},className:"ingredients z4"},c.a.createElement("img",{src:x.a,alt:"Pizza Base",height:"100%",width:"100%"})),c.a.createElement(w.a.div,{transition:{duration:1},className:""},c.a.createElement("img",{src:E.a,alt:"Pizza Base",height:"100%",width:"100%"})))),c.a.createElement("div",{style:{flex:1,padding:40}},c.a.createElement("label",{className:"container-checkbox"},"Pineapple",c.a.createElement("input",{type:"checkbox",checked:t.pineapple,onChange:function(e){return i(e.currentTarget.checked,"pineapple")}}),c.a.createElement("span",{className:"checkmark"})),c.a.createElement("label",{className:"container-checkbox"},"Basil",c.a.createElement("input",{type:"checkbox",checked:t.basil,onChange:function(e){return i(e.currentTarget.checked,"basil")}}),c.a.createElement("span",{className:"checkmark"})),c.a.createElement("label",{className:"container-checkbox"},"Olive",c.a.createElement("input",{type:"checkbox",checked:t.olive,onChange:function(e){return i(e.currentTarget.checked,"olive")}}),c.a.createElement("span",{className:"checkmark"})),c.a.createElement("label",{className:"container-checkbox"},"Tomato",c.a.createElement("input",{type:"checkbox",checked:t.tomato,onChange:function(e){return i(e.currentTarget.checked,"tomato")}}),c.a.createElement("span",{className:"checkmark"})),c.a.createElement("label",{className:"container-checkbox"},"Mushroom",c.a.createElement("input",{type:"checkbox",checked:t.mushroom,onChange:function(e){return i(e.currentTarget.checked,"mushroom")}}),c.a.createElement("span",{className:"checkmark"})),c.a.createElement("label",{className:"container-checkbox"},"Cheese",c.a.createElement("input",{type:"checkbox",checked:t.cheese,onChange:function(e){return i(e.currentTarget.checked,"cheese")}}),c.a.createElement("span",{className:"checkmark"})),c.a.createElement("button",{onClick:function(){return n.push("/checkout")},className:"proceedToCheckout"},"Proceed to Checkout")))}var P=a(24),T=a.n(P);function B(e){var t=e.ingredients,a=Object(d.f)(),i=Object(n.useState)(!1),r=Object(l.a)(i,2),o=r[0],s=r[1];return c.a.createElement("div",{style:{padding:50,display:"flex"}},c.a.createElement("div",{style:{flex:1}},c.a.createElement("div",null,c.a.createElement("h1",{style:{fontFamily:"Comfortaa"}},"My Ingredient"),0===Object.keys(t).reduce((function(e,a){return e+t[a]?1:0}),0)&&c.a.createElement("p",null,"No ingredients Selected"),Object.keys(t).map((function(e){return t[e]&&c.a.createElement("p",null,e[0].toUpperCase(),e.substr(1))})),c.a.createElement("button",{className:"proceedToCheckout",onClick:function(){return a.push("/")}},"Go Back"),c.a.createElement("button",{onClick:function(){return s(!0)},className:"proceedToCheckout",style:{marginLeft:10}},"Confirm"))),c.a.createElement("div",{style:{flex:1}},o&&c.a.createElement("div",{style:{textAlign:"center"}},c.a.createElement("img",{src:T.a,alt:"pizzaman",height:"300px"}),c.a.createElement("div",{style:{fontFamily:"Open Sans Condensed",fontSize:35}},"We have received your order, Thank you"),c.a.createElement("div",{style:{fontFamily:"Comfortaa"}},"Order #",Math.round(1e5*Math.random())),c.a.createElement("div",{style:{fontFamily:"Indie Flower",fontSize:20}},"Will be ready in 20-30 min."))))}var j=function(){var e=Object(n.useState)({basil:!1,cheese:!1,mushroom:!1,olive:!1,pineapple:!1,tomato:!1}),t=Object(l.a)(e,2),a=t[0],i=t[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("ingredients");e&&i(JSON.parse(e))}),[]),c.a.createElement("div",null,c.a.createElement(m,null),c.a.createElement(p.a,null,c.a.createElement(d.c,null,c.a.createElement(d.a,{exact:!0,path:"/"},c.a.createElement(S,{ingredients:a,setIngredients:i})),c.a.createElement(d.a,{path:"/checkout"},c.a.createElement(B,{ingredients:a})))))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(j,null)),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.d56edc77.chunk.js.map