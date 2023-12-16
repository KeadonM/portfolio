import { SectionHeader, SkillEntry, ListEntry } from "./components.js";
import data from "./data.js";
import { v4 as uuidv4 } from "uuid";
import { FaFilter } from "react-icons/fa";
import { info } from "autoprefixer";

export default function Content({ activeSection }) {
  return (
    <main
      id="main"
      className="flex flex-col pt-700 text-fluid-300 text-light-1 [&>section>.v-list]:space-y-200 [&>section]:pt-400 [null&>section]:space-x-300"
    >
      <section
        id="about"
        className={activeSection === "about" ? "active-section" : ""}
      >
        <SectionHeader title="About Me" />
        <ul className="v-list">
          {data.about.map((e) => (
            <li key={uuidv4()} className="">
              {e}
            </li>
          ))}
        </ul>
      </section>

      <section
        id="skills"
        className={activeSection === "skills" ? "active-section" : ""}
      >
        {/* <SectionHeader title="Skills" Icon={FaFilter} /> */}
        <ul className="flex flex-wrap gap-200">
          {data.skills.map((e) => (
            <SkillEntry key={uuidv4()} title={e.title} />
          ))}
        </ul>
      </section>

      {/* <section
        id="experience"
        className={activeSection === "experience" ? "active-section" : ""}
      >
        <SectionHeader title="Experience" />
        <ul className="v-list">
          {data.experiences.map((e) => (
            <ListEntry key={uuidv4()} data={e} />
          ))}
        </ul>
      </section> */}

      <section
        id="projects"
        className={activeSection === "projects" ? "active-section" : ""}
      >
        {/* <SectionHeader title="Projects" /> */}
        <ul className="v-list">
          {data.projects.map((e) => (
            <ListEntry key={uuidv4()} data={e} />
          ))}
        </ul>
      </section>

      {/* <section
        id="blog"
        className={activeSection === "blog" ? "active-section" : ""}
      >
        <SectionHeader title="Blog" />
        <ul className="v-list">
          {data.posts.map((e) => (
            <ListEntry key={uuidv4()} data={e} />
          ))}
        </ul>
      </section> */}

      <section
        id="resume"
        className={activeSection === "projects" ? "active-section" : ""}
      >
        <img
          src={data.info.resume.src}
          className="rounded-lg opacity-60 transition-opacity duration-500 hover:opacity-100"
        />
      </section>

      <div id="footer-wrapper" className="col-span-full py-400 text-center">
        <footer>Built with Next.js, deployed to Vercel.</footer>
      </div>
    </main>
  );
}
