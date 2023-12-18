import resume from "../assets/keadon-mitchell-resume.png";

import conspicuousink from "../assets/conspicuous-ink.webp";
import resucraft from "../assets/resucraft.png";
import weatherly from "../assets/weatherly.png";
import duckfarm from "../assets/duckfarm.png";

const data = {
  info: {
    name: "Keadon Mitchell",
    title: "Full Stack Engineer",
    blurb:
      "I strive to create beautiful scalable apps. Currently open for work.",
    nav: ["About", "Skills", "Projects", "Resume"],
    email: "reach@keadon.dev",
    resume: resume,
  },

  lists: {
    about: {
      type: "Text",
      title: "About Me",
      list: [
        "Passionate web developer with a keen eye for detail and a flair for creating engaging online experiences. Armed with a robust skill set in HTML, CSS, and JavaScript, I bring creativity and functionality to every project. From sleek responsive designs to seamless user interfaces, I thrive on transforming ideas into dynamic, user-friendly websites that leave a lasting impression.",
        "Throughout his career, John has honed his skills in both front-end and back-end development, creating seamless and responsive websites that not only meet but exceed client expectations. His dedication to staying up-to-date with the latest industry trends and technologies ensures that his work is not only innovative but also at the forefront of the ever-evolving digital landscape.",
        "Outside of coding, John is an avid learner and enjoys exploring new technologies, attending tech meetups, and contributing to open-source projects.",
      ],
    },

    skills: {
      type: "HList",
      title: undefined,
      list: [
        { title: "JS", img: "" },
        { title: "TS", img: "" },
        { title: "C#", img: "" },
        { title: "Java", img: "" },
        { title: "Python", img: "" },
        { title: "React", img: "" },
        { title: "Next", img: "" },
        { title: ".Net", img: "" },
        { title: "Unity", img: "" },
        { title: "Node", img: "" },
        { title: "HTML", img: "" },
        { title: "CSS", img: "" },
        { title: "SCSS", img: "" },
        { title: "Tailwind", img: "" },
        { title: "Webpack", img: "" },
        { title: "Vite", img: "" },
      ],
    },

    experience: { type: "VList", title: undefined, list: [] },

    projects: {
      type: "VList",
      title: undefined,
      list: [
        {
          title: "Conspicuous Ink",
          img: conspicuousink,
          date: "Mar - 2023",
          desc: "Freelanced custom tattoo studio website.\nDeployed to Hostinger.\nTest Line.",
          skills: [
            { title: "HTML", img: "" },
            { title: "CSS", img: "" },
            { title: "JS", img: "" },
            { title: "Firebase", img: "" },
            { title: "GCP", img: "" },
            { title: "Vite", img: "" },
          ],
          link: "https://conspicuous.ink/",
        },
        {
          title: "ResuCraft",
          img: resucraft,
          date: "Oct - 2023",
          desc: "Feature-rich scalable resume crafter.\nDeployed to Vercel.",
          skills: [
            { title: "React", img: "" },
            { title: "SCSS", img: "" },
            { title: "Vite", img: "" },
          ],
          link: "https://resucraft.keadon.dev/",
        },
        {
          title: "Weatherly",
          img: weatherly,
          date: "Apr - 2020",
          desc: "API-driven weather/event forecaster.\nDeployed to GH Pages.",
          skills: [
            { title: "JS", img: "" },
            { title: "SCSS", img: "" },
            { title: "HTML", img: "" },
            { title: "REST", img: "" },
            { title: "Vite", img: "" },
          ],

          link: "https://keadonm.github.io/11-odin-weather-app/",
        },
        {
          title: "Duck Farm",
          img: duckfarm,
          date: "2018 - 2019",
          desc: "Accessible, innovative casual mobile game.\nDeployed to iOS and Android.",
          skills: [
            { title: "Unity", img: "" },
            { title: "C#", img: "" },
            { title: "Xcode", img: "" },
            { title: "Xcode", img: "" },
            { title: "Android Studio", img: "" },
          ],
          link: "https://www.youtube.com/watch?v=jwxJ7XPa15g",
        },
      ],
    },

    blog: {
      type: "VList",
      title: undefined,
      list: [
        {
          title: "Fluid Responsivity",
          img: "",
          date: "2020",
          desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
          link: "http://google.com/",
        },
      ],
    },
  },
};

export default data;
