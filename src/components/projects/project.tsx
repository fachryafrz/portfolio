/* eslint-disable @next/next/no-img-element */
"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { PROJECTS_QUERYResult } from "../../../sanity.types";
import dayjs from "dayjs";
import toMarkdown from "@sanity/block-content-to-markdown";
import { ArrowUpRight, Github } from "lucide-react";
import { useImageSlider } from "@/zustand/image-slider";
import ListOfTechnologies from "../list-of-technologies";
import Description from "../description";

export default function Project({
  project,
}: {
  project: PROJECTS_QUERYResult[number];
}) {
  const { open, setOpen, setImages, setSelectedIndex } = useImageSlider();

  const handleSetImagesSlider = (imgIndex: number) => {
    setImages(
      (project.image_path ?? []).filter(
        (img): img is string => typeof img === "string",
      ),
    );
    setSelectedIndex(imgIndex);
    setOpen(!open);
  };

  return (
    <div className="group hover:bg-accent/10 relative -mx-4 flex flex-col gap-4 p-4 transition-all lg:group-hover/projects:opacity-50 lg:hover:!opacity-100">
      <Link
        href={project.url || ""}
        className={cn(
          "absolute inset-0 block",
          project.url ? "" : "pointer-events-none",
        )}
        rel="noopener noreferrer"
        target="_blank"
      ></Link>

      {/* Name & Type */}
      <div className="flex items-center">
        <h3 className="grow">{`${project.title} · ${project.type}`}</h3>

        {project.github && (
          <Link
            href={project.github}
            className={"hover:text-accent z-10 block transition-all"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Github size={16} />
          </Link>
        )}

        {project.url && (
          <ArrowUpRight
            size={16}
            className="pointer-events-none opacity-0 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
          />
        )}
      </div>

      {/* Date */}
      <span className="text-accent text-sm">
        {dayjs(project.date).format("MMMM DD, YYYY")}
      </span>

      {/* Description */}
      <Description text={toMarkdown(project.shortDescription)} />

      {/* Tech Stack */}
      <ListOfTechnologies technologies={project.technologies} />

      {/* Images */}
      <div className="z-10 grid grid-cols-3 items-center gap-2 @lg:grid-cols-4 @xl:grid-cols-5">
        {project.image_path?.map((img, imgIndex) => (
          <button
            key={imgIndex}
            onClick={() => handleSetImagesSlider(imgIndex)}
            className="aspect-[4/3] cursor-pointer overflow-hidden rounded-lg transition-transform hover:scale-105"
          >
            <img
              src={img as string}
              alt={``}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
