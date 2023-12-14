import data from "./data.js";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

export default function Aside() {
  const nameArr = data.info.name.split("");
  const titleArr = data.info.title.split("");
  const blurbArr = data.info.blurb.split(" ");

  return (
    <aside
      id="aside"
      className="flex flex-col justify-between gap-600 text-fluid-600"
    >
      <div id="title-wrapper">
        <div id="name">
          <a
            href="https://github.com/KeadonM"
            className="text-fluid-700 tracking-tighter [&>span]:inline-block"
            target="blank"
          >
            {nameArr.map((e) => (
              <span key={uuidv4()} className="char">
                {e === " " ? "\u00A0" : e}
              </span>
            ))}
          </a>
        </div>

        <div id="title" className="tracking-tighter [&>span]:inline-block">
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
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
        </ul>
      </nav>

      <div id="links-wrapper" className="pb-800">
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
        <div className="text-fluid-500 opacity-50">reach@keadon.dev</div>
      </div>
    </aside>
  );
}
