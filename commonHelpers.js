import{a as p,S as L,i as n}from"./assets/vendor-ee72e1a4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();async function m(r,t,a){const o=new URLSearchParams({key:"44412279-8977454442245f14893e5bf31",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:t});return(async()=>(await p.get(`https://pixabay.com/api/?${o}`)).data)()}let u="firstload";async function S(r){const t=document.querySelector(".gallery"),a=r.hits;let o="";a.forEach(e=>{o+=`
    <li class="gallery-item">
      <a class="gallery-link" href="${e.largeImageURL}">
        <img
          class="gallery-image"
          src="${e.webformatURL}"
          alt="${e.tags}"
          title="${e.tags}"
        />
      
      <ul>
        <li><h5>Likes</h5><span>${e.likes}</span></li>
        <li><h5>Views</h5><span>${e.views}</span></li>
        <li><h5>Comments</h5><span>${e.comments}</span></li>
        <li><h5>Downloads</h5><span>${e.downloads}</span></li>
      </ul>
      </a>
    </li>
  `}),t.insertAdjacentHTML("beforeend",o),u!=="firstload"&&u.destroy(),u=new L(".gallery a",{captionDelay:250})}function b(){const r=document.querySelector(".gallery");r.innerHTML=""}const q=document.querySelector(".search-form"),c=document.querySelector(".loader"),l=document.querySelector(".btn");let f,i=1,w=15,h={},g;q.addEventListener("submit",r=>{r.preventDefault();const t=r.target.elements.search.value;if(t===""||/^\s*$/.test(t)){n.error({title:"Error",message:"Empty request"}),r.target.elements.search.value="";return}c.classList.remove("hide"),l.classList.add("hide"),b(),i=1,m(t.trim(),i).then(a=>{y(a)}).catch(a=>{n.error({title:"Error",message:a})}),r.target.elements.search.value="",f=t.trim()});l.addEventListener("click",()=>{if(i>g)return l.classList.add("hide"),n.error({position:"topRight",message:"We're sorry, there are no more posts to load"});i+=1,i>1&&(c.classList.remove("hide"),l.classList.add("hide"),h=document.querySelectorAll(".gallery-item")[0].getBoundingClientRect(),m(f,i).then(t=>{y(t)}).catch(t=>{n.error({title:"Error",message:t})}))});function y(r){if(r.hits.length===0||r.hits==="undefined")return c.classList.add("hide"),n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});S(r).then(()=>{h.height&&window.scrollBy({top:h.height*3,behavior:"smooth"}),g=Math.ceil(r.totalHits/w)}),c.classList.add("hide"),l.classList.remove("hide")}
//# sourceMappingURL=commonHelpers.js.map
