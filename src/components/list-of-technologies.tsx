/* eslint-disable @next/next/no-img-element */

export default function ListOfTechnologies({
  technologies,
}: {
  technologies: {
    title: string;
    image_path: string;
  }[];
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech) => (
        <div
          key={tech.title}
          className="flex w-fit p-2 bg-accent/10 items-center gap-1 rounded-lg font-fira-code text-sm font-bold text-accent"
        >
          <img src={tech.image_path} alt="" className="w-6" draggable={false} />
          <span>{tech.title}</span>
        </div>
      ))}
    </div>
  );
}
