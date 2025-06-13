import { PROJECTS_QUERYResult } from "@/sanity.types";
import Project from "./project";
import { client } from "@/src/sanity/lib/client";
import { PROJECTS_QUERY } from "@/src/sanity/lib/queries";

export default async function Projects() {
  const projects: PROJECTS_QUERYResult = await client.fetch(PROJECTS_QUERY);

  return (
    <section className="space-y-2">
      <h2 className="flex items-center gap-2 font-fira-code font-medium text-accent after:block after:h-[0.5px] after:w-full after:bg-accent">
        Projects
      </h2>

      <ul className="group/projects">
        {projects.map((project) => (
          <li
            key={project._id}
            className="border-b border-description/30 last:border-b-0"
          >
            <Project project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
}
