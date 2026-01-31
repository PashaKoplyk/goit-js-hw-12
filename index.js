import{a as S,S as v,i as n}from"./assets/vendor-xpOxgMII.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&d(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const q="https://pixabay.com/api/",R="54337212-655e7339b0825c0fa1c24fc71";async function u(r,t){return(await S.get(q,{params:{key:R,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}const f=document.querySelector(".gallery"),m=document.querySelector(".loader"),p=document.querySelector(".load-more"),B=new v(".gallery a",{captionsData:"alt",captionDelay:250});function h(r){const t=r.map(o=>`
      <li class="gallery-item">
        <a href="${o.largeImageURL}">
          <img
            src="${o.webformatURL}"
            alt="${o.tags}"
            loading="lazy"
          />
        </a>
        <div class="info">
          <p class="info-item">
            <b>Likes</b>
            ${o.likes}
          </p>
          <p class="info-item">
            <b>Views</b>
            ${o.views}
          </p>
          <p class="info-item">
            <b>Comments</b>
            ${o.comments}
          </p>
          <p class="info-item">
            <b>Downloads</b>
            ${o.downloads}
          </p>
        </div>
      </li>
    `).join("");f.insertAdjacentHTML("beforeend",t),B.refresh()}function M(){f.innerHTML=""}function g(){m.classList.remove("is-hidden")}function y(){m.classList.add("is-hidden")}function L(){p.classList.remove("is-hidden")}function b(){p.classList.add("is-hidden")}const P=document.querySelector(".form"),$=document.querySelector(".load-more");let a="",i=1;const w=15;let c=0;P.addEventListener("submit",O);$.addEventListener("click",x);async function O(r){if(r.preventDefault(),a=r.target.elements["search-text"].value.trim(),!a){n.warning({message:"Please enter a search query!",position:"topRight"});return}i=1,c=0,M(),b(),g();try{const t=await u(a,i),o=t.hits;if(c=t.totalHits,o.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(o),i*w<c?L():n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}catch{n.error({message:"Something went wrong. Try again later.",position:"topRight"})}finally{y()}}async function x(){i+=1,b(),g();try{const t=(await u(a,i)).hits;h(t),E(),i*w<c?L():n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}catch{n.error({message:"Something went wrong. Try again later.",position:"topRight"})}finally{y()}}function E(){const r=document.querySelector(".gallery-item");if(!r)return;const{height:t}=r.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
