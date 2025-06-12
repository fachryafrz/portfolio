import { Projects } from "../../../sanity.types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import Project from "./project";
import { client } from "@/src/sanity/lib/client";
import { PROJECTS_QUERY } from "@/src/sanity/lib/queries";

export default async function ProjectAccordion() {
  const projects: Projects[] = await client.fetch(PROJECTS_QUERY);

  return (
    <div>
      <h2 className={`sr-only`}>Projects</h2>

      <Accordion type="multiple">
        {projects.map((project, index) => {
          return (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className={`relative`}
            >
              <AccordionTrigger
                className={`flex-col items-start px-4 hover:px-2 md:flex-row [&_span]:hover:opacity-40`}
              >
                <span className={`text-start text-3xl`}>{project.title}</span>
                <span className={`text-start text-accent sm:text-end`}>
                  {project.type}
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <Project projects={projects} project={project} index={index} />
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
