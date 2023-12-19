export default function setupScroll() {
  const scrollWindow = document.getElementById("scrollable-container");

  const fadeElements = {};

  document.querySelectorAll(".fade-element").forEach((element) => {
    const pos = element.offsetTop;
    fadeElements[pos] = { element: element, height: element.offsetHeight };
  });

  const sectionElements = {};

  document.querySelectorAll(".content-section").forEach((element) => {
    const pos = element.offsetTop;
    sectionElements[pos] = {
      id: element.getAttribute("id"),
      height: element.offsetHeight,
    };
  });

  scrollWindow.onscroll = () =>
    handleScroll(scrollWindow, fadeElements, sectionElements);
  window.onresize = () => {
    scrollWindow.onscroll = null;
    setupScroll();
  };
}

function handleScroll(scrollWindow, fadeElements, sectionElements) {
  let scrollPosition = scrollWindow.scrollTop;
  let windowHeight = scrollWindow.height;

  handleScrollOpacity(scrollPosition, fadeElements);
  handleActiveNav(scrollPosition, windowHeight, sectionElements);
}

function handleScrollOpacity(scrollPosition, fadeElements) {
  Object.keys(fadeElements).map((key) => {
    const distanceFromTop = key - scrollPosition;

    let opacity = 1;
    let height = fadeElements[key].height;
    let steps = 100;
    let stepHeight = height / steps;

    if (distanceFromTop < 0)
      opacity =
        Math.max(1, stepHeight) - (-distanceFromTop * stepHeight) / height;

    fadeElements[key].element.style.opacity = Math.max(0, opacity).toFixed(2);
  });
}

function handleActiveNav(scrollPosition, windowHeight, sectionElements) {
  const offset = 50;

  Object.keys(sectionElements).forEach((key) => {
    const distanceFromTop = key - scrollPosition;

    if (distanceFromTop <= offset) {
      const current = document.getElementById(`nav-${sectionElements[key].id}`);
      const last = document.querySelector(`.active.nav-item`);

      if (!current.classList.contains("active")) {
        if (last !== null) last.classList.remove("active");
        current.classList.add("active");
      }
    }
  });
}
