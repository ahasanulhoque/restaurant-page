!function(e){var t={};function n(a){if(t[a])return t[a].exports;var d=t[a]={i:a,l:!1,exports:{}};return e[a].call(d.exports,d,d.exports,n),d.l=!0,d.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var d in e)n.d(a,d,function(t){return e[t]}.bind(null,d));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function a(e){let t=document.createElement("div"),n=document.createElement("img"),a=document.createElement("p");t.classList.add("tab-copy"),n.src="images/restaurant.jpg",a.innerHTML="Come down to the White Hart Lane! With excellent service and the\n                        best chefs in the city, you'll be sure to savor your meal. Make\n                        a reservation today!",t.appendChild(n),t.appendChild(a),e.appendChild(t)}n.r(t);let d=document.querySelector("#content");!function(e){let t=document.createElement("h1"),n=document.createElement("ul"),a=document.createElement("li"),d=document.createElement("li"),i=document.createElement("li");a.innerHTML="Home",d.innerHTML="Menu",i.innerHTML="Contact",n.id="navbar",a.id="home",d.id="menu",i.id="contact",a.classList.add("tab"),d.classList.add("tab"),i.classList.add("tab"),a.classList.add("tab-active"),t.innerHTML="The White Hart Lane",e.appendChild(t),n.appendChild(a),n.appendChild(d),n.appendChild(i),e.appendChild(n)}(d),a(d);let i=document.querySelector("#navbar");document.querySelectorAll(".tab");(()=>{let e;i.onclick=t=>{let n=t.target.getAttribute("id");"home"==n&&"home"!=e?(d.removeChild(d.lastChild),a(d),t.target.classList.add("tab-active"),document.getElementById("menu").classList.remove("tab-active"),document.getElementById("contact").classList.remove("tab-active"),e="home"):"menu"==n&&"menu"!=e?(d.removeChild(d.lastChild),function(e){let t=document.createElement("div");t.id="menu-content",t.classList.add("tab-copy");let n=document.createElement("div"),a=document.createElement("h2");a.innerHTML="Appetizers";let d=document.createElement("p");d.innerHTML="Spinach & artichoke dip with pita chips - $6";let i=document.createElement("p");i.innerHTML="Tomato bruschetta - $6",n.appendChild(a),n.appendChild(d),n.appendChild(i);let c=document.createElement("div"),l=document.createElement("h2");l.innerHTML="Entrees";let r=document.createElement("p");r.innerHTML="Pasta carbonara - $12";let o=document.createElement("p");o.innerHTML="Filet mignon - $18";let m=document.createElement("p");m.innerHTML="Shrimp scampi (served with rice or linguini) - $13",c.appendChild(l),c.appendChild(r),c.appendChild(o),c.appendChild(m);let u=document.createElement("div"),p=document.createElement("h2");p.innerHTML="Desserts";let s=document.createElement("p");s.innerHTML="New York cheesecake - $9";let h=document.createElement("p");h.innerHTML="Creme brulee - $10",u.appendChild(p),u.appendChild(s),u.appendChild(h);let b=document.createElement("div"),v=document.createElement("h2");v.innerHTML="Beverages";let C=document.createElement("p");C.innerHTML="Wine (white or red) - $12";let L=document.createElement("p");L.innerHTML="Beer - $7";let E=document.createElement("p");E.innerHTML="Iced tea - $4",b.appendChild(v),b.appendChild(C),b.appendChild(L),b.appendChild(E),t.appendChild(n),t.appendChild(c),t.appendChild(u),t.appendChild(b),e.appendChild(t)}(d),t.target.classList.add("tab-active"),document.getElementById("home").classList.remove("tab-active"),document.getElementById("contact").classList.remove("tab-active"),e="menu"):"contact"==n&&"contact"!=e&&(d.removeChild(d.lastChild),function(e){let t=document.createElement("div");t.classList.add("tab-copy");let n=document.createElement("div"),a=document.createElement("p"),d=document.createElement("p");a.innerHTML="Phone: (XXX)-XXX-XXXX",d.innerHTML="contact@whitehartlanerestaurant.com",n.appendChild(a),n.appendChild(d);let i=document.createElement("div"),c=document.createElement("a"),l=document.createElement("a");c.setAttribute("href","https://github.com/ahasanulhoque"),c.setAttribute("target","_blank"),c.innerHTML="Github",l.setAttribute("href","https://www.linkedin.com/in/ahasanul-hoque-823741a0"),l.setAttribute("target","_blank"),l.innerHTML="LinkedIn",i.appendChild(c),i.appendChild(l),t.appendChild(n),t.appendChild(i),e.appendChild(t)}(d),t.target.classList.add("tab-active"),document.getElementById("home").classList.remove("tab-active"),document.getElementById("menu").classList.remove("tab-active"),e="contact")}})()}]);