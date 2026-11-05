let e,t;let r=async(e=1)=>{try{let t=await fetch(`https://rickandmortyapi.com/api/character?page=${e}`);if(!t.ok)throw Error("Failed to load characters");return await t.json()}catch(e){return console.error(e.message),null}},a=e=>e.map(e=>`
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
      `).join(""),s=[],o=2,i=e=>{o=e},l=new URL(import.meta.resolve("geLTr")).href;function c(e,t){e.innerHTML="",t&&(e.innerHTML=`
    <div class="empty-state">
      <img
        src="${l}"
        alt="No results found"
        class="empty-state__img"
      >
      <p class="empty-state__text">
        Oops! Try looking for something else...
      </p>
    </div>
  `)}let n=!1,d=async()=>{let t=document.querySelector(".moreCharacters");if(o&&!n){n=!0,t&&(t.disabled=!0);try{var a;let l=o,c=await r(l);if(!c||!Array.isArray(c.results))return;a=c.results,s.push(...a),i(c.info.next?l+1:null),e(),t&&(t.hidden=null===o)}catch(e){console.error("Error loading characters:",e)}finally{n=!1,t&&(t.disabled=!1)}}},m=async(e=1)=>{try{let t=await fetch(`https://rickandmortyapi.com/api/episode?page=${e}`);if(!t.ok)throw Error(`HTTP error: ${t.status}`);return await t.json()}catch(e){return console.error("Error loading episodes:",e.message),null}};var p={};p=import.meta.resolve("6S6wK");var u={};u=import.meta.resolve("6ENN2");var v={};v=import.meta.resolve("dXEII");var h={};h=import.meta.resolve("HkCXI");var _={};_=import.meta.resolve("7Cnjm");var y={};y=import.meta.resolve("9OLSv");let L={1:new URL(p).href,2:new URL(u).href,3:new URL(v).href,4:new URL(h).href,5:new URL(_).href,6:new URL(y).href},f=e=>e.map(e=>{let t=Number(e.episode.split("E")[0].replace("S",""));return`
        <li class="episodes__item" data-episode-id="${e.id}">
          <img
            src="${L[t]||""}"
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
      `}).join(""),w=[],g=2,S=async()=>{try{var e;let r=await m(g);if(!r||!Array.isArray(r.results))return;if(e=r.results,w.push(...e),t&&t(),null===r.info.next){document.querySelector(".moreEpisodes").hidden=!0;return}g++}catch(e){console.error("Error loading episodes:",e)}};var E={};E=import.meta.resolve("hOAjN");var k={};k=import.meta.resolve("9OC1h");var $={};$=import.meta.resolve("cxvaY");var q={};q=import.meta.resolve("aEopQ");var R={};R=import.meta.resolve("f01il");var b={};b=import.meta.resolve("3zBNF");var U={};U=import.meta.resolve("h7sk4");var C={};C=import.meta.resolve("jlXok");var x={};x=import.meta.resolve("jIsMP");var A={};A=import.meta.resolve("93ObJ");var T={};T=import.meta.resolve("kRFaW");var j={};j=import.meta.resolve("dXGcu");var M={};M=import.meta.resolve("jiLEK");var H={};H=import.meta.resolve("3dMJM");var I={};I=import.meta.resolve("9D8sZ");var P={};P=import.meta.resolve("eARU8");var N={};N=import.meta.resolve("18UMt");var z={};z=import.meta.resolve("czWhV");var O={};O=import.meta.resolve("2K84g");var K={};K=import.meta.resolve("iXtYd");var X={};X=import.meta.resolve("dSLPw");var D={};D=import.meta.resolve("52oAi");var F={};F=import.meta.resolve("dnxKn");var J={};J=import.meta.resolve("kC5yI");var B={};B=import.meta.resolve("8UAej");var G={};G=import.meta.resolve("2y0Ir");var V={};V=import.meta.resolve("gq4Le");var W={};W=import.meta.resolve("8k7Vc");var Y={};Y=import.meta.resolve("eDKCu");var Q={};Q=import.meta.resolve("i2taz");let Z={"Rick Sanchez":{desktop:[new URL(E).href,new URL(k).href],tablet:[new URL($).href,new URL(q).href],mobile:[new URL(R).href,new URL(b).href]},"Morty Smith":{desktop:[new URL(U).href,new URL(C).href],tablet:[new URL(x).href,new URL(A).href],mobile:[new URL(T).href,new URL(j).href]},"Summer Smith":{desktop:[new URL(M).href,new URL(H).href],tablet:[new URL(I).href,new URL(P).href],mobile:[new URL(N).href,new URL(z).href]},"Beth Smith":{desktop:[new URL(O).href,new URL(K).href],tablet:[new URL(X).href,new URL(D).href],mobile:[new URL(F).href,new URL(J).href]},"Jerry Smith":{desktop:[new URL(B).href,new URL(G).href],tablet:[new URL(V).href,new URL(W).href],mobile:[new URL(Y).href,new URL(Q).href]}};(async()=>{await (async()=>{let e=document.querySelector(".characters__list"),t=document.querySelector(".moreCharacters");if(!e)return;let l=await r(1);l&&Array.isArray(l.results)&&(s=l.results,i(l.info.next?2:null),e.innerHTML=a(s),t&&(t.hidden=null===o))})(),await (async()=>{let e=document.querySelector(".episodes__list");if(!e)return;let t=await m();if(!t||!t.info)return;let r=[...t.results];for(let e=2;e<=t.info.pages;e++){let t=await m(e);t&&r.push(...t.results)}r.sort((e,t)=>{let r=Number(e.episode.slice(1,3)),a=Number(t.episode.slice(1,3)),s=Number(e.episode.slice(4)),o=Number(t.episode.slice(4));return r!==a?r-a:s-o}),e.innerHTML=f(w=r)})(),(async()=>{let e=document.querySelector("#exploreTrack");if(!e)return;let t=await (async()=>{try{let e=await fetch("https://rickandmortyapi.com/api/location");if(!e.ok)throw Error(`HTTP error: ${e.status}`);return await e.json()}catch(e){return console.error("Error loading locations:",e.message),null}})();if(!t?.results?.length)return;let r=new Set;t.results.forEach(e=>{e.residents.forEach(e=>{r.size<15&&r.add(e.split("/").pop())})});let a=[...r];if(a.length)try{let t=await fetch(`https://rickandmortyapi.com/api/character/${a.join(",")}`);if(!t.ok)throw Error(`HTTP error: ${t.status}`);let r=await t.json(),s=(Array.isArray(r)?r:[r]).map(({image:e,name:t})=>`
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
    `}catch(e){console.error("Error rendering explore:",e.message)}})(),await (async()=>{let r,i,l,n,m,p,u,v,h,_=document.querySelector(".moreCharacters");_&&_.addEventListener("click",d);let y=document.querySelector(".moreEpisodes");y&&y.addEventListener("click",S),r=document.querySelectorAll(".main-characters__subtitle"),i=document.querySelector("#mainCharacterImage"),l=document.querySelector(".main-characters__desktop"),n=document.querySelector(".main-characters__tablet"),m=document.querySelector(".main-characters__mobile"),i&&r.length&&l&&n&&m&&r.forEach(e=>{e.addEventListener("click",()=>{let t=e.textContent.trim(),a=Z[t];a&&(l.srcset=`${a.desktop[0]} 1x, ${a.desktop[1]} 2x`,n.srcset=`${a.tablet[0]} 1x, ${a.tablet[1]} 2x`,m.srcset=`${a.mobile[0]} 1x, ${a.mobile[1]} 2x`,i.src=a.desktop[0],i.alt=t,r.forEach(e=>e.classList.remove("active")),e.classList.add("active"))})}),(()=>{let t=document.querySelector(".characters__list"),r=document.querySelector("#search-characters"),i=document.querySelector(".characters__empty-state"),l=document.querySelector(".moreCharacters");if(!t||!r)return;let n=document.querySelectorAll(".select"),d=document.querySelectorAll(".option[data-status]"),m=document.querySelectorAll(".option[data-species]"),p=document.querySelectorAll(".option[data-type]"),u=document.querySelectorAll(".option[data-gender]"),v={status:"",species:"",type:"",gender:""};e=()=>{let e,n,d=(e=v,s.filter(t=>{let r=!e.status||t.status.toLowerCase()===e.status.toLowerCase(),a=!e.species||t.species.toLowerCase()===e.species.toLowerCase(),s=!e.type||t.type.toLowerCase().includes(e.type.toLowerCase()),o=!e.gender||t.gender.toLowerCase()===e.gender.toLowerCase();return r&&a&&s&&o}));n=r.value,t.innerHTML=a(d=d.filter(e=>e.name.toLowerCase().includes(n.trim().toLowerCase())));let m=0===d.length;c(i,m),l&&(l.hidden=m||null===o)},r.addEventListener("input",e);let h=(t,r)=>{t.forEach(t=>{t.addEventListener("click",()=>{v={status:"",species:"",type:"",gender:""};let a=t.dataset[r];v[r]="all"===a?"":a,n.forEach(e=>{let t=e.querySelector(".selected-text");t&&(t.textContent=t.dataset.defaultText||"All"),e.classList.remove("active")}),t.closest(".select").querySelector(".selected-text").textContent=t.textContent.trim(),e()})})};h(d,"status"),h(m,"species"),h(p,"type"),h(u,"gender"),n.forEach(e=>{let t=e.querySelector(".selected"),r=e.querySelectorAll(".option");t.addEventListener("click",t=>{t.stopPropagation(),n.forEach(t=>{t!==e&&t.classList.remove("active")}),e.classList.toggle("active")}),r.forEach(t=>{t.addEventListener("click",()=>{e.classList.remove("active")})})}),document.addEventListener("click",e=>{e.target.closest(".select")||n.forEach(e=>{e.classList.remove("active")})})})(),(()=>{let e=document.querySelector(".episodes__list"),r=document.querySelector("#search-episodes"),a=document.querySelector(".episodes__empty-state"),s=document.querySelector(".moreEpisodes");if(!e||!r)return;let o=document.querySelectorAll(".episodes__filtering .select"),i={season:""};t=()=>{let t,o=w.filter(e=>{let t=e.episode.slice(1,3);return!i.season||t===i.season.padStart(2,"0")});t=r.value,e.innerHTML=f(o=o.filter(e=>e.name.toLowerCase().includes(t.trim().toLowerCase()))),c(a,0===o.length),s&&(s.hidden=0===o.length||"false"===s.dataset.hasMore)},r.addEventListener("input",t),o.forEach(e=>{let r=e.querySelector(".selected"),a=e.querySelectorAll(".option"),s=e.querySelector(".selected-text");r.addEventListener("click",t=>{t.stopPropagation(),o.forEach(t=>{t!==e&&t.classList.remove("active")}),e.classList.toggle("active")}),a.forEach(r=>{r.addEventListener("click",a=>{a.stopPropagation(),s.textContent=r.textContent.trim(),i.season=r.dataset.season,e.classList.remove("active"),t()})})})})(),p=document.querySelector(".characters__list"),u=document.querySelector(".character-modal-container"),p&&u&&(p.addEventListener("click",async e=>{let t=e.target.closest(".characters__name");t&&(await (async e=>{let t=document.querySelector(".character-modal-container");try{let r=await fetch(`https://rickandmortyapi.com/api/character/${e}`),a=await r.json();if(!r.ok)throw Error("Character not found");t.innerHTML=`
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
      `).join("")}catch(e){console.error("Error rendering character modal:",e)}})(t.dataset.characterId),document.body.classList.add("modal-open"),u.classList.add("active"))}),u.addEventListener("click",e=>{(e.target.classList.contains("character-modal-container")||e.target.classList.contains("character-modal__overlay")||e.target.closest(".character-modal__close"))&&(u.classList.remove("active"),document.body.classList.remove("modal-open"))}),document.addEventListener("keydown",e=>{"Escape"===e.key&&(u.classList.remove("active"),document.body.classList.remove("modal-open"))})),v=document.querySelector(".episodes__list"),h=document.querySelector(".episode-modal-container"),v&&h&&(v.addEventListener("click",async e=>{let t=e.target.closest(".episodes__item");if(!t)return;let r=t.dataset.episodeId.match(/^\d+/)?.[0];console.log("Episode ID:",r),!r||await (async e=>{let t,r=document.querySelector(".episode-modal-container");if(!r)return!1;let a=await (async e=>{let t=`https://rickandmortyapi.com/api/episode/${e}`;try{console.log("Request URL:",t);let e=await fetch(t);if(console.log("Response status:",e.status),!e.ok)throw Error(`HTTP error: ${e.status}`);return await e.json()}catch(e){return console.error("Error loading episode:",e),null}})(e);if(!a)return!1;let s=await (async e=>{try{let t=e.map(e=>e.split("/").pop());if(!t.length)return[];let r=await fetch(`https://rickandmortyapi.com/api/character/${t.join(",")}`);if(!r.ok)throw Error(`HTTP error: ${r.status}`);let a=await r.json();return Array.isArray(a)?a:[a]}catch(e){return console.error("Error loading episode characters:",e.message),null}})(a.characters);return!!s&&(t=s.map(e=>`
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
  `,!0)})(r)&&(document.body.classList.add("modal-open"),h.classList.add("active"))}),h.addEventListener("click",e=>{(e.target.classList.contains("episode-modal__overlay")||e.target.closest(".episode-modal__close"))&&(h.classList.remove("active"),document.body.classList.remove("modal-open"))}),document.addEventListener("keydown",e=>{"Escape"===e.key&&(h.classList.remove("active"),document.body.classList.remove("modal-open"))}))})()})();
//# sourceMappingURL=Rick-and-Morty.e95a4217.js.map
