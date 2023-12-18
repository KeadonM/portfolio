import { Text, VList, HList } from "./components.js";
import data from "../data/data.js";
import { v4 as uuidv4 } from "uuid";
import { FaFilter } from "react-icons/fa";
import { info } from "autoprefixer";

export default function Content({ activeSection }) {
  return (
    <main
      id="main"
      className="flex flex-col pt-700 text-fluid-300 text-light-1 [&>section>.v-list]:space-y-200 [&>section]:pt-400 [null&>section]:space-x-300"
    >
      {Object.keys(data.lists).map((objKey) => {
        const currentList = data.lists[objKey];
        if (currentList.list.length > 0)
          return (
            <section
              id={objKey}
              key={uuidv4()}
              className={activeSection === objKey ? "active-section" : ""}
            >
              {(() => {
                switch (currentList.type) {
                  case "Text":
                    return (
                      <Text title={currentList.title} list={currentList.list} />
                    );
                  case "HList":
                    return (
                      <HList
                        title={currentList.title}
                        list={currentList.list}
                      />
                    );
                  case "VList":
                    return (
                      <VList
                        title={currentList.title}
                        list={currentList.list}
                      />
                    );
                  default:
                    return null;
                }
              })()}
            </section>
          );
      })}

      {/* prettier-ignore */}
      <section id="resume"
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
