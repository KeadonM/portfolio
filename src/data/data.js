// import resume from "../assets/keadon-mitchell-resume.png";

import conspicuousink from "../assets/conspicuous-ink.webp";
import resucraft from "../assets/resucraft.png";
import weatherly from "../assets/weatherly.png";
import duckfarm from "../assets/duckfarm.png";

const data = {
  info: {
    name: "Keadon Mitchell",
    title: "Full Stack Engineer",
    blurb: "I develop beautifully scalable software for the web and beyond.",
    links: {
      email: "link",
      phone: "link",
      github: "https://github.com/KeadonM",
      linkedin: "https://www.linkedin.com/in/keadon/",
    },
    email: "reach@keadon.dev",
  },

  section: {
    about: {
      type: "Text",
      title: "About Me",
      content: [
        "Back in 2010, I wrote my first line of code on my mom's laptop. The rush I got after successfully instructing the computer to simply add a couple of numbers together and print them to the console; I was hooked, and from that moment developing software became my lifelong passion. To me, this isn’t merely a set of technical skills; it’s my canvas to express creativity and a propellant to my strive for continued learning and self-improvement.",
        "Over the years I’ve published mobile games, created personal tools, and deployed various web projects. My robust exploration of software has led to a diverse array of flexible skills. Where these skills will take me, I’m not yet sure. But in the meantime, I continue to hone my craft.",
        "If you haven’t caught me coding you’ll probably catch me bowling, playing games, or jumping down the rabbit hole of some niche topic that’s managed to grasp my curiosity.",
      ],
    },

    skills: {
      type: "HList",
      title: undefined,
      content: [
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

    experience: { type: "VList", title: undefined, content: [] },

    projects: {
      type: "VList",
      title: undefined,
      content: [
        {
          title: "Conspicuous Ink",
          img: conspicuousink,
          desc: "Freelanced custom tattoo studio website.\nDeployed to Hostinger.",
          skills: [
            { title: "HTML", img: "" },
            { title: "CSS", img: "" },
            { title: "JS", img: "" },
            { title: "Firebase", img: "" },
            { title: "GCP", img: "" },
          ],
          link: "https://conspicuous.ink/",
        },
        {
          title: "ResuCraft",
          img: resucraft,
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
          desc: "Accessible, innovative casual mobile game.\nDeployed to iOS and Android.",
          skills: [
            { title: "Unity", img: "" },
            { title: "C#", img: "" },
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
      content: [
        // {
        //   title: "Fluid Responsivity",
        //   date: "2020",
        //   desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
        //   link: "http://google.com/",
        // },
      ],
    },

    // resume: {
    //   type: "Resume",
    //   title: undefined,
    //   content: [
    //     {
    //       img: resume,
    //       link: "http://google.com/",
    //     },
    //   ],
    // },
  },
};

export default data;
