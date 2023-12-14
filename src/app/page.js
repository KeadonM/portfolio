import Aside from "./aside.js";
import Content from "./content.js";
import "./animation.scss";

export default function Home() {
  return (
    <div id="app-wrapper" className="flex justify-center bg-zinc-800">
      <div
        style={{ gridTemplateColumns: "1.25fr 2fr" }}
        className="mx-app grid min-h-screen max-w-6xl gap-400 text-white"
      >
        <div
          id="nav-wrapper"
          className="sticky top-0 flex min-h-screen self-start py-600"
        >
          <Aside />
        </div>
        <div id="content-wrapper" className="pt-600">
          <Content />
        </div>
        <div id="footer-wrapper" className="col-span-full pb-300 text-center">
          <footer>
            footerfooterfooterfooterfooterfooterfooterfooterfooterfooterfooterfooterfooterfooterfooterfooterfooterfooterfooterfooter
          </footer>
        </div>
      </div>
    </div>
  );
}
