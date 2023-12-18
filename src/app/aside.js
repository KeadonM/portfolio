import data from "../data/data.js";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

function StringSplit({ arr, type }) {
  return (
    <>
      {arr.map((e) => (
        <span key={uuidv4()} className={`split ${type}`}>
          {e === " " ? "\u00A0" : e}
        </span>
      ))}
    </>
  );
}

export default function Aside({ setActiveSection }) {
  const { char, word } = { char: "", word: " " };
  const name = { arr: data.info.name.split(char), type: "char" };
  const title = { arr: data.info.title.split(char), type: "char" };
  const blurb = { arr: data.info.blurb.split(word), type: "word" };
  const email = { arr: data.info.email.split(char), type: "char" };

  return (
    <aside
      id="aside"
      className="sticky top-0 flex min-h-full flex-col justify-between  self-start pt-600 text-fluid-600 text-light-2"
    >
      <div id="person">
        <div id="name" className="min-w-max">
          <a
            href="https://github.com/KeadonM"
            className="text-fluid-700 tracking-tighter [&>span]:inline-block"
            target="_blank"
          >
            <StringSplit arr={name.arr} type={name.type} />
          </a>
        </div>

        <div
          id="title"
          className="min-w-max tracking-tighter [&>span]:inline-block"
        >
          <StringSplit arr={title.arr} type={title.type} />
        </div>

        <div
          id="blurb"
          className="mt-200 text-fluid-400 tracking-tighter [&>span]:inline-block"
        >
          <StringSplit arr={blurb.arr} type={blurb.type} />
        </div>
      </div>

      <nav id="nav" className="my-600">
        <ul>
          {data.info.nav.map((string) => (
            <li key={uuidv4()}>
              <a
                href={"#" + string.toLowerCase()}
                onClick={() => setActiveSection(string.toLowerCase())}
              >
                <StringSplit arr={string.split(char)} type={"char"} />
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div id="links" className="">
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
          <li>
            <FaPhone />
          </li>
        </ul>
      </div>

      <div id="email" className="text-fluid-500 opacity-50 ">
        <a className="[&>span]:inline-block">
          <StringSplit arr={email.arr} type={email.type} />
        </a>
      </div>
    </aside>
  );
}
