const main=document.querySelector("main");function repositionMain(){parseFloat(getComputedStyle(main).getPropertyValue("height"))>=innerHeight-16?main.style.cssText=`
      top: 0;
      transform: translateX(-50%);
    `:main.style.cssText=`
      top: 50%
      transform: translate(-50%, -50%)
    `}window.onload=repositionMain(),window.onresize=repositionMain();const titlesSlider=document.querySelector(".titles .slider"),titles=Array.from(titlesSlider.children),leftArrow=document.getElementById("left-arrow"),rightArrow=document.getElementById("right-arrow");let active=0;function moveTitles(){titles.forEach(t=>t.classList.remove("active")),titles[active].classList.add("active");let e=0;for(let t=active-1;0<=t;t--)e+=parseFloat(getComputedStyle(titles[t]).getPropertyValue("width"));titlesSlider.style.left=-e+"px"}leftArrow.onclick=function(){0<active&&active--,moveTitles(),rightArrow.classList.remove("disabled"),active<=0?this.classList.add("disabled"):this.classList.remove("disabled")},rightArrow.onclick=function(){active<2&&active++,moveTitles(),leftArrow.classList.remove("disabled"),2<=active?this.classList.add("disabled"):this.classList.remove("disabled")};