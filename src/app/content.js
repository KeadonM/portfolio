import { Text, VList, HList, Resume } from "./contentComponents.js";
import { FaWrench } from "react-icons/fa";
import data from "../data/data.js";
import { v4 as uuidv4 } from "uuid";

export default function Content({ activeSection, className }) {
  return (
    <main
      id="main"
      className={`flex flex-col gap-400 text-fluid-300  ${className}`}
    >
      {Object.keys(data.section).map((objKey) => {
        const currentList = data.section[objKey];
        if (currentList.content.length > 0)
          return (
            <section id={objKey} key={uuidv4()} className="content-section">
              {(() => {
                const contentData = {
                  title: currentList.title,
                  content: currentList.content,
                };
                switch (currentList.type) {
                  case "Text":
                    return <Text data={contentData} />;
                  case "HList":
                    return <HList data={contentData} />;
                  case "VList":
                    return <VList data={contentData} />;
                  case "Resume":
                    return <Resume data={contentData} />;

                  default:
                    return null;
                }
              })()}
            </section>
          );
      })}

      <div id="footer-wrapper" className="col-span-full pb-400 text-center">
        <footer>
          <div id="footer-contact" className="text-fluid-400">
            <a>reach@keadon.dev</a>
          </div>
          <div>
            Currently under construction&nbsp;
            <FaWrench className="inline" />
          </div>
          <div>Built with Next.js, deployed to Vercel.</div>
        </footer>
      </div>
    </main>
  );
}
