const clrText = "text-green-300";
const clrBG = "bg-green-300";

export function SectionHeader({ title }) {
  return <h2 className={`text-fluid-500 ${clrText}`}>{title}</h2>;
}

export function SkillEntry({ title, img }) {
  return <li>{title}</li>;
}

export function ListEntry({ title, date, desc }) {
  return (
    <li className="flex gap-400">
      <div>
        <p>{date}</p>
        <div className={`h-800 w-800 ${clrBG}`}></div>
      </div>
      <div className="w-4/6 ">
        <h3 className={`text-fluid-400 ${clrText}`}>{title}</h3>
        <p>{desc}</p>
      </div>
    </li>
  );
}
