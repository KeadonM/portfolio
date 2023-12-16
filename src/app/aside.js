import data from "./data.js";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

export default function Aside({ setActiveSection }) {
  const nameArr = data.info.name.split("");
  const titleArr = data.info.title.split("");
  const blurbArr = data.info.blurb.split(" ");
  const emailArr = data.info.email.split("");

  return (
    <aside
      id="aside"
      className="text-light-2 sticky top-0 flex min-h-full flex-col justify-between gap-600 self-start pt-600 text-fluid-600"
    >
      <div id="title-wrapper">
        <div id="name" className="min-w-max">
          <a
            href="https://github.com/KeadonM"
            className="text-fluid-700 tracking-tighter [&>span]:inline-block"
            target="_blank"
          >
            {nameArr.map((e) => (
              <span key={uuidv4()} className="char">
                {e === " " ? "\u00A0" : e}
              </span>
            ))}
          </a>
        </div>

        <div
          id="title"
          className="min-w-max tracking-tighter [&>span]:inline-block"
        >
          {titleArr.map((e) => (
            <span key={uuidv4()} className="char">
              {e === " " ? "\u00A0" : e}
            </span>
          ))}
        </div>

        <div
          id="blurb"
          className="mt-200 text-fluid-400 tracking-tighter [&>span]:inline-block"
        >
          {blurbArr.map((e) => (
            <span key={uuidv4()} className="word">
              {e + "\u00A0"}
            </span>
          ))}
        </div>
      </div>

      <nav id="nav" className="mb-auto">
        <ul>
          {data.info.nav.map((string) => (
            <li key={uuidv4()}>
              <a
                href={"#" + string.toLowerCase()}
                onClick={() => setActiveSection(string.toLowerCase())}
              >
                {string.split("").map((e) => (
                  <span key={uuidv4()} className="char">
                    {e === " " ? "\u00A0" : e}
                  </span>
                ))}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div id="links-wrapper" className="pb-400">
        <ul className="flex gap-400">
          <li>
            <FaGithub />
          </li>
          <li>
            <FaLinkedin />
          </li>
          <li>
            <FaEnvelope />
          </li>
        </ul>

        <div id="email" className="text-fluid-500 opacity-50 ">
          <a className="[&>span]:inline-block">
            {emailArr.map((e) => (
              <span key={uuidv4()} className="char">
                {e === " " ? "\u00A0" : e}
              </span>
            ))}
          </a>
        </div>
      </div>
    </aside>
  );
}
