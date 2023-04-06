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

// Make Slider For The Titles
const titlesSlider = document.querySelector(".titles .slider"),
  titles = Array.from(titlesSlider.children),
  nav = document.querySelector("nav"),
  leftArrow = document.getElementById("left-arrow"),
  rightArrow = document.getElementById("right-arrow");
let active = 0;
// left arrow
leftArrow.onclick = function () {
  if (active > 0) {
    active--;
  }
  moveTitles();
  changeSubtitle();
  rightArrow.classList.remove("disabled");
  active <= 0
    ? this.classList.add("disabled")
    : this.classList.remove("disabled");
};
// right arrow
rightArrow.onclick = function () {
  if (active < 2) {
    active++;
  }
  moveTitles();
  changeSubtitle();
  leftArrow.classList.remove("disabled");
  active >= 2
    ? this.classList.add("disabled")
    : this.classList.remove("disabled");
};

// Move The Titles Slider Depending On (active) value
function moveTitles() {
  // Move (active) Class
  titles.forEach((title) => title.classList.remove("active"));
  titles[active].classList.add("active");
  // Center The Title
  let left = 0;
  for (let i = active - 1; i >= 0; i--) {
    left += parseFloat(getComputedStyle(titles[i]).getPropertyValue("width"));
  }
  left -=
    (parseFloat(getComputedStyle(nav).getPropertyValue("width")) -
      parseFloat(getComputedStyle(titles[active]).getPropertyValue("width"))) /
    2;
  titlesSlider.style.left = -left + "px";
}
moveTitles(); // to center the default value

// Change The Value Of #sub-title
const subtitle = document.getElementById("sub-title");
let subtitleInterval;
function changeSubtitle() {
  clearInterval(subtitleInterval); // prevent multiple intervals if the user clicked the arrow a lot
  subtitle.textContent = "";
  let value = titles[active].dataset.subtitle,
    i = 0;
  subtitleInterval = setInterval(() => {
    if (i < value.length) {
      subtitle.textContent += value[i];
      i++;
    } else {
      clearInterval(subtitleInterval);
    }
  }, 150);
}
