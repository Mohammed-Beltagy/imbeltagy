const main=document.querySelector("main");function repositionMain(){parseFloat(getComputedStyle(main).getPropertyValue("height"))>=innerHeight-16?main.style.cssText=`
      top: 0;
      transform: translateX(-50%);
    `:main.style.cssText=`
      top: 50%
      transform: translate(-50%, -50%)
    `}window.onload=repositionMain(),window.onresize=repositionMain();const titlesSlider=document.querySelector(".titles .slider"),titles=Array.from(titlesSlider.children),nav=document.querySelector("nav"),leftArrow=document.getElementById("left-arrow"),rightArrow=document.getElementById("right-arrow");let active=0;function moveTitles(){titles.forEach(t=>t.classList.remove("active")),titles[active].classList.add("active");let e=0;for(let t=active-1;0<=t;t--)e+=parseFloat(getComputedStyle(titles[t]).getPropertyValue("width"));e-=(parseFloat(getComputedStyle(nav).getPropertyValue("width"))-parseFloat(getComputedStyle(titles[active]).getPropertyValue("width")))/2,titlesSlider.style.left=-e+"px"}leftArrow.onclick=function(){0<active&&active--,moveTitles(),changeSubtitle(),rightArrow.classList.remove("disabled"),active<=0?this.classList.add("disabled"):this.classList.remove("disabled")},rightArrow.onclick=function(){active<2&&active++,moveTitles(),changeSubtitle(),leftArrow.classList.remove("disabled"),2<=active?this.classList.add("disabled"):this.classList.remove("disabled")},moveTitles();const subtitle=document.getElementById("sub-title");let subtitleInterval;function changeSubtitle(){clearInterval(subtitleInterval),subtitle.textContent="";let t=titles[active].dataset.subtitle,e=0;subtitleInterval=setInterval(()=>{e<t.length?(subtitle.textContent+=t[e],e++):clearInterval(subtitleInterval)},150)}