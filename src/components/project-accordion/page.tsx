"use client";

import { projects as rawProjects } from "@/data/projects";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import Project from "./project";

export default function ProjectAccordion() {
  const projects = rawProjects.slice().reverse();

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
                <span className={`text-3xl text-start`}>{project.name}</span>
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
