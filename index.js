import{a as n,S as h,i as c}from"./assets/vendor-C9vNCoLC.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const b="https://pixabay.com/api/",L="50348782-72c1d2cf6f33e6e33f09bb691";n.defaults.baseURL=b;n.defaults.params={key:L,image_type:"photo",orientation:"horizontal",safesearch:!0};async function v(s){return(await n.get("",{params:{q:s}})).data.hits}const w=new h(".gallery a",{captionsData:"alt",captionDelay:200});function S(s,a){const r=s.map(({webformatURL:l,largeImageURL:e,type:t,tags:i,likes:p,views:f,comments:y,downloads:g})=>`<li class="gallery-item js-gallery-item">
  <a class="gallery-link js-gallery-link" href="${e}">
    <div class="image-wrapper">
      <img
        class="gallery-image js-gallery-image"
        src="${l}"
        data-source="${t}"
        alt="${i}"
      />
    </div>
  
  <div>
    <ul class="wrapper-box">
      <li class="list-item">
        <p class="value-title">Likes</p>
        <p class="label" data-likes>${p}</p>
      </li>
      <li class="list-item">
        <p class="value-title">Views</p>
        <p class="label" data-views>${f}</p>
      </li>
      <li class="list-item">
        <p class="value-title">Comments</p>
        <p class="label" data-comments>${y}</p>
      </li>
      <li class="list-item">
        <p class="value-title">Downloads</p>
        <p class="label" data-downloads>${g}</p>
      </li>
    </ul>
  </div>
  </a>
</li>`).join("");a.insertAdjacentHTML("beforeend",r),w.refresh()}function q(s){s.innerHTML=""}function $(s){s.classList.remove("is-hidden")}function u(s){s.classList.add("is-hidden")}const m=document.querySelector(".form"),P=document.querySelector('[name="search-text"]'),d=document.querySelector(".gallery"),o=document.querySelector(".loader");m.addEventListener("submit",x);function x(s){s.preventDefault();const a=P.value.trim();if(q(d),$(o),!a)return u(o),c.error({title:"Caution",message:"Please enter a search query.",position:"topRight",timeout:3e3});v(a).then(r=>{S(r,d)}).catch(r=>{c.error({title:"Caution",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3})}).finally(()=>{u(o),m.reset()})}
//# sourceMappingURL=index.js.map
