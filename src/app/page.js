import { FaGithub, FaWrench } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-zinc-800 p-20 ">
      <div className="flex flex-col items-center  text-indigo-500">
        <a className="flex text-5xl" target="blank">
          Keadon Mitchell&nbsp;
          <FaGithub />
        </a>

        <div className="flex text-4xl text-white">
          Under Construction&nbsp;
          <FaWrench />
        </div>

        <div className="mt-8 text-4xl">
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
