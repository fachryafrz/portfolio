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
          className="flex w-fit items-center gap-2 rounded-lg bg-accent/10 p-2 text-sm text-accent"
        >
          <img src={tech.image_path} alt="" className="w-6" draggable={false} />
          <span>{tech.title}</span>
        </div>
      ))}
    </div>
  );
}
