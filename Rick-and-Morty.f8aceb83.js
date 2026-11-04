let e;let t=async(e=1)=>{try{let t=await fetch(`https://rickandmortyapi.com/api/character?page=${e}`);return await t.json()}catch(e){console.log(e.message)}},r=e=>e.map(e=>`
        <li class="characters__item">
            <img src="${e.image}" alt="" class="characters__img">
             <h2 class="characters__title">
  <button
    type="button"
    class="characters__name"
    data-character-id="${e.id}"
  >
    ${e.name}
  </button>
</h2>
            <p class="characters__info"><span>Origin:</span> ${e.origin.name}</p>
            <p class="characters__info"><span>Location:</span> Svazilend</p>
          </li>
      `).join(""),a=[],s=document.querySelector(".characters__list"),o=document.querySelector(".moreCharacters"),c=2,l=async()=>{let e=await t(c);if(e&&Array.isArray(e.results)){var l;if(l=e.results,a.push(...l),s.insertAdjacentHTML("beforeend",r(e.results)),null===e.info.next){o.hidden=!0;return}c++}},i=async(e=1)=>{try{let t=await fetch(`https://rickandmortyapi.com/api/episode?page=${e}`);if(!t.ok)throw Error(`HTTP error: ${t.status}`);return await t.json()}catch(e){return console.error("Error loading episodes:",e.message),null}};var n={};n=import.meta.resolve("6S6wK");var d={};d=import.meta.resolve("6ENN2");var m={};m=import.meta.resolve("dXEII");var p={};p=import.meta.resolve("HkCXI");var v={};v=import.meta.resolve("7Cnjm");var h={};h=import.meta.resolve("9OLSv");let u={1:new URL(n).href,2:new URL(d).href,3:new URL(m).href,4:new URL(p).href,5:new URL(v).href,6:new URL(h).href},L=e=>e.map(e=>{let t=Number(e.episode.split("E")[0].replace("S",""));return`
        <li class="episodes__item">
          <img
            src="${u[t]||""}"
            alt="${e.name}"
            class="episodes__img"
          >

          <h2 class="episodes__title">${e.name}</h2>

         <div class="episodes__meta">
    <p class="episodes__details">
      <span>Season</span>
      ${t}
    </p>

    <p class="episodes__info">
      <span>Air date</span>
      ${e.air_date}
    </p>
  </div>
        </li>
      `}).join(""),_=[],f=2,y=async()=>{try{var t;let r=await i(f);if(!r||!Array.isArray(r.results))return;if(t=r.results,_.push(...t),e&&e(),null===r.info.next){document.querySelector(".moreEpisodes").hidden=!0;return}f++}catch(e){console.error("Error loading episodes:",e)}};var w={};w=import.meta.resolve("hOAjN");var g={};g=import.meta.resolve("9OC1h");var S={};S=import.meta.resolve("cxvaY");var E={};E=import.meta.resolve("aEopQ");var U={};U=import.meta.resolve("f01il");var R={};R=import.meta.resolve("3zBNF");var k={};k=import.meta.resolve("h7sk4");var b={};b=import.meta.resolve("jlXok");var q={};q=import.meta.resolve("jIsMP");var $={};$=import.meta.resolve("93ObJ");var C={};C=import.meta.resolve("kRFaW");var A={};A=import.meta.resolve("dXGcu");var x={};x=import.meta.resolve("jiLEK");var j={};j=import.meta.resolve("3dMJM");var M={};M=import.meta.resolve("9D8sZ");var T={};T=import.meta.resolve("eARU8");var N={};N=import.meta.resolve("18UMt");var H={};H=import.meta.resolve("czWhV");var I={};I=import.meta.resolve("2K84g");var O={};O=import.meta.resolve("iXtYd");var P={};P=import.meta.resolve("dSLPw");var K={};K=import.meta.resolve("52oAi");var z={};z=import.meta.resolve("dnxKn");var X={};X=import.meta.resolve("kC5yI");var F={};F=import.meta.resolve("8UAej");var J={};J=import.meta.resolve("2y0Ir");var V={};V=import.meta.resolve("gq4Le");var W={};W=import.meta.resolve("8k7Vc");var B={};B=import.meta.resolve("eDKCu");var D={};D=import.meta.resolve("i2taz");let G={"Rick Sanchez":{desktop:[new URL(w).href,new URL(g).href],tablet:[new URL(S).href,new URL(E).href],mobile:[new URL(U).href,new URL(R).href]},"Morty Smith":{desktop:[new URL(k).href,new URL(b).href],tablet:[new URL(q).href,new URL($).href],mobile:[new URL(C).href,new URL(A).href]},"Summer Smith":{desktop:[new URL(x).href,new URL(j).href],tablet:[new URL(M).href,new URL(T).href],mobile:[new URL(N).href,new URL(H).href]},"Beth Smith":{desktop:[new URL(I).href,new URL(O).href],tablet:[new URL(P).href,new URL(K).href],mobile:[new URL(z).href,new URL(X).href]},"Jerry Smith":{desktop:[new URL(F).href,new URL(J).href],tablet:[new URL(V).href,new URL(W).href],mobile:[new URL(B).href,new URL(D).href]}};(async()=>{await (async()=>{let e=document.querySelector(".characters__list");e&&(e.innerHTML=r(a=(await t()).results))})(),await (async()=>{let e=document.querySelector(".episodes__list");if(!e)return;let t=await i();if(!t||!t.info)return;let r=[...t.results];for(let e=2;e<=t.info.pages;e++){let t=await i(e);t&&r.push(...t.results)}r.sort((e,t)=>{let r=Number(e.episode.slice(1,3)),a=Number(t.episode.slice(1,3)),s=Number(e.episode.slice(4)),o=Number(t.episode.slice(4));return r!==a?r-a:s-o}),e.innerHTML=L(_=r)})(),await (async()=>{let t,s,o,c,i,n,d,m=document.querySelector(".moreCharacters");m&&m.addEventListener("click",l);let p=document.querySelector(".moreEpisodes");p&&p.addEventListener("click",y),t=document.querySelectorAll(".main-characters__subtitle"),s=document.querySelector("#mainCharacterImage"),o=document.querySelector(".main-characters__desktop"),c=document.querySelector(".main-characters__tablet"),i=document.querySelector(".main-characters__mobile"),s&&t.length&&o&&c&&i&&t.forEach(e=>{e.addEventListener("click",()=>{let r=e.textContent.trim(),a=G[r];a&&(o.srcset=`${a.desktop[0]} 1x, ${a.desktop[1]} 2x`,c.srcset=`${a.tablet[0]} 1x, ${a.tablet[1]} 2x`,i.srcset=`${a.mobile[0]} 1x, ${a.mobile[1]} 2x`,s.src=a.desktop[0],s.alt=r,t.forEach(e=>e.classList.remove("active")),e.classList.add("active"))})}),(()=>{let e=document.querySelector(".characters__list"),t=document.querySelector("#search-characters");if(!e||!t)return;let s=document.querySelectorAll(".select"),o=document.querySelectorAll(".option[data-status]"),c=document.querySelectorAll(".option[data-species]"),l=document.querySelectorAll(".option[data-type]"),i=document.querySelectorAll(".option[data-gender]"),n={status:"",species:"",type:"",gender:""},d=()=>{let s;console.log("Обновление персонажей");let o=a.filter(e=>{let t=!n.status||e.status.toLowerCase()===n.status.toLowerCase(),r=!n.species||e.species.toLowerCase()===n.species.toLowerCase(),a=!n.type||e.type.toLowerCase().includes(n.type.toLowerCase()),s=!n.gender||"all"===n.gender||e.gender.toLowerCase()===n.gender.toLowerCase();return t&&r&&a&&s});s=t.value,console.log("Найдено:",(o=o.filter(e=>e.name.toLowerCase().includes(s.trim().toLowerCase()))).length),e.innerHTML=r(o)};t.addEventListener("input",()=>{console.log("INPUT EVENT WORKS"),d()});let m=(e,t)=>{e.forEach(e=>{e.addEventListener("click",()=>{n[t]=e.dataset[t],d()})})};m(o,"status"),m(c,"species"),m(l,"type"),m(i,"gender"),s.forEach(e=>{let t=e.querySelector(".selected"),r=e.querySelectorAll(".option"),a=e.querySelector(".selected-text");t.addEventListener("click",()=>{s.forEach(t=>{t!==e&&t.classList.remove("active")}),e.classList.toggle("active")}),r.forEach(t=>{t.addEventListener("click",()=>{a.textContent=t.textContent.trim(),e.classList.remove("active")})})}),document.addEventListener("click",e=>{e.target.closest(".select")||s.forEach(e=>{e.classList.remove("active")})})})(),(()=>{let t=document.querySelector(".episodes__list"),r=document.querySelector("#search-episodes");if(!t||!r)return;let a=document.querySelectorAll(".episodes__filtering .select"),s={season:""};e=()=>{let e;console.log("Season:",s.season),console.log("Episodes count:",_.length),console.log("Available seasons:",[...new Set(_.map(e=>e.episode.slice(1,3)))]);let a=_.filter(e=>{let t=e.episode.slice(1,3);return!s.season||t===s.season.padStart(2,"0")});e=r.value,console.log("Filtered count:",(a=a.filter(t=>t.name.toLowerCase().includes(e.trim().toLowerCase()))).length),t.innerHTML=L(a)},r.addEventListener("input",e),a.forEach(t=>{let r=t.querySelector(".selected"),o=t.querySelectorAll(".option"),c=t.querySelector(".selected-text");r.addEventListener("click",e=>{e.stopPropagation(),a.forEach(e=>{e!==t&&e.classList.remove("active")}),t.classList.toggle("active")}),o.forEach(r=>{r.addEventListener("click",a=>{a.stopPropagation(),c.textContent=r.textContent.trim(),s.season=r.dataset.season,t.classList.remove("active"),e()})})})})(),n=document.querySelector(".characters__list"),d=document.querySelector(".character-modal-container"),n&&d&&(n.addEventListener("click",async e=>{let t=e.target.closest(".characters__name");t&&(await (async e=>{let t=document.querySelector(".character-modal-container");try{let r=await fetch(`https://rickandmortyapi.com/api/character/${e}`),a=await r.json();if(!r.ok)throw Error("Character not found");t.innerHTML=`
    <div class="character-modal__overlay">
      <div class="character-modal">

        <button class="character-modal__close" type="button">
          &times;
        </button>

        <div class="character-modal__left">

          <img
            src="${a.image}"
            alt="${a.name}"
            class="character-modal__image"
          >

          <div class="character-modal__details">

            <div class="character-modal__detail">
              <span>Status</span>
              <p>${a.status}</p>
            </div>

            <div class="character-modal__detail">
              <span>Species</span>
              <p>${a.species}</p>
            </div>

            <div class="character-modal__detail">
              <span>Gender</span>
              <p>${a.gender}</p>
            </div>

            <div class="character-modal__detail">
              <span>Origin</span>
              <p${a.origin.name.replace(/\s*\(.*?\)/g,"")}</p>
            </div>

            <div class="character-modal__detail">
              <span>Location</span>
              <p>${a.location.name.replace(/\s*\(.*?\)/g,"")}</p>
            </div>

            <div class="character-modal__detail">
              <span>Type</span>
              <p>${a.type||"Unknown"}</p>
            </div>

          </div>
        </div>

        <div class="character-modal__right">

          <h2 class="character-modal__title">Episodes</h2>

          <ul class="character-modal__episodes"></ul>

        </div>

      </div>
    </div>
  `;let s=await Promise.all(a.episode.map(async e=>(await fetch(e)).json()));t.querySelector(".character-modal__episodes").innerHTML=s.map(e=>`
        <li class="episode-card">

          <h3 class="episode-card__name">
            ${e.name}
          </h3>

          <div class="episode-card__info">

            <div>
              <span>Season</span>
              <p>${e.episode.match(/S(\d+)E/)?.[1]||"?"}</p>
            </div>

            <div>
              <span>Air date</span>
              <p>${e.air_date}</p>
            </div>

          </div>

        </li>
      `).join("")}catch(e){console.error("Error rendering character modal:",e)}})(t.dataset.characterId),document.body.classList.add("modal-open"),d.classList.add("active"))}),d.addEventListener("click",e=>{(e.target.classList.contains("character-modal-container")||e.target.classList.contains("character-modal__overlay")||e.target.closest(".character-modal__close"))&&(d.classList.remove("active"),document.body.classList.remove("modal-open"))}),document.addEventListener("keydown",e=>{"Escape"===e.key&&(d.classList.remove("active"),document.body.classList.remove("modal-open"))}))})()})();
//# sourceMappingURL=Rick-and-Morty.f8aceb83.js.map
