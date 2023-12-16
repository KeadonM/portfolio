const delay = 2500;
const delayFactor = [0, 0, 0.33, 1, 1.25, 1.25, 1.5];

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
      for (let j = 0; j < elements[key].length; j++) {
        console.log(elements[key][j]);
        setTimeout(
          () => {
            elements[key][j].classList.add("init");
          },
          delay * delayFactor[i] + 100 * j,
        );
      }

    i++;
  }

  // setTimeout(() => {
  //   name.classList.add("init");
  // }, delay * 0);

  // for (let i = 1; i <= navArr.length; i++) {
  //   setTimeout(() => {
  //     navArr[i - 1].classList.add("init");
  //   }, 300 * i);
  // }

  // console.log(navArr);
}
