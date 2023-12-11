import { FaGithub, FaWrench } from "react-icons/fa";

export default function Home() {
  return (
    <main className="p-app min-h-screen bg-zinc-800 ">
      <div className=" text-indigo-500">
        <a
          href="https://github.com/KeadonM"
          className="text-fluid-800 items-center tracking-tighter"
          target="blank"
        >
          Keadon Mitchell&nbsp;
          <FaGithub className="inline-block" />
        </a>
        <div className="text-fluid-600 items-center tracking-tighter text-white">
          Under Construction&nbsp;
          <FaWrench className="inline-block" />
        </div>

        <div className="text-fluid-600 mt-500 tracking-tight">
          <a href="https://conspicuous.ink" target="blank">
            Conspicuous Ink
          </a>
          <span className="text-white"> | </span>
          <a href="https://resucraft.keadon.dev/" target="blank">
            ResuCraft
          </a>
          <span className="text-white"> | </span>
          <a
            href="https://keadonm.github.io/11-odin-weather-app/"
            target="blank"
          >
            Weatherly
          </a>
          <span className="text-white"> | </span>
          <a href="https://keadonm.github.io/10-odin-todo-list/" target="blank">
            Tasker
          </a>
          <span className="text-white"> | </span>
          <a
            href="https://keadonm.github.io/12-odin-battleship/"
            target="blank"
          >
            Battleship
          </a>
        </div>
      </div>
    </main>
  );
}
