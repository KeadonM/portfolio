import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
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
  const img = data.content[0].img;
  return (
    <div
      className="as relative"
      style={{ aspectRatio: `${img.width}/${img.height}` }}
    >
      <Image
        src={img.src}
        alt="Resume"
        fill="true"
        className="rounded-lg opacity-60 transition-opacity duration-500 hover:opacity-100"
      />
    </div>
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
    <li className="skill-entry rounded-lg bg-accent-1 px-100 py-50 text-fluid-300 font-bold text-dark-1 opacity-80">
      {title}
    </li>
  );
}

function ListEntry({ data, className }) {
  return (
    <li className={className}>
      <a
        href={data.link}
        className="flex flex-col justify-between gap-300 med:flex-row"
        target="_blank"
      >
        <div className="flex w-full flex-col justify-between">
          <div className="flex items-center justify-between">
            <h3 className="flex items-center text-fluid-400 text-accent-1">
              {data.title}&nbsp;
              <FaExternalLinkAlt className="inline text-fluid-200" />
            </h3>
            {data.date && <div>{data.date}</div>}
          </div>
          <p className="mb-auto whitespace-pre-wrap">{data.desc}</p>
          {data.skills && <HList data={{ content: data.skills }} />}
        </div>
        {data.img && <PreviewImage img={data.img} />}
      </a>
    </li>
  );
}

function PreviewImage({ img }) {
  return (
    <div
      className="h-preview-mobile scroll-img relative min-w-min shrink-0 rounded-xl bg-cover bg-top opacity-40 transition-opacity duration-0 med:h-auto med:w-3/10"
      style={{
        backgroundImage: `url(${img.src})`,
        animationDuration: `${img.height / img.width}s`,
      }}
    ></div>
  );
}
