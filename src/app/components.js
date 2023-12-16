import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import { IconContext } from "react-icons";
import { FaExternalLinkAlt } from "react-icons/fa";

export function SectionHeader({ title, Icon }) {
  return (
    <h2 className="mb-100 text-fluid-500 text-accent-1">
      {Icon && (
        <>
          <Icon className="inline" />
          &nbsp;-&nbsp;
        </>
      )}
      {title}
    </h2>
  );
}

export function SkillEntry({ title, img }) {
  return (
    <li className="button rounded-lg bg-accent-1 px-100 py-50 text-fluid-300 font-bold text-dark-1">
      {title}
    </li>
  );
}

export function ListEntry({ data }) {
  return (
    <a
      href={data.link}
      className="flex justify-between gap-400"
      target="_blank"
    >
      {/* <p className="min-w-min">{date}</p> */}
      {/* <div className="h-400 w-400 text-accent-1"></div> */}

      <div className="">
        <h3 className="flex items-center text-fluid-400 text-accent-1">
          {data.title}&nbsp;
          <FaExternalLinkAlt className="inline text-fluid-200" />
        </h3>
        <p className="whitespace-pre">{data.desc}</p>
        {data.skills !== undefined && (
          <ul className="flex flex-wrap gap-200">
            {data.skills.map((e) => (
              <SkillEntry key={uuidv4()} title={e} />
            ))}
          </ul>
        )}
      </div>

      {data.img !== "" && <img src={data.img.src} alt="" className="img" />}
    </a>
  );
}
