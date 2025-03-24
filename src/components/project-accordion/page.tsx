import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import Project from "./project";
import { client } from "@/sanity/lib/client";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";

export default async function ProjectAccordion() {
  const projects = await client.fetch(PROJECTS_QUERY);

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
                className={`flex-col px-4 items-start md:flex-row hover:px-2 [&_span]:hover:opacity-40`}
              >
                <span className={`text-3xl text-start`}>{project.title}</span>
                <span className={`text-start sm:text-end text-accent`}>
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
