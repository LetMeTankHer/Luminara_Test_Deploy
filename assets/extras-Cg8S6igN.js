import{e as n,s as B}from"./utilities-B1GvWzLx.js";async function J(r,d){try{let u=function(l){return l?n(b+l):""},m=function(){const l=b+(o.avatars?.default||"assets/ui/default_avatar.png"),I=window.location.pathname.endsWith("audio.html"),v=`${b}audio.html?hero=${encodeURIComponent(r)}&skin=${encodeURIComponent(d)}`,a=o.audio_type||"standard",C={standard:"bg-gray-700 text-white",variant:"bg-blue-400 text-white",unique:"bg-amber-500 text-white"},s=n(a.charAt(0).toUpperCase()+a.slice(1));return`
      <div class="flex items-center justify-between mb-6 gap-12">
        <div class="flex items-center gap-4 w-full sm:w-auto">
          <img src="${n(l)}" alt="${n($.name)}" class="w-20 h-20 rounded-full object-cover flex-shrink-0"/>
          <div class="flex flex-col">
            <div class="flex items-end gap-2 flex-wrap">
              <h3 class="text-xl font-bold text-text whitespace-nowrap">${n($.name)}</h3>
              <span class="px-2 py-[2px] text-xs font-semibold rounded-full shadow-md ${C[a]||"bg-gray-600 text-white"} whitespace-nowrap">
                ${s}
              </span>
            </div>
            <p class="text-sm text-text-dull">${n(o.name)}</p>
          </div>
        </div>
        ${I?"":`<a href="${v}" class="px-3 py-1 bg-primary text-white rounded-lg hover:bg-primary/80 transition self-start sm:self-auto whitespace-nowrap">Browse All Heroes →</a>`}
      </div>`},c=function(){return _.length?_.map(l=>`
        <div class="audio-item flex items-center gap-4 mb-4 transition w-full min-w-0 p-4">
          <button class="custom-play-btn w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg text-white hover:scale-105 transition-all shrink-0">
            <i class="fa-solid fa-play"></i>
          </button>
          <div class="flex flex-col w-full min-w-0">
            <p class="text-text font-bold truncate">${n(l.name)||"Unnamed Audio"}</p>
            <p class="text-text-dull text-sm truncate">${n(l.subtitle)||"..."}</p>
            <p class="text-text-dull text-xs italic truncate">${n(l.translation)||"..."}</p>
            <audio class="w-full max-w-full" src="${u(l.file)}" preload="none"></audio>
          </div>
        </div>
      `).join(""):'<p class="text-text-dull italic">No background audios found.</p>'},f=function(l,I,v){const a=Object.keys(l);if(!a.length)return`<p class="text-text-dull italic">No ${n(I.toLowerCase())} found.</p>`;const C=a.map((p,E)=>`
        <button class="lang-tab hover:bg-primary px-3 py-1 rounded ${E===0?"bg-primary text-white":"bg-bg text-text"}" data-lang="${n(p)}" data-section="${n(v)}">
          ${n(p.replace("_"," ").charAt(0).toUpperCase()+p.slice(1))}
        </button>
      `).join(""),s=a.map((p,E)=>{const D=l[p],q=E===0?"":"hidden";return D.length?`<div id="${n(v)}-${n(p)}" class="lang-section ${q}">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${D.map(T=>`
              <div class="audio-item flex items-center gap-4 mb-4 transition w-full min-w-0">
                <button class="custom-play-btn w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg text-white hover:scale-105 transition-all shrink-0">
                  <i class="fa-solid fa-play"></i>
                </button>
                <div class="flex flex-col w-full min-w-0">
                  <p class="text-text font-bold truncate">${n(T.name)||"Unnamed Audio"}</p>
                  <p class="text-text-dull text-sm truncate">${n(T.subtitle)||"..."}</p>
                  <p class="text-text-dull text-xs italic truncate">${n(T.translation)||"..."}</p>
                  <audio class="w-full max-w-full" src="${u(T.file)}" preload="none"></audio>
                </div>
              </div>
            `).join("")}
          </div>
        </div>`:`<div id="${n(v)}-${n(p)}" class="lang-section ${q}">
            <p class="text-text-dull italic">No ${n(p)} audios found.</p>
          </div>`}).join("");return`
        <div class="languageTabs sticky top-0 bg-background z-10 py-4 flex gap-2 overflow-x-auto mb-3 text-text-dull border-b-2 border-dotted">${C}</div>
        <div class="languageSections">${s}</div>
      `};const b="/Luminara/",N=await fetch(`${b}data/heroes_index.json`),{heroes:A}=await N.json(),w=A.find(l=>l.name.toLowerCase()===r.toLowerCase());if(!w)return`<p class="text-red-400">Hero "${n(r)}" not found.</p>`;const $=await(await fetch(`${b}data/heroes/${w.details_file}`)).json(),S=Object.keys($.skins).find(l=>l.toLowerCase()===d.toLowerCase());if(!S)return`<p class="text-red-400">Skin "${n(d)}" not found for "${n(r)}".</p>`;const o=$.skins[S],t=o.audio;async function e(l){if(!l)return null;try{const I=await fetch(b+l);return I.ok?await I.json():null}catch{return null}}const x=await e(t.hero_selection?.background),y=await e(t.hero_selection?.dialog),i=await e(t.in_game_dialog),h=await e(t.main_interface_dialog),_=x?.hero_selection?.background||[],L=y?.hero_selection?.dialog||{},j=i?.in_game_dialog||{},k=h?.main_interface_dialog||{};return`
      ${m()}
      <section class="space-y-8" id="audioContent">
        <div id="heroSelection" class="max-w-full overflow-hidden">
          <h2 class="text-2xl font-bold text-primary mb-4">Hero Selection</h2>
          <div id="heroSelectionBackground">
            <h3 class="text-lg font-semibold text-text mb-4">Background</h3>
            ${c()}
          </div>
          <div id="heroSelectionDialog" class="space-y-2">
            ${o.audio_type==="variant"?`<h3 class="text-lg font-semibold text-text mb-4">Dialog</h3>
                 <p class="text-text-dull italic">Hero Selection Dialog: Same as Standard</p>`:`<h3 class="text-lg font-semibold text-text mb-4">Dialog</h3>
                 <div class="max-h-[300px] overflow-y-auto scrollbar-thin-alt scrollbar-thumb-primary scrollbar-track-background px-4">
                   ${f(L,"Hero Selection Dialog","heroSelDialog")}
                 </div>`}
          </div>
        </div>
        <div class="w-full h-[2px] bg-primary mt-6"></div>
        <div id="inGameDialog">
          <h2 class="text-2xl font-bold text-primary mb-4">In-Game Dialog</h2>
          ${o.audio_type==="variant"?'<p class="text-text-dull italic">In-Game Dialog: Same as Standard</p>':`<div class="space-y-4 max-h-[350px] overflow-y-auto scrollbar-thin-alt scrollbar-thumb-primary scrollbar-track-background px-4">
                   ${f(j,"In Game Dialog","inGameDialog")}
                 </div>`}
        </div>
        <div class="w-full h-[2px] bg-primary mt-6"></div>
        <div id="mainInterfaceDialog">
          <h2 class="text-2xl font-bold text-primary mb-4">Main Interface Dialog</h2>
          ${o.audio_type==="variant"?'<p class="text-text-dull italic">Main Interface Dialog: Same as Standard</p>':`<div class="space-y-4 max-h-[350px] overflow-y-auto scrollbar-thin-alt scrollbar-thumb-primary scrollbar-track-background px-4">
                   ${f(k,"Main Interface Dialog","mainInterfaceDialog")}
                 </div>`}
        </div>
      </section>
    `}catch(u){return console.error("Audio preview error:",u),'<p class="text-red-400">Failed to load audio preview.</p>'}}async function P(r={}){const{containerId:d=null,searchInputId:u=null,limit:m=null}=r,c="/Luminara/",f=await fetch(`${c}data/heroes_index.json`),{heroes:b}=await f.json(),A=(m?b.slice(-m).reverse():b).map(async o=>{const e=await(await fetch(`${c}data/heroes/${o.details_file}`)).json(),x=e.name||o.name,y=Object.entries(e.skins).map(([i,h])=>({...h,skinKey:i,name:h.name||i})).sort((i,h)=>(i.release_order||0)-(h.release_order||0));return{id:o.id,name:x,skinsArray:y}}),w=await Promise.all(A);if(!d)return`
      <div class="flex flex-col gap-6 w-full">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-2xl font-bold text-text">Latest Splash Arts</h2>
          <a href="splashart.html"
             class="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg shadow-md hover:bg-primary/80 transition-all duration-200">
            Browse Splash Arts
            <i class="fa-solid fa-arrow-right text-xs"></i>
          </a>
        </div>

        ${w.map(o=>`
            <div class="mt-8">
              <h3 class="text-xl font-bold text-text mb-6">${o.name}</h3>
              <div class="flex flex-wrap justify-center gap-6">
                ${o.skinsArray.map(t=>`
                    <div class="flex flex-col items-center gap-2 group">
                      <a href="${c+(t.splash_art?.default||"")}" target="_blank" rel="noopener noreferrer" class="block">
                        <div class="relative w-[320px] h-[180px] rounded-lg overflow-hidden transform transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.45)]">
                          <img src="${c+(t.splash_art?.default||"")}" alt="${t.name}" class="w-full h-full object-cover object-center" loading="lazy"/>
                          <div class="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none"></div>
                        </div>
                      </a>
                      <span class="text-text text-sm text-center truncate w-[320px]">${t.name}</span>
                    </div>
                  `).join("")}
              </div>
            </div>
          `).join("")}
      </div>
    `;const g=document.getElementById(d),$=u?document.getElementById(u):null;if(!g)return;const S=o=>{g.innerHTML="",o.forEach(t=>{const e=document.createElement("div");e.className="mt-8";const x=document.createElement("h3");x.className="text-xl font-bold text-text mb-8",x.textContent=t.name,e.appendChild(x);const y=document.createElement("div");y.className="flex flex-wrap justify-center gap-4",e.appendChild(y),t.skinsArray.forEach(h=>{if(h.painted_of)return;const _=document.createElement("div");_.className="flex flex-col items-center gap-2";const L=document.createElement("a");L.href=B(c+(h.splash_art?.default||"")),L.target="_blank",L.rel="noopener noreferrer";const j=document.createElement("div");j.className="relative w-[280px] h-[155px] rounded overflow-hidden transform transition-transform duration-300 group hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(16,185,129,0.45)]";const k=document.createElement("img");k.src=B(c+(h.splash_art?.default||"")),k.alt=h.name||"Skin",k.className="w-full h-full object-cover object-center transition-opacity duration-700 opacity-0",k.loading="lazy",j.appendChild(k);const l=t.skinsArray.filter(s=>s.painted_of===h.name);l.forEach(s=>{const p=document.createElement("img");p.src=B(c+(s.splash_art?.default||"")),p.alt=s.name||"",p.className="absolute inset-0 w-full h-full object-cover object-center opacity-0 pointer-events-none transition-opacity duration-700",p.loading="lazy",j.appendChild(p),s._imgElement=p});const I=document.createElement("div");I.className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none",j.appendChild(I);const v=document.createElement("span");v.textContent=h.name||"Unnamed Skin",v.className="text-text text-sm text-center",_.appendChild(L),L.appendChild(j),_.appendChild(v),y.appendChild(_);const a=[k,...l.map(s=>s._imgElement)],C=[h.name,...l.map(s=>s.name)];if(a.length>1){let s=0;Promise.all(a.map(p=>p.complete||new Promise(E=>p.onload=E))).then(()=>{a[0].style.opacity="1";let p=setInterval(()=>{a.forEach((E,D)=>E.style.opacity=D===s?"1":"0"),v.textContent=C[s],s=(s+1)%a.length},2500);j.addEventListener("mouseenter",()=>{clearInterval(p);let E=0;const D=setInterval(()=>{a.forEach((q,T)=>q.style.opacity=T===E?"1":"0"),v.textContent=C[E],E=(E+1)%a.length},800);j.addEventListener("mouseleave",()=>{clearInterval(D),p=setInterval(()=>{a.forEach((q,T)=>q.style.opacity=T===s?"1":"0"),v.textContent=C[s],s=(s+1)%a.length},2500)},{once:!0})})})}else k.style.opacity="1"});const i=document.createElement("div");i.className="w-full h-[2px] bg-text-dull/40 mt-6",e.appendChild(i),g.appendChild(e)})};S(w),$&&$.addEventListener("input",o=>{const t=o.target.value.toLowerCase(),e=w.filter(x=>x.name.toLowerCase().includes(t));S(e)})}async function R(r={}){const{containerId:d=null,searchInputId:u=null,limit:m=null}=r,c="/Luminara/",f=await fetch(`${c}data/heroes_index.json`),{heroes:b}=await f.json(),A=(m?b.slice(-m).reverse():b).map(async o=>{const e=await(await fetch(`${c}data/heroes/${o.details_file}`)).json(),x=Object.entries(e.skins).map(([y,i])=>({...i,skinKey:y,name:i.name||y,image:B(c+(i.portraits?.default||""))})).sort((y,i)=>(y.release_order||0)-(i.release_order||0));return{id:o.id,name:e.name||o.name,skinsArray:x}}),w=await Promise.all(A);if(!d)return`
      <div class="flex flex-col gap-6 w-full">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-2xl font-bold text-text">Latest Hero Portraits</h2>
          <a href="${c}portrait.html" 
             class="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg shadow-md hover:bg-primary/80 transition-all duration-200">
            Browse Portraits
            <i class="fa-solid fa-arrow-right text-xs"></i>
          </a>
        </div>

        ${w.map(o=>`
            <div class="mt-8">
              <h3 class="text-xl font-bold text-text mb-6">${o.name}</h3>
              <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6 gap-x-5">
                ${o.skinsArray.filter(t=>!t.painted_of).map(t=>{const e=o.skinsArray.filter(i=>i.painted_of===t.name),x=[t.name,...e.map(i=>i.name)],y=[t.image,...e.map(i=>i.image)];return`
                      <div class="flex flex-col items-center gap-2 group">
                        <a href="${t.image}" target="_blank" rel="noopener noreferrer" class="block">
                          <div class="relative w-[128px] h-[220px] rounded-lg overflow-hidden transform transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.12)]">
                            ${y.map((i,h)=>`
                              <img src="${i}" 
                                   alt="${x[h]}" 
                                   class="absolute inset-0 w-full h-full object-cover object-center ${h===0?"":"opacity-0 pointer-events-none"} transition-opacity duration-700"/>
                            `).join("")}
                            <div class="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none"></div>
                          </div>
                        </a>
                        <span class="text-text text-sm text-center truncate w-[128px]">${x[0]}</span>
                      </div>
                    `}).join("")}
              </div>
            </div>
          `).join("")}
      </div>
    `;const g=document.getElementById(d),$=u?document.getElementById(u):null;if(!g)return;const S=o=>{g.innerHTML="",o.forEach(t=>{const e=document.createElement("div");e.className="mt-8";const x=document.createElement("h3");x.className="text-xl font-bold text-text mb-8",x.textContent=t.name,e.appendChild(x);const y=document.createElement("div");y.className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6 gap-x-5",e.appendChild(y),t.skinsArray.filter(i=>!i.painted_of).forEach(i=>{const h=document.createElement("div");h.className="flex flex-col items-center gap-2";const _=document.createElement("a");_.href=i.image,_.target="_blank",_.rel="noopener noreferrer";const L=document.createElement("div");L.className="relative w-[128px] h-[220px] rounded-lg overflow-hidden transform transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.12)]";const j=[i.image,...t.skinsArray.filter(a=>a.painted_of===i.name).map(a=>a.image)],k=[i.name,...t.skinsArray.filter(a=>a.painted_of===i.name).map(a=>a.name)],l=[];j.forEach((a,C)=>{const s=document.createElement("img");s.src=a,s.alt=k[C],s.className=`absolute inset-0 w-full h-full object-cover object-center ${C===0?"":"opacity-0 pointer-events-none"} transition-opacity duration-700`,L.appendChild(s),l.push(s)});const I=document.createElement("div");I.className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none",L.appendChild(I);const v=document.createElement("span");if(v.textContent=k[0],v.className="text-text text-sm text-center",h.appendChild(_),_.appendChild(L),h.appendChild(v),y.appendChild(h),l.length>1){let a=0,C=setInterval(()=>{l.forEach((s,p)=>s.style.opacity=p===a?"1":"0"),v.textContent=k[a],a=(a+1)%l.length},2500);L.addEventListener("mouseenter",()=>{clearInterval(C);let s=0;const p=setInterval(()=>{l.forEach((E,D)=>E.style.opacity=D===s?"1":"0"),v.textContent=k[s],s=(s+1)%l.length},800);L.addEventListener("mouseleave",()=>{clearInterval(p),C=setInterval(()=>{l.forEach((E,D)=>E.style.opacity=D===a?"1":"0"),v.textContent=k[a],a=(a+1)%l.length},2500)},{once:!0})})}}),g.appendChild(e)})};S(w),$&&$.addEventListener("input",o=>{const t=o.target.value.toLowerCase(),e=w.filter(x=>x.name.toLowerCase().includes(t));S(e)})}async function O(){try{const r="/Luminara/",u=await(await fetch(`${r}data/ui_assets.json`)).json(),c=await(await fetch(r+u.skin_borders)).json(),b=await(await fetch(r+u.emblems)).json(),N=c.skin_borders.map(g=>`
        <div class="flex flex-col items-center gap-2 group">
          <img 
            src="${B(r+g.src)}" 
            alt="${n(g.name)}" 
            class="w-[96px] h-[96px] object-contain rounded-lg shadow-sm group-hover:shadow-md transition-all duration-200" />
          <span class="text-text text-sm text-center">${n(g.name)}</span>
        </div>
      `).join(""),A=b.emblems.map((g,$)=>`
        <div class="flex flex-col items-center gap-1 emblem-item cursor-pointer ${$===0?"active":""}">
          <img 
            src="${B(r+g.file)}" 
            alt="${n(g.name)}" 
            class="w-[56px] h-[56px] object-contain rounded-full shadow-sm transition-all duration-200 ${$===0?"border-2 border-primary":""}" />
          <span class="text-text text-xs text-center">${n(g.name)}</span>
        </div>
      `).join(""),w=`
      <div class="flex flex-col gap-8">

        <!-- Browse All UI Assets button -->
        <div class="flex justify-end">
            <a href="${r}ui_asset.html" 
                class="px-3 py-1 bg-primary text-white rounded-lg hover:bg-primary/80 transition whitespace-nowrap">
                Browse All UI Assets →
            </a>
        </div>


        <!-- Skin Borders -->
        <div id="skin-borders">
          <h2 class="text-2xl font-bold text-primary mb-4">Skin Borders</h2>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            ${N}
          </div>
        </div>

        <hr class="border-t border-text my-4" />

        <!-- Emblems -->
        <div id="emblems">
          <h2 class="text-2xl font-bold text-primary mb-4">Emblems</h2>
          <div id="emblemGrid" class="flex gap-4 flex-wrap">
            ${A}
          </div>
        </div>

        <!-- Talents -->
        <div id="talentDetails" class="mb-4">
          <div class="flex flex-row gap-12">
            <div class="flex flex-col gap-2">
              <h4 class="text-lg font-semibold text-text">Core</h4>
              <div id="coreTalents" class="flex flex-row gap-4 flex-wrap"></div>
            </div>
            <div class="flex flex-col gap-2">
              <h4 class="text-lg font-semibold text-text">Standard</h4>
              <div id="standardTalents" class="flex flex-row gap-4 flex-wrap"></div>
            </div>
          </div>
        </div>
      </div>
    `;return requestAnimationFrame(()=>{const g=document.getElementById("emblemGrid"),$=document.getElementById("coreTalents"),S=document.getElementById("standardTalents");if(!g||!$||!S)return;const o=t=>{$.innerHTML=t.core.map(e=>`
            <div class="flex flex-col items-center gap-1">
              <img src="${B(r+e.file)}" alt="${n(e.name)}" class="w-[48px] h-[48px] object-contain rounded-full" />
              <span class="text-xs text-text">${n(e.name)}</span>
            </div>
          `).join(""),S.innerHTML=t.standard.map(e=>`
            <div class="flex flex-col items-center gap-1">
              <img src="${B(r+e.file)}" alt="${n(e.name)}" class="w-[48px] h-[48px] object-contain rounded-full" />
              <span class="text-xs text-text">${n(e.name)}</span>
            </div>
          `).join("")};o(b.emblems[0]),g.querySelectorAll(".emblem-item").forEach((t,e)=>{t.addEventListener("click",()=>{g.querySelectorAll(".emblem-item img").forEach(x=>x.classList.remove("border-2","border-primary")),g.querySelectorAll(".emblem-item")[e].querySelector("img").classList.add("border-2","border-primary"),o(b.emblems[e])})})}),w}catch(r){return console.error("UI Preview Error:",r),'<p class="text-red-500">Failed to load UI preview.</p>'}}const U=document.getElementById("preview-content"),H=document.querySelectorAll("#category-list button"),G={audio:{data:J,link:"audio.html"},splashart:{data:P,link:"splashart.html"},portrait:{data:R,link:"portrait.html"},ui:{data:O,link:"ui_asset.html"}};async function M(r){if(!U)return;let d="";r==="portrait"?d=await R({limit:3}):r==="splashart"?d=await P({limit:3}):r==="audio"?d=await J("miya","moonlight_archer"):r==="ui"?d=await O():d=`
      <ul class="space-y-2 text-text text-left">
        ${G[r].data.slice(0,3).map(m=>`<li>• ${n(m.hero)}: ${n(m.sample||"")}</li>`).join("")}
      </ul>
      <div class="mt-4">
        <a href="${B(G[r].link)}"
           class="text-primary font-semibold hover:underline">
          See full ${n(r)}
        </a>
      </div>
    `,U.innerHTML=d,r==="audio"&&(z(),F())}function z(){document.querySelectorAll(".custom-play-btn").forEach(d=>{const u=d.closest(".audio-item");if(!u)return;const m=u.querySelector("audio"),c=d.querySelector("i");!m||!c||d.addEventListener("click",()=>{document.querySelectorAll(".audio-item audio").forEach(f=>{f!==m&&f.pause()}),document.querySelectorAll(".custom-play-btn i").forEach(f=>{f.classList.remove("fa-pause"),f.classList.add("fa-play")}),m.paused?(m.play(),c.classList.remove("fa-play"),c.classList.add("fa-pause")):(m.pause(),c.classList.remove("fa-pause"),c.classList.add("fa-play")),m.onended=()=>{c.classList.remove("fa-pause"),c.classList.add("fa-play")}})})}function F(){document.querySelectorAll(".languageTabs").forEach(d=>{const u=d.querySelectorAll(".lang-tab"),c=(d.closest(".dialogSection")||d.parentNode).querySelectorAll(".lang-section");u.forEach(f=>{f.addEventListener("click",()=>{const b=f.dataset.lang,N=f.dataset.section;u.forEach(w=>{w.classList.remove("bg-primary","text-white"),w.classList.add("bg-bg","text-text")}),f.classList.add("bg-primary","text-white"),c.forEach(w=>w.classList.add("hidden"));const A=document.getElementById(`${N}-${b}`);A&&A.classList.remove("hidden")})})})}(async()=>{if(H.length>0){H.forEach(m=>{m.classList.remove("bg-primary/20","font-semibold")});const u=document.querySelector('[data-category="audio"]');u&&u.classList.add("bg-primary/20","font-semibold","border-l-2","border-primary"),await M("audio"),H.forEach(m=>{m.addEventListener("click",async()=>{const c=m.dataset.category;H.forEach(f=>{f.classList.remove("bg-primary/20","font-semibold","border-l-2","border-primary"),f.classList.add("hover:bg-primary/10")}),m.classList.add("bg-primary/20","font-semibold","border-l-2","border-primary"),m.classList.remove("hover:bg-primary/10"),await M(c)})})}document.getElementById("portraitsContainer")&&R({containerId:"portraitsContainer",searchInputId:"heroSearch"}),document.getElementById("splashartsContainer")&&P({containerId:"splashartsContainer",searchInputId:"heroSearch"})})();export{J as a,F as b,z as s};
