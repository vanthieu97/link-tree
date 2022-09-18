(()=>{"use strict";window.onload=async function(){console.log("jenkins: 001");const t=document.querySelector(".container"),e=document.getElementById("navProducts"),o=document.getElementById("navContacts"),c=document.getElementById("products"),n=document.getElementById("contacts");e.addEventListener("click",()=>{t.scrollTo({behavior:"smooth",top:c.offsetTop})}),o.addEventListener("click",()=>{t.scrollTo({behavior:"smooth",top:n.offsetTop})});try{const s=await fetch("https://api.npoint.io/9e5188f459ca27a8100c");var i=(await s.json())["products"];c.querySelector(".items").innerHTML=[...i].reduce((t,e)=>t+`<a href="${e.url}">
        <div class="item">
            <img src="${e.image}" alt="${e.title}" />
            <div class="item-title">${e.title}</div>
        </div>
    </a>`,""),document.querySelector(".loading").style.display="none",c.querySelector(".items").style.display="block"}catch(t){}}})();