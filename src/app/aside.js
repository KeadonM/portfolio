import data from "../data/data.js";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

function StringSplit({ arr, type }) {
  return (
    <>
      {arr.map((e) => (
        <span key={uuidv4()} className={`split ${type}`}>
          {(() => {
            if (type === "char") return e === " " ? "\u00A0" : e;
            else type === "word";
            return e + "\u00A0";
          })()}
        </span>
      ))}
    </>
  );
}

export default function Aside({ setActiveSection, className }) {
  const { char, word } = { char: "", word: " " };
  const name = { arr: data.info.name.split(char), type: "char" };
  const title = { arr: data.info.title.split(char), type: "char" };
  const blurb = { arr: data.info.blurb.split(word), type: "word" };
  const email = { arr: data.info.email.split(char), type: "char" };

  return (
    <aside id="aside" className={`${className}`}>
      <div id="person" className="active leading-less flex translate-x-[-90%] ">
        <div id="name" className="min-w-max">
          <div>
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
        </div>

        <button
          className="med:hidden show-arrow"
          onClick={() => {
            document.getElementById("contact").classList.toggle("active");
            document.getElementById("person").classList.toggle("active");
          }}
        >
          <FaArrowRight className="pointer-events-none" />
        </button>
      </div>

      <div
        id="blurb"
        className="leading-less col-span-2 mt-200 text-fluid-400 tracking-tighter [&>span]:inline-block"
      >
        <StringSplit arr={blurb.arr} type={blurb.type} />
      </div>

      <nav id="nav" className="desktop:block my-600 hidden">
        <ul>
          {data.info.nav.map((string) => (
            <li key={uuidv4()}>
              <a
                href={"#" + string.toLowerCase()}
                // onClick={() => setActiveSection(string.toLowerCase())}
              >
                <StringSplit arr={string.split(char)} type={"char"} />
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div
        id="contact"
        className="med:translate-x-0 top col-start-2 row-start-1 flex translate-x-[90%] justify-self-end whitespace-nowrap"
      >
        <button
          className="med:hidden show-arrow"
          onClick={() => {
            document.getElementById("contact").classList.toggle("active");
            document.getElementById("person").classList.toggle("active");
          }}
        >
          <FaArrowLeft className="pointer-events-none" />
        </button>
        <div className="hideable">
          <div id="links">
            <ul className="flex justify-between gap-400">
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

          <div
            id="email"
            className="desktop:leading-normal text-fluid-500 leading-none opacity-50"
          >
            <a className="[&>span]:inline-block">
              <StringSplit arr={email.arr} type={email.type} />
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
