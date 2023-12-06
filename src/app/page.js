import { FaGithub, FaWrench } from "react-icons/fa";

export default function Home() {
  return (
    <main className="p-700 flex min-h-screen flex-col bg-zinc-800 ">
      <div className="flex flex-col text-indigo-500">
        <a
          href="https://github.com/KeadonM"
          className="text-fluid-800 flex items-center"
          target="blank"
        >
          Keadon Mitchell&nbsp;
          <FaGithub />
        </a>
        <div className="text-fluid-600 flex items-center text-white">
          Under Construction&nbsp;
          <FaWrench />
        </div>

        <div className="text-fluid-600 mt-500">
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
