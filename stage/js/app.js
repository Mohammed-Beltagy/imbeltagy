// Change Main Postion If Its Height Is More Than Window Height
const main = document.querySelector("main");
function repositionMain() {
  let mainHeight = parseFloat(
    getComputedStyle(main).getPropertyValue("height")
  );
  if (mainHeight >= innerHeight - 16) {
    main.style.cssText = `
      top: 0;
      transform: translateX(-50%);
    `;
  } else {
    main.style.cssText = `
      top: 50%
      transform: translate(-50%, -50%)
    `;
  }
}
window.onload = repositionMain();
window.onresize = repositionMain();
