import { SectionHeader, SkillEntry, ListEntry } from "./components.js";
import data from "./data.js";
import { v4 as uuidv4 } from "uuid";
import { FaFilter } from "react-icons/fa";

export default function Content() {
  return (
    <main
      id="main"
      className="flex flex-col gap-500 text-fluid-300 text-light-1 [&>section>.v-list]:space-y-200 [&>section]:space-x-300"
    >
      <section id="about" className="space">
        <SectionHeader title="About Me" />
        <ul className="v-list">
          {data.about.map((e) => (
            <li key={uuidv4()} className="">
              {e}
            </li>
          ))}
        </ul>
      </section>

      <section id="skills">
        <SectionHeader title="Skills" Icon={FaFilter} />
        <ul className="flex flex-wrap gap-200">
          {data.skills.map((e) => (
            <SkillEntry key={uuidv4()} title={e.title} />
          ))}
        </ul>
      </section>

      <section id="experience">
        <SectionHeader title="Experience" />
        <ul className="v-list">
          {data.experiences.map((e) => (
            <ListEntry
              key={uuidv4()}
              title={e.title}
              preview={e.img}
              date={e.date}
              desc={e.desc}
              skills={e.skills}
              link={e.link}
            />
          ))}
        </ul>
      </section>

      <section id="projects">
        <SectionHeader title="Projects" />
        <ul className="v-list">
          {data.projects.map((e) => (
            <ListEntry
              key={uuidv4()}
              title={e.title}
              preview={e.img}
              date={e.date}
              desc={e.desc}
              skills={e.skills}
              link={e.link}
            />
          ))}
        </ul>
      </section>

      <section id="Blog">
        <SectionHeader title="Blog" />
        <ul className="v-list">
          {data.posts.map((e) => (
            <ListEntry
              key={uuidv4()}
              title={e.title}
              date={e.date}
              desc={e.desc}
              link={e.link}
            />
          ))}
        </ul>
      </section>
      <div id="footer-wrapper" className="col-span-full py-400 text-center">
        <footer>Built with Next.js, deployed to Vercel.</footer>
      </div>
    </main>
  );
}
