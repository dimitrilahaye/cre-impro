(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}})();class m{constructor(t){this.storage=t,this.$tabContents=document.querySelector("#tab-contents"),this._initializeContent()}_initializeContent(){const t=this.storage.getAll();this.$tabContents.innerHTML=`
        <div class="tab-content active">
            <div id="mood-list">${t.length===0?"Tu n'as pas encore d'émotions":""}</div>
            <div class="field has-addons">
                <div class="control">
                    <input id="mood-field" class="input" type="text" placeholder="Ex: Joie">
                </div>
                <div class="control">
                    <button id="add-mood" class="button is-danger">
                        <span class="icon is-small">
                            <i class="fa-solid fa-plus"></i>
                        </span>
                    </button>
                </div>
            </div>
            ${t.length>0?`<button id="clear-all" class="button is-danger">
                <span>Tout supprimer</span>
                <span class="icon is-small">
                    <i class="fa-solid fa-trash"></i>
                </span>
            </button>`:""}
        </div>    
    `,setTimeout(()=>{this.$moodList=document.querySelector("#mood-list"),this.$addMood=document.querySelector("#add-mood"),this.$moodField=document.querySelector("#mood-field"),this.$clearAll=document.querySelector("#clear-all"),this.$addMood.addEventListener("click",()=>{const e=this.$moodField.value;(e==null?void 0:e.trim().length)!==0&&(this.storage.add(e),this._initializeContent())}),this.$clearAll&&this.$clearAll.addEventListener("click",()=>{this.storage.clearAll(),this._initializeContent()}),this._displayMoods()},50)}_displayMoods(){const t=this.storage.getAll();for(const e of t)this.$moodList.insertAdjacentHTML("beforeend",`
            <div id="${e.id}" class="config">
                <span>${e.value}</span>
                <button id="delete-mood" class="button is-danger">
                    <span class="icon is-small">
                        <i class="fa-solid fa-trash"></i>
                    </span>
                </button>
            </div>
        `);setTimeout(()=>{const e=document.querySelectorAll("#delete-mood");for(const a of e)a.addEventListener("click",s=>{const i=s.target.closest("#delete-mood");if(!i)return;const c=i.closest(".config").id;this.storage.delete(c),this._initializeContent()})},50)}}class f{constructor(t){this.storage=t,this.$tabContents=document.querySelector("#tab-contents"),this._initializeContent()}_initializeContent(){const t=this.storage.getAll();this.$tabContents.innerHTML=`
        <div class="tab-content active">
            <div id="place-list">${t.length===0?"Tu n'as pas encore de lieux":""}</div>
            <div class="field has-addons">
                <div class="control">
                    <input id="place-field" class="input" type="text" placeholder="Ex: Un palace">
                </div>
                <div class="control">
                    <button id="add-place" class="button is-danger">
                        <span class="icon is-small">
                            <i class="fa-solid fa-plus"></i>
                        </span>
                    </button>
                </div>
            </div>
            ${t.length>0?`<button id="clear-all" class="button is-danger">
                <span>Tout supprimer</span>
                <span class="icon is-small">
                    <i class="fa-solid fa-trash"></i>
                </span>
            </button>`:""}
        </div>    
    `,setTimeout(()=>{this.$placeList=document.querySelector("#place-list"),this.$addPlace=document.querySelector("#add-place"),this.$placeField=document.querySelector("#place-field"),this.$clearAll=document.querySelector("#clear-all"),this.$addPlace.addEventListener("click",()=>{const e=this.$placeField.value;(e==null?void 0:e.trim().length)!==0&&(this.storage.add(e),this._initializeContent())}),this.$clearAll&&this.$clearAll.addEventListener("click",()=>{this.storage.clearAll(),this._initializeContent()}),this._displayPlaces()},50)}_displayPlaces(){const t=this.storage.getAll();for(const e of t)this.$placeList.insertAdjacentHTML("beforeend",`
            <div id="${e.id}" class="config">
                <span>${e.value}</span>
                <button id="delete-place" class="button is-danger">
                    <span class="icon is-small">
                        <i class="fa-solid fa-trash"></i>
                    </span>
                </button>
            </div>
        `);setTimeout(()=>{const e=document.querySelectorAll("#delete-place");for(const a of e)a.addEventListener("click",s=>{const i=s.target.closest("#delete-place");if(!i)return;const c=i.closest(".config").id;this.storage.delete(c),this._initializeContent()})},50)}}class v{constructor(t){this.storage=t,this.$tabContents=document.querySelector("#tab-contents"),this._initializeContent()}_initializeContent(){const t=this.storage.getAll();this.$tabContents.innerHTML=`
        <div class="tab-content active">
            <div id="character-list">${t.length===0?"Tu n'as pas encore de personnages":""}</div>
            <div class="field has-addons">
                <div class="control">
                    <input id="character-field" class="input" type="text" placeholder="Ex: Un chevalier">
                </div>
                <div class="control">
                    <button id="add-character" class="button is-danger">
                        <span class="icon is-small">
                            <i class="fa-solid fa-plus"></i>
                        </span>
                    </button>
                </div>
            </div>
            ${t.length>0?`<button id="clear-all" class="button is-danger">
                <span>Tout supprimer</span>
                <span class="icon is-small">
                    <i class="fa-solid fa-trash"></i>
                </span>
            </button>`:""}
        </div>    
    `,setTimeout(()=>{this.$characterList=document.querySelector("#character-list"),this.$addCharacter=document.querySelector("#add-character"),this.$characterField=document.querySelector("#character-field"),this.$clearAll=document.querySelector("#clear-all"),this.$addCharacter.addEventListener("click",()=>{const e=this.$characterField.value;(e==null?void 0:e.trim().length)!==0&&(this.storage.add(e),this._initializeContent())}),this.$clearAll&&this.$clearAll.addEventListener("click",()=>{this.storage.clearAll(),this._initializeContent()}),this._displayCharacters()},50)}_displayCharacters(){const t=this.storage.getAll();for(const e of t)this.$characterList.insertAdjacentHTML("beforeend",`
            <div id="${e.id}" class="config">
                <span>${e.value}</span>
                <button id="delete-character" class="button is-danger">
                    <span class="icon is-small">
                        <i class="fa-solid fa-trash"></i>
                    </span>
                </button>
            </div>
        `);setTimeout(()=>{const e=document.querySelectorAll("#delete-character");for(const a of e)a.addEventListener("click",s=>{const i=s.target.closest("#delete-character");if(!i)return;const c=i.closest(".config").id;this.storage.delete(c),this._initializeContent()})},50)}}class ${constructor(t,e){this.storage=t,this.improCreator=e,this.$tabContents=document.querySelector("#tab-contents"),this._initializeContent()}_initializeContent(){const t=this.storage.getAll();this.$tabContents.innerHTML=`
        <div class="tab-content active">
            <div id="student-list">${t.length===0?"Tu n'as pas encore d'élèves":""}</div>
            <div class="field has-addons">
                <div class="control">
                    <input id="student-field" class="input" type="text" placeholder="Ex: Léa">
                </div>
                <div class="control">
                    <button id="add-student" class="button is-danger">
                        <span class="icon is-small">
                            <i class="fa-solid fa-plus"></i>
                        </span>
                    </button>
                </div>
            </div>
            ${t.length>0?`
                <button id="clear-all" class="button is-danger">
                  <span>Tout supprimer</span>
                  <span class="icon is-small">
                      <i class="fa-solid fa-trash"></i>
                  </span>
                </button>
                <button id="create-all" class="button is-success">
                  <span>Créer une impro pour tout le monde</span>
                  <span class="icon is-small">
                      <i class="fa-solid fa-wand-magic-sparkles"></i>
                  </span>
                </button>
            `:""}
        </div>    
    `,setTimeout(()=>{this.$studentList=document.querySelector("#student-list"),this.$addStudent=document.querySelector("#add-student"),this.$studentField=document.querySelector("#student-field"),this.$clearAll=document.querySelector("#clear-all"),this.$createImproAll=document.querySelector("#create-all"),this.$addStudent.addEventListener("click",()=>{const e=this.$studentField.value;(e==null?void 0:e.trim().length)!==0&&(this.storage.add(e),this._initializeContent())}),this.$clearAll&&this.$clearAll.addEventListener("click",()=>{this.storage.clearAll(),this._initializeContent()}),this.$createImproAll&&this.$createImproAll.addEventListener("click",()=>{this._createImpro()}),this._displayStudents()},50)}_displayStudents(){const t=this.storage.getAll();for(const e of t)this.$studentList.insertAdjacentHTML("beforeend",`
            <div id="${e.id}" class="config">
                <div class="general">
                  <span>${e.value}</span>
                  <div>
                    <button class="button is-success create-impro">
                        <span class="icon is-small">
                            <i class="fa-solid fa-wand-magic-sparkles"></i>
                        </span>
                    </button>
                    <button class="button is-danger delete-student">
                        <span class="icon is-small">
                            <i class="fa-solid fa-trash"></i>
                        </span>
                    </button>
                  </div>
                </div>
                ${e.impro.length===0?"":`<div class="general impros">
                  ${e.impro.map((a,s)=>{let i;return s===0&&(i="Émotion"),s===1&&(i="Lieu"),s===2&&(i="Personnage"),`
                      <div><strong>${i}</strong>: ${a}</div>
                    `}).join("")}
                </div>`}
            </div>
        `);setTimeout(()=>{const e=document.querySelectorAll(".delete-student");for(const s of e)s.addEventListener("click",i=>{const o=i.target.closest(".delete-student");if(!o)return;const d=o.closest(".config").id;this.storage.delete(d),this._initializeContent()});const a=document.querySelectorAll(".create-impro");for(const s of a)s.addEventListener("click",i=>{const o=i.target.closest(".create-impro");if(!o)return;const d=o.closest(".config").id,p=this.improCreator.create();this.storage.addImproToStudent(p,d),this._initializeContent()})},50)}_createImpro(){const t=document.querySelectorAll(".create-impro");for(const e of t){const a=e.closest(".create-impro");if(!a)return;const i=a.closest(".config").id,o=this.improCreator.create();this.storage.addImproToStudent(o,i)}this._initializeContent()}}function r(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(n){const t=Math.random()*16|0;return(n==="x"?t:t&3|8).toString(16)})}class u{constructor(t){this.storage=t}getAll(){return this.storage.get("moods")??[]}getRandom(){const t=this.getAll();return t[Math.floor(Math.random()*t.length)]}add(t){const e=this.getAll()??[];e.push({id:r(),value:t.trim()}),this.storage.set("moods",e)}delete(t){const e=this.getAll()??[];if(e.length===0)return;const a=e.filter(s=>s.id!==t);this.storage.set("moods",a)}clearAll(){this.storage.remove("moods")}}class h{constructor(t){this.storage=t}getAll(){return this.storage.get("places")??[]}getRandom(){const t=this.getAll();return t[Math.floor(Math.random()*t.length)]}add(t){const e=this.getAll()??[];e.push({id:r(),value:t.trim()}),this.storage.set("places",e)}delete(t){const e=this.getAll()??[];if(e.length===0)return;const a=e.filter(s=>s.id!==t);this.storage.set("places",a)}clearAll(){this.storage.remove("places")}}class b{constructor(t){this.storage=t}getAll(){return(this.storage.get("students")??[]).sort((t,e)=>t.value.localeCompare(e.value))??[]}add(t){this._add({id:r(),value:t.trim()})}_add(t){const e=this.getAll()??[];e.push({...t,impro:t.impro??[]}),this.storage.set("students",e)}addImproToStudent(t,e){const s=(this.getAll()??[]).find(i=>i.id===e);s&&(s.impro=t,this.delete(e),this._add(s))}delete(t){const e=this.getAll()??[];if(e.length===0)return;const a=e.filter(s=>s.id!==t);this.storage.set("students",a)}clearAll(){this.storage.remove("students")}}class g{constructor(t){this.storage=t}getAll(){return this.storage.get("characters")??[]}getRandom(){const t=this.getAll();return t[Math.floor(Math.random()*t.length)]}add(t){const e=this.getAll()??[];e.push({id:r(),value:t.trim()}),this.storage.set("characters",e)}delete(t){const e=this.getAll()??[];if(e.length===0)return;const a=e.filter(s=>s.id!==t);this.storage.set("characters",a)}clearAll(){this.storage.remove("characters")}}class l{constructor(t="cre-impro"){this.prefix=t}_fullKey(t){return this.prefix+"_"+t}set(t,e){try{const a=JSON.stringify(e);localStorage.setItem(this._fullKey(t),a)}catch(a){console.error("Failed to set in localStorage:",a)}}get(t){try{const e=localStorage.getItem(this._fullKey(t));return e?JSON.parse(e):null}catch(e){return console.error("Failed to parse localStorage item:",e),null}}remove(t){localStorage.removeItem(this._fullKey(t))}}class y{constructor(t,e,a){this.moodsStorage=t,this.placesStorage=e,this.charactersStorage=a}create(){const t=this.moodsStorage.getRandom(),e=this.placesStorage.getRandom(),a=this.charactersStorage.getRandom();return[t.value,e.value,a.value]}}class S{constructor(){this.$container=document.querySelector("#configuration"),this.$moods=this.$container.querySelector("#moods"),this.$moods.addEventListener("click",()=>{this.activeMoods()}),this.$places=this.$container.querySelector("#places"),this.$places.addEventListener("click",()=>{this.activePlaces()}),this.$characters=this.$container.querySelector("#characters"),this.$characters.addEventListener("click",()=>{this.activeCharacters()}),this.$students=this.$container.querySelector("#students"),this.$students.addEventListener("click",()=>{this.activeStudents()}),this.activeMoods()}activeMoods(){this.$activeTab&&this.$activeTab.classList.remove("is-active"),new m(new u(new l)),this.$moods.classList.add("is-active"),this.$activeTab=this.$moods}activePlaces(){this.$activeTab&&this.$activeTab.classList.remove("is-active"),new f(new h(new l)),this.$places.classList.add("is-active"),this.$activeTab=this.$places}activeCharacters(){this.$activeTab&&this.$activeTab.classList.remove("is-active"),new v(new g(new l)),this.$characters.classList.add("is-active"),this.$activeTab=this.$characters}activeStudents(){this.$activeTab&&this.$activeTab.classList.remove("is-active"),new $(new b(new l),new y(new u(new l),new h(new l),new g(new l))),this.$students.classList.add("is-active"),this.$activeTab=this.$students}}new S;
