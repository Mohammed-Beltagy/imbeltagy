const main=document.querySelector("main");function repositionMain(){parseFloat(getComputedStyle(main).getPropertyValue("height"))>=innerHeight-16?main.style.cssText=`
      top: 0;
      transform: translateX(-50%);
    `:main.style.cssText=`
      top: 50%
      transform: translate(-50%, -50%)
    `}window.onload=repositionMain(),window.onresize=repositionMain();