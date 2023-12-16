"use client";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import Aside from "./aside.js";
import Content from "./content.js";
import "./animation.scss";
import runAnimation from "./animationcontroller.js";

export default function Home() {
  console.log("home");
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
        <div id="app-wrapper" className="flex h-min max-w-app gap-700 ">
          <Aside setActiveSection={setActiveSection} />
          <Content activeSection={activeSection} />
        </div>
      </div>
    </div>
  );
}
