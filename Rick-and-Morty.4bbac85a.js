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
      `).join(""),a=[],s=document.querySelector(".characters__list"),o=document.querySelector(".moreCharacters"),i=2,c=async()=>{let e=await t(i);if(e&&Array.isArray(e.results)){var c;if(c=e.results,a.push(...c),s.insertAdjacentHTML("beforeend",r(e.results)),null===e.info.next){o.hidden=!0;return}i++}},l=async(e=1)=>{try{let t=await fetch(`https://rickandmortyapi.com/api/episode?page=${e}`);if(!t.ok)throw Error(`HTTP error: ${t.status}`);return await t.json()}catch(e){return console.error("Error loading episodes:",e.message),null}};var n={};n=import.meta.resolve("6S6wK");var d={};d=import.meta.resolve("6ENN2");var m={};m=import.meta.resolve("dXEII");var p={};p=import.meta.resolve("HkCXI");var v={};v=import.meta.resolve("7Cnjm");var h={};h=import.meta.resolve("9OLSv");let u={1:new URL(n).href,2:new URL(d).href,3:new URL(m).href,4:new URL(p).href,5:new URL(v).href,6:new URL(h).href},_=e=>e.map(e=>{let t=Number(e.episode.split("E")[0].replace("S",""));return`
        <li class="episodes__item" data-episode-id="${e.id}>
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
      `}).join(""),y=[],L=2,f=async()=>{try{var t;let r=await l(L);if(!r||!Array.isArray(r.results))return;if(t=r.results,y.push(...t),e&&e(),null===r.info.next){document.querySelector(".moreEpisodes").hidden=!0;return}L++}catch(e){console.error("Error loading episodes:",e)}};var w={};w=import.meta.resolve("hOAjN");var g={};g=import.meta.resolve("9OC1h");var E={};E=import.meta.resolve("cxvaY");var S={};S=import.meta.resolve("aEopQ");var $={};$=import.meta.resolve("f01il");var k={};k=import.meta.resolve("3zBNF");var R={};R=import.meta.resolve("h7sk4");var b={};b=import.meta.resolve("jlXok");var U={};U=import.meta.resolve("jIsMP");var q={};q=import.meta.resolve("93ObJ");var C={};C=import.meta.resolve("kRFaW");var A={};A=import.meta.resolve("dXGcu");var j={};j=import.meta.resolve("jiLEK");var T={};T=import.meta.resolve("3dMJM");var x={};x=import.meta.resolve("9D8sZ");var H={};H=import.meta.resolve("eARU8");var M={};M=import.meta.resolve("18UMt");var I={};I=import.meta.resolve("czWhV");var N={};N=import.meta.resolve("2K84g");var P={};P=import.meta.resolve("iXtYd");var z={};z=import.meta.resolve("dSLPw");var O={};O=import.meta.resolve("52oAi");var K={};K=import.meta.resolve("dnxKn");var X={};X=import.meta.resolve("kC5yI");var D={};D=import.meta.resolve("8UAej");var F={};F=import.meta.resolve("2y0Ir");var J={};J=import.meta.resolve("gq4Le");var V={};V=import.meta.resolve("8k7Vc");var W={};W=import.meta.resolve("eDKCu");var B={};B=import.meta.resolve("i2taz");let G={"Rick Sanchez":{desktop:[new URL(w).href,new URL(g).href],tablet:[new URL(E).href,new URL(S).href],mobile:[new URL($).href,new URL(k).href]},"Morty Smith":{desktop:[new URL(R).href,new URL(b).href],tablet:[new URL(U).href,new URL(q).href],mobile:[new URL(C).href,new URL(A).href]},"Summer Smith":{desktop:[new URL(j).href,new URL(T).href],tablet:[new URL(x).href,new URL(H).href],mobile:[new URL(M).href,new URL(I).href]},"Beth Smith":{desktop:[new URL(N).href,new URL(P).href],tablet:[new URL(z).href,new URL(O).href],mobile:[new URL(K).href,new URL(X).href]},"Jerry Smith":{desktop:[new URL(D).href,new URL(F).href],tablet:[new URL(J).href,new URL(V).href],mobile:[new URL(W).href,new URL(B).href]}};(async()=>{await (async()=>{let e=document.querySelector(".characters__list");e&&(e.innerHTML=r(a=(await t()).results))})(),await (async()=>{let e=document.querySelector(".episodes__list");if(!e)return;let t=await l();if(!t||!t.info)return;let r=[...t.results];for(let e=2;e<=t.info.pages;e++){let t=await l(e);t&&r.push(...t.results)}r.sort((e,t)=>{let r=Number(e.episode.slice(1,3)),a=Number(t.episode.slice(1,3)),s=Number(e.episode.slice(4)),o=Number(t.episode.slice(4));return r!==a?r-a:s-o}),e.innerHTML=_(y=r)})(),(async()=>{let e=document.querySelector("#exploreTrack");if(!e)return;let t=await (async()=>{try{let e=await fetch("https://rickandmortyapi.com/api/location");if(!e.ok)throw Error(`HTTP error: ${e.status}`);return await e.json()}catch(e){return console.error("Error loading locations:",e.message),null}})();if(!t?.results?.length)return;let r=new Set;t.results.forEach(e=>{e.residents.forEach(e=>{r.size<15&&r.add(e.split("/").pop())})});let a=[...r];if(a.length)try{let t=await fetch(`https://rickandmortyapi.com/api/character/${a.join(",")}`);if(!t.ok)throw Error(`HTTP error: ${t.status}`);let r=await t.json(),s=(Array.isArray(r)?r:[r]).map(({image:e,name:t})=>`
          <div class="explore__item">
            <img src="${e}" alt="${t}" loading="lazy">
          </div>
        `).join("");e.innerHTML=`
      <div class="explore__group">
        ${s}
      </div>

      <div class="explore__group" aria-hidden="true">
        ${s}
      </div>
    `}catch(e){console.error("Error rendering explore:",e.message)}})(),await (async()=>{let t,s,o,i,l,n,d,m,p,v=document.querySelector(".moreCharacters");v&&v.addEventListener("click",c);let h=document.querySelector(".moreEpisodes");h&&h.addEventListener("click",f),t=document.querySelectorAll(".main-characters__subtitle"),s=document.querySelector("#mainCharacterImage"),o=document.querySelector(".main-characters__desktop"),i=document.querySelector(".main-characters__tablet"),l=document.querySelector(".main-characters__mobile"),s&&t.length&&o&&i&&l&&t.forEach(e=>{e.addEventListener("click",()=>{let r=e.textContent.trim(),a=G[r];a&&(o.srcset=`${a.desktop[0]} 1x, ${a.desktop[1]} 2x`,i.srcset=`${a.tablet[0]} 1x, ${a.tablet[1]} 2x`,l.srcset=`${a.mobile[0]} 1x, ${a.mobile[1]} 2x`,s.src=a.desktop[0],s.alt=r,t.forEach(e=>e.classList.remove("active")),e.classList.add("active"))})}),(()=>{let e=document.querySelector(".characters__list"),t=document.querySelector("#search-characters");if(!e||!t)return;let s=document.querySelectorAll(".select"),o=document.querySelectorAll(".option[data-status]"),i=document.querySelectorAll(".option[data-species]"),c=document.querySelectorAll(".option[data-type]"),l=document.querySelectorAll(".option[data-gender]"),n={status:"",species:"",type:"",gender:""},d=()=>{let s;console.log("Обновление персонажей");let o=a.filter(e=>{let t=!n.status||e.status.toLowerCase()===n.status.toLowerCase(),r=!n.species||e.species.toLowerCase()===n.species.toLowerCase(),a=!n.type||e.type.toLowerCase().includes(n.type.toLowerCase()),s=!n.gender||"all"===n.gender||e.gender.toLowerCase()===n.gender.toLowerCase();return t&&r&&a&&s});s=t.value,console.log("Найдено:",(o=o.filter(e=>e.name.toLowerCase().includes(s.trim().toLowerCase()))).length),e.innerHTML=r(o)};t.addEventListener("input",()=>{console.log("INPUT EVENT WORKS"),d()});let m=(e,t)=>{e.forEach(e=>{e.addEventListener("click",()=>{n[t]=e.dataset[t],d()})})};m(o,"status"),m(i,"species"),m(c,"type"),m(l,"gender"),s.forEach(e=>{let t=e.querySelector(".selected"),r=e.querySelectorAll(".option"),a=e.querySelector(".selected-text");t.addEventListener("click",()=>{s.forEach(t=>{t!==e&&t.classList.remove("active")}),e.classList.toggle("active")}),r.forEach(t=>{t.addEventListener("click",()=>{a.textContent=t.textContent.trim(),e.classList.remove("active")})})}),document.addEventListener("click",e=>{e.target.closest(".select")||s.forEach(e=>{e.classList.remove("active")})})})(),(()=>{let t=document.querySelector(".episodes__list"),r=document.querySelector("#search-episodes");if(!t||!r)return;let a=document.querySelectorAll(".episodes__filtering .select"),s={season:""};e=()=>{let e;console.log("Season:",s.season),console.log("Episodes count:",y.length),console.log("Available seasons:",[...new Set(y.map(e=>e.episode.slice(1,3)))]);let a=y.filter(e=>{let t=e.episode.slice(1,3);return!s.season||t===s.season.padStart(2,"0")});e=r.value,console.log("Filtered count:",(a=a.filter(t=>t.name.toLowerCase().includes(e.trim().toLowerCase()))).length),t.innerHTML=_(a)},r.addEventListener("input",e),a.forEach(t=>{let r=t.querySelector(".selected"),o=t.querySelectorAll(".option"),i=t.querySelector(".selected-text");r.addEventListener("click",e=>{e.stopPropagation(),a.forEach(e=>{e!==t&&e.classList.remove("active")}),t.classList.toggle("active")}),o.forEach(r=>{r.addEventListener("click",a=>{a.stopPropagation(),i.textContent=r.textContent.trim(),s.season=r.dataset.season,t.classList.remove("active"),e()})})})})(),n=document.querySelector(".characters__list"),d=document.querySelector(".character-modal-container"),n&&d&&(n.addEventListener("click",async e=>{let t=e.target.closest(".characters__name");t&&(await (async e=>{let t=document.querySelector(".character-modal-container");try{let r=await fetch(`https://rickandmortyapi.com/api/character/${e}`),a=await r.json();if(!r.ok)throw Error("Character not found");t.innerHTML=`
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
      `).join("")}catch(e){console.error("Error rendering character modal:",e)}})(t.dataset.characterId),document.body.classList.add("modal-open"),d.classList.add("active"))}),d.addEventListener("click",e=>{(e.target.classList.contains("character-modal-container")||e.target.classList.contains("character-modal__overlay")||e.target.closest(".character-modal__close"))&&(d.classList.remove("active"),document.body.classList.remove("modal-open"))}),document.addEventListener("keydown",e=>{"Escape"===e.key&&(d.classList.remove("active"),document.body.classList.remove("modal-open"))})),m=document.querySelector(".episodes__list"),p=document.querySelector(".episode-modal-container"),m&&p&&(m.addEventListener("click",async e=>{let t=e.target.closest(".episodes__item");if(!t)return;let r=t.dataset.episodeId.match(/^\d+/)?.[0];console.log("Episode ID:",r),!r||await (async e=>{let t,r=document.querySelector(".episode-modal-container");if(!r)return!1;let a=await (async e=>{let t=`https://rickandmortyapi.com/api/episode/${e}`;try{console.log("Request URL:",t);let e=await fetch(t);if(console.log("Response status:",e.status),!e.ok)throw Error(`HTTP error: ${e.status}`);return await e.json()}catch(e){return console.error("Error loading episode:",e),null}})(e);if(!a)return!1;let s=await (async e=>{try{let t=e.map(e=>e.split("/").pop());if(!t.length)return[];let r=await fetch(`https://rickandmortyapi.com/api/character/${t.join(",")}`);if(!r.ok)throw Error(`HTTP error: ${r.status}`);let a=await r.json();return Array.isArray(a)?a:[a]}catch(e){return console.error("Error loading episode characters:",e.message),null}})(a.characters);return!!s&&(t=s.map(e=>`
        <div class="episode-modal__character">
          <img
            src="${e.image}"
            alt="${e.name}"
          />
          <span>${e.name}</span>
        </div>
      `).join(""),r.innerHTML=`
    <div class="episode-modal__overlay">
      <div class="episode-modal">

        <button class="episode-modal__close" type="button">
          &times;
        </button>

        <div class="episode-modal__content">

          <h2 class="episode-modal__title">
            ${a.name}
          </h2>

          <div class="episode-modal__info">
            <div>
              <span>Id</span>
              <p>${a.id}</p>
            </div>

            <div>
              <span>Air date</span>
              <p>${a.air_date}</p>
            </div>
          </div>

          <h3 class="episode-modal__subtitle">
            Characters
          </h3>

          <span class="episode-modal__label">
            Major Characters
          </span>

          <div class="episode-modal__characters">
            ${t}
          </div>

        </div>
      </div>
    </div>
  `,!0)})(r)&&(document.body.classList.add("modal-open"),p.classList.add("active"))}),p.addEventListener("click",e=>{(e.target.classList.contains("episode-modal__overlay")||e.target.closest(".episode-modal__close"))&&(p.classList.remove("active"),document.body.classList.remove("modal-open"))}),document.addEventListener("keydown",e=>{"Escape"===e.key&&(p.classList.remove("active"),document.body.classList.remove("modal-open"))}))})()})();
//# sourceMappingURL=Rick-and-Morty.4bbac85a.js.map
