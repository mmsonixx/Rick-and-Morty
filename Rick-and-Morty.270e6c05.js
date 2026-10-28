let e=async(e=1)=>{try{let r=await fetch(`https://rickandmortyapi.com/api/character?page=${e}`);return await r.json()}catch(e){console.log(e.message)}},r=e=>e.map(e=>`
        <li class="characters__item">
            <img src="${e.image}" alt="" class="characters__img">
            <h2 class="characters__title">${e.name}</h2>
            <p class="characters__info"><span>Origin:</span> ${e.origin.name}</p>
            <p class="characters__info"><span>Location:</span> Svazilend</p>
          </li>
      `).join(""),t=document.querySelector(".characters__list"),a=document.querySelector(".moreCharacters"),c=2,s=async()=>{let s=await e(c);if(s&&Array.isArray(s.results)){if(t.insertAdjacentHTML("beforeend",r(s.results)),null===s.info.next){a.hidden=!0;return}c++}};var i={};i=import.meta.resolve("1bLvo");var n={};n=import.meta.resolve("egoYc");var o={};o=import.meta.resolve("jNY8G");var l={};l=import.meta.resolve("eRTPX");var m={};m=import.meta.resolve("ayjM9");let h={"Rick Sanchez":new URL(i).href,"Morty Smith":new URL(n).href,"Summer Smith":new URL(o).href,"Beth Smith":new URL(l).href,"Jerry Smith":new URL(m).href};(async()=>{await (async()=>{let t=document.querySelector(".characters__list");t&&(t.innerHTML=r((await e()).results))})(),await (async()=>{let e,r,t=document.querySelector(".moreCharacters");t&&t.addEventListener("click",s),e=document.querySelectorAll(".main-characters__subtitle"),r=document.querySelector("#mainCharacterImage"),console.log("Имена:",e.length),console.log("Изображение:",r),r&&e.length&&e.forEach(t=>{t.addEventListener("click",()=>{let a=t.textContent.trim();h[a]&&(r.src=h[a],r.alt=a,e.forEach(e=>e.classList.remove("active")),t.classList.add("active"))})})})()})();
//# sourceMappingURL=Rick-and-Morty.270e6c05.js.map
