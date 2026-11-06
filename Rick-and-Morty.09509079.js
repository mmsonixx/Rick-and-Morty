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
      `).join(""),s=[],o=2,i=e=>{o=e};var c={};let l=new URL(c=import.meta.resolve("geLTr")).href;function n(e,t){e.innerHTML="",t&&(e.innerHTML=`
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
  `)}let d=!1,m=async()=>{let t=document.querySelector(".moreCharacters");if(o&&!d){d=!0,t&&(t.disabled=!0);try{var a;let c=o,l=await r(c);if(!l||!Array.isArray(l.results))return;a=l.results,s.push(...a),i(l.info.next?c+1:null),e(),t&&(t.hidden=null===o)}catch(e){console.error("Error loading characters:",e)}finally{d=!1,t&&(t.disabled=!1)}}},p=async(e=1)=>{try{let t=await fetch(`https://rickandmortyapi.com/api/episode?page=${e}`);if(!t.ok)throw Error(`HTTP error: ${t.status}`);return await t.json()}catch(e){return console.error("Error loading episodes:",e.message),null}};var u={};u=import.meta.resolve("6S6wK");var h={};h=import.meta.resolve("6ENN2");var v={};v=import.meta.resolve("dXEII");var _={};_=import.meta.resolve("HkCXI");var y={};y=import.meta.resolve("7Cnjm");var f={};f=import.meta.resolve("9OLSv");let L={1:new URL(u).href,2:new URL(h).href,3:new URL(v).href,4:new URL(_).href,5:new URL(y).href,6:new URL(f).href},w=e=>e.map(e=>{let t=Number(e.episode.split("E")[0].replace("S",""));return`
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
      `}).join(""),g=[],$=2,S=async()=>{try{var e;let r=await p($);if(!r||!Array.isArray(r.results))return;if(e=r.results,g.push(...e),t&&t(),null===r.info.next){document.querySelector(".moreEpisodes").hidden=!0;return}$++}catch(e){console.error("Error loading episodes:",e)}};var E={};E=import.meta.resolve("hOAjN");var k={};k=import.meta.resolve("9OC1h");var R={};R=import.meta.resolve("cxvaY");var q={};q=import.meta.resolve("aEopQ");var U={};U=import.meta.resolve("f01il");var b={};b=import.meta.resolve("3zBNF");var C={};C=import.meta.resolve("h7sk4");var A={};A=import.meta.resolve("jlXok");var T={};T=import.meta.resolve("jIsMP");var x={};x=import.meta.resolve("93ObJ");var j={};j=import.meta.resolve("kRFaW");var H={};H=import.meta.resolve("dXGcu");var M={};M=import.meta.resolve("jiLEK");var I={};I=import.meta.resolve("3dMJM");var P={};P=import.meta.resolve("9D8sZ");var N={};N=import.meta.resolve("eARU8");var O={};O=import.meta.resolve("18UMt");var z={};z=import.meta.resolve("czWhV");var K={};K=import.meta.resolve("2K84g");var X={};X=import.meta.resolve("iXtYd");var D={};D=import.meta.resolve("dSLPw");var V={};V=import.meta.resolve("52oAi");var F={};F=import.meta.resolve("dnxKn");var J={};J=import.meta.resolve("kC5yI");var B={};B=import.meta.resolve("8UAej");var G={};G=import.meta.resolve("2y0Ir");var W={};W=import.meta.resolve("gq4Le");var Y={};Y=import.meta.resolve("8k7Vc");var Q={};Q=import.meta.resolve("eDKCu");var Z={};Z=import.meta.resolve("i2taz");let ee={"Rick Sanchez":{desktop:[new URL(E).href,new URL(k).href],tablet:[new URL(R).href,new URL(q).href],mobile:[new URL(U).href,new URL(b).href]},"Morty Smith":{desktop:[new URL(C).href,new URL(A).href],tablet:[new URL(T).href,new URL(x).href],mobile:[new URL(j).href,new URL(H).href]},"Summer Smith":{desktop:[new URL(M).href,new URL(I).href],tablet:[new URL(P).href,new URL(N).href],mobile:[new URL(O).href,new URL(z).href]},"Beth Smith":{desktop:[new URL(K).href,new URL(X).href],tablet:[new URL(D).href,new URL(V).href],mobile:[new URL(F).href,new URL(J).href]},"Jerry Smith":{desktop:[new URL(B).href,new URL(G).href],tablet:[new URL(W).href,new URL(Y).href],mobile:[new URL(Q).href,new URL(Z).href]}},et=(e,t)=>{let r="",a="";if("character"===t)r=e.image,a=`./characters.html?id=${e.id}`;else{let t=e.episode?.match(/S(\d+)E\d+/i);r=L[t?Number(t[1]):1]||L[1],a=`./episodes.html?id=${e.id}`}return`
    <div class="hero__preview">
      <img
        src="${r}"
        alt="${e.name}"
        class="hero__preview-img"
      />

      <div class="hero__preview-info">
        <span>${"character"===t?"CHARACTER":"EPISODE"}</span>

        <h2>${e.name}</h2>

        ${"character"===t?`<p><span>Status:</span> ${e.status}</p>
               <p><span>Species:</span> ${e.species}</p>`:`<p>${e.episode}</p>
               <p>${e.air_date}</p>`}

        <a href="${a}">
          ${"character"===t?"View character":"View episode"}
        </a>
      </div>
    </div>
  `},er=new URL(c).href;(async()=>{await (async()=>{let e=document.querySelector(".characters__list"),t=document.querySelector(".moreCharacters");if(!e)return;let c=await r(1);c&&Array.isArray(c.results)&&(s=c.results,i(c.info.next?2:null),e.innerHTML=a(s),t&&(t.hidden=null===o))})(),await (async()=>{let e=document.querySelector(".episodes__list");if(!e)return;let t=await p();if(!t||!t.info)return;let r=[...t.results];for(let e=2;e<=t.info.pages;e++){let t=await p(e);t&&r.push(...t.results)}r.sort((e,t)=>{let r=Number(e.episode.slice(1,3)),a=Number(t.episode.slice(1,3)),s=Number(e.episode.slice(4)),o=Number(t.episode.slice(4));return r!==a?r-a:s-o}),e.innerHTML=w(g=r)})(),await (async()=>{let e=document.querySelector("#exploreTrack");if(!e)return;let t=await (async()=>{try{let e=await fetch("https://rickandmortyapi.com/api/location");if(!e.ok)throw Error(`HTTP error: ${e.status}`);return await e.json()}catch(e){return console.error("Error loading locations:",e.message),null}})();if(!t?.results?.length)return;let r=new Set;t.results.forEach(e=>{e.residents.forEach(e=>{r.size<15&&r.add(e.split("/").pop())})});let a=[...r];if(a.length)try{let t=await fetch(`https://rickandmortyapi.com/api/character/${a.join(",")}`);if(!t.ok)throw Error(`HTTP error: ${t.status}`);let r=await t.json(),s=(Array.isArray(r)?r:[r]).map(({image:e,name:t})=>`
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
    `}catch(e){console.error("Error rendering explore:",e.message)}})(),await (async()=>{let r,i,c,l,d,p,u,h,v,_,y,f,L=document.querySelector(".moreCharacters");L&&L.addEventListener("click",m);let $=document.querySelector(".moreEpisodes");$&&$.addEventListener("click",S),r=document.querySelectorAll(".main-characters__subtitle"),i=document.querySelector("#mainCharacterImage"),c=document.querySelector(".main-characters__desktop"),l=document.querySelector(".main-characters__tablet"),d=document.querySelector(".main-characters__mobile"),i&&r.length&&c&&l&&d&&r.forEach(e=>{e.addEventListener("click",()=>{let t=e.textContent.trim(),a=ee[t];a&&(c.srcset=`${a.desktop[0]} 1x, ${a.desktop[1]} 2x`,l.srcset=`${a.tablet[0]} 1x, ${a.tablet[1]} 2x`,d.srcset=`${a.mobile[0]} 1x, ${a.mobile[1]} 2x`,i.src=a.desktop[0],i.alt=t,r.forEach(e=>e.classList.remove("active")),e.classList.add("active"))})}),p=document.querySelector("#search-movie"),u=document.querySelector("[data-hero-default]"),h=document.querySelector("[data-hero-result]"),p&&u&&h&&p.addEventListener("input",async()=>{let e=p.value.trim();if(!e){u.hidden=!1,h.innerHTML="";return}let[t,r]=await Promise.all([(async e=>{try{let t=await fetch(`https://rickandmortyapi.com/api/character/?name=${encodeURIComponent(e)}`),r=await t.json();if(!t.ok)return null;return r}catch(e){return console.error("Characters API error:",e),null}})(e),(async e=>{try{let t=await fetch(`https://rickandmortyapi.com/api/episode/?name=${encodeURIComponent(e)}`),r=await t.json();if(!t.ok)return null;return r}catch(e){return console.error("Episodes API error:",e),null}})(e)]),a=t?.results?.[0],s=r?.results?.[0];a||s?(u.hidden=!0,h.innerHTML=`
        ${a?et(a,"character"):""}
        ${s?et(s,"episode"):""}
      `):(u.hidden=!0,h.innerHTML=`
        <div class="empty-state">
          <img
            src="${er}"
            alt="No results found"
            class="empty-state__img"
          />
          <p>Oops! Try looking for something else...</p>
        </div>
      `)}),(()=>{let t=document.querySelector(".characters__list"),r=document.querySelector("#search-characters"),i=document.querySelector(".characters__empty-state"),c=document.querySelector(".moreCharacters");if(!t||!r)return;let l=document.querySelectorAll(".select"),d=document.querySelectorAll(".option[data-status]"),m=document.querySelectorAll(".option[data-species]"),p=document.querySelectorAll(".option[data-type]"),u=document.querySelectorAll(".option[data-gender]"),h={status:"",species:"",type:"",gender:""};e=()=>{let e,l,d=(e=h,s.filter(t=>{let r=!e.status||t.status.toLowerCase()===e.status.toLowerCase(),a=!e.species||t.species.toLowerCase()===e.species.toLowerCase(),s=!e.type||t.type.toLowerCase().includes(e.type.toLowerCase()),o=!e.gender||t.gender.toLowerCase()===e.gender.toLowerCase();return r&&a&&s&&o}));l=r.value,t.innerHTML=a(d=d.filter(e=>e.name.toLowerCase().includes(l.trim().toLowerCase())));let m=0===d.length;n(i,m),c&&(c.hidden=m||null===o)},r.addEventListener("input",e);let v=(t,r)=>{t.forEach(t=>{t.addEventListener("click",()=>{h={status:"",species:"",type:"",gender:""};let a=t.dataset[r];h[r]="all"===a?"":a,l.forEach(e=>{let t=e.querySelector(".selected-text");t&&(t.textContent=t.dataset.defaultText||"All"),e.classList.remove("active")}),t.closest(".select").querySelector(".selected-text").textContent=t.textContent.trim(),e()})})};v(d,"status"),v(m,"species"),v(p,"type"),v(u,"gender"),l.forEach(e=>{let t=e.querySelector(".selected"),r=e.querySelectorAll(".option");t.addEventListener("click",t=>{t.stopPropagation(),l.forEach(t=>{t!==e&&t.classList.remove("active")}),e.classList.toggle("active")}),r.forEach(t=>{t.addEventListener("click",()=>{e.classList.remove("active")})})}),document.addEventListener("click",e=>{e.target.closest(".select")||l.forEach(e=>{e.classList.remove("active")})})})(),(()=>{let e=document.querySelector(".episodes__list"),r=document.querySelector("#search-episodes"),a=document.querySelector(".episodes__empty-state"),s=document.querySelector(".moreEpisodes");if(!e||!r)return;let o=document.querySelectorAll(".episodes__filtering .select"),i={season:""};t=()=>{let t,o=g.filter(e=>{let t=e.episode.slice(1,3);return!i.season||t===i.season.padStart(2,"0")});t=r.value,e.innerHTML=w(o=o.filter(e=>e.name.toLowerCase().includes(t.trim().toLowerCase()))),n(a,0===o.length),s&&(s.hidden=0===o.length||"false"===s.dataset.hasMore)},r.addEventListener("input",t),o.forEach(e=>{let r=e.querySelector(".selected"),a=e.querySelectorAll(".option"),s=e.querySelector(".selected-text");r.addEventListener("click",t=>{t.stopPropagation(),o.forEach(t=>{t!==e&&t.classList.remove("active")}),e.classList.toggle("active")}),a.forEach(r=>{r.addEventListener("click",a=>{a.stopPropagation(),s.textContent=r.textContent.trim(),i.season=r.dataset.season,e.classList.remove("active"),t()})})})})(),v=document.querySelector(".characters__list"),_=document.querySelector(".character-modal-container"),v&&_&&(v.addEventListener("click",async e=>{let t=e.target.closest(".characters__name");t&&(await (async e=>{let t=document.querySelector(".character-modal-container");try{let r=await fetch(`https://rickandmortyapi.com/api/character/${e}`),a=await r.json();if(!r.ok)throw Error("Character not found");t.innerHTML=`
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
      `).join("")}catch(e){console.error("Error rendering character modal:",e)}})(t.dataset.characterId),document.body.classList.add("modal-open"),_.classList.add("active"))}),_.addEventListener("click",e=>{(e.target.classList.contains("character-modal-container")||e.target.classList.contains("character-modal__overlay")||e.target.closest(".character-modal__close"))&&(_.classList.remove("active"),document.body.classList.remove("modal-open"))}),document.addEventListener("keydown",e=>{"Escape"===e.key&&(_.classList.remove("active"),document.body.classList.remove("modal-open"))})),y=document.querySelector(".episodes__list"),f=document.querySelector(".episode-modal-container"),y&&f&&(y.addEventListener("click",async e=>{let t=e.target.closest(".episodes__item");if(!t)return;let r=t.dataset.episodeId.match(/^\d+/)?.[0];console.log("Episode ID:",r),!r||await (async e=>{let t,r=document.querySelector(".episode-modal-container");if(!r)return!1;let a=await (async e=>{let t=`https://rickandmortyapi.com/api/episode/${e}`;try{console.log("Request URL:",t);let e=await fetch(t);if(console.log("Response status:",e.status),!e.ok)throw Error(`HTTP error: ${e.status}`);return await e.json()}catch(e){return console.error("Error loading episode:",e),null}})(e);if(!a)return!1;let s=await (async e=>{try{let t=e.map(e=>e.split("/").pop());if(!t.length)return[];let r=await fetch(`https://rickandmortyapi.com/api/character/${t.join(",")}`);if(!r.ok)throw Error(`HTTP error: ${r.status}`);let a=await r.json();return Array.isArray(a)?a:[a]}catch(e){return console.error("Error loading episode characters:",e.message),null}})(a.characters);return!!s&&(t=s.map(e=>`
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
  `,!0)})(r)&&(document.body.classList.add("modal-open"),f.classList.add("active"))}),f.addEventListener("click",e=>{(e.target.classList.contains("episode-modal__overlay")||e.target.closest(".episode-modal__close"))&&(f.classList.remove("active"),document.body.classList.remove("modal-open"))}),document.addEventListener("keydown",e=>{"Escape"===e.key&&(f.classList.remove("active"),document.body.classList.remove("modal-open"))}))})()})();
//# sourceMappingURL=Rick-and-Morty.09509079.js.map
