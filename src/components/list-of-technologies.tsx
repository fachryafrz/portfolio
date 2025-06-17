/* eslint-disable @next/next/no-img-element */

export default function ListOfTechnologies({
  technologies,
}: {
  technologies:
    | {
        title: string | null;
        image_path: string | null;
      }[]
    | null;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies?.map((tech) => (
        <div
          key={tech.title}
          className="bg-accent/10 text-accent flex w-fit items-center gap-2 rounded-lg p-2 text-sm"
        >
          {tech.image_path && (
            <img
              src={tech.image_path}
              alt=""
              className="w-6"
              draggable={false}
            />
          )}
          <span>{tech.title}</span>
        </div>
      ))}
    </div>
  );
}
