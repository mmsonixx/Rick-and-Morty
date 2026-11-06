let e,t;let r=async(e=1)=>{let t=await fetch(`https://rickandmortyapi.com/api/character?page=${e}`);if(!t.ok)throw Error(`Failed to load characters: ${t.status}`);return await t.json()},a=e=>e.map(e=>`
        <li class="characters__item">
          <img
            src="${e.image}"
            alt="${e.name}"
            class="characters__img"
          >

          <h2 class="characters__title">
            <button
              type="button"
              class="characters__name"
              data-character-id="${e.id}"
            >
              ${e.name}
            </button>
          </h2>

          <p class="characters__info">
            <span>Origin:</span>
            ${e.origin?.name||"Unknown"}
          </p>

          <p class="characters__info">
            <span>Location:</span>
            ${e.location?.name||"Unknown"}
          </p>
        </li>
      `).join(""),s=[],o=null,i=e=>{o=e};var l={};let n=new URL(l=import.meta.resolve("geLTr")).href;function c(e,t){e.innerHTML="",t&&(e.innerHTML=`
    <div class="empty-state">
      <img
        src="${n}"
        alt="No results found"
        class="empty-state__img"
      >
      <p class="empty-state__text">
        Oops! Try looking for something else...
      </p>
    </div>
  `)}let d=!1,m=async()=>{let t=document.querySelector(".moreCharacters");if(d||null===o)return;d=!0;let a=o;t&&(t.disabled=!0,t.textContent="Loading...");try{var l;let n,c,d=await r(a);if(!d||!Array.isArray(d.results))throw Error("Invalid characters response");if(console.log("Characters received:",d.results.length),console.log("Page loaded:",a),l=d.results,n=new Set(s.map(e=>e.id)),c=l.filter(e=>!n.has(e.id)),s.push(...c),d.info?.next){let e=new URL(d.info.next);i(Number(e.searchParams.get("page")))}else i(null);"function"==typeof e&&e(),t&&(t.hidden=null===o)}catch(e){console.error("Error loading characters:",e)}finally{d=!1,t&&(t.disabled=!1,t.textContent="Load more")}},p=async(e=1)=>{try{let t=await fetch(`https://rickandmortyapi.com/api/episode?page=${e}`);if(!t.ok)throw Error(`HTTP error: ${t.status}`);return await t.json()}catch(e){return console.error("Error loading episodes:",e.message),null}};var h={};h=import.meta.resolve("6S6wK");var u={};u=import.meta.resolve("6ENN2");var v={};v=import.meta.resolve("dXEII");var y={};y=import.meta.resolve("HkCXI");var f={};f=import.meta.resolve("7Cnjm");var _={};_=import.meta.resolve("9OLSv");let w={1:new URL(h).href,2:new URL(u).href,3:new URL(v).href,4:new URL(y).href,5:new URL(f).href,6:new URL(_).href},L=e=>e.map(e=>{let t=Number(e.episode.split("E")[0].replace("S",""));return`
        <li class="episodes__item" data-episode-id="${e.id}">
          <img
            src="${w[t]||""}"
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
      `}).join(""),g=[],E=null,S=e=>{E=e},$=!1,k=async()=>{let e=document.querySelector(".moreEpisodes");if($||null===E)return;$=!0;let r=E;e&&(e.disabled=!0,e.textContent="Loading...");try{var a;let s,o,i=await p(r);if(!i||!Array.isArray(i.results))throw Error("Invalid episodes response");if(a=i.results,s=new Set(g.map(e=>e.id)),o=a.filter(e=>!s.has(e.id)),g.push(...o),i.info?.next){let e=new URL(i.info.next);S(Number(e.searchParams.get("page")))}else S(null);e&&(e.dataset.hasMore=String(null!==E)),"function"==typeof t&&t()}catch(e){console.error("Error loading episodes:",e)}finally{$=!1,e&&(e.disabled=!1,e.textContent="Load more")}};var R={};R=import.meta.resolve("hOAjN");var U={};U=import.meta.resolve("9OC1h");var q={};q=import.meta.resolve("cxvaY");var b={};b=import.meta.resolve("aEopQ");var C={};C=import.meta.resolve("f01il");var x={};x=import.meta.resolve("3zBNF");var A={};A=import.meta.resolve("h7sk4");var T={};T=import.meta.resolve("jlXok");var H={};H=import.meta.resolve("jIsMP");var j={};j=import.meta.resolve("93ObJ");var M={};M=import.meta.resolve("kRFaW");var P={};P=import.meta.resolve("dXGcu");var I={};I=import.meta.resolve("jiLEK");var N={};N=import.meta.resolve("3dMJM");var O={};O=import.meta.resolve("9D8sZ");var z={};z=import.meta.resolve("eARU8");var K={};K=import.meta.resolve("18UMt");var X={};X=import.meta.resolve("czWhV");var D={};D=import.meta.resolve("2K84g");var V={};V=import.meta.resolve("iXtYd");var Y={};Y=import.meta.resolve("dSLPw");var B={};B=import.meta.resolve("52oAi");var F={};F=import.meta.resolve("dnxKn");var J={};J=import.meta.resolve("kC5yI");var G={};G=import.meta.resolve("8UAej");var W={};W=import.meta.resolve("2y0Ir");var Q={};Q=import.meta.resolve("gq4Le");var Z={};Z=import.meta.resolve("8k7Vc");var ee={};ee=import.meta.resolve("eDKCu");var et={};et=import.meta.resolve("i2taz");let er={"Rick Sanchez":{desktop:[new URL(R).href,new URL(U).href],tablet:[new URL(q).href,new URL(b).href],mobile:[new URL(C).href,new URL(x).href]},"Morty Smith":{desktop:[new URL(A).href,new URL(T).href],tablet:[new URL(H).href,new URL(j).href],mobile:[new URL(M).href,new URL(P).href]},"Summer Smith":{desktop:[new URL(I).href,new URL(N).href],tablet:[new URL(O).href,new URL(z).href],mobile:[new URL(K).href,new URL(X).href]},"Beth Smith":{desktop:[new URL(D).href,new URL(V).href],tablet:[new URL(Y).href,new URL(B).href],mobile:[new URL(F).href,new URL(J).href]},"Jerry Smith":{desktop:[new URL(G).href,new URL(W).href],tablet:[new URL(Q).href,new URL(Z).href],mobile:[new URL(ee).href,new URL(et).href]}},ea=(e,t)=>{let r="",a="";if("character"===t)r=e.image,a=`./characters.html?id=${e.id}`;else{let t=e.episode?.match(/S(\d+)E\d+/i);r=w[t?Number(t[1]):1]||w[1],a=`./episodes.html?id=${e.id}`}return`
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
  `},es=new URL(l).href;(async()=>{let l,n,d,h,u,v,y,f,_,w,$,R,U,q;l=document.querySelector(".moreCharacters"),l?.addEventListener("click",m),n=document.querySelector(".moreEpisodes"),n?.addEventListener("click",k),d=document.querySelectorAll(".main-characters__subtitle"),h=document.querySelector("#mainCharacterImage"),u=document.querySelector(".main-characters__desktop"),v=document.querySelector(".main-characters__tablet"),y=document.querySelector(".main-characters__mobile"),h&&d.length&&u&&v&&y&&d.forEach(e=>{e.addEventListener("click",()=>{let t=e.textContent.trim(),r=er[t];r&&(u.srcset=`${r.desktop[0]} 1x, ${r.desktop[1]} 2x`,v.srcset=`${r.tablet[0]} 1x, ${r.tablet[1]} 2x`,y.srcset=`${r.mobile[0]} 1x, ${r.mobile[1]} 2x`,h.src=r.desktop[0],h.alt=t,d.forEach(e=>e.classList.remove("active")),e.classList.add("active"))})}),f=document.querySelector("#search-movie"),_=document.querySelector("[data-hero-default]"),w=document.querySelector("[data-hero-result]"),f&&_&&w&&f.addEventListener("input",async()=>{let e=f.value.trim();if(!e){_.hidden=!1,w.innerHTML="";return}let[t,r]=await Promise.all([(async e=>{try{let t=await fetch(`https://rickandmortyapi.com/api/character/?name=${encodeURIComponent(e)}`),r=await t.json();if(!t.ok)return null;return r}catch(e){return console.error("Characters API error:",e),null}})(e),(async e=>{try{let t=await fetch(`https://rickandmortyapi.com/api/episode/?name=${encodeURIComponent(e)}`),r=await t.json();if(!t.ok)return null;return r}catch(e){return console.error("Episodes API error:",e),null}})(e)]),a=t?.results?.[0],s=r?.results?.[0];a||s?(_.hidden=!0,w.innerHTML=`
        ${a?ea(a,"character"):""}
        ${s?ea(s,"episode"):""}
      `):(_.hidden=!0,w.innerHTML=`
        <div class="empty-state">
          <img
            src="${es}"
            alt="No results found"
            class="empty-state__img"
          />
          <p>Oops! Try looking for something else...</p>
        </div>
      `)}),(()=>{let t=document.querySelector(".characters__list"),r=document.querySelector("#search-characters"),i=document.querySelector(".characters__empty-state"),l=document.querySelector(".moreCharacters");if(!t||!r)return;let n=document.querySelectorAll(".select"),d=document.querySelectorAll(".option[data-status]"),m=document.querySelectorAll(".option[data-species]"),p=document.querySelectorAll(".option[data-type]"),h=document.querySelectorAll(".option[data-gender]"),u={status:"",species:"",type:"",gender:""};e=()=>{let e,n,d=(e=u,s.filter(t=>{let r=!e.status||t.status.toLowerCase()===e.status.toLowerCase(),a=!e.species||t.species.toLowerCase()===e.species.toLowerCase(),s=!e.type||t.type.toLowerCase().includes(e.type.toLowerCase()),o=!e.gender||t.gender.toLowerCase()===e.gender.toLowerCase();return r&&a&&s&&o}));n=r.value,t.innerHTML=a(d=d.filter(e=>e.name.toLowerCase().includes(n.trim().toLowerCase())));let m=0===d.length;c(i,m),l&&(l.hidden=m||!o)},r.addEventListener("input",e);let v=(t,r)=>{t.forEach(t=>{t.addEventListener("click",()=>{u={status:"",species:"",type:"",gender:""};let a=t.dataset[r];u[r]="all"===a?"":a,n.forEach(e=>{let t=e.querySelector(".selected-text");t&&(t.textContent=t.dataset.defaultText||"All"),e.classList.remove("active")}),t.closest(".select").querySelector(".selected-text").textContent=t.textContent.trim(),e()})})};v(d,"status"),v(m,"species"),v(p,"type"),v(h,"gender"),n.forEach(e=>{let t=e.querySelector(".selected"),r=e.querySelectorAll(".option");t.addEventListener("click",t=>{t.stopPropagation(),n.forEach(t=>{t!==e&&t.classList.remove("active")}),e.classList.toggle("active")}),r.forEach(t=>{t.addEventListener("click",()=>{e.classList.remove("active")})})}),document.addEventListener("click",e=>{e.target.closest(".select")||n.forEach(e=>{e.classList.remove("active")})})})(),(()=>{let e=document.querySelector(".episodes__list"),r=document.querySelector("#search-episodes"),a=document.querySelector(".episodes__empty-state"),s=document.querySelector(".moreEpisodes");if(!e||!r)return;let o=document.querySelectorAll(".episodes__filtering .select"),i={season:""};t=()=>{let t,o=g.filter(e=>{let t=e.episode.slice(1,3);return!i.season||t===i.season.padStart(2,"0")});t=r.value,e.innerHTML=L(o=o.filter(e=>e.name.toLowerCase().includes(t.trim().toLowerCase()))),c(a,0===o.length),s&&(s.hidden=0===o.length||"false"===s.dataset.hasMore)},r.addEventListener("input",t),o.forEach(e=>{let r=e.querySelector(".selected"),a=e.querySelectorAll(".option"),s=e.querySelector(".selected-text");r.addEventListener("click",t=>{t.stopPropagation(),o.forEach(t=>{t!==e&&t.classList.remove("active")}),e.classList.toggle("active")}),a.forEach(r=>{r.addEventListener("click",a=>{a.stopPropagation(),s.textContent=r.textContent.trim(),i.season=r.dataset.season,e.classList.remove("active"),t()})})})})(),$=document.querySelector(".characters__list"),R=document.querySelector(".character-modal-container"),$&&R&&($.addEventListener("click",async e=>{let t=e.target.closest(".characters__name");t&&(await (async e=>{let t=document.querySelector(".character-modal-container");try{let r=await fetch(`https://rickandmortyapi.com/api/character/${e}`),a=await r.json();if(!r.ok)throw Error("Character not found");t.innerHTML=`
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
      `).join("")}catch(e){console.error("Error rendering character modal:",e)}})(t.dataset.characterId),document.body.classList.add("modal-open"),R.classList.add("active"))}),R.addEventListener("click",e=>{(e.target.classList.contains("character-modal-container")||e.target.classList.contains("character-modal__overlay")||e.target.closest(".character-modal__close"))&&(R.classList.remove("active"),document.body.classList.remove("modal-open"))}),document.addEventListener("keydown",e=>{"Escape"===e.key&&(R.classList.remove("active"),document.body.classList.remove("modal-open"))})),U=document.querySelector(".episodes__list"),q=document.querySelector(".episode-modal-container"),U&&q&&(U.addEventListener("click",async e=>{let t=e.target.closest(".episodes__item");if(!t)return;let r=t.dataset.episodeId.match(/^\d+/)?.[0];console.log("Episode ID:",r),!r||await (async e=>{let t,r=document.querySelector(".episode-modal-container");if(!r)return!1;let a=await (async e=>{let t=`https://rickandmortyapi.com/api/episode/${e}`;try{console.log("Request URL:",t);let e=await fetch(t);if(console.log("Response status:",e.status),!e.ok)throw Error(`HTTP error: ${e.status}`);return await e.json()}catch(e){return console.error("Error loading episode:",e),null}})(e);if(!a)return!1;let s=await (async e=>{try{let t=e.map(e=>e.split("/").pop());if(!t.length)return[];let r=await fetch(`https://rickandmortyapi.com/api/character/${t.join(",")}`);if(!r.ok)throw Error(`HTTP error: ${r.status}`);let a=await r.json();return Array.isArray(a)?a:[a]}catch(e){return console.error("Error loading episode characters:",e.message),null}})(a.characters);return!!s&&(t=s.map(e=>`
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
  `,!0)})(r)&&(document.body.classList.add("modal-open"),q.classList.add("active"))}),q.addEventListener("click",e=>{(e.target.classList.contains("episode-modal__overlay")||e.target.closest(".episode-modal__close"))&&(q.classList.remove("active"),document.body.classList.remove("modal-open"))}),document.addEventListener("keydown",e=>{"Escape"===e.key&&(q.classList.remove("active"),document.body.classList.remove("modal-open"))})),(()=>{let e=document.querySelector("#scrollBtn");if(!e)return;let t=()=>{e.innerHTML=window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-10?'<i class="fa-solid fa-arrow-up"></i>':'<i class="fa-solid fa-arrow-down"></i>'};e.addEventListener("click",()=>{let e=window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-10;window.scrollTo({top:e?0:document.documentElement.scrollHeight,behavior:"smooth"})}),window.addEventListener("scroll",t),t()})(),await Promise.all([(async()=>{let e=document.querySelector(".characters__list"),t=document.querySelector(".moreCharacters");if(e)try{let l=await r(1);if(!l||!Array.isArray(l.results))throw Error("Invalid characters response");if(s=l.results,l.info?.next){let e=new URL(l.info.next);i(Number(e.searchParams.get("page")))}else i(null);e.innerHTML=a(s),t&&(t.hidden=null===o)}catch(e){console.error("Error rendering characters:",e)}})(),(async()=>{let e=document.querySelector(".episodes__list"),t=document.querySelector(".moreEpisodes");if(e)try{let r=await p(1);if(!r||!Array.isArray(r.results))throw Error("Invalid episodes response");if(g=r.results,r.info?.next){let e=new URL(r.info.next);S(Number(e.searchParams.get("page")))}else S(null);e.innerHTML=L(g),t&&(t.dataset.hasMore=String(null!==E),t.hidden=null===E)}catch(e){console.error("Error rendering episodes:",e)}})(),(async()=>{let e=document.querySelector("#exploreTrack");if(!e)return;let t=await (async()=>{try{let e=await fetch("https://rickandmortyapi.com/api/location");if(!e.ok)throw Error(`HTTP error: ${e.status}`);return await e.json()}catch(e){return console.error("Error loading locations:",e.message),null}})();if(!t?.results?.length)return;let r=new Set;t.results.forEach(e=>{e.residents.forEach(e=>{r.size<15&&r.add(e.split("/").pop())})});let a=[...r];if(a.length)try{let t=await fetch(`https://rickandmortyapi.com/api/character/${a.join(",")}`);if(!t.ok)throw Error(`HTTP error: ${t.status}`);let r=await t.json(),s=(Array.isArray(r)?r:[r]).map(({image:e,name:t})=>`
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
    `}catch(e){console.error("Error rendering explore:",e.message)}})()])})();
//# sourceMappingURL=Rick-and-Morty.0a63dd41.js.map
