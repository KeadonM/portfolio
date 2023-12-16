import Aside from "./aside.js";
import Content from "./content.js";
import "./animation.scss";

export default function Home() {
  return (
    <div className="flex h-full justify-center ">
      <div className="gradient-container flex justify-center p-600">
        <div id="app-wrapper" className="flex h-min max-w-app gap-700">
          <Aside />
          <Content />
        </div>
      </div>
    </div>
  );
}
