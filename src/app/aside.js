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

function StringSplit({ arr, type, className = "" }) {
  return (
    <>
      {arr.map((e) => (
        <span key={uuidv4()} className={`split ${type} ${className}`}>
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
      <div
        id="person"
        className="active flex translate-x-[-90%] justify-self-start leading-less med:translate-x-[0%] "
      >
        <div className="hideable med:!scale-100">
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
        </div>

        <button
          className="show-arrow opacity-70 med:hidden"
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
        className="col-span-2 mt-200 text-fluid-400 leading-less tracking-tighter [&>span]:inline-block"
      >
        <StringSplit arr={blurb.arr} type={blurb.type} />
      </div>

      <nav id="nav" className="my-600 hidden desktop:block">
        <ul>
          {Object.keys(data.section).map((key) => {
            const label = key[0].toUpperCase() + key.slice(1);
            return (
              data.section[key].content.length > 0 && (
                <li key={uuidv4()}>
                  <a
                    id={`nav-${key}`}
                    className="nav-item"
                    onClick={(e) => handleNavclick(e, key)}
                  >
                    <StringSplit
                      arr={label.split(char)}
                      type={"char"}
                      className="pointer-events-none"
                    />
                  </a>
                </li>
              )
            );
          })}
        </ul>
      </nav>

      <div
        id="contact"
        className="top col-start-2 row-start-1 flex origin-right translate-x-[90%] justify-self-end whitespace-nowrap med:translate-x-[0%] "
      >
        <button
          className="show-arrow opacity-70 med:hidden"
          onClick={() => {
            document.getElementById("contact").classList.toggle("active");
            document.getElementById("person").classList.toggle("active");
          }}
        >
          <FaArrowLeft className="pointer-events-none" />
        </button>
        <div className="hideable med:!scale-100">
          <div id="links">
            <ul className="flex justify-between gap-400">
              <li>
                <FaEnvelope />
              </li>
              <li>
                <FaPhone />
              </li>
              <li>
                <FaGithub />
              </li>
              <li>
                <FaLinkedin />
              </li>
            </ul>
          </div>

          <div
            id="email"
            className="text-fluid-500 leading-none opacity-50 desktop:leading-normal"
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

function handleNavclick(e, id) {
  const navItem = document.querySelector(".nav-item.active");
  if (navItem !== null) navItem.classList.remove("active");
  e.target.classList.add("active");

  const scrollIntoViewWithOffset = (scrollContainer, selector) => {
    scrollContainer.scrollTo({
      behavior: "smooth",
      top: document.querySelector(selector).offsetTop,
    });
  };

  const container = document.getElementById("scrollable-container");
  const selector = "#" + id;

  scrollIntoViewWithOffset(container, selector);
}
