"use client";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import scrollOpacity from "./scrollEffects.js";
import runAnimation from "./animationController.js";
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
    scrollOpacity();
  }, []);

  return (
    <div className="flex h-full justify-center">
      <div
        id="scrollable-container"
        className="gradient-container flex justify-center scroll-smooth"
      >
        <div
          id="app-wrapper"
          className="ml-400 mr-200 flex h-min flex-col gap-500 desktop:mx-700 desktop:flex-row desktop:gap-700"
        >
          <Aside
            setActiveSection={setActiveSection}
            className="grid max-w-content-fixed grid-cols-2 pt-600 text-fluid-600 text-light-2 desktop:sticky desktop:top-0 desktop:block desktop:max-w-aside desktop:self-start desktop:pt-700 "
          />
          <Content
            activeSection={activeSection}
            className="max-w-content-fixed text-light-1 desktop:mt-700 desktop:max-w-content desktop:translate-y-[-300%] desktop:pt-600 "
          />
        </div>
      </div>
    </div>
  );
}
