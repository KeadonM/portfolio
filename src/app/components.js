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

export function ListEntry({ title, preview, date, desc, skills }) {
  return (
    <li className="flex gap-400">
      {/* <p className="min-w-min">{date}</p> */}
      {/* <div className="h-400 w-400 text-accent-1"></div> */}

      <div className="">
        <h3 className="flex items-center text-fluid-400 text-accent-1">
          {title}&nbsp;
          <FaExternalLinkAlt className="inline text-fluid-200" />
        </h3>
        <p>{desc}</p>
        {skills !== undefined && (
          <ul className="flex flex-wrap gap-200">
            {skills.map((e) => (
              <SkillEntry key={uuidv4()} title={e} />
            ))}
          </ul>
        )}
      </div>

      {preview !== undefined && (
        <img src={preview.src} alt="" className="img" />
      )}
    </li>
  );
}
