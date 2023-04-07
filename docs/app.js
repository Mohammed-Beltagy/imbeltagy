const main=document.querySelector("main");function repositionMain(){parseFloat(getComputedStyle(main).getPropertyValue("height"))>=innerHeight-50?main.style.cssText=`
      top: 0;
      transform: translateX(-50%);
      margin: 1rem 0
    `:main.style.cssText=`
      top: 50%
      transform: translate(-50%, -50%)
    `}window.onload=repositionMain,window.onresize=repositionMain;const titlesSlider=document.querySelector(".titles .slider"),titles=Array.from(titlesSlider.children),nav=document.querySelector("nav"),leftArrow=document.getElementById("left-arrow"),rightArrow=document.getElementById("right-arrow");let active=0;function moveTitles(){titles.forEach(e=>e.classList.remove("active")),titles[active].classList.add("active");let t=0;for(let e=active-1;0<=e;e--)t+=parseFloat(getComputedStyle(titles[e]).getPropertyValue("width"));t-=(parseFloat(getComputedStyle(nav).getPropertyValue("width"))-parseFloat(getComputedStyle(titles[active]).getPropertyValue("width")))/2,titlesSlider.style.left=-t+"px"}leftArrow.onclick=function(){0<active&&active--,moveTitles(),changeSubtitle(),slideContent(),rightArrow.classList.remove("disabled"),active<=0?this.classList.add("disabled"):this.classList.remove("disabled")},rightArrow.onclick=function(){active<2&&active++,moveTitles(),changeSubtitle(),slideContent(),leftArrow.classList.remove("disabled"),2<=active?this.classList.add("disabled"):this.classList.remove("disabled")},moveTitles();const subtitle=document.getElementById("sub-title");let subtitleInterval;function changeSubtitle(){clearInterval(subtitleInterval),subtitle.textContent="";let e=titles[active].dataset.subtitle,t=0;subtitleInterval=setInterval(()=>{t<e.length?(subtitle.textContent+=e[t],t++):clearInterval(subtitleInterval)},100)}function slideContent(){console.log(document.getElementById("content-slider")),document.getElementById("content-slider").style.left=`-${active}00%`}let theme="dark";function applyTheme(){"dark"===theme?(document.documentElement.style.setProperty("--bg-color","#3D4490"),document.documentElement.style.setProperty("--overlay-color","#0002"),document.documentElement.style.setProperty("--high-overlay-color","#0005"),document.documentElement.style.setProperty("--picture-overlay-color","var(--high-overlay-color)"),document.documentElement.style.setProperty("--project-overlay-color","#3d449080"),document.documentElement.style.setProperty("--accent-color","#FF5677"),document.documentElement.style.setProperty("--ordinary-color","#d9e6ff"),document.documentElement.style.setProperty("--secondary-color","#a4a7ff")):(document.documentElement.style.setProperty("--bg-color","#bde0fe"),document.documentElement.style.setProperty("--overlay-color","#fff6"),document.documentElement.style.setProperty("--high-overlay-color","#fff8"),document.documentElement.style.setProperty("--picture-overlay-color","#5e96f533"),document.documentElement.style.setProperty("--project-overlay-color","var(--high-overlay-color)"),document.documentElement.style.setProperty("--accent-color","#5e96f5"),document.documentElement.style.setProperty("--ordinary-color","#3b4a65"),document.documentElement.style.setProperty("--secondary-color","var(--ordinary-color)"))}document.getElementById("change-theme").onclick=function(){theme="dark"===theme?"light":"dark",applyTheme()};