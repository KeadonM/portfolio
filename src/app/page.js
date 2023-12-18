"use client";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import runAnimation from "./animationcontroller.js";
import "./styles/animation.scss";

import Aside from "./aside.js";
import Content from "./content.js";

export default function Home() {
  let [activeSection, setActiveSection] = useState("");

  // function handleScroll() {
  //   console.log("scroll");
  //   console.log(activeSection);
  //   setActiveSection("");
  // }

  // useEffect(() => {
  //   console.log("init");
  //   const scrollableContainer = document.getElementById("scrollable-container");
  //   const activeSection = document.getElementsByClassName("active-section")[0];

  //   console.log(scrollableContainer);
  //   console.log(activeSection);

  //   // Define the scroll event handler
  //   const scrollHandler = () => {
  //     console.log("scroll");
  //     activeSection.classList.toggle("active-section");
  //   };

  //   if (activeSection !== undefined) {
  //     // Add the event listener using the defined handler
  //     setTimeout(
  //       () =>
  //         scrollableContainer.addEventListener("scroll", scrollHandler, {
  //           once: true,
  //         }),
  //       1000,
  //     );
  //   }

  //   // Clean up the event listener when the component unmounts
  //   return () => {
  //     if (activeSection !== undefined)
  //       scrollableContainer.removeEventListener("scroll", () =>
  //         activeSection.classList.toggle("active-section"),
  //       );
  //   };
  // }, [activeSection]);

  useEffect(() => {
    runAnimation();
  }, []);

  return (
    <div className="flex h-full justify-center">
      <div
        id="scrollable-container"
        className="gradient-container flex justify-center scroll-smooth"
      >
        <div
          id="app-wrapper"
          className="desktop:flex-row desktop:mx-700 desktop:gap-700 ml-400 mr-200 flex h-min flex-col gap-500"
        >
          <Aside
            setActiveSection={setActiveSection}
            className="desktop:block desktop:sticky desktop:top-0 desktop:self-start desktop:pt-700 desktop:max-w-aside max-w-content-fixed grid grid-cols-2 pt-600 text-fluid-600 text-light-2 "
          />
          <Content
            activeSection={activeSection}
            className="desktop:max-w-content desktop:translate-y-[-300%] desktop:mt-700 desktop:pt-700 max-w-content-fixed text-light-1 "
          />
        </div>
      </div>
    </div>
  );
}
