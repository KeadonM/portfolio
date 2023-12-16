"use client";
import { useState } from "react";

import Aside from "./aside.js";
import Content from "./content.js";
import "./animation.scss";

export default function Home() {
  let [activeSection, setActiveSection] = useState("");

  return (
    <div className="flex h-full justify-center">
      <div className="gradient-container flex justify-center scroll-smooth">
        <div id="app-wrapper" className="flex h-min max-w-app gap-700 ">
          <Aside setActiveSection={setActiveSection} />
          <Content activeSection={activeSection} />
        </div>
      </div>
    </div>
  );
}
