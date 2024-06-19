import{S as p,i as d,a as L}from"./assets/vendor-ee72e1a4.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const c of e.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerPolicy&&(e.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?e.credentials="include":r.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(r){if(r.ep)return;r.ep=!0;const e=n(r);fetch(r.href,e)}})();async function S(t){const s=document.querySelector(".gallery"),n=t.hits;let o="";n.forEach(e=>{o+=`
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
  `}),s.insertAdjacentHTML("beforeend",o),new p(".gallery a",{captionDelay:250}).refresh()}function b(){const t=document.querySelector(".gallery");t.innerHTML=""}function g(t,...s){let[n,o,r,e={},c]=[...s];const y=new URLSearchParams({key:"44412279-8977454442245f14893e5bf31",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:o});(async()=>(await L.get(`https://pixabay.com/api/?${y}`)).data)().then(a=>{(a.hits.length===0||a.hits==="undefined")&&d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),S(a).then(()=>{e.height&&window.scrollBy({top:e.height*2,behavior:"smooth"})}),n.classList.add("hide"),r.classList.remove("hide")}).catch(a=>{d.error({title:"Error",message:a})})}const q=document.querySelector(".search-form"),u=document.querySelector(".loader"),l=document.querySelector(".btn");let f,i=1,h=15,m=0;q.addEventListener("submit",t=>{t.preventDefault();const s=t.target.elements.search.value;if(s===""||/^\s*$/.test(s)){d.error({title:"Error",message:"Empty request"}),t.target.elements.search.value="";return}u.classList.remove("hide"),l.classList.add("hide"),b(),i=1,g(s.trim(),u,i,l,h),t.target.elements.search.value="",f=s.trim()});l.addEventListener("click",()=>{const t=Math.ceil(100/h);if(i>t)return l.classList.add("hide"),d.error({position:"topRight",message:"We're sorry, there are no more posts to load"});i+=1,i>1&&(u.classList.remove("hide"),l.classList.add("hide"),m=document.querySelectorAll(".gallery-item")[0].getBoundingClientRect(),g(f,u,i,l,m,h))});
//# sourceMappingURL=commonHelpers.js.map
