const delay = 2000;
const delayFactor = [0, 0, 0.33, 1, 1.1, 1.2, 1.4];

export default function runAnimation() {
  const elements = {
    name: document.getElementById("name"),
    title: document.getElementById("title"),
    blurb: document.getElementById("blurb"),
    navArr: document.getElementById("nav").querySelectorAll("li"),
    links: document.getElementById("links").querySelectorAll("li"),
    email: document.getElementById("email"),
    main: document.getElementById("main"),
  };

  let i = 0;

  for (const key in elements) {
    if (elements[key].length === undefined)
      setTimeout(() => {
        elements[key].classList.add("init");
      }, delay * delayFactor[i]);
    else
      for (let j = 0; j < elements[key].length; j++)
        setTimeout(
          () => {
            elements[key][j].classList.add("init");
          },
          delay * delayFactor[i] + 100 * j,
        );

    i++;
  }
}
