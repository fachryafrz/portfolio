/* eslint-disable @next/next/no-img-element */
"use client";

import { cn } from "@/src/lib/utils";
import Link from "next/link";
import { PROJECTS_QUERYResult } from "@/sanity.types";
import dayjs from "dayjs";
import toMarkdown from "@sanity/block-content-to-markdown";
import ReactMarkdown from "react-markdown";
import { ArrowUpRight, Github } from "lucide-react";
import { useImageSlider } from "@/src/zustand/image-slider";

export default function Project({
  project,
}: {
  project: PROJECTS_QUERYResult[number];
}) {
  const { open, setOpen, setImages, setSelectedIndex } = useImageSlider();

  const handleSetImagesSlider = (imgIndex: number) => {
    setImages(project.image_path);
    setSelectedIndex(imgIndex);
    setOpen(!open);
  };

  return (
    <div className="group relative -mx-4 flex flex-col gap-4 p-4 transition-all hover:bg-accent/10 lg:hover:!opacity-100 lg:group-hover/projects:opacity-50">
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
        <h3 className="grow text-lg">{`${project.title} · ${project.type}`}</h3>

        {project.github && (
          <Link
            href={project.github}
            className={"z-10 block transition-all hover:text-accent"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Github size={16} />
          </Link>
        )}

        {project.url && (
          <ArrowUpRight
            size={16}
            className="pointer-events-none opacity-0 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100"
          />
        )}
      </div>

      {/* Date */}
      <span className="text-accent">
        {dayjs(project.date).format("MMMM DD, YYYY")}
      </span>

      {/* Description */}
      <div className="prose max-w-none text-description">
        <ReactMarkdown
          components={{
            strong: ({ node, ...props }) => (
              <strong className="text-accent" {...props} />
            ),
          }}
        >
          {toMarkdown(project.shortDescription)}
        </ReactMarkdown>
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech.title}
            className="block w-fit rounded-full bg-accent/20 p-1 px-2 font-fira-code text-sm font-medium text-accent"
          >
            {tech.title}
          </span>
        ))}
      </div>

      {/* Images */}
      <div className="z-10 flex flex-wrap items-center gap-2">
        {project.image_path.map((img, imgIndex) => (
          <button
            key={imgIndex}
            onClick={() => handleSetImagesSlider(imgIndex)}
            className="aspect-[4/3] max-w-[100px] overflow-hidden rounded-lg transition-transform hover:scale-105"
          >
            <img
              src={img}
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
