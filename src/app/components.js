import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import { IconContext } from "react-icons";
import { FaExternalLinkAlt } from "react-icons/fa";

export function Text({ data }) {
  const { title, content } = data;
  return (
    <>
      {title && <SectionHeader title={title} />}
      <div className="text space-y-100">
        {content.map((e) => (
          <p key={uuidv4()} className={"fade-element"}>
            {e}
          </p>
        ))}
      </div>
    </>
  );
}

export function HList({ data }) {
  const { title, content } = data;
  return (
    <>
      {title && <SectionHeader title={title} />}
      <ul className="h-list fade-element flex flex-wrap gap-100">
        {content.map((e) => (
          <SkillEntry key={uuidv4()} title={e.title} />
        ))}
      </ul>
    </>
  );
}

export function VList({ data }) {
  const { title, content } = data;
  return (
    <>
      {title && <SectionHeader title={title} />}
      <ul className="v-list flex flex-col gap-400">
        {content.map((e) => (
          <ListEntry
            key={uuidv4()}
            data={e}
            className="fade-element list-entry"
          />
        ))}
      </ul>
    </>
  );
}

export function Resume({ data }) {
  const { title, content } = data;
  return (
    <img
      src={content[0].img.src}
      className="rounded-lg opacity-60 transition-opacity duration-500 hover:opacity-100"
    />
  );
}

function SectionHeader({ title, Icon }) {
  return (
    <h2 className="fade-element mb-200 text-fluid-500 leading-none text-accent-1">
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

function SkillEntry({ title, img }) {
  return (
    <li className="button rounded-lg bg-accent-1 px-100 py-50 text-fluid-300 font-bold text-dark-1 opacity-80">
      {title}
    </li>
  );
}

function ListEntry({ data, className }) {
  return (
    <li className={className}>
      <a href={data.link} className="flex gap-300" target="_blank">
        {/* <p className="min-w-min">{date}</p> */}
        {/* <div className="h-400 w-400 text-accent-1"></div> */}

        <div className="flex flex-col justify-between">
          <h3 className="flex items-center text-fluid-400 text-accent-1">
            {data.title}&nbsp;
            <FaExternalLinkAlt className="inline text-fluid-200" />
          </h3>
          <p className="mb-auto whitespace-pre-wrap">{data.desc}</p>
          {data.skills !== undefined && (
            <HList data={{ content: data.skills }} />
          )}
        </div>

        {data.img !== "" && (
          <div
            className="scroll-img relative ml-auto w-3/10 min-w-min shrink-0 rounded-xl bg-cover bg-top opacity-40 transition-opacity duration-0"
            style={{
              backgroundImage: `url(${data.img.src})`,
              animationDuration: `${data.img.height / data.img.width}s`,
            }}
          ></div>
        )}
      </a>
    </li>
  );
}
