(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{o:()=>n});const t=()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.setAttribute("class","container"),e.appendChild(t);const n=document.createElement("h1");n.textContent="The Second Best Pizza Restaurant in this city",t.appendChild(n),n.setAttribute("class","title");const o=document.createElement("img");o.setAttribute("src","/src/pizza.jpeg"),t.appendChild(o);const a=document.createElement("p");a.textContent="We'll admit, there is one other pizza restaurant that is better than ours. But, it gets really busy, and let's be honest, 2nd best is better than none at all. Or like you have to wait a really long time but you're hungry now. We will (almost) always get you your order in a reasonable amount of time. We get busy but not that busy. Just imagine, delicous, 2nd best pizza, delivered in slightly less time than other places. We have no specific guarantee regarding the time it might take for you pizza to arrive, but usually, it's like, not a bad wait at all. You'll be glad you ordered one of our delicious pizza pies once you try it.",t.appendChild(a)};(()=>{let e="goHome";const t=t=>{e=t.target.id,n(e)},o=document.querySelector("#content"),a=document.createElement("header");a.setAttribute("class","header"),o.appendChild(a);const c=document.createElement("nav");c.setAttribute("class","nav"),a.appendChild(c);const i=document.createElement("ul");i.setAttribute("class","ul"),c.appendChild(i);const s=document.createElement("li");s.setAttribute("class","nav-link"),i.appendChild(s);const r=document.createElement("a");s.appendChild(r),r.setAttribute("href","#"),r.setAttribute("id","goHome"),r.textContent="Home";const l=document.createElement("li");l.setAttribute("class","nav-link"),i.appendChild(l);const d=document.createElement("a");l.appendChild(d),d.setAttribute("href","#"),d.setAttribute("id","goContact"),d.textContent="Contact";const u=document.createElement("li");u.setAttribute("class","nav-link"),i.appendChild(u);const m=document.createElement("a");u.appendChild(m),m.setAttribute("href","#"),m.setAttribute("id","goMenu"),m.textContent="Menu",r.addEventListener("click",t),d.addEventListener("click",t),m.addEventListener("click",t)})(),t();const n=e=>{(()=>{const e=document.querySelector("#content"),t=document.querySelector(".container");e.removeChild(t)})(),"goContact"===e&&(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.setAttribute("class","container"),e.appendChild(t);const n=document.createElement("h1");n.textContent="How to contact us:",t.appendChild(n),n.setAttribute("class","title");const o=document.createElement("p");o.textContent="Email: secondbestpizza@myspace.com",t.appendChild(o)})(),"goHome"===e&&t(),"goMenu"===e&&(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.setAttribute("class","container"),e.appendChild(t);const n=document.createElement("h1");n.textContent="This is the food we have:",t.appendChild(n),n.setAttribute("class","title");const o=document.createElement("p");o.textContent="Pizza: Pepperoni or Extra Cheese",t.appendChild(o)})()}})();