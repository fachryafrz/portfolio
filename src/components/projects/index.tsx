import { PROJECTS_QUERYResult } from "../../../sanity.types";
import Project from "./project";
import { client } from "@/sanity/lib/client";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";

export default async function Projects() {
  const projects: PROJECTS_QUERYResult = await client.fetch(PROJECTS_QUERY);

  return (
    <section className="space-y-2">
      <h2 className="font-fira-code text-accent after:bg-accent flex items-center gap-2 font-medium after:block after:h-[0.5px] after:w-full">
        Projects
      </h2>

      <ul className="group/projects">
        {projects.map((project) => (
          <li
            key={project._id}
            className="border-description/30 border-b last:border-b-0"
          >
            <Project project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
}
