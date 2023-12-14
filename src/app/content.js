import { SectionHeader, SkillEntry, ListEntry } from "./components.js";
import data from "./data.js";
import { v4 as uuidv4 } from "uuid";

export default function Content() {
  return (
    <main
      id="main"
      className="flex flex-col gap-500 text-fluid-300 [&>section]:space-x-300 "
    >
      <section id="about" className="flex flex-col gap-200 ">
        <SectionHeader title="About Me" />
        {data.about.map((e) => (
          <p key={uuidv4()}>{e}</p>
        ))}
      </section>

      <section id="skills">
        <SectionHeader title="Skills" />
        <ul className="flex gap-200">
          {data.skills.map((e) => (
            <SkillEntry key={uuidv4()} title={e.title} />
          ))}
        </ul>
      </section>

      <section id="experience">
        <SectionHeader title="Experience" />
        <ul>
          {data.experiences.map((e) => (
            <ListEntry
              key={uuidv4()}
              title={e.title}
              date={e.date}
              desc={e.desc}
            />
          ))}
        </ul>
      </section>

      <section id="projects">
        <SectionHeader title="Projects" />
        <ul>
          {data.projects.map((e) => (
            <ListEntry
              key={uuidv4()}
              title={e.title}
              date={e.date}
              desc={e.desc}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

{
  /* <div className="flex-col text-indigo-500">
<div className="text-fluid-600 tracking-tight">
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
</div> */
}
